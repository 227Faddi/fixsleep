import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import zustandStorage from "./storage";

interface TimetofallStore {
  timetofall: number;
  setTimetofall: (state: number) => void;
}

export const useTimetofallStore = create<TimetofallStore>()(
  persist(
    (set) => ({
      timetofall: 15,
      setTimetofall: (newState: number) =>
        set((state) => ({ timetofall: newState })),
    }),
    {
      name: "timetofall-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

interface TimetofallStore {
  timetofall: number;
  setTimetofall: (state: number) => void;
}
