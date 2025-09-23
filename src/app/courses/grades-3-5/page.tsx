'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import { useState } from 'react';

interface Course {
  title: string;
  description: string;
  topics: string[];
  duration: string;
  price: string;
  icon: string;
  overview: string;
  keyConcepts: string[];
  learningOutcomes: string[];
}

export default function Grades35Page() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const courses = [
    {
      title: "Grade 3 Math",
      description: "Building strong foundations in basic arithmetic, number sense, and problem-solving skills.",
      topics: ["Addition & Subtraction", "Multiplication Basics", "Fractions Introduction", "Geometry Basics", "Measurement", "Data & Graphs"],
      duration: "2 hours/week",
      price: "$200+HST/month",
      icon: "🔢",
      overview: "This course helps Grade 3 students strengthen their math foundation by exploring numbers, operations, shapes, measurement, data, and patterns. Through interactive lessons and problem-solving activities, students develop confidence and prepare for future success, including EQAO assessments.",
      keyConcepts: [
        "Understanding numbers, place value, and rounding",
        "Addition and subtraction with two- and three-digit numbers",
        "Introduction to multiplication and division (tables up to 10)",
        "Data collection, sorting, pictographs, bar graphs, and Venn diagrams",
        "Geometric shapes, angles, symmetry, and spatial reasoning",
        "Measurement of length, mass, capacity, area, and temperature",
        "Reading and working with time (clocks and intervals)",
        "Basic patterns, arithmetic expressions, and number sentences",
        "Probability and outcomes (certain, impossible, likely)",
        "Practice for EQAO assessments with solved examples"
      ],
      learningOutcomes: [
        "Strengthen fluency in number sense, multiplication, division (within 100), and core arithmetic",
        "Understand fractions and apply them in real-life contexts",
        "Solve word problems using logical and critical thinking",
        "Explore geometry through spatial reasoning and visualization",
        "Use measurement tools and units in everyday situations",
        "Interpret data using charts and graphs",
        "Prepare confidently for EQAO assessments"
      ]
    },
    {
      title: "Grade 4 Math", 
      description: "Advanced arithmetic operations, decimal introduction, and enhanced problem-solving techniques.",
      topics: ["Multi-digit Operations", "Decimals Introduction", "Fractions & Mixed Numbers", "Angles & Shapes", "Area & Perimeter", "Word Problems"],
      duration: "2 hours/week",
      price: "$200+HST/month",
      icon: "📊",
      overview: "This course deepens foundational math skills while introducing key concepts like decimals, fractions, percentages, and geometry. Students explore multi-step problem solving, data interpretation, and real-world applications through engaging lessons and hands-on activities.",
      keyConcepts: [
        "Place value, rounding, and number operations",
        "Multiplication and division (including remainders and multi-step problems)",
        "Fractions, decimals, and percentages",
        "Measurement, perimeter, area, volume, and temperature",
        "Geometry: shapes, symmetry, and angles",
        "Time, patterns, and algebraic thinking",
        "Data management and probability"
      ],
      learningOutcomes: [
        "Read, write, and compare numbers up to 10,000",
        "Master multiplication tables and apply them to problem-solving",
        "Understand and manipulate fractions and decimals",
        "Solve multi-step word problems using all four operations",
        "Measure and calculate using metric units",
        "Analyze data using graphs and charts",
        "Strengthen spatial reasoning and logical thinking"
      ]
    },
    {
      title: "Grade 5 Math",
      description: "Complex operations, advanced fractions, and preparation for middle school mathematics.",
      topics: ["Advanced Operations", "Fractions & Decimals", "Percentages", "Geometry & Measurement", "Statistics", "Problem Solving"],
      duration: "2 hours/week", 
      price: "$200+HST/month",
      icon: "🧮",
      overview: "Grade 5 builds on foundational skills and introduces more abstract thinking, precision, and multi-step problem solving. Students work with larger numbers, deeper fraction and decimal concepts, and begin exploring algebraic reasoning and data analysis. The curriculum emphasizes accuracy, strategy, and real-world application.",
      keyConcepts: [
        "Larger number ranges (up to 100,000) and expanded/standard form",
        "Decimals to thousandths and money-based applications",
        "Long division and 2-digit multiplication",
        "Mixed numbers and improper fractions",
        "24-hour time format and unit conversions",
        "Volume calculations and nets of 3D shapes",
        "Algebraic expressions and mean, median, mode, range",
        "Probability using fractions and experimental vs theoretical outcomes"
      ],
      learningOutcomes: [
        "Read, write, and compare numbers up to 100,000",
        "Round whole numbers and decimals with precision",
        "Solve multi-step problems using all four operations",
        "Master long division and 2-digit multiplication",
        "Add and subtract fractions and decimals confidently",
        "Convert between time units and interpret 24-hour clocks",
        "Measure and calculate perimeter, area, and volume",
        "Analyze data using statistical measures",
        "Explore algebraic thinking through patterns and variables",
        "Apply math to real-world scenarios with logic and accuracy"
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
            className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer"
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
        elements={['🔢', '📊', '🧮', '🎯', '👥', '✏️', '📈', '⭐', '🚀', '💡']}
        count={12}
        size="md"
        colors={['text-purple-200', 'text-pink-200', 'text-orange-200', 'text-teal-200']}
      />

      {/* Main Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

        {/* Enhanced Main Message Section */}
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
              🔢
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
                  <span className="text-white text-xl">🔢</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  Grades 3-5 Math
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
                Explore our math courses for <span className="font-semibold text-purple-600">Grades 3 to 5</span>. Each course is designed to help students build <span className="font-semibold text-pink-600">strong math foundations</span> that develop <span className="font-semibold text-orange-500">fluency, problem-solving, mental math skills</span> and <span className="font-semibold text-teal-600">confidence for long-term success</span>.
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
              <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <div className="text-2xl sm:text-3xl lg:text-4xl">{course.icon}</div>
              </div>

              {/* Course Title - Compact */}
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {course.title}
              </h3>

              {/* Learn More Button - Compact */}
              <button
                onClick={() => setSelectedCourse(course)}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-200 hover:shadow-lg"
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
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg border border-gray-200">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
              Ready to Start Your Child&apos;s Math Journey? 🚀
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Give your elementary student the strong foundation they need to excel in mathematics. 
              Our personalized approach makes learning fun and effective!
            </p>
            <Link href="/contact">
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200">
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
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
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
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
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
                        <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Button - Compact */}
                <div className="text-center pt-3 sm:pt-4 border-t border-gray-200">
                  <Link href="/contact">
                    <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200">
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
