/**
 * Common TypeScript type definitions for the portfolio application
 */

// Navigation Types
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ScrollOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
  offset?: number;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  imageClass: string;
  imageUrl?: string;
  images?: string[];
  technologies: string[];
  category: string;
  link: string;
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
}

export interface ProjectFilter {
  id: string;
  label: string;
}

// Service Types
export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features?: string[];
}

// Skill Types
export interface Skill {
  id: string;
  name: string;
  level: number;
  icon: string;
  category: SkillCategory;
}

// Legacy type alias for backward compatibility
export interface SkillCard {
  name: string;
  level: number;
  icon: string;
  category: string;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Design"
  | "DevOps"
  | "Mobile"
  | "Database";

// Achievement Types
export interface Achievement {
  id: string;
  number: string;
  label: string;
  icon: string;
  description?: string;
}

// Legacy type alias for backward compatibility
export interface AchievementCard {
  number: string;
  label: string;
  icon: string;
}

// Enhanced achievement type with animation data
export interface AnimatedAchievement extends AchievementCard {
  value: number;
  suffix?: string;
  prefix?: string;
}

// Contact Types
export interface ContactInfo {
  id: string;
  icon: string;
  label: string;
  value: string;
  link?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
//FAQ Types
export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

//Contact types
export interface ContactMethod {
  icon: string;
  action: () => void;
}

// Social Media Types
export interface SocialLink {
  id: string;
  name: string;
  icon: string;
  url: string;
  color?: string;
}

// Animation Types
export interface AnimationOptions {
  duration?: number;
  delay?: number;
  threshold?: number;
  playOnce?: boolean;
}

export interface ScrollRevealOptions extends AnimationOptions {
  exitDuration?: number;
}

export interface ScrollAnimationOptions extends ScrollRevealOptions {
  enableExit?: boolean;
  staggerDelay?: number;
  animationType?: "fade" | "slide" | "scale";
  direction?: "up" | "down" | "left" | "right";
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  id: string;
  title?: string;
  subtitle?: string;
}

// Loading States
export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
  data?: unknown;
}

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  variant?: "text" | "rectangular" | "circular";
}

// Form Types
export interface FormFieldProps {
  name: string;
  label: string;
  type?: "text" | "email" | "textarea" | "select";
  placeholder?: string;
  required?: boolean;
  options?: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export interface FormValidationRules {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  email?: boolean;
}

// API Response Types
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Theme Types
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    error: string;
    success: string;
    warning: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

// Utility Types
export type Maybe<T> = T | null | undefined;
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;
