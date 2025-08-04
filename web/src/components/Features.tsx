"use client";

import { motion } from "motion/react";
import Image from "next/image";

const Features = () => {
  return (
    <section id="features" className="py-36">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, margin: "-50px" }}
        className="text-4xl sm:text-5xl font-bold text-center pb-16"
      >
        Features
      </motion.h2>

      <div className="flex flex-col lg:flex-row gap-28 overflow-hidden relative max-w-sm lg:max-w-7xl">
        {/* First Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="lg:order-2 flex-1 relative overflow-hidden card gap-6 rounded-3xl bg-primary px-6 pt-4 shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]"
        >
          <div className="card-body text-center gap-3">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-accent"
            >
              Sleep Cycle Calculator
            </motion.h3>
            <p className="text-lg sm:text-xl">
              Easily calculate your ideal sleep and wake-up times based on your
              natural sleep cycles.
            </p>
          </div>

          <picture className="relative min-h-[200px]">
            <Image
              src="/1.png"
              alt="iphone image showing sleep cycles screen"
              className="w-full object-contain"
              height={400}
              width={400}
            />
          </picture>

          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-primary to-transparent"></div>
        </motion.div>

        {/* Second Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true, margin: "-50px" }}
          className="lg:order-3 flex-1 relative overflow-hidden card gap-6 rounded-3xl bg-primary px-6 pb-4 shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]"
        >
          <picture className="relative min-h-[200px]">
            <Image
              src="/3.png"
              alt="iphone image showing sleep cycles screen"
              className="w-full object-contain"
              height={400}
              width={400}
            />
          </picture>

          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-primary to-transparent"></div>

          <div className="card-body text-center gap-3">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-accent"
            >
              Sleep Time Reminder
            </motion.h3>
            <p className="text-lg sm:text-xl">
              Set personalized notifications so you can wind down in time for
              the best sleep.
            </p>
          </div>
        </motion.div>

        {/* Third Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
          className="lg:order-1 flex-1 relative overflow-hidden card gap-6 rounded-3xl bg-primary px-6 pb-4 shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)]"
        >
          <picture className="relative min-h-[200px]">
            <Image
              src="/2.png"
              alt="iphone image showing sleep cycles screen"
              className="w-full object-contain"
              width={400}
              height={400}
            />
          </picture>

          <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-primary to-transparent"></div>

          <div className="card-body text-center gap-3">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-bold text-accent"
            >
              Relaxing Sleep Sounds
            </motion.h3>
            <p className="text-lg sm:text-xl">
              Create the perfect environment for sleep with a variety of
              soothing sounds.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
