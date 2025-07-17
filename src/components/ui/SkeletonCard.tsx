import React from "react";
import Skeleton from "./Skeleton";

/**
 * Skeleton card component for project cards
 */
export const ProjectCardSkeleton: React.FC = () => {
  return (
    <div className="bg-light rounded-lg overflow-hidden shadow-lg p-6 animate-pulse">
      {/* Image skeleton */}
      <Skeleton height="224px" className="mb-4" variant="rectangular" />
      
      {/* Title skeleton */}
      <Skeleton height="24px" width="80%" className="mb-2" />
      
      {/* Technology tags skeleton */}
      <div className="flex flex-wrap gap-2 mb-3">
        <Skeleton height="20px" width="60px" variant="rectangular" />
        <Skeleton height="20px" width="80px" variant="rectangular" />
        <Skeleton height="20px" width="50px" variant="rectangular" />
      </div>
      
      {/* Description skeleton */}
      <div className="space-y-2 mb-4">
        <Skeleton height="16px" width="100%" />
        <Skeleton height="16px" width="85%" />
        <Skeleton height="16px" width="70%" />
      </div>
      
      {/* Link skeleton */}
      <Skeleton height="20px" width="100px" />
    </div>
  );
};

/**
 * Skeleton card component for service cards
 */
export const ServiceCardSkeleton: React.FC = () => {
  return (
    <div className="text-center p-6 rounded-lg bg-light-bg-color animate-pulse">
      {/* Icon skeleton */}
      <div className="mb-4 flex justify-center">
        <Skeleton height="64px" width="64px" variant="circular" />
      </div>
      
      {/* Title skeleton */}
      <Skeleton height="24px" width="70%" className="mb-2 mx-auto" />
      
      {/* Description skeleton */}
      <div className="space-y-2">
        <Skeleton height="16px" width="100%" />
        <Skeleton height="16px" width="80%" />
      </div>
    </div>
  );
};

/**
 * Skeleton card component for skill cards
 */
export const SkillCardSkeleton: React.FC = () => {
  return (
    <div className="bg-dark p-6 rounded-lg shadow-lg animate-pulse">
      {/* Icon and name skeleton */}
      <div className="flex items-center gap-3 mb-4">
        <Skeleton height="48px" width="48px" variant="circular" />
        <div className="flex-1">
          <Skeleton height="18px" width="80%" className="mb-1" />
          <Skeleton height="14px" width="60%" />
        </div>
      </div>
      
      {/* Progress bar skeleton */}
      <Skeleton height="8px" width="100%" className="mb-2" variant="rectangular" />
      <Skeleton height="12px" width="30%" className="ml-auto" />
    </div>
  );
};

/**
 * Skeleton card component for achievement cards
 */
export const AchievementCardSkeleton: React.FC = () => {
  return (
    <div className="text-center p-6 bg-dark rounded-lg shadow-lg animate-pulse">
      {/* Icon skeleton */}
      <Skeleton height="64px" width="64px" variant="circular" className="mb-3 mx-auto" />
      
      {/* Number skeleton */}
      <Skeleton height="28px" width="60px" className="mb-2 mx-auto" />
      
      {/* Label skeleton */}
      <Skeleton height="16px" width="80%" className="mx-auto" />
    </div>
  );
};