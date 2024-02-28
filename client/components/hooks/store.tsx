import { create } from "zustand"

interface settingsChangedStore {
  changed: boolean;
  setChanged: (changed: boolean) => void;
}

export const useSettingsChanged = create<settingsChangedStore>((set) => ({
  changed: false,
  setChanged: () =>
    set((state: { changed: boolean }) => ({ changed: !state.changed })),
}));