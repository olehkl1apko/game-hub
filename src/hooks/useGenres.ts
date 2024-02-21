import { IGenre } from "@/constants";
import { useFetch } from "./useFetch";

export const useGenres = () => useFetch<IGenre>("/genres");
