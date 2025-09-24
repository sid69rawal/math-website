'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FloatingElements from './FloatingElements';

export default function OurApproachSection() {
  const approaches = [
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
      color: "from-blue-400 to-cyan-600"
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
      icon: "👍",
      color: "from-cyan-400 to-blue-600"
    },
    {
      title: "Confidence Building & Growth Mindset",
      description: "From math anxiety to math confidence—watch your child thrive.",
      icon: "🌟",
      color: "from-yellow-400 to-orange-600"
    }
  ];

  return (
    <section id="our-approach" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <FloatingElements 
        elements={['🧠', '⚡', '🎯', '🤝', '🌟', '📋']}
        count={6}
        size="lg"
        colors={['text-purple-100', 'text-pink-100', 'text-orange-100', 'text-blue-100']}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            🧠 Our Unique Math Approach
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl font-bold text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Building strong minds through smarter math learning.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              {/* Background Card */}
                <div className="relative bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-12 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Subtle Background Overlay */}
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Icon */}
                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl text-5xl mb-6 shadow-md group-hover:scale-105 transition-transform duration-300 ${
                    approach.icon === "👍" 
                      ? "bg-gradient-to-br from-orange-400 to-orange-500" 
                      : "bg-gradient-to-br from-blue-100 to-cyan-100"
                  }`}>
                    {approach.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 leading-tight">
                    {approach.title}
                  </h3>
                  <p className="text-base font-medium text-gray-800 leading-relaxed whitespace-nowrap">
                    {approach.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-blue-200 rounded-b-2xl w-full" />

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 border-2 border-gray-100 rounded-full opacity-50"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-2 border-gray-100 rounded-full opacity-30"></div>
              </div>
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
            className="text-xl font-bold text-gray-800 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Ready to experience the Level Up Math Academy difference?
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/services">
              <motion.div
                className="inline-flex items-center justify-center px-6 py-4 sm:px-8 text-white font-semibold rounded-full transition-all duration-300 cursor-pointer text-center hover:opacity-90"
                style={{ backgroundColor: '#30519d' }}
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                View Services 📚
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div
                className="inline-flex items-center justify-center px-6 py-4 sm:px-8 text-white font-semibold rounded-full transition-all duration-300 cursor-pointer text-center hover:opacity-90"
                style={{ backgroundColor: '#30519d' }}
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Us
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
