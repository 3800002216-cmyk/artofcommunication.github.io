/**
 * Presentation & Communication Academy
 * Course Catalog Component
 */

window.PCA_COURSES_VIEW = {
  render(container) {
    const allCourses = window.PCA_COURSES || [];
    let activeCategory = "All";
    let activeLevel = "All";
    let searchQuery = "";

    function renderCourseList() {
      const filtered = allCourses.filter(course => {
        const matchesCategory = activeCategory === "All" || course.category === activeCategory;
        const matchesLevel = activeLevel === "All" || course.level.includes(activeLevel);
        const matchesSearch = !searchQuery || 
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesLevel && matchesSearch;
      });

      const listContainer = document.getElementById("catalog-courses-container");
      const countEl = document.getElementById("catalog-results-count");

      if (countEl) {
        countEl.textContent = `Showing ${filtered.length} of ${allCourses.length} Courses`;
      }

      if (!listContainer) return;

      if (filtered.length === 0) {
        listContainer.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem; background: var(--color-white); border-radius: var(--radius-lg); border: 1px dashed var(--color-border);">
            <svg class="icon icon-xl" viewBox="0 0 24 24" style="color: var(--color-text-muted); margin-bottom: 1rem;"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <h3>No courses match your search</h3>
            <p style="color: var(--color-text-muted); margin-top: 0.5rem;">Try adjusting your keywords or category filters.</p>
            <button class="btn btn-secondary btn-sm" id="btn-clear-filters" style="margin-top: 1rem;">Reset Filters</button>
          </div>
        `;
        const resetBtn = document.getElementById("btn-clear-filters");
        if (resetBtn) {
          resetBtn.addEventListener("click", () => {
            activeCategory = "All";
            activeLevel = "All";
            searchQuery = "";
            const searchInput = document.getElementById("catalog-search-input");
            if (searchInput) searchInput.value = "";
            updatePillsUI();
            renderCourseList();
          });
        }
        return;
      }

      listContainer.innerHTML = filtered.map((course, idx) => {
        const isEnrolled = window.PCA_STORE.isEnrolled(course.id);
        const progress = window.PCA_STORE.getCourseProgress(course.id);

        return `
          <div class="course-card">
            <div class="course-card-header course-header-${(idx % 5) + 1}">
              <div class="course-card-badges">
                <span class="badge" style="background: rgba(255,255,255,0.25); color: #FFFFFF;">${course.category}</span>
                <span class="badge" style="background: rgba(0,0,0,0.2); color: #FFFFFF;">${course.level}</span>
              </div>
              <div class="course-icon-symbol">
                <svg class="icon icon-md" viewBox="0 0 24 24" style="color: #FFFFFF;">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                </svg>
              </div>
            </div>

            <div class="course-card-body">
              <h3>${course.title}</h3>
              <p>${course.shortDescription}</p>

              <div class="course-meta-row">
                <div class="course-meta-item">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>${course.duration}</span>
                </div>
                <div class="course-meta-item">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                  <span>${course.lessonsCount} Lessons</span>
                </div>
              </div>

              ${isEnrolled ? `
                <div style="margin-bottom: 1.25rem;">
                  <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 0.25rem; font-weight: 600;">
                    <span>Progress</span>
                    <span>${progress.percentage}% (${progress.completedCount}/${progress.total})</span>
                  </div>
                  <div class="progress-bar-wrap">
                    <div class="progress-bar-fill" style="width: ${progress.percentage}%;"></div>
                  </div>
                </div>
              ` : ''}

              <div class="course-card-footer">
                <a href="#course/${course.id}" class="btn btn-secondary btn-sm" style="flex: 1;">
                  Course Details
                </a>
                <a href="#lesson/${course.id}/${course.lessons[0].id}" class="btn btn-primary btn-sm" style="flex: 1;">
                  ${isEnrolled ? "Continue" : "Start Lessons"}
                </a>
              </div>
            </div>
          </div>
        `;
      }).join("");
    }

    function updatePillsUI() {
      document.querySelectorAll(".cat-pill").forEach(pill => {
        if (pill.dataset.val === activeCategory) pill.classList.add("active");
        else pill.classList.remove("active");
      });
      document.querySelectorAll(".level-pill").forEach(pill => {
        if (pill.dataset.val === activeLevel) pill.classList.add("active");
        else pill.classList.remove("active");
      });
    }

    container.innerHTML = `
      <div style="background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%); color: var(--color-white); padding: 3.5rem 0 4rem 0;">
        <div class="container text-center">
          <span class="badge badge-accent" style="margin-bottom: 1rem; font-size: 0.825rem; padding: 0.35rem 0.95rem;">
            Curriculum Catalog
          </span>
          <h1 style="color: #FFFFFF; font-size: 2.75rem; margin-bottom: 1rem;">Explore All Academy Courses</h1>
          <p style="color: #D3E6FA; font-size: 1.15rem; max-width: 650px; margin: 0 auto;">
            Structured learning paths covering public speaking, commanding body language, executive presentations, job interviews, and workplace communication.
          </p>
        </div>
      </div>

      <div class="container" style="padding-top: 2.5rem; padding-bottom: 5rem;">
        <!-- Filter & Search Bar -->
        <div class="catalog-filter-bar">
          <div class="catalog-search-row">
            <div class="search-input-wrap">
              <svg class="icon icon-sm search-input-icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              <input type="text" id="catalog-search-input" class="form-control" placeholder="Search by topic, keyword, or course title (e.g., 'stage fear', 'interview', 'STAR')...">
            </div>
            <div id="catalog-results-count" style="display: flex; align-items: center; font-size: 0.9rem; font-weight: 600; color: var(--color-text-muted); white-space: nowrap;">
              Showing 5 of 5 Courses
            </div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.75rem;">
            <div class="filter-pills-row">
              <span style="font-size: 0.825rem; font-weight: 700; color: var(--color-primary-dark); min-width: 80px;">Category:</span>
              <button class="filter-pill cat-pill active" data-val="All">All Categories</button>
              <button class="filter-pill cat-pill" data-val="Public Speaking">Public Speaking</button>
              <button class="filter-pill cat-pill" data-val="Body Language">Body Language</button>
              <button class="filter-pill cat-pill" data-val="Presentations">Presentations</button>
              <button class="filter-pill cat-pill" data-val="Interviews">Job Interviews</button>
              <button class="filter-pill cat-pill" data-val="Workplace">Workplace Communication</button>
            </div>

            <div class="filter-pills-row">
              <span style="font-size: 0.825rem; font-weight: 700; color: var(--color-primary-dark); min-width: 80px;">Difficulty:</span>
              <button class="filter-pill level-pill active" data-val="All">All Levels</button>
              <button class="filter-pill level-pill" data-val="Beginner">Beginner</button>
              <button class="filter-pill level-pill" data-val="Intermediate">Intermediate</button>
              <button class="filter-pill level-pill" data-val="Advanced">Advanced</button>
            </div>
          </div>
        </div>

        <!-- Course Cards Grid -->
        <div class="courses-grid" id="catalog-courses-container"></div>
      </div>
    `;

    // Event listeners
    const searchInput = document.getElementById("catalog-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value.trim();
        renderCourseList();
      });
    }

    document.querySelectorAll(".cat-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        activeCategory = pill.dataset.val;
        updatePillsUI();
        renderCourseList();
      });
    });

    document.querySelectorAll(".level-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        activeLevel = pill.dataset.val;
        updatePillsUI();
        renderCourseList();
      });
    });

    renderCourseList();
  }
};
