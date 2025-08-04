import { motion } from "motion/react";
import AppStoreBtn from "./ui/AppStoreBtn";
import PlayStoreBtn from "./ui/PlayStoreBtn";

type Props = {
  calculateFn: () => void;
};

const HeroContent = ({ calculateFn }: Props) => {
  return (
    <motion.div
      key="default"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col items-center justify-center"
    >
      <h1 className="text-5xl md:text-7xl font-bold text-center">
        Calculate Your{" "}
        <span className="text-accent sm:text-nowrap">Sleep Cycles</span>
      </h1>

      <p className="text-2xl md:text-4xl py-6 text-center">
        Find the best times to sleep and wake up for better rest and recovery.
      </p>

      <div className="mt-16 flex flex-col justify-center items-center">
        <motion.button
          className="btn btn-accent text-xl lg:text-2xl text-white rounded-xl py-6 px-8"
          onClick={calculateFn}
          whileHover={{ scale: 1.09 }}
          whileTap={{ scale: 0.98 }}
        >
          Sleep Now
        </motion.button>

        <div className="divider">or</div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-56">
          <AppStoreBtn />
          <PlayStoreBtn />
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
