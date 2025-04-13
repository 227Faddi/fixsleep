import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const icon = {
  index: (props?: object) => (
    <Ionicons name="home-outline" size={24} {...props} />
  ),
  sounds: (props?: object) => (
    <Ionicons name="musical-notes-outline" size={24} {...props} />
  ),
  settings: (props?: object) => (
    <Ionicons name="settings-outline" size={24} {...props} />
  ),
  moon: (props?: object) => <FontAwesome5 name="moon" size={24} {...props} />,
  bed: (props?: object) => <Ionicons name="bed-outline" size={24} {...props} />,
  rain: (props?: object) => (
    <Ionicons name="rainy-outline" size={24} {...props} />
  ),
  oceanWave: (props?: object) => (
    <Ionicons name="water-outline" size={24} {...props} />
  ),
  brownNoise: (props?: object) => (
    <Ionicons name="ear-outline" size={24} {...props} />
  ),
  arrowBack: (props?: object) => (
    <Ionicons name="chevron-back" size={24} {...props} />
  ),
  sleep: (props?: object) => (
    <MaterialCommunityIcons name="sleep" size={24} {...props} />
  ),
  emojiHappy: (props?: object) => <Feather name="smile" size={24} {...props} />,
  emojiNeutral: (props?: object) => <Feather name="meh" size={24} {...props} />,
  emojiSad: (props?: object) => <Feather name="frown" size={24} {...props} />,
};

export default icon;
