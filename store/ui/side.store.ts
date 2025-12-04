import { create } from "zustand";

interface ISideState {
  showSidebar: boolean;
}

interface ISideActions {
  toggleSidebar: () => void;
}

export const useSideStore = create<ISideState & ISideActions>()((set) => ({
  showSidebar: true,
  toggleSidebar: () => set((state) => ({ showSidebar: !state.showSidebar })),
}));
