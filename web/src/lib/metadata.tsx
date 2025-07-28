import { Metadata } from "next";

const myMetadata: Metadata = {
  title: "Sleep Calculator – FixSleep | Optimal Bedtimes",
  description:
    "Use FixSleep’s Sleep Calculator & Cycle Planner to find perfect bedtimes and wake‑times. Improve sleep quality with cycle‑based guidance and wake up refreshed!",
  keywords: [
    // English
    "sleep calculator",
    "sleep cycle calculator",
    "bedtime planner",
    "wake up refreshed",
    // Spanish
    "calculadora de sueño",
    "planificador de sueño",
    // French
    "calculateur de sommeil",
    "planificateur de sommeil",
    // Italian
    "calcolatore del sonno",
    "pianificatore del sonno",
    "FixSleep",
  ],
  //   alternates: {
  //     canonical: "https://fixsleep.app",
  //     languages: {
  //       "en-US": "https://fixsleep.app",
  //       "es-ES": "https://fixsleep.app/es",
  //       "fr-FR": "https://fixsleep.app/fr",
  //       "it-IT": "https://fixsleep.app/it",
  //     },
  //   },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sleep Calculator – FixSleep | Optimal Bedtimes",
    description:
      "Discover your optimal sleep schedule with FixSleep’s Sleep Calculator & Cycle Planner. Plan bedtimes, track cycles, and wake up energized.",
    url: "https://fixsleep.app",
    siteName: "FixSleep",
    locale: "en_US",
    images: [
      {
        url: "https://fixsleep.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "FixSleep Sleep Calculator & Cycle Planner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sleep Calculator – FixSleep",
    description:
      "Optimize your sleep with FixSleep’s Sleep Calculator & Cycle Planner. Find the best times to sleep and wake up refreshed!",
    images: ["https://fixsleep.app/og-image.png"],
  },
};

export default myMetadata;
