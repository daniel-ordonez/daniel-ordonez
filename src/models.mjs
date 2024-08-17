import * as THREE from "three";

export const makeTorus = (canvas) => {
  const w = 640;
  const h = 640;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, w / h, 1, 100);
  camera.position.z = 30;
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas,
  });
  renderer.setSize(w, h);

  const geometry = new THREE.TorusGeometry(6, 1.5, 10, 20);
  const wireMaterial = new THREE.MeshBasicMaterial({
    color: 0xd4fc79,
    wireframe: true,
    transparent: true,
    opacity: 0.2,
  });
  const torus = new THREE.Mesh(geometry, wireMaterial);
  torus.rotateY(10);
  torus.rotateX(45);
  scene.add(torus);

  function draw() {
    requestAnimationFrame(draw);
    torus.rotation.y += 0.002;
    torus.rotation.x += 0.002;
    torus.rotation.z -= 0.001;
    renderer.render(scene, camera);
  }
  draw();
};

export const makeHeart = (canvas) => {
  const w = 380;
  const h = 380;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, w / h, 1, 100);
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas,
  });
  renderer.setSize(w, h);

  const shape = new THREE.Shape();
  shape.moveTo(0, 1.5);
  shape.bezierCurveTo(2, 3.5, 4, 1.5, 2, -0.5);
  shape.lineTo(0, -2.5);
  shape.lineTo(-2, -0.5);
  shape.bezierCurveTo(-4, 1.5, -2, 3.5, 0, 1.5);

  const settings = {
    steps: 1,
    depth: 1,
    bevelEnabled: true,
    bevelThickness: 1.4,
    bevelSize: 1.3,
    bevelSegments: 2,
  };
  const geometry = new THREE.ExtrudeGeometry(shape, settings);
  const Nmaterial = new THREE.MeshNormalMaterial();
  const Pmaterial = new THREE.MeshPhysicalMaterial({
    roughness: 0,
    transmission: 1,
    thickness: 0.8,
    opacity: 0.8,
    transparent: true,
  });
  const heart = new THREE.Mesh(geometry, Nmaterial);
  const heart2 = new THREE.Mesh(geometry, Pmaterial);
  heart.add(heart2);
  heart2.scale.setScalar(1.15);

  scene.add(heart);

  const light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(0, 10, 10);
  scene.add(light);

  const draw = () => {
    renderer.render(scene, camera);
  };
  return { heart, camera, draw };
};

export class Heart {
  constructor(canvas) {
    const { heart, camera, draw } = makeHeart(canvas);
    this.heart = heart;
    this.camera = camera;

    const baseRotationSpeed = 0.003;
    this.baseRotationSpeed = baseRotationSpeed;
    this.rotationSpeed = baseRotationSpeed;
    this.draw = () => {
      if (this.rotation) {
        this.heart.rotation.y += this.rotationSpeed;
        requestAnimationFrame(this.draw);
      }
      draw();
    };

    // at least 60fps
    this.fps = 60;
    getFPS().then((fps) => {
      this.fps = Math.max(fps, 60);
    });

    const query = window.matchMedia("(max-width: 1024px)");
    const adjustZoom = () => {
      if (query.matches) {
        this.zoomIn();
      } else {
        this.zoomOut();
      }
      this.draw();
    };
    query.addEventListener("change", adjustZoom);

    adjustZoom();
  }
  rampUpRotation() {
    if (this.rotationSpeed > this.baseRotationSpeed) return;
    const maxSpeed = 0.15;
    const fps = this.fps;
    const t = 1;
    const steps = t * fps;
    let count = 1;
    let x = count / steps;
    let acc = 0;
    let base = this.baseRotationSpeed;

    const accelerateRotation = () => {
      count++;
      x = count / steps;
      acc = easeInOutQuart(x) * maxSpeed;
      this.rotationSpeed = base + acc;
      if (count >= steps) {
        count = steps;
        requestAnimationFrame(decelerateRotation);
        return;
      }
      requestAnimationFrame(accelerateRotation);
    };
    const decelerateRotation = () => {
      count--;
      x = count / steps;
      acc = easeInOutSine(x) * maxSpeed;
      this.rotationSpeed = base + acc;
      if (count <= 0) {
        this.rotationSpeed = base;
        return;
      }
      requestAnimationFrame(decelerateRotation);
    };
    accelerateRotation();
  }
  rotate(value = true) {
    this.rotation = value;
  }
  zoomIn() {
    this.camera.position.z = 30;
  }
  zoomOut() {
    this.camera.position.z = 20;
  }
}

const easeInOutQuart = (x) => {
  return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
};
const easeInOutSine = (x) => {
  return -(Math.cos(Math.PI * x) - 1) / 2;
};

