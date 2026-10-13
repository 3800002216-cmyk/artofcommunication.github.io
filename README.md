# Presentation & Communication Academy
> *Speak with Confidence. Present with Impact.*

A modern, responsive, zero-dependency educational web application designed to help university students, job seekers, and competitive examination (CSS/PMS) aspirants master public speaking, nonverbal body language, presentation slide architecture, and interview skills.

Inspired by the professional blue-and-white visual identity of an executive communication bootcamp.

---

## 🎨 Brand Identity & Design System

- **Primary Blue:** `#0756A5`
- **Dark Navy:** `#082B52`
- **Light Blue:** `#EAF4FF`
- **White:** `#FFFFFF`
- **Accent Cyan:** `#16A6D9`
- **Text Color:** `#243447`
- **Typography:** Plus Jakarta Sans (Headings), Inter (Body), JetBrains Mono (Timers/Code)
- **Responsive Layout:** Optimized for mobile smartphones, tablets, laptops, and ultra-wide desktop screens.

---

## 🚀 Key Features Implemented

### 1. Modern Interactive Homepage
- **Navigation Bar:** Academy logo emblem, links to Home, Courses, Resources, Trainer, Student Dashboard, and Contact. Mobile slide-down drawer.
- **Hero Section:** "Master the Art of Communication", custom vector illustration of a speaker on stage with presentation slides, and quick stats.
- **Learning Benefits Cards:** Public speaking, body language, job interviews, professional presentations.
- **Featured Courses:** Quick access to top masterclasses.
- **How It Works:** 6-step guided learning progression from course selection to certificate completion.
- **Trainer Spotlight:** Sajid Majeed (Management Trainer | SAMTO Trainings, Lecturer | Ghazi University).
- **Sample Testimonials:** Clearly labeled sample student feedback for CSS aspirants, graduates, and professionals.
- **Final CTA & Academy Footer:** Direct WhatsApp integration (`+92 333 4643412`), quick links, and institutional affiliations.

### 2. Comprehensive Course Catalog (5 Courses, 35 Guided Lessons)
1. **Public Speaking Mastery (7 Lessons):**
   - Understanding Public Speaking (Ethos, Pathos, Logos)
   - Overcoming Stage Fear (Stanford Physiological Sigh)
   - Structuring a Speech (Hook, Rule of Three, Call to Action)
   - Voice Modulation (Pitch, Pace, Power, Pauses)
   - Audience Engagement (Lighthouse Eye Contact)
   - Handling Questions (P-A-R-S Framework)
   - Practical Speaking Exercise (Capstone 2-minute timed introduction)
2. **Body Language and Confidence (7 Lessons):**
   - Nonverbal Communication & Baselines
   - Eye Contact & The Business Gaze Triangle
   - Facial Expressions & Duchenne Smile
   - Posture & Gestures in the Power Sphere
   - Confident Walking & Grounded Neutral Stance
   - Professional Seated & Virtual Presence
   - Practical Observational Audit
3. **Presentation Skills Masterclass (7 Lessons):**
   - Planning with Audience Persona & W.I.I.F.M.
   - Organizing Ideas with McKinsey SCQA
   - Creating Effective Slides (10/20/30 Rule)
   - Opening with High-Impact Hooks
   - Business Storytelling (Pixar Story Spine)
   - Delivering with Touch-Turn-Talk
   - Double Close Post-Q&A Mastery
4. **Interview Preparation and Career Skills (7 Lessons):**
   - 3-Layer Pre-Interview Research
   - 90-Second "Tell Me About Yourself" Pitch
   - Answering Common Questions & Reframing Weaknesses
   - The STAR Method (Situation, Task, Action, Result)
   - Professional Communication & Panel Triangulation
   - Handling Stress-Test & Curveball Questions
   - Comprehensive Mock Interview Simulation
5. **Professional Communication (7 Lessons):**
   - The 7 C's of Workplace Communication
   - Active Reflective Listening & Validation
   - Clear and Concise Speaking with BLUF (Bottom Line Up Front)
   - Actionable Email Etiquette & Formatting
   - Team Communication & SBI Feedback Framework
   - Harvard Conflict Negotiation Model
   - Managing Upward & Executive Briefing Simulation

