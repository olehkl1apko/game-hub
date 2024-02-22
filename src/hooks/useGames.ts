import { useQuery } from "@tanstack/react-query";

import { APIClient } from "@/config";
import { IFetchResponse, IGame, IGameQuery } from "@/constants";

const apiClient = new APIClient<IGame>("/games");

export const useGames = (gameQuery: IGameQuery) =>
  useQuery<IFetchResponse<IGame>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery?.genre?.id,
          parent_platforms: gameQuery?.platform?.id,
          ordering: gameQuery?.sortOrder,
          search: gameQuery?.searchText,
        },
      }),
    staleTime: 60 * 1000, // once a minute
  });
