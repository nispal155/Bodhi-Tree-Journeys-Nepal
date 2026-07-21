import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://bodhitreejourneysnepal.com'),
  title: "Bodhi Tree Journeys Nepal",
  description: "Experience the authentic spirit of Nepal. Safe, respectful, and deeply moving cultural and adventure tours.",
  openGraph: {
    title: "Bodhi Tree Journeys Nepal",
    description: "Experience the authentic spirit of Nepal. Safe, respectful, and deeply moving cultural and adventure tours.",
    url: "https://bodhitreejourneysnepal.com",
    siteName: "Bodhi Tree Journeys Nepal",
    images: [
      {
        url: "/landing-3d.png",
        width: 1200,
        height: 630,
        alt: "Bodhi Tree Journeys Nepal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bodhi Tree Journeys Nepal",
    description: "Experience the authentic spirit of Nepal. Safe, respectful, and deeply moving cultural and adventure tours.",
    images: ["/landing-3d.png"],
  },
};

import CustomCursor from "@/components/CustomCursor";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import ScrollProgress from "@/components/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth cursor-none`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          <WhatsAppWidget />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
