import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const icon = {
  index: (props?: object) => <Entypo name="home" size={24} {...props} />,
  sounds: (props?: object) => <Entypo name="sound" size={24} {...props} />,
  settings: (props?: object) => <Entypo name="cog" size={24} {...props} />,
  emojiAngry: (props?: object) => (
    <MaterialCommunityIcons name="emoticon-dead-outline" size={24} />
  ),
};

export default icon;
