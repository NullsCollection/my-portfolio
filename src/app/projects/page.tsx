"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/ScrollAnimation/useScrollAnimation";
import { useGalleryData } from "@/hooks/MockData/Projects/useGalleryData";

export default function AllProjectsPage() {
  const [isClient, setIsClient] = useState(false);
  const { images: allProjectImages, totalCount } = useGalleryData();

  const {
    sectionVariants,
    titleVariants,
    descriptionVariants,
    cardVariants,
    viewportOptions,
  } = useScrollAnimation({
    animationType: "fade",
    threshold: 0.1,
    duration: 0.6,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-light">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Header Section */}
      <motion.section
        className="py-20 px-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <div className="container mx-auto max-w-7xl">
          {/* Back Button */}
          <motion.div className="mb-8" variants={cardVariants}>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-300"
            >
              <Icon icon="mdi:arrow-left" className="text-xl" />
              Back to Portfolio
            </Link>
          </motion.div>

          {/* Page Header */}
          <div className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-light"
              variants={titleVariants}
            >
              All Projects
            </motion.h1>
            <motion.p
              className="text-lg text-secondary max-w-2xl mx-auto mb-8"
              variants={descriptionVariants}
            >
              Explore my complete collection of design work, from web
              development to graphic design and everything in between.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Pinterest-Style Gallery */}
      <motion.section
        className="px-6 pb-20"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {allProjectImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={cardVariants}
                custom={index}
                className="break-inside-avoid relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`${image.height} relative overflow-hidden rounded-lg bg-light-bg-color`}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show count */}
          <motion.div
            className="text-center mt-16"
            variants={descriptionVariants}
          >
            <p className="text-secondary">Showing {totalCount} projects</p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
