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
      <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
        {count.toLocaleString()}{suffix}
      </span>
    </motion.div>
  );
}

export default function HeroSection() {

  return (
    <section 
      id="home" 
      className="relative bg-white py-16 lg:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          >

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              Welcome to
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 bg-clip-text text-transparent whitespace-nowrap text-3xl sm:text-4xl lg:text-5xl">Level Up Math Academy</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A one of a kind math learning center in{' '}
              <span className="text-blue-600 font-semibold">Mississauga</span>{' '}
              offering all the programs both{' '}
              <span className="text-blue-600 font-semibold">in-person</span> and{' '}
              <span className="text-blue-600 font-semibold">online!</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <Link href="/services" className="w-full sm:w-auto">
                <motion.div
                  className="w-full inline-flex items-center justify-center px-6 py-4 sm:px-8 text-white font-semibold rounded-full transition-all duration-300 cursor-pointer text-center hover:opacity-90"
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
                  View Services 📚
                </motion.div>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.div
                  className="w-full inline-flex items-center justify-center px-6 py-4 sm:px-8 text-white font-semibold rounded-full transition-all duration-300 cursor-pointer text-center hover:opacity-90"
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
                  Contact Us 🚀
                </motion.div>
              </Link>
            </motion.div>

            {/* Animated Stats Cards */}
            <motion.div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8 sm:mt-12"
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
                <AnimatedCounter end={5} suffix="+" />
                <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">Years Experience</p>
              </motion.div>

              <motion.div 
                className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-blue-100"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(20, 184, 166, 0.2)",
                  y: -5 
                }}
                transition={{ type: "spring", bounce: 0.6 }}
              >
                <AnimatedCounter end={24} suffix="/7" />
                <p className="text-xs sm:text-sm text-gray-600 mt-1 font-medium">Online Support</p>
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
              className="relative rounded-2xl overflow-hidden shadow-xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.4 }}
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="/hero_img.jpeg"
                alt="Level Up Math Academy - Professional Math Learning"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-2xl"
                priority
              />
              {/* Optional overlay for better text contrast if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </motion.div>

            {/* Floating Achievement Badges - Mobile Responsive */}
            <motion.div
              className="absolute top-1 left-1 sm:-top-6 sm:-left-6 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold z-10"
              style={{ backgroundColor: '#30519d' }}
              initial={{ opacity: 0, scale: 0, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: -15 }}
              transition={{ delay: 1.2, duration: 0.6, type: "spring", bounce: 0.7 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: -5,
                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)"
              }}
            >
              <span className="hidden sm:inline">🏆 Top Rated</span>
              <span className="sm:hidden">🏆</span>
            </motion.div>

            <motion.div
              className="absolute top-1 right-1 sm:-top-4 sm:-right-8 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold z-10"
              style={{ backgroundColor: '#30519d' }}
              initial={{ opacity: 0, scale: 0, rotate: 15 }}
              animate={{ opacity: 1, scale: 1, rotate: 15 }}
              transition={{ delay: 1.4, duration: 0.6, type: "spring", bounce: 0.7 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)"
              }}
            >
              <span className="hidden sm:inline">⭐ 5-Star Reviews</span>
              <span className="sm:hidden">⭐</span>
            </motion.div>

            <motion.div
              className="absolute bottom-1 left-1 sm:-bottom-6 sm:-left-4 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm font-bold z-10"
              style={{ backgroundColor: '#30519d' }}
              initial={{ opacity: 0, scale: 0, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: -10 }}
              transition={{ delay: 1.6, duration: 0.6, type: "spring", bounce: 0.7 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <span className="hidden sm:inline">🎯 Results Guaranteed</span>
              <span className="sm:hidden">🎯</span>
            </motion.div>

            <motion.div
              className="absolute bottom-1 right-1 sm:-bottom-4 sm:-right-6 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold z-10"
              style={{ backgroundColor: '#30519d' }}
              initial={{ opacity: 0, scale: 0, rotate: 12 }}
              animate={{ opacity: 1, scale: 1, rotate: 12 }}
              transition={{ delay: 1.8, duration: 0.6, type: "spring", bounce: 0.7 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <span className="hidden sm:inline">🚀 Fast Progress</span>
              <span className="sm:hidden">🚀</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Rich Mathematical Background - 50+ Symbols */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Generate optimized floating math symbols */}
        {Array.from({ length: 18 }).map((_, index) => {
          const symbols = [
            '∫', 'π', '∑', '√', 'α', 'β', '∆', '∞', 'θ', 'λ', 'μ', 'σ', 'φ', 'ψ', 'ω', 'γ', 'δ', 'ε', 'ζ', 'η',
            '∂', '∇', '∈', '∉', '⊂', '⊃', '∪', '∩', '≠', '≤', '≥', '≈', '≡', '±', '∓', '×', '÷', '∝', '∴', '∵',
            '∀', '∃', '¬', '∧', '∨', '⟨', '⟩', '⌊', '⌋', '⌈', '⌉', '∘'
          ];
          
          const colors = [
            'text-blue-500', 'text-cyan-500', 'text-sky-500', 'text-blue-600', 
            'text-cyan-600', 'text-sky-600', 'text-blue-600', 'text-cyan-600',
            'text-blue-600', 'text-cyan-600', 'text-sky-600', 'text-blue-600'
          ];
          
          const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'];
          const opacities = ['opacity-30', 'opacity-35', 'opacity-40', 'opacity-45'];
          
          const symbol = symbols[index % symbols.length];
          const color = colors[index % colors.length];
          const size = sizes[index % sizes.length];
          const opacity = opacities[index % opacities.length];
          
          // Generate random positions
          const top = Math.random() * 90 + 5; // 5% to 95%
          const left = Math.random() * 90 + 5; // 5% to 95%
          
          // Generate random animation values for more dynamic floating
          const yMovement = (Math.random() - 0.5) * 60; // -30 to 30
          const xMovement = (Math.random() - 0.5) * 40; // -20 to 20
          const rotation = (Math.random() - 0.5) * 90; // -45 to 45
          const scaleVariation = 0.8 + Math.random() * 0.4; // 0.8 to 1.2
          const duration = 6 + Math.random() * 8; // 6 to 14 seconds
          const delay = Math.random() * 8; // 0 to 8 seconds
          
          return (
            <motion.div
              key={index}
              className={`absolute ${color} ${size} ${opacity} font-bold select-none`}
              style={{
                top: `${top}%`,
                left: `${left}%`,
                willChange: 'transform',
                transform: 'translate3d(0,0,0)' // Force hardware acceleration
              }}
              animate={{
                y: [0, yMovement, -yMovement * 0.5, yMovement * 0.3, 0], // Multi-point floating
                x: [0, xMovement, -xMovement * 0.7, xMovement * 0.4, 0], // Horizontal drift
                rotate: [0, rotation, -rotation * 0.6, rotation * 0.3, 0], // Gentle rotation
                scale: [1, scaleVariation, 1, scaleVariation * 0.9, 1], // Subtle scaling
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
                times: [0, 0.25, 0.5, 0.75, 1], // Smooth transitions between keyframes
              }}
            >
              {symbol}
            </motion.div>
          );
        })}

        {/* Simplified Featured Symbols */}
        <motion.div
          className="absolute top-20 left-[8%] text-purple-600 text-4xl font-bold opacity-40"
          style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
          animate={{
            y: [0, -20, -10, -25, 0],
            x: [0, 5, -3, 8, 0],
            rotate: [0, 5, -3, 8, 0],
            scale: [1, 1.1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          ∫
        </motion.div>
        
        <motion.div
          className="absolute top-32 right-[12%] text-blue-600 text-3xl font-bold opacity-40"
          style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
          animate={{
            y: [0, 15, 8, 18, 0],
            x: [0, -8, 4, -12, 0],
            rotate: [0, -8, 4, -12, 0],
            scale: [1, 0.9, 1.15, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          π
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-[15%] text-orange-600 text-4xl font-bold opacity-40"
          style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
          animate={{
            y: [0, -22, -12, -28, 0],
            x: [0, 6, -4, 10, 0],
            rotate: [0, 6, -4, 10, 0],
            scale: [1, 1.05, 0.9, 1.1, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          ∑
        </motion.div>
        
        <motion.div
          className="absolute bottom-24 right-[8%] text-blue-600 text-3xl font-bold opacity-40"
          style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
          animate={{
            y: [0, 18, 10, 22, 0],
            x: [0, -6, 3, -9, 0],
            rotate: [0, -6, 3, -9, 0],
            scale: [1, 0.95, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        >
          √
        </motion.div>
      </div>
    </section>
  );
}
