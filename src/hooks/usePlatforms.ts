import { IPlatform } from "@/interfaces";
import { useFetch } from "./useFetch";

export const usePlatforms = () =>
  useFetch<IPlatform>("/platforms/lists/parents");
