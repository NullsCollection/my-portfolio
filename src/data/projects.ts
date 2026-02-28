/**
 * Projects data
 * Contains all project information and filter options
 */

export const PROJECT_CATEGORIES = {
  ALL: "all",
  WEB: "web",
  DESIGN: "design",
  MOBILE: "mobile",
  OTHERS: "others",
} as const;

export type ProjectCategory =
  (typeof PROJECT_CATEGORIES)[keyof typeof PROJECT_CATEGORIES];

export const PROJECT_FILTERS = [
  { id: "all", label: "All Projects" },
  { id: "web", label: "Web Development" },
  { id: "design", label: "Graphic Design" },
  { id: "mobile", label: "Mobile Apps" },
  { id: "others", label: "Others" },
];

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  imageSrc?: string;
  imageUrl?: string;
  images?: string[];
  technologies: string[];
  description: string;
  link: string[];
  featured: boolean;
  duration?: string;
  year?: string;
  client?: string;
  status?: string;
}

export const PROJECTS: ProjectData[] = [
  {
    id: 1,
    title: "Modern Game Streaming Platform",
    category: "mobile",
    imageSrc: "/assets/common/Game.png",
    technologies: ["UI/UX Design", "Mobile App", "Figma"],
    description:
      "A full-featured, next-generation Game Streaming Platform experience live streaming, real-time chat, and robust security.",
    link: ["#"],
    featured: true,
    duration: "2-3 weeks",
    year: "2024",
    client: "Personal",
    status: "Completed",
  },
  {
    id: 2,
    title: "Character Design | Moscot Design",
    category: "design",
    imageSrc: "/assets/common/Monster.png",
    technologies: ["Illustrator", "Character Design", "Vector 3D"],
    description:
      "Complete character design package including original character concepts, polished illustrations, custom color palettes, expressive poses, and ready-to-use assets.",
    link: ["#"],
    featured: true,
    duration: "1-2 weeks",
    year: "2025",
    client: "Personal",
    status: "Completed",
  },
  {
    id: 3,
    title: "Travel Portal | Web Design Solution",
    category: "web",
    imageSrc: "/assets/common/Sora-travel.png",
    technologies: ["Web Design", "UI/UX Design", "Figma"],
    description:
      "A travel portal website with a user-friendly interface, real-time flight and hotel search, and secure payment processing.                        ",
    link: ["#"],
    featured: true,
    duration: "2-3 weeks",
    year: "2024",
    client: "Confidential",
    status: "Completed",
  },
  {
    id: 4,
    title: "RRM Dev Core Landing Page | Web Design Solution",
    category: "web",
    imageSrc: "/assets/Projects/RRM/RRM.jpg",
    technologies: ["Web Development", "Next.js", "Tailwind CSS", "TypeScript"],
    description:
      "A sleek, user-friendly RRM landing page that offers different digital services, with clear call-to-actions and an inviting, mobile-optimized experience.",
    link: ["https://rrmdigitalservices.com/"],
    featured: false,
    duration: "2-3 weeks",
    year: "2025",
    client: "RRM Digital Services",
    status: "Completed",
  },
  {
    id: 5,
    title: "Custom Web Design | Christmas",
    category: "web",
    imageSrc: "/assets/common/Christmas.jpg",
    technologies: ["Web Design", "UI/UX", "Figma"],
    description:
      "A custom web design project for a holiday-themed WordPress website, with a festive color scheme and an intuitive, user-friendly interface.",
    link: ["#"],
    featured: false,
    duration: "1-2 weeks",
    year: "2024",
    client: "Personal",
    status: "Completed",
  },
  {
    id: 6,
    title: "Fully Editable Illustration | Vector Design",
    category: "design",
    imageSrc: "/assets/common/Halloween.jpg",
    technologies: ["Illustrator", "3D Vector", "Illustrations"],
    description:
      "A fully editable illustration project with a vector design, featuring detailed character models, custom color palettes, and ready-to-use assets.",
    link: ["#"],
    featured: true,
    duration: "1-2 weeks",
    year: "2024",
    client: "Personal",
    status: "Completed",
  },
  {
    id: 7,
    title: "Sonic the Hedgehog | Personal Project",
    category: "design",
    imageSrc: "/assets/Projects/Sonic/5.jpg",
    technologies: ["Illustrator", "3D Vector", "Illustrations"],
    description:
      "An Adobe Illustrator fan art piece I worked on during my free time.",
    link: ["#"],
    featured: true,
    duration: "1-2 weeks",
    year: "2025",
    client: "Personal",
    status: "Completed",
  },
  {
    id: 8,
    title: "Sepak Takraw Logo Design - Local Pilipino Team",
    category: "design",
    imageSrc: "/assets/Projects/Logo/1.jpg",
    technologies: ["Graphic Design", "Logo Design", "Vector Design"],
    description: "Sepak Takraw Logo Design - Local Pilipino Team ",
    link: ["#"],
    featured: true,
    duration: "1 week",
    year: "2025",
    client: "Mc Janver",
    status: "Completed",
  },
  {
    id: 9,
    title: " Real Estate Landing Page Design",
    category: "design",
    imageSrc: "/assets/Projects/RealState/3.png",
    technologies: ["Figma", "UI/UX", "Landing Page"],
    description:
      "A modern real estate landing page designed in Figma, created to capture leads and showcase featured properties with a clean and user-friendly layout. The design focuses on strong visual hierarchy, clear messaging, and a high-converting call-to-action.",
    link: ["#"],
    featured: true,
    duration: "2-3 weeks",
    year: "2025",
    client: "Personal",
    status: "Completed",
  },
  {
    id: 10,
    title: "n8n automations, AI agents and smart Business workflows",
    category: "others",
    imageSrc: "/assets/Projects/n8n/n8n-01.png",
    technologies: ["n8n", "Automations", "Business", "AI"],
    description:
      "A smart automation system built with n8n and AI agents to streamline business workflows, automate repetitive tasks, and improve productivity through intelligent process optimization.",
    link: ["#"],
    featured: true,
    duration: "3 - 7 days",
    year: "2026",
    client: "Personal",
    status: "Completed",
  },
];
