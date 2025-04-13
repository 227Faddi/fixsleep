import { router } from "expo-router";
import { Pressable, Text } from "react-native";
import icon from "../constants/icon";

type Props = {
  title: string;
  value: string;
};

const SoundCard = ({ title, value }: Props) => {
  return (
    <Pressable
      onPress={() => router.push(`/sounds/${value}`)}
      className="border p-6 rounded-3xl flex-row gap-4"
    >
      {icon[value as keyof typeof icon]()}
      <Text className="text-xl">{title}</Text>
    </Pressable>
  );
};

export default SoundCard;
