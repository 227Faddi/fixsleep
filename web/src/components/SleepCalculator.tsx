"use client";

import AppStoreBtn from "@/components/ui/AppStoreBtn";
import CycleCard from "@/components/ui/CycleCard";
import PlayStoreBtn from "@/components/ui/PlayStoreBtn";
import calcCycles, { getCyclesData } from "@/lib/calculateSleep";
import Link from "next/link";
import { useState } from "react";
import { IoArrowBack, IoMoon, IoSunny } from "react-icons/io5";

type Props = {
  mode: "sleep" | "wake";
  time: string;
};
const SleepCalculator = ({ mode, time }: Props) => {
  const [timetofall, setTimetofall] = useState(15);

  const timeCycles =
    mode === "sleep"
      ? calcCycles.sleep(time, timetofall)
      : calcCycles.wake(time, timetofall);

  const cycles = getCyclesData(mode);

  return (
    <main className="w-full flex flex-col items-center justify-center">
      <div className="pb-16 space-y-4 max-w-lg text-center">
        <div className="flex flex-row items-center justify-center gap-2">
          {mode === "sleep" ? <IoMoon size={35} /> : <IoSunny size={35} />}
          <h2 className="text-4xl sm:text-5xl font-bold">
            {mode === "sleep" ? "Bedtime" : "Wake up Time"}
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-1.5 text-lg sm:text-xl lg:text-2xl mt-4 text-center">
          <span>It takes me about</span>
          <input
            type="number"
            value={timetofall}
            onChange={(e) => {
              const value = Math.max(0, Number(e.target.value));
              setTimetofall(value);
            }}
            min="0"
            className="w-12 bg-transparent text-center font-bold border-b-2 border-gray-500 focus:outline-none focus:border-blue-500"
          />
          <span>minutes to fall asleep.</span>
        </div>
      </div>
      <div className="w-full max-w-xl space-y-24">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <div className="w-full grid grid-cols-2 justify-items-center gap-4 md:gap-6">
            {cycles.map((item) => (
              <CycleCard
                key={item.cycle}
                cycle={item.cycle}
                hrSleep={item.hrSleep}
                time={timeCycles[item.cycle as keyof typeof timeCycles]}
              />
            ))}
          </div>
          <Link
            href="/"
            className="btn btn-accent text-xl lg:text-2xl text-white rounded-xl py-6 px-8"
          >
            <IoArrowBack />
            Back
          </Link>
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <p className="text-lg sm:text-xl lg:text-2xl text-center font-bold">
            Want more features like sleep sounds, reminders, and
            personalization? Get FixSleep on mobile.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-56">
            <AppStoreBtn />
            <PlayStoreBtn />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SleepCalculator;
