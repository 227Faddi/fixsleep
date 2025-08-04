import CTA from "@/components/CTA";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Suspense>
        <Hero />
      </Suspense>
      <Features />
      <Faq />
      <CTA />
    </>
  );
}
