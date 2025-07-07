"use client";

import { motion } from "motion/react";
import AppStoreBtn from "./ui/AppStoreBtn";
import PlayStoreBtn from "./ui/PlayStoreBtn";

const CTA = () => {
  return (
    <section
      id="cta"
      className="py-28 flex flex-col justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="card p-2 sm:p-6 bg-primary shadow-[inset_0_0_20px_-10px_rgba(255,255,255,0.5)] rounded-3xl"
      >
        <div className="card-body items-center text-center">
          <div className="text-center font-bold space-y-3">
            <h2 className="text-4xl sm:text-5xl">Sleep Better.</h2>
            <h2 className="text-4xl sm:text-5xl text-accent">
              Download FixSleep
            </h2>
            <p className="text-2xl sm:text-3xl font-normal pb-12">
              Available now on iOS & Android
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-52">
            <AppStoreBtn />
            <PlayStoreBtn />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
