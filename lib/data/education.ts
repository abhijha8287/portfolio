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
    period: "September 2023 - May 2026",
    location: "Chennai, Tamil Nadu",
    description:
      "Data science, machine learning, deep learning, programming, statistics, and software engineering coursework from IIT Madras.",
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
