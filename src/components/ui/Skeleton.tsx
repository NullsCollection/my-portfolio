import React from "react";
import { SkeletonProps } from "@/types";

/**
 * Enhanced Skeleton component for loading states with shimmer effect
 */
const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "20px",
  className = "",
  variant = "rectangular",
}) => {
  const baseClasses = "relative overflow-hidden bg-gray-200 dark:bg-gray-700";
  
  const variantClasses = {
    text: "rounded-md",
    rectangular: "rounded-lg",
    circular: "rounded-full",
  };

  const style = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={style}
      role="status"
      aria-label="Loading"
    >
      {/* Enhanced shimmer effect */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent" />
      
      {/* Add shimmer keyframes to document if not already present */}
      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Skeleton;