"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/ScrollAnimation/useScrollAnimation";

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

const projects = [
  {
    id: 1,
    title: "CYBERWIN",
    image: "/assets/Projects/GameUI/Artboard 1.png",
    rotation: -8,
  },
  {
    id: 2,
    title: "KOI88 CASINO",
    image: "/assets/Projects/Monster/Artboard 2.png",
    rotation: -4,
  },
  {
    id: 3,
    title: "LUX CASINO",
    image: "/assets/Projects/TravelPortal/Artboard 1.png",
    rotation: 4,
  },
  {
    id: 4,
    title: "BLOCK CASINO",
    image: "/assets/Projects/RealState/Artboard 1.png",
    rotation: 8,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8 px-4 mb-20">
          {projects.map((project, index) => (
            <TiltCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* 🔹 Skewed Card Component */
function TiltCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={viewportOptions}
      className="group relative"
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
    >
      {/* Skewed Card Wrapper */}
      <div className="skewed-card relative cursor-pointer shadow-2xl border border-white/10 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm">
        {/* Un-skewed Content */}
        <div className="skewed-card-content relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-fill transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
        </div>

        {/* Title */}
        <div className="skewed-card-content absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-wider drop-shadow-lg">
            {project.title}
          </h3>
          <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent mt-2 group-hover:w-full transition-all duration-500" />
        </div>

        {/* Hover border glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: "var(--gradient-secondary)" }}
          />
          <div
            className="absolute inset-0 border-2"
            style={{ borderImage: "var(--gradient-secondary) 1" }}
          />
        </div>
      </div>
    </motion.div>
  );
}
