import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import icon, { IconsData } from "../../constants/iconsData";
import i18n from "../../i18n";
import { SoundCardKey } from "../../types/i18next";
import MyText from "./MyText";

type Props = {
  sound: IconsData & SoundCardKey;
};

const SoundCard = ({ sound }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/play/${sound}`)}
      className="p-6 rounded-3xl flex-row gap-4 bg-primary"
    >
      {icon[sound]()}
      <MyText className="text-lg">{i18n.t(`sounds.cards.${sound}`)}</MyText>
    </TouchableOpacity>
  );
};

export default SoundCard;
