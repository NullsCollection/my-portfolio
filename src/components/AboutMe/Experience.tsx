"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import {
  Experience as ExperienceType,
  Education as EducationType,
} from "@/types";

interface ExperienceProps {
  experiences: ExperienceType[];
  education: EducationType[];
  cardVariants?: Variants;
}

export function Experience({
  experiences,
  education,
  cardVariants,
}: ExperienceProps) {
  return (
    <motion.div className="my-16" variants={cardVariants}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <Column
          title="Education"
          icon="mdi:school"
          items={education}
          type="education"
          variants={cardVariants}
        />

        {/* Work Experience Column */}
        <Column
          title="Work Experience"
          icon="mdi:briefcase"
          items={experiences}
          type="experience"
          variants={cardVariants}
        />
      </div>
    </motion.div>
  );
}

const Column = ({
  title,
  icon,
  items,
  type,
  variants,
}: {
  title: string;
  icon: string;
  items: (ExperienceType | EducationType)[];
  type: "education" | "experience";
  variants?: Variants;
}) => {
  return (
    <motion.div variants={variants} className="flex flex-col h-full">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center backdrop-blur-sm border border-primary/20">
          <Icon icon={icon} className="text-2xl text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-text-primary">{title}</h3>
      </div>

      <div className="relative border-l-2 border-white/10 ml-6 space-y-8 pb-4">
        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            data={item}
            type={type}
            index={index}
            variants={variants}
          />
        ))}
      </div>
    </motion.div>
  );
};

const TimelineItem = ({
  data,
  type,
  index,
  variants,
}: {
  data: ExperienceType | EducationType;
  type: "education" | "experience";
  index: number;
  variants?: Variants;
}) => {
  const isExperience = type === "experience";
  // Type guards or casting for specific fields
  const title = isExperience
    ? (data as ExperienceType).title
    : (data as EducationType).institution;
  const subtitle = isExperience
    ? (data as ExperienceType).company
    : (data as EducationType).degree;
  const skills = isExperience ? (data as ExperienceType).skills : [];
  const location = isExperience ? (data as ExperienceType).location : null;

  return (
    <motion.div
      variants={variants}
      custom={index}
      className="relative pl-8"
      whileHover={{ x: 4 }}
    >
      {/* Timeline Dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-dark border-2 border-primary shadow-[0_0_10px_rgba(1,194,178,0.5)]" />

      <div className="group relative bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 transition-all duration-300 backdrop-blur-sm">
        {/* Date Badge */}
        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-4">
          <Icon icon="mdi:calendar" />
          {data.startDate} - {data.endDate}
        </div> */}

        <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
          {title}
        </h4>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-secondary text-sm mb-3">
          <span className="font-medium text-white/80">{subtitle}</span>
          {location && (
            <span className="flex items-center gap-1">
              <Icon icon="mdi:map-marker" className="text-primary" />
              {location}
            </span>
          )}
        </div>

        {data.description && (
          <p className="text-secondary/80 text-sm leading-relaxed mb-4">
            {data.description}
          </p>
        )}

        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-md bg-white/5 text-secondary border border-white/10 hover:border-primary/30 hover:text-primary transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
