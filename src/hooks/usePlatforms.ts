import { useQuery } from "@tanstack/react-query";

import { APIClient } from "@/config";
import { IPlatform } from "@/constants";
import platforms from "@/data/platforms";

const apiClient = new APIClient<IPlatform>("/platforms/list/parents");

export const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // once a month
    initialData: { count: platforms.length, results: platforms },
  });
