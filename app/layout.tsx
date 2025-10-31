import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anusha-agrawal-portfolio.vercel.app"),
  title: "Anusha Agrawal — Portfolio",
  description:
    "Designer & developer. Projects, writing, and a few cozy videos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ABS = "https://anusha-agrawal-portfolio.vercel.app";
  const OG = `${ABS}/images/anusha-photo.png`; // your file in /public/images/og.png

  return (
    <html lang="en">
      <head>
        {/* Canonical */}
        <link rel="canonical" href={ABS + "/"} />

        {/* ---- Open Graph (LinkedIn reads these) ---- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={ABS + "/"} />
        <meta property="og:site_name" content="Anusha Agrawal" />
        <meta property="og:title" content="Anusha Agrawal — Portfolio" />
        <meta
          property="og:description"
          content="Designer & developer. Projects, writing, and a few cozy videos."
        />
        <meta property="og:image" content={OG} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Anusha Agrawal — Portfolio" />

        {/* Twitter (harmless elsewhere) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anusha Agrawal — Portfolio" />
        <meta
          name="twitter:description"
          content="Designer & developer. Projects, writing, and a few cozy videos."
        />
        <meta name="twitter:image" content={OG} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
