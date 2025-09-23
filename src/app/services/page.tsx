'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FloatingElements from '@/components/FloatingElements';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToActionSection from '@/components/CallToActionSection';

export default function ServicesPage() {
  const [selectedGrade, setSelectedGrade] = useState('grades-3-5');

  const gradeCategories = [
    {
      id: 'grades-3-5',
      label: 'Grades 3-5',
      title: 'Building Strong Foundations for Lifelong Success',
      description: 'At Level Up Math Academy, our curriculum is carefully designed for students from Grade 3 to Grade 12, providing a customized learning experience tailored to each student\'s unique abilities and pace. Our innovative and interactive programs make math enjoyable and engaging, fostering academic excellence and lifelong confidence in mathematics.',
      learningOutcomes: [
        'Master number sense and core math concepts',
        'Solve problems quickly using mental math skills',
        'Connect math to real-life situations',
        'Build fluency and readiness for advanced topics',
        'Gain confidence and a positive attitude toward learning'
      ],
      classFormat: [
        'In-person at our center for a structured, focused environment',
        'Small groups for personalized support and guidance',
        'Encouraging atmosphere where every child feels motivated to succeed',
        'Reinforce learning with daily practice sheets designed for fun and skill-building'
      ],
      image: '/hero_img.jpeg',
      link: '/courses/grades-3-5'
    },
    {
      id: 'grades-6-8',
      label: 'Grades 6-8',
      title: 'Empowering Students for Academic Excellence and Beyond',
      description: 'At Level Up Math Academy, our curriculum is carefully designed for students from Grade 3 to Grade 12, providing a customized learning experience tailored to each student\'s unique abilities and pace. Our innovative and interactive programs make math enjoyable and engaging, fostering academic excellence and lifelong confidence in mathematics.',
      learningOutcomes: [
        'Strengthen number sense and problem-solving skills',
        'Comprehensive coverage of the Ontario grade-level curriculum',
        'Prepare for various math competitions like Waterloo, AMC, and beyond',
        'Explore broader spectrum of grade level topics with year-round enrichment',
        'Build confidence to tackle challenging concepts'
      ],
      classFormat: [
        'In-person at our center or virtual classes for flexible learning',
        'Small groups to ensure individualized attention and guidance',
        'Interactive, hands-on lessons that engage students',
        'Smart practice system with daily problem sets and curated worksheets'
      ],
      image: '/contact_us_image.jpg',
      link: '/courses/grades-6-8'
    },
    {
      id: 'grades-9-10',
      label: 'Grades 9-10',
      title: 'Building Confidence and Readiness for Higher Math',
      description: 'At Level Up Math Academy, our curriculum is carefully designed for students from Grade 3 to Grade 12, providing a customized learning experience tailored to each student\'s unique abilities and pace. Our innovative and interactive programs make math enjoyable and engaging, fostering academic excellence and lifelong confidence in mathematics.',
      learningOutcomes: [
        'Build a strong foundation for Grades 11–12 Functions, Advanced Functions, and Calculus & Vectors',
        'Comprehensive coverage of the Ontario curriculum with global grade-level alignment',
        'Supports students in preparing for math competitions like Waterloo and other national/international contests',
        'Develop fluency, confidence, and critical thinking in advanced mathematical concepts'
      ],
      classFormat: [
        'In-person at our center or virtual classes for flexible learning',
        'Small groups with personalized support',
        'Interactive, student-centered, and engaging lessons',
        'Smart practice system with daily problem sets and curated worksheets'
      ],
      image: '/hero_img.jpeg',
      link: '/courses/grades-9-12'
    },
    {
      id: 'grades-11-12',
      label: 'Grades 11-12',
      title: 'Mastery, Exam Success, and University Readiness',
      description: 'At Level Up Math Academy, our curriculum is carefully designed for students from Grade 3 to Grade 12, providing a customized learning experience tailored to each student\'s unique abilities and pace. Our innovative and interactive programs make math enjoyable and engaging, fostering academic excellence and lifelong confidence in mathematics.',
      learningOutcomes: [
        'Master Functions, Advanced Functions, and Calculus & Vectors with confidence',
        'Strengthen exam techniques, time management, and problem-solving strategies',
        'Build critical thinking skills for STEM, business, and real-world applications',
        'Develop university-level readiness with advanced math fluency'
      ],
      classFormat: [
        'In-person at our center or virtual classes for flexible learning',
        'Small groups with personalized support and feedback',
        'Interactive, student-centered, and engaging lessons',
        'Smart practice system with daily problem sets and curated worksheets'
      ],
      image: '/contact_us_image.jpg',
      link: '/courses/grades-9-12'
    }
  ];

  const currentGrade = gradeCategories.find(grade => grade.id === selectedGrade) || gradeCategories[0];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Navigation */}
      <Header />

      {/* Back to Home Button */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 pt-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/">
          <motion.button
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(147, 51, 234, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </motion.button>
        </Link>
      </motion.div>

      {/* Floating Math Symbols Background */}
      <FloatingElements 
        elements={['📚', '✏️', '🎯', '💡', '⭐', '🚀', '📊', '🧮', '📐', '📏']}
        count={12}
        size="md"
        colors={['text-purple-200', 'text-pink-200', 'text-orange-200', 'text-teal-200']}
      />

      {/* Main Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

        {/* Section 1 - Enhanced Main Message */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-purple-100 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-200 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-pink-200 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-orange-200 rounded-full blur-xl opacity-20"></div>
            
            {/* Floating Educational Icons */}
            <motion.div
              className="absolute top-6 left-6 text-purple-300 text-2xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              📚
            </motion.div>
            <motion.div
              className="absolute top-12 right-8 text-pink-300 text-xl"
              animate={{ 
                y: [0, 8, 0],
                rotate: [0, -3, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              ✏️
            </motion.div>
            <motion.div
              className="absolute bottom-8 left-8 text-orange-300 text-lg"
              animate={{ 
                y: [0, -6, 0],
                rotate: [0, 4, 0]
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              🎯
            </motion.div>
            <motion.div
              className="absolute bottom-6 right-6 text-teal-300 text-xl"
              animate={{ 
                y: [0, 7, 0],
                rotate: [0, -2, 0]
              }}
              transition={{ 
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              💡
            </motion.div>
            
            {/* Main Content */}
            <div className="relative z-10 text-center">
              <motion.div
                className="inline-flex items-center space-x-3 mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Our Services
                </h2>
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
              </motion.div>
              
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                At <span className="font-semibold text-purple-600">Level Up Math Academy</span>, our curriculum is carefully designed for students from <span className="font-semibold text-pink-600">Grade 3 to Grade 12</span>, providing a <span className="font-semibold text-orange-500">customized learning experience</span> tailored to each student's unique abilities and pace. Our innovative and interactive programs make math <span className="font-semibold text-teal-600">enjoyable and engaging</span>, fostering academic excellence and lifelong confidence in mathematics.
              </motion.p>
              
              {/* Decorative Line */}
              <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="w-24 h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Grade Category Selector */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {gradeCategories.map((grade, index) => (
              <motion.button
                key={grade.id}
                onClick={() => setSelectedGrade(grade.id)}
                className={`relative px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 border-2 ${
                  selectedGrade === grade.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-purple-600 shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-purple-300 hover:shadow-md'
                }`}
                whileHover={{ scale: selectedGrade === grade.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
              >
                {grade.label}
                
                {/* Downward Arrow for Selected Grade */}
                <AnimatePresence>
                  {selectedGrade === grade.id && (
                    <motion.div
                      className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-purple-600"></div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Content */}
            <motion.div
              key={selectedGrade}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                {currentGrade.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6 sm:mb-8">
                {currentGrade.description}
              </p>

              {/* Learning Outcomes */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Learning Outcomes:</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {currentGrade.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Class Format */}
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Class Format:</h4>
                <ul className="space-y-2 sm:space-y-3">
                  {currentGrade.classFormat.map((format, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{format}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              key={`image-${selectedGrade}`}
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={currentGrade.image}
                  alt={`${currentGrade.label} Math Learning`}
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover rounded-xl sm:rounded-2xl"
                  priority
                />
                {/* Overlay for better text contrast if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl sm:rounded-2xl"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* View Courses Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
        >
          <Link href={currentGrade.link}>
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
              whileTap={{ scale: 0.98 }}
            >
              View Courses
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Section 5 - Let's Learn Together */}
      <CallToActionSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}