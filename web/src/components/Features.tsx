const Features = () => {
  return (
    <section id="features" className="py-28">
      <h2 className="text-3xl sm:text-5xl font-bold text-center pb-16">
        Features
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="card gap-6 rounded-3xl bg-slate-400 px-6 pt-4 shadow shadow-white">
          <div className="card-body text-center gap-3">
            <h3 className="text-3xl font-bold">Calculate Your Sleep Cycles</h3>
            <p className="text-xl">
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
          <figure>
            <img src="./Notes.webp" alt="Shoes" />
          </figure>
        </div>
        <div className="card gap-6 rounded-3xl bg-slate-400 px-6 pb-4 shadow shadow-white">
          <figure>
            <img src="./Chat.webp" alt="Shoes" />
          </figure>
          <div className="card-body text-center gap-3">
            <h3 className="text-3xl font-bold">Never Miss Your Sleep Time</h3>
            <p className="text-xl">
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
        </div>
        <div className="card gap-6 rounded-3xl bg-slate-400 px-6 pb-4 shadow shadow-white">
          <figure>
            <img src="./Chat.webp" alt="Shoes" />
          </figure>
          <div className="card-body text-center gap-3">
            <h3 className="text-3xl font-bold">Relax with Soothing Sounds</h3>
            <p className="text-xl">
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
