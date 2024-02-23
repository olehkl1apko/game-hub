import { useQuery } from "@tanstack/react-query";

import { IGenre } from "@/constants";
import { APIClient } from "@/config";
import genres from "@/data/genres";

const apiClient = new APIClient<IGenre>("/genres");

export const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // once a day
    initialData: genres,
  });
