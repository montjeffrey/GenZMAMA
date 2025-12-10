import { Patrick_Hand, Quicksand } from "next/font/google";
import "./globals.css";

const patrickHand = Patrick_Hand({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-patrick-hand",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

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
        {children}
      </body>
    </html>
  );
}
