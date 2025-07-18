"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { BorderBeam } from "@/components/magicui/border-beam";

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: string;
}

interface SkillCardProps {
  skill: Skill;
  index: number;
  variants?: any;
}

export const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  index,
  variants,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
      variants={variants}
      initial={{ opacity: 0, x: -50, scale: 0.9 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ 
        duration: 0.5, 
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
      <div className="flex items-center gap-3 mb-4 relative z-10">
        <Icon icon={skill.icon} className="text-3xl" />
        <div>
          <h4 className="text-light font-semibold">{skill.name}</h4>
          <p className="text-secondary text-xs">{skill.category}</p>
        </div>
      </div>

      {/* Skill Progress Bar */}
      <div className="w-full bg-secondary bg-opacity-20 rounded-full h-2 mb-2 relative z-10">
        <motion.div
          className="bg-primary h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
          viewport={{ once: false }}
        />
      </div>
      <p className="text-secondary text-xs text-right relative z-10">
        {skill.level}%
      </p>
    </motion.div>
  );
};
