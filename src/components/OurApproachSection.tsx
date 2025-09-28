'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function OurApproachSection() {
  const approaches = [
    {
      title: "Concept-First Teaching",
      description: "Master the why behind math for lasting understanding",
      icon: "🧠",
      customIcon: "/concept.png",
      color: "from-blue-400 to-indigo-600"
    },
    {
      title: "Personalized Learning Plans",
      description: "A learning journey tailored to your child's strengths and goals",
      icon: "🎯",
      customIcon: "/personalized.png",
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "Interactive & Engaging Sessions",
      description: "Active, student-centered lessons that make math come alive.",
      icon: "⚡",
      customIcon: "/interactive.jpg",
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
      customIcon: "/support.png",
      color: "from-cyan-400 to-blue-600"
    },
    {
      title: "Confidence Building & Growth Mindset",
      description: "From math anxiety to math confidence—watch your child thrive.",
      icon: "🌟",
      customIcon: "/confidence.png",
      color: "from-yellow-400 to-orange-600"
    }
  ];

  return (
    <section id="our-approach" className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Unique Math Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our innovative teaching methods transform math learning into an engaging, confidence-building experience
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {approaches.map((approach, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center text-3xl shadow-md">
                  {approach.customIcon ? (
                    <Image
                      src={approach.customIcon}
                      alt={`${approach.title} icon`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  ) : (
                    approach.icon
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {approach.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {approach.description}
                </p>
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
            👍 Ready to experience the Level Up Math Academy difference?
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/services">
              <motion.div
                className="inline-flex items-center justify-center px-6 py-4 sm:px-8 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer text-center hover:opacity-90"
                style={{ backgroundColor: '#30519d' }}
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                View Services
              </motion.div>
            </Link>
            <Link href="/contact">
              <motion.div
                className="inline-flex items-center justify-center px-6 py-4 sm:px-8 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer text-center hover:opacity-90"
                style={{ backgroundColor: '#30519d' }}
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Free Assessment
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
