import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const serif = Playfair_Display({ subsets: ["latin"], variable: "--font-serif", style: ["normal", "italic"] });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Ryan Lukas | Software Engineer & Product Builder",
  description: "Desenvolvedor Full Stack focando em construção de produtos reais, sistemas escaláveis, interfaces minimalistas e automações (React, Node.js, AI).",
  keywords: ["Software Engineer", "Full Stack Developer", "React", "Next.js", "Node.js", "TypeScript", "Product Design"],
  authors: [{ name: "Ryan Lukas" }],
  creator: "Ryan Lukas",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://biography-murex.vercel.app/",
    title: "Ryan Lukas | Software Engineer & Product Builder",
    description: "Engenharia de software focada na construção de produtos reais e ecossistemas escaláveis.",
    siteName: "Ryan Lukas Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ryan Lukas | Software Engineer",
    description: "Engenharia de software focada na construção de produtos reais e ecossistemas escaláveis.",
  },
  alternates: {
    canonical: "https://biography-murex.vercel.app/",
  },
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
