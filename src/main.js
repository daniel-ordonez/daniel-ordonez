import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const setupContactDialog = () => {
  // Add functionality to buttons
  const contactBtn = document.getElementById("contact-btn");
  const dialog = document.getElementById("contact-dialog");
  const form = dialog.querySelector("form");
  form?.addEventListener("submit", async (e) => {
    e.preventDefault();
    // Validate form
    const isValid = form.checkValidity();
    if (isValid) {
      // Submit form
      const formData = new FormData(e.target);
      const request = fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      await request;
      closeDialog();
    }
  });
  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.show();
  });
};

const onHomeAnimationEnd = () => {
  // Check if device supports hover
  const supportsHover = window.matchMedia("(hover)").matches;

  if (supportsHover) {
    // Add animation to hover
    const headline = document.getElementById("headline");
    if (headline) {
      const title = document.getElementById("headline-title");
      const svg = title?.querySelector("svg");
      const group = svg?.children[0] || [];
      const word = Array.from(group.children);
      word.forEach((letter, index) => {
        letter.style.setProperty("--index", index);
      });
      const copy = group.cloneNode(true);
      svg.appendChild(copy);
      svg.classList.add("rotate");

      // if mouse is inside
      if (headline.matches(":hover")) {
        // hide first animation (triggers automatically)
        group.style.opacity = 0;
        const lastItem = group.children[group.children.length - 1];
        const onFirstTransitionEnd = () => {
          group.style.opacity = "";
          lastItem.removeEventListener("transitionend", onFirstTransitionEnd);
        };
        lastItem.addEventListener("transitionend", onFirstTransitionEnd);
      }
    }
    // Add animation to menu items
    const menuItems = Array.from(document.querySelectorAll("a.hover"));
    menuItems.forEach((item) => {
      const child = item.querySelector("span").cloneNode(true);
      item.appendChild(child);
    });
  }

  setupContactDialog();
  setupPorfolio();
};

const animateHome = () => {
  const main = document.querySelector("main");
  const title = document.getElementById("headline-title");
  const subtitle = document.getElementById("headline-text");
  const tl = gsap.timeline();
  main.style.overflow = "hidden";
  tl.eventCallback("onComplete", () => {
    main.style.overflow = "";
    onHomeAnimationEnd();
  });

  // Setup animation timeline
  tl.fromTo(
    title,
    {
      scale: 1.5,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      ease: "expo.inOut",
      duration: 2,
    }
  ).fromTo(
    subtitle,
    {
      opacity: 0,
      translateY: "2em",
    },
    {
      ease: "expo.inOut",
      duration: 2,
      opacity: 1,
      translateY: 0,
    },
    "-=2"
  );

  const animateMenu = (tl) => {
    const nav = document.getElementById("header-nav");
    const items = Array.from(nav?.children || []);
    if (items.length >= 2) {
      const left = items[0];
      const right = items[items.length - 1];
      items.pop();
      items.shift();
      tl.fromTo(
        left,
        {
          opacity: 0,
          translateX: "-2rem",
        },
        {
          opacity: 1,
          translateX: 0,
        },
        "<"
      );
      tl.fromTo(
        right,
        {
          opacity: 0,
          translateX: "2rem",
        },
        {
          opacity: 1,
          translateX: 0,
        },
        "<"
      );
    }
    items.forEach((i) => {
      tl.fromTo(
        i,
        {
          opacity: 0,
          translateY: "-1rem",
        },
        {
          opacity: 1,
          translateY: 0,
        },
        "<"
      );
    });
  };
  const animatePic = (tl) => {
    const pic = document.getElementById("headline-pic");
    const bg = pic.querySelector(".pic__bg");
    const img = pic.querySelector(".pic__img");

    tl.fromTo(
      bg,
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 0.6,
      },
      "-=.2"
    ).fromTo(
      img,
      {
        opacity: 0,
        translateY: "50%",
      },
      {
        opacity: 1,
        translateY: 0,
        duration: 1,
      },
      "-=.2"
    );
  };
  const animateSocial = (tl) => {
    const social = document.getElementById("social");
    const items = social?.querySelectorAll(".social-item") || [];
    items.forEach((i) => {
      tl.fromTo(
        i,
        {
          opacity: 0,
          translateY: "-1rem",
        },
        {
          opacity: 1,
          translateY: 0,
          duration: 0.4,
        },
        "-=.3"
      );
    });
  };
  const animateFoot = (tl) => {
    const foot = document.getElementById("headline-foot");
    const items = foot?.querySelectorAll(".info-item") || [];
    items.forEach((i) => {
      tl.fromTo(
        i,
        {
          opacity: 0,
          translateY: "1rem",
        },
        {
          opacity: 1,
          translateY: 0,
          duration: 0.5,
        },
        "-=.3"
      );
    });
  };

  animatePic(tl);
  animateSocial(tl);
  animateFoot(tl);
  animateMenu(tl);
};

