'use client';

import { motion } from 'framer-motion';
import { Calculator, BookOpen, Users, Star, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 overflow-hidden">
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
          {/* Logo and Home */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/logo.png"
              alt="Level Up Math Academy Logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="text-white font-bold text-xl md:text-2xl">
              Level Up Math Academy ✨
            </div>
          </motion.div>
          
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
              href="#courses" 
              className="text-white hover:text-yellow-300 transition-colors font-semibold" 
              whileHover={{ scale: 1.1 }}
            >
              Courses
            </motion.a>
            <motion.a 
              href="#services" 
              className="text-white hover:text-yellow-300 transition-colors font-semibold" 
              whileHover={{ scale: 1.1 }}
            >
              Our Services
            </motion.a>
            <motion.a 
              href="#about" 
              className="text-white hover:text-yellow-300 transition-colors font-semibold" 
              whileHover={{ scale: 1.1 }}
            >
              About Us
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
                href="#courses" 
                className="text-white hover:text-yellow-300 transition-colors font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                Courses
              </motion.a>
              <motion.a 
                href="#services" 
                className="text-white hover:text-yellow-300 transition-colors font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                Our Services
              </motion.a>
              <motion.a 
                href="#about" 
                className="text-white hover:text-yellow-300 transition-colors font-semibold py-2"
                onClick={() => setMobileMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                About Us
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
      <section id="home" className="relative z-10 text-center px-6 py-20">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold text-white mb-6"
            animate={{ 
              textShadow: [
                '0 0 20px rgba(255,255,255,0.5)',
                '0 0 40px rgba(255,255,255,0.8)',
                '0 0 20px rgba(255,255,255,0.5)'
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Make Math 
            <motion.span
              className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              MAGICAL! 🎯
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 leading-relaxed px-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Transform your child&apos;s relationship with mathematics through fun, interactive learning!
            <br className="hidden sm:block" />
            <span className="block sm:inline text-yellow-300 font-semibold mt-2 sm:mt-0">Classes 3-12 • Expert Teachers • Proven Results</span>
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="/contact">
              <motion.div
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg shadow-2xl cursor-pointer text-center"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Learning Today! 🚀
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div
                className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-lg backdrop-blur-sm cursor-pointer text-center"
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255,255,255,0.1)",
                  boxShadow: "0 20px 40px rgba(255,255,255,0.2)" 
                }}
                whileTap={{ scale: 0.95 }}
              >
                Free Trial Class
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose MathMagic? ✨
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: BookOpen, 
                title: "Interactive Learning", 
                desc: "Fun games, visual aids, and hands-on activities make math exciting!",
                color: "from-blue-400 to-purple-600"
              },
              { 
                icon: Users, 
                title: "Expert Teachers", 
                desc: "Certified educators with 10+ years of experience in math teaching",
                color: "from-green-400 to-blue-600"
              },
              { 
                icon: Star, 
                title: "Proven Results", 
                desc: "95% of our students improve their grades within 3 months!",
                color: "from-yellow-400 to-red-600"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${feature.color} p-8 rounded-3xl shadow-2xl backdrop-blur-sm`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block p-4 bg-white/20 rounded-2xl mb-6"
                >
                  <feature.icon className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-white/90 text-lg leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services 🎯
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: "🎓", 
                title: "One-on-One Tutoring", 
                desc: "Personalized attention for accelerated learning"
              },
              { 
                icon: "👥", 
                title: "Group Classes", 
                desc: "Interactive learning with peer collaboration"
              },
              { 
                icon: "🏆", 
                title: "Exam Preparation", 
                desc: "Specialized coaching for board exams and competitions"
              },
              { 
                icon: "💻", 
                title: "Online Learning", 
                desc: "Flexible virtual classes from home"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255,255,255,0.15)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Math Courses 📚
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Little Mathematicians",
                subtitle: "Classes 3-8",
                features: ["Basic Arithmetic", "Geometry Fun", "Problem Solving Games", "Math Puzzles"],
                emoji: "🧮",
                gradient: "from-pink-400 to-purple-600"
              },
              {
                title: "Math Champions",
                subtitle: "Classes 9-12",
                features: ["Algebra & Calculus", "Trigonometry", "Statistics", "Board Exam Prep"],
                emoji: "🏆",
                gradient: "from-blue-400 to-green-600"
              }
            ].map((classType, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${classType.gradient} p-8 rounded-3xl shadow-2xl`}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                whileHover={{ scale: 1.02, rotateX: 5 }}
              >
                <div className="text-center mb-8">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {classType.emoji}
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-2">{classType.title}</h3>
                  <p className="text-xl text-white/80 font-semibold">{classType.subtitle}</p>
                </div>
                <ul className="space-y-4">
                  {classType.features.map((feature, fIndex) => (
                    <motion.li
                      key={fIndex}
                      className="flex items-center text-white text-lg"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.3) + (fIndex * 0.1), duration: 0.5 }}
                    >
                      <motion.span
                        className="w-3 h-3 bg-white rounded-full mr-4"
                        whileHover={{ scale: 1.5 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Start Section */}
      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ready to Start? 🌟
          </motion.h2>
          
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                { icon: Phone, text: "+91 98765 43210", label: "Call Us" },
                { icon: Mail, text: "hello@levelupmathacademy.com", label: "Email Us" },
                { icon: MapPin, text: "123 Learning Street, Education City", label: "Visit Us" }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="inline-block p-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <contact.icon className="w-8 h-8 text-gray-900" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-2">{contact.label}</h4>
                  <p className="text-white/80">{contact.text}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              className="mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link href="/contact">
                <motion.div
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl shadow-2xl w-full sm:w-auto cursor-pointer text-center"
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                    background: "linear-gradient(to right, #fbbf24, #f97316)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Free Demo Class Now! 🎉
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 px-6">
        <motion.p 
          className="text-white/60 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          © 2025 Level Up Math Academy. Making Mathematics Magical for Every Child! ✨
        </motion.p>
      </footer>
    </div>
  );
}
