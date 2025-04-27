const Hero = () => {
  return (
    <section id="hero" className="hero min-h-screen py-28">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold">Fix Sleep: Sleep Smarter</h1>
          <p className="text-xl py-6">
            Unlock the power of perfect rest. With Fix Sleep, track your sleep
            cycles, get timely reminders.
          </p>
          {/* <button className="btn btn-primary text-2xl p-6">Sleep Now</button> */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16">
            <a href="#cta" className="btn btn-primary text-2xl p-6">
              App Store
            </a>
            <a href="#cta" className="btn btn-primary text-2xl p-6">
              Play Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
