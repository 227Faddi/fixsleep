import CycleCard from "@/components/ui/CycleCard";

type Props = {
  searchParams: Promise<{
    mode?: "sleep" | "wake";
    time?: string;
  }>;
};

const Calculate = async ({ searchParams }: Props) => {
  const { mode, time } = await searchParams;

  if (!mode || !time) {
    return;
  }

  const timeCycles = mode === "sleep" ? "Sleep" : "Wakeup";

  const cycles = getCyclesData(mode);

  return (
    <main className="">
      <h2 className="text-4xl sm:text-5xl font-bold text-center pb-16">
        {mode === "sleep" ? "Bedtime" : "Wake up time"}
      </h2>
      <div className="flex-1 justify-center gap-4">
        {cycles.map((item) => (
          <CycleCard
            key={item.cycle}
            cycle={item.cycle}
            hrSleep={item.hrSleep}
            time={"13:07"}
          />
        ))}
      </div>
    </main>
  );
};

function getCyclesData(mode: "sleep" | "wake") {
  const cycles = [
    {
      cycle: 1,
      hrSleep: 1.5,
      icon: "emojiSad",
    },
    {
      cycle: 2,
      hrSleep: 3,
      icon: "emojiSad",
    },
    {
      cycle: 3,
      hrSleep: 4.5,
      icon: "emojiNeutral",
    },
    {
      cycle: 4,
      hrSleep: 6,
      icon: "emojiNeutral",
    },
    {
      cycle: 5,
      hrSleep: 7.5,
      icon: "emojiHappy",
    },
    {
      cycle: 6,
      hrSleep: 9,
      icon: "emojiHappy",
    },
  ];

  return mode === "sleep" ? cycles : cycles.reverse();
}

export default Calculate;
