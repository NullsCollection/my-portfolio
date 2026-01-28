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
      "Modern, responsive websites built with the latest technologies",
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
    icon: "mdi:search-web",
    title: "SEO Optimization",
    description: "Improve your website's visibility and search engine rankings",
  },
];
