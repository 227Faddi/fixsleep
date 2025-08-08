import { ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { TouchableOpacity, View } from "react-native";
import iconsData from "../../constants/iconsData";
import MyText from "./MyText";

type Props = {
  cycle: number;
  hrSleep: number;
  time: string;
  icon: ReactNode | any;
  mode: "sleep" | "wake";
  isSelected: boolean;
  onSelect: () => void;
};

const CycleCard = ({
  cycle,
  hrSleep,
  time,
  icon,
  mode,
  isSelected,
  onSelect,
}: Props) => {
  const { t } = useTranslation("translation", {
    keyPrefix: "sleep.cycles",
  });

  return (
    <TouchableOpacity
      onPress={onSelect}
      className={`rounded-xl p-4 bg-primary gap-4 flex-1 ${
        isSelected && "border border-accent"
      }`}
    >
      <View className="flex-row justify-between items-center">
        <MyText className="text-3xl font-bold flex-1">{time}</MyText>
        <View className="ml-2">
          {iconsData[icon as keyof typeof iconsData]({
            size: 32,
          })}
        </View>
      </View>

      <View className="flex-row justify-between items-center">
        <MyText className="text-base font-semibold">
          {hrSleep}
          {t("hrOfSleep")}
        </MyText>

        <MyText className="text-base font-medium !text-accent">
          {cycle} {cycle === 1 ? t("cycle") : t("cycles")}
        </MyText>

        <View className="flex-row items-center justify-center gap-1">
          {mode === "sleep"
            ? iconsData[isSelected ? "alarm" : "alarmOutline"]({
                size: 18,
              })
            : iconsData[isSelected ? "notifications" : "notificationsOutline"]({
                size: 18,
              })}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CycleCard;
