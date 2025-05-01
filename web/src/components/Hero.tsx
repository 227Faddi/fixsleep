"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5";

const Hero = () => {
  return (
    <section id="hero" className="hero min-h-screen pb-28 pt-4 sm:pt-0">
      <div className="hero-content">
        <div className="max-w-lg flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-center">
            Calculate Your{" "}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-accent text-nowrap"
            >
              Sleep Cycles
            </motion.span>
          </h1>
          <p className="text-2xl md:text-4xl py-6 text-center">
            Find the best times to sleep and wake for better rest and recovery.
          </p>
          {/* <button className="btn btn-primary text-2xl p-6">Sleep Now</button> */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 max-w-56"
          >
            <Link
              href="#cta"
              className="btn btn-primary flex items-center justify-start gap-4 rounded-xl py-8 w-full border border-white shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]"
            >
              <IoLogoApple size={40} />
              <div className="flex flex-col items-start justify-center">
                <span className="text-xs">DOWNLOAD ON THE</span>
                <span className="text-lg">App Store</span>
              </div>
            </Link>
            <Link
              href="#cta"
              className="btn btn-primary flex items-center justify-start gap-4 rounded-xl py-8 w-full border border-white shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]"
            >
              <IoLogoGooglePlaystore size={40} />
              <div className="flex flex-col items-start justify-center">
                <span className="text-xs">GET IT ON</span>
                <span className="text-lg">Google Play</span>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
