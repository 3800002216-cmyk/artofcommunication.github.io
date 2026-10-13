/**
 * Presentation & Communication Academy
 * Course Detail View Component
 */

window.PCA_COURSE_DETAIL_VIEW = {
  render(container, params) {
    const courseId = params.id;
    const course = (window.PCA_COURSES || []).find(c => c.id === courseId);

    if (!course) {
      container.innerHTML = `
        <div class="container section-padding text-center">
          <h2>Course Not Found</h2>
          <p style="margin-top: 1rem;">The requested course does not exist in the curriculum catalog.</p>
          <a href="#courses" class="btn btn-primary" style="margin-top: 1.5rem;">Return to Courses</a>
        </div>
      `;
      return;
    }

    const isEnrolled = window.PCA_STORE.isEnrolled(course.id);
    const progress = window.PCA_STORE.getCourseProgress(course.id);
    const quizResult = window.PCA_STORE.getQuizResult(course.id);

    container.innerHTML = `
      <!-- Course Hero Header -->
      <section class="course-detail-hero">
        <div class="container">
          <div style="display: flex; gap: 0.5rem; align-items: center; margin-bottom: 1rem;">
            <a href="#courses" style="color: #A0C2E6; font-size: 0.875rem;">Courses</a>
            <span style="color: #60A5FA;">&bull;</span>
            <span style="color: #FFFFFF; font-size: 0.875rem;">${course.category}</span>
          </div>

          <h1 style="font-size: 2.85rem; max-width: 800px; line-height: 1.2;">${course.title}</h1>
          <p style="font-size: 1.15rem; color: #D3E6FA; max-width: 750px; margin-bottom: 2rem;">
            ${course.shortDescription}
          </p>

          <div style="display: flex; align-items: center; gap: 2rem; flex-wrap: wrap; font-size: 0.95rem; color: #D3E6FA;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <svg class="icon icon-sm" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              <span>Duration: <strong>${course.duration}</strong></span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
              <span>Lessons: <strong>${course.lessonsCount} Structured Lessons</strong></span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
              <span>Level: <strong>${course.level}</strong></span>
            </div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <svg class="icon icon-sm" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              <span>Certificate: <strong>Academy Verified</strong></span>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Course Detail Body -->
      <div class="container">
        <div class="course-detail-layout">
          <!-- Left Column: Overview, Objectives, Curriculum -->
          <div>
            <!-- Course Overview Card -->
            <div class="course-detail-card">
              <h2 style="font-size: 1.6rem; margin-bottom: 1rem;">Course Overview</h2>
              <p style="font-size: 1.05rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 1.5rem;">
                ${course.fullDescription}
              </p>

              <h3 style="font-size: 1.25rem; margin-top: 1.75rem; margin-bottom: 0.75rem;">Target Audience</h3>
              <p style="color: var(--color-text-muted);">
                ${course.targetAudience}
              </p>
            </div>

            <!-- Learning Objectives Card -->
            <div class="course-detail-card">
              <h2 style="font-size: 1.6rem; margin-bottom: 1.25rem;">What You Will Master</h2>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.85rem;">
                ${course.learningObjectives.map(obj => `
                  <li style="display: flex; align-items: flex-start; gap: 0.85rem; font-size: 0.975rem;">
                    <div style="width: 22px; height: 22px; border-radius: 50%; background: var(--color-success-light); color: var(--color-success); display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                      <svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span>${obj}</span>
                  </li>
                `).join("")}
              </ul>
            </div>

            <!-- Curriculum Breakdown -->
            <div class="course-detail-card">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
                <div>
                  <h2 style="font-size: 1.6rem; margin-bottom: 0.25rem;">Course Curriculum</h2>
                  <span style="font-size: 0.875rem; color: var(--color-text-muted);">7 Guided Lessons &bull; Practical Exercises &bull; Assessment Quiz</span>
                </div>
                <span class="badge badge-primary">${course.lessons.length} Modules</span>
              </div>

              <ul class="curriculum-list">
                ${course.lessons.map((lesson, idx) => {
                  const isCompleted = window.PCA_STORE.isLessonCompleted(course.id, lesson.id);
                  return `
                    <li>
                      <a href="#lesson/${course.id}/${lesson.id}" class="curriculum-item">
                        <div class="curriculum-title-wrap">
                          <div class="curriculum-num" style="${isCompleted ? 'background: var(--color-success);' : ''}">
                            ${isCompleted ? '&#10003;' : (idx + 1)}
                          </div>
                          <div>
                            <strong style="color: var(--color-primary-dark); font-size: 0.95rem; display: block;">${lesson.title}</strong>
                            <small style="color: var(--color-text-muted); font-size: 0.775rem;">${lesson.duration} &bull; Practice drill included</small>
                          </div>
                        </div>

                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                          ${isCompleted ? `
                            <span class="badge badge-success">Completed</span>
                          ` : `
                            <span class="badge badge-navy">View Lesson</span>
                          `}
                          <svg class="icon icon-sm" viewBox="0 0 24 24" style="color: var(--color-text-muted);"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </div>
                      </a>
                    </li>
                  `;
                }).join("")}
              </ul>

              <!-- Final Assessment Link -->
              <div style="margin-top: 1.5rem; padding: 1.25rem 1.5rem; background: var(--color-primary-light); border-radius: var(--radius-md); border: 1px solid #C2DCFA; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <h4 style="font-size: 1.05rem; margin-bottom: 0.2rem;">Final Knowledge Assessment</h4>
                  <p style="font-size: 0.825rem; color: var(--color-text-muted); margin-bottom: 0;">5 multiple-choice questions &bull; Passing score: 70% &bull; Required for certificate</p>
                </div>
                <a href="#quiz/${course.id}" class="btn btn-primary btn-sm">
                  ${quizResult ? (quizResult.passed ? "Review Quiz (Passed)" : "Retry Quiz") : "Take Quiz"}
                </a>
              </div>
            </div>
          </div>

          <!-- Right Column: Sidebar Action Card & Trainer Badge -->
          <div>
            <div class="course-detail-card" style="position: sticky; top: calc(var(--nav-height) + 1.5rem);">
              <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem;">Start Your Training</h3>
              <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
                Free open educational access for students, job seekers, and CSS/competitive exam aspirants.
              </p>

              ${isEnrolled ? `
                <div style="margin-bottom: 1.5rem; padding: 1.25rem; background: var(--color-bg-subtle); border-radius: var(--radius-md);">
                  <div style="display: flex; justify-content: space-between; font-size: 0.85rem; font-weight: 700; margin-bottom: 0.5rem;">
                    <span>Course Progress</span>
                    <span>${progress.percentage}%</span>
                  </div>
                  <div class="progress-bar-wrap" style="height: 10px;">
                    <div class="progress-bar-fill" style="width: ${progress.percentage}%;"></div>
                  </div>
                  <div style="margin-top: 0.75rem; font-size: 0.8rem; color: var(--color-text-muted);">
                    ${progress.completedCount} of ${progress.total} lessons marked complete
                  </div>
                </div>
              ` : ''}

              <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;">
                <a href="#lesson/${course.id}/${course.lessons[0].id}" class="btn btn-primary btn-lg" style="width: 100%;">
                  ${isEnrolled ? "Continue Learning" : "Enroll & Start Lesson 1"}
                </a>
                <a href="#quiz/${course.id}" class="btn btn-secondary" style="width: 100%;">
                  Take Course Quiz
                </a>
              </div>

              <!-- Certificate Status Pill in Sidebar -->
              <div style="padding: 1rem; border: 1px solid var(--color-border); border-radius: var(--radius-md); font-size: 0.85rem; margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem; font-weight: 700; margin-bottom: 0.35rem; color: var(--color-primary-dark);">
                  <svg class="icon icon-sm" viewBox="0 0 24 24" style="color: #F59E0B;"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                  Certificate Eligibility
                </div>
                ${window.PCA_STORE.isEligibleForCertificate(course.id) ? `
                  <div style="color: var(--color-success); font-weight: 600; margin-bottom: 0.5rem;">
                    &#10003; Requirements Met! Certificate Unlocked.
                  </div>
                  <a href="#certificate/${course.id}" class="btn btn-accent btn-sm" style="width: 100%;">
                    View &amp; Print Certificate
                  </a>
                ` : `
                  <p style="color: var(--color-text-muted); font-size: 0.8rem; margin-bottom: 0;">
                    Complete all 7 lessons and pass the quiz (70%+) to earn your Academy-issued certificate.
                  </p>
                `}
              </div>

              <!-- Trainer Card in Sidebar -->
              <div style="border-top: 1px solid var(--color-border-light); padding-top: 1.25rem;">
                <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-text-muted); letter-spacing: 0.05em; display: block; margin-bottom: 0.75rem;">
                  Lead Trainer
                </span>
                <div style="display: flex; align-items: center; gap: 0.85rem;">
                  <div style="width: 44px; height: 44px; border-radius: 50%; background: var(--color-primary); color: #FFFFFF; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 1rem;">
                    SM
                  </div>
                  <div>
                    <h5 style="margin-bottom: 0.15rem;">Sajid Majeed</h5>
                    <small style="color: var(--color-text-muted); display: block; line-height: 1.3;">Management Trainer &bull; SAMTO Trainings</small>
                    <small style="color: var(--color-text-muted); display: block;">Lecturer &bull; Ghazi University</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
