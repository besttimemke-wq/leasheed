export type SceneEmotion = 'neutral' | 'pleased' | 'frustrated' | 'skeptical' | 'stressed' | 'relieved';

export interface Character {
  id: string;
  name: string;
  role: string;
  department: string;
  avatar: string; // emoji or curated SVG/image avatar
  accentColor: string;
}

export interface MetricDelta {
  empathy: number;
  compliance: number;
  efficiency: number;
}

export interface BranchOption {
  id: string;
  text: string;
  feedback: string;
  targetSceneId: string;
  scoreDeltas: MetricDelta;
  pedagogicalTip?: string;
}

export interface SceneNode {
  id: string;
  title: string;
  characterId: string;
  characterEmotion: SceneEmotion;
  dialogue: string;
  setting: string;
  options: BranchOption[];
  isStartNode?: boolean;
  isTerminalNode?: boolean;
  outcomeType?: 'success' | 'failure' | 'neutral';
  debriefNotes?: string;
  x?: number; // visual layout coordinates
  y?: number;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  category: 'Customer Success' | 'Compliance & Ethics' | 'Leadership' | 'Healthcare' | 'Cybersecurity';
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedMinutes: number;
  characters: Character[];
  startSceneId: string;
  scenes: Record<string, SceneNode>;
  metrics: {
    name: string;
    key: 'empathy' | 'compliance' | 'efficiency';
    color: string;
    startingValue: number;
  }[];
  createdAt: string;
  author: string;
}

// Course Builder Types
export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CourseLesson {
  id: string;
  title: string;
  summary: string;
  durationMinutes: number;
  content: string;
  hasVoiceover: boolean;
  quiz?: QuizQuestion[];
}

export interface CourseChapter {
  id: string;
  title: string;
  description: string;
  lessons: CourseLesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  targetAudience: string;
  estimatedHours: number;
  chapters: CourseChapter[];
  scenarioId?: string; // Linked interactive scenario
  enrolledCount: number;
  completionRate: number;
  status: 'Published' | 'Draft' | 'Archived';
}

// Learning Path Types
export interface LearningPath {
  id: string;
  title: string;
  targetRole: string;
  department: string;
  description: string;
  courses: string[]; // Course IDs
  estimatedWeeks: number;
  adaptiveRules: string[];
  activeLearners: number;
}

// Analytics & User Management Types
export interface UserCourseEnrollment {
  courseId: string;
  courseTitle: string;
  progressPercent: number; // 0 - 100
  status: 'Not Started' | 'In Progress' | 'Completed' | 'At Risk';
  completedLessons: string[];
  currentLessonId: string;
  currentLessonTitle: string;
  quizScore?: number;
  scenarioScore?: number;
  lastActiveTimestamp: string;
}

export interface LearnerReport {
  id: string;
  name: string;
  email: string;
  department: string;
  role?: 'Learner' | 'Instructor' | 'Admin' | 'Mentor';
  avatar?: string;
  assignedCourses: number;
  completedCourses: number;
  scenarioAverageScore: number;
  lastActive: string;
  status: 'On Track' | 'At Risk' | 'Completed' | 'Suspended';
  riskReason?: string;
  phone?: string;
  joinedDate?: string;
  onboardingCompleted?: boolean;
  enrollments?: UserCourseEnrollment[];
  certifications?: string[];
}

// Real-time Course Progress Tracking Types
export interface RealtimeProgressEvent {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  courseId: string;
  courseTitle: string;
  type: 'lesson_completed' | 'quiz_passed' | 'scenario_decision' | 'course_started' | 'certificate_earned' | 'onboarding_step';
  description: string;
  progressPercent?: number;
  scoreDelta?: number;
  timestamp: string;
}

// Google Stitch HTML to React Onboarding Types
export interface StitchTemplate {
  id: string;
  title: string;
  stepNumber: number;
  description: string;
  category: 'onboarding' | 'course-card' | 'progress-tracker' | 'user-profile' | 'interactive-quiz';
  htmlCode: string;
  componentName: string;
  stylingTheme: 'slate' | 'teal' | 'indigo' | 'amber';
}

