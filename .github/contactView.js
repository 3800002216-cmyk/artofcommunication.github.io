/**
 * Presentation & Communication Academy
 * Contact & Course Inquiry Component
 */

window.PCA_CONTACT_VIEW = {
  render(container) {
    const courses = window.PCA_COURSES || [];

    container.innerHTML = `
      <!-- Contact Hero Banner -->
      <section style="background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%); color: var(--color-white); padding: 3.5rem 0 4rem 0;">
        <div class="container text-center">
          <span class="badge badge-accent" style="margin-bottom: 1rem; font-size: 0.825rem; padding: 0.35rem 0.95rem;">
            Admissions &amp; Inquiries
          </span>
          <h1 style="color: #FFFFFF; font-size: 2.75rem; margin-bottom: 1rem;">Contact &amp; Course Enrollment</h1>
          <p style="color: #D3E6FA; font-size: 1.15rem; max-width: 650px; margin: 0 auto;">
            Connect with our team to inquire about course schedules, online batches, corporate workshops, or one-on-one executive training.
          </p>
        </div>
      </section>

      <!-- Main Contact Grid -->
      <div class="container" style="padding-top: 3.5rem; padding-bottom: 5rem;">
        <div class="contact-layout">
          <!-- Left: Contact Form -->
          <div class="card" style="padding: 2.75rem;">
            <div style="margin-bottom: 2rem;">
              <h2 style="font-size: 1.75rem; margin-bottom: 0.35rem;">Send an Inquiry</h2>
              <p style="color: var(--color-text-muted); font-size: 0.95rem; margin-bottom: 0;">
                Fill out the form below to register interest or request personalized training details.
              </p>
            </div>

            <div id="contact-success-banner" style="display: none; background: #ECFDF5; border-left: 4px solid var(--color-success); padding: 1.5rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 2rem;">
              <h4 style="color: #065F46; font-size: 1.1rem; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.5rem;">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Inquiry Recorded Successfully!
              </h4>
              <p style="color: #047857; font-size: 0.9rem; margin-bottom: 0.75rem;">
                Your inquiry has been stored locally under Reference ID: <strong id="success-inquiry-id">INQ-DEMO</strong>.
              </p>
              <p style="color: #047857; font-size: 0.825rem; margin-bottom: 1rem;">
                <em>Notice: In this educational demo platform, submissions are securely captured in local browser memory. To dispatch this message to Trainer Sajid Majeed immediately, use the WhatsApp button below.</em>
              </p>
              <a id="btn-success-whatsapp" href="#" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-sm">
                Forward Inquiry via WhatsApp
              </a>
            </div>

            <form id="contact-form" novalidate>
              <!-- Full Name -->
              <div class="form-group">
                <label class="form-label" for="inp-fullname">Full Name <span style="color: var(--color-error); font-weight: bold;">*</span></label>
                <input type="text" id="inp-fullname" class="form-control" placeholder="e.g., Muhammad Usman" required>
                <div class="invalid-feedback" id="err-fullname">Please enter your full name.</div>
              </div>

              <!-- Email & Phone Grid -->
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem;">
                <div class="form-group">
                  <label class="form-label" for="inp-email">Email Address <span style="color: var(--color-error); font-weight: bold;">*</span></label>
                  <input type="email" id="inp-email" class="form-control" placeholder="name@domain.com" required>
                  <div class="invalid-feedback" id="err-email">Please enter a valid email address.</div>
                </div>

                <div class="form-group">
                  <label class="form-label" for="inp-phone">Phone Number <span style="color: var(--color-error); font-weight: bold;">*</span></label>
                  <input type="tel" id="inp-phone" class="form-control" placeholder="+92 300 1234567" required>
                  <div class="invalid-feedback" id="err-phone">Please enter your phone number.</div>
                </div>
              </div>

              <!-- Course of Interest -->
              <div class="form-group">
                <label class="form-label" for="inp-course">Course of Interest <span style="color: var(--color-error); font-weight: bold;">*</span></label>
                <select id="inp-course" class="form-control" required>
                  <option value="">-- Select a Course or Program --</option>
                  ${courses.map(c => `<option value="${c.title}">${c.title}</option>`).join("")}
                  <option value="Executive Coaching">One-on-One Executive Coaching</option>
                  <option value="Corporate Workshop">Corporate / Institutional Workshop</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
                <div class="invalid-feedback" id="err-course">Please select a course of interest.</div>
              </div>

              <!-- Preferred Learning Mode -->
              <div class="form-group">
                <label class="form-label">Preferred Learning Mode <span style="color: var(--color-error); font-weight: bold;">*</span></label>
                <div style="display: flex; gap: 2rem; margin-top: 0.5rem;">
                  <label style="display: flex; align-items: center; gap: 0.5rem; font-weight: 500; cursor: pointer;">
                    <input type="radio" name="learningMode" value="Online" checked>
                    <span>Online E-Learning &amp; Virtual Batches</span>
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.5rem; font-weight: 500; cursor: pointer;">
                    <input type="radio" name="learningMode" value="In-Person">
                    <span>In-Person Training / Workshops</span>
                  </label>
                </div>
              </div>

              <!-- Message -->
              <div class="form-group">
                <label class="form-label" for="inp-message">Your Message / Training Objectives <span style="color: var(--color-error); font-weight: bold;">*</span></label>
                <textarea id="inp-message" class="form-control" placeholder="Share your background, current challenges (e.g. stage fright, upcoming CSS interview, corporate pitch), and preferred timing..." required></textarea>
                <div class="invalid-feedback" id="err-message">Please provide a message with at least 10 characters.</div>
              </div>

              <div style="margin-top: 2rem;">
                <button type="submit" class="btn btn-primary btn-lg" id="btn-submit-inquiry" style="width: 100%;">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>

          <!-- Right: Direct Contact Info & WhatsApp -->
          <div>
            <div class="contact-info-card">
              <span class="badge badge-accent" style="margin-bottom: 1rem; color: #082B52; background: #E6F7FC;">Direct Outreach</span>
              <h3 style="font-size: 1.75rem;">Academy Admissions &amp; Inquiries</h3>
              <p>
                Have questions regarding custom workshop syllabus, institutional group enrollments, or private coaching? Contact us directly.
              </p>

              <ul class="contact-direct-list">
                <li class="contact-direct-item">
                  <div class="icon-box">
                    <svg class="icon icon-md" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                  </div>
                  <div>
                    <small style="color: #C2DCFA; display: block;">Official Academy Contact Number</small>
                    <a href="tel:+923334643412" style="font-size: 1.25rem;">+92 333 4643412</a>
                  </div>
                </li>

                <li class="contact-direct-item">
                  <div class="icon-box" style="background: rgba(37, 211, 102, 0.25);">
                    <svg class="icon icon-md" viewBox="0 0 24 24" style="color: #25D366;"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                  <div>
                    <small style="color: #C2DCFA; display: block;">WhatsApp Support Desk</small>
                    <a href="https://wa.me/923334643412?text=Hello%20Presentation%20%26%20Communication%20Academy%2C%20I%20would%20like%20to%20inquire%20about%20courses." target="_blank" rel="noopener noreferrer" style="font-size: 1.1rem; color: #A7F3D0;">
                      Chat on WhatsApp (+92 333 4643412)
                    </a>
                  </div>
                </li>

                <li class="contact-direct-item">
                  <div class="icon-box">
                    <svg class="icon icon-md" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <div>
                    <small style="color: #C2DCFA; display: block;">Trainer &amp; Affiliations</small>
                    <span style="font-weight: 600; color: #FFFFFF;">Sajid Majeed</span>
                    <small style="display: block; color: #C2DCFA;">SAMTO Trainings &bull; Ghazi University</small>
                  </div>
                </li>
              </ul>

              <div style="border-top: 1px solid rgba(255, 255, 255, 0.2); padding-top: 1.5rem;">
                <h4 style="color: #FFFFFF; font-size: 1.05rem; margin-bottom: 0.5rem;">Flexible Learning Delivery</h4>
                <p style="color: #D3E6FA; font-size: 0.85rem; line-height: 1.6; margin-bottom: 0;">
                  Training is structured across interactive online e-learning modules with self-paced drills, alongside customized physical cohort bootcamps arranged with partnering institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Hook Form Submission & Validation
    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nameInput = document.getElementById("inp-fullname");
        const emailInput = document.getElementById("inp-email");
        const phoneInput = document.getElementById("inp-phone");
        const courseInput = document.getElementById("inp-course");
        const messageInput = document.getElementById("inp-message");
        const modeInput = document.querySelector('input[name="learningMode"]:checked');

        const errName = document.getElementById("err-fullname");
        const errEmail = document.getElementById("err-email");
        const errPhone = document.getElementById("err-phone");
        const errCourse = document.getElementById("err-course");
        const errMessage = document.getElementById("err-message");

        let isValid = true;

        // Reset errors
        [nameInput, emailInput, phoneInput, courseInput, messageInput].forEach(inp => inp.classList.remove("is-invalid"));

        // Validate Name
        if (!nameInput.value.trim()) {
          nameInput.classList.add("is-invalid");
          isValid = false;
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
          emailInput.classList.add("is-invalid");
          isValid = false;
        }

        // Validate Phone
        if (!phoneInput.value.trim()) {
          phoneInput.classList.add("is-invalid");
          isValid = false;
        }

        // Validate Course
        if (!courseInput.value) {
          courseInput.classList.add("is-invalid");
          isValid = false;
        }

        // Validate Message
        if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
          messageInput.classList.add("is-invalid");
          isValid = false;
        }

        if (!isValid) {
          window.PCA_APP.showToast("Please correct the errors in the form before submitting.", "error");
          return;
        }

        // Save inquiry to store
        const inquiryData = {
          name: nameInput.value.trim(),
          email: emailInput.value.trim(),
          phone: phoneInput.value.trim(),
          course: courseInput.value,
          mode: modeInput ? modeInput.value : "Online",
          message: messageInput.value.trim()
        };

        const saved = window.PCA_STORE.saveInquiry(inquiryData);

        // Display success banner
        const banner = document.getElementById("contact-success-banner");
        const refIdEl = document.getElementById("success-inquiry-id");
        const waLink = document.getElementById("btn-success-whatsapp");

        if (banner && refIdEl && waLink) {
          refIdEl.textContent = saved.id;
          const encodedMsg = encodeURIComponent(
            `Hello Trainer Sajid Majeed, I submitted Inquiry ${saved.id} at Presentation & Communication Academy.\nName: ${saved.name}\nCourse: ${saved.course}\nMode: ${saved.mode}\nPhone: ${saved.phone}\nMessage: ${saved.message}`
          );
          waLink.href = `https://wa.me/923334643412?text=${encodedMsg}`;
          banner.style.display = "block";
          banner.scrollIntoView({ behavior: "smooth" });
        }

        form.reset();
        window.PCA_APP.showToast(`Inquiry ${saved.id} captured successfully!`, "success");
      });
    }
  }
};
