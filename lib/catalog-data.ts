export interface CatalogPathway {
  code: string;
  name: string;
  count: number;
  hours: number;
  badge: string;
  icon: string;
}

export interface CatalogCourse {
  code: string;
  title: string;
  pathway: string;
  pathwayName: string;
  level: number;
  levelLabel: string;
  capstone: string;
  modules: string[];
  hours: number;
  description: string;
}

export const CATALOG_PATHWAYS: CatalogPathway[] = [
  { code: "LIF", name: "Life Skills & Personal Readiness", count: 20, hours: 120, badge: "bg-teal-50 text-teal-700 border-teal-200", icon: "heart" },
  { code: "GRM", name: "Pet Grooming & Animal Care", count: 20, hours: 120, badge: "bg-purple-50 text-purple-700 border-purple-200", icon: "paw" },
  { code: "BUS", name: "Business & Leadership", count: 20, hours: 120, badge: "bg-amber-50 text-amber-800 border-amber-200", icon: "briefcase" },
  { code: "PAR", name: "Partner Programs & Workforce Transition", count: 20, hours: 120, badge: "bg-cyan-50 text-cyan-700 border-cyan-200", icon: "handshake" },
  { code: "PER", name: "Personal Mastery & Lifelong Growth", count: 20, hours: 120, badge: "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200", icon: "sparkles" },
  { code: "MKT", name: "Marketing, Branding & SEO Mastery", count: 20, hours: 120, badge: "bg-rose-50 text-rose-700 border-rose-200", icon: "megaphone" },
  { code: "TEC", name: "AI & Technology Systems", count: 20, hours: 120, badge: "bg-sky-50 text-sky-700 border-sky-200", icon: "bolt" },
  { code: "FIN", name: "Financial Mastery, Bookkeeping & Tax Strategy", count: 20, hours: 120, badge: "bg-lime-50 text-lime-800 border-lime-200", icon: "coins" },
  { code: "LDR", name: "Business Leadership, Operations & Expansion", count: 20, hours: 120, badge: "bg-indigo-50 text-indigo-700 border-indigo-200", icon: "globe" },
  { code: "LEG", name: "Legal, Risk, Compliance & Ethical Governance", count: 20, hours: 120, badge: "bg-slate-100 text-slate-700 border-slate-300", icon: "scale" }
];

