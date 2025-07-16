"use client";
import React, { useMemo } from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useProjectData } from "@/hooks/MockData/Projects/useProjectData";
import { useScrollReveal } from "@/hooks/ScrollAnimation/useScrollReaveal";
import { useExitAnimation } from "@/hooks/ScrollAnimation/useExitAnimation";

export default function Projects() {
  const { projects, filterOptions, activeFilter, setActiveFilter } =
    useProjectData();

  const {
    sectionVariants,
    titleVariants,
    descriptionVariants,
    cardVariants,
    viewportOptions,
  } = useScrollReveal({ duration: 0.8, threshold: 0.1 });

  const {
    sectionVariants: exitSectionVariants,
    titleVariants: exitTitleVariants,
    descriptionVariants: exitDescriptionVariants,
    cardVariants: exitCardVariants,
    viewportOptions: exitViewportOptions,
  } = useExitAnimation({ exitDuration: 0.5, threshold: 0.1, playOnce: false });

  const filteredProjects = useMemo(() => {
    return activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  }, [projects, activeFilter]);

  return (
    <motion.section
      id="projects"
      className="py-20 px-6 bg-dark"
      variants={exitSectionVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={exitViewportOptions}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-light"
            variants={exitTitleVariants}
          >
            My Projects
          </motion.h2>
          <motion.p
            className="text-lg text-secondary max-w-2xl mx-auto"
            variants={exitDescriptionVariants}
          >
            Explore my recent work and creative solutions
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={exitSectionVariants}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={exitViewportOptions}
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
              variants={exitCardVariants}
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
          variants={exitSectionVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-light rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              variants={exitCardVariants}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
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

                <a
                  href={project.link}
                  className="inline-flex items-center text-primary hover:text-primary-light transition-colors duration-300"
                >
                  View Project
                  <Icon icon="mdi:arrow-right" className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          className="text-center mt-12"
          variants={exitDescriptionVariants}
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-secondary text-secondary font-medium px-8 py-3 rounded-lg hover:scale-105 transition-all duration-300 shadow-lg"
          >
            View All Projects
            <Icon icon="mdi:arrow-right" className="text-xl" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
