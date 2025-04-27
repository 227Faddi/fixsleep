import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen p-6 flex flex-col items-center">
      <Navbar />
      <Hero />
      <Features />
      <Faq />
      <CTA />
      <Footer />
    </div>
  );
}
