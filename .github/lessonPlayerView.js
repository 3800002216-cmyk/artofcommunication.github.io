/**
 * Presentation & Communication Academy
 * Interactive Lesson Player Component
 */

window.PCA_LESSON_PLAYER_VIEW = {
  activeTimerInterval: null,
  timerSecondsRemaining: 120,

  render(container, params) {
    // Clear any previous timer
    if (this.activeTimerInterval) {
      clearInterval(this.activeTimerInterval);
      this.activeTimerInterval = null;
    }
    this.timerSecondsRemaining = 120;

    const { courseId, lessonId } = params;
    const course = (window.PCA_COURSES || []).find(c => c.id === courseId);

    if (!course) {
      container.innerHTML = `<div class="container section-padding text-center"><h2>Course Not Found</h2></div>`;
      return;
    }

    // Auto enroll if not already
    window.PCA_STORE.enrollCourse(course.id);

    const lessonIndex = course.lessons.findIndex(l => l.id === lessonId);
    const lesson = course.lessons[lessonIndex >= 0 ? lessonIndex : 0];
    const actualLessonIndex = lessonIndex >= 0 ? lessonIndex : 0;

    const prevLesson = actualLessonIndex > 0 ? course.lessons[actualLessonIndex - 1] : null;
    const nextLesson = actualLessonIndex < course.lessons.length - 1 ? course.lessons[actualLessonIndex + 1] : null;

    const isCurrentComplete = window.PCA_STORE.isLessonCompleted(course.id, lesson.id);
    const courseProgress = window.PCA_STORE.getCourseProgress(course.id);
    const existingNote = window.PCA_STORE.getNote(lesson.id);

    container.innerHTML = `
      <div class="lesson-player-container">
        <!-- Sidebar Navigation -->
        <aside class="lesson-sidebar">
          <div class="lesson-sidebar-header">
            <a href="#course/${course.id}" style="display: flex; align-items: center; gap: 0.35rem; font-size: 0.8rem; font-weight: 600; color: var(--color-primary); margin-bottom: 0.5rem;">
              <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
              Back to Course Overview
            </a>
            <h4 style="font-size: 1.15rem; margin-bottom: 0.5rem;">${course.title}</h4>
            
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 600;">
              <span>Course Progress</span>
              <span id="sidebar-progress-label">${courseProgress.percentage}% (${courseProgress.completedCount}/${courseProgress.total})</span>
            </div>
            <div class="progress-bar-wrap">
              <div class="progress-bar-fill" id="sidebar-progress-fill" style="width: ${courseProgress.percentage}%;"></div>
            </div>
          </div>

          <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--color-text-muted); letter-spacing: 0.05em; display: block; margin-bottom: 0.65rem;">
            Course Lessons
          </span>

          <ul class="lesson-menu-list">
            ${course.lessons.map((l, idx) => {
              const isComp = window.PCA_STORE.isLessonCompleted(course.id, l.id);
              const isActive = l.id === lesson.id;
              return `
                <li>
                  <a href="#lesson/${course.id}/${l.id}" class="lesson-menu-item ${isActive ? 'active' : ''} ${isComp ? 'completed' : ''}">
                    <span style="width: 22px; height: 22px; border-radius: 50%; background: ${isComp ? 'var(--color-success-light)' : (isActive ? 'var(--color-primary)' : 'var(--color-bg-subtle)')}; color: ${isComp ? 'var(--color-success)' : (isActive ? '#FFFFFF' : 'var(--color-text-muted)')}; display: flex; align-items: center; justify-content: center; font-size: 0.75rem; flex-shrink: 0;">
                      ${isComp ? '&#10003;' : (idx + 1)}
                    </span>
                    <span style="flex-grow: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${l.title}</span>
                  </a>
                </li>
              `;
            }).join("")}

            <li style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid var(--color-border-light);">
              <a href="#quiz/${course.id}" class="lesson-menu-item" style="border: 1px solid var(--color-primary); background: var(--color-primary-light);">
                <svg class="icon icon-sm" viewBox="0 0 24 24" style="color: var(--color-primary);"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
                <span style="font-weight: 700; color: var(--color-primary-dark);">Course Knowledge Quiz</span>
              </a>
            </li>
          </ul>
        </aside>

        <!-- Main Content Area -->
        <main class="lesson-content-area">
          <div class="lesson-article">
            <!-- Breadcrumbs -->
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 1.25rem;">
              <a href="#courses">Courses</a>
              <span>/</span>
              <a href="#course/${course.id}">${course.title}</a>
              <span>/</span>
              <span style="color: var(--color-primary-dark); font-weight: 600;">Lesson ${actualLessonIndex + 1}</span>
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
              <span class="badge badge-primary">Lesson ${actualLessonIndex + 1} of ${course.lessons.length}</span>
              <span class="badge badge-navy">Estimated: ${lesson.duration}</span>
            </div>

            <h1>${lesson.title}</h1>

            <!-- Objectives Box -->
            <div class="lesson-objectives-box">
              <h4 style="color: var(--color-primary-dark); font-size: 1.05rem;">Learning Objectives</h4>
              <ul>
                ${lesson.objectives.map(obj => `<li>${obj}</li>`).join("")}
              </ul>
            </div>

            <!-- In-Depth Content -->
            <div class="lesson-body-prose">
              ${lesson.content}
            </div>

            <!-- Standard Practice Activity (if not already embedded in capstone) -->
            ${lesson.practiceActivity && !lesson.isCapstone ? `
              <div class="practice-activity-card">
                <h3>
                  <svg class="icon icon-md" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  Interactive Practice Drill: ${lesson.practiceActivity.title}
                </h3>
                <p style="margin-bottom: 1rem;">${lesson.practiceActivity.instructions}</p>
                
                <h4 style="font-size: 0.95rem; margin-bottom: 0.5rem;">Self-Checklist:</h4>
                <div class="checklist-container">
                  ${lesson.practiceActivity.checklist.map((item, idx) => `
                    <label class="checklist-item">
                      <input type="checkbox" id="chk-practice-${idx}">
                      <span>${item}</span>
                    </label>
                  `).join("")}
                </div>
              </div>
            ` : ''}

            <!-- Key Takeaways -->
            <div class="takeaways-box">
              <h4>Key Takeaways &bull; Remember These Principles</h4>
              <ul>
                ${lesson.takeaways.map(t => `<li>${t}</li>`).join("")}
              </ul>
            </div>

            <!-- Student Scratchpad Notes -->
            <div class="notes-pad-wrap">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                <h4 style="font-size: 1rem; color: var(--color-primary-dark); display: flex; align-items: center; gap: 0.4rem;">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                  My Lesson Reflection &amp; Practice Notes
                </h4>
                <span id="notes-status-badge" style="font-size: 0.75rem; color: var(--color-text-muted);">Auto-saved locally</span>
              </div>
              <textarea id="lesson-notes-input" class="form-control" placeholder="Jot down personal speaking insights, speech hook ideas, or reminders for this lesson..." style="min-height: 80px;">${existingNote}</textarea>
            </div>

            <!-- Bottom Navigation Bar -->
            <div class="lesson-nav-bar">
              <div>
                ${prevLesson ? `
                  <a href="#lesson/${course.id}/${prevLesson.id}" class="btn btn-secondary btn-sm">
                    <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Previous Lesson
                  </a>
                ` : `
                  <a href="#course/${course.id}" class="btn btn-secondary btn-sm">Course Overview</a>
                `}
              </div>

              <div>
                <button id="btn-toggle-complete" class="btn ${isCurrentComplete ? 'btn-whatsapp' : 'btn-primary'} btn-sm">
                  ${isCurrentComplete ? '&#10003; Marked as Complete' : 'Mark Lesson as Complete'}
                </button>
              </div>

              <div>
                ${nextLesson ? `
                  <a href="#lesson/${course.id}/${nextLesson.id}" class="btn btn-primary btn-sm">
                    Next Lesson
                    <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                ` : `
                  <a href="#quiz/${course.id}" class="btn btn-accent btn-sm">
                    Take Final Course Quiz
                    <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </a>
                `}
              </div>
            </div>
          </div>
        </main>
      </div>
    `;

    // Hook Toggle Complete button
    const toggleBtn = document.getElementById("btn-toggle-complete");
    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        const isComplete = window.PCA_STORE.toggleLessonComplete(course.id, lesson.id);
        if (isComplete) {
          toggleBtn.className = "btn btn-whatsapp btn-sm";
          toggleBtn.innerHTML = "&#10003; Marked as Complete";
          window.PCA_APP.showToast("Lesson completed! Keep up the momentum.", "success");
        } else {
          toggleBtn.className = "btn btn-primary btn-sm";
          toggleBtn.innerHTML = "Mark Lesson as Complete";
          window.PCA_APP.showToast("Lesson marked as incomplete.", "info");
        }

        // Update progress indicators
        const updatedProgress = window.PCA_STORE.getCourseProgress(course.id);
        const labelEl = document.getElementById("sidebar-progress-label");
        const fillEl = document.getElementById("sidebar-progress-fill");
        if (labelEl) labelEl.textContent = `${updatedProgress.percentage}% (${updatedProgress.completedCount}/${updatedProgress.total})`;
        if (fillEl) fillEl.style.width = `${updatedProgress.percentage}%`;
      });
    }

    // Hook Notes saving with debounce
    const notesInput = document.getElementById("lesson-notes-input");
    const notesBadge = document.getElementById("notes-status-badge");
    if (notesInput) {
      notesInput.addEventListener("input", (e) => {
        window.PCA_STORE.saveNote(lesson.id, e.target.value);
        if (notesBadge) {
          notesBadge.textContent = "Saved to storage";
          notesBadge.style.color = "var(--color-success)";
          setTimeout(() => {
            notesBadge.textContent = "Auto-saved locally";
            notesBadge.style.color = "var(--color-text-muted)";
          }, 2000);
        }
      });
    }

    // Hook Speech Practice Timer (if present in this lesson, e.g. capstone)
    const timerDisplay = document.getElementById("timer-display");
    const btnStart = document.getElementById("btn-timer-start");
    const btnReset = document.getElementById("btn-timer-reset");

    if (timerDisplay && btnStart && btnReset) {
      let isRunning = false;
      let secondsLeft = 120;

      const formatTime = (secs) => {
        const m = Math.floor(secs / 60).toString().padStart(2, "0");
        const s = (secs % 60).toString().padStart(2, "0");
        return `${m}:${s}`;
      };

      btnStart.addEventListener("click", () => {
        if (!isRunning) {
          isRunning = true;
          btnStart.textContent = "Pause Timer";
          btnStart.className = "btn btn-warning btn-sm";
          this.activeTimerInterval = setInterval(() => {
            if (secondsLeft > 0) {
              secondsLeft--;
              timerDisplay.textContent = formatTime(secondsLeft);
              if (secondsLeft === 30) {
                timerDisplay.style.color = "var(--color-warning)";
              } else if (secondsLeft === 0) {
                timerDisplay.style.color = "var(--color-error)";
                clearInterval(this.activeTimerInterval);
                window.PCA_APP.showToast("Time's up! Great job delivering your 2-minute speech.", "success");
                btnStart.textContent = "Finished!";
                btnStart.disabled = true;
              }
            }
          }, 1000);
        } else {
          isRunning = false;
          clearInterval(this.activeTimerInterval);
          btnStart.textContent = "Resume Timer";
          btnStart.className = "btn btn-primary btn-sm";
        }
      });

      btnReset.addEventListener("click", () => {
        clearInterval(this.activeTimerInterval);
        isRunning = false;
        secondsLeft = 120;
        timerDisplay.textContent = "02:00";
        timerDisplay.style.color = "var(--color-primary-dark)";
        btnStart.textContent = "Start 2-Min Timer";
        btnStart.className = "btn btn-primary btn-sm";
        btnStart.disabled = false;
      });
    }
  }
};
