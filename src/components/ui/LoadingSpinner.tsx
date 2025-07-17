import React from "react";
import { Icon } from "@iconify/react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  color?: string;
  className?: string;
}

/**
 * Loading spinner component
 */
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "medium",
  color = "var(--primary-color)",
  className = "",
}) => {
  const sizeClasses = {
    small: "text-xl",
    medium: "text-3xl",
    large: "text-5xl",
  };

  return (
    <div
      className={`flex items-center justify-center ${className}`}
      role="status"
      aria-label="Loading"
    >
      <Icon
        icon="mdi:loading"
        className={`animate-spin ${sizeClasses[size]}`}
        style={{ color }}
      />
    </div>
  );
};

export default LoadingSpinner;