const getFPS = (sampleRate = 1000) =>
  new Promise((resolve) => {
    let fps = 0;
    let lastCalledTime = Date.now();
    let frameCount = 0;

    const calculateFPS = () => {
      const now = Date.now();
      frameCount++;
      // Calculate the time difference since the last frame
      const timeDiff = now - lastCalledTime;
      // If a second has passed, calculate FPS
      if (timeDiff >= sampleRate) {
        fps = ((frameCount / timeDiff) * sampleRate * 1000) / sampleRate;
        resolve(Math.round(fps));
      }
      // Request the next frame
      requestAnimationFrame(calculateFPS);
    };
    calculateFPS();
  });

const getQuadraticFunction = (t, h) => {
  const w = t / 2;
  return (x) => h * (1 - Math.pow((x - w) / w, 2));
};

export const makeEarth = (canvas) => {
  const w = 640;
  const h = 640;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, w / h, 1, 100);
  camera.position.z = 30;
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas,
  });
  renderer.setSize(w, h);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;

  const loader = new THREE.TextureLoader();

  const earthGroup = new THREE.Group();
  earthGroup.rotation.z = (-23.4 * Math.PI) / 180;
  scene.add(earthGroup);

  const detail = 12;
  const geometry = new THREE.IcosahedronGeometry(8, detail);
  const material = new THREE.MeshPhongMaterial({
    map: loader.load("./textures/00_earthmap1k.jpg"),
    specularMap: loader.load("./textures/02_earthspec1k.jpg"),
    bumpMap: loader.load("./textures/01_earthbump1k.jpg"),
    bumpScale: 0.05,
  });
  // material.map.colorSpace = THREE.SRGBColorSpace;
  const earthMesh = new THREE.Mesh(geometry, material);
  earthGroup.add(earthMesh);

  const lightsMat = new THREE.MeshBasicMaterial({
    map: loader.load("./textures/03_earthlights1k.jpg"),
    blending: THREE.AdditiveBlending,
  });
  const lightsMesh = new THREE.Mesh(geometry, lightsMat);
  earthGroup.add(lightsMesh);

  const cloudsMat = new THREE.MeshStandardMaterial({
    map: loader.load("./textures/04_earthcloudmap.jpg"),
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    alphaMap: loader.load("./textures/05_earthcloudmaptrans.jpg"),
    // alphaTest: 0.3,
  });
  const cloudsMesh = new THREE.Mesh(geometry, cloudsMat);
  cloudsMesh.scale.setScalar(1.003);
  earthGroup.add(cloudsMesh);

  const fresnelMat = getFresnelMat();
  const glowMesh = new THREE.Mesh(geometry, fresnelMat);
  glowMesh.scale.setScalar(1.02);
  earthGroup.add(glowMesh);

  const sunLight = new THREE.DirectionalLight(0xffffff, 2.0);
  sunLight.position.set(-2, 0.5, 1.5);
  scene.add(sunLight);

  let rotationSpeed = 0.0005;
  function draw() {
    requestAnimationFrame(draw);
    earthMesh.rotation.y += rotationSpeed;
    lightsMesh.rotation.y += rotationSpeed;
    cloudsMesh.rotation.y += rotationSpeed * 1.5;
    glowMesh.rotation.y += rotationSpeed;
    renderer.render(scene, camera);
  }
  draw();
};

const getFresnelMat = (rimHex = 0x00c6fb, facingHex = 0x000000) => {
  const uniforms = {
    color1: { value: new THREE.Color(rimHex) },
    color2: { value: new THREE.Color(facingHex) },
    fresnelBias: { value: 0.1 },
    fresnelScale: { value: 1.0 },
    fresnelPower: { value: 4.0 },
  };
  const vs = `
  uniform float fresnelBias;
  uniform float fresnelScale;
  uniform float fresnelPower;
  
  varying float vReflectionFactor;
  
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
  
    vec3 worldNormal = normalize( mat3( modelMatrix[0].xyz, modelMatrix[1].xyz, modelMatrix[2].xyz ) * normal );
  
    vec3 I = worldPosition.xyz - cameraPosition;
  
    vReflectionFactor = fresnelBias + fresnelScale * pow( 1.0 + dot( normalize( I ), worldNormal ), fresnelPower );
  
    gl_Position = projectionMatrix * mvPosition;
  }
  `;
  const fs = `
  uniform vec3 color1;
  uniform vec3 color2;
  
  varying float vReflectionFactor;
  
  void main() {
    float f = clamp( vReflectionFactor, 0.0, 1.0 );
    gl_FragColor = vec4(mix(color2, color1, vec3(f)), f);
  }
  `;
  const fresnelMat = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vs,
    fragmentShader: fs,
    transparent: true,
    blending: THREE.AdditiveBlending,
    // wireframe: true,
  });
  return fresnelMat;
};
