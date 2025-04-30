import Image from "next/image";

const Features = () => {
  return (
    <section id="features" className="py-28">
      <h2 className="text-4xl sm:text-5xl font-bold text-center pb-16">
        Features
      </h2>
      <div className="flex flex-col lg:flex-row gap-20 overflow-hidden relative max-w-sm lg:max-w-7xl">
        <div className="lg:order-2 flex-1 relative overflow-hidden card gap-6 rounded-3xl bg-primary px-6 pt-4 shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]">
          <div className="card-body text-center gap-3">
            <h3 className="text-3xl font-bold text-accent">
              Optimize Your Sleep Schedule
            </h3>
            <p className="text-xl">
              Easily calculate your ideal sleep and wake-up times based on your
              natural sleep cycles.
            </p>
          </div>
          <Image
            src="/sleepcycle.png"
            alt="iphone image showing sleep cycles screen"
            className="w-full object-cover"
            width={300}
            height={300}
          />
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-primary to-transparent"></div>
        </div>

        <div className="lg:order-1 flex-1 relative overflow-hidden card gap-6 rounded-3xl bg-primary px-6 pb-4 shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]">
          <Image
            src="/reminder.png"
            alt="iPhone image showing sleep cycles screen"
            className="w-full object-cover"
            width={300}
            height={300}
          />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-primary to-transparent"></div>
          <div className="card-body text-center gap-3">
            <h3 className="text-3xl font-bold text-accent">
              Sleep Time Reminder
            </h3>
            <p className="text-xl">
              Set personalized notifications so you can wind down in time for
              the best sleep.
            </p>
          </div>
        </div>

        <div className="lg:order-3 flex-1 relative overflow-hidden card gap-6 rounded-3xl bg-primary px-6 pb-4 shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]">
          <Image
            src="/sounds.png"
            alt="iPhone image showing sleep cycles screen"
            className="w-full object-cover"
            width={300}
            height={300}
          />
          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-primary to-transparent"></div>
          <div className="card-body text-center gap-3">
            <h3 className="text-3xl font-bold text-accent">
              Relaxing Sleep Sounds
            </h3>
            <p className="text-xl">
              Create the perfect environment for sleep with a variety of
              soothing sounds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
