'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';
import { allBlogPosts } from './posts';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="text-white pt-32 pb-20 mt-20" style={{ backgroundColor: '#30519d' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Insights, tips, and strategies to help your child excel in mathematics
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16" aria-label="Blog posts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allBlogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="p-6 h-full flex flex-col">
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      <time itemProp="datePublished" dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </time>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors" itemProp="headline">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 flex-grow" itemProp="description">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold mt-auto">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {allBlogPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-xl">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingActionButton />
    </div>
  );
}

