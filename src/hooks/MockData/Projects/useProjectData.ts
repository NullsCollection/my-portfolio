import { useEffect, useState } from "react";
import { Project as ProjectType, ProjectFilter } from "@/types";

export interface Project extends Omit<ProjectType, "id"> {
  id: number;
}

export type FilterOption = ProjectFilter;

const mockProjects: Project[] = [
  {
    id: 1,
    title: "Modern Game Streaming Platform",
    category: "mobile",
    imageClass: "project-image-1",
    technologies: ["UI/UX Design", "Mobile App", "Figma"],
    description:
      "A full-featured, next-generation Game Streaming Platform experience live streaming, real-time chat, and robust security.",
    link: ["#"],
    featured: true,
  },
  {
    id: 2,
    title: "Character Design | Moscot Design",
    category: "design",
    imageClass: "project-image-1",
    technologies: ["Illustrator", "Character Design", "Vector 3D"],
    description:
      "Complete character design package including original character concepts, polished illustrations, custom color palettes, expressive poses, and ready-to-use assets.",
    link: ["#"],
    featured: true,
  },
  {
    id: 3,
    title: "Travel Portal | Web Design Solution",
    category: "web",
    imageClass: "project-image-1",
    technologies: ["Web Design", "UI/UX Design", "Figma"],
    description:
      "A travel portal website with a user-friendly interface, real-time flight and hotel search, and secure payment processing.                        ",
    link: ["#"],
    featured: false,
  },
  {
    id: 4,
    title: "RRM Dev Core Landing Page | Web Design Solution",
    category: "web",
    imageClass: "project-image-1",
    technologies: ["Web Development", "Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "A sleek, user-friendly RRM landing page that offers different digital services, with clear call-to-actions and an inviting, mobile-optimized experience.",
    link: ["https://rrmdigitalservices.com/"],
    featured: false,
  },

  {
    id: 5,
    title: "Custom Web Design | Christmas",
    category: "web",
    imageClass: "project-image-1",
    technologies: ["Web Design", "UI/UX", "Figma"],
    description:
      "A custom web design project for a holiday-themed WordPress website, with a festive color scheme and an intuitive, user-friendly interface.",
    link: ["#"],
    featured: false,
  },
  {
    id: 6,
    title: "Fully Editable Illustration | Vector Design",
    category: "design",
    imageClass: "project-image-1",
    technologies: ["Illustrator", "3D Vector", "Illustrations"],
    description:
      "A fully editable illustration project with a vector design, featuring detailed character models, custom color palettes, and ready-to-use assets.",
    link: ["#"],
    featured: false,
  },
];

const filterOptions: FilterOption[] = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "design", label: "Graphic Design" },
  { id: "mobile", label: "Mobile Apps" },
];

export interface UseProjectDataReturn {
  projects: Project[];
  filterOptions: FilterOption[];
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export const useProjectData = (): UseProjectDataReturn => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [projects, setProjects] = useState<Project[]>([]);

  const baseURL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${baseURL}/projects`);
        if (!res.ok) {
          console.error("Failed to fetch projects", res.status);
          return;
        }

        const data = await res.json();

        const mapped: Project[] = (Array.isArray(data) ? data : []).map(
          (p: any) => ({
            id: p.id,
            title: p.title,
            description: p.description ?? "",
            imageClass: p.imageClass ?? "",
            imageUrl: p.imageUrl,
            images: Array.isArray(p.imagesUrl)
              ? p.imagesUrl
              : Array.isArray(p.images)
              ? p.images
              : [],
            technologies: Array.isArray(p.technologies) ? p.technologies : [],
            category: p.category ?? "all",
            link: Array.isArray(p.link) ? p.link : [],
            featured: Boolean(p.featured),
            githubUrl: p.githubUrl,
            demoUrl: p.demoUrl,
            thumbnail: p.thumbnail,
          })
        );

        setProjects(mapped);
      } catch (err) {
        console.error("Error fetching projects", err);
      }
    };

    fetchProjects();
  }, []);

  return {
    projects: projects.length > 0 ? projects : mockProjects,
    filterOptions,
    activeFilter,
    setActiveFilter,
  };
};
