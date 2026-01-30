export interface Project {
  id: string;
  title: string;
  description: string;
  imageClass?: string;
  imageSrc?: string;
  imageUrl?: string;
  images?: string[];
  technologies: string[];
  category: string;
  link: string[];
  featured?: boolean;
  duration?: string;
  year?: string;
  client?: string;
  status?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface ProjectFilter {
  id: string;
  label: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features?: string[];
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Design"
  | "DevOps"
  | "Mobile"
  | "Database";

export interface Skill {
  id: string;
  name: string;
  level: number;
  icon: string;
  category: SkillCategory;
}

export interface SkillCard {
  name: string;
  level: number;
  icon: string;
  category: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  employmentType: string;
  startDate: string;
  endDate: string;
  duration: string;
  location?: string;
  description?: string;
  skills: string[];
  icon?: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Specialization {
  id: string;
  title: string;
  area: string;
  startDate: string;
  endDate: string;
  description: string;
  skills?: string[];
}

export interface Achievement {
  id: string;
  number: string;
  label: string;
  icon: string;
  description?: string;
}

export interface AchievementCard {
  number: string;
  label: string;
  icon: string;
}

export interface AnimatedAchievement extends AchievementCard {
  value: number;
  suffix?: string;
  prefix?: string;
}

export interface ContactInfo {
  id: string;
  icon: string;
  label: string;
  value: string;
  link?: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

export interface ContactMethod {
  icon: string;
  action: () => void;
}

export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
  color?: string;
}
