"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  useProjectData,
  Project as MockProject,
} from "@/hooks/MockData/Projects/useProjectData";
import { useScrollAnimation } from "@/hooks/ScrollAnimation/useScrollAnimation";
import { useSimulatedLoading } from "@/hooks/ScrollAnimation/useLoadingState";
import { ProjectCardSkeleton } from "@/components/ui/SkeletonCard";
import FullScreenModal from "@/components/Modal/ProjectModal/FullScreenModal";
import { Project } from "@/types";

export default function Projects() {
  const [isClient, setIsClient] = useState(false);

  const { projects, filterOptions, activeFilter, setActiveFilter } =
    useProjectData();

  const { isLoading } = useSimulatedLoading(1000, false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: MockProject) => {
    // Find the converted project from our memoized array to maintain referential equality
    const convertedProject = convertedProjects.find(
      (p) => p.id === project.id.toString()
    );
    if (convertedProject) {
      setSelectedProject(convertedProject);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const {
    sectionVariants,
    titleVariants,
    descriptionVariants,
    cardVariants,
    viewportOptions,
  } = useScrollAnimation({
    duration: 0.8,
    threshold: 0.1,
    enableExit: true,
    exitDuration: 0.5,
    playOnce: false,
    animationType: "fade",
    direction: "up",
  });

  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  }, [projects, activeFilter]);

  // Convert all projects for modal navigation - properly memoized with stable keys
  const convertedProjects: Project[] = useMemo(() => {
    return filteredProjects.map((project) => ({
      ...project,
      id: project.id.toString(),
      // Ensure all required properties are present
      imageUrl:
        project.imageUrl || `/assets/Projects/project-${project.id}/main.jpg`,
      images: project.images || [],
    }));
  }, [filteredProjects]);

  if (!isClient) {
    return (
      <section id="projects" className="py-20 px-6 bg-dark">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-light">Loading projects...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-dark"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={viewportOptions}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-light"
            variants={titleVariants}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="text-lg text-secondary max-w-2xl mx-auto"
            variants={descriptionVariants}
          >
            Explore my recent work and creative solutions
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={viewportOptions}
        >
          {filterOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === option.id
                  ? "bg-primary text-dark font-medium"
                  : "border border-secondary text-secondary hover:border-primary hover:text-primary"
              }`}
              variants={cardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              {option.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeFilter} // Force re-animation when filter changes
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          {isLoading
            ? // Show skeleton loaders while loading
              Array.from({ length: 6 }).map((_, index) => (
                <ProjectCardSkeleton key={`skeleton-${index}`} />
              ))
            : filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="bg-light rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={viewportOptions}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  onClick={() => openModal(project)}
                >
                  <div className="relative">
                    {/* Project Image */}
                    <div
                      className={`h-56 ${project.imageClass}`}
                      style={{
                        backgroundColor: "var(--light-bg-color)", // Fallback color if image fails to load
                      }}
                    ></div>
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-primary text-dark px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="p-6 relative">
                    <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                    <h3 className="text-xl font-bold mb-2 text-light">
                      {project.title}
                    </h3>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-dark text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-secondary mb-4 text-sm">
                      {project.description}
                    </p>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project);
                      }}
                      className="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-300"
                    >
                      View Project
                      <Icon icon="mdi:arrow-right" className="ml-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          variants={descriptionVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={viewportOptions}
        >
          <Link href="/projects">
            <button className="inline-flex items-center gap-2 border border-secondary text-secondary font-medium px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:border-primary hover:text-primary">
              View All Projects
              <Icon icon="mdi:arrow-right" className="text-xl" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Enhanced Project Modal */}
      <FullScreenModal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
        projects={convertedProjects}
      />
    </motion.section>
  );
}
