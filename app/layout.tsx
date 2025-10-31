// app/layout.tsx
import "./globals.css";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";

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

export const metadata = {
  title: "Anusha Agrawal — Portfolio",
  description:
    "Designer & developer. Projects, writing, and a few cozy videos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const SITE = "https://anusha-agrawal-portfolio.vercel.app";
  const IMAGE = `${SITE}/images/anusha-photo.png`;

  return (
    <html lang="en">
      <head>
        <meta name="title" content="Anusha Agrawal — Portfolio" />
        <meta
          name="description"
          content="Designer & developer. Projects, writing, and a few cozy videos."
        />

        {/* --- Open Graph --- */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE} />
        <meta property="og:site_name" content="Anusha Agrawal" />
        <meta property="og:title" content="Anusha Agrawal — Portfolio" />
        <meta
          property="og:description"
          content="Designer & developer. Projects, writing, and a few cozy videos."
        />
        <meta property="og:image" content={IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Anusha Agrawal — Portfolio" />

        {/* --- Twitter --- */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anusha Agrawal — Portfolio" />
        <meta
          name="twitter:description"
          content="Designer & developer. Projects, writing, and a few cozy videos."
        />
        <meta name="twitter:image" content={IMAGE} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
