import { SoundCardKey } from "../types/i18next";

type SoundData = {
  name: SoundCardKey;
  src: any;
  img: any;
};

const soundsData: SoundData[] = [
  {
    name: "rainfall",
    src: require("@/assets/audio/rainfall.mp3"),
    img: require("@/assets/images/rainfall.webp"),
  },
  {
    name: "oceanWaves",
    src: require("@/assets/audio/oceanWaves.mp3"),
    img: require("@/assets/images/oceanWaves.webp"),
  },
  {
    name: "mountainStream",
    src: require("@/assets/audio/mountainStream.mp3"),
    img: require("@/assets/images/mountainStream.webp"),
  },
];

export default soundsData;
