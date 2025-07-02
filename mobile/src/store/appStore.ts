import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import zustandStorage from "./storage";

type TimetofallStore = {
  timetofall: number;
  setTimetofall: (state: number) => void;
};

type OnboardingStore = {
  isCompleted: boolean;
  complete: () => void;
};

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

export const useOnboardingStore = create<OnboardingStore>()(
  persist(
    (set) => ({
      isCompleted: false,
      complete: () => set({ isCompleted: true }),
    }),
    {
      name: "onboarding-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