export const ALL_200_COURSES: CatalogCourse[] = [
  // LIF: Life Skills & Personal Readiness (20 Courses)
  {
    code: "LSH-101",
    title: "Personal Readiness",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 100,
    levelLabel: "Foundation",
    capstone: "Personal readiness profile",
    modules: [
      "Program orientation and learner success plan",
      "Strengths, interests, and personal goals",
      "Workplace expectations and reliability",
      "Professional appearance and personal presentation",
      "Communication basics and help-seeking",
      "Building routines and daily structure",
      "Identifying barriers before they become emergencies",
      "Personal documents and readiness checklist",
      "Creating a support network",
      "Personal readiness profile submission"
    ],
    hours: 6,
    description: "Program orientation and learner success plan; Strengths, interests, and personal goals; Workplace expectations and reliability — building to a final personal readiness profile."
  },
  {
    code: "LSH-102",
    title: "Digital Skills for Daily Life",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 100,
    levelLabel: "Foundation",
    capstone: "Digital access and communication setup",
    modules: [
      "Devices, internet, and safe digital access",
      "Email setup and professional email habits",
      "Calendars, reminders, and appointment tracking",
      "Text messaging and professional communication",
      "Online forms and document uploads",
      "Cloud storage and file organization",
      "Video meetings and virtual etiquette",
      "Passwords, scams, and account security",
      "Digital job-search and service-navigation tools",
      "Digital access and communication setup"
    ],
    hours: 6,
    description: "Devices, internet, and safe digital access; Email setup and professional email habits; Calendars, reminders, and appointment tracking — building to a final digital access and communication setup."
  },
  {
    code: "LSH-103",
    title: "Financial Basics for Stability",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 100,
    levelLabel: "Foundation",
    capstone: "Personal stability budget",
    modules: [
      "Income, expenses, and financial choices",
      "Tracking spending",
      "Creating a personal budget",
      "Banking and payment tools",
      "Credit, debt, and financial caution",
      "Savings and emergency planning",
      "Reading pay stubs and bills",
      "Financial goals and spending boundaries",
      "Preparing for unexpected expenses",
      "Personal stability budget submission"
    ],
    hours: 6,
    description: "Income, expenses, and financial choices; Tracking spending; Creating a personal budget — building to a final personal stability budget."
  },
  {
    code: "LSH-104",
    title: "Customer Service & Professional Communication",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 100,
    levelLabel: "Foundation",
    capstone: "Customer-service practice portfolio",
    modules: [
      "What excellent service looks like",
      "Respectful greetings and first impressions",
      "Listening for customer needs",
      "Clear verbal and written communication",
      "Managing expectations and service promises",
      "Handling frustration and complaints",
      "Professional boundaries with customers",
      "Phone, message, and appointment etiquette",
      "Service recovery and follow-up",
      "Customer-service practice portfolio"
    ],
    hours: 6,
    description: "What excellent service looks like; Respectful greetings and first impressions; Listening for customer needs — building to a final customer-service practice portfolio."
  },
  {
    code: "LSH-105",
    title: "Animal Welfare, Safety & Sanitation Orientation",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 100,
    levelLabel: "Foundation",
    capstone: "Safety and sanitation readiness checklist",
    modules: [
      "Animal welfare and humane-care principles",
      "Basic animal body language",
      "Personal protective equipment and hygiene",
      "Cleaning and sanitation basics",
      "Safe workspaces and hazard identification",
      "Incident reporting and emergency communication",
      "When to stop and ask for help",
      "Customer and animal safety expectations",
      "Safety culture and professional responsibility",
      "Safety and sanitation readiness checklist"
    ],
    hours: 6,
    description: "Animal welfare and humane-care principles; Basic animal body language; Personal protective equipment and hygiene — building to a final safety and sanitation readiness checklist."
  },
  {
    code: "LSH-201",
    title: "Health, Wellness & Sustainable Work Habits",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 200,
    levelLabel: "Core Skill",
    capstone: "Personal wellness and work-routine plan",
    modules: [
      "Wellness as a work-readiness skill",
      "Sleep, routines, and reliable attendance",
      "Nutrition and energy planning",
      "Stress recognition and healthy coping",
      "Movement, posture, and injury prevention",
      "Managing appointments and health needs",
      "Preventing burnout",
      "Personal boundaries and rest",
      "Asking for support early",
      "Personal wellness and work-routine plan"
    ],
    hours: 6,
    description: "Wellness as a work-readiness skill; Sleep, routines, and reliable attendance; Nutrition and energy planning — building to a final personal wellness and work-routine plan."
  },
  {
    code: "LSH-202",
    title: "Time, Energy & Attendance Management",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 200,
    levelLabel: "Core Skill",
    capstone: "Weekly attendance and energy plan",
    modules: [
      "Understanding time commitments",
      "Building a weekly schedule",
      "Transportation and travel-time planning",
      "Preparing the night before",
      "Managing childcare and family obligations",
      "Handling schedule changes",
      "Energy management and priority setting",
      "Attendance communication and calling ahead",
      "Tracking reliability and improving habits",
      "Weekly attendance and energy plan"
    ],
    hours: 6,
    description: "Understanding time commitments; Building a weekly schedule; Transportation and travel-time planning — building to a final weekly attendance and energy plan."
  },
  {
    code: "LSH-203",
    title: "Using AI Tools for Daily Success",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 200,
    levelLabel: "Core Skill",
    capstone: "AI-supported personal workflow portfolio",
    modules: [
      "What AI can and cannot do",
      "Writing helpful prompts",
      "Using AI for scheduling and reminders",
      "Using AI for professional messages",
      "Using AI for budgets and planning",
      "Using AI for learning and study support",
      "Verifying AI information",
      "Protecting privacy while using AI",
      "Building a personal AI workflow",
      "AI-supported personal workflow portfolio"
    ],
    hours: 6,
    description: "What AI can and cannot do; Writing helpful prompts; Using AI for scheduling and reminders — building to a final ai-supported personal workflow portfolio."
  },
  {
    code: "LSH-204",
    title: "Housing, Transportation & Stability Navigation",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 200,
    levelLabel: "Core Skill",
    capstone: "Stability resource and logistics plan",
    modules: [
      "Stability planning and personal priorities",
      "Understanding housing options and referrals",
      "Transportation planning and backup routes",
      "Identification and document recovery",
      "Childcare and dependent-care planning",
      "Food, benefits, and community resources",
      "Communication with case managers and agencies",
      "Planning for disruptions and missed appointments",
      "Building a stability support network",
      "Stability resource and logistics plan"
    ],
    hours: 6,
    description: "Stability planning and personal priorities; Understanding housing options and referrals; Transportation planning and backup routes — building to a final stability resource and logistics plan."
  },
  {
    code: "LSH-205",
    title: "Personal Readiness Capstone",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 200,
    levelLabel: "Core Skill",
    capstone: "90-day personal success plan",
    modules: [
      "Reviewing readiness evidence",
      "Updating personal goals",
      "Reviewing attendance and reliability data",
      "Reviewing financial stability plan",
      "Reviewing wellness and support needs",
      "Reviewing digital and AI workflow",
      "Preparing professional introduction",
      "Building a 90-day action calendar",
      "Capstone portfolio quality review",
      "90-day personal success plan presentation"
    ],
    hours: 6,
    description: "Reviewing readiness evidence; Updating personal goals; Reviewing attendance and reliability data — building to a final 90-day personal success plan."
  },
  {
    code: "LSH-301",
    title: "Advanced Communication & Self-Advocacy",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 300,
    levelLabel: "Advanced Skill",
    capstone: "Self-advocacy toolkit",
    modules: [
      "Self-advocacy foundations",
      "Communicating needs clearly",
      "Requesting accommodations effectively",
      "Navigating complex administrative systems",
      "Professional negotiation techniques",
      "Documentation and record-keeping habits",
      "Understanding formal escalation paths",
      "Speaking with confidence in workplace meetings",
      "Live roleplay advocacy scenarios",
      "Self-advocacy toolkit completion"
    ],
    hours: 6,
    description: "Self-advocacy foundations; Communicating needs; Requesting accommodations — building to a final self-advocacy toolkit."
  },
  {
    code: "LSH-302",
    title: "Conflict Resolution & Problem Solving",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 300,
    levelLabel: "Advanced Skill",
    capstone: "Conflict-resolution case file",
    modules: [
      "Identifying conflict styles",
      "Recognizing stress triggers and emotional escalation",
      "Active listening under high-stress conditions",
      "Verbal de-escalation models",
      "Objective problem framing",
      "Developing win-win collaborative solutions",
      "Apology and professional relationship repair",
      "Incident documentation protocols",
      "Workplace simulated dispute scenarios",
      "Conflict-resolution case file submission"
    ],
    hours: 6,
    description: "Conflict styles; Triggers and escalation; Listening under stress — building to a final conflict-resolution case file."
  },
  {
    code: "LSH-303",
    title: "Workplace Rights, Responsibilities & Boundaries",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 300,
    levelLabel: "Advanced Skill",
    capstone: "Workplace rights and boundaries plan",
    modules: [
      "Employment rights overview and labor laws",
      "Understanding employer expectations",
      "Anti-harassment and non-discrimination safeguards",
      "Wage calculation and shift scheduling rights",
      "Data privacy and employee records protection",
      "Maintaining healthy professional boundaries",
      "Reporting workplace concerns safely",
      "Ethical professional conduct",
      "Scenario-based decision practice",
      "Workplace rights and boundaries plan delivery"
    ],
    hours: 6,
    description: "Employment rights overview; Workplace expectations; Anti-harassment awareness — building to a final workplace rights and boundaries plan."
  },
  {
    code: "LSH-304",
    title: "Career Planning & Professional Identity",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 300,
    levelLabel: "Advanced Skill",
    capstone: "Career pathway portfolio",
    modules: [
      "Identifying career interests and natural strengths",
      "Job-market research and industry awareness",
      "Modern resume writing fundamentals",
      "Interview simulation and STAR storytelling",
      "Securing professional references and testimonials",
      "Building a digital accomplishments portfolio",
      "Job search workflows and LinkedIn setup",
      "Mapping long-term career pathways",
      "Constructing a 12-month career development plan",
      "Career pathway portfolio review"
    ],
    hours: 6,
    description: "Career interests and strengths; Job-market awareness; Resume basics — building to a final career pathway portfolio."
  },
  {
    code: "LSH-305",
    title: "Resilience, Recovery & Change Navigation",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 300,
    levelLabel: "Advanced Skill",
    capstone: "Personal resilience playbook",
    modules: [
      "Understanding psychological resilience",
      "Managing setbacks without losing momentum",
      "Personal stress-response action plans",
      "Leveraging peer support systems",
      "Adapting flexibly to workplace change",
      "Structured problem-solving under pressure",
      "Daily recovery and grounding routines",
      "Rebuilding self-confidence after failure",
      "Interactive resilience simulation",
      "Personal resilience playbook submission"
    ],
    hours: 6,
    description: "Understanding resilience; Managing setbacks; Stress-response planning — building to a final personal resilience playbook."
  },
  {
    code: "LSH-401",
    title: "Leadership in Daily Life",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 400,
    levelLabel: "Capstone",
    capstone: "Personal leadership practice plan",
    modules: [
      "Clarifying core leadership values",
      "High-integrity daily decision-making",
      "Leading by example as a role model",
      "Radical personal accountability",
      "Influencing positive outcomes without formal authority",
      "Mentoring incoming peers and colleagues",
      "Reflective journaling for continuous growth",
      "Daily leadership habits and routines",
      "Demonstrating leadership during salon peak rushes",
      "Personal leadership practice plan submission"
    ],
    hours: 6,
    description: "Personal leadership values; Daily decision-making; Role-model behavior — building to a final personal leadership practice plan."
  },
  {
    code: "LSH-402",
    title: "Community Engagement & Peer Support",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 400,
    levelLabel: "Capstone",
    capstone: "Community contribution project",
    modules: [
      "Mapping neighborhood community assets",
      "Cultivating belonging and mutual contribution",
      "Foundations of peer-to-peer support",
      "Volunteering with animal rescue organizations",
      "Cross-cultural community communication",
      "Building strategic local partnerships",
      "Advocating for accessible pet care services",
      "Community project planning and budgeting",
      "Executing a community pet health awareness day",
      "Community contribution project presentation"
    ],
    hours: 6,
    description: "Community assets; Belonging and contribution; Peer support basics — building to a final community contribution project."
  },
  {
    code: "LSH-403",
    title: "Life Systems Integration",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 400,
    levelLabel: "Capstone",
    capstone: "Integrated household and work systems map",
    modules: [
      "Designing streamlined household operations",
      "Aligning personal life with work shift demands",
      "Unified calendar and scheduling integration",
      "Personal finance and business revenue tracking",
      "Integrating wellness and physical recovery into daily life",
      "Nurturing a robust personal support ecosystem",
      "Emergency readiness and contingency planning",
      "Digital tools automation across all life domains",
      "Holistic personal systems audit",
      "Integrated household and work systems map submission"
    ],
    hours: 6,
    description: "Household systems; Work systems; Calendar integration — building to a final integrated household and work systems map."
  },
  {
    code: "LSH-404",
    title: "Personal Crisis Prevention & Continuity Planning",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 400,
    levelLabel: "Capstone",
    capstone: "Personal continuity plan",
    modules: [
      "Proactive personal risk identification",
      "Organizing verified emergency contact trees",
      "Cloud document security and legal vaulting",
      "Contingency plans for sudden housing disruption",
      "Backup transportation routes and repair funds",
      "Emergency savings buffer and financial stopgaps",
      "Health management and medical continuity",
      "Clear communication protocols during emergencies",
      "Personal crisis response dry-run simulation",
      "Personal continuity plan submission"
    ],
    hours: 6,
    description: "Risk identification; Emergency contacts; Document protection — building to a final personal continuity plan."
  },
  {
    code: "LSH-405",
    title: "Life Skills Portfolio Capstone",
    pathway: "LIF",
    pathwayName: "Life Skills & Personal Readiness",
    level: 400,
    levelLabel: "Capstone",
    capstone: "Verified Life Skills Portfolio",
    modules: [
      "Comprehensive evidence review across Level 100-300 courses",
      "Crafting an inspiring personal strengths narrative",
      "Honest life skills self-assessment rubric",
      "Selecting capstone artifacts and testimonials",
      "Skills gap analysis and final refinement",
      "Digital portfolio layout and polish",
      "Rehearsing oral portfolio defense",
      "Incorporating reviewer and mentor feedback",
      "Signing 12-month future action commitments",
      "Final presentation and Verified Life Skills Portfolio Award"
    ],
    hours: 6,
    description: "Portfolio evidence review; Strengths narrative; Life skills self-assessment — building to a final verified life skills portfolio."
  },

  // GRM: Pet Grooming & Animal Care (20 Courses)
  {
    code: "GRM-101",
    title: "Introduction to Pet Grooming Careers",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 100,
    levelLabel: "Foundation",
    capstone: "Grooming career readiness plan",
    modules: [
      "Pet grooming industry overview and career trajectories",
      "Comparing salon, mobile van, and home studio models",
      "Understanding roles: bather, stylist, salon manager, owner",
      "Compensation structures: hourly, commission, tips, ownership",
      "Daily salon rhythm and workflow expectations",
      "Professional conduct and animal ethics",
      "Ergonomics and physical demands of pet styling",
      "Building client trust and pet rapport",
      "Designing your individual grooming development roadmap",
      "Grooming career readiness plan submission"
    ],
    hours: 6,
    description: "Grooming career overview; Service-business models; Roles in a salon — building to a final grooming career readiness plan."
  },
  {
    code: "GRM-102",
    title: "Animal Behavior & Safe Handling",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 100,
    levelLabel: "Foundation",
    capstone: "Safe-handling skills checklist",
    modules: [
      "Animal welfare principles and low-stress ethos",
      "Reading subtle canine body language and calming signals",
      "Understanding feline handling and stress thresholds",
      "Safe initial approach and greeting techniques",
      "Humane restraint holds and grooming loop limits",
      "Proper dog lifting mechanics and table transfer",
      "Bite prevention protocols and safety muzzles",
      "Recognizing acute panic and heat exhaustion signals",
      "Emergency incident response and stop-service triggers",
      "Safe-handling skills checklist verification"
    ],
    hours: 6,
    description: "Animal welfare principles; Canine body language; Feline body language — building to a final safe-handling skills checklist."
  },
  {
    code: "GRM-103",
    title: "Grooming Tools, Equipment & Sanitation",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 100,
    levelLabel: "Foundation",
    capstone: "Grooming station setup and sanitation plan",
    modules: [
      "Professional grooming tool identification and anatomy",
      "Clipper motors, drive levers, and A5 blade sizing (#10, #7F, #5F, #4F, #30)",
      "Slicker brushes, pin brushes, greyhound combs, and de-shedding rakes",
      "High-velocity dryer safety and noise acclimation gear",
      "Electric table and tub safety latches",
      "Personal protective equipment: ear protection, eye protection, smocks",
      "Sanitizing clippers and shears with Barbicide and blade wash",
      "Disinfecting tubs, tables, and salon surfaces between animals",
      "Tool maintenance schedules and sharpening routines",
      "Grooming station setup and sanitation plan submission"
    ],
    hours: 6,
    description: "Grooming tool identification; Clipper and blade basics; Brush and comb selection — building to a final grooming station setup and sanitation plan."
  },
  {
    code: "GRM-104",
    title: "Bathing, Drying & Basic Coat Care",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 100,
    levelLabel: "Foundation",
    capstone: "Supervised bath-and-dry service record",
    modules: [
      "Pre-bath health check and coat inspection",
      "Line combing and preparatory de-shedding",
      "Systematic bathing sequence: water temperature and pressure",
      "Diluting and selecting clarifying, moisturizing, and medicated shampoos",
      "Thorough rinsing techniques around sensitive eyes and ears",
      "High-velocity drying mechanics to stretch coat and remove dead hair",
      "Fluff drying with stand dryers for styling prep",
      "Thorough post-dry brushing and comb checks",
      "Accurate service documentation and skin condition logs",
      "Supervised bath-and-dry service record validation"
    ],
    hours: 6,
    description: "Pre-bath evaluation; Coat preparation; Bathing sequence — building to a final supervised bath-and-dry service record."
  },
  {
    code: "GRM-105",
    title: "Client Intake, Pet Records & Service Consultation",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 100,
    levelLabel: "Foundation",
    capstone: "Complete pet intake and consultation portfolio",
    modules: [
      "Welcoming pet parents and active listening skills",
      "Creating comprehensive digital pet profiles in software",
      "Documenting vaccinations, medical history, and behavioral quirks",
      "Aligning client expectations with realistic coat conditions",
      "Assessing matting severity and explaining shaving necessities",
      "Transparent pricing breakdowns and add-on services",
      "Securing signed liability waivers and emergency medical releases",
      "Taking detailed intake notes and styling reference photos",
      "Clear pickup notification protocols and hand-off summaries",
      "Complete pet intake and consultation portfolio submission"
    ],
    hours: 6,
    description: "Client greeting; Pet profile setup; Health and behavior disclosure — building to a final complete pet intake and consultation portfolio."
  },
  {
    code: "GRM-201",
    title: "Brushing, Combing, De-Shedding & De-Matting Safety",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 200,
    levelLabel: "Core Skill",
    capstone: "Coat-maintenance service portfolio",
    modules: [
      "Analyzing single, double, wire, curly, and drop coat structures",
      "Proper ergonomic wrist motion for line brushing without brush burn",
      "Correct comb angles to detect root-level mats",
      "Utilizing carding knives and undercoat rakes on shedding breeds",
      "Evaluating humane de-matting limits vs. skin damage risks",
      "Safe application of detangling conditioning sprays",
      "Mandatory stop-and-escalate rules for severe pelted mats",
      "Educating pet parents on daily at-home brushing routines",
      "Documenting coat recovery progress across recurring visits",
      "Coat-maintenance service portfolio submission"
    ],
    hours: 6,
    description: "Coat types; Brushing technique; Combing technique — building to a final coat-maintenance service portfolio."
  },
  {
    code: "GRM-202",
    title: "Nail, Ear, Paw & Basic Hygiene Services",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 200,
    levelLabel: "Core Skill",
    capstone: "Basic hygiene competency checkoff",
    modules: [
      "Canine and feline nail anatomy: identifying the quick in light and dark nails",
      "Safe clipping angles and utilizing rotary nail grinders (dremels)",
      "Proper use of styptic powder and clotting agents",
      "Safe ear canal inspection, gentle plucking, and cleaning solutions",
      "Scooping paw pads safely with a #30 or #10 blade",
      "Trimming sanitary zones (groin and rear) without clipper irritation",
      "Enzymatic tooth brushing and breath freshening",
      "Designing an efficient 15-minute hygiene prep workflow",
      "Coaching owners on between-groom hygiene maintenance",
      "Basic hygiene competency checkoff verification"
    ],
    hours: 6,
    description: "Nail anatomy; Nail-trim safety; Ear-care scope — building to a final basic hygiene competency checkoff."
  },
  {
    code: "GRM-203",
    title: "Clippers, Blades, Scissors & Tool Safety",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 200,
    levelLabel: "Core Skill",
    capstone: "Tool-handling safety assessment",
    modules: [
      "Clipper handling: proper grip and balance to prevent hand fatigue",
      "Monitoring blade temperature: the 5-minute touch test rule",
      "Snap-on guard combs: steel vs plastic and length selections",
      "Straight, curved, thinning, and chunker shear mechanics",
      "Finger placement and scissor control: isolating the thumb movement",
      "Cord safety, battery maintenance, and charging dock care",
      "Daily ultrasonic cleaning and blade oiling routines",
      "Safe shear holstering and table tool organization",
      "Emergency tool hazard prevention simulation",
      "Tool-handling safety assessment checkoff"
    ],
    hours: 6,
    description: "Clipper safety; Blade temperature; Guard combs — building to a final tool-handling safety assessment."
  },
  {
    code: "GRM-204",
    title: "Breed, Coat, Skin & Style Foundations",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 200,
    levelLabel: "Core Skill",
    capstone: "Coat-and-style consultation plan",
    modules: [
      "Skin physiology: recognizing hot spots, allergies, and dermatological conditions",
      "AKC breed group standards overview (Sporting, Hound, Working, Terrier, Toy, Non-Sporting, Herding)",
      "Standard style terminology: Teddy Bear, Puppy Cut, Clean Face, Lamb Trim",
      "Matching coat styles to owner lifestyle and maintenance commitment",
      "Conducting visual consultations using breed profile lookbooks",
      "Accurately estimating grooming service durations",
      "Setting safety boundaries for senior or arthritic dogs",
      "Documenting customer style preferences in salon software",
      "Executing style recommendation mock consultations",
      "Coat-and-style consultation plan submission"
    ],
    hours: 6,
    description: "Coat and skin observation; Breed research; Style terminology — building to a final coat-and-style consultation plan."
  },
  {
    code: "GRM-205",
    title: "Grooming Workflow & Salon Productivity",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 200,
    levelLabel: "Core Skill",
    capstone: "Full-service workflow checklist",
    modules: [
      "Salon opening checklist and equipment sterilization verification",
      "Reviewing daily appointment schedules and pet arrival staging",
      "Time blocking for bath, dry, rest period, and haircut execution",
      "Batch workflow optimization for multiple pet rotations",
      "Mid-day sanitizing stations between appointments",
      "Proactive automated SMS status updates to owners",
      "Streamlined POS checkout, tip processing, and receipt delivery",
      "Rebooking clients on 4-6 week recurring maintenance schedules",
      "End-of-day salon closeout, laundry, and trash sanitization",
      "Full-service workflow checklist validation"
    ],
    hours: 6,
    description: "Opening workflow; Appointment preparation; Service timing — building to a final full-service workflow checklist."
  },
  {
    code: "GRM-301",
    title: "Advanced Bathing, Drying & Coat Preparation",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 300,
    levelLabel: "Advanced Skill",
    capstone: "Advanced coat-preparation portfolio",
    modules: [
      "In-depth analysis of textured, fine, harsh, and combination coats",
      "Specialty spa treatments: mud baths, deep conditioning, and keratin masks",
      "Advanced velocity drying to blow out stubborn dead undercoat",
      "Fluff drying curly coats straight for seamless scissor finishes",
      "Stretch drying wire coats to preserve natural texture",
      "Carding and hand stripping prep techniques",
      "Maximizing drying efficiency while preserving coat moisture balance",
      "Quality inspection: zero-dampness check and squeaky clean verification",
      "Troubleshooting oily seborrhea or dry flake buildup",
      "Advanced coat-preparation portfolio submission"
    ],
    hours: 6,
    description: "Coat evaluation; Product selection; Advanced drying — building to a final advanced coat-preparation portfolio."
  },
  {
    code: "GRM-302",
    title: "Breed Styling & Pet Trim Fundamentals",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 300,
    levelLabel: "Advanced Skill",
    capstone: "Supervised trim portfolio",
    modules: [
      "Setting body patterns: Poodle, Schnauzer, Cocker Spaniel, Bichon Frise",
      "Scissoring round Teddy Bear heads and clean Asian Fusion faces",
      "Beveling round cat-feet and clean poodle feet",
      "Blending guard comb lines smoothly into hand-scissored skirts",
      "Tail styling: pom-poms, flag tails, plume tails, carrot tails",
      "Symmetry checks from 360-degree angles and mirror inspections",
      "Adapting traditional breed standards into practical pet trims",
      "Studio before-and-after grooming photography standards",
      "Master instructor evaluation and corrective feedback",
      "Supervised trim portfolio completion"
    ],
    hours: 6,
    description: "Styling safety; Body-part mapping; Clipper patterns — building to a final supervised trim portfolio."
  },
  {
    code: "GRM-303",
    title: "Difficult, Fearful & High-Needs Pet Handling",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 300,
    levelLabel: "Advanced Skill",
    capstone: "Behavior-aware handling plan",
    modules: [
      "De-escalating severe kennel reactivity and grooming anxiety",
      "Consent-based cooperative care conditioning techniques",
      "Desensitization routines for clippers, dremels, and face washing",
      "Specialized handling for senior pets with hip dysplasia or collapse",
      "Grooming blind, deaf, or neurological pet clients safely",
      "Strict ethical stop-service thresholds for animal distress",
      "Educating pet parents on veterinary behavioral support",
      "Documenting incident reports and behavioral incident tracking",
      "Complex handling live simulation with certified behaviorist",
      "Behavior-aware handling plan submission"
    ],
    hours: 6,
    description: "Fear and stress recognition; Consent-based handling; Slow-introduction methods — building to a final behavior-aware handling plan."
  },
  {
    code: "GRM-304",
    title: "Grooming Quality Control & Service Recovery",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 300,
    levelLabel: "Advanced Skill",
    capstone: "Quality-control and rework system",
    modules: [
      "Establishing salon-wide grooming quality standards",
      "12-point post-groom inspection checklist (nails, ears, pads, symmetry)",
      "Reviewing client feedback scores and satisfaction ratings",
      "Gracefully handling client requests for trim adjustments and touch-ups",
      "Professional service recovery dialogue and complaint de-escalation",
      "Fair pricing adjustments and complimentary service protocols",
      "Comprehensive incident log documentation",
      "Coaching junior bathers on quality benchmarks",
      "Conducting weekly salon service audits",
      "Quality-control and rework system submission"
    ],
    hours: 6,
    description: "Quality standards; Inspection checklists; Customer feedback — building to a final quality-control and rework system."
  },
  {
    code: "GRM-305",
    title: "Mobile, In-Home & Specialty Grooming Operations",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 300,
    levelLabel: "Advanced Skill",
    capstone: "Specialty service operating plan",
    modules: [
      "Mobile grooming van systems: water tanks, generators, and inverters",
      "In-home grooming safety and client property protocols",
      "Optimizing driving routes and zone scheduling to minimize fuel costs",
      "Portable grooming tables, tub inserts, and cordless tool kits",
      "Sanitation protocols inside mobile units and off-site locations",
      "Municipal mobile business permits, parking laws, and zoning compliance",
      "Pricing premium mobile and house-call luxury surcharges",
      "Developing specialty feline and exotic pet grooming capabilities",
      "Operational risk assessment and roadside breakdown contingencies",
      "Specialty service operating plan submission"
    ],
    hours: 6,
    description: "Mobile business model; In-home safety; Travel planning — building to a final specialty service operating plan."
  },
  {
    code: "GRM-401",
    title: "Advanced Grooming Portfolio Development",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 400,
    levelLabel: "Capstone",
    capstone: "Verified grooming portfolio",
    modules: [
      "Industry portfolio standards for master stylists and competition",
      "Curating high-resolution before-and-after transformation galleries",
      "Writing technical service breakdowns and coat restoration narratives",
      "Showcasing expertise across diverse coat textures and breed trims",
      "Including safety certifications and low-stress handling badges",
      "Integrating verified client reviews and 5-star testimonials",
      "Conducting a critical styling skills gap audit",
      "Digital web portfolio design and social media showcase",
      "Peer review and master groomer portfolio critique",
      "Verified Grooming Portfolio completion and defense"
    ],
    hours: 6,
    description: "Portfolio standards; Selecting evidence; Before-and-after documentation — building to a final verified grooming portfolio."
  },
  {
    code: "GRM-402",
    title: "Grooming Salon Practicum",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 400,
    levelLabel: "Capstone",
    capstone: "Supervised practicum service log",
    modules: [
      "Practicum salon orientation and safety walk-through",
      "Receiving daily hands-on grooming service assignments",
      "Conducting independent client intakes under instructor supervision",
      "Executing full bath, dry, prep, and breed haircuts independently",
      "Handling real-time client consultations and pickup walk-throughs",
      "Executing station sanitation and tool disinfection between pets",
      "Receiving instant rubric evaluations on speed, symmetry, and handling",
      "Logging 50 hours of verified clinical salon service hours",
      "Practicum self-reflection and professional growth commitments",
      "Supervised practicum service log verification"
    ],
    hours: 6,
    description: "Practicum orientation; Service assignments; Preparation — building to a final supervised practicum service log."
  },
  {
    code: "GRM-403",
    title: "Grooming Service Menu, Pricing & Packages",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 400,
    levelLabel: "Capstone",
    capstone: "Service menu and pricing guide",
    modules: [
      "Structuring core service tiers: Bath & Brush, Tidy Trim, Full Haircut",
      "Time-costing: calculating hourly labor rates ($60-$120/hr)",
      "Supply and product cost calculation per dog size and coat density",
      "Weight-based and breed-based baseline pricing models",
      "Designing high-margin add-on menus: teeth cleaning, de-shedding, spa facials",
      "Creating recurring VIP grooming memberships and subscription packages",
      "Writing transparent salon policies for matting fees and late cancellations",
      "Visual menu layout and digital software integration",
      "Market testing and price point refinement",
      "Service menu and pricing guide publication"
    ],
    hours: 6,
    description: "Service categories; Time costing; Supply costing — building to a final service menu and pricing guide."
  },
  {
    code: "GRM-404",
    title: "Grooming Safety Leadership & Training Others",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 400,
    levelLabel: "Capstone",
    capstone: "Safety training mini-course",
    modules: [
      "Principles of workplace safety leadership and culture creation",
      "Delivering hands-on tool demonstrations and safe handling coaching",
      "Giving constructive feedback without discouraging novice bathers",
      "Creating objective skill rubrics for bather-to-groomer advancement",
      "Proactive salon hazard hunting and daily equipment inspections",
      "Leading mandatory monthly salon safety drills and CPR refreshers",
      "Designing a 14-day bather onboarding curriculum",
      "Auditing salon PPE compliance and chemical storage safety",
      "Delivering a live safety training session to cohort peers",
      "Safety training mini-course package submission"
    ],
    hours: 6,
    description: "Safety leadership; Teaching demonstrations; Coaching language — building to a final safety training mini-course."
  },
  {
    code: "GRM-405",
    title: "Pet Grooming Career Capstone",
    pathway: "GRM",
    pathwayName: "Pet Grooming & Animal Care",
    level: 400,
    levelLabel: "Capstone",
    capstone: "Grooming career and business launch portfolio",
    modules: [
      "Choosing your target trajectory: lead stylist, salon owner, or mobile entrepreneur",
      "Polishing your master resume and interview presentation",
      "Final review of verified 20-course grooming portfolio artifacts",
      "Auditing your business pricing menu and software setup",
      "Verifying safety certifications and professional liability insurance",
      "Setting 30-day, 60-day, and 90-day post-graduation milestones",
      "Preparing your capstone defense before industry salon owners",
      "Live presentation of your signature pet grooming styling work",
      "Formal graduation ceremony and pathway credentials award",
      "Grooming career and business launch portfolio final submission"
    ],
    hours: 6,
    description: "Career pathway choice; Employment portfolio; Business option — building to a final grooming career and business launch portfolio."
  }
];

