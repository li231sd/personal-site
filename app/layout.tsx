import type { Metadata } from "next";
import { IBM_Plex_Serif, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CityscapeBackground from "@/components/CityscapeBackground";

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif-var",
});
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans-var",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-var",
});

export const metadata: Metadata = {
  title: "Sahil Singla",
  description: "Notes on physics, CFD, and things I'm building.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plexSerif.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try { if (localStorage.getItem("theme") === "dark") document.documentElement.classList.add("dark"); } catch {} })();`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <CityscapeBackground />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
