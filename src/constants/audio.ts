type Audio = {
  title: string;
  value: string;
  src: any;
};

const audio: Audio[] = [
  {
    title: "Rainfall",
    value: "rainfall",
    src: require("@/assets/audio/rainfall.mp3"),
  },
  {
    title: "Ocean Waves",
    value: "oceanWaves",
    src: require("@/assets/audio/oceanWaves.mp3"),
  },
  {
    title: "Brown Noise",
    value: "brownNoise",
    src: require("@/assets/audio/brownNoise.mp3"),
  },
];

export default audio;
