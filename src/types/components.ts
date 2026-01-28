import type { ReactNode } from "react";

export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

export interface SectionProps extends BaseComponentProps {
  id: string;
  title?: string;
  subtitle?: string;
}

export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
  data?: unknown;
}

export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  variant?: "text" | "rectangular" | "circular";
}
