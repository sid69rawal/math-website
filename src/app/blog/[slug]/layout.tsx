import type { Metadata } from "next";
import { blogPostsBySlug } from "../posts";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsBySlug[slug];

  if (!post) {
    return {
      title: "Blog Post Not Found | Level Up Math Academy",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  const baseUrl = "https://levelupmathacademy.ca";
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  return {
    title: `${post.title} | Level Up Math Academy Blog`,
    description: post.excerpt,
    keywords: `math tutoring, math tips, ${post.title.toLowerCase()}, math education, math strategies, grade 3-12 math`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: postUrl,
      publishedTime: post.date,
      siteName: "Level Up Math Academy",
      images: [
        {
          url: "https://levelupmathacademy.ca/hero_img.png",
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["https://levelupmathacademy.ca/hero_img.png"],
    },
    alternates: {
      canonical: postUrl,
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
}

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPostsBySlug[slug];

  if (!post) {
    return <>{children}</>;
  }

  const baseUrl = "https://levelupmathacademy.ca";
  const postUrl = `${baseUrl}/blog/${post.slug}`;

  // Add JSON-LD structured data for individual blog post
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "url": postUrl,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Organization",
      "name": "Level Up Math Academy",
      "url": baseUrl,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Level Up Math Academy",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo_3.png`,
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl,
    },
    "articleSection": "Math Education",
    "keywords": "math tutoring, math tips, math education, math strategies",
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

