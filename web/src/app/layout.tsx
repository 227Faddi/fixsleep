import Navbar from "@/components/Navbar";
import myMetadata from "@/lib/metadata";
import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = myMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark">
      <body className={`${fredoka.className} antialiased relative`}>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#1A1A1E_40%,#9A73E8)]"></div>
        <div className="w-full flex justify-center">
          <div className="flex-grow w-full max-w-[1920px]">
            <div className="min-h-screen flex flex-col items-center p-6">
              <Navbar />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
