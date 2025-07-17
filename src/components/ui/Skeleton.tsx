import React from "react";
import { SkeletonProps } from "@/types";

/**
 * Skeleton component for loading states
 */
const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "20px",
  className = "",
  variant = "rectangular",
}) => {
  const baseClasses = "animate-pulse bg-gradient-to-r from-gray-300 to-gray-400";
  
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
    />
  );
};

export default Skeleton;