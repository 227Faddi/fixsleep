const Features = () => {
  return (
    <section id="features">
      <h2 className="text-5xl font-bold text-center mb-28">Features</h2>
      <div className="flex gap-12">
        <div className="card w-96 gap-6 rounded-3xl bg-slate-400 px-6 pb-4 shadow shadow-white">
          <figure>
            <img src="./Chat.webp" alt="Shoes" />
          </figure>
          <div className="card-body text-center gap-3">
            <h3 className="text-3xl font-bold">Card Title</h3>
            <p className="text-xl">
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
        </div>
        <div className="card w-96 gap-6 rounded-3xl bg-slate-400 px-6 pt-4 shadow shadow-white">
          <div className="card-body text-center gap-3">
            <h3 className="text-3xl font-bold">Card Title</h3>
            <p className="text-xl">
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
          </div>
          <figure>
            <img src="./Notes.webp" alt="Shoes" />
          </figure>
        </div>
        <div className="card w-96 gap-6 rounded-3xl bg-slate-400 px-6 pb-4 shadow shadow-white">
          <figure>
            <img src="./Chat.webp" alt="Shoes" />
          </figure>
          <div className="card-body text-center gap-3">
            <h3 className="text-3xl font-bold">Card Title</h3>
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
