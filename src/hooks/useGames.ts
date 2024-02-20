import { useEffect, useState } from "react";

import { apiClient } from "@/config";
import { IGame, IPlatform } from "@/interfaces";
import { CanceledError } from "axios";

interface FetchGames {
  count: number;
  results: IGame[];
}

export const useGames = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGames>("/games", { signal: controller.signal })
      .then(({ data }) => setGames(data.results))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};
