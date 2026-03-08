import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BottomNav } from "@/components/layout/BottomNav";
import { Marquee } from "@/components/ui/Marquee";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ThriftDex",
  description: "Curated vintage finds. Digital thrift boutique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-theme-base text-theme-text min-h-screen flex flex-col overflow-x-hidden`}
      >
        <Marquee text="FREE SHIPPING ON ALL ORDERS OVER ₹5000 • THE ARCHIVE IS NOW OPEN • EXCLUSIVE VINTAGE FINDS • " />
        <Navbar />
        <main className="flex-grow pb-16 md:pb-0">
          {children}
        </main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}
