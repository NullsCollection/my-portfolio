"use client";
import React from "react";
import { motion } from "framer-motion";
import { SkillCard } from "./SkillCard";
import { SkillCardSkeleton } from "@/components/ui/SkeletonCard";

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

interface SkillsProps {
  skills: Skill[];
  isLoading: boolean;
  titleVariants?: any;
  cardVariants?: any;
}

export const Skills: React.FC<SkillsProps> = ({
  skills,
  isLoading,
  titleVariants,
  cardVariants,
}) => {
  return (
    <motion.div variants={cardVariants}>
      <motion.h3
        className="text-2xl md:text-3xl font-bold text-dark text-center mb-12"
        variants={titleVariants}
      >
        Skills & Technologies
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, index) => (
            <SkillCardSkeleton key={`skill-skeleton-${index}`} />
          ))
        ) : (
          skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              index={index}
              variants={cardVariants}
            />
          ))
        )}
      </div>
    </motion.div>
  );
};