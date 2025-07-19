import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
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
  if (!project) return null;

  const initialIndex = projects.findIndex((p) => p.id === project.id);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(initialIndex);

  const currentProject = projects[currentProjectIndex];
  const canNavigatePrev = currentProjectIndex > 0;
  const canNavigateNext = currentProjectIndex < projects.length - 1;

  // Create array of images for the current project
  const getProjectImagesForModal = () => {
    // First check if project has custom images defined
    if (currentProject.images && currentProject.images.length > 0) {
      return currentProject.images;
    }

    // Use the dynamic image loader based on project ID
    const dynamicImages = getProjectImages(currentProject.id);

    if (dynamicImages.length > 0) {
      return dynamicImages;
    }

    // Final fallback to project's main image or default
    return [currentProject.imageUrl || "/assets/common/placeholder.jpg"];
  };

  const projectImages = getProjectImagesForModal();

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

  // Keyboard navigation
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
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]"
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
            {/* Header with Navigation */}
            <div className="flex items-center justify-between p-6 bg-dark-bg-color/95 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-bold text-light">
                  {currentProject.title}
                </h2>
                {projects.length > 1 && (
                  <div className="flex items-center gap-2 text-sm text-secondary">
                    <span>{currentProjectIndex + 1}</span>
                    <span>/</span>
                    <span>{projects.length}</span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                {/* Navigation Arrows */}
                {projects.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevProject}
                      disabled={!canNavigatePrev}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Previous Project (←)"
                    >
                      <Icon
                        icon="mdi:chevron-left"
                        className="text-xl text-light"
                      />
                    </button>
                    <button
                      onClick={handleNextProject}
                      disabled={!canNavigateNext}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      title="Next Project (→)"
                    >
                      <Icon
                        icon="mdi:chevron-right"
                        className="text-xl text-light"
                      />
                    </button>
                  </>
                )}

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors group ml-2"
                  title="Close (ESC)"
                >
                  <Icon
                    icon="mdi:close"
                    className="text-xl text-light group-hover:text-primary transition-colors"
                  />
                </button>
              </div>
            </div>

            {/* Enhanced Two Column Layout */}
            <div className="flex h-[calc(100vh-80px)]">
              {/* Left Column - Scrollable Image Gallery */}
              <div className="flex-1 lg:flex-[2] bg-black/20 overflow-y-auto relative">
                <div className="seamless-gallery">
                  {/* Scrollable Image Gallery */}
                  {projectImages.map((image, index) => (
                    <div key={index} className="gallery-item">
                      <img
                        src={image}
                        alt={`${currentProject.title} - Image ${index + 1}`}
                        className="gallery-image"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Content Panel */}
              <div className="w-96 bg-gradient-to-b from-light-bg-color to-light-bg-color/95 border-l border-white/10 overflow-y-auto">
                {/* Project Header */}
                <div className="p-8 space-y-8">
                  {/* Project Header */}
                  <div className="border-b border-white/10 pb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                      <span className="text-sm font-medium text-primary uppercase tracking-wider">
                        {currentProject.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-light mb-3">
                      {currentProject.title}
                    </h3>
                    <p className="text-secondary leading-relaxed">
                      {currentProject.description}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h4 className="text-lg font-semibold text-light mb-4">
                      Project Details
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-medium text-secondary uppercase tracking-wider">
                          Duration
                        </label>
                        <p className="text-light font-medium">2-3 weeks</p>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-secondary uppercase tracking-wider">
                          Year
                        </label>
                        <p className="text-light font-medium">2024</p>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-secondary uppercase tracking-wider">
                          Client
                        </label>
                        <p className="text-light font-medium">Personal</p>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-secondary uppercase tracking-wider">
                          Status
                        </label>
                        <p className="text-primary font-medium">Completed</p>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold text-light mb-4">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-primary/10 text-primary text-sm rounded-lg border border-primary/20 font-medium"
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
