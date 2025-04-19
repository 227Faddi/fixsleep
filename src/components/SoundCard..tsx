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
      onPress={() => router.push(`/play/${value}`)}
      className="border border-white p-6 rounded-3xl flex-row gap-4"
      style={{ backgroundColor: color.primary }}
    >
      {icon[value as keyof typeof icon]({ color: "white" })}
      <Text className="text-xl text-white">{title}</Text>
    </Pressable>
  );
};

export default SoundCard;
