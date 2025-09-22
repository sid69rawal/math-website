'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import FloatingElements from '@/components/FloatingElements';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-gray-50">
      {/* Header with Navigation */}
      <Header />

      {/* Back to Home Button */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 pt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/">
          <motion.button
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(147, 51, 234, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Floating Math Symbols Background */}
      <FloatingElements 
        elements={['📚', '✏️', '🎯', '💡', '⭐', '🚀', '📊', '🧮', '📐', '📏']}
        count={12}
        size="md"
        colors={['text-purple-200', 'text-pink-200', 'text-orange-200', 'text-teal-200']}
      />

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
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-100 rounded-full blur-xl"></div>
            <div className="absolute -bottom-20 -right-10 w-40 h-40 bg-pink-100 rounded-full blur-xl"></div>
            
            {/* Math Symbol Decorations */}
            <motion.div
              className="absolute top-10 left-10 text-purple-200 text-4xl font-bold"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ∑
            </motion.div>
            <motion.div
              className="absolute bottom-20 right-20 text-pink-200 text-3xl font-bold"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              π
            </motion.div>
            
            {/* Main Image Container */}
            <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-purple-100">
              <div className="aspect-square bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">📚</div>
                  <h3 className="text-2xl font-bold mb-2">Let&apos;s Connect!</h3>
                  <p className="text-lg">Ready to start your math journey?</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-4">Contact Us</h1>
              <p className="text-gray-600 text-lg">
                To learn more about our programs & pricing please fill out the form below and we will be in touch soon!
              </p>
              
              <div className="mt-6 space-y-2">
                <motion.a 
                  href="mailto:hello@levelupmathacademy.com"
                  className="block text-purple-600 hover:text-pink-600 transition-colors font-medium"
                  whileHover={{ x: 5 }}
                >
                  📧 hello@levelupmathacademy.com
                </motion.a>
                <motion.a 
                  href="tel:+916478362-1883"
                  className="block text-purple-600 hover:text-pink-600 transition-colors font-medium"
                  whileHover={{ x: 5 }}
                >
                  📞 (647) 362-1883
                </motion.a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    First Name <span className="text-purple-600">(required)</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Last Name <span className="text-purple-600">(required)</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email <span className="text-purple-600">(required)</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="Enter email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  placeholder="(in case our email ends up in spam, we'd love to be able to call you!)"
                />
              </div>

              {/* Grade Level Dropdown */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Grade Level <span className="text-purple-600">(required)</span>
                </label>
                <select
                  name="gradeLevel"
                  value={formData.gradeLevel}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                >
                  <option value="" className="bg-white text-gray-900">Select Grade Level</option>
                  {gradeOptions.map((grade) => (
                    <option key={grade} value={grade} className="bg-white text-gray-900">
                      {grade}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message <span className="text-purple-600">(required)</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your goals and how we can help..."
                />
              </div>

              {/* Preferences Checkboxes */}
              <div>
                <label className="block text-gray-700 font-medium mb-3">
                  What are you most interested in? <span className="text-purple-600">(required)</span>
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
                        className="w-5 h-5 rounded border-2 border-gray-300 bg-gray-50 text-purple-600 focus:ring-2 focus:ring-purple-500 mr-3"
                      />
                      <span className="text-gray-700">{option}</span>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-8 rounded-full font-bold text-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
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
      <Footer />
    </div>
  );
}
