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
  issuer: "IIT Madras" | "Codebasics" | "LinkedIn Learning" | "Hackathons";
  date: string;
  type: "degree" | "diploma" | "certificate" | "course" | "internship" | "hackathon";
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
};

// Source: LinkedIn "Licenses & certifications", newest first within each issuer.
export const CERTIFICATIONS: Certification[] = [
  { id: "iitm-bsc", title: "B.Sc. Degree (completed 3rd year of the BS)", issuer: "IIT Madras", date: "May 2026", type: "degree", credentialId: "23f3004013", skills: ["Deep Learning", "MLOps"] },
  { id: "iitm-diploma-ds", title: "Diploma in Data Science", issuer: "IIT Madras", date: "Sep 2025", type: "diploma", credentialId: "23f3004013", skills: ["Business Data Management", "Machine Learning"] },
  { id: "iitm-diploma-programming", title: "Diploma in Programming", issuer: "IIT Madras", date: "Sep 2025", type: "diploma", credentialId: "23f3004013", skills: ["Application Development"] },
  { id: "iitm-adv-cert-ml", title: "Advanced Certificate in Machine Learning and Data Science", issuer: "IIT Madras", date: "Jul 2025", type: "certificate", credentialId: "23f3004013" },
  { id: "iitm-mlt-workshop", title: "Machine Learning Techniques Workshop", issuer: "IIT Madras", date: "Feb 2025", type: "certificate", skills: ["Machine Learning Techniques", "NumPy"] },
  { id: "iitm-foundation", title: "Foundation Level Certificate (1st level of the BS)", issuer: "IIT Madras", date: "May 2024", type: "certificate", skills: ["Mathematics", "Statistics"] },

  { id: "cb-bootcamp", title: "Bootcamp Certificate", issuer: "Codebasics", date: "Jan 2026", type: "certificate", credentialId: "CB-BT-3-152114", skills: ["Python", "SQL"] },
  { id: "cb-virtual-internship", title: "Virtual Internship", issuer: "Codebasics", date: "Jan 2026", type: "internship", credentialId: "CB-VI-78-152114" },
  { id: "cb-genai-agentic", title: "Gen AI to Agentic AI with Business Projects", issuer: "Codebasics", date: "Aug 2025", type: "course", credentialId: "CB-90-152114" },
  { id: "cb-nlp", title: "Natural Language Processing", issuer: "Codebasics", date: "Aug 2025", type: "course", credentialId: "CB-89-152114" },
  { id: "cb-deep-learning", title: "Deep Learning: Beginner to Advanced", issuer: "Codebasics", date: "Aug 2025", type: "course", credentialId: "CB-85-152114" },
  { id: "cb-ml", title: "Master Machine Learning for Data Science", issuer: "Codebasics", date: "May 2025", type: "course", credentialId: "CB-69-152114", skills: ["Machine Learning Algorithms"] },
  { id: "cb-math-stats", title: "Math and Statistics for AI, Data Science", issuer: "Codebasics", date: "Mar 2025", type: "course", credentialId: "CB-63-152114", skills: ["Mathematics", "Statistics"] },
  { id: "cb-python", title: "Python: Beginner to Advanced for Data Professionals", issuer: "Codebasics", date: "Mar 2025", type: "course", credentialId: "CB-48-152114", skills: ["Python"] },
  { id: "cb-sql", title: "SQL for Data Science", issuer: "Codebasics", date: "Jan 2025", type: "course", credentialId: "CB-82-152114", skills: ["SQL"] },

  { id: "li-system-design-cloud", title: "System Design in Cloud", issuer: "LinkedIn Learning", date: "Jan 2026", type: "course", skills: ["Cloud-Native Architecture", "Computer System Design"] },
  { id: "li-lead-data-scientist", title: "How To Be a Lead Data Scientist", issuer: "LinkedIn Learning", date: "Jan 2026", type: "course", skills: ["Team Management", "Data Science"] },
  { id: "li-aspiring-data-scientist", title: "Inside the Mind of an Aspiring Data Scientist", issuer: "LinkedIn Learning", date: "Jan 2026", type: "course", skills: ["Critical Thinking", "Data Science"] },

  { id: "dshhacks-2026", title: "Hackathon Certificate (dshhacks)", issuer: "Hackathons", date: "Jul 2026", type: "hackathon", credentialId: "7M2uYrGyZN3IWpKGuw3djO", skills: ["NLP", "Artificial Intelligence"] },
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
