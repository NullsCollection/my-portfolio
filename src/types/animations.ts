export interface AnimationOptions {
  duration?: number;
  delay?: number;
  threshold?: number;
  playOnce?: boolean;
}

export interface ScrollRevealOptions extends AnimationOptions {
  exitDuration?: number;
}

export interface ScrollAnimationOptions extends ScrollRevealOptions {
  enableExit?: boolean;
  staggerDelay?: number;
  animationType?: "fade" | "slide" | "scale";
  direction?: "up" | "down" | "left" | "right";
}
