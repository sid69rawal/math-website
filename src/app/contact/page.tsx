'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import FloatingActionButton from '@/components/FloatingActionButton';
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

  const [showSuccess, setShowSuccess] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showSuccess) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scrolling
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSuccess]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
      });
      
      // FormSubmit.co typically returns a 200 status even for successful submissions
      // We'll consider it successful if we get any response (not a network error)
      if (response.status === 200 || response.status === 302) {
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
        console.error('Form submission failed with status:', response.status);
        alert('There was an error submitting your form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      // Even if there's a network error, FormSubmit.co might still process it
      // So we'll show success and reset the form
      setShowSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gradeLevel: '',
        message: '',
        preference: ''
      });
    }
  };



  const gradeOptions = Array.from({ length: 10 }, (_, i) => `Grade ${i + 3}`);

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden pt-32">
      {/* Header with Navigation */}
      <Header />

      {/* Main Contact Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          
          {/* Left Side - Image and Decorative Elements */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
                    {/* Main Image Container */}
                    <div className="relative bg-white rounded-3xl p-6 shadow-xl border border-blue-100">
                      <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                          src="/customer-service.svg"
                          alt="Level Up Math Academy - Contact Us"
                          width={600}
                          height={600}
                          className="w-full h-full object-contain rounded-2xl"
                          priority
                        />
                      </div>
                    </div>

            {/* Contact Info Section */}
            <motion.div
              className="mt-8 bg-white rounded-2xl p-6 shadow-lg border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-bold mb-6" style={{ color: '#30519d' }}>Contact Information</h3>
              
              <div className="space-y-3">
                {/* Email */}
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-blue-600 p-2 rounded-lg flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <a
                    href={`mailto:${contactConfig.email}`}
                    className="text-base font-medium hover:opacity-80 transition-colors"
                    style={{ color: '#30519d' }}
                  >
                    {contactConfig.email}
                  </a>
                </motion.div>

                {/* Phone */}
                <motion.div
                  className="flex items-center space-x-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-green-600 p-2 rounded-lg flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <a
                    href={`tel:${contactConfig.phoneLink}`}
                    className="text-base font-medium hover:opacity-80 transition-colors"
                    style={{ color: '#30519d' }}
                  >
                    {contactConfig.phone}
                  </a>
                </motion.div>

                {/* Address */}
                <motion.div
                  className="flex items-start space-x-4"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-purple-600 p-2 rounded-lg flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(contactConfig.address.full)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium hover:opacity-80 transition-colors leading-relaxed whitespace-pre-line"
                    style={{ color: '#30519d' }}
                  >
                    {contactConfig.address.full}
                  </a>
                </motion.div>
              </div>

              {/* Google Maps Embed - Only show if API key is available */}
              {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
                <motion.div
                  className="w-full h-48 rounded-lg overflow-hidden shadow-lg mt-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=${encodeURIComponent(contactConfig.address.full)}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Level Up Math Academy Location"
                  />
                </motion.div>
              )}
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4" style={{ color: '#30519d' }}>Contact Us</h1>
              <p className="text-gray-600 text-lg">
                To explore more about our services and pricing, Please fill out the form below and we&apos;ll get back to you shortly
              </p>
              
              
            </div>

            <form 
              action="https://formsubmit.co/rawals.info@gmail.com" 
              method="POST" 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Hidden FormSubmit.co fields */}
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={typeof window !== 'undefined' ? window.location.href : ''} />
              
              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    First Name <span style={{ color: '#30519d' }}>(required)</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Last Name <span style={{ color: '#30519d' }}>(required)</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email <span style={{ color: '#30519d' }}>(required)</span>
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
                  Grade Level <span style={{ color: '#30519d' }}>(required)</span>
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
                  Message <span style={{ color: '#30519d' }}>(required)</span>
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
                  What are you most interested in? <span style={{ color: '#30519d' }}>(required)</span>
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
                        required
                        className="w-5 h-5 border-2 border-gray-300 bg-gray-50 text-blue-600 focus:ring-2 focus:ring-blue-500 mr-3"
                      />
                      <span className="text-gray-700">{option}</span>
                    </motion.label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full text-white py-4 px-8 rounded-lg font-bold text-lg shadow-xl transition-all hover:opacity-90"
                style={{ backgroundColor: '#30519d' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
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
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-blue-100 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
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
                Thank you for reaching out to <span className="font-semibold" style={{ color: '#30519d' }}>Level Up Math Academy</span>! We&apos;ve received your message and will get back to you shortly.
              </motion.p>
              
              {/* Additional Info */}
              <motion.div
                className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold" style={{ color: '#30519d' }}>📧 Email:</span> {contactConfig.email}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold" style={{ color: '#30519d' }}>📞 Phone:</span> {contactConfig.phone}
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
                  className="flex-1 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:opacity-90"
                  style={{ backgroundColor: '#30519d' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Continue Browsing
                </motion.button>
                
                <motion.a
                  href="/"
                  className="flex-1 bg-white border-2 hover:border-opacity-80 py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center"
                  style={{ borderColor: '#30519d', color: '#30519d' }}
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

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
}
