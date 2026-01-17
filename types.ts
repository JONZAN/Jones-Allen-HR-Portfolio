
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  link?: string;
  description?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface CVData {
  name: string;
  headline: string;
  location: string;
  email: string;
  linkedin: string;
  summary: string;
  skills: string[];
  certifications: string[];
  experience: Experience[];
  education: Education[];
}
