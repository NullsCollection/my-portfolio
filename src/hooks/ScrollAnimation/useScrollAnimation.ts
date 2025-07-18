import { Variants } from "framer-motion";
import { ScrollRevealOptions, ScrollAnimationOptions } from "@/types";

export interface ScrollAnimationVariants {
  sectionVariants: Variants;
  titleVariants: Variants;
  descriptionVariants: Variants;
  cardVariants: Variants;
  viewportOptions: {
    once: boolean;
    amount: number;
  };
}



/**
 * Unified scroll animation hook that provides consistent animation variants
 * Combines functionality from useScrollReveal and useExitAnimation
 * 
 * @param options - Configuration options for animations
 * @returns Animation variants and viewport options
 */
export const useScrollAnimation = (options?: ScrollAnimationOptions): ScrollAnimationVariants => {
  const defaultOptions: Required<ScrollAnimationOptions> = {
    playOnce: true,
    threshold: 0.2,
    duration: 0.6,
    delay: 0,
    enableExit: false,
    exitDuration: 0.4,
    staggerDelay: 0.1,
    animationType: 'fade',
    direction: 'up',
    ...options
  };

  // Helper function to get initial transform based on direction and animation type
  const getInitialTransform = (type: string, direction: string) => {
    if (type === 'scale') return { scale: 0.8 };
    
    const transforms: Record<string, object> = {
      up: { y: 30 },
      down: { y: -30 },
      left: { x: -50 },
      right: { x: 50 }
    };
    
    return transforms[direction] || transforms.up;
  };

  // Helper function to get exit transform
  const getExitTransform = (type: string, direction: string) => {
    if (type === 'scale') return { scale: 0.8 };
    
    const transforms: Record<string, object> = {
      up: { y: 20 },
      down: { y: -20 },
      left: { x: -30 },
      right: { x: 30 }
    };
    
    return transforms[direction] || transforms.up;
  };

  // Base animation properties
  const baseVisible = {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { 
      duration: defaultOptions.duration, 
      ease: "easeOut" as const
    }
  };

  const baseHidden = {
    opacity: 0,
    ...getInitialTransform(defaultOptions.animationType, defaultOptions.direction)
  };

  const baseExit = defaultOptions.enableExit ? {
    opacity: 0,
    ...getExitTransform(defaultOptions.animationType, defaultOptions.direction),
    transition: { 
      duration: defaultOptions.exitDuration, 
      ease: "easeIn" as const
    }
  } : undefined;

  // Section container variant - handles staggered children animations
  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: defaultOptions.staggerDelay,
        delayChildren: defaultOptions.delay
      } 
    },
    ...(defaultOptions.enableExit && {
      exit: { 
        opacity: 0, 
        transition: { 
          staggerChildren: defaultOptions.staggerDelay * 0.5, 
          staggerDirection: -1,
          duration: defaultOptions.exitDuration 
        } 
      }
    })
  };

  // Title variant - customizable entrance animation
  const titleVariants: Variants = {
    hidden: baseHidden,
    visible: baseVisible,
    ...(baseExit && { exit: baseExit })
  };

  // Description variant - with slight delay
  const descriptionVariants: Variants = {
    hidden: baseHidden,
    visible: {
      ...baseVisible,
      transition: { 
        ...baseVisible.transition, 
        delay: 0.2 
      }
    },
    ...(baseExit && { 
      exit: {
        ...baseExit,
        transition: {
          ...baseExit.transition,
          delay: 0.1
        }
      }
    })
  };

  // Card variant - standard animation for card elements
  const cardVariants: Variants = {
    hidden: baseHidden,
    visible: {
      ...baseVisible,
      transition: { 
        duration: defaultOptions.duration * 0.8, 
        ease: "easeOut" 
      }
    },
    ...(baseExit && { exit: baseExit })
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

// Convenience hooks for common use cases (backward compatibility)
export const useScrollReveal = (options?: ScrollRevealOptions) => 
  useScrollAnimation({ ...options, enableExit: false });

export const useExitAnimation = (options?: ScrollAnimationOptions) => 
  useScrollAnimation({ ...options, enableExit: true, playOnce: false });

// Export the main hook as default for easier imports
export default useScrollAnimation;
