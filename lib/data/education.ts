export type EducationEntry = {
  id: string;
  institution: string;
  credential: string;
  period: string;
  location: string;
  description?: string;
};

export const EDUCATION: EducationEntry[] = [
  {
    id: "iitm-bs",
    institution: "Indian Institute of Technology, Madras",
    credential: "BS in Data Science and Applications (4-year, final year)",
    period: "September 2023 - Expected 2027",
    location: "Chennai, Tamil Nadu",
    description:
      "Four-year BS programme at IIT Madras. Completed the B.Sc degree in May 2026 after three years and now in the fourth (BS) year. Covers data science, machine learning, deep learning, programming, statistics, MLOps, and software engineering.",
  },
];

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  type: "degree" | "diploma" | "certificate" | "professional";
  credentialUrl?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "iitm-bsc-cert",
    title: "B.Sc Degree in Data Science and Applications",
    issuer: "IIT Madras",
    date: "May 2026",
    type: "degree",
  },
  {
    id: "iitm-diploma-programming",
    title: "Diploma in Programming",
    issuer: "IIT Madras",
    type: "diploma",
  },
  {
    id: "iitm-diploma-ds",
    title: "Diploma in Data Science",
    issuer: "IIT Madras",
    type: "diploma",
  },
  {
    id: "iitm-adv-cert-ml",
    title: "Advanced Certificate in Machine Learning & Data Science",
    issuer: "IIT Madras",
    type: "certificate",
  },
  {
    id: "iitm-bootcamp",
    title: "Bootcamp Certificate",
    issuer: "IIT Madras",
    type: "certificate",
  },
  {
    id: "codebasics-sql",
    title: "SQL for Data Science",
    issuer: "Codebasics",
    type: "professional",
  },
  {
    id: "codebasics-math-stats",
    title: "Math and Statistics for AI, Data Science",
    issuer: "Codebasics",
    type: "professional",
  },
];

export const PROFESSIONAL_TOPICS = [
  "Machine Learning",
  "Deep Learning",
  "Natural Language Processing",
  "Generative AI",
  "Agentic AI",
  "Python",
  "SQL",
];
