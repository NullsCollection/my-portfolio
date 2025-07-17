"use client";
import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useExitAnimation } from "@/hooks/ScrollAnimation/useExitAnimation";
import { useSimulatedLoading } from "@/hooks/useLoadingState";
import { Skills } from "./Skills";
import { Achievements } from "./Achievements";

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

interface Achievement {
  number: string;
  label: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "React", level: 95, icon: "logos:react", category: "Frontend" },
  {
    name: "TypeScript",
    level: 90,
    icon: "logos:typescript-icon",
    category: "Frontend",
  },
  {
    name: "Next.js",
    level: 88,
    icon: "logos:nextjs-icon",
    category: "Frontend",
  },
  {
    name: "Node.js",
    level: 85,
    icon: "logos:nodejs-icon",
    category: "Backend",
  },
  { name: "Python", level: 80, icon: "logos:python", category: "Backend" },
  { name: "Figma", level: 92, icon: "logos:figma", category: "Design" },
  { name: "Adobe XD", level: 88, icon: "logos:adobe-xd", category: "Design" },
  {
    name: "Illustrator",
    level: 85,
    icon: "logos:adobe-illustrator",
    category: "Design",
  },
];

const achievements: Achievement[] = [
  { number: "50+", label: "Projects Completed", icon: "mdi:rocket-launch" },
  { number: "3+", label: "Years Experience", icon: "mdi:calendar-clock" },
  { number: "25+", label: "Happy Clients", icon: "mdi:account-heart" },
  { number: "100%", label: "Client Satisfaction", icon: "mdi:star" },
];

export default function AboutMe() {
  const { isLoading } = useSimulatedLoading(1000, true);
  
  const {
    sectionVariants,
    titleVariants,
    descriptionVariants,
    cardVariants,
    viewportOptions,
  } = useExitAnimation({ exitDuration: 0.5, threshold: 0.1, playOnce: false });

  return (
    <motion.section
      id="about"
      className="bg-images py-20 px-6 bg-light"
      //variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={viewportOptions}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-dark"
            variants={titleVariants}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-lg text-secondary max-w-2xl mx-auto"
            variants={descriptionVariants}
          >
            Passionate developer and designer creating digital experiences
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <motion.div variants={cardVariants}>
            <div className="space-y-6">
              <motion.h3
                className="text-2xl md:text-3xl font-bold text-dark mb-4"
                variants={titleVariants}
              >
                Hi, I'm a Creative Developer
              </motion.h3>

              <motion.p
                className="text-secondary leading-relaxed"
                variants={descriptionVariants}
              >
                I'm a passionate full-stack developer and UI/UX designer with
                over 3 years of experience creating digital solutions that
                combine beautiful design with robust functionality. I specialize
                in modern web technologies and have a keen eye for detail.
              </motion.p>

              <motion.p
                className="text-secondary leading-relaxed"
                variants={descriptionVariants}
              >
                My journey in tech started with a curiosity about how things
                work, and it has evolved into a career where I get to build
                amazing products that make a difference. I love collaborating
                with teams and turning ideas into reality.
              </motion.p>

              {/* Personal Info */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"
                variants={cardVariants}
              >
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:email" className="text-primary text-xl" />
                  <span className="text-secondary">raffy7792@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon
                    icon="mdi:map-marker"
                    className="text-primary text-xl"
                  />
                  <span className="text-secondary">Remote / Worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:phone" className="text-primary text-xl" />
                  <span className="text-secondary">Available on request</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon icon="mdi:web" className="text-primary text-xl" />
                  <span className="text-secondary">Open to opportunities</span>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div className="pt-6" variants={cardVariants}>
                <motion.button
                  className="inline-flex items-center gap-2 bg-primary text-dark font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=raffy7792@gmail.com",
                      "_blank"
                    )
                  }
                >
                  Get In Touch
                  <Icon icon="mdi:arrow-right" className="text-xl" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Profile Image & Stats */}
          <motion.div className="relative" variants={cardVariants}>
            {/* Profile Image Placeholder */}
            <div className="relative mx-auto w-80 h-80 mb-8">
              <motion.div
                className="w-full h-full bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <Icon
                  icon="mdi:account"
                  className="text-8xl text-dark opacity-50"
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-dark text-light p-3 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Icon icon="mdi:code-tags" className="text-2xl" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-primary text-dark p-3 rounded-full shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Icon icon="mdi:palette" className="text-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <Achievements
          achievements={achievements}
          isLoading={isLoading}
          sectionVariants={sectionVariants}
          cardVariants={cardVariants}
        />

        {/* Skills Section */}
        <Skills
          skills={skills}
          isLoading={isLoading}
          titleVariants={titleVariants}
          cardVariants={cardVariants}
        />
      </div>
    </motion.section>
  );
}
