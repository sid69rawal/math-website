'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function WhatWeOfferSection() {
  const offers = [
    {
      emoji: "📚",
      title: "Tailored Math Curriculum",
      points: [
        "Grade-specific Advanced Curriculum",
        "Strengthens logical thinking and problem-solving skills", 
        "Prepare for Higher Grades & Competitive Exams"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      emoji: "🎯", 
      title: "Mastery-Focused Weekly Sessions",
      points: [
        "2-4 hours of interactive classes per week",
        "Combines guided teaching with in-class practice",
        "Builds lasting understanding through concept mastery"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      emoji: "🤝",
      title: "Affordable & Risk-Free Pricing", 
      points: [
        "Starting from $135+HST per month",
        "First Month Money-Back Guarantee, if not satisfied",
        "Exceptional value for quality math learning"
      ],
      gradient: "from-blue-500 to-cyan-500",
      customIcon: true
    },
    {
      emoji: "📝",
      title: "Daily Practice Problems",
      points: [
        "Homework after every class",
        "Reinforces concepts taught in lessons", 
        "Builds confidence and problem-solving skills"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      emoji: "⏰",
      title: "Flexible Scheduling Options",
      points: [
        "Choose between 1-hour and 2-hour sessions",
        "Available Online or In-center at our Mississauga location",
        "Designed to fit your child's schedule"
      ],
      gradient: "from-indigo-500 to-blue-500"
    },
    {
      emoji: "👨‍🎓", 
      title: "Student-Centric Small Group Learning",
      points: [
        "Very small group sizes for personalized attention",
        "Encourages participation and collaboration",
        "Support beyond class for maximum progress"
      ],
      gradient: "from-sky-500 to-blue-500"
    }
  ];

  return (
    <section id="what-we-offer" className="relative py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive math education programs designed to help students excel at every level
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-3 sm:p-5 lg:p-12 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-500 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5
              }}
              whileHover={{ 
                y: -3,
                transition: { duration: 0.2 }
              }}
            >
              {/* Card Header */}
              <div className="text-center mb-8">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
                  {offer.customIcon ? (
                    <Image
                      src="/affordable.png"
                      alt="Affordable pricing icon"
                      width={50}
                      height={50}
                      className="mx-auto"
                    />
                  ) : (
                    offer.emoji
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                  {offer.title}
                </h3>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-6">
                {offer.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start text-gray-700"
                  >
                    <span className="w-3 h-3 bg-blue-600 rounded-full mr-4 mt-3 flex-shrink-0" />
                    <span className="text-base leading-relaxed font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Card Bottom Decoration */}
              <div className="mt-6 h-1 bg-blue-200 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link href="/contact">
            <motion.div
              className="inline-block text-white px-10 py-4 rounded-lg font-semibold text-xl cursor-pointer transition-all duration-300 hover:opacity-90"
              style={{ backgroundColor: '#30519d' }}
              whileHover={{ 
                scale: 1.05
              }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Free Assessment
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
