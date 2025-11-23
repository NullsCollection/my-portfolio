"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { AchievementCard } from "./AchievementCard";
import { AchievementCardSkeleton } from "@/components/ui/SkeletonCard";
import { AnimatedAchievement } from "@/types";

interface AchievementsProps {
  achievements: AnimatedAchievement[];
  isLoading: boolean;
  sectionVariants?: Variants;
  cardVariants?: Variants;
  titleVariants?: Variants;
}

export const Achievements: React.FC<AchievementsProps> = ({
  achievements,
  isLoading,
  sectionVariants,
  cardVariants,
  titleVariants,
}) => {
  return (
    <motion.div variants={sectionVariants}>
      <motion.h3
        className="text-2xl md:text-3xl font-bold text-dark text-center mb-12"
        variants={titleVariants}
      >
        Achievements
      </motion.h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <AchievementCardSkeleton key={`achievement-skeleton-${index}`} />
            ))
          : achievements.map((achievement, index) => (
              <AchievementCard
                key={index}
                achievement={achievement}
                variants={cardVariants}
              />
            ))}
      </div>
    </motion.div>
  );
};
