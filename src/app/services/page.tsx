'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';
import CallToActionSection from '@/components/CallToActionSection';

export default function ServicesPage() {
  const [selectedGradeDetails, setSelectedGradeDetails] = useState<{
    id: string;
    label: string;
    title: string;
    description: string;
    learningOutcomes: string[];
    classFormat: string[];
    image: string;
    link: string;
  } | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedGradeDetails) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedGradeDetails]);

  const gradeCategories = [
    {
      id: 'grades-3-5',
      label: 'Grade 3-5 Math Programs',
      title: 'Building Strong Foundations for Lifelong Success',
      description: 'Building Strong Foundations for Lifelong Success',
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
      image: '/hero_img.png',
      link: '/courses/grades-3-5'
    },
    {
      id: 'grades-6-8',
      label: 'Grade 6-8 Math Programs',
      title: 'Empowering Students for Academic Excellence and Beyond',
      description: 'Empowering Students for Academic Excellence and Beyond',
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
      label: 'Grade 9-10 Math Programs',
      title: 'Building Confidence and Readiness for Higher Math',
      description: 'Building Confidence and Readiness for Higher Math',
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
      image: '/hero_img.png',
      link: '/courses/grades-9-12'
    },
    {
      id: 'grades-11-12',
      label: 'Grade 11-12 Math Programs',
      title: 'Mastery, Exam Success, and University Readiness',
      description: 'Mastery, Exam Success, and University Readiness',
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


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Navigation */}
      <Header />


      {/* Main Content Section with Gradient Background */}
      <div className="relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
          {/* Section 1 - Main Message */}
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
                Our Services
              </h2>
              
                <p className="text-lg text-gray-700 leading-relaxed">
                At <span className="font-semibold" style={{ color: '#30519d' }}>Level Up Math Academy</span>, our curriculum is carefully designed for students from <span className="font-semibold" style={{ color: '#30519d' }}>Grade 3 to Grade 12</span>, providing a <span className="font-semibold" style={{ color: '#30519d' }}>customized learning experience</span> tailored to each student&apos;s unique abilities and pace. Our innovative and interactive programs make math <span className="font-semibold" style={{ color: '#30519d' }}>enjoyable and engaging</span>, fostering academic excellence and lifelong confidence in mathematics.
              </p>
              </div>

              {/* Right Side - Criteria Box */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg border border-blue-100 transition-all duration-300 hover:bg-gray-200 hover:from-gray-200 hover:to-gray-200 hover:border-blue-600 hover:shadow-xl hover:scale-105">
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  All Programs Meet The Following Criteria:
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

      {/* Math Programs By Grade Category Heading */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

        {/* Math Programs By Grade Category Heading */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
              Math Programs By Grade Category
            </h2>
          </div>
        </motion.div>

        {/* Grade Categories Vertical Long Boxes */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {gradeCategories.map((grade, index) => (
              <motion.div
                key={grade.id}
                className="bg-gray-200 rounded-xl p-4 sm:p-8 lg:p-10 shadow-lg border border-gray-300 hover:bg-gray-300 hover:border-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 group text-center flex flex-col min-h-[300px] sm:min-h-[450px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 0.6 + index * 0.1,
                  duration: 0.4
                }}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Grade Title */}
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
                {grade.label}
                </h3>

                {/* Grade Description */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-600 mb-6 sm:mb-8 lg:mb-10 flex-grow leading-relaxed">
                  {grade.description}
                </p>

                {/* Learn More Button */}
                <button
                  onClick={() => setSelectedGradeDetails(grade)}
                  className="w-full text-white px-4 sm:px-6 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-all duration-200 hover:opacity-90 mt-auto shadow-md" 
                  style={{ backgroundColor: '#30519d' }}
                >
                  Learn More
                </button>
                    </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section 5 - Let's Learn Together */}
      <CallToActionSection />

      {/* Footer */}
      <Footer />

      {/* Grade Details Modal */}
      <AnimatePresence>
        {selectedGradeDetails && (
        <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedGradeDetails(null)}
          >
            <motion.div
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start sm:items-center mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="text-lg sm:text-xl">📚</div>
                  </div>
                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 truncate">{selectedGradeDetails.title}</h2>
                </div>
                <button
                  onClick={() => setSelectedGradeDetails(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors p-1 flex-shrink-0"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-4 sm:space-y-6">
                {/* Description */}
                <div>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{selectedGradeDetails.description}</p>
                </div>

              {/* Learning Outcomes */}
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
                    <span className="text-base sm:text-lg mr-2">🎯</span>
                    Learning Outcomes:
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {selectedGradeDetails.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Class Format */}
              <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 flex items-center">
                    <span className="text-base sm:text-lg mr-2">📚</span>
                    Class Format:
                  </h3>
                  <ul className="space-y-1.5 sm:space-y-2">
                    {selectedGradeDetails.classFormat.map((format, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-600 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{format}</span>
                    </li>
                  ))}
                </ul>
              </div>

                {/* Contact Button */}
                <div className="text-center pt-3 sm:pt-4 border-t border-gray-200">
                  <Link href={selectedGradeDetails.link}>
                    <button className="w-full sm:w-auto text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base shadow-lg hover:opacity-90 transition-all duration-200" style={{ backgroundColor: '#30519d' }}>
                      View Courses 📝
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