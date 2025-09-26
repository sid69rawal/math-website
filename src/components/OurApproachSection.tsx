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
      customIcon: "/teacher.svg",
      color: "from-blue-400 to-indigo-600"
    },
    {
      title: "Personalized Learning Plans",
      description: "A learning journey tailored to your child's strengths and goals",
      icon: "🎯",
      customIcon: "/studying-teacher.svg",
      color: "from-purple-400 to-pink-600"
    },
    {
      title: "Interactive & Engaging Sessions",
      description: "Active, student-centered lessons that make math come alive.",
      icon: "⚡",
      customIcon: "/cultural-exchange.png",
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
      customIcon: "/confidence.png",
      color: "from-yellow-400 to-orange-600"
    }
  ];

  return (
    <section id="our-approach" className="relative py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Steps 1-3 (now slanting right toward the circle) */}
          <div className="w-full space-y-6">
            {approaches.slice(0, 3).map((approach, index) => {
              // Top three: increasing indent to the right (mirror of original)
              const positions = ['ml-24', 'ml-36', 'ml-48'];
              const maxWidths = ['max-w-lg', 'max-w-lg', 'max-w-lg'];

              return (
                <motion.div
                  key={index}
                  className={`flex items-center gap-6 p-6 rounded-2xl ${index % 2 === 0 ? 'bg-gray-100' : 'bg-blue-50'} ${positions[index]} ${maxWidths[index]}`}
                  initial={{ opacity: 0, x: 50 }}       // slide in from right
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.6
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center text-3xl shadow-md">
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
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {approach.title}
                    </h3>
                    {/* allow wrapping for long descriptions */}
                    <p className="text-lg text-gray-700 font-medium leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Circular Title - Between Steps 3 and 4 */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full flex items-center justify-center text-center px-8" style={{ backgroundColor: '#30519d' }}>
              <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
                Our Unique<br />Math<br />Approach
              </h2>
            </div>
          </motion.div>

          {/* Steps 4-6 (now stepping left away from the circle) */}
          <div className="w-full space-y-6">
            {approaches.slice(3, 6).map((approach, index) => {
              // Bottom three: start slightly right and then step back leftwards
              const positions = ['ml-36', 'ml-24', 'ml-0'];
              const maxWidths = ['max-w-lg', 'max-w-lg', 'max-w-lg'];
              const actualIndex = index + 3; // Adjust for slice offset

              return (
                <motion.div
                  key={actualIndex}
                  className={`flex items-center gap-6 p-6 rounded-2xl ${actualIndex % 2 === 0 ? 'bg-gray-100' : 'bg-blue-50'} ${positions[index]} ${maxWidths[index]}`}
                  initial={{ opacity: 0, x: -50 }}    // slide in from left (mirrored)
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: (actualIndex + 0.5) * 0.1,
                    duration: 0.6
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center text-3xl shadow-md">
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
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {approach.title}
                    </h3>
                    <p className="text-lg text-gray-700 font-medium leading-relaxed">
                      {approach.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
