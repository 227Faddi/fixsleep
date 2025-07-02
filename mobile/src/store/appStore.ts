import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { HourTime, SupportedLanguage } from "../types";
import zustandStorage from "./storage";

type LanguageStore = {
  language: SupportedLanguage | null;
  setLanguage: (state: SupportedLanguage) => void;
};

type TimetofallStore = {
  timetofall: number;
  setTimetofall: (state: number) => void;
};

type SleepTimeStore = {
  sleepTime: HourTime | null;
  setSleepTime: (state: HourTime) => void;
  removeSleepTime: () => void;
};

type OnboardingStore = {
  isCompleted: boolean;
  complete: () => void;
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: null,
      setLanguage: (newState) => set({ language: newState }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export const useTimetofallStore = create<TimetofallStore>()(
  persist(
    (set) => ({
      timetofall: 15,
      setTimetofall: (newState) => set({ timetofall: newState }),
    }),
    {
      name: "timetofall-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

export const useSleepTimeStore = create<SleepTimeStore>()(
  persist(
    (set) => ({
      sleepTime: null,
      setSleepTime: (newState) => set({ sleepTime: newState }),
      removeSleepTime: () => {
        set({ sleepTime: null });
        zustandStorage.removeItem("sleepTime-storage");
      },
    }),
    {
      name: "sleepTime-storage",
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
