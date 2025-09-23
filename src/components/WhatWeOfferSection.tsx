'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import FloatingElements from './FloatingElements';

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
        "2 hours of interactive instruction per week",
        "Combines guided teaching with in-class practice",
        "Builds lasting understanding through concept mastery"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      emoji: "💰",
      title: "Affordable & Risk-Free Pricing", 
      points: [
        "$200+HST per month for 8 hours of instruction",
        "First Month Money-Back Guarantee if not satisfied",
        "Exceptional value for quality math learning"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      emoji: "✏️",
      title: "Daily Practice Problems",
      points: [
        "Homework after every class",
        "Reinforces concepts taught in lessons", 
        "Builds confidence and problem-solving skills"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      emoji: "🗓️",
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
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="what-we-offer" className="relative py-16 lg:py-24 bg-gray-50">
      <FloatingElements 
        elements={['📚', '✏️', '🎯', '💡', '⭐', '🚀']}
        count={8}
        size="md"
        colors={['text-purple-200', 'text-pink-200', 'text-orange-200', 'text-teal-200']}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            📚 What We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive math education programs designed to help students excel at every level
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
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
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {offer.emoji}
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {offer.title}
                </h3>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-4">
                {offer.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start text-gray-700"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Card Bottom Decoration */}
              <div className="mt-6 h-1 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full" />
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
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-4 rounded-full font-semibold text-xl shadow-lg cursor-pointer transition-all duration-300"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 30px rgba(147, 51, 234, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started Today! 🚀
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
