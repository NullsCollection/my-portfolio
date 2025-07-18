"use client";
import React from "react";
import { motion } from "framer-motion";
import { AchievementCard } from "./AchievementCard";
import { AchievementCardSkeleton } from "@/components/ui/SkeletonCard";
import { AnimatedAchievement } from "@/types";

interface AchievementsProps {
  achievements: AnimatedAchievement[];
  isLoading: boolean;
  sectionVariants?: any;
  cardVariants?: any;
}

export const Achievements: React.FC<AchievementsProps> = ({
  achievements,
  isLoading,
  sectionVariants,
  cardVariants,
}) => {
  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      variants={sectionVariants}
    >
      {isLoading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <AchievementCardSkeleton key={`achievement-skeleton-${index}`} />
        ))
      ) : (
        achievements.map((achievement, index) => (
          <AchievementCard
            key={index}
            achievement={achievement}
            variants={cardVariants}
          />
        ))
      )}
    </motion.div>
  );
};