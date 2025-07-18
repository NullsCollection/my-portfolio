import { SkillCard, AnimatedAchievement } from "@/types";

export const skills: SkillCard[] = [
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

export const achievements: AnimatedAchievement[] = [
  {
    number: "50+",
    label: "Projects Completed",
    icon: "mdi:rocket-launch",
    value: 50,
    suffix: "+",
  },
  {
    number: "4+",
    label: "Years Experience",
    icon: "mdi:calendar-clock",
    value: 4,
    suffix: "+",
  },
  {
    number: "25+",
    label: "Happy Clients",
    icon: "mdi:account-heart",
    value: 25,
    suffix: "+",
  },
  {
    number: "150+",
    label: "Websites Redesign",
    icon: "mdi:star",
    value: 150,
    suffix: "+",
  },
];
