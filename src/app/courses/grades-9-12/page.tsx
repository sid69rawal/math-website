'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import FloatingElements from '@/components/FloatingElements';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Grades912Page() {
  const [selectedCourse, setSelectedCourse] = useState<any>(null);

  const courses = [
    {
      title: 'Grade 9 Math',
      icon: '📈',
      overview: 'This course builds a strong foundation in algebra, geometry, and data analysis to prepare students for advanced high school math, including Functions, Advanced Functions, and Calculus & Vectors. Learners develop fluency with rational numbers, expressions, equations, and graphing techniques while exploring real-world applications in finance, coding, and optimization. Through interactive lessons and exam-style practice, students strengthen abstract reasoning, critical thinking, and problem-solving skills.',
      keyConcepts: [
        'Number systems: natural, whole, integers, rational, irrational',
        'Operations with rational numbers, powers, square roots, and scientific notation',
        'Ratios, rates, proportions, and scaling in real-world contexts',
        'Algebraic expressions, laws of exponents, expansion, simplification, and factoring',
        'Solving first-degree equations and linear systems',
        'Quadratic functions: parent function y = x^2, graphing, and applications',
        'Linear relations: slope, intercept, and multiple representations',
        'Geometry: angle relationships, congruence, similarity, and Pythagorean applications',
        'Measurement: surface area, volume, composite figures, and midpoints',
        'Trigonometry of right and acute triangles',
        'Data analysis: single and two-variable sets, correlation, and predictions',
        'Financial literacy: budgeting, interest, and decision-making',
        'Real-life optimization and problem-solving strategies'
      ],
      learningOutcomes: [
        'Develop fluency in algebraic manipulation and graphing techniques',
        'Analyze and model linear and quadratic relationships',
        'Apply geometric and algebraic reasoning in real-world contexts',
        'Solve equations, inequalities, and systems with confidence',
        'Interpret and connect multiple representations of functions',
        'Calculate surface area, volume, and midpoints in composite figures',
        'Use trigonometry and ratios to solve triangle-based problems',
        'Strengthen data management and analytical thinking',
        'Make informed financial decisions using math models',
        'Prepare for exams and future math courses with strategic problem-solving'
      ]
    },
    {
      title: 'Grade 10 Math',
      icon: '📊',
      overview: 'This course empowers Grade 10 students to deepen their algebraic reasoning, geometric analysis, and problem-solving skills. Aligned with the Ontario curriculum and enriched for international learners, it emphasizes real-world applications, multi-step thinking, and mathematical communication. Students explore linear and quadratic relationships, trigonometry, analytic geometry, and systems of equations—laying the groundwork for senior-level courses like Functions and Calculus.',
      keyConcepts: [
        'Algebra: Simplifying expressions, expanding/factoring binomials and trinomials, solving equations and inequalities',
        'Quadratic Relations: Vertex and standard form, graphing parabolas, solving by factoring and graphing',
        'Linear Systems: Solving using graphing, substitution, and elimination; applications in geometry and finance',
        'Coordinate & Analytic Geometry: Slope, equations of lines, distance and midpoint formulas, parallel/perpendicular lines',
        'Trigonometry: Sine, cosine, tangent ratios; solving right and acute triangles; real-world applications',
        'Congruence & Similarity: Triangle congruence criteria, scale factors, proportional reasoning',
        'Circles: Properties, angles, tangents, and secants; applications in design and construction',
        'Inequalities: Solving and graphing linear and quadratic inequalities; compound systems',
        'Factorization: Common techniques, difference of squares, perfect trinomials',
        'Exam Preparation: Problem-solving strategies, multi-step applications, and mathematical communication'
      ],
      learningOutcomes: [
        'Model and solve problems using linear and quadratic relationships',
        'Analyze geometric properties using algebra and coordinate tools',
        'Apply trigonometric ratios to solve real-world triangle problems',
        'Solve systems of equations and interpret solutions in context',
        'Communicate mathematical thinking clearly across multiple representations',
        'Use algebraic and geometric reasoning to solve multi-step problems',
        'Apply formulas and relationships to real-world measurement and design scenarios',
        'Build fluency in factoring, graphing, and solving quadratic equations',
        'Strengthen readiness for advanced math courses through rigorous practice and conceptual understanding'
      ]
    },
    {
      title: 'Grade 11 Functions',
      icon: '🔢',
      overview: 'This course introduces students to the formal concept of functions, building on their experience with linear and quadratic relations. Learners explore trigonometric, exponential, and discrete functions while developing algebraic fluency, graphing strategies, and problem-solving techniques. The curriculum lays a strong foundation for IB, Advanced Functions, and university-level math through real-world modeling, transformations, and function composition.',
      keyConcepts: [
        'Function Foundations: Definition, notation, domain/range, vertical line test',
        'Algebraic Techniques: Simplifying expressions, factoring, rational expressions, solving equations',
        'Linear & Quadratic Functions: Graphing, transformations, vertex/standard/factored forms, applications',
        'Exponential Functions: Growth/decay, transformations, domain/range, real-life modeling',
        'Trigonometric Functions: Sine/cosine curves, amplitude, period, phase shift, equations, applications',
        'Function Transformations: Shifts, reflections, stretches/compressions, combined transformations',
        'Function Operations & Composition: Add, subtract, multiply, divide, compose functions, domain analysis',
        'Inverse Functions: Algebraic and graphical inverses, verification, domain/range',
        'Discrete Functions: Sequences, series, recursive/explicit formulas, sigma notation',
        'Analytic Geometry: Coordinate geometry, slope, distance, midpoint, parallel/perpendicular lines',
        'Real-World Applications: Motion, finance, design, pattern modeling, optimization problems'
      ],
      learningOutcomes: [
        'Understand and graph a variety of functions and their transformations',
        'Solve equations using algebraic strategies and function properties',
        'Analyze domain, range, and behavior of linear, quadratic, exponential, and trigonometric functions',
        'Apply function composition and inverse operations',
        'Model real-world scenarios using appropriate function types',
        'Communicate mathematical reasoning clearly across multiple representations',
        'Build readiness for Advanced Functions, Calculus, and IB-level math'
      ]
    },
    {
      title: 'Grade 12 Advanced Functions',
      icon: '🎯',
      overview: 'This university preparation course deepens students\' understanding of functions and algebraic reasoning, laying the groundwork for Calculus, science, engineering, and business programs. Students explore polynomial, rational, exponential, logarithmic, and trigonometric functions, along with rates of change and advanced function operations. Emphasis is placed on modeling, transformations, and problem-solving in real-world and theoretical contexts.',
      keyConcepts: [
        'Function Foundations: Definitions, notation, domain/range, piecewise and absolute value functions',
        'Polynomial Functions: End behavior, turning points, factoring, division, remainder/factor theorems',
        'Rational & Reciprocal Functions: Asymptotes, discontinuities, domain restrictions, real-world applications',
        'Exponential & Logarithmic Functions: Laws, transformations, solving equations, growth/decay, finance models',
        'Trigonometric Functions: Graphing sine, cosine, tangent; amplitude, period, phase shift; reciprocal trig functions',
        'Trigonometric Identities & Equations: Pythagorean, compound, double/half angle identities; solving and proving',
        'Function Operations & Composition: Add/subtract/multiply/divide functions, composition, domain analysis',
        'Inverse Functions: Algebraic and graphical inverses, verification, domain/range',
        'Rates of Change: Average and instantaneous rates, secant/tangent lines, intro to derivatives',
        'Applications: Modeling motion, economics, optimization, sound intensity, pH, and periodic phenomena'
      ],
      learningOutcomes: [
        'Analyze and graph a wide range of functions with precision',
        'Solve complex equations and inequalities using algebraic and graphical methods',
        'Apply transformations and identities to model and interpret function behavior',
        'Use function composition and inverses to solve multi-step problems',
        'Interpret rates of change and prepare for calculus concepts',
        'Build mathematical models to solve real-world and theoretical problems',
        'Strengthen abstract reasoning and readiness for post-secondary math and STEM pathways'
      ]
    },
    {
      title: 'Grade 12 Calculus & Vectors',
      icon: '⚡',
      overview: 'This university preparation course equips students with essential calculus and vector skills for success in STEM, business, and competitive academic programs. Learners explore limits, derivatives, optimization, and motion problems alongside vector geometry in two and three dimensions. Emphasis is placed on modeling, reasoning, and solving real-world problems using advanced mathematical tools.',
      keyConcepts: [
        'Calculus Foundations: Rates of change, tangents/secants, limits, continuity',
        'Derivatives: Power, sum, product, quotient, chain rule, implicit differentiation, higher-order derivatives',
        'Applications of Derivatives: Curve sketching, optimization, related rates, motion problems',
        'Exponential & Logarithmic Functions: Differentiation, growth/decay, financial modeling',
        'Trigonometric Functions: Derivatives of sine, cosine, tangent; periodic motion and angle-based applications',
        'Vector Foundations: Scalars vs. vectors, magnitude/direction, addition/subtraction, scalar multiplication',
        'Vector Operations: Components, unit vectors, dot product, angle between vectors, projections',
        '3D Geometry: Vector, parametric, and symmetric equations of lines and planes; intersections and angles',
        'Applications of Vectors: Forces, equilibrium, velocity/displacement, engineering and physics contexts'
      ],
      learningOutcomes: [
        'Develop fluency in differentiation and apply it to motion, optimization, and modeling problems',
        'Analyze functions using first and second derivatives to interpret behavior and solve real-world scenarios',
        'Solve exponential, logarithmic, and trigonometric problems using calculus techniques',
        'Understand and apply vector operations in 2D and 3D space',
        'Model geometric and physical systems using vector equations and spatial reasoning',
        'Prepare confidently for university-level math, science, and engineering programs'
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
        elements={['📚', '✏️', '🎯', '💡', '⭐', '🚀', '📊', '🧮', '📐', '📏']}
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
              🎓
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
                  Grades 9-12 Math
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
                Explore our math courses for <span className="font-semibold text-purple-600">Grades 9 to 12</span>. Each course is designed to prepare students for <span className="font-semibold text-pink-600">advanced math, competitions and university</span> by building <span className="font-semibold text-orange-500">strong foundations, mastering senior level concepts</span> and developing <span className="font-semibold text-teal-600">confidence, problem-solving and critical thinking skills</span>.
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
              Ready to Achieve Mathematical Mastery? 🚀
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-2xl mx-auto">
              Prepare your high school student for university success with our comprehensive advanced mathematics program. 
              Master calculus, functions, and vectors with confidence!
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