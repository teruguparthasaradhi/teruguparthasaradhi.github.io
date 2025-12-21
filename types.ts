export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  status?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: 'code' | 'layers' | 'settings' | 'database';
  colorClass: string;
}

export interface PersonalInfo {
  name: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  summary: string;
  summaryPoints: string[];
  location: string;
}