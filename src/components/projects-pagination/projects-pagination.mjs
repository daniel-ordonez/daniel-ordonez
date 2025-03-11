import html from "./projects-pagination.html?raw";

export class ProjectsPagination extends HTMLElement {
  constructor() {
    super();

    // Attach Shadow DOM
    this.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = html;
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const projectClass = "portfolio__project";
    const projectsPerPage = 2;
    let currentPage = 0;

    const root = this.shadowRoot;
    const content = root.querySelector(".projects-layout");

    const assignedNodes = content
      .querySelector("slot")
      .assignedNodes({ flatten: true });

    const pagination = root.querySelector(".pagination");
    const btnPrev = pagination.children[0];
    const btnNext = pagination.children[1];
    const paginationIndexCurrent = root.querySelector(
      ".pagination-index--current"
    );

    const projects = assignedNodes.filter((node) => {
      return (
        node instanceof HTMLElement && node.classList.contains(projectClass)
      );
    });

    const projectCount =
      Math.ceil(projects.length / projectsPerPage) * projectsPerPage;
    const pages = projectCount / projectsPerPage;

    root.querySelector(".pagination-index--total").innerText = pages;

    content.style.setProperty("--project-count", projectCount);
    content.style.setProperty("--pages", pages);
    content.style.setProperty("--current-page", currentPage);

    const onPageUpdate = () => {
      if (currentPage === 0) {
        btnPrev.classList.add("hidden");
      } else {
        btnPrev.classList.remove("hidden");
      }
      if (currentPage === pages - 1) {
        btnNext.classList.add("hidden");
      } else {
        btnNext.classList.remove("hidden");
      }

      const projectsLeft = projectsPerPage * currentPage;
      const projectsRight = projectsLeft + projectsPerPage;
      for (let i = 0; i < projects.length; i++) {
        if (i >= projectsLeft && i < projectsRight) {
          projects[i].classList.remove("hidden");
        } else {
          projects[i].classList.add("hidden");
        }
      }

      content.style.setProperty("--current-page", currentPage);
      paginationIndexCurrent.innerText = currentPage + 1;
    };

    const nextPage = () => {
      currentPage = (currentPage + 1) % pages;
      onPageUpdate();
    };
    const prevPage = () => {
      currentPage = (currentPage - 1 + pages) % pages;
      onPageUpdate();
    };

    btnNext.addEventListener("click", nextPage);
    btnPrev.addEventListener("click", prevPage);
    onPageUpdate();
  }
}

customElements.define("projects-pagination", ProjectsPagination);
