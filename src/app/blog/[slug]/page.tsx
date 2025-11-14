'use client';

import { motion } from 'framer-motion';
import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}

const blogPosts: Record<string, BlogPost> = {
  'why-young-students-should-avoid-calculators': {
    slug: 'why-young-students-should-avoid-calculators',
    title: 'Why Young Students Should Avoid Calculators — And Embrace Mental Math',
    date: '2025-11-14',
    readTime: '5 min read',
    content: (
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          In today&apos;s tech-saturated world, calculators are everywhere — built into phones, watches, and 
          even classroom devices. But when it comes to building strong math foundations, especially in 
          elementary and middle school, relying on calculators too early can short-circuit a child&apos;s growth 
          in critical thinking, number sense, and confidence.
        </p>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">The Hidden Cost of Early Calculator Use</h2>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          While calculators are helpful tools, they can become crutches for students who haven&apos;t yet 
          developed fluency with numbers. Here&apos;s why that&apos;s a concern:
        </p>

        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
          <li><strong>Loss of number sense:</strong> Students skip the process of understanding how numbers work 
          together — they just punch buttons.</li>
          <li><strong>Weakened problem-solving skills:</strong> Without mental math, students struggle to estimate, 
          check reasonableness, or spot errors.</li>
          <li><strong>Reduced confidence:</strong> When students depend on devices, they doubt their own ability to 
          solve problems independently.</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">The Power of Mental Math</h2>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Mental mathematics isn&apos;t just about speed — it&apos;s about thinking flexibly, logically, and 
          strategically. Here&apos;s how it transforms young learners:
        </p>

        <div className="space-y-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
              ⚡ Builds Speed and Fluency
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mental math trains the brain to recognize patterns, make quick calculations, and recall facts 
              efficiently — essential for timed tests and real-life decisions.
            </p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
              🧠 Develops Logical Thinking
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Solving problems mentally requires breaking them down, estimating, and choosing efficient 
              strategies — all of which strengthen reasoning and analytical skills.
            </p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
              💪 Boosts Confidence
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              When students solve problems without external help, they feel empowered. That confidence 
              spills into other subjects and life situations.
            </p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
              🎯 Improves Focus and Memory
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mental math activates working memory and attention — helping students stay engaged and 
              retain concepts longer.
            </p>
          </div>

          <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center">
              🌱 Encourages Growth Mindset
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mistakes in mental math become learning opportunities. Students learn to persevere, reflect, 
              and refine their strategies — key traits for lifelong learners.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Mental Math in Action</h2>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Instead of reaching for a calculator, students can:
        </p>

        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
          <li>Use friendly numbers to simplify subtraction (e.g., <strong>400 − 198 → 402 − 200 = 202</strong>)</li>
          <li>Break apart numbers for addition (e.g., <strong>47 + 36 → 40 + 30 + 7 + 6 = 83</strong>)</li>
          <li>Estimate before solving to check reasonableness</li>
          <li>Visualize problems using number lines or mental models</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">What Parents and Educators Can Do</h2>
        
        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
          <li>Encourage mental math games, puzzles, and challenges</li>
          <li>Limit calculator use to upper grades or complex problems</li>
          <li>Celebrate mental strategies, not just correct answers</li>
          <li>Model mental math in everyday life — shopping, cooking, budgeting</li>
        </ul>

        <h2 className="text-3xl font-bold text-gray-900 mt-8 mb-4">How Level Up Math Academy Supports Mental Math</h2>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          At Level Up Math Academy, we believe in empowering young learners through mental math 
          strategies that make numbers fun and intuitive. Our programs are designed to:
        </p>

        <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 mb-8 ml-4">
          <li>Reinforce number sense through visual models, logic puzzles, and estimation games</li>
          <li>Build fluency with practice and real-world math challenges</li>
          <li><strong>Boosting confidence</strong> by encouraging flexible thinking</li>
          <li>Help students develop speed, accuracy, and independence — without relying on 
          calculators</li>
          <li>Provide personalized feedback so students grow at their own pace and feel proud of 
          their progress</li>
        </ul>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Whether your child is just building their math foundation or preparing for high school success, 
          we&apos;re here to help them think sharper, solve smarter, and feel confident every step of the way.
        </p>
      </div>
    )
  }
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <p className="text-lg text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Blog Post Header */}
      <section className="text-white pt-32 pb-16 mt-20" style={{ backgroundColor: '#30519d' }}>
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
      <article className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8 md:p-12"
          >
            {post.content}
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

