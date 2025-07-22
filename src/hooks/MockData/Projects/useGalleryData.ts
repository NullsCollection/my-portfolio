import { useState } from "react";

export interface GalleryImage {
  id: number;
  src: string;
  title: string;
  height: string;
}

// All project images for Pinterest-style gallery
const allProjectImages: GalleryImage[] = [
  // GameUI Project
  {
    id: 1,
    src: "/assets/Projects/Christmas/1.jpg",
    title: "Game UI Design",
    height: "h-64",
  },
  {
    id: 2,
    src: "/assets/Projects/GameUI/Artboard 1.png",
    title: "Game Interface",
    height: "h-60",
  },
  {
    id: 3,
    src: "/assets/Projects/Monster/Artboard 1.png",
    title: "Gaming Dashboard",
    height: "h-120",
  },
  {
    id: 4,
    src: "/assets/Projects/Halloween/4.jpg",
    title: "Game Menu Design",
    height: "h-50",
  },
  {
    id: 5,
    src: "/assets/Projects/RealState/Artboard 1.png",
    title: "Game HUD",
    height: "h-90",
  },
  {
    id: 6,
    src: "/assets/Projects/TravelPortal/Artboard 2.png",
    title: "Game Controls",
    height: "h-88",
  },
  {
    id: 7,
    src: "/assets/Projects/GameUI/6.jpg",
    title: "Game Interface",
    height: "h-60",
  },
  {
    id: 8,
    src: "/assets/Projects/Cats/cats_1.jpg",
    title: "Cat Design",
    height: "h-50",
  },
  {
    id: 9,
    src: "/assets/Projects/Logo/1.jpg",
    title: "Logo Design",
    height: "h-50",
  },
  {
    id: 10,
    src: "/assets/Projects/Sonic/1.jpg",
    title: "Sonic Character Design",
    height: "h-90",
  },
  {
    id: 11,
    src: "/assets/Projects/Christmas/concept-1.jpg",
    title: "Christmas Concept",
    height: "h-40",
  },
  {
    id: 12,
    src: "/assets/Projects/Christmas/mockup-2.jpg",
    title: "Christmas Mockup",
    height: "h-40",
  },
  {
    id: 13,
    src: "/assets/Projects/Christmas/concept-2.jpg",
    title: "Christmas Design",
    height: "h-40",
  },
  {
    id: 14,
    src: "/assets/Projects/Christmas/concept-1.jpg",
    title: "Holiday Branding",
    height: "h-40",
  },
  {
    id: 15,
    src: "/assets/Projects/Christmas/mockup-1.jpg",
    title: "Christmas Presentation",
    height: "h-40",
  },
  {
    id: 16,
    src: "/assets/Projects/Christmas/pfp.jpg",
    title: "Profile Design",
    height: "h-80",
  },
  {
    id: 17,
    src: "/assets/Projects/Monster/Artboard 3.png",
    title: "Monster Character",
    height: "h-50",
  },
  {
    id: 18,
    src: "/assets/Projects/TravelPortal/Artboard 1.png",
    title: "Travel Portal",
    height: "h-90",
  },
  {
    id: 19,
    src: "/assets/Projects/Sonic/7.jpg",
    title: "Sonic Character Design",
    height: "h-30",
  },
];

export const useGalleryData = () => {
  const [images] = useState<GalleryImage[]>(allProjectImages);

  return {
    images,
    totalCount: images.length,
  };
};
