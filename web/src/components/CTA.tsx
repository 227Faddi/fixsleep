"use client";

const CTA = () => {
  const handleForm = () => {
    console.log("Hey");
  };

  return (
    <section id="cta" className="py-28">
      <h2 className="text-5xl font-bold text-center pb-16">
        Join The Waitlist
      </h2>
      <div className="card bg-primary shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]">
        <div className="card-body items-center text-center">
          <h3 className="card-title">
            Sign up to be notified when we officially launch!
          </h3>
          <div className="card-actions">
            <form
              action={handleForm}
              className="flex justify-center items-start"
            >
              <div>
                <input
                  className="input validator border-r-0 rounded-r-none outline-r-none"
                  type="email"
                  required
                  autoComplete="false"
                  placeholder="youremail@site.com"
                />
                <p className="validator-hint">Enter valid email address</p>
              </div>
              <button
                type="submit"
                className="btn btn-accent text-white border-l-0 rounded-l-none"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
