import { Variants } from "framer-motion";

export interface ScrollRevealVariants {
  sectionVariants: Variants;
  titleVariants: Variants;
  descriptionVariants: Variants;
  cardVariants: Variants;
  viewportOptions: {
    once: boolean;
    amount: number;
  };
}

export interface ScrollRevealOptions {
  playOnce?: boolean;
  threshold?: number;
  duration?: number;
}

/**
 * A hook that provides animation variants for elements entering the viewport
 * Elements will animate in when they enter the viewport (scroll into view)
 */
export const useScrollReveal = (options?: ScrollRevealOptions): ScrollRevealVariants => {
  const defaultOptions = {
    playOnce: true,  // By default, animations play only once
    threshold: 0.2,  // Percentage of element that needs to be visible to trigger animation
    duration: 0.6,   // Duration of animations in seconds
    ...options
  };
  // Section container variant - handles staggered children animations
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  // Title variant - slides in from left
  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: defaultOptions.duration, ease: "easeOut" },
    },
  };

  // Description variant - fades in from bottom with delay
  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: defaultOptions.duration, ease: "easeOut", delay: 0.2 },
    },
  };

  // Card variant - fades in from bottom
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: defaultOptions.duration, ease: "easeOut" },
    },
  };

  return {
    sectionVariants,
    titleVariants,
    descriptionVariants,
    cardVariants,
    viewportOptions: { 
      once: defaultOptions.playOnce, 
      amount: defaultOptions.threshold 
    }
  };
};
