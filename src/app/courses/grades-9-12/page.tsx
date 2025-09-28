'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
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

export default function Grades912Page() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  // Function to get the correct image path for each course
  const getCourseImage = (courseTitle: string) => {
    switch (courseTitle) {
      case 'Grade 9 Math Program':
        return '/grade-9.png';
      case 'Grade 10 Math Program':
        return '/grade-10.jpg';
      case 'Grade 11 Functions Program':
        return '/grade-11.jpg';
      case 'Grade 12 Advanced Functions Program':
        return '/grade-12_advanced.png';
      case 'Grade 12 Calculus & Vectors':
        return '/grade-12_calculus.png';
      default:
        return '/grade-9.png';
    }
  };

  const courses = [
    {
      title: 'Grade 9 Math Program',
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
      title: 'Grade 10 Math Program',
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
      title: 'Grade 11 Functions Program',
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
      title: 'Grade 12 Advanced Functions Program',
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
                Grades 9-12 Math Program
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Explore our math courses for <span className="font-semibold" style={{ color: '#30519d' }}>Grades 9 to 12</span>. Each course is designed to prepare students for <span className="font-semibold" style={{ color: '#30519d' }}>advanced math, competitions and university</span> by building <span className="font-semibold" style={{ color: '#30519d' }}>strong foundations, mastering senior level concepts</span> and developing <span className="font-semibold" style={{ color: '#30519d' }}>confidence, problem-solving and critical thinking skills</span>.
              </p>
            </div>

            {/* Right Side - Criteria Box */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg border border-blue-100 transition-all duration-300 hover:bg-gray-200 hover:from-gray-200 hover:to-gray-200 hover:border-blue-600 hover:shadow-xl hover:scale-105">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Our Grade 9-12 Math Programs Features:
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
                  <span className="text-base">8-16 hours of interactive classes per month</span>
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
                Programs For High-School Students
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
                      src={getCourseImage(course.title)}
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
            <filter id="chalkGrainCTA912" x="-30%" y="-30%" width="160%" height="160%">
              <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" stitchTiles="stitch" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
              <feGaussianBlur stdDeviation="0.5" />
            </filter>

            <filter id="softBlurCTA912" x="-30%" y="-30%" width="160%" height="160%">
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
            {/* High school advanced math formulas */}
            <text x="100" y="80" fontSize="24">∫₀^∞ e^(-x²) dx = √π/2</text>
            <text x="400" y="100" fontSize="18">∇ × F = curl(F)</text>
            <text x="700" y="80" fontSize="16">∇ · F = div(F)</text>
            <text x="1000" y="100" fontSize="20">lim (x→0) (1-cos x)/x² = 1/2</text>
            
            <text x="100" y="200" fontSize="18">f'(x) = lim[h→0] [f(x+h)-f(x)]/h</text>
            <text x="500" y="220" fontSize="16">∫ u dv = uv - ∫ v du</text>
            <text x="800" y="200" fontSize="20">e^(iπ) + 1 = 0</text>
            <text x="1100" y="220" fontSize="18">∑{'{'}{'n=0'}{'}'}{'{'}{'∞'}{'}'} xⁿ/n! = eˣ</text>
            
            <text x="100" y="320" fontSize="16">sin(A+B) = sin A cos B + cos A sin B</text>
            <text x="500" y="340" fontSize="18">cos(A+B) = cos A cos B - sin A sin B</text>
            <text x="900" y="320" fontSize="16">tan(A+B) = (tan A + tan B)/(1 - tan A tan B)</text>
            <text x="1200" y="340" fontSize="20">sinh(x) = (eˣ - e^(-x))/2</text>
            
            <text x="100" y="440" fontSize="18">|a × b| = |a||b|sin θ</text>
            <text x="400" y="460" fontSize="16">a · b = |a||b|cos θ</text>
            <text x="700" y="440" fontSize="20">∇²φ = ∂²φ/∂x² + ∂²φ/∂y² + ∂²φ/∂z²</text>
            <text x="1100" y="460" fontSize="18">F = ma = m(d²x/dt²)</text>
            
            {/* Advanced math symbols */}
            <text x="200" y="520" fontSize="28" fontWeight="700">∇</text>
            <text x="300" y="520" fontSize="26" fontWeight="700">∂</text>
            <text x="400" y="520" fontSize="24" fontWeight="700">∫</text>
            <text x="500" y="520" fontSize="22" fontWeight="700">∑</text>
            <text x="600" y="520" fontSize="20" fontWeight="700">∏</text>
            <text x="700" y="520" fontSize="18" fontWeight="700">∞</text>
            <text x="800" y="520" fontSize="22" fontWeight="700">ℂ</text>
            <text x="900" y="520" fontSize="20" fontWeight="700">ℝ</text>
            <text x="1000" y="520" fontSize="24" fontWeight="700">ℤ</text>
            <text x="1100" y="520" fontSize="22" fontWeight="700">ℕ</text>
            <text x="1200" y="520" fontSize="20" fontWeight="700">ℚ</text>
          </g>

          {/* delicate small chalk accents */}
          <g stroke="#0b4a76" strokeOpacity="0.15" strokeWidth="1.0" strokeLinecap="round" fill="none">
            <path d="M300 150 q20 -15 40 -6" />
            <path d="M800 120 q15 10 30 6" />
            <path d="M1200 180 q25 -12 50 -4" />
            <path d="M600 300 q30 -20 60 -8" />
          </g>
        </svg>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Ready to Achieve Mathematical Mastery? 🚀
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 font-medium leading-relaxed mb-4 sm:mb-6 max-w-2xl mx-auto">
              Prepare your high school student for university success with our comprehensive advanced mathematics program. 
              Master calculus, functions, and vectors with confidence!
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
                      src={getCourseImage(selectedCourse.title)}
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