/**
 * Presentation & Communication Academy
 * Footer Component
 */

window.PCA_FOOTER = {
  render() {
    const footer = document.getElementById("main-footer");
    if (!footer) return;

    footer.innerHTML = `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-col">
              <div class="brand-logo" style="margin-bottom: 1.25rem;">
                <div class="brand-emblem">
                  <svg class="icon icon-lg" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <div class="brand-text">
                  <span class="brand-title" style="color: #FFFFFF;">Presentation & Communication</span>
                  <span class="brand-tagline" style="color: #A0C2E6;">Academy</span>
                </div>
              </div>
              <p style="font-size: 0.925rem; color: #B5CCE4; line-height: 1.6; margin-bottom: 1.5rem;">
                Speak with Confidence. Present with Impact. Dedicated to equipping university students, job seekers, and CSS/competitive examination aspirants with elite public speaking, nonverbal mastery, and interview excellence.
              </p>
              <div style="display: flex; gap: 0.75rem;">
                <a href="https://wa.me/923334643412" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div class="footer-col">
              <h4>Quick Navigation</h4>
              <ul class="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#courses">Course Catalog</a></li>
                <li><a href="#resources">Learning Resources</a></li>
                <li><a href="#trainer">Trainer Profile (Sajid Majeed)</a></li>
                <li><a href="#dashboard">Student Dashboard</a></li>
                <li><a href="#contact">Contact & Inquiry</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Academy Courses</h4>
              <ul class="footer-links">
                <li><a href="#course/public-speaking-mastery">Public Speaking Mastery</a></li>
                <li><a href="#course/body-language-and-confidence">Body Language & Confidence</a></li>
                <li><a href="#course/presentation-skills-masterclass">Presentation Masterclass</a></li>
                <li><a href="#course/interview-preparation-and-career-skills">Interview Preparation</a></li>
                <li><a href="#course/professional-communication">Professional Communication</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Direct Contact</h4>
              <ul class="footer-contact-list">
                <li class="footer-contact-item">
                  <svg class="icon icon-sm" viewBox="0 0 24 24" style="color: var(--color-accent);"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  <span>Phone: <a href="tel:+923334643412" style="color: #FFFFFF; font-weight: 600;">+92 333 4643412</a></span>
                </li>
                <li class="footer-contact-item">
                  <svg class="icon icon-sm" viewBox="0 0 24 24" style="color: var(--color-accent);"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  <span>Training Modes: Online & In-Person</span>
                </li>
                <li class="footer-contact-item">
                  <svg class="icon icon-sm" viewBox="0 0 24 24" style="color: var(--color-accent);"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg>
                  <span>Affiliations: SAMTO Trainings &bull; Ghazi University</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-bottom">
            <div>
              &copy; ${new Date().getFullYear()} Presentation & Communication Academy. All rights reserved.
            </div>
            <div style="display: flex; gap: 1.5rem;">
              <span style="font-size: 0.8rem; color: #8CA9C4;">Academy-Issued Learning Certification System</span>
              <a href="#contact" style="color: #A0C2E6;">Privacy & Terms</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
};
