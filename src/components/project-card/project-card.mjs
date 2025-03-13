import html from "./project-card.html?raw";

export class ProjectCard extends HTMLElement {
  constructor() {
    super();

    // Attach Shadow DOM
    this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = html;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  loadProject(project) {
    const {
      thumb,
      title,
      projectType,
      projectYear,
      projectTimeline,
      projectLinkLabel,
      projectLinkAnchor,
      about,
      details,
    } = this.elements;
    thumb.src = project.thumbURL;
    title.innerText = project.title;
    projectType.innerText = project.type || "";
    projectYear.innerText = project.year || "";
    projectTimeline.innerText = project.timeline || "";
    projectLinkLabel.innerText = project.link?.label || "";
    projectLinkAnchor.href = project.link?.URL || "#!";

    about.textContent = "";
    if (project?.about?.length) {
      project.about.forEach((paragraph) => {
        if (paragraph.title) {
          const title = document.createElement("strong");
          title.innerText = paragraph.title;
          about.appendChild(title);
        }
        if (paragraph.content) {
          const text = document.createElement("p");
          text.innerText = paragraph.content;
          about.appendChild(text);
        }
      });
    }

    details.textContent = "";
    if (project?.details?.length) {
      project.details.forEach((detail) => {
        const column = document.createElement("div");
        column.classList.add("info-tag");
        details.appendChild(column);

        if (detail.title) {
          const title = document.createElement("strong");
          title.innerText = detail.title;
          column.appendChild(title);
        }
        if (detail?.content?.length) {
          detail.content.forEach((line) => {
            const text = document.createElement("small");
            text.innerText = line;
            column.appendChild(text);
          });
        }
      });
    }
  }

  connectedCallback() {
    const root = this.shadowRoot;
    const thumb = root.querySelector(".project__thumb img");
    const title = root.querySelector(".project__title");
    const info = root.querySelector(".project__info");
    const projectType = info.querySelector(".tag--project small");
    const projectYear = info.querySelector(".tag--year small");
    const projectTimeline = info.querySelector(".tag--timeline small");
    const projectLinkAnchor = info.querySelector(".tag--link a");
    const projectLinkLabel = projectLinkAnchor.querySelector("small");
    const about = root.querySelector(".project__about");
    const details = root.querySelector(".project__details");
    this.elements = {
      thumb,
      title,
      projectType,
      projectYear,
      projectTimeline,
      projectLinkAnchor,
      projectLinkLabel,
      about,
      details,
    };
  }
}

customElements.define("project-card", ProjectCard);
