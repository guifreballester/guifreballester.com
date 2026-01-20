export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  role: string;
  company: string;
  month: string;
  tags: string[];
  featured?: boolean;
  image?: string;
  content: string;
}

export interface CaseStudyFrontmatter {
  title: string;
  description: string;
  role: string;
  company: string;
  month: string;
  tags: string[];
  featured?: boolean;
  image?: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  description?: string;
  link?: string;
  logo?: string;
  projects?: { title: string; href: string }[];
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
}

export interface Skill {
  category: string;
  items: string[];
}
