/**
 * Presentation & Communication Academy
 * Homepage View Component
 */

window.PCA_HOME_VIEW = {
  render(container) {
    const courses = (window.PCA_COURSES || []).slice(0, 3);

    container.innerHTML = `
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-bg-accent"></div>
        <div class="container hero-grid">
          <div class="hero-content">
            <span class="badge badge-accent" style="margin-bottom: 1.25rem; font-size: 0.85rem; padding: 0.35rem 0.95rem;">
              Professional Bootcamp &amp; Masterclasses
            </span>
            <h1>
              Master the Art of <span class="highlight">Communication</span>
            </h1>
            <p class="hero-subtitle">
              Develop powerful presentation skills, confident body language, professional communication, and interview techniques through practical online learning.
            </p>
            <div class="hero-ctas">
              <a href="#courses" class="btn btn-accent btn-lg">
                Explore Courses
                <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="#course/public-speaking-mastery" class="btn btn-outline-white btn-lg">
                Start Learning
              </a>
            </div>

            <div class="hero-stats">
              <div class="hero-stat-item">
                <span class="hero-stat-number">5</span>
                <span class="hero-stat-label">Master Courses</span>
              </div>
              <div class="hero-stat-item">
                <span class="hero-stat-number">35</span>
                <span class="hero-stat-label">Guided Lessons</span>
              </div>
              <div class="hero-stat-item">
                <span class="hero-stat-number">100%</span>
                <span class="hero-stat-label">Practical Drills</span>
              </div>
              <div class="hero-stat-item">
                <span class="hero-stat-number">Verified</span>
                <span class="hero-stat-label">Certificates</span>
              </div>
            </div>
          </div>

          <div class="hero-visual-card">
            <!-- Professional Public Speaking & Presentation Illustration -->
            <svg class="stage-illustration" viewBox="0 0 500 360" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Backdrop & Slide Screen -->
              <rect x="70" y="40" width="360" height="200" rx="12" fill="#082B52" stroke="#16A6D9" stroke-width="3" />
              <!-- Slide Screen Content -->
              <rect x="95" y="65" width="180" height="14" rx="4" fill="#16A6D9" />
              <rect x="95" y="92" width="120" height="8" rx="3" fill="#60A5FA" opacity="0.8" />
              <rect x="95" y="110" width="140" height="8" rx="3" fill="#93C5FD" opacity="0.6" />
              <!-- Growth Chart Graphic on Slide -->
              <polyline points="290,170 330,140 370,115 410,80" stroke="#10B981" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="290" cy="170" r="5" fill="#10B981" />
              <circle cx="330" cy="140" r="5" fill="#10B981" />
              <circle cx="370" cy="115" r="5" fill="#10B981" />
              <circle cx="410" cy="80" r="6" fill="#FFFFFF" stroke="#10B981" stroke-width="3" />
              <!-- Stage Floor -->
              <ellipse cx="250" cy="300" rx="200" ry="35" fill="#0756A5" opacity="0.4" />
              <!-- Podium -->
              <path d="M190 220 L240 220 L235 310 L195 310 Z" fill="#0E3D6E" stroke="#16A6D9" stroke-width="1.5" />
              <rect x="180" y="215" width="70" height="10" rx="3" fill="#16A6D9" />
              <path d="M225 215 Q220 195 210 195" stroke="#FFFFFF" stroke-width="2.5" fill="none" />
              <circle cx="208" cy="193" r="4" fill="#10B981" />
              <!-- Confident Speaker Figure -->
              <!-- Body / Suit -->
              <path d="M140 310 C140 260 160 235 175 235 C190 235 205 260 205 310 Z" fill="#FFFFFF" opacity="0.95" />
              <!-- Tie / Shirt -->
              <path d="M171 236 L175 270 L179 236 Z" fill="#0756A5" />
              <!-- Head -->
              <circle cx="173" cy="205" r="18" fill="#FCE7F3" stroke="#FFFFFF" stroke-width="2" />
              <!-- Confident Gesturing Hand -->
              <path d="M145 260 Q120 250 115 230" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round" fill="none" />
              <circle cx="113" cy="228" r="5" fill="#FCE7F3" />
              <!-- Spotlight beam -->
              <polygon points="250,0 80,340 420,340" fill="url(#spotlightGrad)" opacity="0.18" />
              <defs>
                <linearGradient id="spotlightGrad" x1="250" y1="0" x2="250" y2="340" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#FFFFFF" />
                  <stop offset="1" stop-color="#16A6D9" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <!-- Floating Badges -->
            <div class="floating-pill floating-pill-1">
              <svg class="icon icon-sm" viewBox="0 0 24 24" style="color: #10B981;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              <span>Speak with Impact</span>
            </div>
            <div class="floating-pill floating-pill-2">
              <svg class="icon icon-sm" viewBox="0 0 24 24" style="color: var(--color-primary);"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
              <span>Verified Certification</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Learning Benefits Section -->
      <section class="section-padding" style="background-color: var(--color-bg-page);">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Core Advantages</span>
            <h2 class="section-title">Transform Your Communication Presence</h2>
            <p class="section-subtitle">
              Gain competitive advantage in academia, executive boardrooms, and competitive examinations with structured skills.
            </p>
          </div>

          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon-wrapper">
                <svg class="icon icon-lg" viewBox="0 0 24 24">
                  <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" y1="19" x2="12" y2="23"></line>
                  <line x1="8" y1="23" x2="16" y2="23"></line>
                </svg>
              </div>
              <h3 class="benefit-title">Improve Public Speaking</h3>
              <p class="benefit-desc">
                Overcome physiological stage fear, master vocal modulation, structure magnetic speeches, and hold the room's attention with unshakeable confidence.
              </p>
              <a href="#course/public-speaking-mastery" class="benefit-link">
                Explore Curriculum <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>

            <div class="benefit-card">
              <div class="benefit-icon-wrapper">
                <svg class="icon icon-lg" viewBox="0 0 24 24">
                  <circle cx="12" cy="7" r="4"></circle>
                  <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"></path>
                  <path d="M17 11l2 2 4-4"></path>
                </svg>
              </div>
              <h3 class="benefit-title">Develop Confident Body Language</h3>
              <p class="benefit-desc">
                Eliminate nervous pacifying gestures. Master authoritative posture, purposeful eye contact, and executive presence that commands immediate respect.
              </p>
              <a href="#course/body-language-and-confidence" class="benefit-link">
                Explore Curriculum <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>

            <div class="benefit-card">
              <div class="benefit-icon-wrapper">
                <svg class="icon icon-lg" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 class="benefit-title">Master Job Interviews</h3>
              <p class="benefit-desc">
                Ace corporate panels and CSS/competitive examination vivas using the STAR method, captivating 90-second introductions, and poised handling of curveball questions.
              </p>
              <a href="#course/interview-preparation-and-career-skills" class="benefit-link">
                Explore Curriculum <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>

            <div class="benefit-card">
              <div class="benefit-icon-wrapper">
                <svg class="icon icon-lg" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 class="benefit-title">Deliver Professional Presentations</h3>
              <p class="benefit-desc">
                Structure complex information into clear narratives using SCQA, craft clean visual slides adhering to the 10/20/30 rule, and deliver with seamless authority.
              </p>
              <a href="#course/presentation-skills-masterclass" class="benefit-link">
                Explore Curriculum <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Courses Section -->
      <section class="section-padding" style="background-color: var(--color-white); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Master Curricula</span>
            <h2 class="section-title">Featured Learning Programs</h2>
            <p class="section-subtitle">
              Comprehensive, step-by-step bootcamps equipped with practical exercises, timed speech tools, and knowledge verification quizzes.
            </p>
          </div>

          <div class="courses-grid">
            ${courses.map((course, idx) => `
              <div class="course-card">
                <div class="course-card-header course-header-${idx + 1}">
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

                  <div class="course-card-footer">
                    <a href="#course/${course.id}" class="btn btn-primary btn-sm" style="flex-grow: 1;">
                      View Course Details
                    </a>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>

          <div style="text-align: center; margin-top: 3rem;">
            <a href="#courses" class="btn btn-secondary btn-lg">
              Browse All 5 Courses
              <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </div>
      </section>

      <!-- How It Works Section -->
      <section class="section-padding" style="background-color: var(--color-bg-page);">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Structured Methodology</span>
            <h2 class="section-title">How Your Learning Works</h2>
            <p class="section-subtitle">
              A transparent, self-paced 6-step roadmap engineered for measurable skill acquisition and verified mastery.
            </p>
          </div>

          <div class="how-it-works-grid">
            <div class="step-card">
              <span class="step-number">01</span>
              <div class="step-icon-box">
                <svg class="icon icon-md" viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <h3>1. Choose a Course</h3>
              <p>Select from targeted programs in public speaking, nonverbal communication, presentations, interviews, or workplace clarity.</p>
            </div>

            <div class="step-card">
              <span class="step-number">02</span>
              <div class="step-icon-box">
                <svg class="icon icon-md" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
              </div>
              <h3>2. Learn Structured Lessons</h3>
              <p>Work through step-by-step frameworks, real-world case examples, and proven rhetorical models without filler content.</p>
            </div>

            <div class="step-card">
              <span class="step-number">03</span>
              <div class="step-icon-box">
                <svg class="icon icon-md" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <h3>3. Practice Your Skills</h3>
              <p>Execute timed spoken drills, 2-minute elevator speeches, and guided nonverbal self-reflection checklists.</p>
            </div>

            <div class="step-card">
              <span class="step-number">04</span>
              <div class="step-icon-box">
                <svg class="icon icon-md" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              </div>
              <h3>4. Complete Quizzes &amp; Drills</h3>
              <p>Test your knowledge with multiple-choice assessments featuring instant feedback and comprehensive answer explanations.</p>
            </div>

            <div class="step-card">
              <span class="step-number">05</span>
              <div class="step-icon-box">
                <svg class="icon icon-md" viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              </div>
              <h3>5. Track Your Progress</h3>
              <p>Monitor your completion percentage, quiz scores, and practice records in your personal Student Dashboard.</p>
            </div>

            <div class="step-card">
              <span class="step-number">06</span>
              <div class="step-icon-box">
                <svg class="icon icon-md" viewBox="0 0 24 24"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
              </div>
              <h3>6. Earn Your Certificate</h3>
              <p>Complete all course lessons and achieve a passing score of 70%+ on the quiz to unlock your Academy-issued learning certificate.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Trainer Spotlight Section -->
      <section class="section-padding trainer-section">
        <div class="container">
          <div class="trainer-card-layout">
            <div class="trainer-photo-container">
              <div class="trainer-avatar">
                <span class="trainer-initials">SM</span>
              </div>
              <h3 style="color: #FFFFFF; font-size: 1.6rem; margin-bottom: 0.35rem;">Sajid Majeed</h3>
              <span style="color: #A5D2F6; font-size: 0.9rem; font-weight: 600;">Lead Communication Trainer</span>
            </div>

            <div class="trainer-card-info">
              <span class="section-badge" style="width: fit-content;">Trainer Spotlight</span>
              <h2 style="margin-bottom: 1rem;">Meet Trainer Sajid Majeed</h2>

              <div class="trainer-role-tags">
                <span class="trainer-role-tag">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
                  Management Trainer | SAMTO Trainings
                </span>
                <span class="trainer-role-tag">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                  Lecturer | Ghazi University
                </span>
              </div>

              <p class="trainer-bio">
                Sajid Majeed combines higher education instruction with real-world executive management training. His programs bridge the gap between academic theory and practical corporate communication, equipping students and professionals to overcome stage anxiety, present with visual clarity, and excel in competitive examination viva boards.
              </p>

              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="#trainer" class="btn btn-primary">
                  View Full Trainer Profile
                </a>
                <a href="#contact" class="btn btn-secondary">
                  Inquire for Corporate / Group Training
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Student Testimonials (Clearly labeled sample content) -->
      <section class="section-padding" style="background-color: var(--color-white);">
        <div class="container">
          <div class="section-header">
            <span class="section-badge">Student Feedback</span>
            <h2 class="section-title">What Students Learn</h2>
            <p class="section-subtitle">
              Sample student feedback illustrating typical learning outcomes and skill improvements across our programs.
            </p>
            <small style="display: block; margin-top: 0.5rem; color: var(--color-text-muted); font-style: italic;">
              (Note: The cards below represent clearly labeled sample educational feedback for platform demonstration.)
            </small>
          </div>

          <div class="testimonials-grid">
            <div class="testimonial-card">
              <p class="testimonial-quote">
                "The 2-Minute Speech Architecture completely transformed my approach to public presentations. Instead of scrambling to memorize every word, having clear structural milestones helped me stay grounded and calm."
              </p>
              <div class="testimonial-meta">
                <div class="testimonial-avatar">CA</div>
                <div>
                  <div class="testimonial-author-name">CSS Exam Aspirant (Sample Profile)</div>
                  <div class="testimonial-author-role">Competitive Examination Candidate</div>
                </div>
              </div>
            </div>

            <div class="testimonial-card">
              <p class="testimonial-quote">
                "The STAR method drills and the self-assessment checklists for interview preparation gave me the concrete structure I was missing. I learned how to highlight personal actions without sounding rehearsed."
              </p>
              <div class="testimonial-meta">
                <div class="testimonial-avatar">UG</div>
                <div>
                  <div class="testimonial-author-name">University Graduate (Sample Profile)</div>
                  <div class="testimonial-author-role">Job Seeker in Management Sciences</div>
                </div>
              </div>
            </div>

            <div class="testimonial-card">
              <p class="testimonial-quote">
                "Understanding the Power Sphere for body language and how to avoid the 'concentration frown' during meetings helped me project executive poise. The course is deeply practical from day one."
              </p>
              <div class="testimonial-meta">
                <div class="testimonial-avatar">CP</div>
                <div>
                  <div class="testimonial-author-name">Corporate Professional (Sample Profile)</div>
                  <div class="testimonial-author-role">Project Coordinator</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Final Call to Action -->
      <section class="section-padding" style="background-color: var(--color-bg-page);">
        <div class="container">
          <div class="cta-banner-section">
            <h2>Your Confidence Starts Here</h2>
            <p>
              Take the first step toward masterclass public speaking, commanding body language, and high-impact career communication today.
            </p>
            <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
              <a href="#courses" class="btn btn-accent btn-lg">
                Begin Your Learning Journey
                <svg class="icon icon-sm" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
              <a href="https://wa.me/923334643412" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-lg">
                <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                WhatsApp Inquiry: +92 333 4643412
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
};
