/**
 * Navigation configuration
 * Contains navigation items and section IDs
 */

export const SECTION_IDS = [
  "home",
  "services",
  "projects",
  "about",
  "faq",
  "contact",
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const NAV_ITEMS = [
  { id: "home", label: "Home", href: "#home" },
  { id: "services", label: "Services", href: "#services" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "about", label: "About", href: "#about" },
  { id: "faq", label: "FAQ", href: "#faq" },
  { id: "contact", label: "Contact", href: "#contact" },
] as const;

export const NAVBAR_CONFIG = {
  scrollOffset: 80,
  scrollThreshold: 50,
  throttleDelay: 100,
  sectionDetectionOffset: 100,
} as const;
