import { Scenario, Course, LearningPath, LearnerReport, RealtimeProgressEvent, StitchTemplate } from './types';

export const INITIAL_SCENARIOS: Scenario[] = [
  {
    id: 'sc-escalation-01',
    title: 'Enterprise Escalation: Retaining a Churning Account',
    description: 'A key enterprise client experiences a major data integration outage 2 weeks before contract renewal. Navigate high-stakes dialogue to retain the account while maintaining team integrity.',
    category: 'Customer Success',
    difficulty: 'Intermediate',
    estimatedMinutes: 8,
    author: 'AI Curriculum Engine',
    createdAt: '2026-09-08',
    metrics: [
      { name: 'Empathy & Trust', key: 'empathy', color: 'emerald', startingValue: 60 },
      { name: 'Company Policy Compliance', key: 'compliance', color: 'blue', startingValue: 75 },
      { name: 'Resolution Efficiency', key: 'efficiency', color: 'purple', startingValue: 50 },
    ],
    characters: [
      {
        id: 'char-elena',
        name: 'Elena Rostova',
        role: 'VP of Technology at NexusGlobal',
        department: 'Client Leadership',
        avatar: '👩‍💼',
        accentColor: '#f97316',
      },
      {
        id: 'char-marcus',
        name: 'Marcus Vance',
        role: 'Lead Cloud Operations Specialist',
        department: 'Internal Engineering',
        avatar: '👨‍💻',
        accentColor: '#0ea5e9',
      }
    ],
    startSceneId: 'scene-1',
    scenes: {
      'scene-1': {
        id: 'scene-1',
        title: 'Opening Escalation Call',
        characterId: 'char-elena',
        characterEmotion: 'stressed',
        dialogue: "We are losing $40,000 per hour right now! Your batch sync failed at 3 AM and my CEO is on my back. Why shouldn't I terminate our enterprise agreement this afternoon?",
        setting: 'Virtual High-Priority War Room',
        isStartNode: true,
        x: 100,
        y: 180,
        options: [
          {
            id: 'opt-1a',
            text: 'Acknowledge the immediate revenue impact sincerely and lay out the current root-cause status with zero excuses.',
            feedback: 'Elena feels heard. Acknowledging concrete financial pain builds immediate tactical rapport.',
            targetSceneId: 'scene-2a',
            scoreDeltas: { empathy: 20, compliance: 10, efficiency: 15 },
            pedagogicalTip: 'High-stakes empathy requires validating business impact before offering technical details.'
          },
          {
            id: 'opt-1b',
            text: 'Defend your platform: Point out that NexusGlobal changed their webhook firewall rules last night without notifying you.',
            feedback: 'Elena bristles. While factually true, leading with blame escalates confrontation and destroys trust.',
            targetSceneId: 'scene-2b',
            scoreDeltas: { empathy: -30, compliance: 5, efficiency: -20 },
            pedagogicalTip: 'Never blame the client during the heat of an active severity-1 outage.'
          },
          {
            id: 'opt-1c',
            text: 'Promise an immediate $50,000 service credit and guarantee 100% uptime forever.',
            feedback: 'You violated finance governance guidelines and made a legally unverifiable promise without management approval.',
            targetSceneId: 'scene-2c',
            scoreDeltas: { empathy: 5, compliance: -40, efficiency: -10 },
            pedagogicalTip: 'Unauthorized SLA credits breach financial compliance standards.'
          }
        ]
      },
      'scene-2a': {
        id: 'scene-2a',
        title: 'Formulating Action Plan',
        characterId: 'char-elena',
        characterEmotion: 'neutral',
        dialogue: "I appreciate the transparency. But transparency doesn't restore our pipelines. What is the concrete recovery timeline?",
        setting: 'Virtual High-Priority War Room',
        x: 420,
        y: 80,
        options: [
          {
            id: 'opt-2a-1',
            text: 'Introduce Marcus from Cloud Ops to walk through the 3-step hotfix rollout with 15-minute check-ins.',
            feedback: 'Excellent collaboration. Involving direct technical leads calms engineering anxieties.',
            targetSceneId: 'scene-success',
            scoreDeltas: { empathy: 15, compliance: 15, efficiency: 25 },
            pedagogicalTip: 'Time-boxed cadence updates significantly reduce customer anxiety.'
          },
          {
            id: 'opt-2a-2',
            text: 'Ask Elena to wait 4 hours while your engineers try various restarts.',
            feedback: 'Elena feels left in the dark. A 4-hour void is unacceptable in tier-1 outages.',
            targetSceneId: 'scene-fail',
            scoreDeltas: { empathy: -15, compliance: 0, efficiency: -25 },
            pedagogicalTip: 'Never leave long gaps between escalation updates.'
          }
        ]
      },
      'scene-2b': {
        id: 'scene-2b',
        title: 'Customer Pushback on Defensive Stance',
        characterId: 'char-elena',
        characterEmotion: 'frustrated',
        dialogue: "Excuse me? You're blaming our IT security team while our production is down? I am looping in legal right now.",
        setting: 'Virtual High-Priority War Room',
        x: 420,
        y: 280,
        options: [
          {
            id: 'opt-2b-1',
            text: 'De-escalate immediately: apologize for sounding defensive and re-orient completely around getting the pipeline restored.',
            feedback: 'Skillful recovery. You swallowed your pride and saved the dialogue from fatal breakdown.',
            targetSceneId: 'scene-2a',
            scoreDeltas: { empathy: 15, compliance: 10, efficiency: 10 },
            pedagogicalTip: 'Recognize escalating friction early and pivot back to shared outcomes.'
          },
          {
            id: 'opt-2b-2',
            text: 'Quote Section 8.4 of the Master Services Agreement regarding third-party firewall configurations.',
            feedback: 'Elena hangs up and emails your Chief Revenue Officer requesting immediate contract cancellation.',
            targetSceneId: 'scene-fail',
            scoreDeltas: { empathy: -40, compliance: 10, efficiency: -35 },
            pedagogicalTip: 'Litigating contractual clauses during a crisis guarantees customer churn.'
          }
        ]
      },
      'scene-2c': {
        id: 'scene-2c',
        title: 'Compliance Audit Warning',
        characterId: 'char-marcus',
        characterEmotion: 'skeptical',
        dialogue: "Hey, I just saw you promised a $50k credit in the chat. Legal and VP of Sales just flagged your account. We don't have budget clearance for that.",
        setting: 'Internal Slack Huddle',
        x: 420,
        y: 450,
        options: [
          {
            id: 'opt-2c-1',
            text: 'Coordinate with VP of Sales on an official goodwill SLA addendum while engineering executes the fix.',
            feedback: 'You contained internal damage and brought leadership into alignment.',
            targetSceneId: 'scene-2a',
            scoreDeltas: { empathy: 5, compliance: 20, efficiency: 5 },
            pedagogicalTip: 'Always align client concessions with internal governance.'
          },
          {
            id: 'opt-2c-2',
            text: 'Tell Marcus to ignore sales and keep pushing code.',
            feedback: 'Creates toxic internal friction and severe compliance penalties.',
            targetSceneId: 'scene-fail',
            scoreDeltas: { empathy: -20, compliance: -30, efficiency: -20 },
            pedagogicalTip: 'Internal misalignment directly damages external execution.'
          }
        ]
      },
      'scene-success': {
        id: 'scene-success',
        title: 'Resolution & Account Renewal Secured',
        characterId: 'char-elena',
        characterEmotion: 'pleased',
        dialogue: "Pipelines are back online and data integrity is verified. The way your team navigated this crisis proved why we chose you. Let's proceed with our 2-year expansion contract.",
        setting: 'Executive Debrief Call',
        isTerminalNode: true,
        outcomeType: 'success',
        x: 760,
        y: 120,
        debriefNotes: 'Outstanding scenario execution! By prioritizing empathy without compromising compliance, and providing rigorous transparency, you turned a crisis into an account expansion opportunity.',
        options: []
      },
      'scene-fail': {
        id: 'scene-fail',
        title: 'Account Churn & Escalation Review',
        characterId: 'char-elena',
        characterEmotion: 'frustrated',
        dialogue: "NexusGlobal has officially issued a 30-day notice of default. We will be migrating our workloads to your competitor at the end of the month.",
        setting: 'Executive Notice Notice',
        isTerminalNode: true,
        outcomeType: 'failure',
        x: 760,
        y: 350,
        debriefNotes: 'Account lost. The scenario broke down due to defensive communication and lack of disciplined incident updates. Review empathy-first de-escalation protocols.',
        options: []
      }
    }
  },
  {
    id: 'sc-phishing-02',
    title: 'Cybersecurity: Defending Against Executive Spear-Phishing',
    description: 'You receive an urgent Sunday evening wire request purportedly from the CFO requesting a confidential $180,000 vendor payment before markets open.',
    category: 'Cybersecurity',
    difficulty: 'Beginner',
    estimatedMinutes: 5,
    author: 'InfoSec Training Labs',
    createdAt: '2026-09-07',
    metrics: [
      { name: 'Security Vigilance', key: 'compliance', color: 'blue', startingValue: 50 },
      { name: 'Protocol Adherence', key: 'efficiency', color: 'purple', startingValue: 60 },
      { name: 'Professional Composure', key: 'empathy', color: 'emerald', startingValue: 70 },
    ],
    characters: [
      {
        id: 'char-cfo',
        name: 'David Sterling',
        role: 'Chief Financial Officer (Purported)',
        department: 'Executive Finance',
        avatar: '👔',
        accentColor: '#ef4444',
      },
      {
        id: 'char-soc',
        name: 'Aisha Kahn',
        role: 'SOC Incident Commander',
        department: 'Cybersecurity Ops',
        avatar: '🛡️',
        accentColor: '#10b981',
      }
    ],
    startSceneId: 'scene-phish-1',
    scenes: {
      'scene-phish-1': {
        id: 'scene-phish-1',
        title: 'Urgent Weekend Email Alert',
        characterId: 'char-cfo',
        characterEmotion: 'stressed',
        dialogue: "I am boarding an overseas flight for an emergency acquisition. Process the attached wire for $180,000 immediately. Do not call my cell as I have no roaming service.",
        setting: 'Corporate Inbox - Urgent Mark',
        isStartNode: true,
        x: 100,
        y: 180,
        options: [
          {
            id: 'phish-opt-1',
            text: 'Inspect email headers, verify sender domain (@company-holdings-ltd.com vs @company.com), and initiate out-of-band verification via company Slack or corporate directory.',
            feedback: 'Superb vigilance! You caught the subtly spoofed domain and refused unverified wire requests.',
            targetSceneId: 'scene-phish-report',
            scoreDeltas: { compliance: 35, efficiency: 25, empathy: 10 },
            pedagogicalTip: 'Always verify financial transactions through secondary, independent channels.'
          },
          {
            id: 'phish-opt-2',
            text: 'Reply to the email asking for confirmation of invoice numbers.',
            feedback: 'Replying to an attacker within the spoofed thread simply gives them another chance to manipulate you.',
            targetSceneId: 'scene-phish-compromise',
            scoreDeltas: { compliance: -20, efficiency: -15, empathy: 0 },
            pedagogicalTip: 'Never negotiate or ask for confirmation within the suspicious email thread.'
          }
        ]
      },
      'scene-phish-report': {
        id: 'scene-phish-report',
        title: 'Alerting the Security Operations Center',
        characterId: 'char-soc',
        characterEmotion: 'pleased',
        dialogue: "Great catch! That was a live Business Email Compromise (BEC) attack targeting 12 finance employees. Thanks to your rapid alert, we blocked the attacker's IP network-wide.",
        setting: 'SOC Command Center',
        isTerminalNode: true,
        outcomeType: 'success',
        x: 480,
        y: 120,
        debriefNotes: 'Perfect score! You prevented a critical financial loss and helped InfoSec neutralize an active threat campaign.',
        options: []
      },
      'scene-phish-compromise': {
        id: 'scene-phish-compromise',
        title: 'Security Breach Simulation Warning',
        characterId: 'char-soc',
        characterEmotion: 'frustrated',
        dialogue: "You engaged with a phishing actor without alerting security. In a real incident, wire funds would have been irrevocably routed overseas.",
        setting: 'Security Awareness Mandatory Review',
        isTerminalNode: true,
        outcomeType: 'failure',
        x: 480,
        y: 300,
        debriefNotes: 'Failure to follow Dual-Sign-Off Policy. Financial approvals must always use dedicated ERP verification protocols.',
        options: []
      }
    }
  }
];

