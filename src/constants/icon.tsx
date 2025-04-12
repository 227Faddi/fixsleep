import Entypo from "@expo/vector-icons/Entypo";

const icon = {
  index: (props: object) => (
    <Entypo name="home" size={24} color="black" {...props} />
  ),
  sounds: (props: object) => (
    <Entypo name="sound" size={24} color="black" {...props} />
  ),
  settings: (props: object) => (
    <Entypo name="cog" size={24} color="black" {...props} />
  ),
};

export default icon;
