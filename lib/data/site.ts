const GITHUB = "https://github.com/abhijha8287";

export const HERO = {
  greeting: "Hi, I'm Abhishek.",
  role: "Machine Learning Engineer",
  intro:
    "I build ML systems and LLM agents and take them from training to production: deep learning models, multi-agent workflows, evaluation and deployment.",
  context:
    "Final year of the four-year BS in Data Science at IIT Madras (B.Sc. completed 2026). Previously Data Scientist at Trackleo Technologies.",
  availability: "Open to ML / AI Engineer roles, remote or in Delhi.",
  stats: [
    { value: "1,000+", label: "users on Pips AI" },
    { value: "15 days", label: "from idea to MVP" },
    { value: "4", label: "roles in industry and research" },
    { value: "S grade", label: "ML Practice, IIT Madras" },
  ],
};

export type CaseStudy = {
  title: string;
  href: string;
  linkLabel: string;
  metrics: string[];
  challenge: string;
  built: string;
  impact: string;
  stack: string[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: "Pips AI",
    href: "https://www.pipsai.online",
    linkLabel: "pipsai.online",
    metrics: ["1,000+ users", "15-day MVP", "Built solo"],
    challenge:
      "Prop-firm traders fail challenges by breaking rules they can't track while they trade, and generic tools don't know each firm's rules.",
    built:
      "A trading platform with a live rule-compliance view and an AI coach (Claude API) that reviews trades against the firm's own rule text. FastAPI and PostgreSQL backend, Next.js frontend, shipped with Docker.",
    impact: "Went from idea to MVP in 15 days and passed 1,000 users within 2 months of launch.",
    stack: ["FastAPI", "PostgreSQL", "Next.js", "TypeScript", "Claude API", "Docker"],
  },
  {
    title: "Butterfly Director AI",
    href: `${GITHUB}/butterfly-director-ai`,
    linkLabel: "GitHub",
    metrics: ["11 agents", "LangGraph", "Async pipeline"],
    challenge:
      "Turning a single story idea into consistent video takes many manual steps: plot, characters, storyboard, prompts, voice and editing.",
    built:
      "A multi-agent system where 11 specialised agents (Story Architect, Character Memory, Storyboard, Prompt Director and more) are orchestrated with LangGraph, running as Celery + Redis jobs behind a FastAPI backend with WebSockets.",
    impact: "Turns one premise into a branching set of generated short films using Qwen, Wan and CosyVoice models.",
    stack: ["LangGraph", "FastAPI", "PostgreSQL", "Celery", "Redis", "Docker"],
  },
];

export type ProjectCard = {
  title: string;
  description: string;
  stack: string;
  href: string;
};

export const PROJECT_CARDS: ProjectCard[] = [
  {
    title: "LLM Evaluation Platform",
    description: "Benchmarks LLMs across providers on faithfulness, relevancy, bias and toxicity, with prompt regression tests and a blind Elo arena.",
    stack: "LiteLLM · DeepEval · FastAPI · Grafana",
    href: `${GITHUB}/llm-evaluation-platform`,
  },
  {
    title: "Data Firefighter",
    description: "An 11-node LangGraph agent that traces data incidents to a root cause and opens a fix PR after human approval.",
    stack: "LangGraph · FastAPI · Next.js",
    href: `${GITHUB}/Data-Fighter`,
  },
  {
    title: "Long-Video Activity Detection",
    description: "Finds and classifies 10 activity types (fire, falls, fights, intrusion) in long, untrimmed CCTV video.",
    stack: "YOLO11n · ByteTrack · PyTorch · OpenCV",
    href: `${GITHUB}/long-video-activity-detection`,
  },
  {
    title: "Facility Trust Desk",
    description: "Evidence-backed AI assessments of what 1,000+ healthcare facilities claim, with human review. Databricks hackathon entry.",
    stack: "OpenAI · Databricks · Streamlit",
    href: `${GITHUB}/facility-trust-desk`,
  },
  {
    title: "EchoFlow",
    description: "Low-latency voice-to-voice assistant with voice activity detection and a swappable STT → LLM → TTS pipeline.",
    stack: "FastAPI · WebSockets · Next.js",
    href: `${GITHUB}/EchoFlow`,
  },
  {
    title: "MLOps Pipelines",
    description: "DVC, Feast and MLflow pipelines with CI/CD, deployed on Kubernetes and Vertex AI. Scored 100/100 at IIT Madras.",
    stack: "MLflow · DVC · Kubernetes · Vertex AI",
    href: `${GITHUB}/23f3004013_MLOPS_WEEKLY_ASSIGNMENT`,
  },
];

export const SKILL_GROUPS: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Python", "SQL", "TypeScript", "JavaScript"] },
  { label: "Machine Learning", items: ["PyTorch", "TensorFlow / Keras", "scikit-learn", "XGBoost", "LightGBM", "OpenCV", "YOLO"] },
  { label: "LLMs & Agents", items: ["LangGraph", "LangChain", "RAG", "MCP", "OpenAI / Claude / Gemini APIs", "DeepEval"] },
  { label: "MLOps & Cloud", items: ["MLflow", "DVC", "Feast", "Docker", "Kubernetes", "GitHub Actions", "GCP Vertex AI", "AWS"] },
  { label: "Backend & Web", items: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Next.js", "React"] },
];
