/**
 * Skills data
 * Contains skill information and categories
 */

import { SkillCard, Experience, Education } from "@/types";

export const SKILLS: SkillCard[] = [
  { name: "React", level: 95, icon: "logos:react", category: "Frontend" },
  {
    name: "TypeScript",
    level: 80,
    icon: "logos:typescript-icon",
    category: "Frontend",
  },
  {
    name: "Next.js",
    level: 88,
    icon: "logos:nextjs-icon",
    category: "Frontend",
  },
  {
    name: "HTML/CSS",
    level: 90,
    icon: "devicon:html5",
    category: "Frontend",
  },
  {
    name: "Photoshop",
    level: 90,
    icon: "vscode-icons:file-type-photoshop",
    category: "Design",
  },
  { name: "Figma", level: 85, icon: "logos:figma", category: "Design" },
  {
    name: "CorelDraw",
    level: 90,
    icon: "file-icons:coreldraw-alt",
    category: "Design",
  },
  {
    name: "Illustrator",
    level: 95,
    icon: "logos:adobe-illustrator",
    category: "Design",
  },
];

export const DEVOPS_SKILLS: SkillCard[] = [
  {
    name: "Docker",
    level: 85,
    icon: "logos:docker-icon",
    category: "DevOps",
  },
  {
    name: "Git",
    level: 90,
    icon: "logos:git-icon",
    category: "DevOps",
  },
  {
    name: "Vercel",
    level: 88,
    icon: "logos:vercel-icon",
    category: "DevOps",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "1",
    title: "Web Developer     ",
    company: "KitCode",
    employmentType: "Full-time",
    startDate: "Jan 2025",
    endDate: "Present",
    duration: "11 mos",
    description:
      "Creating responsive and user-friendly websites using React and TypeScript.",
    skills: ["Web Development", "Front-End Development"],
  },
  {
    id: "2",
    title: "Graphic Designer",
    company: "Zeinous",
    employmentType: "Full-time",
    startDate: "Jul 2023",
    endDate: "Jan 2025",
    duration: "1 yr 7 mos",
    description:
      "Designing posters, banners, social media content, and seasonal-themed illustrations.",
    skills: ["Graphic Design", "Illustration", "UI/UX Design"],
  },
  {
    id: "3",
    title: "Graphic Designer",
    company: "BGK Printing Services",
    employmentType: "Full-time",
    startDate: "Aug 2021",
    endDate: "Jul 2023",
    duration: "2 yrs",
    description: "Creating printing materials and sublimation clothing design",
    skills: ["Graphic Design", "Print Design", "Sublimation"],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "1",
    institution: "Mindoro State College - Bongbong, Oriental Mindoro",
    degree: "Bachelor of Science in Information Technology",
    startDate: "2015",
    endDate: "2019",
  },
  {
    id: "2",
    institution: "Dayhagan National High School",
    degree: "Highschool",
    startDate: "2011",
    endDate: "2015",
  },
  {
    id: "3",
    institution: "Roxas Central School",
    degree: "Elementary",
    startDate: "1996",
    endDate: "2004",
  },
];
