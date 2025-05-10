import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { View } from "react-native";
import iconsData from "../constants/iconsData";
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
        <MyText className="text-lg text-textPrimary">
          {hrSleep} {t("hrOfSleep")}
        </MyText>
        <MyText className="text-md text-accent">
          {cycle} {cycle === 1 ? t("cycle") : t("cycles")}
        </MyText>
      </View>
      <View className="flex-row justify-center items-center gap-2">
        <MyText className="text-3xl text-textPrimary">{time}</MyText>
        {iconsData[icon as keyof typeof iconsData]({
          size: 35,
        })}
      </View>
    </View>
  );
};

export default CycleCard;
