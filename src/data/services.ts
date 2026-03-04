/**
 * Services data
 * Contains service offerings and descriptions
 */

export interface ServiceData {
  icon: string;
  title: string;
  description: string;
}

export const SERVICES: ServiceData[] = [
  {
    icon: "mdi:web",
    title: "Web Development",
    description:
      "Modern, responsive web applications built with React, TypeScript, and scalable frontend architecture.",
  },
  {
    icon: "mdi:palette",
    title: "Graphic Design",
    description:
      "Creative visual solutions for branding and marketing materials",
  },
  {
    icon: "mdi:mobile-phone",
    title: "Mobile Apps",
    description:
      "Creating beautiful mobile app interfaces and seamless user experiences.",
  },
  {
    icon: "mdi:robot-outline",
    title: "Automation & Web Hosting",
    description:
      "Workflow automation and reliable web hosting setup to keep your business running smoothly and securely.",
  },
];
