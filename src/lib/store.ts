import { create } from "zustand";

type StoreState = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

export const useAppStore = create<StoreState>((set) => ({
  isSidebarOpen: true,
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
