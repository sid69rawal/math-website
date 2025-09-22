'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gradeLevel: '',
    message: '',
    preferences: [] as string[]
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      preferences: prev.preferences.includes(value)
        ? prev.preferences.filter(p => p !== value)
        : [...prev.preferences, value]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    
    setIsSubmitting(false);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gradeLevel: '',
      message: '',
      preferences: []
    });
  };

  const gradeOptions = Array.from({ length: 10 }, (_, i) => `Grade ${i + 3}`);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
      {/* Static Ribbon */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-gray-900 py-2 overflow-hidden shadow-lg">
        <div className="relative h-6">
          <motion.div
            className="absolute whitespace-nowrap text-xs sm:text-sm font-bold flex items-center h-full"
            animate={{
              x: [typeof window !== 'undefined' ? window.innerWidth : 1000, -(2000)]
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

      {/* Navigation */}
      <motion.nav 
        className="relative z-10 p-6 pt-16"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3">
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
          </Link>
          
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/">
              <motion.button
                className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.nav>

      {/* Main Contact Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side - Image and Decorative Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative Background Elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-300/30 rounded-full blur-xl"></div>
            <div className="absolute -bottom-20 -right-10 w-40 h-40 bg-purple-300/30 rounded-full blur-xl"></div>
            
            {/* Math Symbol Decorations */}
            <motion.div
              className="absolute top-10 left-10 text-white/20 text-4xl font-bold"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ∑
            </motion.div>
            <motion.div
              className="absolute bottom-20 right-20 text-white/20 text-3xl font-bold"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              π
            </motion.div>
            
            {/* Main Image Container */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-900">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold mb-2">Let's Connect!</h3>
                  <p className="text-lg">Ready to start your math journey?</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
              <p className="text-white/90 text-lg">
                To learn more about our programs & pricing please fill out the form below and we will be in touch soon!
              </p>
              
              <div className="mt-6 space-y-2">
                <motion.a 
                  href="mailto:hello@levelupmathacademy.com"
                  className="block text-pink-300 hover:text-pink-200 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  hello@levelupmathacademy.com
                </motion.a>
                <motion.a 
                  href="tel:+916478362-1883"
                  className="block text-pink-300 hover:text-pink-200 transition-colors"
                  whileHover={{ x: 5 }}
                >
                  (647) 362-1883
                </motion.a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    First Name <span className="text-pink-300">(required)</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">
                    Last Name <span className="text-pink-300">(required)</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Email <span className="text-pink-300">(required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  placeholder="Enter email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                  placeholder="(in case our email ends up in spam, we'd love to be able to call you!)"
                />
              </div>

              {/* Grade Level Dropdown */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Grade Level <span className="text-pink-300">(required)</span>
                </label>
                <select
                  name="gradeLevel"
                  value={formData.gradeLevel}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all"
                >
                  <option value="" className="bg-gray-800 text-white">Select Grade Level</option>
                  {gradeOptions.map((grade) => (
                    <option key={grade} value={grade} className="bg-gray-800 text-white">
                      {grade}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Message <span className="text-pink-300">(required)</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your goals and how we can help..."
                />
              </div>

              {/* Preferences Checkboxes */}
              <div>
                <label className="block text-white font-medium mb-3">
                  What are you most interested in? <span className="text-pink-300">(required)</span>
                </label>
                <div className="space-y-3">
                  {[
                    'In-person options',
                    'Virtual options', 
                    'Both options are fine with me!'
                  ].map((option) => (
                    <motion.label
                      key={option}
                      className="flex items-center cursor-pointer"
                      whileHover={{ x: 5 }}
                    >
                      <input
                        type="checkbox"
                        checked={formData.preferences.includes(option)}
                        onChange={() => handleCheckboxChange(option)}
                        className="w-5 h-5 rounded border-2 border-white/30 bg-white/20 text-yellow-400 focus:ring-2 focus:ring-yellow-400 mr-3"
                      />
                      <span className="text-white">{option}</span>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 px-8 rounded-xl font-bold text-lg shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </div>
                ) : (
                  'Send Message 🚀'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 px-6 mt-20">
        <motion.p 
          className="text-white/60 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          © 2025 Level Up Math Academy. Making Mathematics Magical for Every Child! ✨
        </motion.p>
      </footer>
    </div>
  );
}
