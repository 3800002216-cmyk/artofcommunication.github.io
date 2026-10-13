/**
 * Presentation & Communication Academy
 * Client-Side Router
 */

(function () {
  class Router {
    constructor() {
      this.routes = {};
      this.currentRoute = null;
      this.currentParams = {};

      window.addEventListener("hashchange", () => this.handleRouting());
      window.addEventListener("DOMContentLoaded", () => this.handleRouting());
    }

    addRoute(pattern, handler) {
      this.routes[pattern] = handler;
    }

    navigate(hash) {
      if (!hash.startsWith("#")) {
        hash = "#" + hash;
      }
      window.location.hash = hash;
    }

    handleRouting() {
      const fullHash = window.location.hash.slice(1) || "home";
      const [path] = fullHash.split("?");

      // Match routes
      let matchedHandler = null;
      let matchedParams = {};

      for (const pattern in this.routes) {
        const patternParts = pattern.split("/");
        const pathParts = path.split("/");

        if (patternParts.length === pathParts.length) {
          let match = true;
          const params = {};

          for (let i = 0; i < patternParts.length; i++) {
            if (patternParts[i].startsWith(":")) {
              const paramName = patternParts[i].slice(1);
              params[paramName] = decodeURIComponent(pathParts[i]);
            } else if (patternParts[i] !== pathParts[i]) {
              match = false;
              break;
            }
          }

          if (match) {
            matchedHandler = this.routes[pattern];
            matchedParams = params;
            break;
          }
        }
      }

      if (!matchedHandler && this.routes["*"]) {
        matchedHandler = this.routes["*"];
      }

      if (matchedHandler) {
        this.currentRoute = path;
        this.currentParams = matchedParams;

        // Render main content
        const container = document.getElementById("main-content");
        if (container) {
          matchedHandler(container, matchedParams);
        }

        // Update active navigation state
        this.updateNavLinks(path);

        // Scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });

        // Close mobile nav drawer if open
        const drawer = document.getElementById("mobile-nav-drawer");
        if (drawer && drawer.classList.contains("open")) {
          drawer.classList.remove("open");
        }
      }
    }

    updateNavLinks(currentPath) {
      const topRoute = currentPath.split("/")[0];
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach(link => {
        const href = link.getAttribute("href") || "";
        const linkRoute = href.replace("#", "").split("/")[0];
        if (linkRoute === topRoute || (topRoute === "home" && (linkRoute === "" || linkRoute === "home"))) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  }

  window.PCA_ROUTER = new Router();
})();
