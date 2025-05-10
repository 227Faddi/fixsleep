import { router } from "expo-router";
import { Pressable } from "react-native";
import color from "../constants/colors";
import icon from "../constants/iconsData";
import i18n from "../i18n";
import MyText from "./MyText";

type Props = {
  value: string;
};

const SoundCard = ({ value }: Props) => {
  return (
    <Pressable
      onPress={() => router.push(`/play/${value}`)}
      className="p-6 rounded-3xl flex-row gap-4 bg-primary"
    >
      {icon[value as keyof typeof icon]({ color: color.textPrimary })}
      <MyText className="text-xl text-textPrimary">
        {i18n.t(`sounds.cards.${value}`)}
      </MyText>
    </Pressable>
  );
};

export default SoundCard;
