import { IGenre } from "@/interfaces";
import { useFetch } from "./useFetch";

export const useGenres = () => useFetch<IGenre>("/genres");
