import { useInfiniteQuery } from "@tanstack/react-query";

import { APIClient } from "@/config";
import { IFetchResponse, IGame, IGameQuery } from "@/constants";

const apiClient = new APIClient<IGame>("/games");

export const useGames = (gameQuery: IGameQuery) =>
  useInfiniteQuery<IFetchResponse<IGame>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000, // once a day
  });
