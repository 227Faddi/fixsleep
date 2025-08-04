"use client";

import { AnimatePresence, motion } from "motion/react";
import { useRouter, useSearchParams } from "next/navigation";
import HeroContent from "./HeroContent";
import SleepCalculator from "./SleepCalculator";

const Hero = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");
  const time = searchParams.get("time");

  const calculateSleep = () => {
    const now = new Date();
    const time =
      now.getHours().toString().padStart(2, "0") +
      now.getMinutes().toString().padStart(2, "0");

    router.push(`/?mode=sleep&time=${time}`);
  };

  const showCalculator = mode && time;

  return (
    <section id="hero" className="hero min-h-screen pb-36 2xl:min-h-auto">
      <div className="hero-content px-0">
        <div className="max-w-lg flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            {showCalculator ? (
              <motion.div
                key="calculator"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <SleepCalculator mode={mode as "sleep"} time={time} />
              </motion.div>
            ) : (
              <HeroContent calculateFn={calculateSleep} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Hero;
