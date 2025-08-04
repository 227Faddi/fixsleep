import { motion } from "motion/react";
import { IoHappy, IoSad, IoSkull } from "react-icons/io5";

type Props = {
  hrSleep: number;
  cycle: number;
  time: string;
  index?: number;
};

const CycleCard = ({ hrSleep, cycle, time, index = 0 }: Props) => {
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

  const getBorderColor = (cycleNumber: number) => {
    if (cycleNumber <= 2) return "rgba(231, 76, 60, 0.3)"; // Red
    if (cycleNumber <= 4) return "rgba(243, 156, 18, 0.3)"; // Orange
    return "rgba(46, 204, 113, 0.3)"; // Green
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{
        scale: 1.02,
        boxShadow: `0 10px 30px -10px ${getBorderColor(
          cycle
        )}, inset 0 0 30px -10px rgba(255,255,255,0.6)`,
        transition: { duration: 0.2 },
      }}
      className="w-full max-w-2xs rounded-xl p-4 font-medium flex flex-col-reverse sm:flex-row justify-between bg-primary shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)] text-center sm:text-left gap-2 sm:gap-4 cursor-pointer"
    >
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
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.1 }}
          className="text-2xl sm:text-3xl font-bold"
        >
          {time}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        >
          {getIconForCycle(cycle)}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CycleCard;
