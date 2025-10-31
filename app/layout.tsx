import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Fraunces } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  // pick one: 'swap' | 'optional' | 'fallback' | 'auto' | 'block'
  display: "swap",
  weight: ["400", "700"], // trim to what you use
  style: ["normal", "italic"],
});

// app/layout.tsx
export const metadata: Metadata = {
  metadataBase: new URL("https://anusha-agrawal-portfolio.vercel.app"),
  title: "Anusha Agrawal — Portfolio",
  description:
    "Designer & developer. Projects, writing, and a few cozy videos.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },

  openGraph: {
    type: "website",
    url: "https://anusha-agrawal-portfolio.vercel.app/",
    siteName: "Anusha Agrawal",
    title: "Anusha Agrawal — Portfolio",
    description:
      "Designer & developer. Projects, writing, and a few cozy videos.",
    images: [
      {
        url: "https://anusha-agrawal-portfolio.vercel.app/images/anusha-photo.png",
        width: 1200,
        height: 630,
        alt: "Anusha Agrawal — Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anusha Agrawal — Portfolio",
    description:
      "Designer & developer. Projects, writing, and a few cozy videos.",
    images: [
      "https://anusha-agrawal-portfolio.vercel.app/images/anusha-photo.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
