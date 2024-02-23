import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import { APIClient } from "@/config";
import { IPlatform } from "@/constants";
import platforms from "@/data/platforms";

const apiClient = new APIClient<IPlatform>("/platforms/lists/parents");

export const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
