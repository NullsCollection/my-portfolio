/**
 * Smooth scroll utility functions
 */

export interface ScrollOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
  offset?: number;
}

/**
 * Smooth scroll to a section with optional offset
 */
export const scrollToSection = (
  sectionId: string,
  options: ScrollOptions = {}
): void => {
  const {
    behavior = 'smooth',
    block = 'start',
    inline = 'nearest',
    offset = 0
  } = options;

  try {
    const element = document.getElementById(sectionId);
    if (!element) {
      console.warn(`Element with id "${sectionId}" not found`);
      return;
    }

    // Calculate the target position with offset
    const elementRect = element.getBoundingClientRect();
    const targetPosition = elementRect.top + window.scrollY - offset;

    // Smooth scroll to the calculated position
    window.scrollTo({
      top: targetPosition,
      behavior
    });
  } catch (error) {
    console.error('Error scrolling to section:', error);
  }
};

/**
 * Get the current active section based on scroll position
 */
export const getCurrentSection = (
  sectionIds: string[],
  offset: number = 100
): string | null => {
  const scrollPosition = window.scrollY + offset;

  for (let i = sectionIds.length - 1; i >= 0; i--) {
    const element = document.getElementById(sectionIds[i]);
    if (element && element.offsetTop <= scrollPosition) {
      return sectionIds[i];
    }
  }

  return sectionIds[0] || null;
};

/**
 * Check if an element is in the viewport
 */
export const isElementInViewport = (
  element: HTMLElement,
  threshold: number = 0
): boolean => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  return (
    rect.top >= -threshold &&
    rect.left >= -threshold &&
    rect.bottom <= windowHeight + threshold &&
    rect.right <= windowWidth + threshold
  );
};

/**
 * Throttle function to limit function calls
 */
export const throttle = <T extends (...args: any[]) => void>(
  func: T,
  limit: number
): T => {
  let inThrottle: boolean;
  return ((...args: Parameters<T>) => {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  }) as T;
};