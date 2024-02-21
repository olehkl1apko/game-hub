// import { IGenre } from "@/constants";
// import { useFetch } from "./useFetch";

// export const useGenres = () => useFetch<IGenre>("/genres");

import genres from "@/data/genres";

export const useGenres = () => ({
  data: genres,
  isLoading: false,
  error: null,
});
