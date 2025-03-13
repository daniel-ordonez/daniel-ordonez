import html from "./modal-dialog.html?raw";

export class ModalDialog extends HTMLElement {
  constructor() {
    super();

    // Attach Shadow DOM
    this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = html;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  show() {
    document.body.style.overflow = "hidden";
    this.dialog.showModal();
    this.container.animate(
      {
        opacity: [0, 1],
        transform: ["translateY(100px)", "translateY(0px)"],
      },
      {
        duration: 1000,
        easing: "cubic-bezier(0.25, 1, 0.5, 1)",
        fill: "both",
      }
    );
  }

  async hide() {
    const exitAnimation = this.container.animate(
      {
        opacity: [1, 0],
        transform: ["translateY(0px)", "translateY(100px)"],
      },
      {
        duration: 1000,
        easing: "ease-in-out",
        fill: "both",
      }
    );
    await exitAnimation.finished;
    this.dialog.close();
    exitAnimation.cancel();
    document.body.style.overflow = "";
  }

  /**
   * TODO: listen for assignedNodes changes to update dialog?
   */
  connectedCallback() {
    const root = this.shadowRoot;
    const container = root.querySelector(".dialog-container");
    this.container = container;

    // pass elements into dialog
    const assignedNodes = root
      .querySelector("slot")
      .assignedNodes({ flatten: true })
      .filter((node) => node instanceof HTMLElement);
    if (assignedNodes.length) {
      if (assignedNodes[0].tagName === "DIALOG") {
        assignedNodes[0].replaceWith(...assignedNodes[0].children);
      }
    }

    const dialog = root.querySelector(".modal-dialog");
    this.dialog = dialog;

    const btnClose = root.querySelector(".close-dialog");
    btnClose.addEventListener("click", () => {
      this.hide();
    });
  }
}

customElements.define("modal-dialog", ModalDialog);
