/**
 * Skills data
 * Contains skill information and categories
 */

import { SkillCard, Experience, Specialization } from "@/types";

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
    title: "Web Designer/Developer - Freelance",
    company: "KitCode",
    employmentType: "Full-time",
    startDate: "Jan 2025",
    endDate: "Present",
    duration: "11 mos",
    description:
      "Creating responsive and user-friendly websites using React + Vite + TypeScript.",
    skills: ["Web Development", "Front-End Development"],
  },
  {
    id: "2",
    title: "Graphic Designer - Full-time",
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
    title: "Graphic Designer - Full-time",
    company: "BGK Printing Services",
    employmentType: "Full-time",
    startDate: "Aug 2021",
    endDate: "Jul 2023",
    duration: "2 yrs",
    description: "Creating printing materials and sublimation clothing design",
    skills: ["Graphic Design", "Print Design", "Sublimation"],
  },
];

export const SPECIALIZATIONS: Specialization[] = [
  {
    id: "1",
    title: "Visual & Graphic Design",
    area: "Design",
    startDate: "2019",
    endDate: "Present",
    description:
      "Adobe Illustrator expertise – creating 3D Vector-style illustrations, flat and vector illustrations, icons, and logo designs.",
    skills: [
      "Adobe Illustrator",
      "3D Vector Illustrations",
      "Vector Design",
      "Logo Design",
    ],
  },
  {
    id: "2",
    title: "UI / UX Design",
    area: "Web & Mobile Design",
    startDate: "2020",
    endDate: "Present",
    description:
      "Web & mobile UI design – designing complete web applications and mobile app interfaces using Figma. ",
    skills: ["Figma", "Web UI Design", "Mobile UI Design", "Design Systems"],
  },
  {
    id: "3",
    title: "Frontend Development",
    area: "Development",
    startDate: "2021",
    endDate: "Present",
    description:
      "Modern frontend development – building responsive interfaces using React, TypeScript, and Tailwind CSS.",
    skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    id: "4",
    title: "Technical Awareness",
    area: "Supporting Skills",
    startDate: "2022",
    endDate: "Present",
    description:
      "Backend exposure – experience working with Go for understanding APIs, data flow, and system integration. ",
    skills: ["Go", "REST APIs", "PostgreSQL"],
  },
];
