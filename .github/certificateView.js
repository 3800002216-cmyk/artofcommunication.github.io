/**
 * Presentation & Communication Academy
 * Certificate Viewer & Print Component
 */

window.PCA_CERTIFICATE_VIEW = {
  render(container, params) {
    const courseId = params.courseId;
    const course = (window.PCA_COURSES || []).find(c => c.id === courseId);

    if (!course) {
      container.innerHTML = `
        <div class="container section-padding text-center">
          <h2>Course Not Found</h2>
          <a href="#courses" class="btn btn-primary" style="margin-top: 1rem;">View Courses</a>
        </div>
      `;
      return;
    }

    const isEligible = window.PCA_STORE.isEligibleForCertificate(courseId);
    let certData = window.PCA_STORE.getCertificate(courseId);

    if (isEligible && !certData) {
      certData = window.PCA_STORE.generateCertificate(courseId);
    }

    const student = window.PCA_STORE.getStudent();
    const studentName = (certData && certData.studentName) ? certData.studentName : student.name;
    const certId = certData ? certData.certificateId : `PCA-${new Date().getFullYear()}-DEMO-PREVIEW`;
    const issueDate = certData ? certData.issueDate : new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

    container.innerHTML = `
      <div class="certificate-preview-wrapper">
        <!-- Actions & Status Bar (Hidden in print) -->
        <div class="certificate-actions-bar no-print">
          <div>
            <a href="#dashboard" style="display: flex; align-items: center; gap: 0.35rem; font-size: 0.85rem; font-weight: 600; color: var(--color-primary); margin-bottom: 0.25rem;">
              <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Return to Student Dashboard
            </a>
            <h3 style="font-size: 1.25rem; margin-bottom: 0.2rem;">
              ${isEligible ? 'Academy Certificate of Completion' : 'Certificate Eligibility Status & Preview'}
            </h3>
            <span style="font-size: 0.8rem; color: var(--color-text-muted);">
              ${isEligible ? 'Verified Academy-issued credential' : 'Requires completing all 7 lessons and passing the knowledge quiz (70%+)'}
            </span>
          </div>

          <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
            ${isEligible ? `
              <button class="btn btn-primary btn-sm" id="btn-print-certificate">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
                Print / Download PDF
              </button>
              <button class="btn btn-secondary btn-sm" id="btn-copy-cert-id">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                Copy ID
              </button>
            ` : `
              <a href="#quiz/${course.id}" class="btn btn-accent btn-sm">Take Course Quiz</a>
              <a href="#course/${course.id}" class="btn btn-secondary btn-sm">View Incomplete Lessons</a>
            `}
          </div>
        </div>

        ${!isEligible ? `
          <div class="no-print" style="background: #FFFBEB; border-left: 4px solid var(--color-warning); padding: 1.25rem 1.5rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 2rem;">
            <div style="font-weight: 700; color: #92400E; margin-bottom: 0.35rem;">Certificate Locked - Requirements Incomplete</div>
            <p style="font-size: 0.875rem; color: #78350F; margin-bottom: 0.75rem;">
              You are viewing a preview watermark. To officially earn and issue this certificate:
            </p>
            <div style="font-size: 0.825rem; color: #78350F;">
              <div>&bull; Lessons Progress: <strong>${window.PCA_STORE.getCourseProgress(course.id).completedCount} / 7 Completed</strong></div>
              <div>&bull; Quiz Status: <strong>${window.PCA_STORE.getQuizResult(course.id) ? (window.PCA_STORE.getQuizResult(course.id).passed ? 'Passed (>=70%)' : 'Score Below 70%') : 'Quiz Not Yet Taken'}</strong></div>
            </div>
          </div>
        ` : ''}

        <!-- High-Grade Certificate Frame -->
        <div class="certificate-frame" id="printable-certificate">
          <div class="cert-corner-ornament cert-corner-tl"></div>
          <div class="cert-corner-ornament cert-corner-tr"></div>
          <div class="cert-corner-ornament cert-corner-bl"></div>
          <div class="cert-corner-ornament cert-corner-br"></div>

          <!-- Certificate Header -->
          <div class="cert-header">
            <div class="cert-academy-logo">
              <svg class="icon icon-xl" viewBox="0 0 24 24" style="color: #FFFFFF;">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h2 class="cert-academy-name">Presentation &amp; Communication Academy</h2>
            <div class="cert-tagline">Speak with Confidence &bull; Present with Impact</div>
          </div>

          <!-- Main Title -->
          <div class="cert-title-section">
            <h1 class="cert-main-title">Certificate of Completion</h1>
            <div class="cert-subtitle">This is to certify that</div>
          </div>

          <!-- Recipient Name -->
          <div>
            <div class="cert-recipient-name" id="cert-student-name">
              ${studentName}
            </div>
          </div>

          <!-- Body Description -->
          <p class="cert-description">
            has successfully completed all prescribed training modules, practical speaking exercises, and knowledge verification assessments for the professional masterclass program:
            <br>
            <span class="cert-course-highlight">${course.title}</span>
          </p>

          <!-- Footer Signatures & Gold Seal -->
          <div class="cert-footer-grid">
            <div class="cert-signature-box">
              <div style="font-family: 'Brush Script MT', cursive, Georgia, serif; font-size: 1.85rem; color: #082B52; line-height: 1; margin-bottom: 0.25rem;">
                Sajid Majeed
              </div>
              <div class="cert-signature-line"></div>
              <div class="cert-sign-title">Sajid Majeed</div>
              <div class="cert-sign-role">Lead Management Trainer (SAMTO Trainings)<br>Lecturer (Ghazi University)</div>
            </div>

            <div class="cert-gold-seal">
              <svg class="icon icon-md" viewBox="0 0 24 24" style="color: #78350F; margin-bottom: 2px;">
                <circle cx="12" cy="8" r="7"></circle>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
              </svg>
              <div class="cert-seal-text">VERIFIED ACADEMY SEAL</div>
            </div>

            <div class="cert-signature-box">
              <div style="font-family: 'Brush Script MT', cursive, Georgia, serif; font-size: 1.85rem; color: #082B52; line-height: 1; margin-bottom: 0.25rem;">
                Director Academics
              </div>
              <div class="cert-signature-line"></div>
              <div class="cert-sign-title">Academic Directorate</div>
              <div class="cert-sign-role">Curriculum &amp; Educational Quality Board</div>
            </div>
          </div>

          <!-- Verification Meta Bar -->
          <div class="cert-meta-bar">
            <div>
              <span>Certificate Identifier: </span>
              <strong style="font-family: var(--font-mono); color: #082B52;" id="cert-id-text">${certId}</strong>
            </div>
            <div>
              <span>Issue Date: </span>
              <strong>${issueDate}</strong>
            </div>
          </div>

          <!-- Disclaimer Notice -->
          <div class="cert-disclaimer">
            Official Academy-Issued Certificate of Learning &bull; Issued by Presentation &amp; Communication Academy.<br>
            This credential verifies completion of non-credit practical e-learning coursework and assessments and does not confer formal degree or university transcript credit.
          </div>
        </div>
      </div>
    `;

    // Hook Print Button
    const printBtn = document.getElementById("btn-print-certificate");
    if (printBtn) {
      printBtn.addEventListener("click", () => {
        window.print();
      });
    }

    // Hook Copy ID Button
    const copyBtn = document.getElementById("btn-copy-cert-id");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        navigator.clipboard.writeText(certId).then(() => {
          window.PCA_APP.showToast(`Copied Certificate ID: ${certId}`, "info");
        }).catch(() => {
          prompt("Copy Certificate ID:", certId);
        });
      });
    }
  }
};
