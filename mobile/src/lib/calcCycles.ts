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
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(totalMinutes: number) {
  const minsInDay = 24 * 60;
  const minutes = ((totalMinutes % minsInDay) + minsInDay) % minsInDay;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}`;
}

export default calcCycles;
