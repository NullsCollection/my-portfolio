import { Variants } from "framer-motion";

export interface ExitAnimationVariants {
  sectionVariants: Variants;
  titleVariants: Variants;
  descriptionVariants: Variants;
  cardVariants: Variants;
  viewportOptions: {
    once: boolean;
    amount: number;
  };
}

export interface ExitAnimationOptions {
  playOnce?: boolean;
  threshold?: number;
  exitDuration?: number;
}

/**
 * A hook that provides animation variants for elements exiting the viewport
 * Elements will animate out when they leave the viewport (scroll up/out)
 */
export const useExitAnimation = (options?: ExitAnimationOptions): ExitAnimationVariants => {
  const defaultOptions = {
    playOnce: false, // By default, animations play every time element enters/exits viewport
    threshold: 0.2,  // Percentage of element that needs to be visible to trigger animation
    exitDuration: 0.4, // Duration of exit animations in seconds
    ...options
  };

  // Section container variant - handles staggered children animations
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { 
      opacity: 0, 
      transition: { 
        staggerChildren: 0.05, 
        staggerDirection: -1, // Reverse stagger order for exit
        duration: defaultOptions.exitDuration 
      } 
    }
  };

  // Title variant - slides out to left
  const titleVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: -30,
      transition: { duration: defaultOptions.exitDuration, ease: "easeIn" },
    }
  };

  // Description variant - fades out to bottom
  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: defaultOptions.exitDuration, ease: "easeIn" },
    }
  };

  // Card variant - fades out to bottom
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: defaultOptions.exitDuration, ease: "easeIn" },
    }
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
