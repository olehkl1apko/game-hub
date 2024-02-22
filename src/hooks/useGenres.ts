import { useQuery } from "@tanstack/react-query";

import { apiClient } from "@/config";
import { IFetchResponse, IGenre } from "@/constants";
import genres from "@/data/genres";

export const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<IFetchResponse<IGenre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // once a day
    initialData: { count: genres.length, results: genres },
  });
