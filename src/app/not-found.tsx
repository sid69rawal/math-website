'use client';

import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

export default function NotFound() {
  const quickLinks = [
    {
      title: "Home",
      description: "Return to our main page",
      href: "/",
      icon: Home,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Courses",
      description: "Explore our math programs",
      href: "/courses",
      icon: BookOpen,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Contact",
      description: "Get in touch with us",
      href: "/contact",
      icon: Search,
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Navigation */}
      <Header />

      {/* Floating Math Symbols Background */}
      <FloatingElements 
        elements={['❓', '🔍', '📚', '🏠', '💡', '🎯']}
        count={6}
        size="lg"
        colors={['text-purple-200', 'text-pink-200', 'text-orange-200', 'text-teal-200']}
      />

      {/* Main 404 Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          {/* 404 Number */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </motion.div>

          {/* Error Message */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Oops! Page Not Found 🤔
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The page you&apos;re looking for seems to have wandered off into the mathematical void. 
              Don&apos;t worry, even the best mathematicians get lost sometimes!
            </p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <motion.button
                  className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Home className="w-5 h-5" />
                  <span>Go Home</span>
                </motion.button>
              </Link>
              
              <motion.button
                onClick={() => window.history.back()}
                className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Go Back</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Popular Pages 🎯
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {quickLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 + (index * 0.1), duration: 0.6 }}
                >
                  <Link href={link.href}>
                    <motion.div
                      className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <div className="text-center">
                        <motion.div
                          className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${link.color} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                        >
                          <link.icon className="w-8 h-8 text-white" />
                        </motion.div>
                        
                        <h4 className="text-lg font-bold text-gray-900 mb-2">
                          {link.title}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {link.description}
                        </p>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Fun Math Fact */}
          <motion.div
            className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Did You Know? 🧮
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              The number 404 comes from HTTP status codes. The first &quot;4&quot; indicates a client error, 
              the &quot;0&quot; indicates a general syntax error, and the second &quot;4&quot; indicates a specific error 
              in the &quot;04&quot; subcategory - which is &quot;Not Found&quot;. Even error codes follow mathematical patterns! 
              📊✨
            </p>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
