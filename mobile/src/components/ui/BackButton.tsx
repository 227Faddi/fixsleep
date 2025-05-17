import color from "@/src/constants/colors";
import iconsData from "@/src/constants/iconsData";
import { router } from "expo-router";
import { Platform, TouchableOpacity } from "react-native";

const BackButton = () => {
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      className="absolute top-0 left-5"
    >
      {Platform.OS === "ios"
        ? iconsData["arrowBackIos"]({ color: color.textPrimary })
        : iconsData["arrowBackAndroid"]({ color: color.textPrimary })}
    </TouchableOpacity>
  );
};

export default BackButton;
