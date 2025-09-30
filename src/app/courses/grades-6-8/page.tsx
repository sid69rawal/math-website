'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Middle School Math Tutoring (Grades 6-8)",
    "description": "Middle school math tutoring for Grades 6-8 in Mississauga. Algebra, geometry, fractions & EQAO prep.",
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Level Up Math Academy",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mississauga",
        "addressRegion": "ON",
        "addressCountry": "CA"
      }
    },
    "courseMode": ["blended", "onsite", "online"],
    "educationalLevel": "Middle School",
    "inLanguage": "en-CA",
    "offers": {
      "@type": "Offer",
      "price": "200",
      "priceCurrency": "CAD",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "200",
        "priceCurrency": "CAD",
        "unitText": "per month"
      }
    },
    "teaches": [
      "Algebra",
      "Geometry",
      "Fractions and Decimals",
      "EQAO Preparation",
      "Problem Solving",
      "Data Analysis"
    ]
  };

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCourse) {
      // Get current scroll position
      const scrollY = window.scrollY;
      
      // Prevent scrolling on both html and body
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scrolling
      const scrollY = document.body.style.top;
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Restore scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.documentElement.style.overflow = 'unset';
      document.body.style.overflow = 'unset';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [selectedCourse]);

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
    <div className="min-h-screen bg-gray-50 pt-32">
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />
      
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
                className="bg-gray-200 rounded-xl p-4 sm:p-6 shadow-lg border border-gray-300 hover:bg-gray-300 hover:border-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 group text-center flex flex-col min-h-[400px] sm:min-h-[450px]"
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
                      src={`/grade-${index + 6}.png`}
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

                {/* Bullet Points */}
                <div className="mb-12">
                  <ul className="space-y-2 text-base text-gray-700">
                      {course.title === "Grade 6 Math Program" && (
                        <>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                            Develop Analytical Skills
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                            Apply Real-World Math
                          </li>
                        </>
                      )}
                      {course.title === "Grade 7 Math Program" && (
                        <>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                            Master Algebra & Ratios
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                            Enhance Conceptual Reasoning
                          </li>
                        </>
                      )}
                      {course.title === "Grade 8 Math Program" && (
                        <>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                            Build Algebraic Fluency
                          </li>
                          <li className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                            Tackle Advanced Problems
                          </li>
                        </>
                      )}
                  </ul>
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

      </div>

      {/* Full-Screen Call to Action - Chalkboard Style */}
      <motion.section
        className="py-8 lg:py-12 relative overflow-hidden bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {/* Inline SVG chalk overlay */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          viewBox="0 0 1600 600"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          style={{ display: 'block' }}
        >
          <defs>
            {/* very subtle roughness for chalky stroke */}
            <filter id="chalkGrainCTA68" x="-30%" y="-30%" width="160%" height="160%">
              <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" stitchTiles="stitch" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
              <feGaussianBlur stdDeviation="0.5" />
            </filter>

            <filter id="softBlurCTA68" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.4" />
            </filter>
          </defs>

          {/* formulas and symbols group - dark text on light background */}
          <g
            fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, monospace"
            fill="#0a3b5a"
            fillOpacity="0.3"
            style={{ fontVariantLigatures: 'none' }}
          >
            {/* Middle school math formulas */}
            <text x="100" y="80" fontSize="24">ax² + bx + c = 0</text>
            <text x="300" y="100" fontSize="18">y = mx + b</text>
            <text x="500" y="80" fontSize="16">sin²θ + cos²θ = 1</text>
            <text x="700" y="100" fontSize="20">a² + b² = c²</text>
            
            <text x="900" y="80" fontSize="18">V = πr²h</text>
            <text x="1100" y="100" fontSize="16">A = πr²</text>
            <text x="1300" y="80" fontSize="20">P = 2πr</text>
            
            <text x="150" y="200" fontSize="18">f(x) = ax + b</text>
            <text x="350" y="220" fontSize="16">log(a) + log(b) = log(ab)</text>
            <text x="600" y="200" fontSize="20">√(a² + b²)</text>
            
            <text x="800" y="220" fontSize="18">lim (x→0) sin(x)/x = 1</text>
            <text x="1100" y="200" fontSize="16">d/dx [xⁿ] = nxⁿ⁻¹</text>
            <text x="1300" y="220" fontSize="20">∫ f(x) dx</text>
            
            {/* Lower row */}
            <text x="100" y="320" fontSize="16">∠A + ∠B + ∠C = 180°</text>
            <text x="300" y="340" fontSize="18">△ABC ~ △DEF</text>
            <text x="500" y="320" fontSize="16">AB² = AC² + BC²</text>
            <text x="700" y="340" fontSize="20">sin(A)/a = sin(B)/b</text>
            
            <text x="900" y="320" fontSize="18">V = (4/3)πr³</text>
            <text x="1100" y="340" fontSize="16">S = 4πr²</text>
            <text x="1300" y="320" fontSize="20">A = (1/2)bh</text>
            
            {/* Math symbols */}
            <text x="200" y="450" fontSize="28" fontWeight="700">∑</text>
            <text x="300" y="450" fontSize="26" fontWeight="700">∫</text>
            <text x="400" y="450" fontSize="24" fontWeight="700">√</text>
            <text x="500" y="450" fontSize="22" fontWeight="700">π</text>
            <text x="600" y="450" fontSize="20" fontWeight="700">∞</text>
            <text x="700" y="450" fontSize="18" fontWeight="700">±</text>
            <text x="800" y="450" fontSize="22" fontWeight="700">≈</text>
            <text x="900" y="450" fontSize="20" fontWeight="700">≠</text>
            <text x="1000" y="450" fontSize="24" fontWeight="700">≤</text>
            <text x="1100" y="450" fontSize="22" fontWeight="700">≥</text>
            <text x="1200" y="450" fontSize="20" fontWeight="700">∈</text>
          </g>

          {/* delicate small chalk accents */}
          <g stroke="#0b4a76" strokeOpacity="0.15" strokeWidth="1.0" strokeLinecap="round" fill="none">
            <path d="M300 150 q20 -15 40 -6" />
            <path d="M800 120 q15 10 30 6" />
            <path d="M1200 180 q25 -12 50 -4" />
          </g>
        </svg>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to Empower Your Middle School Student? 🚀
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 font-medium leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto">
              Give your middle school student the advanced skills they need to excel in mathematics and beyond. 
              Our comprehensive approach prepares them for high school and competitions!
            </p>
            <Link href="/contact">
              <button className="text-white px-6 py-3 rounded-lg font-semibold text-base shadow-lg transition-all duration-300 hover:opacity-90" style={{ backgroundColor: '#30519d' }}>
                Book a Free Assessment
              </button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />

      {/* Course Details Modal - Mobile Optimized */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-start sm:items-center justify-center z-50 p-2 sm:p-4 pt-16 sm:pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedCourse(null)}
          >
            <motion.div
              className="bg-white p-3 sm:p-4 lg:p-6 w-full max-w-4xl max-h-[calc(100vh-10rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto shadow-2xl"
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
                      src={`/grade-${courses.findIndex(course => course.title === selectedCourse.title) + 6}.png`}
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
                <div className="text-center pt-3 sm:pt-4 pb-4 sm:pb-6 border-t border-gray-200">
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