'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FloatingElements from '@/components/FloatingElements';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { contactConfig } from '@/config/contact';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gradeLevel: '',
    message: '',
    preference: '' as string
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create form data for formsubmit.co
      const formDataToSend = new FormData();
      formDataToSend.append('_subject', `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`);
      formDataToSend.append('_replyto', formData.email);
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_next', window.location.href);
      
      // Add form fields
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone || 'Not provided');
      formDataToSend.append('gradeLevel', formData.gradeLevel);
      formDataToSend.append('preference', formData.preference);
      formDataToSend.append('message', formData.message);
      
      // Submit form using formsubmit.co
      const response = await fetch('https://formsubmit.co/levelupmathacademy@gmail.com', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        setShowSuccess(true);
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          gradeLevel: '',
          message: '',
          preference: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly at levelupmathacademy@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
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
                      <div className="aspect-square rounded-2xl overflow-hidden">
                        <Image
                          src="/contact_us_image.jpg"
                          alt="Level Up Math Academy - Contact Us"
                          width={600}
                          height={600}
                          className="w-full h-full object-cover rounded-2xl"
                          priority
                        />
                        {/* Overlay with text */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl flex items-end justify-center pb-8">
                          <div className="text-center text-white">
                            <h3 className="text-3xl font-bold mb-2">Let&apos;s Connect!</h3>
                            <p className="text-xl">Ready to start your math journey?</p>
                          </div>
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
                To explore more about our services and pricing, Please fill out the form below and we&apos;ll get back to you shortly
              </p>
              
              <div className="mt-6 space-y-2">
                <motion.a 
                  href={`mailto:${contactConfig.email}`}
                  className="block text-purple-600 hover:text-pink-600 transition-colors font-medium"
                  whileHover={{ x: 5 }}
                >
                  📧 {contactConfig.email}
                </motion.a>
                <motion.a 
                  href={`tel:${contactConfig.phoneLink}`}
                  className="block text-purple-600 hover:text-pink-600 transition-colors font-medium"
                  whileHover={{ x: 5 }}
                >
                  📞 {contactConfig.phone}
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
                  placeholder="Enter phone number (optional)"
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

              {/* Preferences Radio Buttons */}
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
                        type="radio"
                        name="preference"
                        value={option}
                        checked={formData.preference === option}
                        onChange={handleInputChange}
                        className="w-5 h-5 border-2 border-gray-300 bg-gray-50 text-purple-600 focus:ring-2 focus:ring-purple-500 mr-3"
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

      {/* Success Modal */}
      {showSuccess && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowSuccess(false)}
        >
          <motion.div
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-purple-100 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-2xl opacity-50"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full blur-xl opacity-50"></div>
            
            {/* Close Button */}
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
            >
              <span className="text-gray-500 text-lg">×</span>
            </button>
            
            {/* Success Content */}
            <div className="text-center relative z-10">
              {/* Success Icon */}
              <motion.div
                className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <span className="text-white text-3xl">✓</span>
                </motion.div>
              </motion.div>
              
              {/* Success Message */}
              <motion.h2
                className="text-2xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Message Sent Successfully! 🎉
              </motion.h2>
              
              <motion.p
                className="text-gray-600 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Thank you for reaching out to <span className="font-semibold text-purple-600">Level Up Math Academy</span>! We&apos;ve received your message and will get back to you shortly.
              </motion.p>
              
              {/* Additional Info */}
              <motion.div
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold text-purple-600">📧 Email:</span> levelupmathacademy@gmail.com
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-pink-600">📞 Phone:</span> (647) 1111111
                </p>
              </motion.div>
              
              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  onClick={() => setShowSuccess(false)}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-full font-semibold transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Continue Browsing
                </motion.button>
                
                <motion.a
                  href="/"
                  className="flex-1 bg-white border-2 border-purple-200 hover:border-purple-300 text-purple-600 py-3 px-6 rounded-full font-semibold transition-all duration-300 text-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Back to Home
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
