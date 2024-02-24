import { useGenres, usePlatforms } from "@/hooks";

export enum ITypeFilter {
  GENRE = "byGenre",
  PLATFORM = "byPlatform",
}

interface IData {
  id: number;
  name: string;
}

export const findCurrentFilterById = (type: ITypeFilter, id?: number) => {
  switch (type) {
    case "byGenre":
      const { data: genres } = useGenres();
      return genres?.results.find((r: IData) => r.id === id);
    case "byPlatform":
      const { data: platforms } = usePlatforms();
      return platforms?.results.find((r: IData) => r.id === id);
    default:
      break;
  }
};
