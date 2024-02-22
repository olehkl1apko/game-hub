import { IFetchResponse, IGame, IGameQuery } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import { apiClient } from "@/config";

export const useGames = (gameQuery: IGameQuery) =>
  useQuery<IFetchResponse<IGame>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get("/games", {
          params: {
            genres: gameQuery?.genre?.id,
            parent_platforms: gameQuery?.platform?.id,
            ordering: gameQuery?.sortOrder,
            search: gameQuery?.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 60 * 1000, // once a minute
  });
