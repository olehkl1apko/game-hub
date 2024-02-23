import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";

import { APIClient } from "@/config";
import { IFetchResponse, IGame, IGameQuery } from "@/constants";

const apiClient = new APIClient<IGame>("/games");

export const useGames = (gameQuery: IGameQuery) =>
  useInfiniteQuery<IFetchResponse<IGame>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24h"),
  });
