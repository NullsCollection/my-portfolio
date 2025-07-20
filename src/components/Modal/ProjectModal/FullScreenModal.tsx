import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { Project } from "@/types";
import { getProjectImages } from "@/utils/projectImageLoader";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  projects?: Project[];
}

const FullScreenModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
  projects = [],
}) => {
  // Initialize state first - hooks must be called unconditionally
  const initialIndex = project
    ? projects.findIndex((p) => p.id === project.id)
    : -1;
  const [currentProjectIndex, setCurrentProjectIndex] = useState(
    initialIndex >= 0 ? initialIndex : 0
  );

  // Calculate values that depend on project (with safe defaults)
  // Ensure currentProject is never null when component renders
  const currentProject =
    project && projects[currentProjectIndex]
      ? projects[currentProjectIndex]
      : project;
  const canNavigatePrev = currentProjectIndex > 0;
  const canNavigateNext = currentProjectIndex < projects.length - 1;

  // useCallback hooks - must be called unconditionally
  const handlePrevProject = useCallback(() => {
    if (canNavigatePrev) {
      setCurrentProjectIndex((prev) => prev - 1);
    }
  }, [canNavigatePrev]);

  const handleNextProject = useCallback(() => {
    if (canNavigateNext) {
      setCurrentProjectIndex((prev) => prev + 1);
    }
  }, [canNavigateNext]);

  // Reset index when project changes - prevent race conditions
  useEffect(() => {
    if (!project) return;
    const newIndex = projects.findIndex((p) => p.id === project.id);
    if (newIndex !== -1) {
      setCurrentProjectIndex(newIndex);
    }
  }, [project, projects]);

  // Keyboard navigation useEffect
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          e.preventDefault();
          handlePrevProject();
          break;
        case "ArrowRight":
          e.preventDefault();
          handleNextProject();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handlePrevProject, handleNextProject, onClose, isOpen]);

  // Early return AFTER all hooks are declared
  if (!project || !currentProject) {
    return null;
  }

  // Create array of images for the current project
  const getProjectImagesForModal = () => {
    // First check if project has custom images defined
    if (
      currentProject &&
      currentProject.images &&
      currentProject.images.length > 0
    ) {
      return currentProject.images;
    }

    // Use the dynamic image loader based on project ID
    if (currentProject) {
      const dynamicImages = getProjectImages(currentProject.id);
      if (dynamicImages.length > 0) {
        return dynamicImages;
      }
    }

    // Final fallback to project's main image or default
    return [currentProject?.imageUrl || "/assets/common/placeholder.jpg"];
  };

  const projectImages = getProjectImagesForModal();

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
    },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999]"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Modal Container - Fullscreen */}
          <motion.div
            className="fixed inset-0 z-[9999] bg-dark-bg-color overflow-hidden"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header with Navigation - Responsive */}
            <div className="flex items-center justify-between p-4 md:p-6 bg-dark-bg-color/95 backdrop-blur-sm">
              <div className="flex items-center gap-2 md:gap-4 min-w-0 flex-1">
                <h2 className="text-lg md:text-2xl font-bold text-light truncate">
                  {currentProject.title}
                </h2>
                {projects.length > 1 && (
                  <div className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-secondary whitespace-nowrap">
                    <span>{currentProjectIndex + 1}</span>
                    <span>/</span>
                    <span>{projects.length}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-1 md:gap-2">
                {/* Navigation Arrows */}
                {projects.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevProject}
                      disabled={!canNavigatePrev}
                      className="p-1.5 md:p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Previous Project (←)"
                    >
                      <Icon
                        icon="mdi:chevron-left"
                        className="text-lg md:text-xl text-light"
                      />
                    </button>
                    <button
                      onClick={handleNextProject}
                      disabled={!canNavigateNext}
                      className="p-1.5 md:p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Next Project (→)"
                    >
                      <Icon
                        icon="mdi:chevron-right"
                        className="text-lg md:text-xl text-light"
                      />
                    </button>
                  </>
                )}

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-1.5 md:p-2 hover:bg-white/10 rounded-lg transition-colors group ml-1 md:ml-2"
                  title="Close (ESC)"
                >
                  <Icon
                    icon="mdi:close"
                    className="text-lg md:text-xl text-light group-hover:text-primary transition-colors"
                  />
                </button>
              </div>
            </div>

            {/* Responsive Layout - Mobile: Stack, Desktop: Side-by-side */}
            <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)] md:h-[calc(100vh-80px)]">
              {/* Image Gallery - Full width on mobile, left column on desktop */}
              <div className="flex-1 lg:flex-[2] bg-black/20 overflow-y-auto relative h-1/2 lg:h-full">
                <div className="seamless-gallery">
                  {/* Scrollable Image Gallery */}
                  {projectImages.map((image, index) => (
                    <div
                      key={`${currentProject.id}-image-${index}`}
                      className="gallery-item"
                    >
                      <Image
                        src={image}
                        alt={`${currentProject.title} - Image ${index + 1}`}
                        width={800}
                        height={600}
                        className="gallery-image"
                        loading="lazy"
                        unoptimized={true}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "/assets/common/placeholder.jpg";
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Panel - Full width on mobile, right column on desktop */}
              <div className="w-full lg:w-96 bg-gradient-to-b from-light-bg-color to-light-bg-color/95 border-t lg:border-t-0 lg:border-l border-white/10 overflow-y-auto h-1/2 lg:h-full">
                {/* Project Header - Responsive padding */}
                <div className="p-4 md:p-6 lg:p-8 space-y-4 md:space-y-6 lg:space-y-8">
                  {/* Project Header */}
                  <div className="border-b border-white/10 pb-4 md:pb-6">
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-primary rounded-full"></div>
                      <span className="text-xs md:text-sm font-medium text-primary uppercase tracking-wider">
                        {currentProject.category}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-light mb-2 md:mb-3">
                      {currentProject.title}
                    </h3>
                    <p className="text-sm md:text-base text-secondary leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-light mb-3 md:mb-4">
                      Project Details
                    </h4>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <label className="text-xs font-medium text-secondary uppercase tracking-wider">
                          Duration
                        </label>
                        <p className="text-sm md:text-base text-light font-medium">
                          2-3 weeks
                        </p>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-secondary uppercase tracking-wider">
                          Year
                        </label>
                        <p className="text-sm md:text-base text-light font-medium">
                          2024
                        </p>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-secondary uppercase tracking-wider">
                          Client
                        </label>
                        <p className="text-sm md:text-base text-light font-medium">
                          Personal
                        </p>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-secondary uppercase tracking-wider">
                          Status
                        </label>
                        <p className="text-sm md:text-base text-primary font-medium">
                          Completed
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-light mb-3 md:mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1.5 md:gap-2">
                      {currentProject.technologies.map((tech, index) => (
                        <span
                          key={`${currentProject.id}-tech-${tech}-${index}`}
                          className="px-2 md:px-3 py-1.5 md:py-2 bg-primary/10 text-secondary text-xs md:text-sm rounded-lg border border-secondary font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default FullScreenModal;
