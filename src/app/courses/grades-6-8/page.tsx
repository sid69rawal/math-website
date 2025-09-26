'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, PieChart, BarChart3, TrendingUp } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';

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
      title: 'Grade 6 Math Program',
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
      title: 'Grade 7 Math Program',
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
      title: 'Grade 8 Math Program',
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


      {/* Main Content Section with Gradient Background */}
      <div className="relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          {/* Main Message Section */}
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Main Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Grades 6-8 Math Program
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Explore our math courses for <span className="font-semibold" style={{ color: '#30519d' }}>Grades 6 to 8</span>. Each course is designed to empower students with <span className="font-semibold" style={{ color: '#30519d' }}>strong problem-solving, curriculum mastery</span>, <span className="font-semibold" style={{ color: '#30519d' }}>competition readiness</span> and <span className="font-semibold" style={{ color: '#30519d' }}>confidence for academic excellence and beyond</span>.
              </p>
            </div>

            {/* Right Side - Criteria Box */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg border border-blue-100 transition-all duration-300 hover:bg-gray-200 hover:from-gray-200 hover:to-gray-200 hover:border-blue-600 hover:shadow-xl hover:scale-105">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Our Grade 6-8 Math Programs Features:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-700">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base">Led by founders, not outside tutors</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base">Online or at our Mississauga center</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base">Affordable at $25/hour</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base">8 hours of interactive classes per month</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Book a Free Assessment Button */}
          <div className="mt-8 text-center">
            <Link href="/contact">
              <motion.button
                className="text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transition-all duration-300 hover:opacity-90"
                style={{ backgroundColor: '#30519d' }}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(48, 81, 157, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Free Assessment
              </motion.button>
            </Link>
          </div>
        </motion.div>
        </div>
      </div>

      {/* Page Title Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Programs For Middle-School Students
              </h3>
            </div>
        </motion.div>

        {/* Course Cards Vertical Long Boxes */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                className="bg-gray-200 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-300 hover:bg-gray-300 hover:border-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 group text-center flex flex-col min-h-[400px] sm:min-h-[450px]"
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
                {/* Course Icon */}
                <div className="flex justify-center mb-4">
                  {index === 0 && <PieChart className="w-12 h-12 text-blue-600" />}
                  {index === 1 && <BarChart3 className="w-12 h-12 text-blue-600" />}
                  {index === 2 && <TrendingUp className="w-12 h-12 text-blue-600" />}
                </div>

                {/* Course Title - Centered in middle */}
                <div className="flex-grow flex items-center justify-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 text-center">
                    {course.title}
                  </h3>
                </div>

                {/* Learn More Button */}
                <button
                  onClick={() => setSelectedCourse(course)}
                  className="w-full text-white px-4 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 hover:opacity-90 shadow-md" 
                  style={{ backgroundColor: '#30519d' }}
                >
                  Learn More
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

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
              <button className="w-full sm:w-auto text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:opacity-90 transition-all duration-200" style={{ backgroundColor: '#30519d' }}>
                Book a Free Assessment
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
                    <button className="w-full sm:w-auto text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:opacity-90 transition-all duration-200" style={{ backgroundColor: '#30519d' }}>
                      Book a Free Assessment
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
}