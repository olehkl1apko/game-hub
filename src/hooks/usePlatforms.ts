import { apiClient } from "@/config";
import { IFetchResponse, IPlatform } from "@/constants";
import platforms from "@/data/platforms";
import { useQuery } from "@tanstack/react-query";

export const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<IFetchResponse<IPlatform>>("/platforms/list/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // once a month
    initialData: { count: platforms.length, results: platforms },
  });
