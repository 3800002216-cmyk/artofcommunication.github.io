/**
 * Presentation & Communication Academy
 * Trainer Profile View Component
 * Sajid Majeed - Verified Profile Details
 */

window.PCA_TRAINER_VIEW = {
  render(container) {
    const trainer = window.PCA_TRAINER;
    const courses = window.PCA_COURSES || [];

    container.innerHTML = `
      <!-- Trainer Hero Header -->
      <section style="background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%); color: var(--color-white); padding: 4rem 0 4.5rem 0;">
        <div class="container">
          <div style="display: flex; align-items: center; gap: 2.5rem; flex-wrap: wrap;">
            <div style="width: 130px; height: 130px; border-radius: 50%; border: 4px solid rgba(255, 255, 255, 0.4); background: rgba(255, 255, 255, 0.15); display: flex; align-items: center; justify-content: center; font-size: 3.25rem; font-weight: 800; font-family: var(--font-heading); color: #FFFFFF; box-shadow: var(--shadow-lg);">
              ${trainer.initials}
            </div>

            <div style="flex-grow: 1; max-width: 750px;">
              <span class="badge badge-accent" style="margin-bottom: 0.75rem; font-size: 0.85rem; padding: 0.35rem 0.95rem;">
                Lead Trainer &amp; Academic Mentor
              </span>
              <h1 style="color: #FFFFFF; font-size: 2.85rem; margin-bottom: 0.5rem; line-height: 1.2;">
                ${trainer.name}
              </h1>

              <div style="display: flex; flex-direction: column; gap: 0.35rem; margin-bottom: 1.5rem;">
                ${trainer.roles.map(r => `
                  <div style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.05rem; font-weight: 600; color: #D3E6FA;">
                    <svg class="icon icon-sm" viewBox="0 0 24 24" style="color: var(--color-accent);"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span>${r}</span>
                  </div>
                `).join("")}
              </div>

              <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <a href="#contact" class="btn btn-accent btn-md">
                  Inquire for Training Sessions
                </a>
                <a href="${trainer.whatsAppLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp btn-md">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  Direct WhatsApp: ${trainer.contactNumber}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Profile Content -->
      <div class="container section-padding">
        <div style="display: grid; grid-template-columns: 1.6fr 1fr; gap: 3rem;">
          <div>
            <!-- Bio & Background -->
            <div class="card" style="padding: 2.5rem; margin-bottom: 2.5rem;">
              <h2 style="font-size: 1.65rem; margin-bottom: 1.25rem;">Trainer Introduction</h2>
              <p style="font-size: 1.05rem; line-height: 1.8; color: var(--color-text-main); margin-bottom: 1.5rem;">
                ${trainer.bio}
              </p>
              <p style="font-size: 1.05rem; line-height: 1.8; color: var(--color-text-main);">
                Through his dual appointments as a Management Trainer at SAMTO Trainings and Lecturer at Ghazi University, Sajid Majeed mentors students and young professionals seeking to develop authentic voice, overcome stage fright, and structure presentations that inspire action.
              </p>
            </div>

            <!-- Teaching Approach -->
            <div class="card" style="padding: 2.5rem; margin-bottom: 2.5rem;">
              <h2 style="font-size: 1.65rem; margin-bottom: 1.5rem;">Teaching Philosophy &amp; Methodology</h2>
              <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                ${trainer.teachingApproach.map((item, idx) => `
                  <div style="display: flex; gap: 1.25rem; align-items: flex-start;">
                    <div style="width: 38px; height: 38px; border-radius: var(--radius-md); background: var(--color-primary-light); color: var(--color-primary); display: flex; align-items: center; justify-content: center; font-weight: 700; flex-shrink: 0;">
                      0${idx + 1}
                    </div>
                    <div>
                      <h4 style="font-size: 1.15rem; margin-bottom: 0.35rem;">${item.title}</h4>
                      <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 0;">
                        ${item.description}
                      </p>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>

            <!-- Training Courses Under Trainer -->
            <div class="card" style="padding: 2.5rem;">
              <h2 style="font-size: 1.65rem; margin-bottom: 1.25rem;">Courses Designed &amp; Led</h2>
              <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${courses.map(course => `
                  <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.25rem; background: var(--color-bg-subtle); border-radius: var(--radius-md); border: 1px solid var(--color-border-light);">
                    <div>
                      <h4 style="font-size: 1.05rem; margin-bottom: 0.2rem;">${course.title}</h4>
                      <small style="color: var(--color-text-muted);">${course.duration} &bull; ${course.lessonsCount} Lessons &bull; ${course.level}</small>
                    </div>
                    <a href="#course/${course.id}" class="btn btn-primary btn-sm">
                      View Curriculum
                    </a>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>

          <!-- Right Column: Training Topics & Direct Outreach -->
          <div>
            <!-- Core Topics Card -->
            <div class="card" style="padding: 2rem; margin-bottom: 2rem;">
              <h3 style="font-size: 1.3rem; margin-bottom: 1.25rem;">Core Training Topics</h3>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.85rem;">
                ${trainer.coreTopics.map(topic => `
                  <li style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.95rem; color: var(--color-primary-dark); font-weight: 600;">
                    <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-accent); flex-shrink: 0;"></div>
                    <span>${topic}</span>
                  </li>
                `).join("")}
              </ul>
            </div>

            <!-- Direct Contact Card -->
            <div class="card" style="padding: 2rem; background: linear-gradient(135deg, #082B52 0%, #0756A5 100%); color: var(--color-white);">
              <h3 style="color: #FFFFFF; font-size: 1.3rem; margin-bottom: 0.75rem;">Training Inquiries</h3>
              <p style="color: #D3E6FA; font-size: 0.925rem; margin-bottom: 1.5rem; line-height: 1.6;">
                Interested in booking customized corporate bootcamps, university workshops, or CSS interview coaching sessions with Trainer Sajid Majeed?
              </p>

              <div style="display: flex; flex-direction: column; gap: 0.85rem;">
                <a href="https://wa.me/923334643412" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp" style="width: 100%;">
                  <svg class="icon icon-sm" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  Direct WhatsApp: +92 333 4643412
                </a>
                <a href="#contact" class="btn btn-outline-white" style="width: 100%;">
                  Submit Academy Inquiry Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};
