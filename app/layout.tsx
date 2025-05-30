import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "Viskaan Associates - Leading Facility Management Services in India",
    template: "%s | Viskaan Associates"
  },
  description: "Viskaan Associates provides comprehensive facility management, security services, manpower supply, and more to leading corporates across India. ISO certified with 25+ years of excellence.",
  keywords: "facility management, security services, manpower supply, drivers, horticulture, canteen services, Bangalore, India",
  authors: [{ name: "Viskaan Associates" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://viskaanassociates.com",
    siteName: "Viskaan Associates",
    title: "Viskaan Associates - Facility Management Excellence",
    description: "Leading facility management services provider in India",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Viskaan Associates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viskaan Associates - Facility Management Excellence",
    description: "Leading facility management services provider in India",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
