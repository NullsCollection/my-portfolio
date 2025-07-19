/**
 * Project Image Loader Utility
 * Dynamically loads images from project folders based on project ID
 */

// Define the mapping of project IDs to their respective folders
const PROJECT_FOLDER_MAP: Record<number, string> = {
  1: "GameUI",
  2: "Monster",
  3: "TravelPortal",
  4: "RealState", // Note: folder is "RealState" not "TravelPortal" for ID 4
  5: "Christmas",
  6: "Halloween",
};

// Define known images for each project folder
const PROJECT_IMAGES: Record<string, string[]> = {
  GameUI: [
    "Artboard 1.png",
    "Artboard 2.png",
    "6.jpg",
    "Artboard 3.png",
    "Artboard 4.png",
    "Artboard 6.png",
    "Artboard 5.png",
  ],
  Monster: [
    "Artboard 1.png",
    "Artboard 8.jpg",
    "Artboard 2.png",
    "Artboard 3.png",
    "Artboard 4.png",
    "Artboard 5.png",
    "Artboard 6.png",
    "Artboard 7.png",
    "Screenshot 2025-03-05 195547.png",
  ],
  TravelPortal: ["Artboard 2.png", "Artboard 1.png", "Home Pages.png"],
  RealState: [
    "Artboard 1.png",
    "Artboard 1 copy.png",
    "Artboard 4.png",
    "Desktop-1.png",
  ],
  Christmas: ["1.jpg", "UI-Christmas.jpg"],
  Halloween: ["1.jpg", "2.jpg", "H-1.jpg", "3.jpg", "6.jpg", "7.jpg", "5.jpg"],
};

/**
 * Get images for a specific project ID
 * @param projectId - The project ID
 * @returns Array of image URLs for the project
 */
export const getProjectImages = (projectId: number | string): string[] => {
  const id = Number(projectId);
  const folderName = PROJECT_FOLDER_MAP[id];

  if (!folderName) {
    console.warn(`No folder mapping found for project ID: ${id}`);
    return [];
  }

  const images = PROJECT_IMAGES[folderName];

  if (!images || images.length === 0) {
    console.warn(`No images defined for project folder: ${folderName}`);
    return [];
  }

  // Convert to full public URLs
  return images.map(
    (imageName) => `/assets/Projects/${folderName}/${imageName}`
  );
};

/**
 * Get the folder name for a project ID
 * @param projectId - The project ID
 * @returns The folder name or null if not found
 */
export const getProjectFolder = (projectId: number | string): string | null => {
  const id = Number(projectId);
  return PROJECT_FOLDER_MAP[id] || null;
};

/**
 * Check if a project has images available
 * @param projectId - The project ID
 * @returns Boolean indicating if images are available
 */
export const hasProjectImages = (projectId: number | string): boolean => {
  const images = getProjectImages(projectId);
  return images.length > 0;
};
