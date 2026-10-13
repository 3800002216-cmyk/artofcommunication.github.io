/**
 * Presentation & Communication Academy
 * Main Application Orchestrator
 */

window.PCA_APP = {
  init() {
    // Render static shells
    if (window.PCA_NAVBAR) window.PCA_NAVBAR.render();
    if (window.PCA_FOOTER) window.PCA_FOOTER.render();

    // Register Routes
    const router = window.PCA_ROUTER;
    if (router) {
      router.addRoute("home", (c) => window.PCA_HOME_VIEW.render(c));
      router.addRoute("courses", (c) => window.PCA_COURSES_VIEW.render(c));
      router.addRoute("course/:id", (c, p) => window.PCA_COURSE_DETAIL_VIEW.render(c, p));
      router.addRoute("lesson/:courseId/:lessonId", (c, p) => window.PCA_LESSON_PLAYER_VIEW.render(c, p));
      router.addRoute("quiz/:courseId", (c, p) => window.PCA_QUIZ_VIEW.render(c, p));
      router.addRoute("dashboard", (c) => window.PCA_DASHBOARD_VIEW.render(c));
      router.addRoute("certificate/:courseId", (c, p) => window.PCA_CERTIFICATE_VIEW.render(c, p));
      router.addRoute("trainer", (c) => window.PCA_TRAINER_VIEW.render(c));
      router.addRoute("resources", (c) => window.PCA_RESOURCES_VIEW.render(c));
      router.addRoute("contact", (c) => window.PCA_CONTACT_VIEW.render(c));
      router.addRoute("*", (c) => window.PCA_HOME_VIEW.render(c));

      // Trigger initial route
      router.handleRouting();
    }
  },

  showToast(message, type = "info") {
    let container = document.getElementById("toast-container");
    if (!container) {
      container = document.createElement("div");
      container.id = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;

    let iconSvg = "";
    if (type === "success") {
      iconSvg = `<svg class="icon icon-sm" viewBox="0 0 24 24" style="color: var(--color-success);"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    } else if (type === "error") {
      iconSvg = `<svg class="icon icon-sm" viewBox="0 0 24 24" style="color: var(--color-error);"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>`;
    } else {
      iconSvg = `<svg class="icon icon-sm" viewBox="0 0 24 24" style="color: var(--color-accent);"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `
      <div style="flex-shrink: 0; margin-top: 2px;">${iconSvg}</div>
      <div style="font-size: 0.9rem; font-weight: 500; line-height: 1.4;">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateX(100%)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3800);
  }
};

// Bootstrap application once DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  window.PCA_APP.init();
});
