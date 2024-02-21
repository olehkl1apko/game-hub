import { IGame, IGameQuery } from "@/constants";
import { useFetch } from "./useFetch";

export const useGames = (gameQuery: IGameQuery) =>
  useFetch<IGame>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sortOrder,
        search: gameQuery?.searchText,
      },
    },
    [gameQuery]
  );
