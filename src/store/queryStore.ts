import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

import { IGameQuery } from "@/constants";

export interface IGameQueryStore {
  gameQuery: IGameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

export const useGameQueryStore = create<IGameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("GameQuery Store", useGameQueryStore);
