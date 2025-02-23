import "./style.css";
import { gsap } from "gsap";

const setupContactDialog = () => {
  // Add functionality to buttons
  const contactBtn = document.getElementById("contact-btn");
  const dialog = document.getElementById("contact-dialog");
  const closeBtn = document.querySelector(".close-dialog");
  const card = dialog.querySelector(".dialog-wrapper");
  const form = dialog.querySelector("form");

  const closeDialog = () => {
    gsap.fromTo(
      card,
      {
        opacity: 1,
        translateY: 0,
      },
      {
        opacity: 0,
        translateY: "100px",
        onComplete: () => {
          dialog.close();
        },
      }
    );
  };

  form.addEventListener("submit", async (e) => {
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
    dialog.showModal();
    gsap.fromTo(
      card,
      {
        opacity: 0,
        translateY: "100px",
      },
      {
        opacity: 1,
        translateY: 0,
      }
    );
  });
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeDialog();
  });
};

const onInitialAnimationEnd = () => {
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
      const child = item.firstChild.cloneNode(true);
      item.appendChild(child);
    });
  }
  setupContactDialog();
};

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

const onLoad = () => {
  document.getElementById("app")?.classList.remove("hidden");
  //window.scrollTo({ top: 0, behavior: "instant" });
  const tl = gsap.timeline();
  const title = document.getElementById("headline-title");
  const subtitle = document.getElementById("headline-text");

  // Prevent scroll from appearing between animations
  const main = document.querySelector("main");
  main.style.overflow = "hidden";
  tl.eventCallback("onComplete", () => {
    main.style.overflow = "";
    onInitialAnimationEnd(title);
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
  animatePic(tl);
  animateSocial(tl);
  animateFoot(tl);
  animateMenu(tl);
};

document.addEventListener("DOMContentLoaded", onLoad);
