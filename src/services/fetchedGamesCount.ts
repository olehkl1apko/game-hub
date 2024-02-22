import { IFetchResponse, IGame } from "@/constants";

export const fetchedGamesCount = (pages: IFetchResponse<IGame>[]) => {
  return pages?.reduce((total, page) => total + page.results.length, 0) || 0;
};
