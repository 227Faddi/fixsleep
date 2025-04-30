import { router } from "expo-router";
import { Pressable } from "react-native";
import color from "../constants/colors";
import icon from "../constants/iconsData";
import MyText from "./MyText";

type Props = {
  title: string;
  value: string;
};

const SoundCard = ({ title, value }: Props) => {
  return (
    <Pressable
      onPress={() => router.push(`/play/${value}`)}
      className="p-6 rounded-3xl flex-row gap-4 bg-primary"
    >
      {icon[value as keyof typeof icon]({ color: color.textPrimary })}
      <MyText className="text-xl text-textPrimary">{title}</MyText>
    </Pressable>
  );
};

export default SoundCard;
