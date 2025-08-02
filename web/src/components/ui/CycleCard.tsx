type Props = {
  hrSleep: number;
  cycle: number;
  time: string;
};

const CycleCard = ({ hrSleep, cycle, time }: Props) => {
  return (
    <div className="w-full rounded-xl p-4 flex-row justify-between bg-primary shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]">
      <div className="flex-col justify-center gap-1">
        <p className="text-lg ">
          {hrSleep}
          {"Hrs"}
        </p>
        <p className="text-md !text-accent">
          {cycle} {cycle === 1 ? "Cycle" : "Cycles"}
        </p>
      </div>
      <div className="flex-row justify-center items-center gap-2">
        <p className="text-3xl">{time}</p>
        {/* {iconsData[icon as keyof typeof iconsData]({
          size: 35,
        })} */}
      </div>
    </div>
  );
};

export default CycleCard;
