import type { Metadata } from "next";
import { Orbitron, Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "NXC – Portfolio",
  description: "Portfolio of NXC, a Fullstack Developer and AI Researcher from Da Nang, Vietnam. Showcasing web development, AI projects, and technical achievements.",
  keywords: ["NXC", "Portfolio", "AI Engineer", "Fullstack Developer", "Da Nang", "Next.js", "React", "OpenAI"],
  authors: [{ name: "NXC" }],
  openGraph: {
    title: "NXC – Portfolio",
    description: "Portfolio of NXC, a Fullstack Developer and AI Researcher from Da Nang, Vietnam.",
    type: "website",
    locale: "en_US",
    siteName: "NXC Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "NXC – Portfolio",
    description: "Portfolio of NXC, a Fullstack Developer and AI Researcher from Da Nang, Vietnam.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${orbitron.variable} ${spaceGrotesk.variable} ${playfair.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
