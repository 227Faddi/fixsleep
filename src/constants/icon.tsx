import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const icon = {
  index: (props?: object) => <Entypo name="home" size={24} {...props} />,
  sounds: (props?: object) => <Entypo name="sound" size={24} {...props} />,
  settings: (props?: object) => <Entypo name="cog" size={24} {...props} />,
  moon: (props?: object) => <FontAwesome5 name="moon" size={24} {...props} />,
  bed: (props?: object) => <Ionicons name="bed-outline" size={24} {...props} />,
  arrowBack: (props?: object) => (
    <MaterialIcons name="arrow-back-ios-new" size={24} {...props} />
  ),
  sleep: (props?: object) => (
    <MaterialCommunityIcons name="sleep" size={24} {...props} />
  ),
  emojiVibe: (props?: object) => (
    <MaterialCommunityIcons name="emoticon-cool-outline" size={24} {...props} />
  ),
  emojiHappy: (props?: object) => (
    <MaterialCommunityIcons
      name="emoticon-happy-outline"
      size={24}
      {...props}
    />
  ),
  emojiNeutral: (props?: object) => (
    <MaterialCommunityIcons
      name="emoticon-neutral-outline"
      size={24}
      {...props}
    />
  ),
  emojiConfused: (props?: object) => (
    <MaterialCommunityIcons
      name="emoticon-confused-outline"
      size={24}
      {...props}
    />
  ),
  emojiSad: (props?: object) => (
    <MaterialCommunityIcons name="emoticon-sad-outline" size={24} {...props} />
  ),
  emojiDead: (props?: object) => (
    <MaterialCommunityIcons name="emoticon-dead-outline" size={24} {...props} />
  ),
};

export default icon;
