'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import FloatingElements from '@/components/FloatingElements';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Course {
  title: string;
  icon: string;
  overview: string;
  keyConcepts: string[];
  learningOutcomes: string[];
}

export default function Grades68Page() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses = [
    {
      title: 'Grade 6 Math',
      icon: '🔢',
      overview: 'Grade 6 marks a shift toward deeper analytical thinking, multi-step reasoning, and abstract concepts. Students work with larger numbers, complex fractions and decimals, and begin formal algebraic thinking. Real-world applications—like tax, discounts, and surface area—are emphasized to build mathematical fluency and confidence.',
      keyConcepts: [
        'Numbers up to 1,000,000 and decimals to thousandths',
        'Long division and multi-digit multiplication',
        'Fractions with unlike denominators, multiplication and division of fractions',
        'Decimals in all four operations and real-life money contexts',
        'Percentages, ratios, and proportions',
        'Surface area and volume of prisms',
        'Algebraic expressions and simple equations',
        'Data analysis including mean, median, mode, and range',
        'Probability using fractions, decimals, and percentages',
        'EQAO-style review and test strategies'
      ],
      learningOutcomes: [
        'Read, write, and compare numbers up to 1 million',
        'Solve multi-step problems using all four operations',
        'Add, subtract, multiply, and divide fractions and decimals',
        'Apply formulas for area, volume, and surface area',
        'Analyze data using graphs and statistical tools',
        'Write and solve algebraic expressions and equations',
        'Use math to solve real-world problems involving money, time, and measurement',
        'Prepare for EQAO with confidence and strategy'
      ]
    },
    {
      title: 'Grade 7 Math',
      icon: '📊',
      overview: 'Grade 7 introduces students to formal algebra, signed numbers, and financial literacy while deepening their understanding of fractions, decimals, and percentages. Students move beyond procedural fluency into conceptual reasoning, multi-step problem solving, and real-world applications across geometry, data, and finance.',
      keyConcepts: [
        'Whole numbers and operations with expanded form and estimation',
        'Fractions and decimals in all four operations, including conversions',
        'Percentages, ratios, and rates with real-world applications',
        'Positive and negative numbers in context (temperature, finance, elevation)',
        'Algebraic expressions, equations, and inequalities',
        'Surface area and volume of complex 3D shapes',
        'Graphing in all four quadrants and interpreting linear relationships',
        'Probability and data analysis with central tendency',
        'Financial literacy: budgeting, interest, and decision-making'
      ],
      learningOutcomes: [
        'Apply all four operations to whole numbers, fractions, decimals, and integers',
        'Solve multi-step word problems using algebraic reasoning',
        'Graph and interpret relationships on the Cartesian plane',
        'Calculate surface area and volume of complex 3D shapes',
        'Analyze data using graphs and statistical measures',
        'Understand and apply financial concepts like budgeting and interest',
        'Use math to model and solve real-world problems with confidence'
      ]
    },
    {
      title: 'Grade 8 Math',
      icon: '📐',
      overview: 'Grade 8 math prepares students for high school by emphasizing algebraic fluency, linear relationships, and advanced problem-solving. Learners explore powers, square roots, scientific notation, and compound probability while applying math to real-world contexts like finance, measurement, and data analysis.',
      keyConcepts: [
        'Large numbers, decimals, powers, square roots, and scientific notation',
        'Ratios, rates, and unit conversions in real-world scenarios',
        'Algebraic expressions, multi-step equations, and inequalities',
        'Linear relationships: slope, intercept, and graphing equations',
        'Data analysis and compound probability',
        'Geometry: polygons, circles, congruence, and similarity',
        'Pythagorean Theorem and coordinate geometry',
        'Surface area, volume, and composite measurement problems',
        'Financial literacy: budgeting, interest, and informed decision-making'
      ],
      learningOutcomes: [
        'Apply BEDMAS with brackets and work fluently with powers and roots',
        'Solve multi-step algebraic equations and graph linear relationships',
        'Use the Pythagorean Theorem in geometric and coordinate contexts',
        'Analyze data and predict trends using graphs and statistical tools',
        'Calculate surface area and volume of complex 3D shapes',
        'Understand and apply compound probability',
        'Make informed financial decisions using budgeting and interest models',
        'Prepare for high school math with confidence and clarity'
      ]
    }
  ];

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
        <Link href="/" className="inline-block">
          <motion.button
            className="flex items-center space-x-2 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer hover:opacity-90" style={{ backgroundColor: '#30519d' }}
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
        colors={['text-blue-200', 'text-cyan-200', 'text-sky-200', 'text-blue-200']}
      />

      {/* Main Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}

        {/* Enhanced Main Message Section */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-blue-100 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-200 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-200 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-orange-200 rounded-full blur-xl opacity-20"></div>
            
            {/* Floating Educational Icons */}
            <motion.div
              className="absolute top-6 left-6 text-blue-300 text-2xl"
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
              📈
            </motion.div>
            <motion.div
              className="absolute top-12 right-8 text-cyan-300 text-xl"
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
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">📈</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 bg-clip-text text-transparent">
                  Grades 6-8 Math
                </h2>
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📊</span>
                </div>
              </motion.div>
              
              <motion.p
                className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                Explore our math courses for <span className="font-semibold text-blue-600">Grades 6 to 8</span>. Each course is designed to empower students with <span className="font-semibold text-blue-600">strong problem-solving, curriculum mastery</span>, <span className="font-semibold text-blue-600">competition readiness</span> and <span className="font-semibold text-blue-600">confidence for academic excellence and beyond</span>.
              </motion.p>
              
              {/* Decorative Line */}
              <motion.div
                className="flex justify-center mt-8"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Courses Cards - Compact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-12">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 group text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.4 + index * 0.1,
                duration: 0.4
              }}
              whileHover={{ 
                y: -2,
                transition: { duration: 0.2 }
              }}
            >
              {/* Round Picture - Compact */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <div className="text-2xl sm:text-3xl lg:text-4xl">{course.icon}</div>
              </div>

              {/* Course Title - Compact */}
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {course.title}
              </h3>

              {/* Learn More Button - Compact */}
              <button
                onClick={() => setSelectedCourse(course)}
                className="w-full sm:w-auto text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-200 hover:opacity-90" style={{ backgroundColor: '#30519d' }}
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Call to Action - Compact */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-200">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              Ready to Empower Your Middle School Student? 🚀
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Give your middle school student the advanced skills they need to excel in mathematics and beyond. 
              Our comprehensive approach prepares them for high school and competitions!
            </p>
            <Link href="/contact">
              <button className="w-full sm:w-auto text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:opacity-90 transition-all duration-200" style={{ backgroundColor: '#30519d' }}>
                Enroll Now! 📝
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Course Details Modal - Mobile Optimized */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header - Compact */}
              <div className="flex justify-between items-start sm:items-center mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-lg sm:text-xl">{selectedCourse.icon}</div>
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">{selectedCourse.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-1 flex-shrink-0"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Modal Content - Compact */}
              <div className="space-y-4 sm:space-y-6">
                {/* Overview */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
                    <span className="text-base sm:text-lg mr-2">📚</span>
                    Overview
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{selectedCourse.overview}</p>
                </div>

                {/* Key Concepts */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
                    <span className="text-base sm:text-lg mr-2">🎯</span>
                    Key Concepts Covered
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {selectedCourse.keyConcepts.map((concept, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{concept}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learning Outcomes */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
                    <span className="text-base sm:text-lg mr-2">🎓</span>
                    Learning Outcomes
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {selectedCourse.learningOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Button - Compact */}
                <div className="text-center pt-3 sm:pt-4 border-t border-gray-200">
                  <Link href="/contact">
                    <button className="w-full sm:w-auto text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:opacity-90 transition-all duration-200" style={{ backgroundColor: '#30519d' }}>
                      Enroll Now! 📝
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}