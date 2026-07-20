import { useEffect, useState } from "react";

export default function useApi(apiFunction, dependencies = []) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const result = await apiFunction();

        setData(result);
      } catch (err) {
        console.error("API Error:", err);

        setError(
          err instanceof Error
            ? err
            : new Error("Something went wrong while loading data.")
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);

  return {
    data,
    isLoading,
    error,
  };
}
