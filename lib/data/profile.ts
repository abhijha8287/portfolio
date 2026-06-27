import { withBasePath } from "@/lib/base-path";

export const SITE = {
  name: "Abhishek Jha",
  url: "https://abhishekjha.dev",
  tagline: "AI Engineer & Agentic AI Developer",
  description:
    "Abhishek Jha is an AI Engineer building production AI systems across LLMs, agentic AI, computer vision, and full-stack web development. B.S. Data Science and Applications, IIT Madras.",
  keywords: [
    "Abhishek Jha",
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM Engineer",
    "Agentic AI Developer",
    "Computer Vision Engineer",
    "IIT Madras",
    "Data Scientist",
  ],
};

export const PROFILE = {
  name: "Abhishek Jha",
  initials: "AJ",
  roles: [
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM Engineer",
    "Agentic AI Developer",
    "Computer Vision Engineer",
    "Production AI Builder",
  ],
  location: "New Delhi, India",
  secondaryLocation: "Chennai, India",
  email: "abhijha8287@gmail.com",
  phone: "+91 8287706259",
  avatar: withBasePath("/images/profile.jpg"),
  resumeUrl: withBasePath("/resume.pdf"),
  bio: [
    "I turn data into insights — and insights into AI systems that actually ship, not demo-only AI. I work across AI engineering, web development, machine learning, and agentic AI.",
    "Currently a Data Scientist at Trackleo Technologies, where I'm building the company's first production AI-powered platform from the ground up. Before that, I built medical imaging tools at IIT Madras's Sudha Gopalakrishnan Brain Centre, computer vision systems as an intern at AtliQ Technologies, and an AI-powered productivity platform at Web Karo India.",
    "I care about AI that solves real problems for real people — not AI that just looks good in a demo.",
  ],
  focusAreas: [
    "Agentic AI",
    "LLMs",
    "Web Development",
    "Computer Vision",
    "Machine Learning",
    "MLOps",
    "Cloud AI",
    "Full Stack AI",
  ],
  goals: {
    statement:
      "To build production-scale AI systems that solve meaningful real-world problems in Healthcare, Finance, Education, Scientific Research, and Enterprise Automation — while contributing to the advancement of Artificial Intelligence.",
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
      "Publish open-source Agentic AI frameworks",
      "Advance data-driven AI solutions",
      "Contribute to AI Scientist research",
      "Share knowledge through technical blogs",
      "Contribute to impactful open-source projects",
    ],
  },
};

export const SOCIAL = {
  github: "https://github.com/abhijha8287",
  linkedin: "https://www.linkedin.com/in/abhishekjha15/",
  email: `mailto:${PROFILE.email}`,
};

export const GITHUB_USERNAME = "abhijha8287";
