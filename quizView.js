/**
 * Presentation & Communication Academy
 * Interactive Quiz & Assessment Engine Component
 */

window.PCA_QUIZ_VIEW = {
  render(container, params) {
    const courseId = params.courseId;
    const course = (window.PCA_COURSES || []).find(c => c.id === courseId);
    const quizData = (window.PCA_QUIZZES || {})[courseId];

    if (!course || !quizData) {
      container.innerHTML = `
        <div class="container section-padding text-center">
          <h2>Quiz Not Found</h2>
          <p style="margin-top: 1rem;">No assessment is configured for this course yet.</p>
          <a href="#courses" class="btn btn-primary" style="margin-top: 1.5rem;">Return to Courses</a>
        </div>
      `;
      return;
    }

    let userAnswers = {};
    let submittedQuestions = {};
    let quizCompleted = false;

    // Check if previously passed
    const previousResult = window.PCA_STORE.getQuizResult(courseId);

    function renderQuizUI() {
      if (quizCompleted) {
        renderQuizResults();
        return;
      }

      container.innerHTML = `
        <div class="container" style="padding-top: 3rem; padding-bottom: 5rem;">
          <div class="quiz-container">
            <!-- Breadcrumbs -->
            <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 1.5rem;">
              <a href="#courses">Courses</a>
              <span>/</span>
              <a href="#course/${course.id}">${course.title}</a>
              <span>/</span>
              <span style="color: var(--color-primary-dark); font-weight: 600;">Knowledge Assessment</span>
            </div>

            <div class="quiz-card">
              <div class="quiz-header">
                <div>
                  <span class="badge badge-primary" style="margin-bottom: 0.4rem;">Educational Assessment</span>
                  <h2 style="font-size: 1.75rem; margin-bottom: 0.25rem;">${quizData.title}</h2>
                  <p style="font-size: 0.875rem; color: var(--color-text-muted); margin-bottom: 0;">
                    5 Multiple-Choice Questions &bull; Passing Score: 70% &bull; Unlimited Practice
                  </p>
                </div>
                ${previousResult ? `
                  <div style="text-align: right;">
                    <span class="badge ${previousResult.passed ? 'badge-success' : 'badge-warning'}">
                      Last Score: ${previousResult.percentage}%
                    </span>
                  </div>
                ` : ''}
              </div>

              <!-- Disclaimer Alert -->
              <div style="background: var(--color-bg-subtle); border-left: 4px solid var(--color-accent); padding: 0.85rem 1.25rem; border-radius: 0 var(--radius-md) var(--radius-md) 0; margin-bottom: 2rem; font-size: 0.825rem; color: var(--color-text-muted);">
                <strong>Assessment Notice:</strong> ${quizData.disclaimer}
              </div>

              <!-- Questions List -->
              <div id="questions-wrapper">
                ${quizData.questions.map((q, qIdx) => {
                  const isSubmitted = !!submittedQuestions[q.id];
                  const selectedOpt = userAnswers[q.id];
                  const isCorrect = selectedOpt === q.correctIndex;

                  return `
                    <div class="quiz-question-card" id="q-card-${q.id}">
                      <div class="quiz-question-text">
                        <span style="color: var(--color-primary); margin-right: 0.4rem;">Question ${qIdx + 1} of ${quizData.questions.length}:</span>
                        ${q.question}
                      </div>

                      <div class="quiz-options-list">
                        ${q.options.map((optText, optIdx) => {
                          let optClass = "quiz-option-label";
                          if (selectedOpt === optIdx) optClass += " selected";
                          if (isSubmitted) {
                            if (optIdx === q.correctIndex) optClass += " correct";
                            else if (selectedOpt === optIdx && !isCorrect) optClass += " incorrect";
                          }

                          return `
                            <label class="${optClass}" data-qid="${q.id}" data-opt="${optIdx}">
                              <input type="radio" name="opt-${q.id}" value="${optIdx}" ${selectedOpt === optIdx ? 'checked' : ''} ${isSubmitted ? 'disabled' : ''} style="display: none;">
                              <span style="width: 26px; height: 26px; border-radius: 50%; border: 1.5px solid currentColor; display: flex; align-items: center; justify-content: center; font-size: 0.8rem; font-weight: 700; flex-shrink: 0;">
                                ${String.fromCharCode(65 + optIdx)}
                              </span>
                              <span>${optText}</span>
                            </label>
                          `;
                        }).join("")}
                      </div>

                      <!-- Question Feedback Box if Submitted -->
                      ${isSubmitted ? `
                        <div class="quiz-feedback-box ${isCorrect ? 'correct' : 'incorrect'}">
                          <div style="font-weight: 700; margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.4rem;">
                            ${isCorrect ? '&#10003; Correct!' : '&#10008; Incorrect'}
                          </div>
                          <div>${q.explanation}</div>
                        </div>
                      ` : `
                        <div style="margin-top: 1rem; text-align: right;">
                          <button class="btn btn-secondary btn-sm btn-submit-single" data-qid="${q.id}" ${selectedOpt === undefined ? 'disabled' : ''}>
                            Submit Answer
                          </button>
                        </div>
                      `}
                    </div>
                  `;
                }).join("")}
              </div>

              <!-- Final Submission Row -->
              <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1.5rem; margin-top: 1.5rem; border-top: 1px solid var(--color-border); flex-wrap: gap;">
                <div style="font-size: 0.85rem; color: var(--color-text-muted);">
                  Answered: <strong id="answered-counter">${Object.keys(submittedQuestions).length}</strong> of ${quizData.questions.length} Questions
                </div>
                <button class="btn btn-primary btn-lg" id="btn-finish-quiz" ${Object.keys(submittedQuestions).length < quizData.questions.length ? 'disabled' : ''}>
                  Calculate Final Score
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      attachEventListeners();
    }

    function attachEventListeners() {
      // Option Selection
      document.querySelectorAll(".quiz-option-label").forEach(label => {
        label.addEventListener("click", () => {
          const qId = label.dataset.qid;
          const optIdx = parseInt(label.dataset.opt, 10);
          if (submittedQuestions[qId]) return;

          userAnswers[qId] = optIdx;

          // Re-highlight options in this question
          document.querySelectorAll(`[data-qid="${qId}"]`).forEach(l => {
            l.classList.remove("selected");
          });
          label.classList.add("selected");

          // Enable single submit button
          const btnSingle = document.querySelector(`.btn-submit-single[data-qid="${qId}"]`);
          if (btnSingle) btnSingle.disabled = false;
        });
      });

      // Submit Single Answer
      document.querySelectorAll(".btn-submit-single").forEach(btn => {
        btn.addEventListener("click", () => {
          const qId = btn.dataset.qid;
          submittedQuestions[qId] = true;
          renderQuizUI();
        });
      });

      // Finish Quiz Button
      const btnFinish = document.getElementById("btn-finish-quiz");
      if (btnFinish) {
        btnFinish.addEventListener("click", () => {
          calculateAndComplete();
        });
      }
    }

    function calculateAndComplete() {
      let correctCount = 0;
      quizData.questions.forEach(q => {
        if (userAnswers[q.id] === q.correctIndex) {
          correctCount++;
        }
      });

      const total = quizData.questions.length;
      const percentage = Math.round((correctCount / total) * 100);
      const passed = percentage >= quizData.passingScorePct;

      // Save to store
      window.PCA_STORE.saveQuizResult(courseId, correctCount, total, percentage, passed);

      quizCompleted = true;
      renderQuizResults(correctCount, total, percentage, passed);
    }

    function renderQuizResults(correctCount, total, percentage, passed) {
      if (correctCount === undefined) {
        const stored = window.PCA_STORE.getQuizResult(courseId);
        if (stored) {
          correctCount = stored.score;
          total = stored.total;
          percentage = stored.percentage;
          passed = stored.passed;
        } else {
          correctCount = 0;
          total = 5;
          percentage = 0;
          passed = false;
        }
      }

      const isEligibleCert = window.PCA_STORE.isEligibleForCertificate(courseId);

      container.innerHTML = `
        <div class="container" style="padding-top: 3.5rem; padding-bottom: 5rem;">
          <div class="quiz-container">
            <div class="quiz-card" style="text-align: center;">
              <div class="quiz-results-banner">
                <div class="quiz-score-circle" style="border-color: ${passed ? 'var(--color-success)' : 'var(--color-error)'}; background: ${passed ? 'var(--color-success-light)' : 'var(--color-error-light)'};">
                  <span class="quiz-score-num" style="color: ${passed ? '#065F46' : '#991B1B'};">${correctCount}/${total}</span>
                  <span class="quiz-score-pct" style="color: ${passed ? '#065F46' : '#991B1B'};">${percentage}%</span>
                </div>

                <span class="badge ${passed ? 'badge-success' : 'badge-danger'}" style="font-size: 0.95rem; padding: 0.4rem 1.25rem; margin-bottom: 1rem;">
                  ${passed ? '&#10003; Assessment Passed!' : 'Needs Improvement (Score Below 70%)'}
                </span>

                <h2 style="font-size: 2.15rem; margin-bottom: 0.75rem;">
                  ${passed ? 'Congratulations on Mastering the Material!' : 'Good Effort! Review Lessons and Retry.'}
                </h2>
                <p style="color: var(--color-text-muted); max-width: 580px; margin: 0 auto 2rem auto; font-size: 1.05rem;">
                  ${passed 
                    ? `You demonstrated solid command of ${course.title} concepts. Your result has been saved to your student profile.`
                    : `You scored ${percentage}%. You need at least 70% to meet certificate eligibility. Review the lesson explanations and practice again.`
                  }
                </p>

                <!-- Certificate Status Card -->
                <div style="background: var(--color-bg-subtle); border-radius: var(--radius-lg); border: 1px solid var(--color-border); padding: 1.75rem; max-width: 560px; margin: 0 auto 2.5rem auto; text-align: left;">
                  <h4 style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
                    <svg class="icon icon-sm" viewBox="0 0 24 24" style="color: #F59E0B;"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                    Certificate of Completion Eligibility
                  </h4>
                  
                  <div style="font-size: 0.875rem; color: var(--color-text-main); margin-bottom: 1rem;">
                    <div>&bull; Complete all ${course.lessonsCount} course lessons: <strong>${window.PCA_STORE.getCourseProgress(courseId).isAllLessonsComplete ? '&#10003; Met' : 'Incomplete'}</strong></div>
                    <div>&bull; Achieve passing quiz score (70%+): <strong>${passed ? '&#10003; Met' : 'Unmet'}</strong></div>
                  </div>

                  ${isEligibleCert ? `
                    <a href="#certificate/${courseId}" class="btn btn-accent btn-lg" style="width: 100%;">
                      View &amp; Print Your Certificate
                      <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                    </a>
                  ` : `
                    <p style="font-size: 0.8rem; color: var(--color-text-muted); margin-bottom: 0;">
                      Once all lessons are marked complete and this quiz is passed, your academy certificate is generated automatically.
                    </p>
                  `}
                </div>

                <!-- Action Buttons -->
                <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
                  <button class="btn btn-secondary" id="btn-retry-quiz">
                    <svg class="icon icon-sm" viewBox="0 0 24 24"><polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path></svg>
                    Retry Quiz (Practice Again)
                  </button>
                  <a href="#dashboard" class="btn btn-primary">
                    Go to Student Dashboard
                  </a>
                  <a href="#course/${courseId}" class="btn btn-secondary">
                    Review Course Lessons
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;

      const retryBtn = document.getElementById("btn-retry-quiz");
      if (retryBtn) {
        retryBtn.addEventListener("click", () => {
          userAnswers = {};
          submittedQuestions = {};
          quizCompleted = false;
          renderQuizUI();
        });
      }
    }

    renderQuizUI();
  }
};
