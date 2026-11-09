import type React from "react";
import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const viewport: Viewport = {
  themeColor: "#FE3030",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "CHIMP | High-Impact Creative & Web Agency",
  description:
    "Websites that convert. A creative design, videography, and merch partner built for brands that scale.",
  metadataBase: new URL("https://chimp.london"),
  openGraph: {
    title: "CHIMP | High-Impact Creative & Web Agency",
    description:
      "Websites that convert. A creative design, videography, and merch partner built for brands that scale.",
    url: "https://chimp.london",
    siteName: "CHIMP Agency",
    images: [
      {
        url: "/image1.png",
        width: 1200,
        height: 630,
        alt: "CHIMP Agency Showcase",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CHIMP | High-Impact Creative & Web Agency",
    description:
      "Websites that convert. A creative design, videography, and merch partner built for brands that scale.",
    images: ["/image1.png"],
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
