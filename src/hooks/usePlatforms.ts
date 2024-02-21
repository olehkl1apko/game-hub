// import { IPlatform } from "@/constants";
// import { useFetch } from "./useFetch";

// export const usePlatforms = () =>
//   useFetch<IPlatform>("/platforms/lists/parents");

import platforms from "@/data/platforms";

export const usePlatforms = () => ({
  data: platforms,
  isLoading: false,
  error: null,
});
