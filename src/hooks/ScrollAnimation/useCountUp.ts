import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface CountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  delay?: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

/**
 * Custom hook for animating numbers with count-up effect
 * Triggers when element comes into view
 */
export const useCountUp = (options: CountUpOptions) => {
  const {
    start = 0,
    end,
    duration = 2000,
    delay = 0,
    suffix = "",
    prefix = "",
    decimals = 0,
  } = options;

  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      // Reset count to start value when animation begins
      setCount(start);

      const startTime = Date.now() + delay;
      const startValue = start;
      const endValue = end;
      const totalChange = endValue - startValue;

      const animate = () => {
        const now = Date.now();
        const elapsed = now - startTime;

        if (elapsed < 0) {
          requestAnimationFrame(animate);
          return;
        }

        if (elapsed < duration) {
          // Easing function (ease-out)
          const progress = elapsed / duration;
          const easedProgress = 1 - Math.pow(1 - progress, 3);

          const currentValue = startValue + totalChange * easedProgress;
          setCount(currentValue);
          requestAnimationFrame(animate);
        } else {
          setCount(endValue);
        }
      };

      requestAnimationFrame(animate);
    } else {
      // Reset to start value when out of view
      setCount(start);
    }
  }, [isInView, start, end, duration, delay]);

  // Format the number
  const formatNumber = (num: number) => {
    const rounded = decimals > 0 ? num.toFixed(decimals) : Math.floor(num);
    return `${prefix}${rounded}${suffix}`;
  };

  return {
    ref,
    displayValue: formatNumber(count),
    currentValue: count,
    isAnimating: isInView && count !== end,
  };
};
