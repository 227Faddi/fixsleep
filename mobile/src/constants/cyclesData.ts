function getCyclesData(mode: "sleep" | "wake") {
  const cycles = [
    {
      cycle: 1,
      hrSleep: 1.5,
      icon: "emojiSad",
    },
    {
      cycle: 2,
      hrSleep: 3,
      icon: "emojiSad",
    },
    {
      cycle: 3,
      hrSleep: 4.5,
      icon: "emojiNeutral",
    },
    {
      cycle: 4,
      hrSleep: 6,
      icon: "emojiNeutral",
    },
    {
      cycle: 5,
      hrSleep: 7.5,
      icon: "emojiHappy",
    },
    {
      cycle: 6,
      hrSleep: 9,
      icon: "emojiHappy",
    },
  ];

  return mode === "sleep" ? cycles : cycles.reverse();
}

export default getCyclesData;
