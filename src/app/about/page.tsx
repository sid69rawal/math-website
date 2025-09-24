'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Users, Target, Brain, BookOpen, MessageCircle, Star, Award, Lightbulb, Heart, Zap } from 'lucide-react';
import Link from 'next/link';
import FloatingElements from '@/components/FloatingElements';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToActionSection from '@/components/CallToActionSection';

export default function AboutPage() {
  const teachingApproaches = [
    {
      icon: Brain,
      title: "Concept-First Teaching",
      description: "Students learn the why behind mathematical concepts",
      details: [
        "Lessons emphasize reasoning, visualization, and real-world connections",
        "Builds a strong foundation for advanced problem-solving"
      ],
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      icon: Target,
      title: "Personalized Learning Plans",
      description: "Diagnostic assessments identify strengths and areas for growth",
      details: [
        "Customized learning paths aligned with curriculum and goals",
        "Regular progress reviews to adapt and optimize instruction"
      ],
      color: "from-pink-500 to-pink-600",
      bgColor: "from-pink-50 to-pink-100"
    },
    {
      icon: Users,
      title: "Interactive & Engaging Sessions",
      description: "Sessions are hands-on, discussion-based, and tailored to each learner",
      details: [
        "Encourages exploration, critical thinking, and creativity",
        "Available both online and in person with equal impact"
      ],
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100"
    },
    {
      icon: BookOpen,
      title: "Curriculum-Aligned & Exam-Ready",
      description: "Aligned with all grade-level provincial curriculum",
      details: [
        "Focus on strategic thinking, time management, and exam techniques",
        "Includes practice tests, review sessions, and performance tracking"
      ],
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100"
    },
    {
      icon: MessageCircle,
      title: "Support Beyond the Session",
      description: "Students can reach out between sessions for quick help or clarification",
      details: [
        "Parents receive regular updates and strategies to support learning at home",
        "We're committed to being a consistent academic partner"
      ],
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: Star,
      title: "Confidence Building & Growth Mindset",
      description: "Encouragement and mindset coaching woven into every session",
      details: [
        "Celebrate progress, effort, and resilience—not just correct answers",
        "Builds self-esteem and reduces math anxiety over time"
      ],
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
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
            className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer"
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
        elements={['💡', '👥', '🚀', '🧠', '🎯', '⭐', '💪', '🌟', '📚', '🎓']}
        count={15}
        size="lg"
        colors={['text-purple-200', 'text-pink-200', 'text-orange-200', 'text-teal-200']}
      />

      {/* Main Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">

        {/* Section 1 - Our Mission */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border border-blue-100 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-pink-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-15"></div>
            
            {/* Floating Mission Icons */}
            <motion.div
              className="absolute top-8 left-8 text-purple-300 text-3xl"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 8, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              💡
            </motion.div>
            <motion.div
              className="absolute top-16 right-12 text-pink-300 text-2xl"
              animate={{ 
                y: [0, 12, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              🎯
            </motion.div>
            <motion.div
              className="absolute bottom-12 left-12 text-orange-300 text-2xl"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 6, 0]
              }}
              transition={{ 
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            >
              🌟
            </motion.div>
            
            {/* Main Content */}
            <div className="relative z-10 text-center">
              <motion.div
                className="inline-flex items-center space-x-4 mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 bg-clip-text text-transparent">
                  Our Mission
                </h1>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </motion.div>
              
              <motion.div
                className="max-w-5xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                  At <span className="font-semibold text-purple-600">Level Up Math Academy</span>, we believe math is more than numbers—it&apos;s a <span className="font-semibold text-pink-600">gateway to logical thinking, creativity, and lifelong confidence</span>. Our mission is to help students not only <span className="font-semibold text-orange-500">excel in math</span> but also develop a mindset that <span className="font-semibold text-teal-600">embraces challenges, celebrates curiosity, and builds resilience</span>.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed mb-8">
                  Whether online or in our <span className="font-semibold text-purple-600">Mississauga learning center</span>, we offer <span className="font-semibold text-pink-600">personalized, curriculum-aligned tutoring</span> that empowers learners from <span className="font-semibold text-orange-500">Grades 3 to 12</span> to thrive academically and beyond.
                </p>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                  We&apos;re not just tutors—we&apos;re <span className="font-semibold text-purple-600">mentors, motivators, and lifelong learners</span> who love to teach, learn, and inspire.
                </p>
              </motion.div>
              
              {/* Decorative Line */}
              <motion.div
                className="flex justify-center mt-12"
                initial={{ opacity: 0, scaleX: 0 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 rounded-full"></div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Section 2 - Who We Are */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center space-x-4 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 bg-clip-text text-transparent">
                Who We Are
              </h2>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          </div>

          {/* Team Members - Vertical Layout */}
          <div className="space-y-12">
            {/* Jyoti Agarwal - First */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              {/* Background Pattern */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-30"></div>
              <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-orange-100 to-pink-100 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-20"></div>
              
              <div className="relative z-10">
                {/* Header Section */}
                <div className="text-center mb-8">
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-4xl">👩‍🏫</span>
                  </motion.div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Jyoti Agarwal</h3>
                  <p className="text-xl text-purple-600 font-semibold">Cofounder and Educator</p>
                </div>
                
                {/* Content Section */}
                <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
                  <motion.p
                    className="text-lg sm:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    With <span className="font-semibold text-purple-600">20+ years in the IT industry</span> and a deep-rooted passion for education, Jyoti brings a rich blend of <span className="font-semibold text-pink-600">analytical precision and creative instruction</span>.
                  </motion.p>
                  
                  <motion.p
                    className="text-lg sm:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    She holds a <span className="font-semibold text-orange-500">B.E. in Computer Science from NIT Jamshedpur</span> and an <span className="font-semibold text-teal-600">M.S. from Georgia State University</span>.
                  </motion.p>
                  
                  <motion.p
                    className="text-lg sm:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    Her teaching journey spans <span className="font-semibold text-purple-600">India, the USA, and Canada</span>, where she has supported students across all grade levels through both volunteer and professional roles.
                  </motion.p>
                  
                  <motion.p
                    className="text-lg sm:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                  >
                    Jyoti specializes in <span className="font-semibold text-pink-600">mental math, algebra, trigonometry, advanced functions</span>, and <span className="font-semibold text-orange-500">math contest preparation</span> (Waterloo, Math League, SAT, GMAT, GRE).
                  </motion.p>
                  
                  <motion.p
                    className="text-lg sm:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                  >
                    Her approach transforms math into a <span className="font-semibold text-purple-600">playful, pattern-rich experience</span> that sparks curiosity and builds deep conceptual understanding.
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Kunal Agarwal - Second */}
            <motion.div
              className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
            >
              {/* Background Pattern */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-pink-100 to-orange-100 rounded-full opacity-30"></div>
              <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-teal-100 to-blue-100 rounded-full opacity-30"></div>
              <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-20"></div>
              
              <div className="relative z-10">
                {/* Header Section */}
                <div className="text-center mb-8">
                  <motion.div
                    className="w-24 h-24 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-4xl">👨‍🏫</span>
                  </motion.div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Kunal Agarwal</h3>
                  <p className="text-xl text-pink-600 font-semibold">Cofounder and Educator</p>
                </div>
                
                {/* Content Section */}
                <div className="max-w-4xl mx-auto space-y-6 text-gray-700">
                  <motion.p
                    className="text-lg sm:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    Kunal brings <span className="font-semibold text-pink-600">20+ years of experience in IT and banking</span>, plus a sharp eye for numbers and student growth.
                  </motion.p>
                  
                  <motion.p
                    className="text-lg sm:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    He holds a <span className="font-semibold text-orange-500">B.E. in Computer Science from BIT Mesra</span> and an <span className="font-semibold text-teal-600">M.S. in Quantitative Finance from Georgia Tech</span>.
                  </motion.p>
                  
                  <motion.p
                    className="text-lg sm:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                  >
                    His teaching strengths include <span className="font-semibold text-purple-600">Grades 5–12: algebra, geometry, trigonometry, calculus, vectors</span>, and <span className="font-semibold text-pink-600">competitive math exams</span>.
                  </motion.p>
                  
                  <motion.p
                    className="text-lg sm:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.5 }}
                  >
                    Kunal&apos;s strength lies in making <span className="font-semibold text-orange-500">complex concepts accessible</span> through engaging, personalized instruction that builds confidence and curiosity.
                  </motion.p>
                  
                  <motion.p
                    className="text-lg sm:text-xl leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                  >
                    His goal is to help students see math not as a hurdle, but as a <span className="font-semibold text-purple-600">skill they can master and enjoy</span>.
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Section 3 - Our Unique Teaching Approach */}
        <motion.div
          className="mb-16 sm:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-flex items-center space-x-4 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 bg-clip-text text-transparent">
                Our Unique Teaching Approach
              </h2>
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          </div>

          {/* Teaching Approach Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {teachingApproaches.map((approach, index) => {
              const IconComponent = approach.icon;
              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                >
                  {/* Connection Lines */}
                  {index < teachingApproaches.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-300 to-cyan-300 transform -translate-y-1/2 z-0"></div>
                  )}
                  
                  <motion.div
                    className={`relative bg-gradient-to-br ${approach.bgColor} rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden`}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Decorative Elements */}
                    <div className="absolute -top-6 -right-6 w-20 h-20 bg-white rounded-full opacity-20"></div>
                    <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-white rounded-full opacity-15"></div>
                    
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${approach.color} rounded-full flex items-center justify-center mb-4 mx-auto`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </motion.div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {approach.title}
                      </h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {approach.description}
                      </p>
                      
                      {/* Details */}
                      <div className="space-y-2">
                        {approach.details.map((detail, detailIndex) => (
                          <motion.div
                            key={detailIndex}
                            className="flex items-start space-x-2 text-sm text-gray-600"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 + detailIndex * 0.1 }}
                          >
                            <div className={`w-1.5 h-1.5 bg-gradient-to-r ${approach.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="leading-relaxed">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Section 5 - Let's Learn Together */}
      <CallToActionSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}