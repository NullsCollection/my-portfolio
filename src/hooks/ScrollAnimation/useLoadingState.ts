import { useState, useEffect, useCallback } from "react";
import { LoadingState } from "@/types";

/**
 * Custom hook for managing loading states
 */
export const useLoadingState = <T = unknown>(
  initialData?: T,
  initialLoading: boolean = false
): LoadingState & {
  setLoading: (loading: boolean) => void;
  setData: (data: T) => void;
  setError: (error: string | null) => void;
  reset: () => void;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(initialLoading);
  const [data, setData] = useState<T | undefined>(initialData);
  const [error, setError] = useState<string | null>(null);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
    if (loading) {
      setError(null);
    }
  };

  const handleSetData = (newData: T) => {
    setData(newData);
    setIsLoading(false);
    setError(null);
  };

  const handleSetError = (newError: string | null) => {
    setError(newError);
    setIsLoading(false);
  };

  const reset = () => {
    setIsLoading(initialLoading);
    setData(initialData);
    setError(null);
  };

  return {
    isLoading,
    data,
    error,
    setLoading,
    setData: handleSetData,
    setError: handleSetError,
    reset,
  };
};

/**
 * Hook for simulating loading states (useful for demos)
 */
export const useSimulatedLoading = (
  duration: number = 1000,
  autoStart: boolean = true
): LoadingState & {
  startLoading: () => void;
  stopLoading: () => void;
} => {
  const [isLoading, setIsLoading] = useState<boolean>(autoStart);
  const [data, setData] = useState<unknown>(null);
  const [error, setError] = useState<string | null>(null);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      setIsLoading(false);
      setData({ loaded: true });
    }, duration);
  }, [duration]);

  const stopLoading = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (autoStart) {
      startLoading();
    }
  }, [autoStart, startLoading]);

  return {
    isLoading,
    data,
    error,
    startLoading,
    stopLoading,
  };
};
