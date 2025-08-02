"use client";

import { motion } from "motion/react";
import Link from "next/link";
import AppStoreBtn from "./ui/AppStoreBtn";
import PlayStoreBtn from "./ui/PlayStoreBtn";

const Hero = () => {
  return (
    <section id="hero" className="hero min-h-screen pb-36 2xl:min-h-auto">
      <div className="hero-content">
        <div className="max-w-lg flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-center">
            Calculate Your{" "}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-accent sm:text-nowrap"
            >
              Sleep Cycles
            </motion.span>
          </h1>
          <p className="text-2xl  md:text-4xl py-6 text-center">
            Find the best times to sleep and wake up for better rest and
            recovery.
          </p>
          <div className="mt-16 flex flex-col justify-center items-center">
            <Link
              className="btn btn-accent text-xl lg:text-2xl text-white rounded-xl py-8 px-10"
              href="/calculate?mode=sleep&time=1929"
            >
              Calculate Now
            </Link>
            <div className="divider">or</div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-56"
            >
              <AppStoreBtn />
              <PlayStoreBtn />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
