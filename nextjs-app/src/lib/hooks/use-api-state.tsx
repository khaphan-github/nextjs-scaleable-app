import { useState } from "react";

export default function useApiState<T>() {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const resetState = () => {
    setData(null);
    setError(null);
    setIsSuccess(false);
    setIsLoading(false);
  };

  return {
    data,
    error,
    isSuccess,
    isLoading,
    setData,
    setError,
    setIsSuccess,
    setIsLoading,
    resetState,
  };
}
