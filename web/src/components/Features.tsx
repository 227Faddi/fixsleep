const Features = () => {
  return (
    <section id="features" className="py-28">
      <h2 className="text-3xl sm:text-5xl font-bold text-center pb-16">
        Features
      </h2>
      <div className="flex flex-col md:flex-row gap-12 text-black">
        <div className="card gap-6 rounded-3xl bg-white px-6 pt-4 shadow shadow-white">
          <div className="card-body text-center gap-3">
            <h3 className="text-3xl font-bold text-accent">
              Calculate Sleep Cycles
            </h3>
            <p className="text-xl">
              Easily calculate your ideal sleep and wake-up times based on your
              natural sleep cycles.
            </p>
          </div>
          <figure>
            <img src="./Notes.webp" alt="Shoes" />
          </figure>
        </div>
        <div className="card gap-6 rounded-3xl bg-white px-6 pb-4 shadow shadow-white">
          <figure>
            <img src="./Chat.webp" alt="Shoes" />
          </figure>
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
        <div className="card gap-6 rounded-3xl bg-white px-6 pb-4 shadow shadow-white">
          <figure>
            <img src="./Chat.webp" alt="Shoes" />
          </figure>
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
