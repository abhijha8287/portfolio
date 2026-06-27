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
    credential: "B.S. in Data Science and Applications",
    period: "Sep 2023 – Present",
    location: "Chennai, Tamil Nadu",
    description:
      "Undergraduate degree covering data science, machine learning, deep learning, and software engineering fundamentals, awarded by India's premier engineering institute.",
  },
];

export type Certification = {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  type: "degree" | "diploma" | "certificate" | "professional";
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: "iitm-bsc-cert",
    title: "B.Sc Certificate (3rd Year)",
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
