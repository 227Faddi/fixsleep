import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export type IconsData = keyof typeof iconsData;

const iconsData = {
  home: (props?: object) => (
    <Ionicons name="bed" size={24} color="#fff" {...props} />
  ),
  sounds: (props?: object) => (
    <Ionicons
      name="musical-notes"
      size={24}
      color="#fff"
      style={{ transform: [{ translateX: -2 }] }}
      {...props}
    />
  ),
  settings: (props?: object) => (
    <Ionicons name="settings" size={24} color="#fff" {...props} />
  ),
  moon: (props?: object) => (
    <Ionicons name="moon" size={24} color="#fff" {...props} />
  ),
  alarm: (props?: object) => (
    <Ionicons name="alarm" size={24} color="#fff" {...props} />
  ),
  timer: (props?: object) => (
    <Ionicons name="timer" size={24} color="#fff" {...props} />
  ),
  volumeOn: (props?: object) => (
    <Ionicons name="volume-medium" size={24} color="#fff" {...props} />
  ),
  volumeOff: (props?: object) => (
    <Ionicons name="volume-off" size={24} color="#fff" {...props} />
  ),
  heartOn: (props?: object) => (
    <Ionicons name="heart" size={24} color="#fff" {...props} />
  ),
  heartOff: (props?: object) => (
    <Ionicons name="heart-outline" size={24} color="#fff" {...props} />
  ),
  mountainStream: (props?: object) => (
    <FontAwesome5 name="mountain" size={24} color="#fff" {...props} />
  ),
  airplaneCabin: (props?: object) => (
    <Ionicons name="airplane" size={24} color="#fff" {...props} />
  ),
  star: (props?: object) => (
    <Ionicons name="star" size={24} color="#fff" {...props} />
  ),
  checkbox: (props?: object) => (
    <Ionicons name="checkbox" size={24} color="#fff" {...props} />
  ),
  square: (props?: object) => (
    <Ionicons name="square-outline" size={24} color="#fff" {...props} />
  ),
  checkmark: (props?: object) => (
    <Ionicons name="checkmark-circle" size={24} color="#fff" {...props} />
  ),
  circle: (props?: object) => (
    <Ionicons name="ellipse-outline" size={24} color="#fff" {...props} />
  ),
  language: (props?: object) => (
    <Ionicons name="language" size={24} color="#fff" {...props} />
  ),
  notifications: (props?: object) => (
    <Ionicons name="notifications" size={24} color="#fff" {...props} />
  ),
  bed: (props?: object) => (
    <Ionicons name="bed" size={24} color="#fff" {...props} />
  ),
  info: (props?: object) => (
    <Ionicons name="information-circle" size={24} color="#fff" {...props} />
  ),
  rainfall: (props?: object) => (
    <Ionicons name="rainy" size={24} color="#fff" {...props} />
  ),
  oceanWaves: (props?: object) => (
    <MaterialIcons name="waves" size={24} color="#fff" {...props} />
  ),
  brownNoise: (props?: object) => (
    <Ionicons name="cloud" size={24} color="#fff" {...props} />
  ),
  arrowBackIos: (props?: object) => (
    <Ionicons name="chevron-back" size={24} color="#fff" {...props} />
  ),
  arrowBackAndroid: (props?: object) => (
    <Ionicons name="arrow-back" size={24} color="#fff" {...props} />
  ),
  arrowForward: (props?: object) => (
    <Ionicons name="chevron-forward" size={24} color="#fff" {...props} />
  ),
  play: (props?: object) => (
    <Ionicons name="play" size={24} color="#fff" {...props} />
  ),
  stop: (props?: object) => (
    <Ionicons name="stop" size={24} color="#fff" {...props} />
  ),
  sun: (props?: object) => (
    <Ionicons name="sunny" size={24} color="#fff" {...props} />
  ),
  emojiHappy: (props?: object) => (
    <Ionicons name="happy" size={24} color="#2ecc71" {...props} />
  ),
  emojiNeutral: (props?: object) => (
    <Ionicons name="sad" size={24} color="#f39c12" {...props} />
  ),
  emojiSad: (props?: object) => (
    <Ionicons name="skull" size={24} color="#e74c3c" {...props} />
  ),
  battery: (props?: object) => (
    <Ionicons name="battery-charging" size={24} color="#fff" {...props} />
  ),
  heart: (props?: object) => (
    <Ionicons name="heart" size={24} color="#fff" {...props} />
  ),
  rocket: (props?: object) => (
    <Ionicons name="rocket" size={24} color="#fff" {...props} />
  ),
  time: (props?: object) => (
    <Ionicons name="time" size={24} color="#fff" {...props} />
  ),
  book: (props?: object) => (
    <Ionicons name="book" size={24} color="#fff" {...props} />
  ),
  phonePortrait: (props?: object) => (
    <Ionicons name="phone-portrait" size={24} color="#fff" {...props} />
  ),
  addCircle: (props?: object) => (
    <Ionicons name="add-circle" size={24} color="#fff" {...props} />
  ),
  removeCircle: (props?: object) => (
    <Ionicons name="remove-circle" size={24} color="#fff" {...props} />
  ),
  checkmarkDone: (props?: object) => (
    <Ionicons name="checkmark-done" size={24} color="#fff" {...props} />
  ),
  contract: (props?: object) => (
    <Ionicons name="contract" size={24} color="#fff" {...props} />
  ),
  batteryDead: (props?: object) => (
    <Ionicons name="battery-dead" size={24} color="#fff" {...props} />
  ),
  hourglass: (props?: object) => (
    <Ionicons name="hourglass" size={24} color="#fff" {...props} />
  ),
  leaf: (props?: object) => (
    <Ionicons name="leaf" size={24} color="#fff" {...props} />
  ),
};

export default iconsData;
