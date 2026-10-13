/**
 * Presentation & Communication Academy
 * Learning Resources Library Component
 */

window.PCA_RESOURCES_VIEW = {
  activeCategory: "All",
  searchQuery: "",

  render(container) {
    const allResources = window.PCA_RESOURCES || [];

    const renderList = () => {
      const filtered = allResources.filter(res => {
        const matchesCat = this.activeCategory === "All" || res.category === this.activeCategory;
        const matchesSearch = !this.searchQuery || 
          res.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          res.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          res.category.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
      });

      const gridEl = document.getElementById("resources-grid-container");
      const countEl = document.getElementById("resources-count-label");

      if (countEl) countEl.textContent = `Showing ${filtered.length} of ${allResources.length} Resources`;
      if (!gridEl) return;

      if (filtered.length === 0) {
        gridEl.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--color-white); border-radius: var(--radius-lg); border: 1px dashed var(--color-border);">
            <h3>No resources found matching "${this.searchQuery}"</h3>
            <p style="color: var(--color-text-muted); margin-top: 0.5rem;">Try clearing your keyword or selecting a different category.</p>
          </div>
        `;
        return;
      }

      gridEl.innerHTML = filtered.map(res => `
        <div class="resource-card">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.85rem;">
              <span class="badge badge-primary">${res.badge}</span>
              <small style="color: var(--color-text-muted); font-size: 0.775rem;">${res.readTime}</small>
            </div>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.65rem; line-height: 1.35;">${res.title}</h3>
            <p style="font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.55; margin-bottom: 1.25rem;">
              ${res.description}
            </p>
          </div>

          <div style="padding-top: 1rem; border-top: 1px solid var(--color-border-light); display: flex; justify-content: space-between; align-items: center;">
            <span style="font-size: 0.775rem; color: var(--color-primary); font-weight: 600;">${res.category}</span>
            <button class="btn btn-secondary btn-sm btn-open-resource" data-resid="${res.id}">
              <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              View &amp; Download
            </button>
          </div>
        </div>
      `).join("");

      // Hook click events
      document.querySelectorAll(".btn-open-resource").forEach(btn => {
        btn.addEventListener("click", () => {
          const resId = btn.dataset.resid;
          const found = allResources.find(r => r.id === resId);
          if (found) this.openResourceModal(found);
        });
      });
    };

    container.innerHTML = `
      <!-- Hero Banner -->
      <section style="background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%); color: var(--color-white); padding: 3.5rem 0 4rem 0;">
        <div class="container text-center">
          <span class="badge badge-accent" style="margin-bottom: 1rem; font-size: 0.825rem; padding: 0.35rem 0.95rem;">
            Practice Materials &amp; Blueprints
          </span>
          <h1 style="color: #FFFFFF; font-size: 2.75rem; margin-bottom: 1rem;">Communication Resource Library</h1>
          <p style="color: #D3E6FA; font-size: 1.15rem; max-width: 650px; margin: 0 auto;">
            Actionable speech architecture blueprints, STAR answer cheat sheets, nonverbal posture audits, and slide design checklists for daily practice.
          </p>
        </div>
      </section>

      <!-- Main Resources Container -->
      <div class="container" style="padding-top: 2.5rem; padding-bottom: 5rem;">
        <!-- Search & Category Filters -->
        <div class="catalog-filter-bar">
          <div class="catalog-search-row">
            <div class="search-input-wrap">
              <svg class="icon icon-sm search-input-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" id="res-search-input" class="form-control" placeholder="Search resources, templates, checklists, or scripts...">
            </div>
            <div id="resources-count-label" style="display: flex; align-items: center; font-size: 0.9rem; font-weight: 600; color: var(--color-text-muted); white-space: nowrap;">
              Showing 6 of 6 Resources
            </div>
          </div>

          <div class="filter-pills-row">
            <span style="font-size: 0.825rem; font-weight: 700; color: var(--color-primary-dark); min-width: 70px;">Filter:</span>
            <button class="filter-pill res-cat-pill active" data-cat="All">All Resources</button>
            <button class="filter-pill res-cat-pill" data-cat="Speech Templates">Speech Templates</button>
            <button class="filter-pill res-cat-pill" data-cat="Interview Checklists">Interview Checklists</button>
            <button class="filter-pill res-cat-pill" data-cat="Body Language Exercises">Body Language</button>
            <button class="filter-pill res-cat-pill" data-cat="Presentation Guides">Presentation Guides</button>
            <button class="filter-pill res-cat-pill" data-cat="Communication Worksheets">Workplace Communication</button>
            <button class="filter-pill res-cat-pill" data-cat="Public Speaking Tips">Public Speaking Tips</button>
          </div>
        </div>

        <!-- Resources Grid -->
        <div class="resources-grid" id="resources-grid-container"></div>
      </div>

      <!-- Resource Viewer Modal (Embedded Container) -->
      <div id="resource-modal-backdrop" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(8, 43, 82, 0.7); backdrop-filter: blur(4px); z-index: 2000; align-items: center; justify-content: center; padding: 1.5rem;">
        <div style="background: var(--color-white); width: 100%; max-width: 800px; max-height: 85vh; border-radius: var(--radius-xl); display: flex; flex-direction: column; overflow: hidden; box-shadow: var(--shadow-xl);">
          <!-- Modal Header -->
          <div style="padding: 1.5rem 2rem; border-bottom: 1px solid var(--color-border); display: flex; align-items: center; justify-content: space-between; background: var(--color-bg-subtle);">
            <div>
              <span id="modal-res-badge" class="badge badge-primary" style="margin-bottom: 0.25rem;">Template</span>
              <h3 id="modal-res-title" style="font-size: 1.35rem; margin-bottom: 0;">Resource Title</h3>
            </div>
            <button id="modal-res-close" class="btn btn-secondary btn-icon-only" style="border-radius: 50%;" aria-label="Close modal">
              <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <!-- Modal Body Prose -->
          <div style="padding: 2rem; overflow-y: auto; flex-grow: 1;">
            <pre id="modal-res-content" style="white-space: pre-wrap; font-family: var(--font-sans); font-size: 0.95rem; line-height: 1.7; color: var(--color-text-main);"></pre>
          </div>

          <!-- Modal Footer Actions -->
          <div style="padding: 1.25rem 2rem; border-top: 1px solid var(--color-border); display: flex; align-items: center; justify-content: space-between; background: var(--color-bg-subtle); flex-wrap: wrap; gap: 0.75rem;">
            <small style="color: var(--color-text-muted);">Presentation &amp; Communication Academy &bull; Free Educational Material</small>
            <div style="display: flex; gap: 0.75rem;">
              <button class="btn btn-secondary btn-sm" id="modal-btn-copy">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Copy Text
              </button>
              <button class="btn btn-primary btn-sm" id="modal-btn-download">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                Download (.txt)
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Hook search
    const searchInput = document.getElementById("res-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.trim();
        renderList();
      });
    }

    // Hook category pills
    document.querySelectorAll(".res-cat-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        this.activeCategory = pill.dataset.cat;
        document.querySelectorAll(".res-cat-pill").forEach(p => p.classList.remove("active"));
        pill.classList.add("active");
        renderList();
      });
    });

    // Close modal listener
    const backdrop = document.getElementById("resource-modal-backdrop");
    const closeBtn = document.getElementById("modal-res-close");
    if (closeBtn && backdrop) {
      closeBtn.addEventListener("click", () => {
        backdrop.style.display = "none";
      });
      backdrop.addEventListener("click", (e) => {
        if (e.target === backdrop) backdrop.style.display = "none";
      });
    }

    renderList();
  },

  openResourceModal(resource) {
    const backdrop = document.getElementById("resource-modal-backdrop");
    const titleEl = document.getElementById("modal-res-title");
    const badgeEl = document.getElementById("modal-res-badge");
    const contentEl = document.getElementById("modal-res-content");
    const copyBtn = document.getElementById("modal-btn-copy");
    const downloadBtn = document.getElementById("modal-btn-download");

    if (!backdrop || !titleEl || !contentEl) return;

    titleEl.textContent = resource.title;
    badgeEl.textContent = resource.badge;
    contentEl.textContent = resource.content;

    // Hook Copy
    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(resource.content).then(() => {
          window.PCA_APP.showToast("Resource text copied to clipboard!", "success");
        }).catch(() => {
          window.PCA_APP.showToast("Could not copy automatically.", "info");
        });
      };
    }

    // Hook Download Blob
    if (downloadBtn) {
      downloadBtn.onclick = () => {
        const blob = new Blob([resource.content], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${resource.id}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        window.PCA_APP.showToast(`Downloaded ${resource.title}.txt`, "success");
      };
    }

    backdrop.style.display = "flex";
  }
};
