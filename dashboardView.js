/**
 * Presentation & Communication Academy
 * Student Dashboard Component
 */

window.PCA_DASHBOARD_VIEW = {
  render(container) {
    const student = window.PCA_STORE.getStudent();
    const allCourses = window.PCA_COURSES || [];
    const enrolledIds = window.PCA_STORE.getEnrolledCourses();

    const enrolledCourses = allCourses.filter(c => enrolledIds.includes(c.id));

    // Stats calculations
    let totalCompletedLessons = 0;
    let completedCoursesCount = 0;
    let certificatesCount = 0;

    enrolledCourses.forEach(c => {
      const p = window.PCA_STORE.getCourseProgress(c.id);
      totalCompletedLessons += p.completedCount;
      if (p.isAllLessonsComplete) completedCoursesCount++;
      if (window.PCA_STORE.isEligibleForCertificate(c.id)) certificatesCount++;
    });

    const quizResults = window.PCA_STORE.state.quizResults || {};
    const quizCount = Object.keys(quizResults).length;

    container.innerHTML = `
      <div style="background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%); color: var(--color-white); padding: 3.5rem 0 3.5rem 0;">
        <div class="container">
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem;">
            <div>
              <span class="badge badge-accent" style="margin-bottom: 0.75rem; font-size: 0.8rem;">Student Learning Portal</span>
              <h1 style="color: #FFFFFF; font-size: 2.35rem; margin-bottom: 0.35rem;">
                Welcome back, <span id="display-student-name">${student.name}</span>
              </h1>
              <p style="color: #D3E6FA; font-size: 1rem; margin-bottom: 0;">
                Track your communication mastery, review quiz assessments, and claim your verified certificates.
              </p>
            </div>

            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <button class="btn btn-outline-white btn-sm" id="btn-edit-student-name">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                Change Name
              </button>
              <button class="btn btn-secondary btn-sm" id="btn-seed-demo" title="Pre-fill 1 course as 100% complete to test certificate">
                Test Demo Completion
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="container" style="padding-top: 2.5rem; padding-bottom: 5rem;">
        <!-- Data Sync Transparency Notice -->
        <div style="background: var(--color-bg-subtle); border-left: 4px solid var(--color-primary); padding: 0.85rem 1.25rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 2rem; font-size: 0.825rem; color: var(--color-text-muted);">
          <strong>Browser Storage Mode:</strong> Progress is stored locally in this browser. To transfer or preserve your learning history across multiple devices, connect to an institutional account or export your records.
        </div>

        <!-- 4 KPI Stats Cards -->
        <div class="dashboard-grid">
          <div class="dashboard-stat-card">
            <div class="dashboard-stat-icon">
              <svg class="icon icon-lg" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
            </div>
            <div class="dashboard-stat-info">
              <h3>${enrolledCourses.length}</h3>
              <p>Enrolled Courses</p>
            </div>
          </div>

          <div class="dashboard-stat-card">
            <div class="dashboard-stat-icon" style="background: var(--color-success-light); color: var(--color-success);">
              <svg class="icon icon-lg" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div class="dashboard-stat-info">
              <h3>${totalCompletedLessons}</h3>
              <p>Lessons Completed</p>
            </div>
          </div>

          <div class="dashboard-stat-card">
            <div class="dashboard-stat-icon" style="background: #E8F2FC; color: var(--color-primary);">
              <svg class="icon icon-lg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
            </div>
            <div class="dashboard-stat-info">
              <h3>${quizCount}</h3>
              <p>Quizzes Evaluated</p>
            </div>
          </div>

          <div class="dashboard-stat-card">
            <div class="dashboard-stat-icon" style="background: #FEF3C7; color: #D97706;">
              <svg class="icon icon-lg" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
            </div>
            <div class="dashboard-stat-info">
              <h3>${certificatesCount}</h3>
              <p>Certificates Earned</p>
            </div>
          </div>
        </div>

        <!-- Enrolled Courses Section -->
        <div style="margin-bottom: 3.5rem;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
            <div>
              <h2 style="font-size: 1.6rem; margin-bottom: 0.25rem;">My Active Courses</h2>
              <span style="font-size: 0.875rem; color: var(--color-text-muted);">Continue lessons and complete your practical drills.</span>
            </div>
            <a href="#courses" class="btn btn-secondary btn-sm">Explore More Courses</a>
          </div>

          <div class="enrolled-courses-grid">
            ${enrolledCourses.map(course => {
              const p = window.PCA_STORE.getCourseProgress(course.id);
              const quiz = window.PCA_STORE.getQuizResult(course.id);
              const isEligible = window.PCA_STORE.isEligibleForCertificate(course.id);

              return `
                <div class="enrolled-course-card">
                  <div class="enrolled-course-header">
                    <div>
                      <span class="badge badge-primary" style="margin-bottom: 0.35rem;">${course.category}</span>
                      <h3 style="font-size: 1.25rem; margin-bottom: 0.35rem;">${course.title}</h3>
                      <span style="font-size: 0.8rem; color: var(--color-text-muted);">${course.duration} &bull; ${course.lessonsCount} Lessons</span>
                    </div>

                    ${isEligible ? `
                      <span class="badge badge-success">Certificate Ready</span>
                    ` : (p.percentage === 0 ? `
                      <span class="badge badge-navy">Not Started</span>
                    ` : `
                      <span class="badge badge-accent">In Progress</span>
                    `)}
                  </div>

                  <!-- Progress Bar -->
                  <div style="margin: 1rem 0;">
                    <div style="display: flex; justify-content: space-between; font-size: 0.825rem; font-weight: 600; margin-bottom: 0.35rem;">
                      <span>Completion</span>
                      <span>${p.percentage}% (${p.completedCount}/${p.total} Lessons)</span>
                    </div>
                    <div class="progress-bar-wrap" style="height: 9px;">
                      <div class="progress-bar-fill" style="width: ${p.percentage}%;"></div>
                    </div>
                  </div>

                  <!-- Quiz Result Pill -->
                  <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.85rem; margin-bottom: 1.25rem; padding: 0.65rem 0.85rem; background: var(--color-bg-subtle); border-radius: var(--radius-md);">
                    <span style="color: var(--color-text-muted);">Quiz Assessment:</span>
                    ${quiz ? `
                      <span style="font-weight: 700; color: ${quiz.passed ? 'var(--color-success)' : 'var(--color-error)'};">
                        ${quiz.score}/${quiz.total} (${quiz.percentage}%) - ${quiz.passed ? 'Passed' : 'Needs Retake'}
                      </span>
                    ` : `
                      <a href="#quiz/${course.id}" style="font-weight: 600; font-size: 0.8rem;">Take Quiz Now</a>
                    `}
                  </div>

                  <!-- Action Buttons -->
                  <div style="display: flex; gap: 0.75rem; margin-top: auto;">
                    <a href="#lesson/${course.id}/${course.lessons[0].id}" class="btn btn-primary btn-sm" style="flex: 1;">
                      Continue Learning
                    </a>
                    ${isEligible ? `
                      <a href="#certificate/${course.id}" class="btn btn-accent btn-sm" style="flex: 1;">
                        View Certificate
                      </a>
                    ` : `
                      <a href="#quiz/${course.id}" class="btn btn-secondary btn-sm" style="flex: 1;">
                        Quiz Assessment
                      </a>
                    `}
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </div>

        <!-- Quiz Performance Summary Table -->
        <div class="card" style="padding: 2rem; margin-bottom: 3rem;">
          <h3 style="font-size: 1.35rem; margin-bottom: 1rem;">Assessment &amp; Quiz Results History</h3>
          
          ${quizCount === 0 ? `
            <p style="color: var(--color-text-muted); font-size: 0.925rem; margin-bottom: 0;">
              You have not submitted any course knowledge quizzes yet. Select an enrolled course above to take its assessment.
            </p>
          ` : `
            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
                <thead>
                  <tr style="border-bottom: 2px solid var(--color-border); color: var(--color-primary-dark);">
                    <th style="padding: 0.75rem 1rem;">Course</th>
                    <th style="padding: 0.75rem 1rem;">Score</th>
                    <th style="padding: 0.75rem 1rem;">Percentage</th>
                    <th style="padding: 0.75rem 1rem;">Status</th>
                    <th style="padding: 0.75rem 1rem;">Completed Date</th>
                    <th style="padding: 0.75rem 1rem; text-align: right;">Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${Object.keys(quizResults).map(cid => {
                    const res = quizResults[cid];
                    const crs = allCourses.find(c => c.id === cid);
                    return `
                      <tr style="border-bottom: 1px solid var(--color-border-light);">
                        <td style="padding: 1rem; font-weight: 600;">${crs ? crs.title : cid}</td>
                        <td style="padding: 1rem;">${res.score} / ${res.total}</td>
                        <td style="padding: 1rem; font-weight: 700;">${res.percentage}%</td>
                        <td style="padding: 1rem;">
                          <span class="badge ${res.passed ? 'badge-success' : 'badge-danger'}">
                            ${res.passed ? 'Passed (>=70%)' : 'Did Not Pass'}
                          </span>
                        </td>
                        <td style="padding: 1rem; color: var(--color-text-muted);">${res.completedAt || 'N/A'}</td>
                        <td style="padding: 1rem; text-align: right;">
                          <a href="#quiz/${cid}" class="btn btn-secondary btn-sm">Retake / Practice</a>
                        </td>
                      </tr>
                    `;
                  }).join("")}
                </tbody>
              </table>
            </div>
          `}
        </div>

        <!-- Danger Zone / Data Management -->
        <div style="display: flex; justify-content: flex-end; gap: 1rem; align-items: center; padding-top: 1.5rem; border-top: 1px solid var(--color-border-light);">
          <small style="color: var(--color-text-muted);">Need to restart your learning track?</small>
          <button class="btn btn-secondary btn-sm" id="btn-reset-data" style="color: var(--color-error); border-color: var(--color-error-light);">
            Reset Local Progress
          </button>
        </div>
      </div>
    `;

    // Hook Change Name Button
    const editBtn = document.getElementById("btn-edit-student-name");
    if (editBtn) {
      editBtn.addEventListener("click", () => {
        const newName = prompt("Enter the full name to appear on your Academy Certificates:", student.name);
        if (newName && newName.trim()) {
          window.PCA_STORE.setStudentName(newName.trim());
          window.PCA_APP.showToast(`Updated student name to "${newName.trim()}".`, "success");
          this.render(container);
        }
      });
    }

    // Hook Seed Demo Completion
    const seedBtn = document.getElementById("btn-seed-demo");
    if (seedBtn) {
      seedBtn.addEventListener("click", () => {
        window.PCA_STORE.seedDemoCompletion("public-speaking-mastery");
        window.PCA_APP.showToast("Preloaded 100% completion for Public Speaking Mastery! Certificate unlocked.", "success");
        this.render(container);
      });
    }

    // Hook Reset Data
    const resetBtn = document.getElementById("btn-reset-data");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (confirm("Are you sure you want to reset all stored lessons and quiz scores in this browser?")) {
          window.PCA_STORE.resetProgress();
          window.PCA_APP.showToast("All local progress has been reset.", "info");
          this.render(container);
        }
      });
    }
  }
};
