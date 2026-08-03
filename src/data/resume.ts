export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  award?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  highlights?: string[];
}

export interface SkillGroup {
  category: string;
  skills: { name: string; icon?: string; level?: number }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
}

export const resumeData = {
  personal: {
    name: "Muhammad Abdullah",
    title: "AI/ML Engineer & Full-Stack Developer",
    location: "Faisalabad, Pakistan",
    email: "abdshk28@gmail.com",
    phone: "+923066698696",
    photoUrl: "/profile.jpg",
    resumePdfUrl: "/resume.pdf",
    tagline:
      "Passionate Artificial Intelligence graduate specializing in Machine Learning, Computer Vision, and production-ready full-stack applications.",
    summary:
      "An Artificial Intelligence graduate with hands-on experience in AI, Machine Learning, Computer Vision, and full stack development. Passionate about building real-world, data-driven solutions through intelligent automation and modern technologies, with a strong focus on scalable and production-ready applications.",
    socials: {
      github: "https://github.com/Abdshk29",
      linkedin: "https://www.linkedin.com/in/muhammad-abdullah-8109a8251/",
      email: "mailto:abdshk28@gmail.com",
      phone: "tel:+923066698696",
    },
  },

  skills: [
    {
      category: "Languages",
      skills: [
        { name: "Python", level: 92 },
        { name: "TypeScript", level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
      ],
    },
    {
      category: "Frameworks & Libraries",
      skills: [
        { name: "FastAPI", level: 88 },
        { name: "Next.js", level: 90 },
        { name: "TailwindCSS", level: 92 },
        { name: "RAG Systems", level: 85 },
      ],
    },
    {
      category: "Databases & Vector DBs",
      skills: [
        { name: "PineCone", level: 85 },
        { name: "Supabase", level: 88 },
        { name: "Firebase", level: 82 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "n8n Workflow Automation", level: 90 },
        { name: "GitHub", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "Google Colab & Kaggle", level: 85 },
        { name: "Vercel", level: 90 },
      ],
    },
  ] as SkillGroup[],

  experience: [
    {
      id: "codecelix-intern",
      company: "CodeCelix",
      role: "AI Automation Intern",
      period: "Aug 2025 – Nov 2025",
      location: "Remote",
      bullets: [
        "Provided AI-powered solutions using modern tech stack for client automation workflows.",
        "Built Smart Resume Analyzer and Job Matching System using AI, Natural Language Processing (NLP), and Next.js.",
        "Engineered real-time Speech-to-Text streaming system using Streamlit and Python.",
      ],
      technologies: ["Python", "NLP", "Next.js", "Streamlit", "AI Workflows", "FastAPI"],
    },
  ] as ExperienceItem[],

  education: [
    {
      id: "ntu-bs-ai",
      institution: "National Textile University",
      degree: "Bachelor of Science in Artificial Intelligence",
      period: "Oct 2022 – July 2026",
      location: "Faisalabad, Pakistan",
      highlights: [
        "Specialization in Machine Learning, Computer Vision, and Deep Learning.",
        "Awarded 1st Position among BS Artificial Intelligence Final Year Projects for AasaanLearn.",
      ],
    },
  ] as EducationItem[],

  projects: [
    {
      id: "aasaan-learn",
      title: "AasaanLearn",
      subtitle: "Final Year Project — 1st Position Winner 🏆",
      description:
        "Developed an AI-based web application that provides customized educational material for Dyslexic, Autistic, and Visually Impaired students by transforming content according to student needs.",
      award: "Awarded 1st Position among BS AI Final Year Projects",
      tags: ["Next.js", "AI/ML", "Accessibility", "Python", "NLP", "TailwindCSS"],
      liveUrl: "https://aasaanlearn.vercel.app/",
      githubUrl: "https://github.com/Abdshk29",
      featured: true,
    },
    {
      id: "recap-ai",
      title: "RecapAI",
      subtitle: "AI Meeting Transcript & Priority Task Generator",
      description:
        "Built a full-stack AI web application allowing users to convert meeting transcripts into structured tasks and assign intelligent priorities for seamless project management.",
      tags: ["Next.js", "FastAPI", "Task Automation", "Supabase"],
      liveUrl: "https://recap-ai-three.vercel.app/",
      githubUrl: "https://github.com/Abdshk29",
      featured: true,
    },
    {
      id: "scholar-ai",
      title: "ScholarAI",
      subtitle: "Automated Scholarship Eligibility Checker",
      description:
        "Developed a scholarship Eligibility Checker that scans student CNIC and academic transcripts to return eligible active scholarship programs.",
      tags: ["Python", "OCR", "FastAPI", "AI Document Processing"],
      githubUrl: "https://github.com/Abdshk29/ScholarAI",
      featured: true,
    },
    {
      id: "flashquiz-plus",
      title: "FlashQuiz+",
      subtitle: "PDF to Smart Flashcards & Automated Quiz Engine",
      description:
        "Developed an AI-based system converting uploaded PDF documents into interactive study flashcards and automated quizzes using Retrieval-Augmented Generation (RAG).",
      tags: ["RAG Systems", "Python", "PDF Processing", "Next.js", "PineCone"],
      githubUrl: "https://github.com/Abdshk29/FlashQuizPlus",
      featured: true,
    },
  ] as Project[],

  certifications: [
    {
      id: "cert-mos",
      title: "Microsoft Office Specialist",
      issuer: "Certiport",
    },
    {
      id: "cert-n8n-1",
      title: "n8n Automation Course Level 1",
      issuer: "n8n.io",
    },
    {
      id: "cert-n8n-2",
      title: "n8n Automation Course Level 2",
      issuer: "n8n.io",
    },
  ] as Certification[],
};
