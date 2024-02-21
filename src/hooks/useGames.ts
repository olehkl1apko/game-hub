import { IGame } from "@/interfaces";
import { useFetch } from "./useFetch";

export const useGames = () => useFetch<IGame>("/games");
