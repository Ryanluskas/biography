import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", style: ["normal", "italic"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Ryan Lukas | Digital Products & Automations",
  description: "Building software, automations & digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`scroll-smooth bg-[#0a0a0a] ${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body className="bg-[#0a0a0a] text-zinc-200 antialiased font-sans cursor-none selection:bg-zinc-800 selection:text-white">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