const setupPorfolio = () => {
  // Take over menu option - to prevent URL changing (/#portfolio)
  const anchorToPortfolio = document.getElementById("anchor-to-porfolio");
  anchorToPortfolio.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("portfolio")?.scrollIntoView({
      behavior: "smooth",
    });
  });
  // Setup animation
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    "#portfolio",
    { autoAlpha: 0, translateY: "150px" }, // Initial state: hidden (opacity 0, visibility hidden)
    {
      autoAlpha: 1, // Final state: visible (opacity 1)
      translateY: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: "#portfolio",
        start: "top 80%", // When the top of #portfolio reaches 50% of the viewport
        end: "top 20%", // When #portfolio reaches the top of the viewport
        toggleActions: "play none reverse none",
        // "play" when entering, "reverse" when leaving
        scrub: true,
        onEnter: () => {
          document.getElementById("portfolio")?.scrollIntoView({
            behavior: "smooth",
          });
        },
        onLeaveBack: () => {
          // Scroll back to the header section when #portfolio fades out
          document.querySelector("header")?.scrollIntoView({
            behavior: "smooth",
          });
        },
      },
    }
  );
  const cachedProjectData = new Map();
  const prefetchProjectData = async (projectName) => {
    try {
      const request = await fetch(
        `/public/static/projects/${projectName}.json`
      );
      const data = await request.json();
      return data;
    } catch (error) {
      console.log("error fetching", projectName);
      console.log(error.message);
    }
  };
  const showProjectDialog = async (projectName) => {
    const dialog = document.getElementById("project-dialog");
    const projectData =
      cachedProjectData.get(projectName) instanceof Promise
        ? await cachedProjectData.get(projectName)
        : cachedProjectData.get(projectName);
    const projectCard = dialog.querySelector("project-card");
    projectCard?.loadProject(projectData);
    dialog?.show();
  };
  const preloadDataOnHover = (e) => {
    // get project element
    const project = e.target.classList.contains("portfolio__project")
      ? e.target
      : e.target.closest(".portfolio__project");
    // get project name to fetch data
    const projectName = project.dataset?.name;
    if (!projectName) return;
    // prefetch project data
    const dataLoaded = prefetchProjectData(projectName);
    const thumbURL = project.querySelector("img").src;
    const placeholder = new Promise(async (resolve) => {
      const loadedData = await dataLoaded;
      const data = { ...loadedData, thumbURL };
      cachedProjectData.set(projectName, data);
      resolve(data);
    });
    cachedProjectData.set(projectName, placeholder);
    // show project dialog when clicked
    project.addEventListener("click", async (e) => {
      e.preventDefault();
      showProjectDialog(projectName);
    });
  };
  const portfolioProjects = document.querySelectorAll(".portfolio__project");

  portfolioProjects.forEach((project) => {
    project.addEventListener("mouseover", preloadDataOnHover, {
      once: true,
    });
  });
};

// Observes which sections is shown first and sets up animation accordingly
const setupSections = () => {
  const main = document.querySelector("main");
  const portfolio = document.getElementById("portfolio");
  const observer = new IntersectionObserver(
    (entries) => {
      const intersectingSection = entries.find((entry) => entry.isIntersecting);
      if (intersectingSection.target === main) {
        animateHome();
      } else {
        onHomeAnimationEnd();
      }
      observer.disconnect();
    },
    { threshold: 0.5 }
  );
  observer.observe(main);
  observer.observe(portfolio);
};

const onLoad = async () => {
  // make content visible
  document.getElementById("app")?.classList.remove("hidden");
  setupSections();
};

document.addEventListener("DOMContentLoaded", onLoad);
