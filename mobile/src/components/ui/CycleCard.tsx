import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { Platform, View } from "react-native";
import iconsData from "../../constants/iconsData";
import MyText from "./MyText";

type Props = {
  cycle: number;
  hrSleep: number;
  time: string;
  icon: ReactNode | any;
};

const CycleCard = ({ cycle, hrSleep, time, icon }: Props) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "sleep.cycles",
  });

  return (
    <View className="w-full rounded-xl p-4 flex-row justify-between bg-primary">
      <View className="flex-col justify-center gap-1">
        <MyText
          className={`text-textPrimary ${Platform.OS === "ios" ? "text-lg" : ""}`}
        >
          {hrSleep} {t("hrOfSleep")}
        </MyText>
        <MyText className="text-md text-accent">
          {cycle} {cycle === 1 ? t("cycle") : t("cycles")}
        </MyText>
      </View>
      <View className="flex-row justify-center items-center gap-2">
        <MyText
          className={`text-textPrimary ${Platform.OS === "ios" ? "text-3xl" : "text-2xl"}`}
        >
          {time}
        </MyText>
        {iconsData[icon as keyof typeof iconsData]({
          size: Platform.OS === "ios" ? 35 : 30,
        })}
      </View>
    </View>
  );
};

export default CycleCard;
