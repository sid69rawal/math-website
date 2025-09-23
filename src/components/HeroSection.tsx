'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Typing Animation Component
function TypingAnimation({ text, delay = 0, repeatDelay = 3000 }: { text: string, delay?: number, repeatDelay?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          // Finished typing, wait then reset
          setTimeout(() => {
            setDisplayText('');
            setCurrentIndex(0);
            setIsTyping(true);
          }, repeatDelay);
        }
      }, delay + currentIndex * 8); // Ultra fast - 8ms per character

      return () => clearTimeout(timer);
    }
  }, [currentIndex, text, delay, isTyping, repeatDelay]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-1 h-8 bg-gradient-to-r from-purple-600 to-pink-600 ml-1"
      />
    </span>
  );
}

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
      <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
        {count.toLocaleString()}{suffix}
      </span>
    </motion.div>
  );
}

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <section 
      id="home" 
      className="relative bg-white py-16 lg:py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50"></div>
      
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
              <TypingAnimation text="Welcome to " delay={50} repeatDelay={4000} />
              <motion.span
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent block"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.3, type: "spring", bounce: 0.5 }}
              >
                <TypingAnimation text="Level Up Math Academy" delay={200} repeatDelay={4000} />
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              A one of a kind math learning center in{' '}
              <span className="text-purple-600 font-semibold">Mississauga</span>{' '}
              offering all the programs both{' '}
              <span className="text-pink-600 font-semibold">in-person</span> and{' '}
              <span className="text-orange-500 font-semibold">online!</span>
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.a
                href="#what-we-offer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 sm:px-8 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-full transition-all duration-300 text-center"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
                  y: -2 
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.4, type: "spring", bounce: 0.6 }}
              >
                View What We Offer 📚
              </motion.a>
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.div
                  className="w-full inline-flex items-center justify-center px-6 py-4 sm:px-8 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all duration-300 cursor-pointer text-center"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
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
                className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100"
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
                className="text-center p-3 sm:p-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-teal-100"
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
            style={{ y: y1 }}
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
              className="absolute top-1 left-1 sm:-top-6 sm:-left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm font-bold z-10"
              initial={{ opacity: 0, scale: 0, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: -15 }}
              transition={{ delay: 1.2, duration: 0.6, type: "spring", bounce: 0.7 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: -5,
                boxShadow: "0 10px 30px rgba(147, 51, 234, 0.4)"
              }}
              style={{ y: y2 }}
            >
              <span className="hidden sm:inline">🏆 Top Rated</span>
              <span className="sm:hidden">🏆</span>
            </motion.div>

            <motion.div
              className="absolute top-1 right-1 sm:-top-4 sm:-right-8 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm font-bold z-10"
              initial={{ opacity: 0, scale: 0, rotate: 15 }}
              animate={{ opacity: 1, scale: 1, rotate: 15 }}
              transition={{ delay: 1.4, duration: 0.6, type: "spring", bounce: 0.7 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: 5,
                boxShadow: "0 10px 30px rgba(249, 115, 22, 0.4)"
              }}
              style={{ y: y1 }}
            >
              <span className="hidden sm:inline">⭐ 5-Star Reviews</span>
              <span className="sm:hidden">⭐</span>
            </motion.div>

            <motion.div
              className="absolute bottom-1 left-1 sm:-bottom-6 sm:-left-4 bg-gradient-to-r from-teal-500 to-purple-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm font-bold z-10"
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
              className="absolute bottom-1 right-1 sm:-bottom-4 sm:-right-6 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg text-xs sm:text-sm font-bold z-10"
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
            'text-purple-300', 'text-pink-300', 'text-orange-300', 'text-teal-300', 
            'text-blue-300', 'text-indigo-300', 'text-rose-300', 'text-amber-300',
            'text-purple-400', 'text-pink-400', 'text-orange-400', 'text-teal-400'
          ];
          
          const sizes = ['text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl'];
          const opacities = ['opacity-10', 'opacity-15', 'opacity-20', 'opacity-25'];
          
          const symbol = symbols[index % symbols.length];
          const color = colors[index % colors.length];
          const size = sizes[index % sizes.length];
          const opacity = opacities[index % opacities.length];
          
          // Generate random positions
          const top = Math.random() * 90 + 5; // 5% to 95%
          const left = Math.random() * 90 + 5; // 5% to 95%
          
          // Generate random animation values
          const yMovement = (Math.random() - 0.5) * 40; // -20 to 20
          const rotation = (Math.random() - 0.5) * 60; // -30 to 30
          const duration = 4 + Math.random() * 6; // 4 to 10 seconds
          const delay = Math.random() * 5; // 0 to 5 seconds
          
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
                y: [0, yMovement * 0.5, 0], // Reduced movement
                rotate: [0, rotation * 0.3, 0], // Simplified rotation
              }}
              transition={{
                duration: Math.max(duration, 8), // Slower, less frequent updates
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
              }}
            >
              {symbol}
            </motion.div>
          );
        })}

        {/* Simplified Featured Symbols */}
        <motion.div
          className="absolute top-20 left-[8%] text-purple-400 text-4xl font-bold opacity-25"
          style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ∫
        </motion.div>
        
        <motion.div
          className="absolute top-32 right-[12%] text-pink-400 text-3xl font-bold opacity-25"
          style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          π
        </motion.div>
        
        <motion.div
          className="absolute bottom-32 left-[15%] text-orange-400 text-4xl font-bold opacity-25"
          style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
          animate={{
            y: [0, -18, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          ∑
        </motion.div>
        
        <motion.div
          className="absolute bottom-24 right-[8%] text-teal-400 text-3xl font-bold opacity-25"
          style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          √
        </motion.div>
      </div>
    </section>
  );
}
