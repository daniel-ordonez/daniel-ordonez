import html from "./collapse-section.html?raw";

export class CollapseSection extends HTMLElement {
  constructor() {
    super();

    // Attach Shadow DOM
    this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = html;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["label", "active"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "label") {
      this.shadowRoot.querySelector(".control__label").textContent = newValue;
    }
    if (name == "active") {
      requestAnimationFrame(() => {
        this.toggleActive(!newValue);
      });
    }
  }
  animateExpand = () => {
    return new Promise((resolve) => {
      const container = this.shadowRoot.querySelector(".container");
      const height = container.scrollHeight;
      if (height <= 0) resolve();
      const minDuration = 600;
      const duration = Math.max(minDuration, Math.round(height / 300) * 300);
      const aniContainer = container.animate(
        {
          height: ["0px", `${height}px`],
        },
        {
          duration,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          fill: "both",
        }
      );
      const content = container.querySelector(".content-wrapper");
      const aniContent = content.animate(
        {
          transform: ["translateY(-100%)", "translateY(0)"],
          opacity: [0, 1],
        },
        {
          duration,
          easing: "cubic-bezier(0.25, 1, 0.5, 1)",
          fill: "both",
        }
      );
      Promise.all([aniContainer.finished, aniContent.finished]).then(() => {
        aniContainer.cancel();
        aniContent.cancel();
        resolve();
      });
    });
  };
  animateCollapse = () => {
    return new Promise((resolve) => {
      const container = this.shadowRoot.querySelector(".container");
      const { height } = container.getBoundingClientRect();

      // Check if container is empty
      if (height <= 0) {
        return resolve();
      }

      const content = container.querySelector(".content-wrapper");
      const minDuration = 400;
      const duration = Math.max(minDuration, Math.round(height / 600) * 300);
      const aniContainer = container.animate(
        {
          height: [`${height}px`, "0px"],
        },
        {
          duration,
          easing: "ease-in-out",
          fill: "both",
        }
      );
      const aniContent = content.animate(
        {
          transform: ["translateY(0)", "translateY(-100%)"],
          opacity: [1, 0],
        },
        {
          duration,
          easing: "ease-in-out",
          fill: "both",
        }
      );

      Promise.all([aniContainer.finished, aniContent.finished]).then(() => {
        aniContainer.cancel();
        aniContent.cancel();
        resolve();
      });
    });
  };
  toggleActive = async (active, animate = false) => {
    const ctl = this.shadowRoot.querySelector(".control");
    if (active) {
      ctl.setAttribute("active", "");
      if (animate) {
        await this.animateExpand();
      }
    } else {
      if (animate) {
        await this.animateCollapse();
      }
      ctl.removeAttribute("active");
    }
  };

  connectedCallback() {
    this.addEventListener("click", (e) => {
      if (e.target !== this) return;
      const ctl = this.shadowRoot.querySelector(".control");
      const active = ctl.hasAttribute("active");
      this.toggleActive(!active, true);
    });
  }
}

customElements.define("collapse-section", CollapseSection);
