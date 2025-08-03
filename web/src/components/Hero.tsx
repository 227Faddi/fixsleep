"use client";

import { motion } from "motion/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import SleepCalculator from "./SleepCalculator";
import AppStoreBtn from "./ui/AppStoreBtn";
import PlayStoreBtn from "./ui/PlayStoreBtn";

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

  return (
    <Suspense>
      <section id="hero" className="hero min-h-screen pb-36 2xl:min-h-auto">
        <div className="hero-content px-0">
          <div className="max-w-lg flex flex-col items-center justify-center">
            {mode && time ? (
              <SleepCalculator mode={mode as "sleep"} time={time} />
            ) : (
              <>
                <h1 className="text-5xl md:text-7xl font-bold text-center">
                  Calculate Your{" "}
                  <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-accent sm:text-nowrap"
                  >
                    Sleep Cycles
                  </motion.span>
                </h1>
                <p className="text-2xl  md:text-4xl py-6 text-center">
                  Find the best times to sleep and wake up for better rest and
                  recovery.
                </p>
                <div className="mt-16 flex flex-col justify-center items-center">
                  <button
                    className="btn btn-accent text-xl lg:text-2xl text-white rounded-xl py-6 px-8"
                    onClick={calculateSleep}
                  >
                    Calculate Now
                  </button>
                  <div className="divider">or</div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-56"
                  >
                    <AppStoreBtn />
                    <PlayStoreBtn />
                  </motion.div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </Suspense>
  );
};

export default Hero;
