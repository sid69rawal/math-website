'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';
import { BlogPost } from '../posts/types';

export default function BlogPostClient({ post }: { post: BlogPost }) {
  const postSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://levelupmathacademy.ca/blog/${post.slug}`
    },
    "author": {
      "@type": "Organization",
      "name": "Level Up Math Academy",
      "url": "https://levelupmathacademy.ca"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Level Up Math Academy",
      "url": "https://levelupmathacademy.ca",
      "logo": {
        "@type": "ImageObject",
        "url": "https://levelupmathacademy.ca/logo_3.png"
      }
    },
    "image": "https://levelupmathacademy.ca/hero_img.png"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(postSchema),
        }}
      />
      <Header />
      
      {/* Blog Post Header */}
      <section className="text-white pt-[140px] pb-16 mt-20" style={{ backgroundColor: '#30519d' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/blog"
              className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {post.title}
            </h1>
            <div className="flex items-center text-blue-100 space-x-6">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Post Content */}
      <article className="py-12" itemScope itemType="https://schema.org/BlogPosting">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 md:p-12"
          >
            <meta itemProp="headline" content={post.title} />
            <meta itemProp="datePublished" content={post.date} />
            <meta itemProp="dateModified" content={post.date} />
            <div itemProp="articleBody">
              {post.content}
            </div>
          </motion.div>
        </div>
      </article>

      {/* Back to Blog Link */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-left">
        <Link 
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to All Blog Posts
        </Link>
      </div>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}
