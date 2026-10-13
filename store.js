/**
 * Presentation & Communication Academy
 * Central State Store & LocalStorage Persistence Engine
 */

(function () {
  const STORAGE_KEY = "pca_student_data_v1";

  const defaultState = {
    student: {
      name: "Ali Raza",
      email: "student@example.com",
      role: "Student / Aspirant"
    },
    enrolledCourses: ["public-speaking-mastery", "body-language-and-confidence"],
    completedLessons: {
      "public-speaking-mastery": ["ps-1", "ps-2"]
    },
    quizResults: {},
    notes: {},
    contactInquiries: [],
    certificates: {}
  };

  class Store {
    constructor() {
      this.state = this.loadState();
      this.listeners = [];
    }

    loadState() {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          return { ...defaultState, ...parsed };
        }
      } catch (e) {
        console.warn("Could not load from localStorage:", e);
      }
      return JSON.parse(JSON.stringify(defaultState));
    }

    saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
        this.notify();
      } catch (e) {
        console.warn("Could not save to localStorage:", e);
      }
    }

    subscribe(listener) {
      this.listeners.push(listener);
      return () => {
        this.listeners = this.listeners.filter(l => l !== listener);
      };
    }

    notify() {
      this.listeners.forEach(fn => fn(this.state));
    }

    getStudent() {
      return this.state.student;
    }

    setStudentName(name) {
      if (!name || !name.trim()) return;
      this.state.student.name = name.trim();
      this.saveState();
    }

    isEnrolled(courseId) {
      return this.state.enrolledCourses.includes(courseId);
    }

    enrollCourse(courseId) {
      if (!this.state.enrolledCourses.includes(courseId)) {
        this.state.enrolledCourses.push(courseId);
        if (!this.state.completedLessons[courseId]) {
          this.state.completedLessons[courseId] = [];
        }
        this.saveState();
        return true;
      }
      return false;
    }

    getEnrolledCourses() {
      return this.state.enrolledCourses;
    }

    isLessonCompleted(courseId, lessonId) {
      const lessons = this.state.completedLessons[courseId] || [];
      return lessons.includes(lessonId);
    }

    toggleLessonComplete(courseId, lessonId) {
      if (!this.isEnrolled(courseId)) {
        this.enrollCourse(courseId);
      }
      if (!this.state.completedLessons[courseId]) {
        this.state.completedLessons[courseId] = [];
      }

      const list = this.state.completedLessons[courseId];
      const idx = list.indexOf(lessonId);
      let isNowComplete = false;

      if (idx > -1) {
        list.splice(idx, 1);
        isNowComplete = false;
      } else {
        list.push(lessonId);
        isNowComplete = true;
      }

      this.saveState();
      return isNowComplete;
    }

    getCourseProgress(courseId) {
      const course = (window.PCA_COURSES || []).find(c => c.id === courseId);
      const total = course ? course.lessons.length : 7;
      const completedList = this.state.completedLessons[courseId] || [];
      const completedCount = completedList.length;
      const percentage = Math.round((completedCount / total) * 100);

      return {
        completedCount,
        total,
        percentage: Math.min(percentage, 100),
        isAllLessonsComplete: completedCount >= total
      };
    }

    saveQuizResult(courseId, score, total, percentage, passed) {
      this.state.quizResults[courseId] = {
        score,
        total,
        percentage,
        passed,
        completedAt: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      };

      // Check if certificate should be generated
      if (this.isEligibleForCertificate(courseId)) {
        this.generateCertificate(courseId);
      }

      this.saveState();
    }

    getQuizResult(courseId) {
      return this.state.quizResults[courseId] || null;
    }

    isEligibleForCertificate(courseId) {
      const progress = this.getCourseProgress(courseId);
      const quiz = this.getQuizResult(courseId);
      return progress.isAllLessonsComplete && quiz && quiz.passed;
    }

    generateCertificate(courseId) {
      if (this.state.certificates[courseId]) {
        return this.state.certificates[courseId];
      }

      const randomHash = Math.random().toString(36).substring(2, 7).toUpperCase();
      const code = `PCA-${new Date().getFullYear()}-${courseId.substring(0, 3).toUpperCase()}-${randomHash}`;

      this.state.certificates[courseId] = {
        certificateId: code,
        issueDate: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        }),
        studentName: this.state.student.name,
        courseId: courseId
      };
      this.saveState();
      return this.state.certificates[courseId];
    }

    getCertificate(courseId) {
      return this.state.certificates[courseId] || null;
    }

    saveNote(lessonId, text) {
      this.state.notes[lessonId] = text;
      this.saveState();
    }

    getNote(lessonId) {
      return this.state.notes[lessonId] || "";
    }

    saveInquiry(data) {
      const inquiry = {
        id: "INQ-" + Date.now().toString(36).toUpperCase(),
        date: new Date().toLocaleString(),
        ...data
      };
      this.state.contactInquiries.push(inquiry);
      this.saveState();
      return inquiry;
    }

    resetProgress() {
      localStorage.removeItem(STORAGE_KEY);
      this.state = JSON.parse(JSON.stringify(defaultState));
      this.saveState();
    }

    seedDemoCompletion(courseId = "public-speaking-mastery") {
      const course = (window.PCA_COURSES || []).find(c => c.id === courseId);
      if (!course) return;

      if (!this.state.enrolledCourses.includes(courseId)) {
        this.state.enrolledCourses.push(courseId);
      }

      this.state.completedLessons[courseId] = course.lessons.map(l => l.id);
      this.state.quizResults[courseId] = {
        score: 5,
        total: 5,
        percentage: 100,
        passed: true,
        completedAt: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric"
        })
      };

      this.generateCertificate(courseId);
      this.saveState();
    }
  }

  window.PCA_STORE = new Store();
})();
