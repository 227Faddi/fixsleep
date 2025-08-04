export function formatTime(time: string): string {
  const paddedTime = time.padStart(4, "0");
  const hours = paddedTime.slice(0, 2);
  const minutes = paddedTime.slice(2, 4);
  return `${hours}:${minutes}`;
}
