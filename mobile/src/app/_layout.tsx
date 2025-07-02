import "@/global.css";
import "@/src/i18n";
import { getLocales } from "expo-localization";
import * as Notifications from "expo-notifications";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import color from "../constants/colors";
import { useLanguageStore } from "../store/appStore";
import { SupportedLanguage } from "../types";

const supportedLanguages: SupportedLanguage[] = ["en", "fr"];

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

SplashScreen.preventAutoHideAsync();

SplashScreen.setOptions({
  duration: 200,
  fade: true,
});

export default function RootLayout() {
  const { language, setLanguage } = useLanguageStore();
  const { i18n } = useTranslation();
  const isHydrated = useLanguageStore.persist.hasHydrated();

  useEffect(() => {
    const detectLanguage = async () => {
      if (!isHydrated) return null;

      if (!language) {
        const deviceLang = getLocales()[0]?.languageCode as SupportedLanguage;
        const langToUse = supportedLanguages.includes(deviceLang)
          ? deviceLang
          : "en";
        await i18n.changeLanguage(langToUse);
        setLanguage(langToUse);
      }

      await SplashScreen.hideAsync();
    };

    detectLanguage();
  }, [i18n]);

  return (
    <GestureHandlerRootView className="flex-1 bg-background">
      <SafeAreaProvider>
        <StatusBar style="light" />
        <SafeAreaView className="flex-1 bg-background">
          <Stack
            screenOptions={{
              contentStyle: {
                backgroundColor: color.background,
              },
            }}
          >
            <Stack.Screen name="onboarding" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="play/[value]"
              options={{ headerShown: false }}
            />
          </Stack>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
