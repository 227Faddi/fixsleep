import { IoHappy, IoSad, IoSkull } from "react-icons/io5";

type Props = {
  hrSleep: number;
  cycle: number;
  time: string;
};

const CycleCard = ({ hrSleep, cycle, time }: Props) => {
  const iconMap = {
    skull: <IoSkull className="w-8 h-8 md:w-8 md:h-8 text-[#e74c3c]" />,
    sad: <IoSad className="w-8 h-8 md:w-8 md:h-8 text-[#f39c12]" />,
    happy: <IoHappy className="w-8 h-8 md:w-8 md:h-8 text-[#2ecc71]" />,
  };

  const getIconForCycle = (cycleNumber: number) => {
    if (cycleNumber <= 2) return iconMap.skull;
    if (cycleNumber <= 4) return iconMap.sad;
    return iconMap.happy;
  };

  return (
    <div className="w-full max-w-2xs rounded-xl p-4 font-medium flex flex-col-reverse sm:flex-row justify-between bg-primary shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)] text-center sm:text-left gap-2 sm:gap-4">
      <div className="flex flex-col-reverse sm:flex-col justify-between">
        <p className="text-lg sm:text-xl">
          {hrSleep}
          {"hr"}
        </p>
        <p className="text-lg sm:text-md !text-accent">
          {cycle} {cycle === 1 ? "Cycle" : "Cycles"}
        </p>
      </div>
      <div className="flex flex-row justify-between items-center sm:gap-4">
        <p className="text-2xl sm:text-3xl">{time}</p>
        {getIconForCycle(cycle)}
      </div>
    </div>
  );
};

export default CycleCard;
