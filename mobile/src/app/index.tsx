import { Redirect } from "expo-router";
import React from "react";
import { useOnboardingStore } from "../store/appStore";

export default function Index() {
  const isCompleted = useOnboardingStore((state) => state.isCompleted);
  return <Redirect href={isCompleted ? "/(tabs)/(home)" : "/onboarding"} />;
}
