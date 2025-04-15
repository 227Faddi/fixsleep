const formatTimeNow = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return { hours, minutes, mode: "sleep" };
};

const formatTime = ({ hours, minutes }: { hours: number; minutes: number }) => {
  const h = hours?.toString().padStart(2, "0");
  const m = minutes?.toString().padStart(2, "0");
  return `${h}:${m}`;
};

export { formatTime, formatTimeNow };
