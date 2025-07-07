"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import AppStoreBtn from "./ui/AppStoreBtn";
import PlayStoreBtn from "./ui/PlayStoreBtn";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero min-h-screen mt-20 pb-36 2xl:min-h-auto 2xl:mt-32"
    >
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
          {/* <button className="btn btn-primary text-2xl p-6">Sleep Now</button> */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 max-w-56"
          >
            <AppStoreBtn />
            <PlayStoreBtn />
          </motion.div>
          <Link
            href="https://www.producthunt.com/products/fixsleep-sleep-calculator?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-fixsleep&#0045;sleep&#0045;calculator"
            target="_blank"
            className="mt-8 max-w-56"
          >
            <Image
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=971222&theme=light&t=1749749471650"
              alt="FixSleep&#0032;&#0045;&#0032;Sleep&#0032;Calculator - Sleep&#0032;Cycle&#0032;&#0038;&#0032;Relaxing&#0032;Sounds | Product Hunt"
              width="500"
              height="500"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
