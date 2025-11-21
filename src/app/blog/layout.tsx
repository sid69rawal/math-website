import type { Metadata } from "next";
import { allBlogPosts } from "./posts";

export const metadata: Metadata = {
  title: "Math Tutoring Blog | Tips, Strategies & Insights | Level Up Math Academy",
  description: "Expert math tutoring insights, tips, and strategies for parents and students. Learn about mental math, study techniques, and how to excel in mathematics from Grades 3-12.",
  keywords: "math tutoring blog, math tips for students, math study strategies, mental math techniques, math education blog, math tutoring advice, math learning tips, grade 3-12 math help",
  openGraph: {
    title: "Math Tutoring Blog | Level Up Math Academy",
    description: "Expert math tutoring insights, tips, and strategies for parents and students. Learn how to excel in mathematics.",
    type: "website",
    url: "https://levelupmathacademy.ca/blog",
    siteName: "Level Up Math Academy",
    images: [
      {
        url: "https://levelupmathacademy.ca/hero_img.png",
        width: 1200,
        height: 630,
        alt: "Level Up Math Academy Blog",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Math Tutoring Blog | Level Up Math Academy",
    description: "Expert math tutoring insights, tips, and strategies for parents and students.",
    images: ["https://levelupmathacademy.ca/hero_img.png"],
  },
  alternates: {
    canonical: "https://levelupmathacademy.ca/blog",
  },
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
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Add JSON-LD structured data for blog listing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Level Up Math Academy Blog",
    "description": "Expert math tutoring insights, tips, and strategies for parents and students",
    "url": "https://levelupmathacademy.ca/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Level Up Math Academy",
      "url": "https://levelupmathacademy.ca",
    },
    "blogPost": allBlogPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://levelupmathacademy.ca/blog/${post.slug}`,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Level Up Math Academy",
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}

