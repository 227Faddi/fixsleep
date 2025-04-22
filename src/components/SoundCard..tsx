import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import color from "../constants/colors";
import icon from "../constants/iconsData";

type Props = {
  title: string;
  value: string;
};

const SoundCard = ({ title, value }: Props) => {
  return (
    <Pressable
      onPress={() => router.push(`/sounds/play/${value}`)}
      className="p-6 rounded-3xl flex-row gap-4 bg-primary"
    >
      {icon[value as keyof typeof icon]({ color: color.textPrimary })}
      <Text className="text-xl text-textPrimary">{title}</Text>
    </Pressable>
  );
};

export default SoundCard;
