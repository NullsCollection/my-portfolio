"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Modern E-commerce Platform",
      category: "web",
      imageClass: "project-image-1",
      technologies: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      description:
        "A full-featured e-commerce platform with product filtering, cart functionality, and secure checkout.",
      link: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Brand Identity Design",
      category: "design",
      imageClass: "project-image-2",
      technologies: ["Illustrator", "Photoshop", "Figma"],
      description:
        "Complete brand identity package including logo design, color palette, typography, and brand guidelines.",
      link: "#",
      featured: true,
    },
    {
      id: 3,
      title: "Mobile Fitness App",
      category: "mobile",
      imageClass: "project-image-3",
      technologies: ["React Native", "Firebase", "Redux"],
      description:
        "Cross-platform fitness application with workout tracking, nutrition planning, and progress analytics.",
      link: "#",
      featured: false,
    },
    {
      id: 4,
      title: "Corporate Website Redesign",
      category: "web",
      imageClass: "project-image-4",
      technologies: ["WordPress", "Custom CSS", "JavaScript"],
      description:
        "Complete redesign of a corporate website focusing on improved user experience and modern aesthetics.",
      link: "#",
      featured: false,
    },
    {
      id: 5,
      title: "Product Packaging Design",
      category: "design",
      imageClass: "project-image-5",
      technologies: ["Illustrator", "Photoshop", "InDesign"],
      description:
        "Creative packaging design for a premium skincare product line with eco-friendly materials.",
      link: "#",
      featured: true,
    },
    {
      id: 6,
      title: "Restaurant Ordering System",
      category: "web",
      imageClass: "project-image-6",
      technologies: ["Vue.js", "Node.js", "MongoDB"],
      description:
        "Digital ordering system for restaurants with real-time updates, inventory management, and analytics.",
      link: "#",
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const filterOptions = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "design", label: "Graphic Design" },
    { id: "mobile", label: "Mobile Apps" },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-dark">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-light animate-slide-in-left">
            My Projects
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Explore my recent work and creative solutions
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => setActiveFilter(option.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === option.id
                  ? "bg-primary text-dark font-medium"
                  : "border border-secondary text-secondary hover:border-primary hover:text-primary"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-light rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:scale-105 animate-service-card service-delay-${
                index % 3
              }`}
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
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-primary text-dark font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg"
          >
            View All Projects
            <Icon icon="mdi:arrow-right" className="text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
}
