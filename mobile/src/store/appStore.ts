import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Alarm, SleepTime, SupportedLanguage } from "../types";
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
  sleepTime: SleepTime | null;
  setSleepTime: (s: SleepTime) => void;
  changeStatus: (notificationId?: string) => void;
};

export const useSleepTimeStore = create<SleepTimeStore>()(
  persist(
    (set, get) => ({
      sleepTime: null,
      setSleepTime: (s) => set({ sleepTime: s }),
      changeStatus: (notificationId) => {
        const current = get().sleepTime;
        if (current) {
          set({
            sleepTime: {
              ...current,
              notificationId: notificationId || current.notificationId,
              isEnabled: !(current.isEnabled ?? true),
            },
          });
        }
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

type AlarmStore = {
  alarms: Alarm[];
  addAlarm: (newAlarm: Alarm) => boolean;
  updateAlarm: (updatedAlarm: Alarm) => void;
  removeAlarm: (alarmId: string) => void;
};

export const useAlarmStore = create<AlarmStore>()(
  persist(
    (set, get) => ({
      alarms: [],
      addAlarm: (newAlarm) => {
        if (get().alarms.length >= 10) {
          return false;
        }
        set({ alarms: [...get().alarms, newAlarm] });
        return true;
      },
      updateAlarm: (updatedAlarm) =>
        set({
          alarms: get().alarms.map((alarm) =>
            alarm.notificationId === updatedAlarm.notificationId
              ? updatedAlarm
              : alarm
          ),
        }),
      removeAlarm: (alarmId) =>
        set({
          alarms: get().alarms.filter(
            (alarm) => alarm.notificationId !== alarmId
          ),
        }),
    }),
    {
      name: "alarm-storage",
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
