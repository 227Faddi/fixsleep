"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5";

const Hero = () => {
  return (
    <section id="hero" className="hero min-h-screen pb-28 pt-4 sm:pt-0">
      <div className="hero-content">
        <div className="max-w-lg flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center">
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
          <p className="text-xl sm:text-2xl  md:text-4xl py-6 text-center">
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
