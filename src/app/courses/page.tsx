'use client';

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

export default function CoursesPage() {
  const courses = [
    {
      title: "Elementary Math (Grades 3-6)",
      description: "Building strong foundations in basic arithmetic, fractions, decimals, and problem-solving skills.",
      topics: ["Addition & Subtraction", "Multiplication & Division", "Fractions & Decimals", "Geometry Basics", "Word Problems"],
      grade: "Grades 3-6",
      duration: "2 hours/week",
      price: "$200+HST/month"
    },
    {
      title: "Middle School Math (Grades 7-8)",
      description: "Advanced arithmetic, algebra introduction, and preparation for high school mathematics.",
      topics: ["Pre-Algebra", "Linear Equations", "Geometry", "Statistics", "Probability"],
      grade: "Grades 7-8", 
      duration: "2 hours/week",
      price: "$200+HST/month"
    },
    {
      title: "High School Math (Grades 9-12)",
      description: "Comprehensive coverage of algebra, geometry, trigonometry, and advanced functions.",
      topics: ["Algebra I & II", "Geometry", "Trigonometry", "Functions", "Advanced Functions"],
      grade: "Grades 9-12",
      duration: "2 hours/week", 
      price: "$200+HST/month"
    },
    {
      title: "Calculus & Vectors (Grade 12)",
      description: "Advanced calculus concepts, vectors, and preparation for university-level mathematics.",
      topics: ["Limits & Continuity", "Derivatives", "Integrals", "Vectors", "Applications"],
      grade: "Grade 12",
      duration: "2 hours/week",
      price: "$200+HST/month"
    },
    {
      title: "Math Competitions",
      description: "Specialized training for math competitions and contests at various levels.",
      topics: ["Problem Solving", "Competition Strategies", "Advanced Topics", "Speed & Accuracy", "Mock Tests"],
      grade: "All Grades",
      duration: "2 hours/week",
      price: "$200+HST/month"
    },
    {
      title: "EQAO Test Preparation",
      description: "Focused preparation for Ontario's Education Quality and Accountability Office tests.",
      topics: ["Test Strategies", "Practice Tests", "Time Management", "Common Mistakes", "Review Sessions"],
      grade: "Grades 3, 6, 9",
      duration: "2 hours/week",
      price: "$200+HST/month"
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

      {/* Main Courses Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent mb-6">
            Our Courses 📚
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive math education programs designed to help students excel at every level, from elementary to advanced calculus.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.5
              }}
              whileHover={{ 
                y: -3,
                transition: { duration: 0.2 }
              }}
            >
              {/* Course Header */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  📚
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>

              {/* Course Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">Grade Level:</span>
                  <span className="text-sm font-semibold text-purple-600">{course.grade}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">Duration:</span>
                  <span className="text-sm font-semibold text-pink-600">{course.duration}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-500">Price:</span>
                  <span className="text-sm font-semibold text-orange-500">{course.price}</span>
                </div>
              </div>

              {/* Topics Covered */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">Topics Covered:</h4>
                <ul className="space-y-2">
                  {course.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start text-gray-600">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3 mt-2 flex-shrink-0" />
                      <span className="text-sm">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Bottom Decoration */}
              <div className="mt-6 h-1 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Start Learning? 🚀
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose the course that's right for your child and begin their journey to math mastery today!
            </p>
            <Link href="/contact">
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Enroll Now! 📝
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
