import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const iconsData = {
  home: (props?: object) => (
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
  rainfall: (props?: object) => (
    <Ionicons name="rainy-outline" size={24} {...props} />
  ),
  oceanWaves: (props?: object) => (
    <Ionicons name="water-outline" size={24} {...props} />
  ),
  brownNoise: (props?: object) => (
    <Ionicons name="cloud-outline" size={24} {...props} />
  ),
  arrowBack: (props?: object) => (
    <Ionicons name="chevron-back" size={24} {...props} />
  ),
  play: (props?: object) => (
    <Ionicons name="play-outline" size={24} {...props} />
  ),
  stop: (props?: object) => (
    <Ionicons name="stop-outline" size={24} {...props} />
  ),
  sleep: (props?: object) => (
    <MaterialCommunityIcons name="sleep" size={24} {...props} />
  ),
  emojiHappy: (props?: object) => (
    <Ionicons name="happy-outline" size={24} color="#2ecc71" {...props} />
  ),
  emojiNeutral: (props?: object) => (
    <Ionicons name="sad-outline" size={24} color="#f39c12" {...props} />
  ),
  emojiSad: (props?: object) => (
    <Ionicons name="skull-outline" size={24} color="#e74c3c" {...props} />
  ),
};

export default iconsData;
