import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { HourTime, SupportedLanguage } from "../types";
import zustandStorage from "./storage";

type SoundPlayerStore = {
  volume: number;
  setVolume: (s: number) => void;
};

export const useSoundPlayerStore = create<SoundPlayerStore>()(
  persist(
    (set) => ({
      volume: 1,
      setVolume: (s) => set({ volume: s }),
    }),
    {
      name: "soundPlayer-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

type LanguageStore = {
  language: SupportedLanguage | null;
  setLanguage: (s: SupportedLanguage) => void;
};

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: null,
      setLanguage: (s) => set({ language: s }),
    }),
    {
      name: "language-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

type TimetofallStore = {
  timetofall: number;
  setTimetofall: (s: number) => void;
};

export const useTimetofallStore = create<TimetofallStore>()(
  persist(
    (set) => ({
      timetofall: 15,
      setTimetofall: (s) => set({ timetofall: s }),
    }),
    {
      name: "timetofall-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);

type SleepTimeStore = {
  sleepTime: HourTime | null;
  setSleepTime: (s: HourTime) => void;
  removeSleepTime: () => void;
};

export const useSleepTimeStore = create<SleepTimeStore>()(
  persist(
    (set) => ({
      sleepTime: null,
      setSleepTime: (s) => set({ sleepTime: s }),
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

type OnboardingStore = {
  isCompleted: boolean;
  complete: () => void;
};

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

type AskReviewStore = {
  count: number;
  setCount: (s: number) => void;
  lastPrompt: number | null;
  setLastPrompt: (s: number) => void;
};

export const useAskReviewStore = create<AskReviewStore>()(
  persist(
    (set) => ({
      count: 0,
      setCount: (s) => set({ count: s++ }),
      lastPrompt: null,
      setLastPrompt: (s) => set({ lastPrompt: s }),
    }),
    {
      name: "askReview-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
