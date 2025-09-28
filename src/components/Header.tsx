'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { contactConfig } from '@/config/contact';

// Ticker component for animated messages
function Ticker({ messages = [] as string[], cycleDuration = 8 }) {
  // cycleDuration = how many seconds each message takes to fully travel
  const [index, setIndex] = useState(0);

  // advance to next message after each animation completes
  useEffect(() => {
    if (!messages || messages.length === 0) return;
    const id = setTimeout(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, cycleDuration * 1000);
    return () => clearTimeout(id);
  }, [index, messages, cycleDuration]);

  // Guard: show nothing if no messages
  if (!messages || messages.length === 0) return null;

  return (
    <div
      className="ticker-container w-full overflow-hidden"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{ minHeight: 24 }} // tweak as needed (mobile heights)
    >
      <motion.div
        key={index} // new element each message ensures initial anim state runs
        initial={{ x: '100%' }}            // start fully off-screen right
        animate={{ x: '-100%' }}           // move to fully off-screen left
        transition={{ duration: cycleDuration, ease: 'linear' }}
        className="inline-block whitespace-nowrap font-medium text-sm sm:text-base"
        // keep the text visually centered vertically if you add height to container
        style={{ display: 'inline-block' }}
      >
        {/* message content */}
        <span className="px-2">{messages[index]}</span>
      </motion.div>
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  const messages = [
    "First Month Guarantee: If you\'re not satisfied after the first month, you\'ll receive a full refund",
    "Algebra, Geometry, Trigonometry, Functions, Advanced Functions, Calculus & Vectors, Math Competitions etc."
  ];

  // safe fallbacks if contactConfig is undefined/missing values
  const email = contactConfig?.email ?? 'info@example.com';
  const phone = contactConfig?.phone ?? '+91-0000000000';


  return (
    <>
      {/* Combined Header with Ribbon */}
      <div className="sticky top-0 z-50">
        {/* Static Ribbon - REPLACE THIS ENTIRE BLOCK */}
        <div className="text-white py-2 sm:py-3" style={{ backgroundColor: '#30519d' }}>
          <div className="max-w-7xl mx-auto px-3 sm:px-4">
            <div className="flex flex-row items-center justify-between gap-3 text-base sm:text-lg">
              {/* Contacts - moved further to the left with minimal spacing */}
              <div className="flex items-center space-x-1 sm:space-x-2 flex-shrink-0 order-1 mr-6">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center space-x-1 text-sm sm:text-base whitespace-nowrap"
                  aria-label={`Email ${email}`}
                >
                  <span>📧</span>
                  <span className="inline-block truncate max-w-[120px] sm:max-w-none">{email}</span>
                </a>

                <a
                  href={`tel:${phone}`}
                  className="flex items-center space-x-1 text-sm sm:text-base whitespace-nowrap"
                  aria-label={`Phone ${phone}`}
                >
                  <span>📞</span>
                  <span className="inline-block truncate max-w-[110px] sm:max-w-none">{phone}</span>
                </a>
              </div>

              {/* Messages area - horizontal ticker for all screen sizes with more space */}
              <div className="flex-1 min-w-0 order-2">
                <Ticker messages={messages} cycleDuration={25 /* seconds per message - much slower animation */} />
              </div>
            </div>
          </div>
        </div>
        {/* end replacement */}

        {/* Main Navigation */}
        <motion.nav 
          className="bg-white shadow-sm"
          initial={{ y: -20, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1
          }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="max-w-7xl mx-auto px-4 sm:px-6"
            animate={{
              paddingTop: '0.25rem',
              paddingBottom: '0.25rem'
            }}
            transition={{ duration: 0.3 }}
          >
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
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </motion.div>
              </Link>
              
              {/* Desktop Navigation Menu */}
              <div className="hidden lg:flex items-center space-x-18 ml-36">
                {/* Home Link */}
                <Link href="/">
                  <motion.a
                    className="text-gray-800 hover:text-blue-600 transition-colors font-semibold cursor-pointer text-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    Home
                  </motion.a>
                </Link>

                {/* Courses Dropdown */}
                <div 
                  className="relative"
                  onMouseEnter={() => setCoursesDropdownOpen(true)}
                  onMouseLeave={() => setCoursesDropdownOpen(false)}
                >
                  <motion.div
                    className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 transition-colors font-semibold cursor-pointer text-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span>Courses</span>
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                  
                  {/* Dropdown Menu */}
                  <motion.div
                    className="absolute top-full left-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-50"
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
                        className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer text-lg"
                        whileHover={{ x: 5 }}
                      >
                        Grades 3-5
                      </motion.div>
                    </Link>
                    <Link href="/courses/grades-6-8">
                      <motion.div
                        className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer text-lg"
                        whileHover={{ x: 5 }}
                      >
                        Grades 6-8
                      </motion.div>
                    </Link>
                    <Link href="/courses/grades-9-12">
                      <motion.div
                        className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer text-lg"
                        whileHover={{ x: 5 }}
                      >
                        Grades 9-12
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>

                <Link href="/services">
                  <motion.a
                    className="text-gray-800 hover:text-blue-600 transition-colors font-semibold cursor-pointer text-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    Our Services
                  </motion.a>
                </Link>
                <Link href="/about">
                  <motion.a
                    className="text-gray-800 hover:text-blue-600 transition-colors font-semibold cursor-pointer text-lg"
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
                    className="text-gray-500 hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                </div>
                
                <Link href="/contact">
                  <motion.button
                    className="text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 cursor-pointer hover:opacity-90"
                    style={{ backgroundColor: '#30519d' }}
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
                    className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 cursor-pointer"
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
                          className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 cursor-pointer"
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
                          className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 cursor-pointer"
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
                          className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 cursor-pointer"
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
                <Link href="/">
                  <motion.div 
                    className="block text-gray-800 hover:text-blue-600 transition-colors font-semibold py-2 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ x: 5 }}
                  >
                    Home
                  </motion.div>
                </Link>
                <Link href="/services">
                  <motion.div 
                    className="block text-gray-800 hover:text-blue-600 transition-colors font-semibold py-2 cursor-pointer"
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ x: 5 }}
                  >
                    Our Services
                  </motion.div>
                </Link>
                <Link href="/about">
                  <motion.div 
                    className="block text-gray-800 hover:text-blue-600 transition-colors font-semibold py-2 cursor-pointer"
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
                    className="text-gray-500 hover:text-blue-600"
                    whileHover={{ scale: 1.2 }}
                  >
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                </div>
                
                <Link href="/contact">
                  <motion.button
                    className="w-full text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer hover:opacity-90"
                    style={{ backgroundColor: '#30519d' }}
                    onClick={() => setMobileMenuOpen(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.nav>
      </div>
      <style jsx>{`
        /* remove old marquee styles; you can keep reduced-motion query if you like */
        @media (prefers-reduced-motion: reduce) {
          .ticker-container > * {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </>
  );
}
