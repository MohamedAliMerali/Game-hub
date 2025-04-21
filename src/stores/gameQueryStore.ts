import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";

export interface GameQuery {
  page?: number;
  search?: string;
  // platforms: string;
  genres?: string | null; // Todo: Why it is null?
  parent_platforms?: string;
  ordering?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setparent_platforms: (parent_platforms: string) => void;
  setgenres: (genres: string | null) => void;
  setordering: (ordering: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {} as GameQuery,
  setSearchText: (search) => set(() => ({ gameQuery: { search } })),
  setparent_platforms: (parent_platforms) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, parent_platforms } })),
  setgenres: (genres) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genres } })),
  setordering: (ordering) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, ordering } })),
}));

// todo: remove this when we are done with the devtools
mountStoreDevtool("GameQueryStore", useGameQueryStore);
// this gave us an error
// if (process.env.NODE_ENV === "development") {
// }

export default useGameQueryStore;
