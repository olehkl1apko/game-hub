import { useQuery } from "@tanstack/react-query";

import { APIClient } from "@/config";
import { IScreenshot } from "@/constants";

export const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<IScreenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};
