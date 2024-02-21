import { IPlatform } from "@/constants";
import { useFetch } from "./useFetch";

export const usePlatforms = () =>
  useFetch<IPlatform>("/platforms/lists/parents");
