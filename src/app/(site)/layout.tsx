import "../globals.css"; // Adjusted import
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SmoothScroll from "../components/layout/SmoothScroll";
import PaperTexture from "../components/ui/PaperTexture";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "The Gen Z Mama | Energetic & Fun Childcare in Wharton, NJ",
        template: "%s | The Gen Z Mama",
    },
    description: "Reliable, energetic, and fun childcare services in Wharton, NJ. Mrs. A offers facility-based and travel-to-home care focusing on becoming part of your family.",
    metadataBase: new URL("https://thegenzmama.com"),
    openGraph: {
        title: "The Gen Z Mama | Energetic & Fun Childcare",
        description: "Reliable, energetic, and fun childcare services in Wharton, NJ.",
        url: "https://thegenzmama.com",
        siteName: "The Gen Z Mama",
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "The Gen Z Mama",
        description: "Reliable, energetic, and fun childcare services in Wharton, NJ.",
    },
};

export default function SiteLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SmoothScroll>
            <PaperTexture />
            <Navbar />
            <main className="min-h-screen pt-20">
                {children}
            </main>
            <Footer />
        </SmoothScroll>
    );
}
