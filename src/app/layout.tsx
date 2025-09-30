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
  title: "Level Up Math Academy - Professional Math Tutoring in Mississauga | Grades 3-12",
  description: "Expert math tutoring in Mississauga for Grades 3-12. In-person & online programs. Algebra, Calculus, EQAO prep. $25/hour with money-back guarantee. Book free assessment!",
  keywords: "math tutoring Mississauga, math tutor Ontario, online math tutoring Canada, Level Up Math Academy, algebra tutoring, calculus tutoring, EQAO prep, math competitions, elementary math tutoring, high school math help",
  authors: [{ name: "Level Up Math Academy" }],
  creator: "Level Up Math Academy",
  publisher: "Level Up Math Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Level Up Math Academy - Professional Math Tutoring Mississauga",
    description: "Expert math tutoring for Grades 3-12 in Mississauga. In-person & online programs with money-back guarantee.",
    type: "website",
    locale: "en_CA",
    siteName: "Level Up Math Academy",
    url: "https://levelupmathacademy.com",
    images: [
      {
        url: "https://levelupmathacademy.com/hero_img.png",
        width: 800,
        height: 600,
        alt: "Level Up Math Academy - Professional Math Learning",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Level Up Math Academy - Math Tutoring Mississauga",
    description: "Expert math tutoring for Grades 3-12. In-person & online programs.",
    images: ["https://levelupmathacademy.com/hero_img.png"],
  },
  alternates: {
    canonical: "https://levelupmathacademy.com",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Level Up Math Academy",
    "description": "Professional math tutoring center in Mississauga offering programs for Grades 3-12",
    "url": "https://levelupmathacademy.com",
    "logo": "https://levelupmathacademy.com/logo_3.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mississauga",
      "addressRegion": "ON",
      "addressCountry": "CA"
    },
    "telephone": "+1-416-123-4567",
    "email": "lumathacademy@gmail.com",
    "sameAs": [
      "https://facebook.com/levelupmathacademy",
      "https://instagram.com/levelupmathacademy"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Math Tutoring Programs",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Elementary Math Tutoring (Grades 3-5)",
            "description": "Building strong math foundations for elementary students"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Course",
            "name": "Middle School Math Tutoring (Grades 6-8)",
            "description": "Advanced math concepts and EQAO preparation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course", 
            "name": "High School Math Tutoring (Grades 9-12)",
            "description": "Functions, Calculus, and university preparation"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
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