export const INITIAL_COURSES: Course[] = [
  {
    id: 'course-101',
    title: 'Adaptive Customer Escalations & De-escalation Mastery',
    description: 'Transform high-stakes client friction into long-term trust using emotional intelligence frameworks and real-time interactive branching scenarios.',
    category: 'Customer Success & Support',
    targetAudience: 'Customer Success Managers, Enterprise Account Directors',
    estimatedHours: 4.5,
    enrolledCount: 142,
    completionRate: 88,
    status: 'Published',
    scenarioId: 'sc-escalation-01',
    chapters: [
      {
        id: 'chap-1',
        title: 'Psychology of Escalation: Stress Response & Active Listening',
        description: 'Understand the neurochemistry of agitated enterprise clients and master tactical empathy.',
        lessons: [
          {
            id: 'les-1',
            title: 'De-escalating the Amygdala Hijack in B2B',
            summary: 'How to disarm anger within the first 90 seconds of an outage call.',
            durationMinutes: 15,
            hasVoiceover: true,
            content: 'When an enterprise system fails, executives experience high threat responses. Leading with procedural defenses triggers further escalation. By systematically validating business impact, you activate collaborative problem-solving.',
            quiz: [
              {
                id: 'q1',
                question: 'What is the most effective opening response during a Severity 1 outage?',
                options: [
                  'Quote the contractual SLA uptime percentage',
                  'Acknowledge financial/operational impact before technical explanation',
                  'Place the client on a 10-minute hold while checking server monitors'
                ],
                correctIndex: 1,
                explanation: 'Validating impact first calms psychological tension and establishes aligned incentives.'
              }
            ]
          },
          {
            id: 'les-2',
            title: 'Interactive Simulation: Elena Rostova War Room',
            summary: 'Apply lessons in an interactive branched scenario simulation.',
            durationMinutes: 20,
            hasVoiceover: true,
            content: 'Launch into the scenario engine to test your choices against live character reactions.'
          }
        ]
      }
    ]
  },
  {
    id: 'course-102',
    title: 'Enterprise Cyber Defense: Social Engineering & BEC Resistance',
    description: 'Protect company assets against sophisticated phishing, deepfake voice scams, and CEO wire fraud.',
    category: 'Information Security & Compliance',
    targetAudience: 'Finance, HR, Operations, All Employees',
    estimatedHours: 3.0,
    enrolledCount: 380,
    completionRate: 94,
    status: 'Published',
    scenarioId: 'sc-phishing-02',
    chapters: [
      {
        id: 'chap-sec-1',
        title: 'Anatomy of Modern Spear-Phishing',
        description: 'Analyzing recent attack vectors and fake domain spoofs.',
        lessons: [
          {
            id: 'les-sec-1',
            title: 'Spotting Lookalike Domains & Header Forgery',
            summary: 'Techniques for rapid email authentication verification.',
            durationMinutes: 12,
            hasVoiceover: true,
            content: 'Attackers frequently register lookalike domains with subtle typos or extra hyphenated company prefixes. Learn to read SPF, DKIM, and DMARC status indicators.'
          }
        ]
      }
    ]
  }
];

