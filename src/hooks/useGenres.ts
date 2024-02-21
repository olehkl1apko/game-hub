import { useEffect, useState } from "react";

import { apiClient, CanceledError } from "@/config";
import { IGenre } from "@/interfaces";

interface FetchGenres {
  count: number;
  results: IGenre[];
}

export const useGenres = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchGenres>("/genres", { signal: controller.signal })
      .then(({ data }) => {
        setGenres(data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { genres, error, isLoading };
};
