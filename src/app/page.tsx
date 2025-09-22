'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Testimonial Carousel Component
function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Level Up Math Academy completely transformed my daughter's relationship with math! She went from dreading math homework to actually enjoying it. The personalized approach and patient teachers made all the difference. Her grades improved from C+ to A- in just 3 months!",
      author: "Sarah Chen",
      role: "Parent of Grade 8 Student",
      rating: 5
    },
    {
      text: "I was struggling with calculus and thought I'd never understand it. The teachers at Level Up Math Academy broke down complex concepts into simple steps. Their concept-first teaching really works! I'm now confident going into my final exams.",
      author: "Alex Kumar",
      role: "Grade 12 Student", 
      rating: 5
    },
    {
      text: "The flexibility of online and in-person sessions was perfect for our busy schedule. My son loves the small group setting - he gets the attention he needs without feeling overwhelmed. The support beyond class hours is exceptional!",
      author: "Michelle Rodriguez",
      role: "Parent of Grade 10 Student",
      rating: 5
    },
    {
      text: "As a parent, I was amazed by how quickly my child's confidence grew. The teachers don't just teach math; they build self-esteem and problem-solving skills. The investment is worth every penny - highly recommend!",
      author: "David Thompson", 
      role: "Parent of Grade 6 Student",
      rating: 5
    },
    {
      text: "I've tried other tutoring centers, but Level Up Math Academy is different. They actually care about understanding the 'why' behind math, not just memorizing formulas. My algebra skills have improved tremendously!",
      author: "Emma Zhang",
      role: "Grade 9 Student",
      rating: 5
    },
    {
      text: "The curriculum-aligned approach helped my daughter excel in her EQAO tests. The teachers prepared her not just for exams but for real understanding. She's now helping her friends with math - what a turnaround!",
      author: "Robert Singh",
      role: "Parent of Grade 7 Student", 
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Auto-advance every 8 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Main Testimonial Card */}
      <motion.div
        className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 min-h-[400px] flex flex-col justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {/* Star Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <Star className="w-6 h-6 text-yellow-400 fill-current" />
                </motion.div>
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 italic">
              "{testimonials[currentIndex].text}"
            </blockquote>

            {/* Author Info */}
            <div className="border-t border-white/20 pt-6">
              <p className="text-white font-semibold text-lg mb-1">
                — {testimonials[currentIndex].author}
              </p>
              <p className="text-white/70 text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={prevTestimonial}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextTestimonial}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(1000);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 overflow-hidden">
      {/* Static Ribbon with Moving Messages */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-gray-900 py-2 overflow-hidden shadow-lg">
        <div className="relative h-6">
          <motion.div
            className="absolute whitespace-nowrap text-xs sm:text-sm font-bold flex items-center h-full"
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
              🎯 First Month Guarantee: If you're not satisfied after the first month, you'll receive a full refund
            </span>
            <span className="mx-8">
              📚 Algebra, Geometry, Trigonometry, Functions, Advanced Functions, Calculus & Vectors, Math Competitions etc.
            </span>
            <span className="mx-8">
              🎯 First Month Guarantee: If you're not satisfied after the first month, you'll receive a full refund
            </span>
            <span className="mx-8">
              📚 Algebra, Geometry, Trigonometry, Functions, Advanced Functions, Calculus & Vectors, Math Competitions etc.
            </span>
          </motion.div>
        </div>
      </div>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Math Symbols */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-4xl font-bold"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              rotate: 0 
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              rotate: 360
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {['∑', 'π', '∞', '√', '∆', '∫', 'α', 'β', '±', '÷'][i % 10]}
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <motion.nav 
        className="relative z-10 p-6 pt-16"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Only */}
          <Link href="/">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src="/logo.png"
                alt="Level Up Math Academy Logo"
                width={80}
                height={80}
                className="rounded-full"
              />
            </motion.div>
          </Link>
          
          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <motion.a 
              href="#home" 
              className="text-white hover:text-yellow-300 transition-colors font-semibold" 
              whileHover={{ scale: 1.1 }}
            >
              Home
            </motion.a>
            <motion.a 
              href="#what-we-offer" 
              className="text-white hover:text-yellow-300 transition-colors font-semibold" 
              whileHover={{ scale: 1.1 }}
            >
              What We Offer
            </motion.a>
            <motion.a 
              href="#our-approach" 
              className="text-white hover:text-yellow-300 transition-colors font-semibold" 
              whileHover={{ scale: 1.1 }}
            >
              Our Approach
            </motion.a>
            <motion.a 
              href="#testimonials" 
              className="text-white hover:text-yellow-300 transition-colors font-semibold" 
              whileHover={{ scale: 1.1 }}
            >
              Testimonials
            </motion.a>
            
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 ml-6">
              <motion.a
                href="https://facebook.com/levelupmathacademy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://instagram.com/levelupmathacademy"
            target="_blank"
            rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram className="w-6 h-6" />
              </motion.a>
            </div>
            
            <Link href="/contact">
              <motion.div
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 py-2 rounded-full font-bold hover:shadow-lg transition-all cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white p-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <motion.span 
                className="block w-full h-0.5 bg-white mb-1"
                animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 6 : 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="block w-full h-0.5 bg-white mb-1"
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span 
                className="block w-full h-0.5 bg-white"
                animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -6 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
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
          <div className="mt-4 bg-white/10 backdrop-blur-md rounded-2xl p-4">
            <div className="flex flex-col space-y-3">
              <motion.a 
                href="#home" 
                className="text-white hover:text-yellow-300 transition-colors font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                Home
              </motion.a>
              <motion.a 
                href="#what-we-offer" 
                className="text-white hover:text-yellow-300 transition-colors font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                What We Offer
              </motion.a>
              <motion.a 
                href="#our-approach" 
                className="text-white hover:text-yellow-300 transition-colors font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                Our Approach
              </motion.a>
              <motion.a 
                href="#testimonials" 
                className="text-white hover:text-yellow-300 transition-colors font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                Testimonials
              </motion.a>
              <div className="flex space-x-4 pt-2 pb-2">
                <motion.a 
                  href="https://facebook.com/levelupmathacademy" 
          target="_blank"
          rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                  whileHover={{ scale: 1.2 }}
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a 
                  href="https://instagram.com/levelupmathacademy" 
          target="_blank"
          rel="noopener noreferrer"
                  className="text-white hover:text-pink-400"
                  whileHover={{ scale: 1.2 }}
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
              </div>
              <Link href="/contact">
                <motion.div
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-3 rounded-full font-bold text-center cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact Us
                </motion.div>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="relative z-10 min-h-[80vh] flex items-center justify-center px-6 py-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/hero-math-bg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Fallback overlay if no background image */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-600/20 z-0"></div>
        
        {/* Hero Content */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to{' '}
            <motion.span
              className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 40px rgba(255,255,255,0.8)',
                  '0 0 20px rgba(255,255,255,0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Level Up Math Academy
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white/95 mb-8 md:mb-12 leading-relaxed px-4 font-medium"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A one of a kind math learning center in{' '}
            <span className="text-yellow-300 font-bold">Mississauga</span>{' '}
            offering all the programs both{' '}
            <span className="text-yellow-300 font-bold">in-person</span> and{' '}
            <span className="text-yellow-300 font-bold">online!</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.a
              href="#what-we-offer"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl cursor-pointer text-center inline-block"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              View What We Offer 📚
            </motion.a>
            <Link href="/contact">
              <motion.div
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl cursor-pointer text-center"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us 🚀
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Background Pattern for Math Theme */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-20 left-10 text-white text-6xl font-bold animate-pulse">∫</div>
          <div className="absolute top-40 right-20 text-white text-5xl font-bold animate-pulse delay-1000">π</div>
          <div className="absolute bottom-40 left-20 text-white text-7xl font-bold animate-pulse delay-2000">∑</div>
          <div className="absolute bottom-20 right-10 text-white text-4xl font-bold animate-pulse delay-500">√</div>
          <div className="absolute top-1/2 left-1/4 text-white text-5xl font-bold animate-pulse delay-1500">α</div>
          <div className="absolute top-1/3 right-1/3 text-white text-6xl font-bold animate-pulse delay-700">∆</div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="what-we-offer" className="relative z-10 px-6 py-20 bg-gradient-to-br from-pink-300 via-purple-400 to-indigo-500">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            📚 What We Offer
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                emoji: "📚",
                title: "Tailored Math Curriculum (Grades 3–12)",
                points: [
                  "Grade-specific programs blending provincial and advanced curriculum",
                  "Strengthens logical thinking and problem-solving skills", 
                  "Prepares students for higher grades and competitive exams"
                ],
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                emoji: "🎯", 
                title: "Mastery-Focused Weekly Sessions",
                points: [
                  "2 hours of interactive instruction per week",
                  "Combines guided teaching with in-class practice",
                  "Builds lasting understanding through concept mastery"
                ],
                gradient: "from-purple-500 to-pink-500"
              },
              {
                emoji: "💰",
                title: "Affordable & Risk-Free Pricing", 
                points: [
                  "$200+HST per month for 8 hours of instruction",
                  "First Month Money-Back Guarantee if not satisfied",
                  "Exceptional value for quality math learning"
                ],
                gradient: "from-green-500 to-emerald-500"
              },
              {
                emoji: "✏️",
                title: "Daily Practice Problems",
                points: [
                  "Homework after every class",
                  "Reinforces concepts taught in lessons", 
                  "Builds confidence and problem-solving skills"
                ],
                gradient: "from-orange-500 to-red-500"
              },
              {
                emoji: "🗓️",
                title: "Flexible Scheduling Options",
                points: [
                  "Choose between two 1-hour or one 2-hour session per week",
                  "Available online or in-center at our Mississauga location",
                  "Designed to fit your child's schedule"
                ],
                gradient: "from-indigo-500 to-blue-500"
              },
              {
                emoji: "👨‍🎓", 
                title: "Student-Centric Small Group Learning",
                points: [
                  "Very small group sizes for personalized attention",
                  "Encourages participation and collaboration",
                  "Support beyond class for maximum progress"
                ],
                gradient: "from-pink-500 to-rose-500"
              }
            ].map((offer, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${offer.gradient} p-8 rounded-3xl shadow-2xl backdrop-blur-md border border-white/20`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: 2,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
              >
                {/* Card Header */}
                <div className="text-center mb-6">
                  <motion.div
                    className="text-5xl mb-4"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {offer.emoji}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    {offer.title}
                  </h3>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-4">
                  {offer.points.map((point, pointIndex) => (
                    <motion.li
                      key={pointIndex}
                      className="flex items-start text-white/95"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: (index * 0.1) + (pointIndex * 0.1), 
                        duration: 0.5 
                      }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"
                        whileHover={{ scale: 1.5 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="text-sm leading-relaxed">{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Card Bottom Decoration */}
                <motion.div
                  className="mt-6 h-1 bg-white/30 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ delay: (index * 0.1) + 0.5, duration: 0.8 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="/contact">
              <motion.div
                className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-full font-bold text-xl shadow-2xl cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Today! 🚀
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Our Unique Math Approach Section */}
      <section id="our-approach" className="relative z-10 px-6 py-20 bg-gradient-to-br from-green-400 via-teal-500 to-cyan-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Unique Math Approach
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-white/90 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Building strong minds through smarter math learning.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Concept-First Teaching",
                description: "Master the why behind math for lasting understanding.",
                icon: "🧠",
                color: "from-blue-400 to-indigo-600"
              },
              {
                title: "Personalized Learning Plans",
                description: "A learning journey tailored to your child's strengths and goals.",
                icon: "🎯",
                color: "from-purple-400 to-pink-600"
              },
              {
                title: "Interactive & Engaging Sessions",
                description: "Active, student-centered lessons that make math come alive.",
                icon: "⚡",
                color: "from-green-400 to-teal-600"
              },
              {
                title: "Curriculum-Aligned & Exam-Ready",
                description: "Aligned with standards, designed for top exam performance.",
                icon: "📋",
                color: "from-orange-400 to-red-600"
              },
              {
                title: "Support Beyond the Session",
                description: "Quick help and clear guidance—whenever students need it.",
                icon: "🤝",
                color: "from-cyan-400 to-blue-600"
              },
              {
                title: "Confidence Building & Growth Mindset",
                description: "From math anxiety to math confidence—watch your child thrive.",
                icon: "🌟",
                color: "from-yellow-400 to-orange-600"
              }
            ].map((approach, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Background Card */}
                <motion.div
                  className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 h-full border border-white/20 shadow-xl overflow-hidden"
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient Background Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${approach.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    className="text-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${approach.color} rounded-2xl text-3xl mb-4 shadow-lg`}>
                      {approach.icon}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                      {approach.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {approach.description}
                    </p>
                  </div>

                  {/* Bottom Accent Line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${approach.color} rounded-b-2xl`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: (index * 0.1) + 0.5, duration: 0.8 }}
                  />

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/20 rounded-full opacity-50"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-white/20 rounded-full opacity-30"></div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.p
              className="text-lg text-white/80 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              Ready to experience the Level Up Math Academy difference?
            </motion.p>
            <Link href="/contact">
              <motion.div
                className="inline-block bg-gradient-to-r from-purple-500 to-pink-600 text-white px-10 py-4 rounded-full font-bold text-xl shadow-2xl cursor-pointer"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey Today! ✨
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 px-6 py-20 bg-gradient-to-br from-orange-300 via-pink-400 to-red-500">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              TESTIMONIALS
            </h2>
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              What Parents & Students Say About Us?
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              
              {/* Left Side - Contact Icon/Image */}
              <motion.div
                className="flex justify-center lg:justify-start"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="relative">
                  {/* Main Icon Container */}
                  <motion.div
                    className="relative bg-white/20 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl"
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-yellow-400/30 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-pink-400/30 rounded-full blur-xl"></div>
                    
                    {/* Main Contact Icon */}
                    <motion.div
                      className="relative z-10 flex items-center justify-center w-32 h-32 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl shadow-2xl"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px rgba(255,193,7,0.5)",
                          "0 0 40px rgba(255,193,7,0.8)",
                          "0 0 20px rgba(255,193,7,0.5)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {/* Phone Icon with Animation */}
                      <motion.div
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      >
                        <Phone className="w-16 h-16 text-gray-900" />
                      </motion.div>
                    </motion.div>

                    {/* Floating Math Symbols */}
                    <motion.div
                      className="absolute top-2 right-2 text-white/40 text-2xl font-bold"
                      animate={{ rotate: 360, y: [0, -10, 0] }}
                      transition={{ duration: 6, repeat: Infinity }}
                    >
                      ∑
                    </motion.div>
                    <motion.div
                      className="absolute bottom-2 left-2 text-white/40 text-xl font-bold"
                      animate={{ rotate: -360, y: [0, 10, 0] }}
                      transition={{ duration: 8, repeat: Infinity }}
                    >
                      π
                    </motion.div>
                  </motion.div>

                  {/* Small Accent Elements */}
                  <motion.div
                    className="absolute -top-6 -right-6 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-green-400 to-teal-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>
              </motion.div>

              {/* Right Side - Messages and CTA */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                {/* Message 1 */}
                <motion.h2
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Let's Learn Together! 🎓
                </motion.h2>

                {/* Message 2 */}
                <motion.p
                  className="text-lg md:text-xl text-white/95 leading-relaxed mb-8 md:mb-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Schedule a free assessment and explore Level Up Math Academy's unique approach, curriculum, pricing and flexible class options.
                </motion.p>

                {/* Contact Us Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <Link href="/contact">
                    <motion.div
                      className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-10 py-4 rounded-full font-bold text-xl shadow-2xl cursor-pointer"
                      whileHover={{ 
                        scale: 1.05, 
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        background: "linear-gradient(to right, #fbbf24, #f97316)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact Us Now! 🚀
                    </motion.div>
                  </Link>
                </motion.div>

                {/* Additional Contact Info */}
                <motion.div
                  className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-white/80"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">hello@levelupmathacademy.com</span>
                  </motion.div>
                  <motion.div
                    className="flex items-center gap-2"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <Phone className="w-5 h-5" />
                    <span className="text-sm">(647) 362-1883</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 overflow-hidden rounded-3xl">
              <div className="absolute top-10 right-10 text-white text-4xl font-bold animate-pulse">📚</div>
              <div className="absolute bottom-10 left-10 text-white text-3xl font-bold animate-pulse delay-1000">✏️</div>
              <div className="absolute top-1/2 left-1/4 text-white text-2xl font-bold animate-pulse delay-500">🎯</div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Side - Logo, Message, Social Media */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Logo and Brand */}
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-6">
          <Image
                  src="/logo.png"
                  alt="Level Up Math Academy Logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="text-white font-bold text-xl">
                  Level Up Math Academy
                </div>
              </div>

              {/* Inspirational Message */}
              <motion.p
                className="text-white/90 text-lg font-medium mb-8 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                "Where Math Becomes Easy & Learning Becomes Fun"
              </motion.p>

              {/* Social Media */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-4">Follow Us</h4>
                <div className="flex justify-center md:justify-start space-x-4">
                  <motion.a
                    href="https://facebook.com/levelupmathacademy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-blue-600 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook className="w-6 h-6 text-white group-hover:text-white" />
                  </motion.a>
                  <motion.a
                    href="https://instagram.com/levelupmathacademy"
          target="_blank"
          rel="noopener noreferrer"
                    className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="w-6 h-6 text-white group-hover:text-white" />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Middle - Quick Links */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h4 className="text-white font-bold text-xl mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {[
                  { name: "What We Offer", href: "#what-we-offer" },
                  { name: "Our Approach", href: "#our-approach" },
                  { name: "Testimonials", href: "#testimonials" },
                  { name: "Contact Us", href: "/contact" }
                ].map((link, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (index * 0.1), duration: 0.5 }}
                  >
                    {link.href.startsWith('/') ? (
                      <Link href={link.href}>
                        <motion.div
                          className="text-white/80 hover:text-yellow-400 transition-colors duration-300 cursor-pointer inline-block"
                          whileHover={{ x: 5 }}
                        >
                          {link.name}
                        </motion.div>
                      </Link>
                    ) : (
                      <motion.a
                        href={link.href}
                        className="text-white/80 hover:text-yellow-400 transition-colors duration-300 inline-block"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.a>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Side - Contact Info */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h4 className="text-white font-bold text-xl mb-6">Contact Info</h4>
              <div className="space-y-6">
                
                {/* Email */}
                <motion.div
                  className="flex items-start justify-center md:justify-start space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Email</p>
                    <a 
                      href="mailto:hello@levelupmathacademy.com"
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      hello@levelupmathacademy.com
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="flex items-start justify-center md:justify-start space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-gradient-to-r from-green-400 to-teal-500 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Phone</p>
                    <a 
                      href="tel:+16473621883"
                      className="text-white hover:text-yellow-400 transition-colors"
                    >
                      (647) 362-1883
                    </a>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  className="flex items-start justify-center md:justify-start space-x-3"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-gray-900" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm mb-1">Address</p>
                    <p className="text-white leading-relaxed">
                      123 Learning Street<br />
                      Mississauga, ON L5B 1M5<br />
                      Canada
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Copyright Section */}
          <motion.div
            className="border-t border-white/20 mt-12 pt-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60">
                © 2025 Level Up Math Academy. All rights reserved.
              </p>
              <p className="text-white/60">
                Making Mathematics Magical for Every Child! ✨
              </p>
            </div>
          </motion.div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute top-10 left-10 text-white text-6xl font-bold">∫</div>
          <div className="absolute top-20 right-20 text-white text-5xl font-bold">π</div>
          <div className="absolute bottom-20 left-20 text-white text-7xl font-bold">∑</div>
          <div className="absolute bottom-10 right-10 text-white text-4xl font-bold">√</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-8xl font-bold">∆</div>
        </div>
      </footer>
    </div>
  );
}