export const INITIAL_LEARNING_PATHS: LearningPath[] = [
  {
    id: 'path-cs-lead',
    title: 'Enterprise Client Relationship Architect',
    targetRole: 'Senior CSM & Director of CS',
    department: 'Customer Success',
    description: 'End-to-end adaptive pathway preparing leaders for $5M+ enterprise accounts with scenario mastery.',
    courses: ['course-101'],
    estimatedWeeks: 4,
    activeLearners: 28,
    adaptiveRules: [
      'Low empathy scenario score (<60) automatically inserts 2 restorative simulation drill modules.',
      'Passing compliance check at >90% unlocks accelerated contract negotiation elective.'
    ]
  },
  {
    id: 'path-fin-sec',
    title: 'Critical Infrastructure & Financial Operations Safeguards',
    targetRole: 'Finance Analyst & Controller',
    department: 'Finance & Legal',
    description: 'Mandatory certification track for high-risk transactional authorization.',
    courses: ['course-102'],
    estimatedWeeks: 2,
    activeLearners: 64,
    adaptiveRules: [
      'Phishing test failure triggers immediate mandatory scenario simulation retake within 24 hours.'
    ]
  }
];

export const INITIAL_LEARNER_REPORTS: LearnerReport[] = [
  {
    id: 'lr-1',
    name: 'Sarah Jenkins',
    email: 'sarah.j@company.io',
    department: 'Customer Success',
    role: 'Learner',
    avatar: '👩‍💼',
    assignedCourses: 3,
    completedCourses: 3,
    scenarioAverageScore: 94,
    lastActive: 'Just now',
    status: 'Completed',
    phone: '+1 (555) 234-5678',
    joinedDate: '2026-08-12',
    onboardingCompleted: true,
    certifications: ['Enterprise De-escalation Pro', 'Client Retaining Specialist'],
    enrollments: [
      {
        courseId: 'course-101',
        courseTitle: 'Frontline De-escalation & Conflict Resolution Mastery',
        progressPercent: 100,
        status: 'Completed',
        completedLessons: ['l-1', 'l-2', 'l-3'],
        currentLessonId: 'l-3',
        currentLessonTitle: 'Interactive Escalation Simulator',
        quizScore: 95,
        scenarioScore: 94,
        lastActiveTimestamp: '10 minutes ago'
      },
      {
        courseId: 'course-102',
        courseTitle: 'Modern Workplace Ethics & Incident Disclosure',
        progressPercent: 100,
        status: 'Completed',
        completedLessons: ['l-4', 'l-5'],
        currentLessonId: 'l-5',
        currentLessonTitle: 'Whistleblower Safeguards',
        quizScore: 100,
        scenarioScore: 92,
        lastActiveTimestamp: '2 hours ago'
      }
    ]
  },
  {
    id: 'lr-2',
    name: 'Michael Chang',
    email: 'm.chang@company.io',
    department: 'Engineering Support',
    role: 'Learner',
    avatar: '👨‍💻',
    assignedCourses: 3,
    completedCourses: 1,
    scenarioAverageScore: 58,
    lastActive: '14 minutes ago',
    status: 'At Risk',
    riskReason: 'High friction detected on tier-1 outage dialogue nodes; retried scene 3 times.',
    phone: '+1 (555) 345-6789',
    joinedDate: '2026-08-20',
    onboardingCompleted: true,
    certifications: ['Basic Cloud Resilience'],
    enrollments: [
      {
        courseId: 'course-101',
        courseTitle: 'Frontline De-escalation & Conflict Resolution Mastery',
        progressPercent: 45,
        status: 'At Risk',
        completedLessons: ['l-1'],
        currentLessonId: 'l-2',
        currentLessonTitle: 'Active Listening Under Fire',
        quizScore: 60,
        scenarioScore: 58,
        lastActiveTimestamp: '14 minutes ago'
      }
    ]
  },
  {
    id: 'lr-3',
    name: 'Amara Okafor',
    email: 'amara.o@company.io',
    department: 'Finance',
    role: 'Instructor',
    avatar: '👩‍🏫',
    assignedCourses: 2,
    completedCourses: 2,
    scenarioAverageScore: 98,
    lastActive: 'Today, 11:30 AM',
    status: 'Completed',
    phone: '+1 (555) 456-7890',
    joinedDate: '2026-07-05',
    onboardingCompleted: true,
    certifications: ['Financial Compliance Lead', 'Governance Auditor'],
    enrollments: [
      {
        courseId: 'course-102',
        courseTitle: 'Modern Workplace Ethics & Incident Disclosure',
        progressPercent: 100,
        status: 'Completed',
        completedLessons: ['l-4', 'l-5'],
        currentLessonId: 'l-5',
        currentLessonTitle: 'Whistleblower Safeguards',
        quizScore: 100,
        scenarioScore: 98,
        lastActiveTimestamp: 'Today, 11:30 AM'
      }
    ]
  },
  {
    id: 'lr-4',
    name: 'David Miller',
    email: 'd.miller@company.io',
    department: 'Sales & Growth',
    role: 'Learner',
    avatar: '👨‍💼',
    assignedCourses: 4,
    completedCourses: 2,
    scenarioAverageScore: 78,
    lastActive: '45 minutes ago',
    status: 'On Track',
    phone: '+1 (555) 567-8901',
    joinedDate: '2026-08-01',
    onboardingCompleted: true,
    certifications: ['Solution Selling Associate'],
    enrollments: [
      {
        courseId: 'course-101',
        courseTitle: 'Frontline De-escalation & Conflict Resolution Mastery',
        progressPercent: 70,
        status: 'In Progress',
        completedLessons: ['l-1', 'l-2'],
        currentLessonId: 'l-3',
        currentLessonTitle: 'Interactive Escalation Simulator',
        quizScore: 85,
        scenarioScore: 78,
        lastActiveTimestamp: '45 minutes ago'
      }
    ]
  },
  {
    id: 'lr-5',
    name: 'Lisa Ray',
    email: 'l.ray@company.io',
    department: 'Operations',
    role: 'Learner',
    avatar: '👩‍🔧',
    assignedCourses: 2,
    completedCourses: 0,
    scenarioAverageScore: 40,
    lastActive: 'Yesterday',
    status: 'At Risk',
    riskReason: 'Overdue mandatory compliance deadline by 5 business days.',
    phone: '+1 (555) 678-9012',
    joinedDate: '2026-08-25',
    onboardingCompleted: false,
    certifications: [],
    enrollments: [
      {
        courseId: 'course-102',
        courseTitle: 'Modern Workplace Ethics & Incident Disclosure',
        progressPercent: 15,
        status: 'At Risk',
        completedLessons: [],
        currentLessonId: 'l-4',
        currentLessonTitle: 'Identifying Conflicts of Interest',
        quizScore: 40,
        scenarioScore: 40,
        lastActiveTimestamp: 'Yesterday'
      }
    ]
  },
  {
    id: 'lr-6',
    name: 'Devon Vance',
    email: 'devon.v@company.io',
    department: 'Customer Success',
    role: 'Mentor',
    avatar: '👨‍🏫',
    assignedCourses: 3,
    completedCourses: 2,
    scenarioAverageScore: 91,
    lastActive: '5 minutes ago',
    status: 'On Track',
    phone: '+1 (555) 789-0123',
    joinedDate: '2026-06-18',
    onboardingCompleted: true,
    certifications: ['Master Peer Mentor', 'Frontline Retention Hero'],
    enrollments: [
      {
        courseId: 'course-101',
        courseTitle: 'Frontline De-escalation & Conflict Resolution Mastery',
        progressPercent: 88,
        status: 'In Progress',
        completedLessons: ['l-1', 'l-2'],
        currentLessonId: 'l-3',
        currentLessonTitle: 'Interactive Escalation Simulator',
        quizScore: 90,
        scenarioScore: 91,
        lastActiveTimestamp: '5 minutes ago'
      }
    ]
  }
];

