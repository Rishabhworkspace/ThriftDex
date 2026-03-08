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
  title: {
    template: "%s | ThriftDex",
    default: "ThriftDex | Premium Vintage & Archive Clothing",
  },
  description: "Curated vintage and archive clothing from the 90s, Y2K, and beyond. Explore our digital thrift boutique for rare finds, denim, outerwear, and streetwear grails.",
  keywords: ["vintage clothing", "thrift store", "archive fashion", "Y2K streetwear", "90s vintage", "rare finds"],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://thriftdex.com"),
  openGraph: {
    title: "ThriftDex | Premium Vintage & Archive Clothing",
    description: "Curated vintage and archive clothing from the 90s, Y2K, and beyond. Explore our digital thrift boutique.",
    url: "https://thriftdex.com",
    siteName: "ThriftDex",
    images: [
      {
        url: "/images/products/649123228_17861548656609315_7676905797533472247_n.jpg",
        width: 1200,
        height: 630,
        alt: "ThriftDex Archive",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThriftDex | Premium Vintage & Archive Clothing",
    description: "Curated vintage and archive clothing from the 90s, Y2K, and beyond.",
    images: ["/images/products/649123228_17861548656609315_7676905797533472247_n.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ThriftDex",
  url: "https://thriftdex.com",
  logo: "https://thriftdex.com/logo.png", // Replace with actual logo URL when available
  sameAs: [
    "https://instagram.com/shop.thriftdex"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://thriftdex.com",
  name: "ThriftDex",
  description: "Premium Vintage & Archive Clothing",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://thriftdex.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
