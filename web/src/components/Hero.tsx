const Hero = () => {
  return (
    <section className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Fix Sleep: Sleep Smarter</h1>
          <p className="py-6">
            Get the perfect rest with sleep cycle calculation, reminders, and
            soothing sounds.
          </p>
          <button className="btn btn-primary">Sleep Now</button>
          <div className="mt-12 flex items-center justify-center gap-6">
            <a className="btn btn-primary">App Store</a>
            <a className="btn btn-primary">App Store</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