export const INITIAL_REALTIME_EVENTS: RealtimeProgressEvent[] = [
  {
    id: 'evt-1',
    userId: 'lr-1',
    userName: 'Sarah Jenkins',
    userAvatar: '👩‍💼',
    courseId: 'course-101',
    courseTitle: 'Frontline De-escalation & Conflict Resolution Mastery',
    type: 'certificate_earned',
    description: 'Completed final scenario node with 94/100 Empathy and earned Certificate.',
    progressPercent: 100,
    scoreDelta: 15,
    timestamp: '2m ago'
  },
  {
    id: 'evt-2',
    userId: 'lr-6',
    userName: 'Devon Vance',
    userAvatar: '👨‍🏫',
    courseId: 'course-101',
    courseTitle: 'Frontline De-escalation & Conflict Resolution Mastery',
    type: 'scenario_decision',
    description: 'Selected "Acknowledge financial pain" (+20 Empathy, +15 Efficiency)',
    progressPercent: 88,
    scoreDelta: 20,
    timestamp: '5m ago'
  },
  {
    id: 'evt-3',
    userId: 'lr-2',
    userName: 'Michael Chang',
    userAvatar: '👨‍💻',
    courseId: 'course-101',
    courseTitle: 'Frontline De-escalation & Conflict Resolution Mastery',
    type: 'lesson_completed',
    description: 'Finished Lesson 1 "Psychological Safety in War Rooms"',
    progressPercent: 45,
    scoreDelta: 10,
    timestamp: '14m ago'
  },
  {
    id: 'evt-4',
    userId: 'lr-4',
    userName: 'David Miller',
    userAvatar: '👨‍💼',
    courseId: 'course-101',
    courseTitle: 'Frontline De-escalation & Conflict Resolution Mastery',
    type: 'quiz_passed',
    description: 'Passed Lesson 2 Knowledge Check with 85%',
    progressPercent: 70,
    scoreDelta: 12,
    timestamp: '45m ago'
  }
];

