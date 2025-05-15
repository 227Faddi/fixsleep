import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import color from "../../constants/colors";
import icon from "../../constants/iconsData";
import i18n from "../../i18n";
import { SoundCardKey } from "../../types/i18next";
import MyText from "./MyText";

type Props = {
  value: string;
};

const SoundCard = ({ value }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/play/${value}`)}
      className="p-6 rounded-3xl flex-row gap-4 bg-primary"
    >
      {icon[value as keyof typeof icon]({ color: color.textPrimary })}
      <MyText className="text-xl">
        {i18n.t(`sounds.cards.${value as SoundCardKey}`)}
      </MyText>
    </TouchableOpacity>
  );
};

export default SoundCard;
