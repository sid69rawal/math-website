import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  title: "Level Up Math Academy - Where Math Becomes Easy & Learning Becomes Fun",
  description: "Professional math tutoring in Mississauga offering in-person and online programs. Algebra, Geometry, Trigonometry, Functions, Advanced Functions, Calculus & Vectors, Math Competitions. First Month Money-Back Guarantee!",
  keywords: "math tutoring, Mississauga, online math, algebra, geometry, trigonometry, calculus, math competitions, Level Up Math Academy",
  authors: [{ name: "Level Up Math Academy" }],
  openGraph: {
    title: "Level Up Math Academy - Professional Math Tutoring",
    description: "Where Math Becomes Easy & Learning Becomes Fun. In-person and online math programs in Mississauga.",
    type: "website",
    locale: "en_CA",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
