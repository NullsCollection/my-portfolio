"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { BorderBeam } from "@/components/magicui/border-beam";

interface Achievement {
  number: string;
  label: string;
  icon: string;
}

interface AchievementCardProps {
  achievement: Achievement;
  variants?: any;
  index?: number;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({
  achievement,
  variants,
  index = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="text-center p-6 bg-dark rounded-lg shadow-lg relative overflow-hidden"
      variants={variants}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.05, y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {isHovered && (
        <BorderBeam
          colorFrom="#A43BFF"
          colorTo="#01c2b2"
          duration={3}
          size={100}
          borderWidth={2}
        />
      )}
      <Icon
        icon={achievement.icon}
        className="text-4xl text-primary mb-3 mx-auto relative z-10"
      />
      <h4 className="text-2xl font-bold text-light mb-2 relative z-10">
        {achievement.number}
      </h4>
      <p className="text-secondary text-sm relative z-10">
        {achievement.label}
      </p>
    </motion.div>
  );
};
