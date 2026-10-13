/**
 * Presentation & Communication Academy
 * Navbar & Mobile Drawer Component
 */

window.PCA_NAVBAR = {
  render() {
    const nav = document.getElementById("main-nav");
    if (!nav) return;

    nav.innerHTML = `
      <nav class="navbar">
        <div class="container nav-container">
          <a href="#home" class="brand-logo" aria-label="Presentation & Communication Academy Home">
            <div class="brand-emblem">
              <svg class="icon icon-lg" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div class="brand-text">
              <span class="brand-title">Presentation & Communication</span>
              <span class="brand-tagline">Academy &bull; Speak with Confidence</span>
            </div>
          </a>

          <ul class="nav-links">
            <li><a href="#home" class="nav-link">Home</a></li>
            <li><a href="#courses" class="nav-link">Courses</a></li>
            <li><a href="#resources" class="nav-link">Learning Resources</a></li>
            <li><a href="#trainer" class="nav-link">About Trainer</a></li>
            <li><a href="#dashboard" class="nav-link">Student Dashboard</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
          </ul>

          <div class="nav-actions">
            <a href="#dashboard" class="btn btn-secondary btn-sm btn-login" title="View Student Portal">
              <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              Student Portal
            </a>
            <a href="#courses" class="btn btn-primary btn-sm">
              Start Learning
            </a>
            <button class="nav-toggle-btn" id="mobile-toggle-btn" aria-label="Toggle Navigation Menu">
              <svg class="icon icon-lg" viewBox="0 0 24 24">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-nav-drawer" id="mobile-nav-drawer">
        <a href="#home" class="nav-link">Home</a>
        <a href="#courses" class="nav-link">All Courses</a>
        <a href="#resources" class="nav-link">Learning Resources</a>
        <a href="#trainer" class="nav-link">About Trainer (Sajid Majeed)</a>
        <a href="#dashboard" class="nav-link">Student Dashboard & Progress</a>
        <a href="#contact" class="nav-link">Contact & Admissions</a>
        <div style="margin-top: 1rem; display: flex; flex-direction: column; gap: 0.75rem;">
          <a href="#courses" class="btn btn-primary">Start Learning Now</a>
          <a href="#dashboard" class="btn btn-secondary">Student Account</a>
        </div>
      </div>
    `;

    // Hook mobile drawer toggle
    const toggleBtn = document.getElementById("mobile-toggle-btn");
    const drawer = document.getElementById("mobile-nav-drawer");
    if (toggleBtn && drawer) {
      toggleBtn.addEventListener("click", () => {
        drawer.classList.toggle("open");
      });
    }
  }
};
