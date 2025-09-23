'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { contactConfig } from '@/config/contact';

export default function Header() {
  const [screenWidth, setScreenWidth] = useState(1000);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Top Announcement Banner - Continuous Loop */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white py-2 overflow-hidden">
        <div className="relative h-6">
          <motion.div
            className="absolute whitespace-nowrap text-xs sm:text-sm font-medium flex items-center h-full"
            animate={{
              x: [0, -1000]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 0
            }}
            style={{ 
              willChange: 'transform',
              transform: 'translate3d(0,0,0)'
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
                      {/* Courses Dropdown */}
                      <div 
                        className="relative"
                        onMouseEnter={() => setCoursesDropdownOpen(true)}
                        onMouseLeave={() => setCoursesDropdownOpen(false)}
                      >
                        <motion.div
                          className="flex items-center space-x-1 text-gray-700 hover:text-pink-600 transition-colors font-medium cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                        >
                          <span>Courses</span>
                          <ChevronDown className="w-4 h-4" />
                        </motion.div>
                        
                        {/* Dropdown Menu */}
                        <motion.div
                          className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-50"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ 
                            opacity: coursesDropdownOpen ? 1 : 0, 
                            y: coursesDropdownOpen ? 0 : -10 
                          }}
                          transition={{ duration: 0.2 }}
                          style={{ pointerEvents: coursesDropdownOpen ? 'auto' : 'none' }}
                        >
                          <Link href="/courses/grades-3-5">
                            <motion.div
                              className="px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors cursor-pointer"
                              whileHover={{ x: 5 }}
                            >
                              Grades 3-5
                            </motion.div>
                          </Link>
                          <Link href="/courses/grades-6-8">
                            <motion.div
                              className="px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors cursor-pointer"
                              whileHover={{ x: 5 }}
                            >
                              Grades 6-8
                            </motion.div>
                          </Link>
                          <Link href="/courses/grades-9-12">
                            <motion.div
                              className="px-4 py-3 text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors cursor-pointer"
                              whileHover={{ x: 5 }}
                            >
                              Grades 9-12
                            </motion.div>
                          </Link>
                        </motion.div>
                      </div>
                      <Link href="/services">
                        <motion.a
                          className="text-gray-700 hover:text-teal-600 transition-colors font-medium cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                        >
                          Our Services
                        </motion.a>
                      </Link>
                      <Link href="/about">
                        <motion.a
                          className="text-gray-700 hover:text-orange-600 transition-colors font-medium cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                        >
                          About Us
                        </motion.a>
                      </Link>
              
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
              {/* Mobile Courses Dropdown */}
              <div>
                <motion.div 
                  className="flex items-center justify-between text-gray-700 hover:text-pink-600 transition-colors font-medium py-2 cursor-pointer"
                  onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)}
                  whileHover={{ x: 5 }}
                >
                  <span>Courses</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${coursesDropdownOpen ? 'rotate-180' : ''}`} />
                </motion.div>
                
                {/* Mobile Dropdown Menu */}
                <motion.div
                  className="overflow-hidden"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: coursesDropdownOpen ? 1 : 0,
                    height: coursesDropdownOpen ? "auto" : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="pl-4 space-y-2 mt-2">
                    <Link href="/courses/grades-3-5">
                      <motion.div 
                        className="block text-gray-600 hover:text-pink-600 transition-colors font-medium py-2 cursor-pointer"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setCoursesDropdownOpen(false);
                        }}
                        whileHover={{ x: 5 }}
                      >
                        Grades 3-5
                      </motion.div>
                    </Link>
                    <Link href="/courses/grades-6-8">
                      <motion.div 
                        className="block text-gray-600 hover:text-pink-600 transition-colors font-medium py-2 cursor-pointer"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setCoursesDropdownOpen(false);
                        }}
                        whileHover={{ x: 5 }}
                      >
                        Grades 6-8
                      </motion.div>
                    </Link>
                    <Link href="/courses/grades-9-12">
                      <motion.div 
                        className="block text-gray-600 hover:text-pink-600 transition-colors font-medium py-2 cursor-pointer"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setCoursesDropdownOpen(false);
                        }}
                        whileHover={{ x: 5 }}
                      >
                        Grades 9-12
                      </motion.div>
                    </Link>
                  </div>
                </motion.div>
              </div>
              <Link href="/services">
                <motion.div 
                  className="block text-gray-700 hover:text-teal-600 transition-colors font-medium py-2 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ x: 5 }}
                >
                  Our Services
                </motion.div>
              </Link>
              <Link href="/about">
                <motion.div 
                  className="block text-gray-700 hover:text-orange-600 transition-colors font-medium py-2 cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ x: 5 }}
                >
                  About Us
                </motion.div>
              </Link>
              
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