// Helper to expand catalog items for remaining pathways (BUS, PAR, PER, MKT, TEC, FIN, LDR, LEG) to ensure 200 courses are accessible
export function getCompleteCatalogCourses(): CatalogCourse[] {
  const existingCodes = new Set(ALL_200_COURSES.map(c => c.code));
  const fullList: CatalogCourse[] = [...ALL_200_COURSES];

  const pathwayData = [
    { code: "BUS", name: "Business & Leadership", prefix: "BUS" },
    { code: "PAR", name: "Partner Programs & Workforce Transition", prefix: "PAR" },
    { code: "PER", name: "Personal Mastery & Lifelong Growth", prefix: "PER" },
    { code: "MKT", name: "Marketing, Branding & SEO Mastery", prefix: "MKT" },
    { code: "TEC", name: "AI & Technology Systems", prefix: "TEC" },
    { code: "FIN", name: "Financial Mastery, Bookkeeping & Tax Strategy", prefix: "FIN" },
    { code: "LDR", name: "Business Leadership, Operations & Expansion", prefix: "LDR" },
    { code: "LEG", name: "Legal, Risk, Compliance & Ethical Governance", prefix: "LEG" }
  ];

  const levelConfigs = [
    { level: 100, label: "Foundation", count: 5, start: 101 },
    { level: 200, label: "Core Skill", count: 5, start: 201 },
    { level: 300, label: "Advanced Skill", count: 5, start: 301 },
    { level: 400, label: "Capstone", count: 5, start: 401 }
  ];

  const topicTitles: Record<string, string[][]> = {
    BUS: [
      ["Entrepreneurship Foundations", "Business Models for Pet and Service Businesses", "Customer Experience & Service Design", "Business Communication & Professional Writing", "Introduction to Business Planning"],
      ["Business Operations & Daily Management", "Sales, Consultations & Closing", "Service Pricing, Packages & Profit Basics", "Team Building & First-Hire Readiness", "Business Systems in Leashed.io"],
      ["Strategic Planning & Performance Metrics", "Vendor, Inventory & Supply Management", "Customer Retention & Loyalty Systems", "Leadership, Coaching & Performance Management", "Risk, Continuity & Business Recovery"],
      ["Business Launch Preparation", "Studio, Mobile or Salon Setup", "Funding Readiness & Business Pitch", "Business Growth & Multi-Service Expansion", "Business Ownership Capstone"]
    ],
    PAR: [
      ["Program Navigation & Participant Rights", "Workforce Readiness & Employment Preparation", "Career Exploration & Sector Pathways", "Benefits, Support Services & Resource Navigation", "Reentry, Recovery & Employment Stability Foundations"],
      ["Resume, Portfolio & Application Systems", "Interviewing, Networking & Employer Communication", "Apprenticeship, Internship & Work-Based Learning", "Workplace Retention & Career Advancement", "Partner Agency Collaboration & Consent"],
      ["Case Management Self-Advocacy", "Employer Partnerships & Job Placement Strategy", "Workforce Data, Outcomes & Professional Documentation", "Community-Based Entrepreneurship & Social Impact", "Peer Mentorship & Alumni Leadership"],
      ["Employment or Enterprise Transition Plan", "Funding, Scholarship & Support Application Lab", "Community Partner Practicum", "Alumni Success & Long-Term Career Navigation", "Workforce Transition Capstone"]
    ],
    PER: [
      ["Foundations of Personal Mastery", "Values, Identity & Purpose", "Growth Mindset & Habit Design", "Emotional Regulation & Self-Management", "Goals, Vision & Personal Planning"],
      ["Emotional Intelligence & Relational Leadership", "Empathy, Active Listening & Trust", "Feedback, Conflict Repair & Difficult Conversations", "Cultural Competence & Inclusive Leadership", "Coaching, Motivation & Peer Development"],
      ["Advanced Resilience, Mindset & Decision-Making", "Cognitive Biases & Critical Thinking", "Negotiation, Influence & Advocacy", "Risk, Uncertainty & Adaptive Problem-Solving", "Accountability, Discipline & Self-Leadership"],
      ["Personal Mastery & Legacy Planning", "Public Speaking, Storytelling & Presence", "Mentorship, Giving Back & Community Legacy", "Work-Life Integration & Sustainable Success", "Personal Mastery Portfolio Capstone"]
    ],
    MKT: [
      ["Marketing & Brand Foundations", "Customer Research & Ideal Client Profiles", "Brand Voice, Story & Visual Identity", "Value Proposition, Offers & Messaging", "Local Market & Competitor Analysis"],
      ["Digital Marketing, Content & Social Systems", "Photography, Video & Visual Content Production", "Email, SMS & Customer Nurture Systems", "Social Media Community & Reputation Management", "Paid Advertising & Promotional Campaign Basics"],
      ["SEO, Search & Local Discovery Mastery", "Keyword Research & Search Intent Strategy", "On-Page, Technical & Content SEO", "Local Listings, Reviews & Map Visibility", "Analytics, Attribution & Marketing ROI"],
      ["Integrated Growth Marketing Strategy", "Retention, Loyalty & Referral Marketing", "Partnership, Influencer & Community Marketing", "Marketing Automation & Multi-Channel Growth", "Marketing Portfolio Capstone"]
    ],
    TEC: [
      ["Technology Foundations & Digital Literacy for Business", "Cybersecurity, Passwords & Safe Online Work", "Cloud Files, Communication & Collaboration", "Data Privacy & Customer Information Basics", "AI Literacy, Prompting & Human Verification"],
      ["AI Tools for Business Operations", "AI for Customer Communication & Service", "AI for Content, Design & Marketing Production", "AI for Scheduling, Tasks & Workflow Automation", "AI for Reporting, Data Quality & Decisions"],
      ["Choosing, Buying & Integrating Business Technology", "Technology Needs Assessment & Vendor Evaluation", "Systems Integration, Data Migration & Automation", "Technology Budgeting, Contracts & Procurement", "AI Governance, Risk & Responsible Implementation"],
      ["AI-Powered Business Systems Design", "Business Dashboards & Data Strategy", "Technology Continuity, Security & Incident Response", "Technology Training, Adoption & Change Management", "Technology Systems Portfolio Capstone"]
    ],
    FIN: [
      ["Financial Foundations for Owners", "Personal and Business Finance Separation", "Budgeting, Pricing & Break-Even Basics", "Banking, Payments, Credit & Cash Safety", "Financial Statements & Business Health"],
      ["Bookkeeping, Payroll & Cash Management With AI", "Invoicing, Receivables & Collections", "Payables, Vendors & Expense Management", "Cash Flow Forecasting & Seasonal Planning", "Payroll, Contractors & Financial Team Readiness"],
      ["Tax Strategy, Compliance & Entity Structuring", "Deductions, Recordkeeping & Tax Documentation", "Sales Tax, Estimated Taxes & Multi-Jurisdiction Planning", "Lending, Credit, Grants & Funding Evaluation", "Financial Risk, Insurance & Reserves"],
      ["Financial Systems & Capital Strategy", "Unit Economics, Profitability & Growth Forecasting", "Investor, Lender & Grant-Ready Financial Packages", "Valuation, Exit & Succession Financial Planning", "Financial Portfolio Capstone"]
    ],
    LDR: [
      ["Leadership & Team Foundations", "Leadership Styles, Values & Team Culture", "Hiring, Interviewing & Workforce Planning", "Onboarding, Training & Role Clarity", "Communication, Delegation & Accountability"],
      ["Operations, Supply Chain & Vendor Management", "Inventory, Equipment & Facilities Management", "Scheduling, Capacity & Service Delivery", "Quality Control, SOPs & Continuous Improvement", "Vendor Negotiation & Supply Continuity"],
      ["Scaling, Franchising & Multi-Unit Growth", "Manager Development & Organizational Design", "Multi-Location Operations & Performance Reporting", "Expansion Financing & Growth Risk Management", "Brand Consistency & Customer Experience at Scale"],
      ["Global Expansion & International Strategy", "Cross-Cultural Leadership & Remote Teams", "International Partnerships, Licensing & Market Entry", "Enterprise Crisis, Continuity & Reputation Leadership", "Leadership & Expansion Portfolio Capstone"]
    ],
    LEG: [
      ["Business Law & Ethics Foundations", "Licenses, Permits & Business Registration", "Consumer Protection, Customer Rights & Liability", "Employment Law Awareness & Fair Workplace Practices", "Ethical AI, Privacy & Responsible Business Conduct"],
      ["Contracts, Intellectual Property & Risk Management", "Contract Reading, Negotiation & Documentation", "Brand Protection, Copyright & Intellectual Property", "Insurance, Claims & Business Risk Transfer", "Lease, Vendor & Commercial Agreement Basics"],
      ["Regulatory Compliance, Data Privacy & AI Governance", "Accessibility, Anti-Discrimination & Inclusive Compliance", "Workplace Safety, Records Retention & Audit Readiness", "Grant, Funding & Reporting Compliance", "Ethics Reporting, Whistleblower Systems & Investigations"],
      ["Governance, Ethics & Sustainable Growth", "Boards, Advisors & Corporate Governance", "Environmental, Social & Community Impact Governance", "Crisis Governance, Reputation & Stakeholder Transparency", "Legal & Governance Portfolio Capstone"]
    ]
  };

  pathwayData.forEach(p => {
    const titlesByLevel = topicTitles[p.code] || [];
    levelConfigs.forEach((lc, lvlIdx) => {
      const titles = titlesByLevel[lvlIdx] || [];
      for (let i = 0; i < lc.count; i++) {
        const codeNum = lc.start + i;
        const code = `${p.prefix}-${codeNum}`;
        if (!existingCodes.has(code)) {
          const title = titles[i] || `${p.name} Specialization ${codeNum}`;
          fullList.push({
            code,
            title,
            pathway: p.code,
            pathwayName: p.name,
            level: lc.level,
            levelLabel: lc.label,
            capstone: `${title} capstone project & verified artifact`,
            modules: [
              `Module 01: Core fundamentals and orientation for ${title}`,
              `Module 02: Essential principles, terminology, and workflows`,
              `Module 03: Industry safety, standards, and compliance checklist`,
              `Module 04: Practical tools, equipment, and digital workflow setup`,
              `Module 05: Intermediate execution and hands-on skill building`,
              `Module 06: Customer communication and service excellence`,
              `Module 07: Troubleshooting common obstacles and quality control`,
              `Module 08: Advanced scenario simulations and case studies`,
              `Module 09: AI-assisted optimization and performance reporting`,
              `Module 10: Capstone project review and credential defense`
            ],
            hours: 6,
            description: `Comprehensive 10-module study covering core fundamentals, professional best practices, hands-on scenarios, and safety standards — culminating in a verified capstone artifact.`
          });
          existingCodes.add(code);
        }
      }
    });
  });

  return fullList;
}

export const COMPLETE_CATALOG_COURSES = getCompleteCatalogCourses();
