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
      <div className="card bg-slate-500 shadow-sm">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Subscribe</h2>
          <div className="card-actions">
            <form
              action={handleForm}
              className="flex justify-center items-start"
            >
              <div>
                <input
                  className="input validator"
                  type="email"
                  required
                  placeholder="mail@site.com"
                />
                <p className="validator-hint">Enter valid email address</p>
              </div>
              <button type="submit" className="btn btn-primary">
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
