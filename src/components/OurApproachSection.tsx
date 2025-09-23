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
  ];

  return (
    <section id="our-approach" className="relative py-16 lg:py-24 bg-white overflow-hidden">
      <FloatingElements 
        elements={['🧠', '⚡', '🎯', '🤝', '🌟', '📋']}
        count={6}
        size="lg"
        colors={['text-purple-100', 'text-pink-100', 'text-orange-100', 'text-teal-100']}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Unique Math Approach
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 font-medium max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Building strong minds through smarter math learning.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              {/* Background Card */}
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                {/* Subtle Background Overlay */}
                <div className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl"></div>
                
                {/* Icon */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl text-3xl mb-4 shadow-md group-hover:scale-105 transition-transform duration-300">
                    {approach.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {approach.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {approach.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-b-2xl w-full" />

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
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Ready to experience the Level Up Math Academy difference?
          </motion.p>
          <Link href="/contact">
            <motion.div
              className="inline-block bg-gradient-to-r from-teal-600 to-purple-600 hover:from-teal-700 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-xl shadow-lg cursor-pointer transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 30px rgba(20, 184, 166, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Start Your Journey Today! ✨
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
