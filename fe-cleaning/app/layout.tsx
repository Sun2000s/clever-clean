import type { Metadata } from "next";
import { Inter, Prompt, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "../components/layout/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-prompt",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Clever Clean And Service System Limited",
  description:
    "Professional Residential, Office, Condominium and Commercial Cleaning Services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`
          ${inter.variable}
          ${prompt.variable}
          ${playfair.variable}
          antialiased
        `}
      >
        <Navbar />

        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}