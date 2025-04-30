import Link from "next/link";
import { IoLogoApple, IoLogoGooglePlaystore } from "react-icons/io5";

const Hero = () => {
  return (
    <section id="hero" className="hero min-h-screen pb-28 pt-4 sm:pt-0">
      <div className="hero-content">
        <div className="max-w-lg flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-bold text-center text-accent">
            Calculate Your{" "}
            <span className="font-thin text-nowrap">Sleep Cycles</span>
          </h1>
          <p className="text-2xl md:text-4xl py-6 text-center">
            Find the best times to sleep and wake for better rest and
            productivity.
          </p>
          {/* <button className="btn btn-primary text-2xl p-6">Sleep Now</button> */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 max-w-56">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
