import { useQuery } from "@tanstack/react-query";
import ms from "ms";

import { IGenre } from "@/constants";
import { APIClient } from "@/config";
import genres from "@/data/genres";

const apiClient = new APIClient<IGenre>("/genres");

export const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });
