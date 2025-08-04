const cycleDuration = 90;

const calcCycles = {
  sleep: (startTime: string, timetofall: number = 15) => {
    const startMinutes = timeToMinutes(startTime) + timetofall;
    const result: { [key: number]: string } = {};

    for (let i = 1; i <= 6; i++) {
      const cycleTime = startMinutes + i * cycleDuration;
      result[i] = minutesToTime(cycleTime);
    }

    return result;
  },

  wake: (startTime: string, timetofall: number = 15) => {
    const startMinutes = timeToMinutes(startTime) - timetofall;
    const result: { [key: number]: string } = {};

    for (let i = 1; i <= 6; i++) {
      const cycleTime = startMinutes - i * cycleDuration;
      result[i] = minutesToTime(cycleTime);
    }

    return result;
  },
};

function timeToMinutes(time: string) {
  const paddedTime = time.padStart(4, "0");
  const hours = parseInt(paddedTime.slice(0, 2));
  const minutes = parseInt(paddedTime.slice(2, 4));
  return hours * 60 + minutes;
}

function minutesToTime(totalMinutes: number) {
  const minsInDay = 24 * 60;
  const minutes = ((totalMinutes % minsInDay) + minsInDay) % minsInDay;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

export function getCyclesData(mode: "sleep" | "wake") {
  const cycles = [
    {
      cycle: 1,
      hrSleep: 1.5,
    },
    {
      cycle: 2,
      hrSleep: 3,
    },
    {
      cycle: 3,
      hrSleep: 4.5,
    },
    {
      cycle: 4,
      hrSleep: 6,
    },
    {
      cycle: 5,
      hrSleep: 7.5,
    },
    {
      cycle: 6,
      hrSleep: 9,
    },
  ];

  return mode === "sleep" ? cycles : cycles.reverse();
}

export default calcCycles;
