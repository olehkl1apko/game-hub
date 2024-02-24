import { useQuery } from "@tanstack/react-query";

import { APIClient } from "@/config";
import { ITrailer } from "@/constants";

export const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<ITrailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["trailers", gameId],
    queryFn: apiClient.getAll,
  });
};
