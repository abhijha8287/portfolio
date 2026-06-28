export type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: "Full-time" | "Internship";
  current: boolean;
  summary: string;
  highlights: string[];
  skills: string[];
};

export const EXPERIENCE: ExperienceEntry[] = [
  {
    id: "trackleo",
    company: "Trackleo Technologies Pvt. Ltd.",
    role: "Data Scientist",
    period: "February 2026 - Present",
    location: "Hybrid",
    type: "Full-time",
    current: true,
    summary:
      "Founding AI engineering role focused on production-grade healthcare AI, computer vision, medical imaging, and the company's first AI-powered web platform.",
    highlights: [
      "Engineered a deep learning fundus image classifier for five retinal disease classes.",
      "Partnered with the CEO to launch the company's first AI-powered web platform in under three months.",
      "Owned model experimentation, deployment workflows, and platform integration across two core AI initiatives.",
      "Applied Python, SQL, FastAPI, Docker, MLflow, CI/CD, Kubernetes, and model deployment in production workflows.",
    ],
    skills: [
      "Data Science",
      "Deep Learning",
      "Computer Vision",
      "Medical Imaging",
      "Python",
      "SQL",
      "FastAPI",
      "Docker",
      "MLflow",
      "CI/CD",
      "Kubernetes",
      "Model Deployment",
    ],
  },
  {
    id: "atliq",
    company: "AtliQ Technologies",
    role: "Virtual Data Scientist Intern",
    period: "December 2025 - January 2026",
    location: "Virtual",
    type: "Internship",
    current: false,
    summary:
      "Delivered an end-to-end image classification solution for real-time fruit freshness inspection with a Streamlit prediction interface.",
    highlights: [
      "Built a CNN and ResNet50 fruit freshness classifier with 99.8% validation accuracy.",
      "Automated manual inspection and reduced evaluation time from hours to minutes.",
      "Improved review productivity by an estimated 80% for real-time decision-making.",
      "Applied data analysis, machine learning, deep learning, GenAI, NLP, and agentic AI concepts.",
    ],
    skills: ["Data Analysis", "Machine Learning", "Deep Learning", "TensorFlow", "ResNet50", "Streamlit", "GenAI", "NLP"],
  },
  {
    id: "sgbc",
    company: "Sudha Gopalakrishnan Brain Centre, IIT Madras",
    role: "AI Developer Intern",
    period: "November 2025",
    location: "Chennai",
    type: "Internship",
    current: false,
    summary:
      "Built AI-powered medical imaging automation for 3D brain MRI visualization, analysis, and natural-language interaction in 3D Slicer.",
    highlights: [
      "Built 11 MCP tools for 3D Slicer using Python.",
      "Enabled natural-language interaction for brain MRI visualization and analysis.",
      "Reduced scan viewing, navigation, and analysis time by an estimated 60%.",
      "Worked across headless automation, Docker pipelines, FastAPI, visualization, and system integration.",
    ],
    skills: [
      "Medical Imaging",
      "3D Slicer",
      "MCP Servers",
      "Python",
      "Docker",
      "FastAPI",
      "Jupyter",
      "Image Segmentation",
      "System Integration",
    ],
  },
  {
    id: "webkaro",
    company: "Web Karo India",
    role: "AI Product Engineering Intern",
    period: "January 2025 - September 2025",
    location: "Remote",
    type: "Internship",
    current: false,
    summary:
      "Architected an AI-powered collaborative productivity platform that unified workspaces, planning tools, AI assistants, voice commands, and workflow automation.",
    highlights: [
      "Built a full-stack productivity platform with Kanban, calendars, notes, whiteboards, AI assistants, and voice commands.",
      "Unified multiple productivity tools into one product and improved task efficiency by an estimated 35%.",
      "Delivered ML pipelines, scalable backend services, API integrations, and automation features.",
    ],
    skills: ["AI Product Engineering", "Python", "Machine Learning", "Web Development", "API Integration", "Automation"],
  },
];
