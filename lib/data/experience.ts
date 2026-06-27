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
    period: "Feb 2026 – Present",
    location: "Hybrid",
    type: "Full-time",
    current: true,
    summary:
      "As Founding AI Engineer, built a deep learning-based fundus image classification system for five retinal disease classes and collaborated directly with the CEO to design and launch the company's first AI-powered web platform.",
    highlights: [
      "Five-class retinal disease classification from fundus images",
      "Medical image processing & feature engineering pipeline",
      "Clinical decision support system design",
      "Designed and launched the company's first AI-powered web platform end-to-end",
    ],
    skills: [
      "Data Science",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Medical Imaging",
      "Python",
      "SQL",
      "FastAPI",
      "Docker",
      "MLflow",
      "CI/CD",
      "Model Deployment",
      "Kubernetes",
    ],
  },
  {
    id: "atliq",
    company: "AtliQ Technologies",
    role: "Data Scientist Intern",
    period: "Dec 2025 – Jan 2026",
    location: "Virtual",
    type: "Internship",
    current: false,
    summary:
      "Built a CNN and ResNet50-based fruit freshness classification system with a Streamlit web application, achieving 99.8% validation accuracy for real-time image-based predictions — automating manual freshness inspection and cutting evaluation time from hours to minutes.",
    highlights: [
      "99.8% validation accuracy on real-time freshness classification",
      "Reduced manual inspection time from hours to minutes",
      "End-to-end data cleaning & exploratory data analysis",
      "Predictive analytics & data visualization for stakeholders",
    ],
    skills: ["Data Analysis", "Machine Learning", "Deep Learning", "GenAI", "NLP", "Agentic AI"],
  },
  {
    id: "sgbc",
    company: "Sudha Gopalakrishnan Brain Centre, IIT Madras",
    role: "AI Developer Intern",
    period: "Nov 2025",
    location: "Chennai",
    type: "Internship",
    current: false,
    summary:
      "Built 11 MCP tools for 3D Slicer using Python, enabling natural-language interaction with brain MRI visualization and analysis — streamlining clinical research workflows by significantly reducing the time to view, navigate, and analyze brain scans.",
    highlights: [
      "11 custom MCP tools for 3D Slicer brain MRI visualization",
      "Headless medical imaging & automated image segmentation",
      "Dockerized 3D Slicer automation & volume-processing pipelines",
      "Natural-language interface over complex 3D medical imaging workflows",
    ],
    skills: [
      "Medical Imaging",
      "3D Slicer",
      "Headless Automation",
      "Python",
      "Docker",
      "MCP Servers",
      "FastAPI",
      "System Integration",
    ],
  },
  {
    id: "webkaro",
    company: "Web Karo India",
    role: "AI Product Engineering Intern",
    period: "Jan 2025 – Sep 2025",
    location: "Remote",
    type: "Internship",
    current: false,
    summary:
      "Built an AI-powered collaborative productivity platform end-to-end — workspace management, Kanban, calendars, notes, whiteboards, AI assistants, voice commands, real-time collaboration, and intelligent workflow automation in a single application.",
    highlights: [
      "Replaced multiple productivity tools with one unified AI-native platform",
      "Built real-time collaboration features and voice-command AI assistants",
      "End-to-end AI product engineering: ML, APIs, automation",
    ],
    skills: ["AI Product Engineering", "Python", "Machine Learning", "Web Development", "API Integration"],
  },
];
