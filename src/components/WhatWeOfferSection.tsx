'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FloatingElements from './FloatingElements';
import Image from 'next/image';

export default function WhatWeOfferSection() {
  const offers = [
    {
      emoji: "📚",
      title: "Tailored Math Curriculum (Grades 3–12)",
      points: [
        "Grade-specific programs blending provincial and advanced curriculum",
        "Strengthens logical thinking and problem-solving skills", 
        "Prepares students for higher grades and competitive exams"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      emoji: "🎯", 
      title: "Mastery-Focused Weekly Sessions",
      points: [
        "2 hours of interactive classes per week",
        "Combines guided teaching with in-class practice",
        "Builds lasting understanding through concept mastery"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      emoji: "🤝",
      title: "Affordable & Risk-Free Pricing", 
      points: [
        "$200+HST per month for 8 hours of classes",
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
        "Choose between two 1-hour or one 2-hour session per week",
        "Available online or in-center at our Mississauga location",
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
      <FloatingElements 
        elements={['📚', '✏️', '🎯', '💡', '⭐', '🚀']}
        count={8}
        size="md"
        colors={['text-blue-200', 'text-cyan-200', 'text-sky-200', 'text-blue-200']}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Offer
          </h2>
          <p className="text-lg sm:text-xl font-bold text-gray-800">
            Comprehensive math education programs designed to help students excel at every level
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 p-6 sm:p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-blue-500 transition-all duration-300 group"
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
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {offer.customIcon ? (
                    <Image
                      src="/pricetag2.svg"
                      alt="Price tag icon"
                      width={80}
                      height={80}
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
