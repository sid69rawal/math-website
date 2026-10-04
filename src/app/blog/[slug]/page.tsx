import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allBlogPosts, blogPostsBySlug } from '../posts';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPostsBySlug[slug];

  if (!post) {
    return {
      title: 'Post Not Found | Level Up Math Academy',
      description: 'The requested blog post could not be found.',
    };
  }

  const url = `https://levelupmathacademy.ca/blog/${post.slug}`;

  return {
    title: `${post.title} | Level Up Math Academy`,
    description: post.excerpt,
    keywords: `${post.title.toLowerCase()}, math tutoring Mississauga, math tutor Mississauga, math skills, Level Up Math Academy, math study strategies`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} | Level Up Math Academy`,
      description: post.excerpt,
      type: 'article',
      url,
      publishedTime: post.date,
      authors: ['Level Up Math Academy'],
      siteName: 'Level Up Math Academy',
      images: [
        {
          url: 'https://levelupmathacademy.ca/hero_img.png',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Level Up Math Academy`,
      description: post.excerpt,
      images: ['https://levelupmathacademy.ca/hero_img.png'],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPostsBySlug[slug];

  if (!post) {
    notFound();
  }

  return <BlogPostClient post={post} />;
}
