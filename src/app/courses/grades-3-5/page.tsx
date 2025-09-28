'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';
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
      title: "Grade 3 Math Program",
      description: "",
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
      title: "Grade 4 Math Program", 
      description: "",
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
      title: "Grade 5 Math Program",
      description: "",
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
                Grades 3-5 Math Program
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Explore our math courses for <span className="font-semibold" style={{ color: '#30519d' }}>Grades 3 to 5</span>. Each course is designed to help students build <span className="font-semibold" style={{ color: '#30519d' }}>strong math foundations</span> that develop <span className="font-semibold" style={{ color: '#30519d' }}>fluency, problem-solving, mental math skills</span> and <span className="font-semibold" style={{ color: '#30519d' }}>confidence for long-term success</span>.
              </p>
            </div>

            {/* Right Side - Criteria Box */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg border border-blue-100 transition-all duration-300 hover:bg-gray-200 hover:from-gray-200 hover:to-gray-200 hover:border-blue-600 hover:shadow-xl hover:scale-105">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Our Grade 3-5 Math Programs Features:
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start text-gray-700">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base">Led by founders, not outside tutors</span>
                </li>
                <li className="flex items-start text-gray-700">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-4 mt-1 flex-shrink-0" />
                  <span className="text-base">In-person at our Mississauga center</span>
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
              Programs For Elementary-School Students </h3>
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
                className="bg-gray-200 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-300 hover:bg-gray-300 hover:border-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 group text-center flex flex-col min-h-[350px] sm:min-h-[380px]"
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
                {/* Course Image */}
                <div className="flex justify-center mb-4">
                  <div className="w-28 h-28 rounded-xl overflow-hidden shadow-md bg-white p-2">
                    <Image
                      src={`/grade-${index + 3}.png`}
                      alt={`${course.title} image`}
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
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
              Ready to Start Your Child&apos;s Math Journey? 🚀
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Give your elementary student the strong foundation they need to excel in mathematics. 
              Our personalized approach makes learning fun and effective!
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
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl overflow-hidden shadow-md flex items-center justify-center flex-shrink-0 p-1">
                    <Image
                      src={`/grade-${courses.findIndex(course => course.title === selectedCourse.title) + 3}.png`}
                      alt={`${selectedCourse.title} image`}
                      width={40}
                      height={40}
                      className="w-full h-full object-contain"
                    />
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
