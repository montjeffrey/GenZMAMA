import type { Metadata } from "next";
import { Patrick_Hand, Quicksand } from "next/font/google"; // [cite: 12, 13]
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SmoothScroll from "./components/layout/SmoothScroll";
import PaperTexture from "./components/ui/PaperTexture";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "The Gen Z Mama | Energetic & Fun Childcare in Dover, NJ",
  description: "Reliable, energetic, and fun childcare services in Dover, NJ. Yan offers facility-based and travel-to-home care focusing on becoming part of your family.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${patrickHand.variable} ${quicksand.variable} antialiased bg-[#F5F5DC] text-[#8B4513] font-sans`}
      >
        <SmoothScroll>
          <PaperTexture />
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