### 3. Interactive Lesson Player
- Responsive sidebar with course navigation, progress bar, and completion indicators.
- In-depth, practical educational lesson prose.
- **Interactive Speech Practice Timer:** Built-in countdown timer with start, pause, and reset controls for timed speech drills.
- **Self-Assessment Checklists:** Interactive rubric checkpoints (Clarity, Confidence, Eye Contact, Voice, Organization).
- **Personal Lesson Scratchpad:** Auto-saving notes stored per lesson in `localStorage`.
- Toggleable "Mark Lesson as Complete" button with dynamic progress recalculation.

### 4. Course Quizzes & Knowledge Assessments
- 5 comprehensive assessments (one for every course) with 5 multiple-choice questions each (25 total).
- 4 options per question with instant visual feedback (correct/incorrect).
- Detailed rationale explanations for each question.
- Real-time score calculation and percentage scoring.
- Unlimited practice attempts via "Retry Quiz".
- Automatic eligibility verification for academy certificates (requires 70%+ score).

### 5. Student Dashboard & Progress Tracking
- Personalized welcome message with editable student name.
- Real-time KPI stats (Enrolled Courses, Lessons Completed, Quizzes Taken, Certificates Earned).
- Enrolled courses grid with individual visual progress bars and continue buttons.
- Assessment quiz results history log with score breakdowns and retake links.
- "Test Demo Completion" one-click button for instant testing of course completion and certificate generation.
- Data reset option for clean testing.

### 6. Professional Certificate Generation
- Automatic unlocking when course completion requirements are satisfied (all 7 lessons marked complete + quiz passed with >= 70%).
- Elegant diploma frame with corner ornaments, official seal SVG, and signatures for Sajid Majeed and the Academic Directorate.
- Dynamic student name, course title, completion date, and unique verification code (`PCA-YYYY-CRS-XXXXX`).
- Print-ready `@media print` layout: Clean single-page output via the "Print / Download PDF" button (`window.print()`).
- Official Academy-issued learning certificate disclaimer.

### 7. Learning Resources Library
- Searchable, categorized resource repository.
- Includes actual blueprints and templates:
  - The 2-Minute Speech Architecture Blueprint
  - The Comprehensive STAR Answer Framework Cheat Sheet
  - Daily Nonverbal Posture & Eye Contact Audit Worksheet
  - 10-20-30 Slide Rule & Visual Delivery Checklist
  - Professional Email Etiquette & Difficult Conversation Scripts
  - Pre-Speech 5-Minute Anxiety Reduction Protocol
- Interactive preview modal with "Copy Text" and direct text file download (`.txt`).

### 8. Contact & Course Admissions
- Validated enrollment form: Full Name, Email, Phone, Course, Mode (Online / In-Person), and Message.
- Live client-side error states and helpful feedback.
- Secure local browser inquiry log with generated Inquiry ID.
- Direct international WhatsApp button: links to `+92 333 4643412` with pre-filled inquiry text.

---

## 🛠️ Technology Stack & Architecture

- **Frontend:** Pure HTML5, CSS3, Vanilla ES6 JavaScript.
- **Zero External Dependencies:** No Node.js, Python, npm, or CDN dependencies required. Works 100% offline and locally.
- **Storage:** HTML5 `localStorage` with reactive store pattern (`PCA_STORE`).
- **Routing:** Hash-based SPA Router (`PCA_ROUTER`) supporting deep linking (`#course/id`, `#lesson/courseId/lessonId`, `#quiz/courseId`, `#certificate/courseId`).

---

## 🏃 Instructions for Running the Application

### Method 1: Direct Browser Launch (Fastest)
1. Double-click `start.bat` in this directory, or
2. Right-click `index.html` and choose **Open With > Microsoft Edge** (or Google Chrome / Firefox).

### Method 2: Local PowerShell HTTP Server
Run the included zero-dependency PowerShell server:
```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
```
The server will start at `http://localhost:8080/` and automatically launch your browser.

---

## 🔌 Production Integrations (For Future Backend Deployment)

1. **User Authentication & Cloud Storage:**
   - Replace `localStorage` in `js/store.js` with calls to a backend REST or GraphQL API (e.g., Node/Express, Django, or Firebase).
2. **Contact & Enrollment Form:**
   - Connect `js/components/contactView.js` to an email service (SendGrid, Mailgun, or AWS SES) or CRM.
3. **Speech Audio Analysis:**
   - If AI vocal analysis is desired in the future, connect the speech practice recorder to Web Audio API and a speech-to-text service (e.g. Whisper API or Web Speech Recognition API).