export const INITIAL_STITCH_TEMPLATES: StitchTemplate[] = [
  {
    id: 'stitch-step-1',
    title: 'Welcome & Mission Identity',
    stepNumber: 1,
    description: 'Google Stitch generated hero introduction card establishing learner purpose and platform mission.',
    category: 'onboarding',
    stylingTheme: 'teal',
    componentName: 'StitchWelcomeHero',
    htmlCode: `<div class="rounded-2xl border border-teal-200/80 bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 p-8 text-white shadow-xl">
  <div class="flex items-center gap-3 mb-4">
    <span class="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 px-3 py-1 text-xs font-semibold text-teal-300 border border-teal-400/30">
      <span class="h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
      Step 1 of 4 • Google Stitch UI
    </span>
    <span class="text-xs text-slate-400 font-mono">stitch-comp-hero-v1</span>
  </div>
  <h1 class="text-2xl md:text-3xl font-bold tracking-tight text-white mb-2">
    Welcome to <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">Leashed.io LMS</span>
  </h1>
  <p class="text-slate-300 text-sm md:text-base max-w-xl mb-6 leading-relaxed">
    Real skills. Economic stability. Second chances. Our adaptive platform tracks your real-time course progress and sharpens your decision-making through branching simulations.
  </p>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-slate-800">
    <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
      <div class="text-teal-400 font-bold text-lg">72-Hour</div>
      <div class="text-xs text-slate-400">Stabilization Blueprint</div>
    </div>
    <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
      <div class="text-emerald-400 font-bold text-lg">Live AI</div>
      <div class="text-xs text-slate-400">Branching Simulations</div>
    </div>
    <div class="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
      <div class="text-cyan-400 font-bold text-lg">Real-Time</div>
      <div class="text-xs text-slate-400">Progress Telemetry</div>
    </div>
  </div>
</div>`
  },
  {
    id: 'stitch-step-2',
    title: 'Professional Track & Skill Path',
    stepNumber: 2,
    description: 'Google Stitch track selection cards allowing users to choose their career progression pathway.',
    category: 'onboarding',
    stylingTheme: 'slate',
    componentName: 'StitchTrackSelector',
    htmlCode: `<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <div class="flex items-center justify-between mb-4">
    <div>
      <span class="text-xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200 uppercase tracking-wider">
        Step 2 of 4 • Skill Track Selection
      </span>
      <h2 class="text-xl font-bold text-slate-900 mt-2">Choose Your Primary Learning Pathway</h2>
      <p class="text-xs text-slate-500">Pick the specialization track aligned with your role.</p>
    </div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
    <div class="p-4 rounded-xl border-2 border-teal-500 bg-teal-50/40 relative cursor-pointer">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-slate-900 text-sm">Frontline De-escalation & Client Success</span>
        <span class="text-xs bg-teal-600 text-white px-2 py-0.5 rounded font-medium">Recommended</span>
      </div>
      <p class="text-xs text-slate-600 mb-3">Master high-stakes client communications, outage escalation, and retention dialogue with AI scenario simulations.</p>
      <div class="flex items-center gap-3 text-[11px] text-slate-500">
        <span>⏱ 3 Weeks</span>
        <span>•</span>
        <span>🎯 3 Branching Scenarios</span>
        <span>•</span>
        <span class="text-teal-700 font-semibold">Certification Included</span>
      </div>
    </div>

    <div class="p-4 rounded-xl border border-slate-200 hover:border-slate-400 bg-white cursor-pointer">
      <div class="flex items-center justify-between mb-2">
        <span class="font-bold text-slate-900 text-sm">Workplace Ethics, Compliance & Governance</span>
        <span class="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">Mandatory</span>
      </div>
      <p class="text-xs text-slate-600 mb-3">Understand regulatory disclosure, whistleblower safeguards, anti-harassment policy, and conflict resolution.</p>
      <div class="flex items-center gap-3 text-[11px] text-slate-500">
        <span>⏱ 2 Weeks</span>
        <span>•</span>
        <span>🛡 2 Interactive Audits</span>
        <span>•</span>
        <span class="text-slate-700 font-semibold">Corporate Badge</span>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: 'stitch-step-3',
    title: 'Google Workspace & Real-Time Sync',
    stepNumber: 3,
    description: 'Google Stitch integration consent card for Calendar, Classroom, and Chat alerts.',
    category: 'onboarding',
    stylingTheme: 'indigo',
    componentName: 'StitchWorkspaceConsent',
    htmlCode: `<div class="rounded-2xl border border-indigo-200 bg-gradient-to-b from-indigo-50/50 to-white p-6 shadow-sm">
  <div class="flex items-center gap-2 mb-2">
    <span class="text-xs font-bold text-indigo-700 bg-indigo-100 px-2.5 py-1 rounded-md uppercase tracking-wider">
      Step 3 of 4 • Workspace Synchronization
    </span>
  </div>
  <h2 class="text-xl font-bold text-slate-900">Synchronize With Google Workspace</h2>
  <p class="text-xs text-slate-600 mb-4 max-w-lg">
    Connect your team calendar and classroom stream to sync deadlines, receive calendar reminders, and auto-export simulation certificates.
  </p>

  <div class="space-y-2.5 mb-5">
    <div class="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">📅</div>
        <div>
          <div class="text-xs font-bold text-slate-800">Google Calendar Reminders</div>
          <div class="text-[11px] text-slate-500">Auto-schedules 15-minute weekly simulation drills</div>
        </div>
      </div>
      <span class="text-xs font-semibold text-emerald-600">Enabled</span>
    </div>

    <div class="flex items-center justify-between p-3 rounded-lg bg-white border border-slate-200">
      <div class="flex items-center gap-3">
        <div class="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm">🎓</div>
        <div>
          <div class="text-xs font-bold text-slate-800">Google Classroom Sync</div>
          <div class="text-[11px] text-slate-500">Posts course progress grades directly into cohort stream</div>
        </div>
      </div>
      <span class="text-xs font-semibold text-emerald-600">Enabled</span>
    </div>
  </div>
</div>`
  },
  {
    id: 'stitch-step-4',
    title: 'Readiness Verification & First Simulation',
    stepNumber: 4,
    description: 'Google Stitch completion badge and direct action button to begin the live LMS scenario.',
    category: 'onboarding',
    stylingTheme: 'amber',
    componentName: 'StitchReadinessComplete',
    htmlCode: `<div class="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50/60 via-white to-teal-50/40 p-6 text-center shadow-sm">
  <div class="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-tr from-amber-500 to-teal-500 text-white flex items-center justify-center text-2xl shadow-md mb-3">
    🎉
  </div>
  <span class="text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
    Step 4 of 4 • Onboarding Complete
  </span>
  <h2 class="text-2xl font-black text-slate-900 mt-3 mb-1">You Are Ready For Live Training!</h2>
  <p class="text-xs text-slate-600 max-w-md mx-auto mb-5">
    Your learner profile is configured. Real-time telemetry is activated. Your first interactive branching simulation awaits your first choice.
  </p>
  <div class="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-6 py-2.5 rounded-xl shadow cursor-pointer transition">
    Launch Interactive Simulator 🚀
  </div>
</div>`
  }
];

