"use client";
const waitlistId = process.env.NEXT_PUBLIC_WAITLIST_ID;
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { IoLogoApple } from "react-icons/io5";

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
        throw new Error("Failed to submit to waitlist");
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
    <section
      id="cta"
      className="py-28 flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl sm:text-5xl font-bold text-center pb-16">
        Join the Android Waitlist
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="card p-6 bg-primary shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]"
      >
        <div className="card-body items-center text-center">
          <h3 className="card-title md:text-2xl">
            Get notified when we launch on Google Play!
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
      </motion.div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 max-w-56">
        <Link
          href="https://apps.apple.com/ca/app/fixsleep/id6745803646?platform=iphone"
          target="_blank"
          className="btn btn-primary flex items-center justify-start gap-4 rounded-xl py-8 w-full border border-white shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]"
        >
          <IoLogoApple size={40} />
          <div className="flex flex-col items-start justify-center">
            <span className="text-xs">DOWNLOAD ON THE</span>
            <span className="text-lg">App Store</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
