'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { contactConfig } from '@/config/contact';

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(1000);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Top Announcement Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-2 overflow-hidden">
        <div className="relative h-6">
          <motion.div
            className="absolute whitespace-nowrap text-xs sm:text-sm font-medium flex items-center h-full"
            animate={{
              x: [screenWidth, -(2000)]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <span className="mx-8">
              🎯 First Month Guarantee: If you&apos;re not satisfied after the first month, you&apos;ll receive a full refund
            </span>
            <span className="mx-8">
              📚 Algebra, Geometry, Trigonometry, Functions, Advanced Functions, Calculus &amp; Vectors, Math Competitions etc.
            </span>
            <span className="mx-8">
              🎯 First Month Guarantee: If you&apos;re not satisfied after the first month, you&apos;ll receive a full refund
            </span>
            <span className="mx-8">
              📚 Algebra, Geometry, Trigonometry, Functions, Advanced Functions, Calculus &amp; Vectors, Math Competitions etc.
            </span>
          </motion.div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav 
        className="bg-white shadow-sm sticky top-0 z-50"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src="/logo.png"
                  alt="Level Up Math Academy Logo"
                  width={90}
                  height={90}
                  className="rounded-lg"
                />
              </motion.div>
            </Link>
            
            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <motion.a 
                href="#what-we-offer" 
                className="text-gray-700 hover:text-pink-600 transition-colors font-medium" 
                whileHover={{ scale: 1.05 }}
              >
                What We Offer
              </motion.a>
              <motion.a 
                href="#our-approach" 
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium" 
                whileHover={{ scale: 1.05 }}
              >
                Our Approach
              </motion.a>
              <motion.a 
                href="#testimonials" 
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium" 
                whileHover={{ scale: 1.05 }}
              >
                Testimonials
              </motion.a>
              
              {/* Social Media Icons */}
              <div className="flex items-center space-x-3 ml-4">
                <motion.a
                  href={contactConfig.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-purple-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href={contactConfig.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-pink-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
              
              <Link href="/contact">
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden text-gray-700 p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>

          {/* Mobile Navigation Menu */}
          <motion.div 
            className="lg:hidden overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: mobileMenuOpen ? 1 : 0, 
              height: mobileMenuOpen ? "auto" : 0 
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-4 bg-gray-50 rounded-lg p-4 space-y-3">
              <motion.a 
                href="#what-we-offer" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                What We Offer
              </motion.a>
              <motion.a 
                href="#our-approach" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                Our Approach
              </motion.a>
              <motion.a 
                href="#testimonials" 
                className="block text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                Testimonials
              </motion.a>
              
              <div className="flex space-x-4 pt-2 pb-2">
                <motion.a 
                  href={contactConfig.socialMedia.facebook} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600"
                  whileHover={{ scale: 1.2 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href={contactConfig.socialMedia.instagram} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-pink-600"
                  whileHover={{ scale: 1.2 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
              
              <Link href="/contact">
                <motion.button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}
