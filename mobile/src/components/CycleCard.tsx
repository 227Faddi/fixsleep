import { ReactNode } from "react";
import { View } from "react-native";
import iconsData from "../constants/iconsData";
import i18n from "../i18n";
import MyText from "./MyText";

type Props = {
  cycle: number;
  hrSleep: number;
  time: string;
  icon: ReactNode | any;
};

const CycleCard = ({ cycle, hrSleep, time, icon }: Props) => {
  return (
    <View className="w-full rounded-xl p-4 flex-row justify-between bg-primary">
      <View className="flex-col justify-center gap-1">
        <MyText className="text-lg text-textPrimary">
          {hrSleep} {i18n.t("sleep.cycles.hrOfSleep")}
        </MyText>
        <MyText className="text-md text-accent">
          {cycle}{" "}
          {cycle === 1
            ? i18n.t("sleep.cycles.cycle")
            : i18n.t("sleep.cycles.cycles")}
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
