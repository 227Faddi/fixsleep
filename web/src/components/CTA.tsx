"use client";
const waitlistId = process.env.NEXT_PUBLIC_WAITLIST_ID;
import { useState } from "react";

const CTA = () => {
  const [submitted, setSubmitted] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [waitlistData, setWaitlistData] = useState<any>(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitWaitlist = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const response = await fetch(
        "https://api.getwaitlist.com/api/v1/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            waitlist_id: waitlistId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit to waitlist.");
      }
      const data = await response.json();
      setWaitlistData(data);
      setSubmitted(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cta" className="py-28">
      <h2 className="text-4xl font-bold text-center pb-16">
        Join The Waitlist
      </h2>
      <div className="card p-6 bg-primary shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]">
        <div className="card-body items-center text-center">
          <h3 className="card-title md:text-2xl">
            Get notified when we officially launch!
          </h3>
          <div className="card-actions pt-4 w-full">
            {submitted ? (
              <div className="alert alert-success w-full md:text-xl flex flex-col">
                Thank you! You’ve been added to the waitlist.
                <br />
                You are number {waitlistData?.priority} on the list.
              </div>
            ) : (
              <form onSubmit={submitWaitlist} className="w-full">
                <input
                  className="input validator text-md md:text-xl p-6 w-full"
                  name="email"
                  type="email"
                  required
                  placeholder="Insert your email"
                />
                <p className="validator-hint mb-2 md:text-md">
                  Enter valid email address
                </p>
                <button
                  type="submit"
                  className="btn btn-accent text-white w-full text-lg md:text-2xl p-6"
                  disabled={loading}
                >
                  {loading ? "Submitting…" : "Join"}
                </button>
                {error && (
                  <div className="alert alert-error w-full mt-2 md:text-xl">
                    ⚠️ Error, please try again.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
