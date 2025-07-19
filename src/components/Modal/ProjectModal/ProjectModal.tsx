import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Project } from "@/types";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  if (!project) return null;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
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

          {/* Modal Container */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              className="bg-dark-bg-color border border-white/10 rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h2 className="text-2xl font-bold text-light">
                  {project.title}
                </h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                >
                  <Icon icon="mdi:close" className="text-2xl text-light" />
                </button>
              </div>

              {/* Two Column Layout */}
              <div className="flex h-[calc(90vh-120px)]">
                {/* Left Column - Scrollable & Larger */}
                <div className="flex-1 lg:flex-[2] overflow-y-auto p-6 space-y-6">
                  {/* Project Image */}
                  <div className="rounded-lg overflow-hidden bg-light-bg-color">
                    <img
                      src={project.imageUrl || "src/assets/common/1.jpg"}
                      alt={project.title}
                      className="w-full h-auto object-contain max-h-[80vh]"
                    />
                  </div>

                  {/* Project Description */}
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">
                      About This Project
                    </h3>
                    <p className="text-secondary leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Additional Images/Gallery */}
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">
                      Project Gallery
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Placeholder for additional images */}
                      <div className="aspect-video rounded-lg bg-light-bg-color flex items-center justify-center">
                        <Icon
                          icon="mdi:image"
                          className="text-4xl text-secondary"
                        />
                      </div>
                      <div className="aspect-video rounded-lg bg-light-bg-color flex items-center justify-center">
                        <Icon
                          icon="mdi:image"
                          className="text-4xl text-secondary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-secondary">
                        <Icon
                          icon="mdi:check-circle"
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <span>Responsive design that works on all devices</span>
                      </li>
                      <li className="flex items-start gap-2 text-secondary">
                        <Icon
                          icon="mdi:check-circle"
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <span>Modern UI/UX with smooth animations</span>
                      </li>
                      <li className="flex items-start gap-2 text-secondary">
                        <Icon
                          icon="mdi:check-circle"
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <span>Optimized for performance and SEO</span>
                      </li>
                      <li className="flex items-start gap-2 text-secondary">
                        <Icon
                          icon="mdi:check-circle"
                          className="text-primary mt-0.5 flex-shrink-0"
                        />
                        <span>Cross-browser compatibility</span>
                      </li>
                    </ul>
                  </div>

                  {/* Development Process */}
                  <div>
                    <h3 className="text-xl font-semibold text-light mb-3">
                      Development Process
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark font-semibold text-sm">
                          1
                        </div>
                        <div>
                          <h4 className="font-medium text-light">
                            Planning & Design
                          </h4>
                          <p className="text-sm text-secondary">
                            Wireframing and UI/UX design
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark font-semibold text-sm">
                          2
                        </div>
                        <div>
                          <h4 className="font-medium text-light">
                            Development
                          </h4>
                          <p className="text-sm text-secondary">
                            Frontend implementation with modern technologies
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-dark font-semibold text-sm">
                          3
                        </div>
                        <div>
                          <h4 className="font-medium text-light">
                            Testing & Launch
                          </h4>
                          <p className="text-sm text-secondary">
                            Quality assurance and deployment
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Sticky & Smaller */}
                <div className="w-80 bg-light-bg-color border-l border-white/10 p-6 space-y-6 overflow-hidden">
                  {/* Project Info */}
                  <div>
                    <h3 className="text-lg font-semibold text-light mb-4">
                      Project Details
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-secondary">
                          Category
                        </label>
                        <p className="text-light">{project.category}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-secondary">
                          Duration
                        </label>
                        <p className="text-light">2-3 weeks</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-secondary">
                          Client
                        </label>
                        <p className="text-light">Personal Project</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-secondary">
                          Year
                        </label>
                        <p className="text-light">2024</p>
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-lg font-semibold text-light mb-4">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <a
                      href={project.demoUrl || project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-primary text-dark font-medium py-3 px-4 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                    >
                      <Icon icon="mdi:open-in-new" />
                      View Live Site
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-light-bg-color border border-white/20 text-light font-medium py-3 px-4 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                      >
                        <Icon icon="mdi:github" />
                        View Code
                      </a>
                    )}
                  </div>

                  {/* Contact CTA */}
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <h4 className="font-semibold text-light mb-2">
                      Like this project?
                    </h4>
                    <p className="text-sm text-secondary mb-3">
                      Let's discuss how I can help bring your ideas to life.
                    </p>
                    <button
                      onClick={onClose}
                      className="w-full bg-primary text-dark font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity text-sm"
                    >
                      Get In Touch
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
