import { create } from "zustand";

export interface GameQuery {
  page?: number;
  searchText?: string;
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
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setparent_platforms: (parent_platforms) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, parent_platforms } })),
  setgenres: (genres) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genres } })),
  setordering: (ordering) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, ordering } })),
}));

export default useGameQueryStore;
