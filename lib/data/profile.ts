import { withBasePath } from "@/lib/base-path";

export const SITE = {
  name: "Abhishek Jha",
  url: "https://abhijha8287.github.io/portfolio",
  tagline: "AI Engineer, AI Web Developer, Machine Learning Engineer",
  description:
    "Abhishek Jha is an IIT Madras B.Sc graduate, AI Engineer, and AI Web Developer building production-ready AI products with LLMs, RAG, multi-agent systems, deep learning, computer vision, and full-stack web development.",
  keywords: [
    "Abhishek Jha",
    "AI Engineer",
    "AI Web Developer",
    "Machine Learning Engineer",
    "Agentic AI Developer",
    "LLM Engineer",
    "Computer Vision Engineer",
    "IIT Madras",
    "Data Scientist",
  ],
};

export const PROFILE = {
  name: "Abhishek Jha",
  initials: "AJ",
  headline: "AI Engineer • AI Web Developer • Machine Learning Engineer • Agentic AI Developer",
  shortPitch:
    "I turn data into insights, and insights into AI systems that ship across web development, machine learning, deep learning, LLMs, agentic AI, and computer vision.",
  roles: [
    "AI Engineer",
    "AI Web Developer",
    "Machine Learning Engineer",
    "Agentic AI Developer",
    "LLM Engineer",
    "Computer Vision Engineer",
    "Full-Stack AI Builder",
  ],
  location: "Delhi, India",
  secondaryLocation: "Chennai, India",
  email: "abhijha8287@gmail.com",
  phone: "+91 8287706259",
  avatar: withBasePath("/images/profile.jpg"),
  resumeUrl: withBasePath("/resume.pdf"),
  bio: [
    "I completed my B.Sc in Data Science and Applications from IIT Madras and now focus on building end-to-end AI products with Python, LLMs, RAG, multi-agent systems, deep learning, and computer vision.",
    "Currently, I work as a Data Scientist at Trackleo Technologies, where I engineered a five-class retinal disease classifier and helped launch the company's first AI-powered web platform in under three months.",
    "I care about AI that solves real problems for real people: healthcare intelligence, automation, decision support, scientific workflows, and production-ready full-stack AI tools.",
  ],
  focusAreas: [
    "Agentic AI",
    "LLMs",
    "RAG Systems",
    "AI Web Apps",
    "Computer Vision",
    "Medical Imaging",
    "MLOps",
    "Cloud AI",
    "Full-Stack AI",
  ],
  stats: [
    { value: "11", label: "MCP tools built for 3D Slicer" },
    { value: "99.8%", label: "fruit classifier validation accuracy" },
    { value: "60%", label: "faster MRI exploration workflows" },
    { value: "3 mo", label: "to launch Trackleo's AI platform" },
  ],
  goals: {
    statement:
      "To build production-scale AI systems that solve meaningful real-world problems in healthcare, finance, education, scientific research, and enterprise automation while contributing to the advancement of artificial intelligence.",
    currentlyLearning: [
      "Advanced Multi-Agent Systems",
      "AI Scientist Workflows",
      "Distributed AI Systems",
      "Production LLM Infrastructure",
      "Enterprise RAG Systems",
      "AI Evaluation Frameworks",
      "Scalable MLOps",
    ],
    priorities: [
      "Build production-scale AI products",
      "Publish open-source agentic AI frameworks",
      "Advance data-driven AI solutions",
      "Contribute to AI scientist research",
      "Share knowledge through technical blogs",
      "Contribute to impactful open-source projects",
    ],
  },
};

export const SOCIAL = {
  github: "https://github.com/abhijha8287",
  linkedin: "https://www.linkedin.com/in/abhishekjha15/",
  email: `mailto:${PROFILE.email}`,
  portfolio: SITE.url,
};

export const GITHUB_USERNAME = "abhijha8287";
