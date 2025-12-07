import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PostHogProvider } from "../components/posthog-provider";
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
  description: "Expert math tutor and math tutoring in Mississauga for Grades 3-12. Professional math tutor services. In-person & online programs. Algebra, Calculus, EQAO prep. Starting from $135/month with money-back guarantee. Book free assessment!",
  keywords: "math tutor Mississauga, math tutoring Mississauga, math tutor Ontario, math tutoring Ontario, online math tutoring Canada, Level Up Math Academy, algebra tutoring, calculus tutoring, EQAO prep, math competitions, elementary math tutoring, high school math help, best math tutor Mississauga, math tutor near me",
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
    url: "https://levelupmathacademy.ca",
    images: [
      {
        url: "https://levelupmathacademy.ca/hero_img.png",
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
    images: ["https://levelupmathacademy.ca/hero_img.png"],
  },
  alternates: {
    canonical: "https://levelupmathacademy.ca",
  },
  metadataBase: new URL('https://levelupmathacademy.ca'),
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness schema for local SEO (critical for "math tutor mississauga" searches)
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://levelupmathacademy.ca/#localbusiness",
    "name": "Level Up Math Academy",
    "alternateName": "Math Tutor Mississauga",
    "description": "Expert math tutor and math tutoring services in Mississauga. Professional math tutor for Grades 3-12. In-person and online math tutoring available.",
    "url": "https://levelupmathacademy.ca",
    "logo": "https://levelupmathacademy.ca/logo_3.png",
    "image": "https://levelupmathacademy.ca/hero_img.png",
    "priceRange": "$$",
    "telephone": "(416) 802-4713",
    "email": "lumathacademy@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1426 Pate Court",
      "addressLocality": "Mississauga",
      "addressRegion": "ON",
      "postalCode": "L5V 2Y8",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "43.5890",
      "longitude": "-79.6441"
    },
    "areaServed": {
      "@type": "City",
      "name": "Mississauga"
    },
    "serviceType": "Math Tutoring",
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
    },
    "sameAs": [
      "https://facebook.com/levelupmathacademy",
      "https://instagram.com/levelupmathacademy"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "20:00"
      }
    ]
  };

  // EducationalOrganization schema (keeping for educational context)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Level Up Math Academy",
    "description": "Professional math tutoring center in Mississauga offering programs for Grades 3-12",
    "url": "https://levelupmathacademy.ca",
    "logo": "https://levelupmathacademy.ca/logo_3.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1426 Pate Court",
      "addressLocality": "Mississauga",
      "addressRegion": "ON",
      "postalCode": "L5V 2Y8",
      "addressCountry": "CA"
    },
    "telephone": "(416) 802-4713",
    "email": "lumathacademy@gmail.com",
    "sameAs": [
      "https://facebook.com/levelupmathacademy",
      "https://instagram.com/levelupmathacademy"
    ]
  };

  // FAQ Schema for featured snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I find a math tutor in Mississauga?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Level Up Math Academy is a professional math tutoring center in Mississauga offering expert math tutor services for Grades 3-12. We provide both in-person and online math tutoring."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best math tutoring service in Mississauga?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Level Up Math Academy offers comprehensive math tutoring in Mississauga with 20+ years of experience, personalized teaching approach, and proven results for students in Grades 3-12."
        }
      },
      {
        "@type": "Question",
        "name": "How much does math tutoring cost in Mississauga?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our math tutoring programs start from $135+HST per month for 8 hours of classes. We offer flexible scheduling and a first month money-back guarantee."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer online math tutoring in Mississauga?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Level Up Math Academy offers both in-person math tutoring at our Mississauga center and online math tutoring options for students in Grades 3-12."
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        {/* LocalBusiness Schema - Critical for local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* EducationalOrganization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* FAQ Schema for featured snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        {/* Hidden keywords for SEO (not visible to users) */}
        <meta name="geo.region" content="CA-ON" />
        <meta name="geo.placename" content="Mississauga" />
        <meta name="geo.position" content="43.5890;-79.6441" />
        <meta name="ICBM" content="43.5890, -79.6441" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PostHogProvider>
          {children}
        </PostHogProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
