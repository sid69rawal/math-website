'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';


// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      let startTime: number;
      const startCount = 0;
      
      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(startCount + (end - startCount) * progress));
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };
      
      requestAnimationFrame(updateCount);
    }
  }, [isVisible, end, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.6 }}
      onViewportEnter={() => setIsVisible(true)}
    >
      <span className="text-3xl md:text-4xl font-bold" style={{ color: '#30519d' }}>
        {count.toLocaleString()}{suffix}
      </span>
    </motion.div>
  );
}

export default function HeroSection() {

  return (
    <section 
      id="home" 
      className="relative py-8 lg:py-16 w-full full-width-section"
    >
      {/* Full-width background that extends edge-to-edge */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400 w-full"></div>
      
      {/* Content container with proper constraints */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="-mt-4"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              Welcome to
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-bold" style={{ color: '#30519d' }}>Level Up Math Academy</span>
            </motion.h1>
            
            <motion.p 
              className="text-base sm:text-lg text-gray-800 mb-3 sm:mb-4 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A one of a kind math learning center in{' '}
              <span>Mississauga</span>{' '}
              offering all the programs both{' '}
              <span className="text-blue-600 font-semibold">in-person</span> and{' '}
              <span className="text-blue-600 font-semibold">online!</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link href="/services" className="w-full sm:w-auto">
                <motion.div
                  className="w-full inline-flex items-center justify-center px-6 py-4 sm:px-8 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer text-center hover:opacity-90"
                  style={{ backgroundColor: '#30519d' }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2 
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.4, type: "spring", bounce: 0.6 }}
                >
                  View Services
                </motion.div>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.div
                  className="w-full inline-flex items-center justify-center px-6 py-4 sm:px-8 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer text-center hover:opacity-90"
                  style={{ backgroundColor: '#30519d' }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2 
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.4, type: "spring", bounce: 0.6 }}
                >
                  Book a Free Assessment
                </motion.div>
              </Link>
            </motion.div>

            {/* Animated Stats Cards */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
            >
              <motion.div 
                className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-purple-100"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.2)",
                  y: -5 
                }}
                transition={{ type: "spring", bounce: 0.6 }}
              >
                <AnimatedCounter end={500} suffix="+" />
                <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">Happy Students</p>
              </motion.div>

              <motion.div 
                className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.2)",
                  y: -5 
                }}
                transition={{ type: "spring", bounce: 0.6 }}
              >
                <AnimatedCounter end={95} suffix="%" />
                <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">Success Rate</p>
              </motion.div>

              <motion.div 
                className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-orange-100"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(249, 115, 22, 0.2)",
                  y: -5 
                }}
                transition={{ type: "spring", bounce: 0.6 }}
              >
                <AnimatedCounter end={20} suffix="+" />
                <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">Years Experience</p>
              </motion.div>

            </motion.div>
          </motion.div>

          {/* Right Content - Stats & Image Area */}
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Hero Image */}
            <motion.div
              className="relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <Image
                src="/hero_img.png"
                alt="Level Up Math Academy - Professional Math Learning"
                width={800}
                height={1500}
                className="w-full h-[44rem] object-contain"
                priority
              />
            </motion.div>

          </motion.div>
        </div>
        </div>
      </div>

    </section>
  );
}
