import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

interface IAuthStore {
  user: string;
  login: (username: string) => void;
  logout: () => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  user: "",
  login: (username) =>
    set(() => ({
      user: username,
    })),
  logout: () =>
    set(() => ({
      user: "",
    })),
}));

if (process.env.NODE_ENV === "development")
  mountStoreDevtool("Auth Store", useAuthStore);
