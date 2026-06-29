export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  outcome?: string;
  highlights: string[];
  tech: string[];
  category: string;
  period?: string;
  github: string;
  githubConfirmed: boolean;
  featured: boolean;
};

const GITHUB_PROFILE = "https://github.com/abhijha8287";

export const PROJECTS: Project[] = [
  {
    id: "butterfly-director-ai",
    title: "Butterfly Director AI",
    tagline: "Multiverse AI film studio with multi-agent direction",
    description:
      "A multi-agent AI platform that automates screenplay analysis, scene planning, shot generation, and production workflows using reasoning agents, RAG, vector search, and knowledge graphs.",
    outcome:
      "Generates multiple creative video concepts in 1-2 minutes, compressing a process that usually takes hours into minutes.",
    highlights: [
      "10-agent LangGraph pipeline",
      "Branching narrative universes",
      "Script to storyboard to video flow",
      "Character consistency via vector search",
      "Async resumable production pipeline",
    ],
    tech: ["Python", "LangGraph", "FastAPI", "OpenAI", "PostgreSQL", "Neo4j", "ChromaDB", "Docker"],
    category: "Multi-Agent AI",
    period: "June 2026",
    github: `${GITHUB_PROFILE}/butterfly-director-ai`,
    githubConfirmed: true,
    featured: true,
  },
  {
    id: "future-self-ai",
    title: "Future Self AI",
    tagline: "Predictive decision intelligence Chrome extension",
    description:
      "An AI-powered Chrome extension that predicts outcomes before important online decisions such as purchases, investments, applications, and emails are submitted.",
    outcome:
      "Estimates regret probability, opportunity cost, and financial impact to help users avoid impulsive high-stakes choices.",
    highlights: ["Chrome Extension MV3", "Multi-agent decision workflow", "Regret prediction", "Financial impact analysis"],
    tech: ["Next.js", "TypeScript", "React", "PostgreSQL", "Prisma", "OpenAI", "ChromaDB", "TailwindCSS"],
    category: "Decision Intelligence",
    period: "June 2026",
    github: `${GITHUB_PROFILE}/future-self-ai`,
    githubConfirmed: true,
    featured: true,
  },
  {
    id: "facility-trust-desk",
    title: "Facility Trust Desk",
    tagline: "Explainable healthcare facility intelligence",
    description:
      "An explainable AI platform that evaluates hospitals across ICU, NICU, trauma, oncology, emergency, and dialysis services using RAG, evidence retrieval, trust scoring, and analytics.",
    outcome:
      "Helps patients compare hospitals faster with transparent, evidence-backed recommendations for time-sensitive care decisions.",
    highlights: ["Explainable AI", "Healthcare RAG", "Hospital verification", "Trust scoring", "Evidence retrieval"],
    tech: ["Python", "FastAPI", "LangChain", "OpenAI", "Qdrant", "PostgreSQL", "Streamlit", "Docker"],
    category: "Healthcare AI",
    period: "May 2026",
    github: `${GITHUB_PROFILE}/facility-trust-desk`,
    githubConfirmed: true,
    featured: true,
  },
  {
    id: "worksphere-ai",
    title: "Worksphere AI",
    tagline: "AI collaborative productivity workspace",
    description:
      "An AI-powered collaborative productivity platform combining workspace management, Kanban, calendar, notes, whiteboard, AI assistants, voice commands, real-time collaboration, and intelligent workflow automation.",
    outcome:
      "Unifies scattered productivity tools into one AI-native workspace for planning, collaboration, and automated execution.",
    highlights: ["Workspace management", "Kanban and calendar", "AI assistants", "Voice commands", "Real-time collaboration"],
    tech: ["TypeScript", "React", "Next.js", "AI Assistants", "Realtime Collaboration"],
    category: "AI Productivity",
    github: `${GITHUB_PROFILE}/worksphere-ai`,
    githubConfirmed: true,
    featured: true,
  },
  {
    id: "autonomous-incident-commander",
    title: "Autonomous Incident Commander",
    tagline: "Infrastructure incident intelligence",
    description:
      "Transforms infrastructure alerts into intelligent investigations with root-cause identification, timeline generation, response coordination, and remediation recommendations.",
    outcome:
      "Designed to plug into observability and ticketing workflows so teams can move from noisy alerts to guided action.",
    highlights: ["Root cause analysis", "Timeline generation", "Splunk integration", "Jira automation", "AI investigation"],
    tech: ["Python", "FastAPI", "LLMs", "RAG", "Observability APIs"],
    category: "Infrastructure AI",
    github: `${GITHUB_PROFILE}/Autonomous-Incident-Commander`,
    githubConfirmed: true,
    featured: true,
  },
  {
    id: "ai-construction-commander",
    title: "AI Construction Commander",
    tagline: "Enterprise construction intelligence",
    description:
      "Enterprise platform for investigating construction delays, supply-chain bottlenecks, procurement risks, and contractor performance using knowledge graphs and predictive workflows.",
    outcome:
      "Gives project leads an early-warning system instead of waiting for post-mortem reports.",
    highlights: ["Delay investigation", "Procurement intelligence", "Risk prediction", "Knowledge graph", "Forecasting"],
    tech: ["Python", "FastAPI", "Knowledge Graphs", "Forecasting", "LLMs"],
    category: "Construction Intelligence",
    github: `${GITHUB_PROFILE}/AI-Construction-Commander`,
    githubConfirmed: true,
    featured: true,
  },
  {
    id: "career-agent-ai",
    title: "Career Agent AI",
    tagline: "AI career assistant for job search workflows",
    description:
      "Discovers jobs, internships, and freelance opportunities while generating ATS-optimized resumes and personalized cover letters.",
    outcome:
      "Turns the job hunt from a manual grind into an AI-assisted pipeline for matching, ranking, and applying.",
    highlights: ["Job discovery", "ATS resume builder", "Cover letters", "Resume ranking", "AI matching"],
    tech: ["Python", "LLMs", "RAG", "Automation", "Web Scraping"],
    category: "Career AI",
    github: `${GITHUB_PROFILE}/career-agent-ai`,
    githubConfirmed: true,
    featured: true,
  },
  {
    id: "parallel-ai",
    title: "Parallel AI",
    tagline: "Decision simulation platform",
    description:
      "Predicts multiple future outcomes, estimates regret probability, and evaluates opportunity costs before a user commits to a decision.",
    outcome:
      "Makes the cost of a decision visible before it is made, not after.",
    highlights: ["Future simulation", "Decision intelligence", "Regret prediction", "Opportunity cost", "Personalized AI"],
    tech: ["TypeScript", "Next.js", "OpenAI", "Vector Search"],
    category: "Decision Intelligence",
    github: `${GITHUB_PROFILE}/parallel-ai`,
    githubConfirmed: true,
    featured: true,
  },
  {
    id: "remitai",
    title: "RemitAI",
    tagline: "Cross-border remittance optimizer",
    description:
      "Finds cheaper, faster, and safer blockchain transfer routes using stablecoins across Ethereum and Layer-2 networks.",
    outcome:
      "Automatically discovers and compares routes for cross-border transfers with cost and safety in view.",
    highlights: ["Stablecoin routing", "Cost optimization", "Layer-2 payments", "Smart transfer engine"],
    tech: ["TypeScript", "Ethereum", "Layer-2", "Stablecoins"],
    category: "Fintech AI",
    github: `${GITHUB_PROFILE}/RemitAI`,
    githubConfirmed: true,
    featured: true,
  },
  {
    id: "fruit-classification",
    title: "Fruit Classification",
    tagline: "Fresh vs. spoiled fruit computer vision classifier",
    description:
      "CNN and ResNet50-based fruit freshness classification system with a Streamlit web application for real-time predictions.",
    outcome:
      "Reached 99.8% validation accuracy and reduced manual freshness inspection time from hours to minutes.",
    highlights: ["99.8% validation accuracy", "ResNet50 transfer learning", "Streamlit app", "Real-time inference"],
    tech: ["Python", "TensorFlow", "Keras", "ResNet50", "Streamlit"],
    category: "Computer Vision",
    github: GITHUB_PROFILE,
    githubConfirmed: false,
    featured: true,
  },
  {
    id: "tradepulse-ai",
    title: "TradePulse AI",
    tagline: "AI trading intelligence dashboard",
    description:
      "Institutional flow analysis, volatility monitoring, news intelligence, watchlists, alerts, and AI-powered market insights in a single dashboard.",
    highlights: ["Market intelligence", "Institutional flows", "News analytics", "AI insights"],
    tech: ["TypeScript", "Dashboards", "Market Data", "LLMs"],
    category: "Financial AI",
    github: `${GITHUB_PROFILE}/tradepulse-ai`,
    githubConfirmed: true,
    featured: false,
  },
  {
    id: "stemlab-ai",
    title: "STEMLab AI",
    tagline: "Virtual AI laboratory for STEM education",
    description:
      "Intelligent tutoring, experiment simulations, automated lab reports, and personalized learning experiences for STEM students.",
    highlights: ["AI tutor", "Interactive simulations", "Lab reports", "Personalized learning"],
    tech: ["LLMs", "Education AI", "Simulations"],
    category: "Educational AI",
    github: `${GITHUB_PROFILE}/STEMLab-AI`,
    githubConfirmed: true,
    featured: false,
  },
  {
    id: "ai-scientist",
    title: "AI Scientist",
    tagline: "Autonomous scientific discovery platform",
    description:
      "AI research assistant that discovers research gaps, generates hypotheses, designs experiments, and accelerates research through autonomous workflows.",
    highlights: ["Scientific reasoning", "Hypothesis generation", "Experiment planning", "Knowledge graphs"],
    tech: ["Multi-Agent AI", "Knowledge Graphs", "RAG", "LLMs"],
    category: "Scientific AI",
    github: `${GITHUB_PROFILE}/AI-Scientist`,
    githubConfirmed: true,
    featured: false,
  },
  {
    id: "medical-imaging-ai",
    title: "Medical Imaging AI",
    tagline: "Retinal, cardiac, and brain imaging AI",
    description:
      "AI for retinal disease detection, echocardiography, MRI visualization, and clinical decision support across Trackleo and IIT Madras work.",
    highlights: ["Retinal disease detection", "MRI visualization", "Clinical decision support", "Image segmentation"],
    tech: ["Python", "Deep Learning", "Computer Vision", "Medical Imaging"],
    category: "Healthcare AI",
    github: GITHUB_PROFILE,
    githubConfirmed: false,
    featured: false,
  },
  {
    id: "shadowgov-ai",
    title: "ShadowGov AI",
    tagline: "Civic intelligence and public transparency platform",
    description:
      "Civic-tech AI platform for complaint tracking, government project visibility, budget analytics, and department performance.",
    highlights: ["Civic transparency", "Complaint tracking", "Budget analytics", "Department performance"],
    tech: ["TypeScript", "Civic Tech", "Analytics"],
    category: "Civic Tech",
    github: `${GITHUB_PROFILE}/shadowgov-ai`,
    githubConfirmed: true,
    featured: false,
  },
  {
    id: "parking-management",
    title: "Trekking Management Application",
    tagline: "Full-stack trek management platform",
    description:
      "Full-stack trek management application built with Flask and Vue.js to streamline trek operations with role-based access for admins, staff, and trekkers.",
    highlights: ["Role-based access", "Admin and staff workflows", "Trekker management", "Full-stack Flask/Vue app"],
    tech: ["Python", "Flask", "Vue.js", "SQLite", "REST APIs"],
    category: "Web Development",
    github: `${GITHUB_PROFILE}/Trekking-Management-Application`,
    githubConfirmed: false,
    featured: false,
  },
  {
    id: "mlops-pipeline",
    title: "MLOps Pipeline",
    tagline: "End-to-end production ML pipeline",
    description:
      "Production ML pipeline covering experiment tracking, data versioning, containerized deployment, continuous integration, and monitoring.",
    highlights: ["Experiment tracking", "Data versioning", "Docker deployment", "CI/CD"],
    tech: ["Docker", "MLflow", "DVC", "GitHub Actions", "FastAPI"],
    category: "MLOps",
    github: `${GITHUB_PROFILE}/23f3004013_MLOPS_WEEKLY_ASSIGNMENT`,
    githubConfirmed: true,
    featured: false,
  },
  {
    id: "sentinelai-incident-commander",
    title: "SentinelAI Incident Commander",
    tagline: "Autonomous Splunk incident response assistant",
    description:
      "Autonomous AI-powered incident commander that monitors Splunk data, investigates outages, identifies root causes, coordinates responses, generates Jira tickets, posts incident updates, and creates response summaries.",
    highlights: ["Splunk monitoring", "Root cause investigation", "Jira ticket automation", "Incident updates"],
    tech: ["LLMs", "Splunk", "Jira", "Automation", "Incident Response"],
    category: "Infrastructure AI",
    github: `${GITHUB_PROFILE}/sentinelai-incident-commander`,
    githubConfirmed: true,
    featured: false,
  },
  {
    id: "mernstacks-learning",
    title: "MERN Stack Learning",
    tagline: "Hands-on MERN stack practice",
    description:
      "Learning repository for full-stack JavaScript concepts across MongoDB, Express, React, and Node.js.",
    highlights: ["MERN Stack", "JavaScript", "Full-stack practice"],
    tech: ["JavaScript", "MongoDB", "Express", "React", "Node.js"],
    category: "Web Development",
    github: `${GITHUB_PROFILE}/Mern-stack-learning`,
    githubConfirmed: true,
    featured: false,
  },
  {
    id: "note-making-nextjs",
    title: "Note Making App",
    tagline: "Next.js note-taking application",
    description:
      "A TypeScript and Next.js note-making application exploring practical frontend app structure and user workflows.",
    highlights: ["Next.js", "TypeScript", "Notes workflow"],
    tech: ["TypeScript", "Next.js", "React"],
    category: "Web Development",
    github: `${GITHUB_PROFILE}/Note-making-apps-using-nextjs`,
    githubConfirmed: true,
    featured: false,
  },
  {
    id: "beverage-price-range-predictor",
    title: "Beverage Price Range Predictor",
    tagline: "Notebook-based price prediction project",
    description:
      "Jupyter Notebook project for predicting beverage price ranges using data science and machine learning workflows.",
    highlights: ["Jupyter Notebook", "Price prediction", "Data science workflow"],
    tech: ["Jupyter Notebook", "Python", "Machine Learning", "Data Analysis"],
    category: "Machine Learning",
    github: `${GITHUB_PROFILE}/beverage_p-rice_range_predictor`,
    githubConfirmed: true,
    featured: false,
  },
];

export const FEATURED_PROJECTS = PROJECTS.filter((p) => p.featured);
export const OTHER_PROJECTS = PROJECTS.filter((p) => !p.featured);
