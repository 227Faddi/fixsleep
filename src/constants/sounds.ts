type Sounds = {
  title: string;
  value: string;
  src: number;
  img: string;
};

const sounds: Sounds[] = [
  {
    title: "Rainfall",
    value: "rainfall",
    src: require("@/assets/audio/rainfall.mp3"),
    img: require("@/assets/images/rainfall.webp"),
  },
  {
    title: "Ocean Waves",
    value: "oceanWaves",
    src: require("@/assets/audio/oceanWaves.mp3"),
    img: require("@/assets/images/oceanWaves.webp"),
  },
  {
    title: "Brown Noise",
    value: "brownNoise",
    src: require("@/assets/audio/brownNoise.mp3"),
    img: require("@/assets/images/brownNoise.webp"),
  },
];

export default sounds;
