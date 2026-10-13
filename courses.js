/**
 * Presentation & Communication Academy
 * Master Course Catalog & Curriculum Data
 */

window.PCA_COURSES = [
  {
    id: "public-speaking-mastery",
    title: "Public Speaking Mastery",
    category: "Public Speaking",
    level: "Beginner - Intermediate",
    duration: "4 Weeks (Est. 12 Hours)",
    lessonsCount: 7,
    shortDescription: "Conquer stage fright, craft compelling speeches, modulate your voice, and captivate any audience with authentic confidence.",
    fullDescription: "Public Speaking Mastery is a structured, practical bootcamp designed to transform nervous speakers into magnetic communicators. Whether preparing for a university presentation, competitive examination viva (CSS/PMS), or keynote address, this course takes you step-by-step from fundamental speech theory to live delivery mastery.",
    learningObjectives: [
      "Deconstruct speech psychology and silence imposter syndrome",
      "Overcome stage fright using somatic calming and diaphragmatic breathing",
      "Structure persuasive speeches using the Hook-Story-Offer and 3-Point Frameworks",
      "Master vocal variety including pitch, tempo, volume, and tactical pauses",
      "Engage live and hybrid audiences through interactive questioning and body orientation",
      "Handle tough Q&A sessions, hecklers, and unexpected interruptions gracefully",
      "Deliver a structured 2-minute personal introduction under timed evaluation"
    ],
    targetAudience: "University students, CSS/competitive exam candidates, job seekers, and emerging leaders.",
    lessons: [
      {
        id: "ps-1",
        title: "Understanding Public Speaking",
        duration: "35 mins",
        objectives: [
          "Define the core purpose of public communication",
          "Identify the three pillars of Aristotelian persuasion: Ethos, Pathos, and Logos",
          "Recognize common misconceptions regarding natural-born charisma"
        ],
        content: `
          <h3>The Anatomy of Human Communication</h3>
          <p>Public speaking is not an innate genetic gift reserved for charismatic extroverts. It is a trainable technical skill governed by structured psychological and physiological laws. At its root, speaking publicly is an act of <strong>service to your audience</strong>—you are transferring an insight, a conviction, or a practical solution from your mind to theirs.</p>
          
          <div class="lesson-objectives-box">
            <h4>Aristotle's Rhetorical Triangle in Modern Delivery</h4>
            <ul>
              <li><strong>Ethos (Credibility):</strong> Why should the audience trust you? Established through authentic vulnerability, thorough preparation, and calm posture.</li>
              <li><strong>Logos (Logic):</strong> Is your argument coherent, structured, and evidenced? Unsupported assertions breed skepticism.</li>
              <li><strong>Pathos (Emotional Connection):</strong> Does your message resonate with their aspirations, pain points, or moral values? Emotion drives retention.</li>
            </ul>
          </div>

          <h3>The Speaker-Audience Contract</h3>
          <p>Whenever you step up to speak, the audience silently asks three subconscious questions:</p>
          <ol style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
            <li><em>Who are you to tell me this?</em> (Answered by your presence and humility)</li>
            <li><em>Why does this matter to my life right now?</em> (Answered by your opening hook)</li>
            <li><em>What do you want me to do next?</em> (Answered by your clear call-to-action)</li>
          </ol>
          <p>When you shift your mindset from "performing to be judged" to "sharing to serve," speaking anxiety drops dramatically.</p>
        `,
        practiceActivity: {
          title: "Mindset Reframing Drill",
          instructions: "Write down the single biggest fear you hold about speaking publicly. Reframe that fear into an audience-centric service statement. For example: Change 'I will forget my words and look foolish' into 'My message is practical and helpful; the audience is on my team.'",
          checklist: [
            "Identified my core speaking fear",
            "Reframed from self-judgment to audience benefit",
            "Read the new reframed service statement aloud three times"
          ]
        },
        takeaways: [
          "Public speaking is a learned skill, not an inherited trait.",
          "Balance Ethos (credibility), Logos (logic), and Pathos (emotion) for lasting impact.",
          "Shift from a performer mindset to a helpful teacher mindset."
        ]
      },
      {
        id: "ps-2",
        title: "Overcoming Stage Fear",
        duration: "45 mins",
        objectives: [
          "Understand the physiological root of glossophobia (fight-or-flight response)",
          "Practice the 4-7-8 and physiological sigh breathing resets",
          "Implement cognitive grounding rituals 5 minutes before stepping on stage"
        ],
        content: `
          <h3>Deconstructing Glossophobia (Stage Fright)</h3>
          <p>When you stand before a group of people, your primitive amygdala perceives multiple pairs of staring eyes as predators circling in the wild. Adrenaline floods your bloodstream, triggering rapid heart rate, shaky hands, dry mouth, and shallow breathing. This is a normal survival mechanism, not an indicator of personal incompetence.</p>

          <h3>The Somatic Calming Toolkit</h3>
          <p>You cannot talk your subconscious out of a panic state using pure logic; you must signal physical safety through somatic neurology:</p>
          
          <div class="lesson-objectives-box">
            <h4>1. The Stanford Physiological Sigh</h4>
            <p>Take two consecutive nasal inhalations (one deep breath, followed immediately by a sharp second top-up sniff), followed by a long, slow sigh through the mouth lasting 6 to 8 seconds. Repeating this twice immediately lowers autonomic heart rate and releases excess CO2.</p>
          </div>

          <div class="lesson-objectives-box">
            <h4>2. Progressive Grounding and Progressive Tension</h4>
            <p>Press the balls of your feet firmly into the floor. Feel the floor supporting your entire weight. Squeeze your fists discreetly under your podium or by your sides for 3 seconds, then consciously release. This discharges surplus adrenaline away from your vocal cords.</p>
          </div>

          <h3>Pre-Stage Ritual (The 5-Minute Window)</h3>
          <p>During the five minutes prior to your presentation, avoid scanning your notes feverishly. Panic-reading reinforces feelings of inadequacy. Instead, drink room-temperature water, perform three physiological sighs, smile at someone in the room, and stand tall with open shoulders.</p>
        `,
        practiceActivity: {
          title: "Somatic Breath & Tension Release Drill",
          instructions: "Perform 3 sets of the Stanford Physiological Sigh, followed by 30 seconds of lower-body grounding. Notice your pulse rate and muscle tension before and after.",
          checklist: [
            "Conducted double nasal inhale + extended oral exhale",
            "Grounding feet flat on floor with relaxed shoulders",
            "Noticed physiological pulse reduction and calm focus"
          ]
        },
        takeaways: [
          "Stage fear is adrenaline, not lack of ability. Treat it as energy to channel.",
          "Use the Physiological Sigh to immediately reset your autonomic nervous system.",
          "Do not cram notes in the final 5 minutes; ground your body and hydrate."
        ]
      },
      {
        id: "ps-3",
        title: "Structuring a Speech",
        duration: "50 mins",
        objectives: [
          "Master the classical 3-part speech architecture (Opening, Body, Conclusion)",
          "Apply the 'Rule of Three' for effortless listener recall",
          "Design seamless transitional bridges between ideas"
        ],
        content: `
          <h3>Why Structure Trumps Memorization</h3>
          <p>Novice speakers attempt to memorize speeches word-for-word. When they forget a single word, the entire mental house of cards collapses. Elite speakers memorize only the <strong>structural milestones</strong> and speak naturally from point to point.</p>

          <h3>The 3-Act Speech Architecture</h3>
          <div class="lesson-objectives-box">
            <h4>Act 1: The Strong Hook (First 45 Seconds)</h4>
            <p>Never begin with 'Hello, my name is X and today I will talk about Y.' Begin with a provocative question, an astonishing statistic, a relatable dilemma, or an arresting story snippet that earns their attention.</p>
          </div>

          <div class="lesson-objectives-box">
            <h4>Act 2: The Core Body (The Rule of Three)</h4>
            <p>Human working memory processes information best in sets of three. Organize your core message into exactly 3 main points. For each point, provide:</p>
            <ul>
              <li><strong>Claim:</strong> The core insight or lesson</li>
              <li><strong>Evidence/Story:</strong> Real case study, data, or personal anecdote</li>
              <li><strong>Application:</strong> What this means for the listener</li>
            </ul>
          </div>

          <div class="lesson-objectives-box">
            <h4>Act 3: The Resonant Close</h4>
            <p>Synthesize your three points, state your overarching moral or vision, and conclude with an unmistakable, memorable Call-to-Action (CTA).</p>
          </div>
        `,
        practiceActivity: {
          title: "Speech Skeleton Outline Builder",
          instructions: "Draft a one-page outline on 'The Importance of Active Listening' using: 1 Hook, 3 Key Body Points with examples, and 1 Closing Call-to-Action.",
          checklist: [
            "Clear opening hook that grabs attention within 30 seconds",
            "Exactly three logically distinct body points",
            "Smooth transition phrases between sections",
            "A memorable closing statement that leaves a lasting impression"
          ]
        },
        takeaways: [
          "Memorize the structural blueprint, never the verbatim script.",
          "Always apply the Rule of Three for maximum listener retention.",
          "Land your speech cleanly with an actionable conclusion."
        ]
      },
      {
        id: "ps-4",
        title: "Voice Modulation",
        duration: "40 mins",
        objectives: [
          "Master the 4 dials of voice modulation: Pitch, Pace, Power (Volume), and Pauses",
          "Eliminate filler words (um, uh, you know, basically) using tactical silence",
          "Project sound from the diaphragm rather than straining throat muscles"
        ],
        content: `
          <h3>The Instrument of Influence</h3>
          <p>Words convey only a fraction of your message; your vocal timbre, inflection, and cadence dictate how those words are received. A monotone delivery puts listeners to sleep regardless of how brilliant the content is.</p>

          <h3>The 4 Voice Modulation Dials</h3>
          <div class="lesson-objectives-box">
            <ul>
              <li><strong>Pitch (Melody):</strong> Avoid the upward inflection ('upspeak') at the end of statements which makes you sound uncertain. End declarative sentences on a downward pitch to convey authority.</li>
              <li><strong>Pace (Speed):</strong> Speak at approximately 130–150 words per minute. Accelerate slightly during thrilling stories; slow down deliberately when stating crucial definitions or takeaways.</li>
              <li><strong>Power (Volume):</strong> Project from the stomach/diaphragm, not the throat. Vary volume—whispering or dropping your volume slightly creates magnetic intimacy, while ringing projection commands authority.</li>
              <li><strong>Pauses (The Secret Weapon):</strong> Silence is not emptiness; it is dramatic punctuation. Pause before delivering an important insight to build anticipation, and pause immediately after to allow absorption.</li>
            </ul>
          </div>

          <h3>Eliminating Verbal Fillers</h3>
          <p>Filler words ('um', 'uh', 'like', 'actually') occur when your vocal cords stay open while your brain searches for the next thought. Train yourself to <strong>close your lips and embrace silence</strong> instead of filling gaps with noise.</p>
        `,
        practiceActivity: {
          title: "The 60-Second Silence & Emphasis Drill",
          instructions: "Read a paragraph aloud. Intentionally insert a distinct 2-second pause after every punctuation mark. Replace every urge to say 'um' with a deliberate breath.",
          checklist: [
            "Spoke from the diaphragm with clear projection",
            "Replaced verbal crutches with silent pauses",
            "Ended affirmative sentences with downward vocal inflection"
          ]
        },
        takeaways: [
          "Monotone delivery kills engagement; vary pitch, pace, and volume.",
          "Embrace the tactical pause—silence projects executive authority.",
          "Close your mouth when thinking to completely eradicate filler words."
        ]
      },
      {
        id: "ps-5",
        title: "Audience Engagement",
        duration: "40 mins",
        objectives: [
          "Establish psychological rapport within the first 60 seconds",
          "Use interactive rhetorical questions and polling techniques",
          "Read real-time audience cues (boredom, confusion, agreement)"
        ],
        content: `
          <h3>Speaking WITH an Audience, Not AT Them</h3>
          <p>Great presentations are not monologues—they are structured, guided conversations. When audience members feel included in the narrative, their attention remains locked onto you.</p>

          <h3>Tactics for Continuous Engagement</h3>
          <div class="lesson-objectives-box">
            <h4>1. The 'Show of Hands' Micro-Engagement</h4>
            <p>Ask low-friction questions early: 'By a quick show of hands, how many of you have ever felt nervous before a job interview?' This creates physical participation without putting anyone uncomfortably on the spot.</p>
          </div>

          <div class="lesson-objectives-box">
            <h4>2. The Eye-Contact Lighthouse Technique</h4>
            <p>Do not scan the room like an automated security camera. Instead, lock gentle eye contact with one individual for a full sentence or thought (3 to 5 seconds), then smoothly move your focus to someone in a different sector of the room.</p>
          </div>

          <div class="lesson-objectives-box">
            <h4>3. The 'You-Oriented' Language Shift</h4>
            <p>Replace 'Today I want to explain my theory on...' with 'By the end of this session, you will possess a repeatable framework to...'</p>
          </div>
        `,
        practiceActivity: {
          title: "Engagement Scripting Exercise",
          instructions: "Write three interactive questions you can ask an audience at the start, midpoint, and conclusion of a presentation.",
          checklist: [
            "Crafted a low-friction opening question",
            "Designed a reflective midpoint engagement prompt",
            "Used 'You' focused phrasing rather than 'I/Me' phrasing"
          ]
        },
        takeaways: [
          "Transform monologues into dynamic dialogues through audience inclusion.",
          "Use the lighthouse eye-contact method to connect deeply with all sections.",
          "Frame every benefit in terms of the audience's needs and aspirations."
        ]
      },
      {
        id: "ps-6",
        title: "Handling Questions",
        duration: "45 mins",
        objectives: [
          "Apply the P-A-R-S framework (Pause, Acknowledge, Respond, Satisfy) to Q&A",
          "Handle hostile, aggressive, or off-topic questioners diplomatically",
          "Admit knowledge gaps professionally without losing credibility"
        ],
        content: `
          <h3>Mastering the Q&A Session</h3>
          <p>Many speakers deliver an acceptable presentation, only to dismantle their credibility during the Q&A segment. A composed, sharp question-and-answer response often leaves a stronger impression than the planned speech itself.</p>

          <h3>The P-A-R-S Framework for Every Question</h3>
          <div class="lesson-objectives-box">
            <ol style="margin-left: 1.25rem;">
              <li><strong>Pause:</strong> Wait 2 seconds before answering. Never interrupt the questioner. Pausing demonstrates respect and thoughtful reflection.</li>
              <li><strong>Acknowledge & Rephrase:</strong> 'Thank you, that question addresses a crucial implementation challenge...' Rephrasing ensures the entire room heard the question and buys you time to organize your response.</li>
              <li><strong>Respond:</strong> Deliver a concise, direct answer in 60 seconds or less. Do not launch into a second speech.</li>
              <li><strong>Satisfy:</strong> Check in with the questioner: 'Does that clarify the concept for you?'</li>
            </ol>
          </div>

          <h3>Handling What You Don't Know</h3>
          <p>Never invent answers or bluff when unsure. The most confident response is: <em>'I want to give you an accurate, verified answer on that specific nuance rather than speculate right now. Let me verify the exact parameters after this session and share the findings with you directly.'</em></p>
        `,
        practiceActivity: {
          title: "Difficult Question Simulation",
          instructions: "Practice formulating a response to: 'Isn't your proposed solution far too expensive and time-consuming for a small organization?' using the P-A-R-S framework.",
          checklist: [
            "Paused calmly without defensive body posture",
            "Acknowledged the validity of the underlying concern",
            "Delivered a succinct 45-second reasoned response",
            "Checked back for questioner satisfaction"
          ]
        },
        takeaways: [
          "Pause before replying; never rush to interrupt.",
          "Rephrase the question so the entire room stays aligned.",
          "Admit limits with dignity and offer follow-up follow-through."
        ]
      },
      {
        id: "ps-7",
        title: "Practical Speaking Exercise",
        duration: "50 mins",
        isCapstone: true,
        objectives: [
          "Synthesize lessons 1 through 6 into a cohesive live presentation",
          "Deliver a timed 2-minute personal introduction under simulated pressure",
          "Complete the 5-point self-assessment rubric (Clarity, Confidence, Eye Contact, Voice, Organization)"
        ],
        content: `
          <h3>Your Practical Speaking Benchmark</h3>
          <p>This capstone lesson puts all previous principles into action. You will prepare and deliver a structured two-minute professional introduction about yourself—the exact exercise used in prestigious interviews, CSS viva panels, and executive meetings.</p>

          <div class="practice-activity-card">
            <h3>PUBLIC SPEAKING PRACTICE: 2-MINUTE INTRODUCTION</h3>
            <p><strong>Task:</strong> Prepare and deliver a two-minute spoken introduction about yourself.</p>
            <p><strong>Instructions:</strong></p>
            <ol style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
              <li><strong>0:00 - 0:25:</strong> Introduce yourself with a strong personal hook and name.</li>
              <li><strong>0:25 - 0:50:</strong> Explain your educational background and core expertise.</li>
              <li><strong>0:50 - 1:20:</strong> Describe your unique skills, passions, and practical achievements.</li>
              <li><strong>1:20 - 1:45:</strong> Articulate your future vision and aspirations.</li>
              <li><strong>1:45 - 2:00:</strong> Finish with a clear, confident closing statement.</li>
            </ol>

            <div class="speech-timer-widget">
              <span class="badge badge-primary">Interactive Speech Practice Timer</span>
              <div class="timer-digits" id="timer-display">02:00</div>
              <div class="timer-controls">
                <button class="btn btn-primary btn-sm" id="btn-timer-start">Start 2-Min Timer</button>
                <button class="btn btn-secondary btn-sm" id="btn-timer-reset">Reset</button>
              </div>
              <small style="display:block; margin-top: 0.5rem; color: var(--color-text-muted);">
                Stand up, align your posture, take a deep physiological sigh, and start speaking aloud!
              </small>
            </div>

            <h4 style="margin-top: 1.5rem; margin-bottom: 0.75rem;">Self-Assessment Rubric Checklist</h4>
            <p style="font-size: 0.9rem; color: var(--color-text-muted);">After completing your delivery, evaluate yourself honestly against the five core criteria:</p>
            <div class="checklist-container">
              <label class="checklist-item">
                <input type="checkbox" id="chk-rubric-1">
                <span><strong>1. Clarity:</strong> Were your words articulate, free of mumbling, and logically structured?</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-rubric-2">
                <span><strong>2. Confidence:</strong> Was your posture upright with open gestures and grounded feet?</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-rubric-3">
                <span><strong>3. Eye Contact:</strong> Did you maintain steady eye contact without staring at notes or the floor?</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-rubric-4">
                <span><strong>4. Voice Modulation:</strong> Did you project with varied pitch, pace, and purposeful pauses?</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-rubric-5">
                <span><strong>5. Organization:</strong> Did your introduction fit the two-minute pacing without rambling?</span>
              </label>
            </div>
            <p style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 1rem; font-style: italic;">
              Note: This self-assessment checklist utilizes reflective rubric benchmarks. No automated AI audio evaluation is performed.
            </p>
          </div>
        `,
        practiceActivity: {
          title: "Complete the 2-Minute Speech Delivery",
          instructions: "Deliver your 2-minute speech aloud and complete all 5 self-assessment rubric checkpoints above.",
          checklist: [
            "Delivered the 2-minute speech aloud standing up",
            "Completed the 5-point self-assessment rubric",
            "Noted areas for continuous refinement"
          ]
        },
        takeaways: [
          "Consistent vocal practice transforms nervous energy into focused projection.",
          "Self-auditing with structured rubrics builds self-awareness faster than passive reading.",
          "You are now ready to take the course assessment quiz!"
        ]
      }
    ]
  },
  {
    id: "body-language-and-confidence",
    title: "Body Language and Confidence",
    category: "Body Language",
    level: "Beginner - Intermediate",
    duration: "3 Weeks (Est. 10 Hours)",
    lessonsCount: 7,
    shortDescription: "Master nonverbal cues, commanding posture, magnetic eye contact, and purposeful gestures that radiate authentic authority.",
    fullDescription: "Over 60% of interpersonal communication is nonverbal. Body Language and Confidence equips you with actionable nonverbal mastery for job interviews, boardrooms, client pitches, and social interactions.",
    learningObjectives: [
      "Understand the science of nonverbal signals and micro-expressions",
      "Cultivate warm, confident, and professional eye contact",
      "Eliminate nervous pacifying gestures (face touching, leg shaking, ring twisting)",
      "Establish expansive, open posture that communicates credibility",
      "Master authoritative walking, entering rooms, and stage navigation",
      "Decode professional body language in corporate and diplomatic contexts",
      "Execute real-world behavioral observation drills to build social calibration"
    ],
    targetAudience: "Professionals, interview candidates, students, and public presenters.",
    lessons: [
      {
        id: "bl-1",
        title: "Understanding Nonverbal Communication",
        duration: "35 mins",
        objectives: [
          "Understand how the limbic system drives involuntary body language",
          "Distinguish between high-power and low-power nonverbal displays",
          "Recognize baseline behavioral cues before jumping to conclusions"
        ],
        content: `
          <h3>The Silent Language of Authority</h3>
          <p>Long before you speak your first word, people in the room have already formed instantaneous subconscious judgments about your competence, warmth, and credibility. This nonverbal judgment occurs in under 200 milliseconds.</p>

          <div class="lesson-objectives-box">
            <h4>The Concept of Baseline Behavior</h4>
            <p>A fatal mistake in nonverbal analysis is assuming a single gesture means someone is lying or insecure. Crossing arms can mean someone is cold or thinking deeply. You must always observe an individual's <strong>baseline behavior</strong> in a relaxed setting before identifying stress deviations.</p>
          </div>

          <h3>The Universal Limbic Responses</h3>
          <p>When humans feel insecure or threatened, they display three universal nonverbal behaviors:</p>
          <ul>
            <li><strong>Freezing:</strong> Reduced hand movement and stiff neck posture.</li>
            <li><strong>Fleeing / Blocking:</strong> Crossing arms, turning feet toward exits, placing bags or clipboards as physical barriers.</li>
            <li><strong>Pacifying:</strong> Stroking the neck, touching jewelry, fidgeting with cuffs, or rubbing legs to self-soothe.</li>
          </ul>
        `,
        practiceActivity: {
          title: "Self-Pacifying Gesture Audit",
          instructions: "Identify your top two subconscious pacifying habits when nervous (e.g. playing with a pen, touching your watch, shifting weight from foot to foot). Practice substituting them with an open resting stance.",
          checklist: [
            "Identified personal pacifying habit under pressure",
            "Practiced relaxed open hand placement at waist level"
          ]
        },
        takeaways: [
          "Subconscious judgments happen in fractions of a second based on posture.",
          "Always establish behavioral baselines before interpreting single gestures.",
          "Awareness of pacifying habits is the first step toward projecting calm presence."
        ]
      },
      {
        id: "bl-2",
        title: "Eye Contact",
        duration: "40 mins",
        objectives: [
          "Learn the optimal 60-70% eye contact rule in professional settings",
          "Master the Business Gaze Triangle vs. Social and Intimate Gazes",
          "Avoid aggressive staring while eliminating downcast glances"
        ],
        content: `
          <h3>The Power of Intentional Eye Contact</h3>
          <p>Eye contact triggers the release of oxytocin, establishing subconscious trust and connection. However, excessive unblinking gaze feels aggressive, while erratic or downward-drifting eye contact suggests evasiveness or insecurity.</p>

          <div class="lesson-objectives-box">
            <h4>The Business Gaze Triangle</h4>
            <p>In professional interviews and business meetings, direct your gaze within an imaginary inverted triangle located between the person's eyes and the center of their forehead. This area signals focus, intellectual competence, and mutual respect.</p>
          </div>

          <h3>The 60/70 Guideline</h3>
          <p>Maintain eye contact for approximately 60% to 70% of the conversation. When breaking eye contact to think, look <strong>to the side or slightly upward</strong>—never look down at the floor, which reads as submission or defeat.</p>
        `,
        practiceActivity: {
          title: "The Side-Break Eye Drill",
          instructions: "Practice answering a common question while intentionally maintaining steady focus, then breaking gaze calmly to the side before returning to direct eye contact.",
          checklist: [
            "Held steady eye contact for 4–5 seconds per thought",
            "Broke gaze horizontally rather than looking downward",
            "Maintained a warm, relaxed facial expression"
          ]
        },
        takeaways: [
          "Target the business triangle (eyes to center of forehead) in professional settings.",
          "Aim for 60-70% total eye contact during conversations.",
          "Break eye contact to the side, never down to the floor."
        ]
      },
      {
        id: "bl-3",
        title: "Facial Expressions",
        duration: "35 mins",
        objectives: [
          "Distinguish genuine Duchenne smiles from polite social smiles",
          "Soften the furrowed brow of concentration to avoid looking hostile",
          "Align facial micro-expressions with spoken words"
        ],
        content: `
          <h3>The Emotional Display Center</h3>
          <p>The human face contains 43 muscles capable of producing over 10,000 distinct expressions. When your words say 'I am thrilled to be here,' but your face displays tension or neutrality, listeners will always believe the face.</p>

          <div class="lesson-objectives-box">
            <h4>The Duchenne Smile</h4>
            <p>A polite smile utilizes only the zygomatic major muscle (raising the corners of the mouth). A genuine Duchenne smile also engages the orbicularis oculi muscles (causing gentle crinkling at the corners of the eyes). Practice bringing genuine warmth to your eyes when greeting colleagues or panelists.</p>
          </div>

          <h3>The 'Concentration Frown' Hazard</h3>
          <p>Many diligent professionals unintentionally furrow their eyebrows deeply when listening intently. To an interviewer, this can look like anger or disapproval. Train yourself to adopt a relaxed, slightly receptive brow while nodding gently to indicate active listening.</p>
        `,
        practiceActivity: {
          title: "Mirror Expression Check",
          instructions: "Look into a mirror while stating an opening greeting. Check if your jaw is clenched, if your brow is furrowed, and adjust to an open, warm expression.",
          checklist: [
            "Unclenched jaw and rested tongue behind upper teeth",
            "Relaxed brow line",
            "Practiced authentic warm eye smile"
          ]
        },
        takeaways: [
          "True warmth engages both the mouth and the eye muscles.",
          "Beware the concentration frown—relax your brow when listening.",
          "Congruence between facial expression and verbal message builds trust."
        ]
      },
      {
        id: "bl-4",
        title: "Posture and Gestures",
        duration: "45 mins",
        objectives: [
          "Adopt the 'Power Sphere' gesture zone (between navel and chest)",
          "Maintain an open, erect posture without looking stiff or robotic",
          "Use descriptive and emphatic hand gestures purposefully"
        ],
        content: `
          <h3>Occupying Space with Dignity</h3>
          <p>Confidence is communicated by physical openness. Insecure individuals shrink their physical footprint by pulling shoulders inward, crossing legs tightly, and locking hands between their knees. Confident communicators comfortably claim their space.</p>

          <div class="lesson-objectives-box">
            <h4>The Power Sphere (The Mid-Torso Box)</h4>
            <p>Keep your hands active in the zone between your belt buckle and your chest. Gestures above the chin feel erratic and frantic; gestures below the waist feel low-energy and insecure. In the Power Sphere, gestures emphasize key points cleanly.</p>
          </div>

          <h3>Open Palms vs. Pointing</h3>
          <p>Pointing an index finger at an audience creates subconscious hostility and resistance. Instead, present ideas with an open palm angled slightly upward or with a soft open-hand guide. Open palms historically demonstrate that you hold no hidden weapons, creating instantaneous safety.</p>
        `,
        practiceActivity: {
          title: "Power Sphere Hand Gestures Routine",
          instructions: "Stand in front of a mirror and deliver a 1-minute explanation using three distinct gestures within the Power Sphere: 1) Numbering fingers, 2) Open palm offer, 3) Steepling hands.",
          checklist: [
            "Held hands comfortably inside the Power Sphere zone",
            "Eliminated pocket-stuffing and arm-crossing",
            "Used open palms instead of finger pointing"
          ]
        },
        takeaways: [
          "Claim physical space with pulled-back shoulders and an open torso.",
          "Keep hand gestures inside the mid-torso Power Sphere.",
          "Open palms foster trust and eliminate defensive reactions."
        ]
      },
      {
        id: "bl-5",
        title: "Confident Walking and Standing",
        duration: "40 mins",
        objectives: [
          "Master the deliberate entry into a room or interview hall",
          "Adopt the balanced shoulder-width neutral stance",
          "Eliminate weight-shifting and pacing during presentations"
        ],
        content: `
          <h3>The First 10 Steps: Entering Any Room</h3>
          <p>The moment you cross the threshold into a conference room, exam hall, or auditorium, an audience evaluates your authority. Rushing through the door with hunched shoulders conveys anxious haste; a deliberate, measured walk commands automatic attention.</p>

          <div class="lesson-objectives-box">
            <h4>The Stride of Certainty</h4>
            <p>Walk with your chin level to the floor, shoulders back and down, taking even, measured strides. Swing your arms gently from your shoulders, not your elbows. When you reach the podium or chair, do not immediately rush to sit or speak—take one full breath, pause, and ground yourself first.</p>
          </div>

          <h3>The Grounded Neutral Stance</h3>
          <p>Keep your feet shoulder-width apart, distributing weight equally on both heels and the balls of your feet. Avoid the 'swaying pendulum' habit of shifting weight side to side, which visually betrays underlying nervousness.</p>
        `,
        practiceActivity: {
          title: "Room Entry and Stance Routine",
          instructions: "Practice walking 10 paces into a room, coming to a complete stop, grounding your feet shoulder-width apart, and pausing 3 seconds before greeting.",
          checklist: [
            "Even, unhurried strides with arms relaxed",
            "Shoulders relaxed, chin parallel to the floor",
            "Weight evenly balanced between both feet upon stopping"
          ]
        },
        takeaways: [
          "How you enter a room sets the tone before you speak.",
          "Ground your feet shoulder-width apart and eliminate nervous sway.",
          "Pause for 2-3 seconds after stopping before initiating speech."
        ]
      },
      {
        id: "bl-6",
        title: "Professional Body Language",
        duration: "45 mins",
        objectives: [
          "Master the executive handshake and seated posture at conference tables",
          "Understand seating psychology (head of table vs. flank positions)",
          "Adapt body language for video conferencing and virtual interviews"
        ],
        content: `
          <h3>Nonverbal Dynamics in Corporate & Formal Environments</h3>
          <p>In high-stakes professional meetings, boardrooms, and competitive exam panels, subtle nonverbal cues can either reinforce your authority or diminish your perceived value.</p>

          <div class="lesson-objectives-box">
            <h4>1. The Firm, Equal Handshake</h4>
            <p>Extend your hand vertically with the web of your thumb meeting the web of their thumb. Apply firm, even pressure matching their grip strength, pump twice from the elbow, maintain direct eye contact with a warm smile, and disengage cleanly.</p>
          </div>

          <div class="lesson-objectives-box">
            <h4>2. Seated Posture for Authority</h4>
            <p>Do not sink back into the chair or slouch against the cushions. Sit on the front two-thirds of the seat, spine erect, hands rested gently on the table or your lap in an open steeple. Lean forward 5 to 10 degrees during key discussions to signal active commitment.</p>
          </div>

          <div class="lesson-objectives-box">
            <h4>3. Virtual Screen Nonverbal Rules</h4>
            <p>Position your camera at eye level, not looking up your chin. Ensure your upper chest, shoulders, and hands are visible in the frame so your gestures can communicate emotional warmth.</p>
          </div>
        `,
        practiceActivity: {
          title: "Seated Posture & Virtual Camera Calibration",
          instructions: "Adjust your desk chair and camera setup. Practice sitting forward on the front two-thirds of the chair with hands visible on the tabletop for 5 minutes.",
          checklist: [
            "Erect spine without touching backrest",
            "Hands visible and rested calmly in front",
            "Camera at direct eye level"
          ]
        },
        takeaways: [
          "A vertical, web-to-web handshake with direct eye contact establishes parity.",
          "Sit forward on the front two-thirds of the chair to project alertness.",
          "On virtual video calls, keep your camera at eye level with hands visible."
        ]
      },
      {
        id: "bl-7",
        title: "Practical Observation Exercise",
        duration: "45 mins",
        isCapstone: true,
        objectives: [
          "Conduct a structured nonverbal observational audit of a live speaker",
          "Identify posture, eye contact, pacifying habits, and gesture effectiveness",
          "Synthesize lessons into personal nonverbal improvement goals"
        ],
        content: `
          <h3>The Observational Mastery Drill</h3>
          <p>The quickest way to sharpen your own nonverbal command is to develop a discerning analytical eye for nonverbal behaviors in others. By observing speakers critically, you become acutely aware of the micro-signals you project yourself.</p>

          <div class="practice-activity-card">
            <h3>PRACTICAL OBSERVATION AUDIT</h3>
            <p><strong>Task:</strong> Observe a 5-to-10 minute presentation, interview recording, or conference speaker (or your own recorded practice video) and complete this structured nonverbal audit.</p>

            <div class="checklist-container">
              <label class="checklist-item">
                <input type="checkbox" id="chk-obs-1">
                <span><strong>Stance & Grounding:</strong> Did the speaker plant their feet firmly, or did they shift weight, pace nervously, or cross their legs?</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-obs-2">
                <span><strong>Hand Gestures:</strong> Were gestures contained within the Power Sphere, or were hands stuffed in pockets, clenched, or erratic?</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-obs-3">
                <span><strong>Pacifying Cues:</strong> Did the speaker touch their face, neck, watch, or clothing when handling difficult topics?</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-obs-4">
                <span><strong>Eye Contact Quality:</strong> Did the speaker connect with individuals (3-5 seconds each) or scan rapidly across the ceiling?</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-obs-5">
                <span><strong>Congruence:</strong> Did their facial expressions match their spoken emotion?</span>
              </label>
            </div>
          </div>
        `,
        practiceActivity: {
          title: "Complete the Nonverbal Observation Audit",
          instructions: "Audit a real speaker or your own practice video against the 5 rubric points above and note two positive techniques to adopt.",
          checklist: [
            "Completed nonverbal audit checklist",
            "Identified two high-power behaviors to adopt in my own delivery"
          ]
        },
        takeaways: [
          "Observing others sharpens your subconscious self-monitoring.",
          "High-impact communicators maintain open, grounded stillness under pressure.",
          "Ready to test your knowledge in the Body Language Assessment Quiz!"
        ]
      }
    ]
  },
  {
    id: "presentation-skills-masterclass",
    title: "Presentation Skills Masterclass",
    category: "Presentations",
    level: "Intermediate",
    duration: "4 Weeks (Est. 14 Hours)",
    lessonsCount: 7,
    shortDescription: "Design high-impact slides, organize persuasive narratives, open with powerful hooks, and deliver presentations that win approvals.",
    fullDescription: "From boardroom executive briefings to academic defenses and sales pitches, Presentation Skills Masterclass teaches you how to structure complex ideas into clean, persuasive slide narratives that command attention and drive decisive action.",
    learningObjectives: [
      "Plan presentations with audience persona mapping and clear outcomes",
      "Organize complex data using the SCQA framework (Situation, Complication, Question, Answer)",
      "Design clean, uncluttered visual slides adhering to modern cognitive load theory",
      "Hook listeners within the first 60 seconds with memorable openers",
      "Integrate emotional storytelling frameworks to anchor abstract facts",
      "Deliver slides without reading text verbatim off the screen",
      "Handle interruptions, hostile slide challenges, and time cutoffs smoothly"
    ],
    targetAudience: "Team leaders, students, project managers, entrepreneurs, and researchers.",
    lessons: [
      {
        id: "pr-1",
        title: "Planning a Presentation",
        duration: "45 mins",
        objectives: [
          "Define the single desired outcome before opening slide software",
          "Map audience decision-makers, skeptics, and champions",
          "Audit time constraints and prepare for sudden schedule cuts"
        ],
        content: `
          <h3>The Fatal Mistake: Opening PowerPoint First</h3>
          <p>Most presenters begin by opening slide software and randomly typing bullet points. This produces cluttered, directionless decks. Professional presentation architects never open slide software until their core narrative is mapped out on paper.</p>

          <div class="lesson-objectives-box">
            <h4>The W.I.I.F.M. Filter (What's In It For Me?)</h4>
            <p>Every member of your audience is preoccupied with their own priorities, deadlines, and budgets. If you do not answer their unspoken question—'How does this help my goals or solve my headache?'—in the first two minutes, they will check their phones.</p>
          </div>

          <h3>The 50% Time Rule</h3>
          <p>If you are allocated a 30-minute meeting slot, plan for exactly 15 minutes of presentation, leaving 15 minutes for questions and collaborative discussion. Respecting time demonstrates executive competence.</p>
        `,
        practiceActivity: {
          title: "Audience Persona & Goal Sheet",
          instructions: "Define a presentation topic, then write down: 1) The primary decision maker, 2) Their biggest anxiety or doubt, and 3) The single sentence action you want them to take.",
          checklist: [
            "Identified the specific decision maker",
            "Pinpointed their primary objection",
            "Summarized the desired outcome in one crisp sentence"
          ]
        },
        takeaways: [
          "Plan the narrative on paper before opening slide design software.",
          "Filter every slide through the audience's W.I.I.F.M. perspective.",
          "Design for half your allocated slot to allow robust dialogue."
        ]
      },
      {
        id: "pr-2",
        title: "Organizing Ideas",
        duration: "45 mins",
        objectives: [
          "Master the McKinsey SCQA framework (Situation, Complication, Question, Answer)",
          "Eliminate information overload using progressive disclosure",
          "Ensure logical flow through informative action titles"
        ],
        content: `
          <h3>Structuring Complex Ideas with SCQA</h3>
          <p>Created by Barbara Minto at McKinsey & Company, the SCQA structure is the global standard for executive briefings and persuasive strategy presentations:</p>

          <div class="lesson-objectives-box">
            <ol style="margin-left: 1.25rem;">
              <li><strong>Situation:</strong> State a widely acknowledged fact or baseline context everyone agrees on.</li>
              <li><strong>Complication:</strong> Introduce the problem, unexpected obstacle, or changing market condition that disrupts the situation.</li>
              <li><strong>Question:</strong> Formulate the urgent dilemma: 'How do we solve this challenge without risking our timeline?'</li>
              <li><strong>Answer:</strong> Present your clear, substantiated recommendation.</li>
            </ol>
          </div>

          <h3>Action Titles vs. Category Labels</h3>
          <p>Never title a slide 'Financial Performance' or 'Marketing Overview.' Use action titles that state the conclusion: 'Q3 Revenues Grew 18% Driven by Enterprise Renewals.' This enables listeners to understand your thesis immediately.</p>
        `,
        practiceActivity: {
          title: "SCQA Narrative Scripting",
          instructions: "Draft an SCQA narrative for a project or research proposal in exactly 4 concise paragraphs.",
          checklist: [
            "Situation established uncontested common ground",
            "Complication highlighted a pressing problem",
            "Urgent question clearly stated",
            "Action-oriented answer proposed"
          ]
        },
        takeaways: [
          "SCQA provides a foolproof structure for persuasive business proposals.",
          "Write action titles that state the takeaway, not passive category labels.",
          "Disclose details progressively to keep the narrative uncluttered."
        ]
      },
      {
        id: "pr-3",
        title: "Creating Effective Slides",
        duration: "50 mins",
        objectives: [
          "Apply the Guy Kawasaki 10/20/30 rule",
          "Reduce cognitive load using the 'One Idea Per Slide' principle",
          "Select clean typography, high-contrast colors, and authentic photography"
        ],
        content: `
          <h3>Slides Are Visual Aids, Not Reading Scripts</h3>
          <p>If your slides contain full paragraphs of text, your audience will read the screen instead of listening to you. The human brain cannot simultaneously process written text and spoken language from the same channel (Cognitive Load Theory).</p>

          <div class="lesson-objectives-box">
            <h4>The 10/20/30 Principle</h4>
            <ul>
              <li><strong>10 Slides:</strong> The optimal number of slides for a standard pitch or briefing.</li>
              <li><strong>20 Minutes:</strong> Maximum running time for the monologue portion.</li>
              <li><strong>30-Point Font:</strong> Minimum font size. If you need a font smaller than 30 points to fit all your text, you have too much text on the slide!</li>
            </ul>
          </div>

          <h3>Visual Hierarchy Guidelines</h3>
          <p>Embrace white space generously. A slide with a single compelling chart and an action title is infinitely more persuasive than a dense wall of twelve bullet points.</p>
        `,
        practiceActivity: {
          title: "Bullet Point Transformation Drill",
          instructions: "Take a traditional text-heavy slide with 6 bullet points and redesign it mentally or on paper into 2 clean slides utilizing visual diagrams or concise stat cards.",
          checklist: [
            "Eliminated paragraph blocks in favor of concise keywords",
            "Ensured minimum 30pt readable font hierarchy",
            "Dedicated each slide to exactly one core message"
          ]
        },
        takeaways: [
          "Slides should complement your spoken words, never replace them.",
          "Keep font sizes 30pt or higher to prevent text crowding.",
          "Adhere to the 'One Idea Per Slide' rule for clear comprehension."
        ]
      },
      {
        id: "pr-4",
        title: "Opening with a Strong Hook",
        duration: "40 mins",
        objectives: [
          "Master 4 proven opening hooks: The Paradox, The Provocative Question, The Shocking Metric, and The Micro-Story",
          "Avoid polite opening clichés that drain listener excitement",
          "Transition smoothly from your hook into the core agenda"
        ],
        content: `
          <h3>Winning the First 60 Seconds</h3>
          <p>Audience attention is highest at the exact moment you step forward. If you waste those golden seconds thanking organizers or adjusting slides, engagement drops instantly.</p>

          <div class="lesson-objectives-box">
            <h4>4 High-Impact Hooks</h4>
            <ul>
              <li><strong>The Provocative Question:</strong> 'What if 70% of the daily emails your team sends are actively reducing productivity?'</li>
              <li><strong>The Shocking Metric:</strong> 'Last year, our industry lost over $4.2 billion to preventable compliance errors.'</li>
              <li><strong>The Contrarian Paradox:</strong> 'Most companies believe hiring faster accelerates growth; today I will show you why it is often slowing us down.'</li>
              <li><strong>The Micro-Story:</strong> 'Three months ago, a customer in Lahore called our support line at 2 AM...'</li>
            </ul>
          </div>
        `,
        practiceActivity: {
          title: "Hook Drafting Exercise",
          instructions: "Write two distinct opening hooks for a presentation on 'Improving Workplace Communication.' Practice delivering each within 30 seconds.",
          checklist: [
            "Bypassed all generic pleasantries",
            "Grabbed attention within 20 seconds",
            "Transitioned naturally into the main agenda"
          ]
        },
        takeaways: [
          "Never waste your first minute on procedural pleasantries.",
          "Use questions, surprising metrics, or micro-stories to hook curiosity.",
          "Transition directly from your hook to the presentation's core purpose."
        ]
      },
      {
        id: "pr-5",
        title: "Storytelling Techniques",
        duration: "45 mins",
        objectives: [
          "Use the Hero's Journey framework in business and educational contexts",
          "Position the client, student, or audience as the Hero (you are the Guide)",
          "Incorporate sensory and emotional details into case studies"
        ],
        content: `
          <h3>Data Convinces, But Stories Move People</h3>
          <p>Functional MRI brain scans reveal that when presenters recite dry bullet points, only the brain's language processing centers activate. But when they tell a vivid story, sensory, motor, and emotional regions illuminate across the brain (neural coupling).</p>

          <div class="lesson-objectives-box">
            <h4>The Pixar Story Spine for Presentations</h4>
            <p>Every powerful business case study fits this simple narrative structure:</p>
            <ol style="margin-left: 1.25rem;">
              <li>Once upon a time, there was [Baseline Situation]...</li>
              <li>Every day, they struggled with [The Chronic Pain Point]...</li>
              <li>Until one day, [The Turning Point / Breakthrough] occurred...</li>
              <li>Because of that, [Measurable New Action] was taken...</li>
              <li>Until finally, [The Triumphant Resolution] was achieved!</li>
            </ol>
          </div>
        `,
        practiceActivity: {
          title: "The 90-Second Story Spine Pitch",
          instructions: "Draft a 90-second case study using the Pixar Story Spine to illustrate the value of learning presentation skills.",
          checklist: [
            "Clearly established the initial struggle",
            "Introduced the pivotal breakthrough moment",
            "Showcased concrete, quantifiable transformation"
          ]
        },
        takeaways: [
          "Stories trigger neural coupling, ensuring high retention of abstract concepts.",
          "Make the audience or customer the hero; your role is the supportive guide.",
          "Keep business stories tight, concrete, and tied directly to the core lesson."
        ]
      },
      {
        id: "pr-6",
        title: "Delivering a Presentation",
        duration: "45 mins",
        objectives: [
          "Eliminate screen-gazing and maintain front-facing presence",
          "Handle clickers, remotes, and stage movements with poise",
          "Manage sudden technical glitches calmly"
        ],
        content: `
          <h3>The Art of Screen Separation</h3>
          <p>Never turn your back on your audience to stare at your slides. The slide should trigger your thought; your delivery belongs to the people in front of you. Glancing at your presenter view laptop screen or confidence monitor for 1 second is fine—prolonged screen reading destroys authority.</p>

          <div class="lesson-objectives-box">
            <h4>The Touch-Turn-Talk Method</h4>
            <p>When presenting in front of a projection screen or whiteboard:</p>
            <ul>
              <li><strong>Touch:</strong> Step forward and point to the key metric or diagram.</li>
              <li><strong>Turn:</strong> Turn your eyes and chest fully back to the audience.</li>
              <li><strong>Talk:</strong> Deliver your explanation directly facing the room.</li>
            </ul>
          </div>

          <h3>Technical Preparedness Protocol</h3>
          <p>Projector bulbs blow out, adaptors fail, and internet connections drop. Always have your slides in three formats: a PDF backup on a USB thumb drive, an offline deck on your tablet, and a 1-page printed outline so you can deliver the entire presentation without slides if needed.</p>
        `,
        practiceActivity: {
          title: "Touch-Turn-Talk Practice Drill",
          instructions: "Practice explaining a diagram on a wall or screen using the 3-step Touch-Turn-Talk sequence without turning your back while speaking.",
          checklist: [
            "Maintained full eye contact while vocalizing words",
            "Separated pointing from talking",
            "Moved deliberately without nervous pacing"
          ]
        },
        takeaways: [
          "Never read your slides aloud with your back to the room.",
          "Use the Touch-Turn-Talk protocol to interact with visual displays.",
          "Always maintain offline backups to handle technical failures smoothly."
        ]
      },
      {
        id: "pr-7",
        title: "Handling Audience Questions",
        duration: "40 mins",
        isCapstone: true,
        objectives: [
          "Manage aggressive, nitpicking, or tangential questions during presentations",
          "Bridge off-topic questions back to core strategic objectives",
          "Conclude presentations powerfully after the final Q&A"
        ],
        content: `
          <h3>The Final Impression: The Post-Q&A Close</h3>
          <p>Most presenters allow their presentation to fizzle out with: 'Well, if there are no more questions, I guess we are done.' This leaves an uninspiring, anticlimactic final memory.</p>

          <div class="lesson-objectives-box">
            <h4>The Double Close Technique</h4>
            <p><strong>Close 1:</strong> Conclude your formal presentation and invite questions: 'That concludes our formal proposal. Let's open the floor to questions.'</p>
            <p><strong>Close 2 (The True Final Close):</strong> After the last question has been answered, take back the floor for 60 seconds to summarize your vision and state your definitive call to action!</p>
          </div>
        `,
        practiceActivity: {
          title: "Double Close Scripting",
          instructions: "Write a 45-second final post-Q&A closing statement that reinforces your core vision and delivers an unmistakable call to action.",
          checklist: [
            "Acknowledged the value of the Q&A contributions",
            "Synthesized the primary strategic message",
            "Delivered an inspiring, definitive concluding call-to-action"
          ]
        },
        takeaways: [
          "Never let your presentation end abruptly on an audience question.",
          "Use the Double Close to retain the final word and leave an inspiring impression.",
          "You are now ready to take the Presentation Skills Assessment Quiz!"
        ]
      }
    ]
  },
  {
    id: "interview-preparation-and-career-skills",
    title: "Interview Preparation and Career Skills",
    category: "Interviews",
    level: "Intermediate - Advanced",
    duration: "4 Weeks (Est. 12 Hours)",
    lessonsCount: 7,
    shortDescription: "Master job interviews, competitive exam vivas (CSS/PMS), the STAR method, salary negotiation, and confident self-introductions.",
    fullDescription: "Interview Preparation and Career Skills is a comprehensive blueprint for landing competitive positions. Whether facing corporate panels, multi-stage tech assessments, or competitive civil service viva boards, this course provides proven frameworks for high-scoring interview performance.",
    learningObjectives: [
      "Conduct in-depth pre-interview organizational and panel research",
      "Structure an irresistible 90-second 'Tell Me About Yourself' elevator pitch",
      "Answer behavioral questions flawlessly using the STAR framework (Situation, Task, Action, Result)",
      "Reframe personal weaknesses and employment gaps with authentic maturity",
      "Navigate difficult questions and curveball hypothetical scenarios",
      "Project poise, respect, and parity during high-stakes panel interviews",
      "Conduct simulated mock interviews using rigorous rubric evaluations"
    ],
    targetAudience: "Job seekers, graduating university students, and competitive examination (CSS/PMS) aspirants.",
    lessons: [
      {
        id: "ip-1",
        title: "Preparing for an Interview",
        duration: "40 mins",
        objectives: [
          "Execute the 3-Layer Pre-Interview Research Protocol",
          "Analyze job descriptions to predict 80% of panel questions",
          "Assemble professional attire and necessary document portfolios"
        ],
        content: `
          <h3>The 3-Layer Research Protocol</h3>
          <p>Unprepared candidates review only the company's homepage 'About Us' section. High-performing candidates conduct deep research across three distinct layers:</p>

          <div class="lesson-objectives-box">
            <ul>
              <li><strong>Layer 1 (The Organization):</strong> Read recent press releases, annual reports, major challenges, and recent strategic milestones over the past 12 months.</li>
              <li><strong>Layer 2 (The Panel / Interviewers):</strong> Research panel members on professional networks. Note their career paths, published articles, and shared affiliations.</li>
              <li><strong>Layer 3 (The Role):</strong> Deconstruct the job description into core competency buckets: Problem Solving, Team Leadership, Crisis Management, and Technical Prowess.</li>
            </ul>
          </div>
        `,
        practiceActivity: {
          title: "Job Competency Mapping Sheet",
          instructions: "Select a target job description and map out 4 key competencies required, pairing each with a specific past project or achievement from your experience.",
          checklist: [
            "Identified 4 core competency buckets",
            "Matched each competency to a verified real-life project",
            "Prepared two insightful questions to ask the interviewer"
          ]
        },
        takeaways: [
          "Thorough pre-interview research sets top-tier candidates apart.",
          "Analyze the job description to accurately predict the panel's interview agenda.",
          "Prepare intelligent, forward-looking questions for the panel."
        ]
      },
      {
        id: "ip-2",
        title: "Introducing Yourself Professionally",
        duration: "45 mins",
        objectives: [
          "Structure a flawless 90-second response to 'Tell Me About Yourself'",
          "Apply the Past-Present-Future framework",
          "Avoid repeating your resume chronologically"
        ],
        content: `
          <h3>The 'Tell Me About Yourself' Trap</h3>
          <p>This is almost universally the opening question in every interview. Amateur candidates recite their resume year by year starting from high school. Professional candidates use this question as a tailored teaser trailer for the value they will bring to the role.</p>

          <div class="lesson-objectives-box">
            <h4>The Past-Present-Future Formula</h4>
            <ul>
              <li><strong>Present (30 Seconds):</strong> Where you are right now, your current specialization, and a signature recent achievement.</li>
              <li><strong>Past (30 Seconds):</strong> The relevant background, academic training, and foundational experiences that shaped your capabilities.</li>
              <li><strong>Future (30 Seconds):</strong> Why you are enthusiastic about this specific opportunity and how your skills directly solve their current priorities.</li>
            </ul>
          </div>
        `,
        practiceActivity: {
          title: "90-Second Introduction Scripting",
          instructions: "Draft your personal Past-Present-Future script. Time yourself speaking it aloud, keeping it strictly between 75 and 90 seconds.",
          checklist: [
            "Clear current positioning and signature win",
            "Relevant past qualifications summarized concisely",
            "Compelling forward-looking rationale for joining this specific team"
          ]
        },
        takeaways: [
          "Never recite your resume line-by-line in an introduction.",
          "Use the Present-Past-Future model to keep your pitch focused.",
          "Keep your total introduction under 90 seconds."
        ]
      },
      {
        id: "ip-3",
        title: "Answering Common Interview Questions",
        duration: "50 mins",
        objectives: [
          "Formulate strategic responses to 'What are your greatest weaknesses?'",
          "Address 'Why should we hire you over other qualified candidates?'",
          "Navigate 'Where do you see yourself in five years?'"
        ],
        content: `
          <h3>Deconstructing High-Frequency Questions</h3>
          <p>Every standard interview question carries a deeper, unspoken evaluation metric:</p>

          <div class="lesson-objectives-box">
            <h4>1. 'What is your greatest weakness?'</h4>
            <p><strong>What they are testing:</strong> Self-awareness, humility, and ongoing proactive improvement.<br>
            <strong>The formula:</strong> Share an authentic technical or procedural limitation you previously had, explain the exact corrective system you implemented, and share the positive results you now experience.</p>
          </div>

          <div class="lesson-objectives-box">
            <h4>2. 'Why should we hire you?'</h4>
            <p><strong>What they are testing:</strong> Value proposition and role clarity.<br>
            <strong>The formula:</strong> Highlight the intersection of your unique skill set, your cultural alignment, and your immediate ability to execute their highest priorities.</p>
          </div>
        `,
        practiceActivity: {
          title: "Weakness Reframe Worksheet",
          instructions: "Draft a response to the weakness question focusing on a genuine operational skill (e.g. delegation, public speaking, or data visualization) and explain your concrete system for overcoming it.",
          checklist: [
            "Selected an authentic, non-fatal professional area of growth",
            "Described the specific training, routine, or software adopted",
            "Demonstrated positive measured progress"
          ]
        },
        takeaways: [
          "Weakness questions test self-awareness and systematic self-correction.",
          "Frame your value proposition around their immediate operational priorities.",
          "Always show evidence of proactive ongoing learning."
        ]
      },
      {
        id: "ip-4",
        title: "The STAR Answer Method",
        duration: "50 mins",
        objectives: [
          "Deconstruct behavioral interview questions ('Tell me about a time when...')",
          "Apply the STAR Framework: Situation, Task, Action, Result",
          "Ensure the 'Action' step occupies 60% of your response time"
        ],
        content: `
          <h3>The Gold Standard: The STAR Framework</h3>
          <p>Behavioral interview questions operate on the premise that past behavior is the single best predictor of future performance. When asked 'Tell me about a time you handled conflict,' never speak in generalities—use STAR:</p>

          <div class="lesson-objectives-box">
            <ul>
              <li><strong>S - Situation (15%):</strong> Set the scene concisely. Provide context, organization, and constraints in 2 to 3 sentences.</li>
              <li><strong>T - Task (15%):</strong> State your specific responsibility or the goal you needed to achieve.</li>
              <li><strong>A - Action (55%):</strong> The crucial core. Detail the exact steps YOU took. Use 'I', not 'We'. Explain your reasoning, problem-solving, and communication.</li>
              <li><strong>R - Result (15%):</strong> Deliver the concrete outcome with quantifiable metrics (e.g., 'reduced turnaround time by 22%').</li>
            </ul>
          </div>
        `,
        practiceActivity: {
          title: "STAR Story Bank Builder",
          instructions: "Write out a full STAR story based on a real-life challenge you solved under pressure.",
          checklist: [
            "Situation set in under 3 sentences",
            "Individual personal actions clearly articulated using 'I'",
            "Quantifiable or tangible result explicitly documented"
          ]
        },
        takeaways: [
          "STAR eliminates rambling and provides compelling evidence of competence.",
          "Dedicate the majority of your time to the specific Actions YOU took.",
          "Always conclude with measurable, positive Results."
        ]
      },
      {
        id: "ip-5",
        title: "Professional Communication",
        duration: "40 mins",
        objectives: [
          "Master professional tone, register, and active vocabulary",
          "Demonstrate active listening and avoid interrupting interviewers",
          "Navigate panel interviews with multiple evaluators seamlessly"
        ],
        content: `
          <h3>Panel Communication Dynamics</h3>
          <p>In competitive examinations (such as CSS/PMS vivas) or executive interviews, you will frequently face a panel of 3 to 6 interviewers with differing personalities and objectives.</p>

          <div class="lesson-objectives-box">
            <h4>The Panel Triangulation Technique</h4>
            <p>When an interviewer asks you a question: Begin by maintaining direct eye contact with the questioner for the first 10 seconds. Then, smoothly pan your gaze to the other panel members while developing your response so the whole room stays involved. Finish your conclusion by returning your gaze directly to the original questioner.</p>
          </div>
        `,
        practiceActivity: {
          title: "Panel Eye Rotation Practice",
          instructions: "Practice delivering a 2-minute answer while distributing eye contact across three points representing panel members.",
          checklist: [
            "Started answer facing the asking panelist",
            "Rotated gaze smoothly to encompass other members",
            "Ended response back with the original questioner"
          ]
        },
        takeaways: [
          "Keep the entire panel engaged through deliberate eye triangulation.",
          "Maintain composure and never show irritation with aggressive panelists.",
          "Speak with measured, authoritative vocabulary."
        ]
      },
      {
        id: "ip-6",
        title: "Handling Difficult Questions",
        duration: "45 mins",
        objectives: [
          "Handle stress-test questions, rapid-fire interrogations, and curveballs",
          "Address career gaps or low GPA transparently without defensive excuses",
          "Apply the 'Pivot Technique' to bring conversations back to your strengths"
        ],
        content: `
          <h3>Surviving the Stress-Test Interview</h3>
          <p>Some interview panels intentionally ask confrontational questions to evaluate your emotional resilience under pressure. The goal is rarely to find the 'right' factual answer—they are observing whether you get defensive, angry, or flustered.</p>

          <div class="lesson-objectives-box">
            <h4>The 3 Rules of Composure Under Fire</h4>
            <ol style="margin-left: 1.25rem;">
              <li><strong>Take a deep breath and smile softly:</strong> This physically signals to your brain and the panel that you are not intimidated.</li>
              <li><strong>Validate the complexity:</strong> 'That is a challenging and multifaceted issue, and there are several perspectives to consider...'</li>
              <li><strong>Think aloud systematically:</strong> Walk them through your analytical reasoning process step by step.</li>
            </ol>
          </div>
        `,
        practiceActivity: {
          title: "Curveball Question Drill",
          instructions: "Formulate a response to: 'Why should we risk hiring someone with your background when other candidates have twice the experience?' using calm reframing.",
          checklist: [
            "Maintained open, calm body posture",
            "Acknowledged the question without defensiveness",
            "Reframed fresh perspective and rapid adaptability as a unique asset"
          ]
        },
        takeaways: [
          "Difficult questions evaluate emotional poise, not just raw knowledge.",
          "Never make defensive excuses for resume gaps; own them with maturity.",
          "Think aloud systematically when faced with complex scenarios."
        ]
      },
      {
        id: "ip-7",
        title: "Mock Interview Practice",
        duration: "50 mins",
        isCapstone: true,
        objectives: [
          "Execute a full simulated mock interview from greeting to final questions",
          "Apply all frameworks (Past-Present-Future, STAR, Body Language)",
          "Complete the comprehensive Interview Readiness Evaluation"
        ],
        content: `
          <h3>Comprehensive Interview Simulation</h3>
          <p>This capstone lesson integrates all interview mastery skills. Set up your practice environment: dress in full professional attire, arrange your seating, and run through this full interview simulation.</p>

          <div class="practice-activity-card">
            <h3>MOCK INTERVIEW SIMULATION PROMPTS</h3>
            <ol style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
              <li><em>Question 1:</em> 'Walk me through your background and tell me what brings you to this interview today.' (Apply Present-Past-Future)</li>
              <li><em>Question 2:</em> 'Describe a situation where a project was failing or behind schedule. What actions did you take?' (Apply STAR)</li>
              <li><em>Question 3:</em> 'Tell me about a time you disagreed with a manager or senior colleague. How was it resolved?' (Apply STAR + Diplomatic Tone)</li>
              <li><em>Question 4:</em> 'What is a significant professional skill you are currently working to improve?' (Apply Reframed Weakness)</li>
              <li><em>Question 5:</em> 'Do you have any questions for our interview panel?' (Ask 2 Strategic Inquiries)</li>
            </ol>

            <h4>Interview Readiness Evaluation Rubric</h4>
            <div class="checklist-container">
              <label class="checklist-item">
                <input type="checkbox" id="chk-mock-1">
                <span><strong>Greeting & Posture:</strong> Confident entrance, firm greeting, erect and grounded seated posture.</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-mock-2">
                <span><strong>Self-Introduction:</strong> Succinct 90-second delivery using Present-Past-Future without resume recitation.</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-mock-3">
                <span><strong>STAR Method Execution:</strong> Answered behavioral challenges with specific personal actions and quantifiable outcomes.</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-mock-4">
                <span><strong>Vocal Poise & Composure:</strong> Zero defensive reactions, steady eye contact, and purposeful pauses.</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-mock-5">
                <span><strong>Strategic Closing:</strong> Asked thoughtful, high-level questions that demonstrated genuine interest.</span>
              </label>
            </div>
          </div>
        `,
        practiceActivity: {
          title: "Complete the Full Mock Simulation",
          instructions: "Run through the 5 interview simulation prompts aloud and score yourself on all 5 rubric checkpoints.",
          checklist: [
            "Conducted mock simulation under realistic timing constraints",
            "Evaluated performance using the 5-point readiness rubric",
            "Identified areas for pre-interview refinement"
          ]
        },
        takeaways: [
          "Mock simulations build emotional muscle memory under interview pressure.",
          "Consistent STAR execution transforms abstract answers into concrete proof.",
          "You are now prepared to take the Interview Skills Assessment Quiz!"
        ]
      }
    ]
  },
  {
    id: "professional-communication",
    title: "Professional Communication",
    category: "Workplace",
    level: "Beginner - Intermediate",
    duration: "4 Weeks (Est. 12 Hours)",
    lessonsCount: 7,
    shortDescription: "Master workplace emails, active listening, executive clarity, team collaboration, and constructive conflict resolution.",
    fullDescription: "Professional Communication provides the everyday toolkit needed to succeed in modern workplace environments. Learn how to write crisp emails that get prompt responses, lead productive meetings, manage interpersonal conflict constructively, and communicate with clarity across diverse teams.",
    learningObjectives: [
      "Master the foundations of verbal workplace clarity and concise phrasing",
      "Apply active listening frameworks to build trust and prevent misunderstandings",
      "Eliminate ambiguity using the BLUF principle (Bottom Line Up Front)",
      "Draft professional, actionable workplace emails with high response rates",
      "Foster psychologically safe team communication and cross-functional synergy",
      "De-escalate workplace disagreements using nonviolent conflict resolution models",
      "Navigate organizational hierarchy, upward management, and cross-cultural communication"
    ],
    targetAudience: "Corporate employees, team leaders, project managers, and young professionals entering the workplace.",
    lessons: [
      {
        id: "pc-1",
        title: "Verbal Communication",
        duration: "40 mins",
        objectives: [
          "Understand the 7 C's of professional communication",
          "Eliminate passive-aggressive phrasing in verbal exchanges",
          "Structure spontaneous workplace updates cleanly"
        ],
        content: `
          <h3>The 7 C's of Effective Communication</h3>
          <p>In high-velocity work environments, poor communication leads to costly misunderstandings and wasted effort. High-performing communicators filter every message through the classical 7 C's:</p>

          <div class="lesson-objectives-box">
            <ul>
              <li><strong>Clear:</strong> Unmistakable purpose with no room for misinterpretation.</li>
              <li><strong>Concise:</strong> Respectful of the listener's time—no unnecessary fluff.</li>
              <li><strong>Concrete:</strong> Supported by specific facts, figures, and dates.</li>
              <li><strong>Correct:</strong> Accurate data, terminology, and syntax.</li>
              <li><strong>Coherent:</strong> Logical progression from premise to conclusion.</li>
              <li><strong>Complete:</strong> All necessary context and action steps included.</li>
              <li><strong>Courteous:</strong> Respectful, constructive, and empathetic tone.</li>
            </ul>
          </div>
        `,
        practiceActivity: {
          title: "The 30-Second Elevator Update",
          instructions: "Deliver a 30-second verbal status update on a project using the 7 C's framework without rambling.",
          checklist: [
            "Stated current milestone in sentence one",
            "Mentioned one key blocker or need concisely",
            "Specified exact next steps and delivery dates"
          ]
        },
        takeaways: [
          "Filter verbal updates through the 7 C's to maximize clarity.",
          "Respect colleague time by delivering concise, concrete summaries.",
          "Maintain courtesy even during high-pressure deadlines."
        ]
      },
      {
        id: "pc-2",
        title: "Active Listening",
        duration: "45 mins",
        objectives: [
          "Distinguish between hearing (passive) and listening (active)",
          "Apply the L-I-S-T-E-N framework in one-on-one meetings",
          "Paraphrase for mutual understanding before reacting"
        ],
        content: `
          <h3>The Rarest Leadership Skill: True Active Listening</h3>
          <p>Most people do not listen to understand—they listen with the intent to reply. While the other person speaks, their brain is busy drafting their rebuttal or waiting impatiently for their turn to talk.</p>

          <div class="lesson-objectives-box">
            <h4>The Reflective Paraphrase Technique</h4>
            <p>Before offering your opinion, validate what you just heard: <em>'Just to ensure I have captured your perspective fully, you are concerned that pushing the release date will impact our client commitments, and you would prefer we trim non-essential features instead. Is that accurate?'</em></p>
          </div>
        `,
        practiceActivity: {
          title: "Paraphrase & Validate Practice",
          instructions: "Take a complicated complaint from a colleague or client and draft an empathetic reflective paraphrase that validates their concern without being defensive.",
          checklist: [
            "Demonstrated zero interruption while listening",
            "Reflected underlying emotional and practical concerns",
            "Confirmed accuracy before proposing a solution"
          ]
        },
        takeaways: [
          "Listen to understand, not merely to prepare your rebuttal.",
          "Use reflective paraphrasing to prevent costly misunderstandings.",
          "Validation does not mean agreeing—it means demonstrating respect."
        ]
      },
      {
        id: "pc-3",
        title: "Clear and Concise Speaking",
        duration: "40 mins",
        objectives: [
          "Apply the BLUF model (Bottom Line Up Front) to briefings",
          "Trim filler words and unnecessary qualifiers ('just', 'maybe', 'sorry')",
          "Deliver bad news or project delays with transparency"
        ],
        content: `
          <h3>The BLUF Model (Bottom Line Up Front)</h3>
          <p>Originating in military intelligence and adopted by top executives, BLUF requires you to state your conclusion, decision, or request in the <strong>very first sentence</strong>. Supporting context comes second.</p>

          <div class="lesson-objectives-box">
            <h4>Traditional Ramble vs. BLUF Delivery</h4>
            <p><strong>Traditional Ramble:</strong> 'As you know, our vendor had a server outage last Tuesday, and then two engineers took leave, and the shipping company had customs delays, so basically we will miss the deadline.'<br>
            <strong>BLUF Delivery:</strong> 'We need to adjust our delivery date from Friday to next Tuesday. Here are the two root causes and the contingency plan we have put in place.'</p>
          </div>
        `,
        practiceActivity: {
          title: "BLUF Transformation Drill",
          instructions: "Rewrite a rambling 3-paragraph workplace update into a 3-sentence BLUF summary.",
          checklist: [
            "Conclusion or request stated in the opening sentence",
            "Supporting rationale summarized in two concise points",
            "Clear forward-looking action item included"
          ]
        },
        takeaways: [
          "Lead with the bottom line first to save leadership time.",
          "Eliminate timid qualifiers like 'I just thought maybe we could...'",
          "Deliver delays or bad news directly with an accompanying action plan."
        ]
      },
      {
        id: "pc-4",
        title: "Professional Email Etiquette",
        duration: "45 mins",
        objectives: [
          "Craft high-open subject lines that command attention",
          "Structure actionable emails using bulleted requests and explicit deadlines",
          "Avoid email misunderstandings by choosing when to switch to a phone call"
        ],
        content: `
          <h3>Writing Emails That Get Results</h3>
          <p>The average corporate professional receives over 120 emails a day. Long walls of dense text get ignored or delayed. High-performing emails are visually scannable and respect the reader's time.</p>

          <div class="lesson-objectives-box">
            <h4>The Anatomy of an Effective Email</h4>
            <ul>
              <li><strong>Actionable Subject Line:</strong> [Action Required by 3 PM] Review Q3 Slide Draft</li>
              <li><strong>Greeting & 1-Sentence Context:</strong> State the core reason for writing.</li>
              <li><strong>Bulleted Details:</strong> Present key points as concise bullets.</li>
              <li><strong>Clear Call-to-Action (CTA):</strong> Specify exactly who needs to do what and by what date/time.</li>
            </ul>
          </div>
        `,
        practiceActivity: {
          title: "Professional Email Drafting",
          instructions: "Draft an urgent request email to a cross-functional department head requesting budget approval by end-of-week using clean subject tags and clear bullet points.",
          checklist: [
            "Specific, tag-based subject line",
            "Maximum 5 concise bullet points for the body",
            "Unmistakable deadline and call-to-action"
          ]
        },
        takeaways: [
          "Subject lines must clearly state urgency and required action.",
          "Keep email bodies visually scannable using bullet points.",
          "If an email thread exceeds three replies without resolution, pick up the phone."
        ]
      },
      {
        id: "pc-5",
        title: "Team Communication",
        duration: "40 mins",
        objectives: [
          "Cultivate psychological safety in team meetings and retrospectives",
          "Provide constructive feedback using the SBI model (Situation, Behavior, Impact)",
          "Run productive 25-minute meetings with clear agendas"
        ],
        content: `
          <h3>The SBI Feedback Framework</h3>
          <p>Giving vague feedback ('You need to be more proactive' or 'Good job') fails to change behavior. Use the Center for Creative Leadership's SBI framework:</p>

          <div class="lesson-objectives-box">
            <ul>
              <li><strong>Situation:</strong> Anchor feedback to a specific time and place. ('In yesterday's client pitch at 10 AM...')</li>
              <li><strong>Behavior:</strong> Describe the observable, objective action without judging character. ('...you interrupted the client twice while they were explaining their requirements...')</li>
              <li><strong>Impact:</strong> Explain the measurable consequence. ('...which caused them to close their notebook and hesitate to share further details.')</li>
            </ul>
          </div>
        `,
        practiceActivity: {
          title: "Constructive SBI Feedback Script",
          instructions: "Draft an SBI feedback script addressing a team member who missed an important project deadline.",
          checklist: [
            "Anchored to specific situation and date",
            "Focused strictly on objective behavior, not character insults",
            "Articulated tangible business impact"
          ]
        },
        takeaways: [
          "The SBI model grounds feedback in objective facts rather than emotion.",
          "Praise in public; deliver constructive critiques in private.",
          "Never call a meeting without a clearly defined agenda and desired outcome."
        ]
      },
      {
        id: "pc-6",
        title: "Conflict Management",
        duration: "45 mins",
        objectives: [
          "Understand the Thomas-Kilmann Conflict Mode Instrument (TKI)",
          "Separate the people from the problem in high-stakes negotiations",
          "De-escalate workplace tension using neutral language"
        ],
        content: `
          <h3>Turning Destructive Conflict into Constructive Innovation</h3>
          <p>Conflict is inevitable in any ambitious team. Toxic conflict attacks people's motives; productive conflict rigorously debates ideas and trade-offs to find the best solution.</p>

          <div class="lesson-objectives-box">
            <h4>The Harvard Negotiation Model: 4 Principles</h4>
            <ol style="margin-left: 1.25rem;">
              <li><strong>Separate people from the problem:</strong> Attack the challenge together rather than attacking each other.</li>
              <li><strong>Focus on underlying interests, not stubborn positions:</strong> Understand WHY someone wants something rather than debating WHAT they demand.</li>
              <li><strong>Invent options for mutual gain:</strong> Brainstorm collaborative win-win alternatives before locking into a path.</li>
              <li><strong>Insist on objective criteria:</strong> Use verified metrics and standards to decide disputes fairly.</li>
            </ol>
          </div>
        `,
        practiceActivity: {
          title: "Conflict De-escalation Scripting",
          instructions: "Write a 3-sentence de-escalation response to a colleague who says: 'Your team's delays are ruining our entire department's reputation!'",
          checklist: [
            "Separated emotional outburst from the underlying delivery issue",
            "Validated their concern without accepting inaccurate accusations",
            "Proposed a joint working session to review the timeline objectively"
          ]
        },
        takeaways: [
          "Focus on underlying interests rather than entrenched positions.",
          "Separate people from the problem; attack the challenge collaboratively.",
          "De-escalate emotional outbursts with composed, objective inquiry."
        ]
      },
      {
        id: "pc-7",
        title: "Workplace Communication",
        duration: "50 mins",
        isCapstone: true,
        objectives: [
          "Master managing upward and executive stakeholder communication",
          "Navigate cross-cultural communication nuances and diverse teams",
          "Complete the Workplace Communication Comprehensive Assessment"
        ],
        content: `
          <h3>Managing Upward: Communicating with Executives</h3>
          <p>Communicating with senior executives, board members, or departmental heads requires a distinct communication style: high brevity, rapid synthesis, and proposed solutions rather than dumped problems.</p>

          <div class="practice-activity-card">
            <h3>CAPSTONE WORKPLACE COMMUNICATION SIMULATION</h3>
            <p><strong>Scenario:</strong> You are managing an initiative where a critical external partner has just notified you of a 2-week delay. You must update your executive director within the next 30 minutes.</p>

            <h4>Workplace Communication Protocol Checklist</h4>
            <div class="checklist-container">
              <label class="checklist-item">
                <input type="checkbox" id="chk-work-1">
                <span><strong>BLUF Application:</strong> Stated the delay and revised delivery timeline in the first two sentences.</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-work-2">
                <span><strong>Root Cause Analysis:</strong> Summarized the issue objectively without finger-pointing or panic.</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-work-3">
                <span><strong>Two Viable Solutions:</strong> Prepared Option A (fast-track at slight budget cost) and Option B (scope trim at zero cost).</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-work-4">
                <span><strong>Recommendation:</strong> Clearly stated your recommended option and the reasoning behind it.</span>
              </label>
              <label class="checklist-item">
                <input type="checkbox" id="chk-work-5">
                <span><strong>Clear Decision Request:</strong> Explicitly asked for their approval by a specific time today.</span>
              </label>
            </div>
          </div>
        `,
        practiceActivity: {
          title: "Executive Upward Briefing Drill",
          instructions: "Draft the 150-word executive briefing for the scenario above adhering to all 5 rubric points.",
          checklist: [
            "Delivered briefing under 150 words",
            "Offered solutions rather than just reporting problems",
            "Completed all 5 rubric checkpoints"
          ]
        },
        takeaways: [
          "Never bring an executive a problem without at least two structured solutions.",
          "Communicate with brevity, precision, and decisive recommendations.",
          "You are now ready to take the Professional Communication Assessment Quiz!"
        ]
      }
    ]
  }
];
