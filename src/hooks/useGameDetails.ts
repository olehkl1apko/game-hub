import { useQuery } from "@tanstack/react-query";

import { IGame } from "@/constants";
import { APIClient } from "@/config";

const apiClient = new APIClient<IGame>("/games");

export const useGameDetails = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.getById(slug),
  });
