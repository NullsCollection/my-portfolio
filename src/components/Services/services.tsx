"use client";
import React from "react";
import { Icon } from "@iconify/react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/ScrollAnimation/useScrollReaveal";
import { useSimulatedLoading } from "@/hooks/useLoadingState";
import { ServiceCardSkeleton } from "@/components/ui/SkeletonCard";

export default function Services() {
  const { isLoading } = useSimulatedLoading(800, true);
  
  // Get animation variants from custom hook with options
  const { 
    sectionVariants, 
    titleVariants, 
    descriptionVariants, 
    cardVariants,
    viewportOptions 
  } = useScrollReveal({
    playOnce: false,  // Animate every time element enters viewport
    threshold: 0.2,   // Trigger when 20% of element is visible
    duration: 0.7     // Animation duration in seconds
  });

  const services = [
    {
      icon: "mdi:web",
      title: "Web Development",
      description:
        "Modern, responsive websites built with the latest technologies",
    },
    {
      icon: "mdi:palette",
      title: "Graphic Design",
      description:
        "Creative visual solutions for branding and marketing materials",
    },
    {
      icon: "mdi:mobile-phone",
      title: "Mobile Apps",
      description: "Cross-platform mobile applications for iOS and Android",
    },
    {
      icon: "mdi:search-web",
      title: "SEO Optimization",
      description:
        "Improve your website's visibility and search engine rankings",
    },
  ];

  return (
    <motion.section
      id="services"
      className="py-20 px-6"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={viewportOptions}
      variants={sectionVariants}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-light"
            variants={titleVariants}
          >
            My Services
          </motion.h2>
          <motion.p
            className="text-lg text-secondary max-w-2xl mx-auto"
            variants={descriptionVariants}
          >
            I offer a range of professional services to help bring your ideas to
            life
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {isLoading ? (
            // Show skeleton loaders while loading
            Array.from({ length: 4 }).map((_, index) => (
              <ServiceCardSkeleton key={`skeleton-${index}`} />
            ))
          ) : (
            services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="text-center p-6 rounded-lg transition-all duration-300 hover:scale-105 relative"
                style={{ backgroundColor: "var(--light-bg-color)" }}
                custom={index}
              >
                <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <BorderBeam
                    colorFrom="#A43BFF"
                    colorTo="#01c2b2"
                    duration={3}
                    size={100}
                    borderWidth={2}
                  />
                </div>
                <div className="mb-4 flex justify-center">
                  <div className="text-4xl text-primary">
                    <Icon icon={service.icon} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-light">
                  {service.title}
                </h3>
                <p className="text-secondary">{service.description}</p>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </motion.section>
  );
}
