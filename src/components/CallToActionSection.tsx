'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CallToActionSection() {
  return (
    <section className="py-16 lg:py-24 bg-gray-100 relative overflow-hidden">
      {/* Mathematical Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 text-white text-2xl font-bold">∑</div>
        <div className="absolute top-20 right-40 text-white text-xl font-bold">π</div>
        <div className="absolute top-32 right-10 text-white text-lg font-bold">∫</div>
        <div className="absolute top-40 right-30 text-white text-xl font-bold">α</div>
        <div className="absolute top-60 right-20 text-white text-lg font-bold">β</div>
        <div className="absolute top-80 right-40 text-white text-xl font-bold">γ</div>
        
        <div className="absolute bottom-20 left-20 text-white text-xl font-bold">x²</div>
        <div className="absolute bottom-40 left-40 text-white text-lg font-bold">y²</div>
        <div className="absolute bottom-60 left-10 text-white text-xl font-bold">√</div>
        <div className="absolute bottom-80 left-30 text-white text-lg font-bold">∞</div>
        
        <div className="absolute top-1/2 left-1/4 text-white text-lg font-bold">sin</div>
        <div className="absolute top-1/3 left-1/3 text-white text-lg font-bold">cos</div>
        <div className="absolute top-2/3 left-1/5 text-white text-lg font-bold">tan</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 bg-clip-text text-transparent">
              LEVEL UP
            </span>
            {' '}Together! 🚀
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-800 font-medium leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Schedule a free assessment and explore Level Up Math Academy&apos;s unique approach, curriculum, pricing and flexible class options.
          </motion.p>

          {/* Single Contact Us Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="/contact">
              <motion.div
                className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-full transition-all duration-300 cursor-pointer text-center hover:opacity-90 text-lg"
                style={{ backgroundColor: '#30519d' }}
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us 📞
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
