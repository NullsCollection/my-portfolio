import { useState, useMemo } from "react";

export interface Project {
  id: number;
  title: string;
  category: string;
  imageClass: string;
  technologies: string[];
  description: string;
  link: string;
  featured: boolean;
}

export interface FilterOption {
  id: string;
  label: string;
}

const mockProjects: Project[] = [
  {
    id: 1,
    title: "Modern Game Streaming Platform",
    category: "mobile",
    imageClass: "project-image-1",
    technologies: ["UI/UX Design", "Mobile App", "Figma"],
    description:
      "A full-featured, next-generation Game Streaming Platform experience live streaming, real-time chat, and robust security.",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Character Design | Moscot Design",
    category: "design",
    imageClass: "project-image-2",
    technologies: ["Illustrator", "Character Design", "Vector 3D"],
    description:
      "Complete character design package including original character concepts, polished illustrations, custom color palettes, expressive poses, and ready-to-use assets.",
    link: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Travel Portal | Web Design Solution",
    category: "web",
    imageClass: "project-image-4",
    technologies: ["Web Design", "UI/UX Design", "Figma"],
    description:
      "A travel portal website with a user-friendly interface, real-time flight and hotel search, and secure payment processing.                        ",
    link: "#",
    featured: false,
  },
  {
    id: 3,
    title: "Realstate Landing Page | Web Design Solution",
    category: "web",
    imageClass: "project-image-3",
    technologies: ["Web Design", "UI/UX Design", "Figma"],
    description:
      "A sleek, user-friendly real estate landing page designed for effortless property discovery, with clear call-to-actions and an inviting, mobile-optimized experience.",
    link: "#",
    featured: false,
  },

  {
    id: 5,
    title: "Custom Web Design | Christmas",
    category: "web",
    imageClass: "project-image-5",
    technologies: ["Web Design", "UI/UX", "Figma"],
    description:
      "A custom web design project for a holiday-themed WordPress website, with a festive color scheme and an intuitive, user-friendly interface.",
    link: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Fully Editable Illustration | Vector Design",
    category: "design",
    imageClass: "project-image-6",
    technologies: ["Illustrator", "3D Vector", "Illustrations"],
    description:
      "A fully editable illustration project with a vector design, featuring detailed character models, custom color palettes, and ready-to-use assets.",
    link: "#",
    featured: false,
  },
];

const filterOptions: FilterOption[] = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "design", label: "Graphic Design" },
  { id: "mobile", label: "Mobile Apps" },
];

export const useProjectData = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return {
    projects: mockProjects,
    filterOptions,
    activeFilter,
    setActiveFilter,
  };
};
