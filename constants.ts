import { Experience, Education, Certification, SkillCategory, PersonalInfo } from './types';

export const PERSONAL_INFO: PersonalInfo = {
  name: "Parthasaradhi",
  lastName: "Terugu",
  title: "Software Engineer Master & Tech Architect",
  email: "terugup@gmail.com",
  phone: "(+91) 9392324637",
  website: "teruguparthasaradhi.github.io",
  location: "India",
  summary: "Over 7+ years of software development experience, specializing in Python architecture and design. I build and deploy robust solutions using tools like Docker, Kubernetes, AWS, GCP, and Azure Cloud.",
  summaryPoints: [
    "Expertise in building web application APIs using Python and Flask, and utility scripts for data parsing and modification via AWS Lambda and SAM CLI.",
    "Architected a custom config parser framework for payload parsing using JSON configurations.",
    "Proficient in Container management (Docker), writing Dockerfiles, and setting up automated CI/CD builds.",
    "Deep working experience in Microservice architecture and version control systems like Git.",
    "Strong knowledge in PostgreSQL and maintaining code quality via PEP8 standards.",
    "Capable of supporting and managing multiple projects simultaneously, comfortable troubleshooting, debugging, and working under pressure."
  ]
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "Java"],
    icon: "code",
    colorClass: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400"
  },
  {
    title: "Frameworks",
    skills: ["Autogen", "Langchain", "FastAPI", "Flask"],
    icon: "layers",
    colorClass: "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400"
  },
  {
    title: "CI/CD & DevOps",
    skills: ["Github Actions", "Jenkins", "Docker", "Kubernetes"],
    icon: "settings",
    colorClass: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400"
  },
  {
    title: "Data & Cloud",
    skills: ["PostgreSQL", "MongoDB", "AWS", "GCP", "Azure"],
    icon: "database",
    colorClass: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400"
  }
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    degree: "Master of Science in Computer Science",
    school: "Woolf University",
    period: "Present (Online)",
    status: "ongoing"
  },
  {
    id: "2",
    degree: "B.Tech in Electronics and Communication",
    school: "Indian Institute of Information Technology",
    period: "2013-2017"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "1",
    title: "Mathematical Thinking in CS",
    issuer: "Coursera",
    description: "Combinatorics, Probability & Graph Theory"
  },
  {
    id: "2",
    title: "CKAD Certified",
    issuer: "Udemy",
    description: "Kubernetes Certified Application Developer"
  },
  {
    id: "3",
    title: "Gold Badge for Python",
    issuer: "HackerRank"
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "Software Engineer Master (Tech Architect)",
    company: "HashedIn by Deloitte",
    period: "Aug, 2022 - Present",
    description: [
      "Working as a Tech Lead & Architect, designed and developed an accelerator composed of microservices capable of processing media content (Text, Audio, Video, Images) using Machine Learning and Generative AI.",
      "Developed platforms such as Media Assist using agentic frameworks like LangChain, AutoGen and ADK.",
      "Integration of Jenkins with Github webhooks to enable CI/CD.",
      "Integration of API gateway and Eureka into Java Microservices.",
      "Integration of Asian and Barrier Options into existing Open Source library QuantLib."
    ]
  },
  {
    id: "2",
    role: "Software Engineer",
    company: "Eka Software Solutions",
    period: "Jan, 2021 - July, 2022",
    description: [
      "Designed and developed a low-code tool using Python to refactor banking transaction data from a single input format into up to four different output formats (e.g., SWIFT, BAI).",
      "Developed and maintained Jenkins jobs for building and deploying Python, Java, and front-end services.",
      "Integrated API Gateway and Eureka service registry with Java-based microservices to enable dynamic service discovery."
    ]
  },
  {
    id: "3",
    role: "Infra Developer",
    company: "Cognizant",
    period: "May, 2018 - Jan, 2021",
    description: [
      "Designed and developed the Tool Integration and Event Handling modules for EventsEngine (Alerta OSS) as a core developer.",
      "Completed an independent project to build Config Parser — a low-code Python-based framework that converts tool payloads into EventEngine-compatible payloads using configurable JSON files.",
      "Reduced development effort by 80% and simplified client onboarding."
    ]
  },
  {
    id: "4",
    role: "Game Developer",
    company: "GoLive Gaming Solutions",
    period: "Feb, 2017 - September, 2017",
    description: [
      "Built games for both Android and iOS using Unity3D platform.",
      "Worked on multiple projects on version control through Git.",
      "Integration of third party Ad plugins like Ironsource, Tapjoy."
    ]
  }
];