const Hero = () => {
  return (
    <section className="hero min-h-screen" id="hero">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-7xl font-bold">Fix Sleep: Sleep Smarter</h1>
          <p className="text-3xl py-6">
            Get the perfect rest with sleep cycle calculation, reminders, and
            soothing sounds.
          </p>
          <button className="btn btn-primary text-2xl p-6">Sleep Now</button>
          <div className="mt-12 flex items-center justify-center gap-6">
            <a href="#cta" className="btn btn-primary text-2xl p-6">
              App Store
            </a>
            <a href="#cta" className="btn btn-primary text-2xl p-6">
              App Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
