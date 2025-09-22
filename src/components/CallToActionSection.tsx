'use client';

import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';

export default function CallToActionSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200"
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
                    className="relative bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Decorative Elements */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-purple-100 rounded-full blur-xl"></div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-pink-100 rounded-full blur-xl"></div>
                    
                    {/* Main Contact Icon */}
                    <motion.div
                      className="relative z-10 flex items-center justify-center w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl shadow-lg"
                      whileHover={{ 
                        boxShadow: "0 15px 30px rgba(147, 51, 234, 0.4)",
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {/* Phone Icon */}
                      <motion.div
                        whileHover={{ 
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Phone className="w-16 h-16 text-white" />
                      </motion.div>
                    </motion.div>

                    {/* Subtle Math Symbols */}
                    <div className="absolute top-4 right-4 text-gray-300 text-xl font-bold">
                      ∑
                    </div>
                    <div className="absolute bottom-4 left-4 text-gray-300 text-lg font-bold">
                      π
                    </div>
                  </motion.div>

                  {/* Small Accent Elements */}
                  <div className="absolute -top-6 -right-6 w-8 h-8 bg-purple-200 rounded-full"></div>
                  <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-pink-200 rounded-full"></div>
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Let&apos;s Learn Together! 🎓
              </motion.h2>

              {/* Message 2 */}
              <motion.p
                className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 md:mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Schedule a free assessment and explore Level Up Math Academy&apos;s unique approach, curriculum, pricing and flexible class options.
              </motion.p>

              {/* Contact Us Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <Link href="/contact">
                  <motion.div
                    className="inline-block bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-10 py-4 rounded-full font-semibold text-xl shadow-lg cursor-pointer transition-all duration-300"
                    whileHover={{ 
                      scale: 1.05, 
                      boxShadow: "0 15px 30px rgba(249, 115, 22, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Us Now! 🚀
                  </motion.div>
                </Link>
              </motion.div>

              {/* Additional Contact Info */}
              <motion.div
                className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start text-gray-600"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Mail className="w-5 h-5 text-purple-600" />
                  <span className="text-sm">hello@levelupmathacademy.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.02, x: 5 }}
                >
                  <Phone className="w-5 h-5 text-pink-600" />
                  <span className="text-sm">(647) 362-1883</span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 overflow-hidden rounded-3xl">
            <div className="absolute top-10 right-10 text-purple-400 text-4xl font-bold">📚</div>
            <div className="absolute bottom-10 left-10 text-pink-400 text-3xl font-bold">✏️</div>
            <div className="absolute top-1/2 left-1/4 text-orange-400 text-2xl font-bold">🎯</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
