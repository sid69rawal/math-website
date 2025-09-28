'use client';

import { motion } from 'framer-motion';
import { Users, Target, Brain, BookOpen, MessageCircle, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';
import CallToActionSection from '@/components/CallToActionSection';

export default function AboutPage() {
  const teachingApproaches = [
    {
      title: "Concept-First Teaching",
      description: "Students learn the why behind mathematical concepts",
      details: [
        "Lessons emphasize reasoning, visualization, and real-world connections",
        "Builds a strong foundation for advanced problem-solving"
      ],
      icon: "🧠",
      customIcon: "/concept.png"
    },
    {
      title: "Personalized Learning Plans",
      description: "Diagnostic assessments identify strengths and areas for growth",
      details: [
        "Customized learning paths aligned with curriculum and goals",
        "Regular progress reviews to adapt and optimize instruction"
      ],
      icon: "🎯",
      customIcon: "/personalized.png"
    },
    {
      title: "Interactive & Engaging Sessions",
      description: "Sessions are hands-on, discussion-based, and tailored to each learner",
      details: [
        "Encourages exploration, critical thinking, and creativity",
        "Available both online and in person with equal impact"
      ],
      icon: "⚡",
      customIcon: "/interactive.jpg"
    },
    {
      title: "Curriculum-Aligned & Exam-Ready",
      description: "Aligned with all grade-level provincial curriculum",
      details: [
        "Focus on strategic thinking, time management, and exam techniques",
        "Includes practice tests, review sessions, and performance tracking"
      ],
      icon: "📋"
    },
    {
      title: "Support Beyond the Session",
      description: "Students can reach out between sessions for quick help or clarification",
      details: [
        "Parents receive regular updates and strategies to support learning at home",
        "We're committed to being a consistent academic partner"
      ],
      icon: "👍",
      customIcon: "/support.png"
    },
    {
      title: "Confidence Building & Growth Mindset",
      description: "Encouragement and mindset coaching woven into every session",
      details: [
        "Celebrate progress, effort, and resilience—not just correct answers",
        "Builds self-esteem and reduces math anxiety over time"
      ],
      icon: "🌟",
      customIcon: "/confidence.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Navigation */}
      <Header />



      {/* Section 1 - Our Mission - Full Screen */}
      <motion.div 
        className="w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="relative bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400 w-full py-16 sm:py-20 lg:py-24 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-cyan-200 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-orange-200 rounded-full blur-2xl opacity-15"></div>
            
            
            {/* Main Content - Two Column Layout */}
            <div className="relative z-10 max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left Side - Mission Content */}
                <div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">
                      Our Mission
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      At <span className="font-semibold" style={{ color: '#30519d' }}>Level Up Math Academy</span>, we believe mathematics is more than numbers—it&apos;s a gateway to logical thinking, creativity, and lifelong confidence. Our mission is to help students excel in mathematics and develop a mindset that embraces challenges, celebrates curiosity, and builds resilience. Whether online or in our Mississauga learning center, we offer personalized, curriculum-aligned tutoring that empowers learners from <span className="font-semibold" style={{ color: '#30519d' }}>Grades 3 to 12</span> to thrive academically and beyond.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We&apos;re not just tutors—we&apos;re mentors, motivators, and lifelong learners who are passionate about teaching, learning, and inspiring the next generation of mathematical thinkers.
                    </p>
                  </motion.div>
                </div>

                {/* Right Side - Criteria Box */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 shadow-lg border border-blue-100 transition-all duration-300 hover:bg-gray-200 hover:from-gray-200 hover:to-gray-200 hover:border-blue-600 hover:shadow-xl hover:scale-105">
                  <h4 className="text-xl font-bold text-gray-900 mb-6">
                    Why Choose Level Up Math Academy?
                  </h4>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start text-gray-700">
                      <span className="w-3 h-3 bg-blue-600 rounded-full mr-4 mt-1 flex-shrink-0" />
                      <span className="text-base">Expert-Led, Not Outsourced</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="w-3 h-3 bg-blue-600 rounded-full mr-4 mt-1 flex-shrink-0" />
                      <span className="text-base">Small Groups, Strong Foundations</span>
                    </li>
                    <li className="flex items-start text-gray-700">
                      <span className="w-3 h-3 bg-blue-600 rounded-full mr-4 mt-1 flex-shrink-0" />
                      <span className="text-base">Affordable Coaching, Guaranteed Improvement</span>
                    </li>
                  </ul>
                  
                  {/* Book a Free Assessment Button */}
                  <div className="text-center">
                    <Link href="/contact">
                      <motion.button
                        className="text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 cursor-pointer hover:opacity-90"
                        style={{ backgroundColor: '#30519d' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Book a Free Assessment
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>

              
              {/* Professional Stats */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.8 }}
              >
                <div className="text-center">
                  <div className="text-lg font-bold mb-2" style={{ color: '#30519d' }}>20+</div>
                  <div className="text-base text-gray-700 font-medium">Years Combined Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold mb-2" style={{ color: '#30519d' }}>100%</div>
                  <div className="text-base text-gray-700 font-medium">Curriculum Aligned</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold mb-2" style={{ color: '#30519d' }}>Grades 3-12</div>
                  <div className="text-base text-gray-700 font-medium">Comprehensive Coverage</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

      {/* Section 2 - Who We Are */}
      <motion.div
        className="bg-white py-16 sm:py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black">
                Who We Are
              </h2>
            </motion.div>
          </div>

          {/* Team Members - Vertical Layout */}
          <div className="space-y-12">
            {/* Jyoti Agarwal - First */}
            <motion.div
              className="relative p-8 sm:p-12 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Profile Picture - Left Side */}
                  <div className="flex-shrink-0">
                  <motion.div
                      className="w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                      <span className="text-white text-9xl">👩‍🏫</span>
                  </motion.div>
                  </div>
                  
                  {/* Content - Right Side */}
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Jyoti Agarwal</h3>
                    <p className="text-lg font-semibold mb-8" style={{ color: '#30519d' }}>Cofounder and Educator</p>
                
                    <div className="space-y-6 text-gray-700">
                  <motion.p
                        className="text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                        With <span className="font-bold" style={{ color: '#30519d' }}>20+ years in the IT industry</span> and a deep-rooted passion for education, Jyoti brings a rich blend of <span className="font-bold" style={{ color: '#30519d' }}>analytical precision and creative instruction</span>. She holds a B.E. in Computer Science from NIT Jamshedpur, India and an M.S. from Georgia State University, USA. Her teaching journey spans <span className="font-bold" style={{ color: '#30519d' }}>India, the USA, and Canada</span>, where she has supported students across all grade levels through both volunteer and professional roles. Jyoti specializes in <span className="font-bold" style={{ color: '#30519d' }}>mental math, algebra, trigonometry, functions, advanced functions, calculus, vectors</span>, and <span className="font-bold" style={{ color: '#30519d' }}>math contest preparation</span> (Waterloo, Math League, SAT, GMAT, GRE).
                  </motion.p>
                  
                  <motion.p
                        className="text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                        Her approach transforms math into a <span className="font-bold" style={{ color: '#30519d' }}>playful, pattern-rich experience</span> that sparks curiosity and builds deep conceptual understanding. She believes that when students see math as a tool for solving real problems, it becomes one of their most empowering subjects.
                  </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Kunal Agarwal - Second */}
            <motion.div
              className="relative p-8 sm:p-12 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                  {/* Profile Picture - Right Side */}
                  <div className="flex-shrink-0">
                  <motion.div
                      className="w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                      <span className="text-white text-9xl">👨‍🏫</span>
                  </motion.div>
                  </div>
                  
                  {/* Content - Left Side */}
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Kunal Agarwal</h3>
                    <p className="text-lg font-semibold mb-6" style={{ color: '#30519d' }}>Cofounder and Educator</p>
                
                    <div className="space-y-6 text-gray-700">
                  <motion.p
                        className="text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                        Kunal brings <span className="font-bold" style={{ color: '#30519d' }}>20+ years of experience in IT and banking</span>, plus a sharp eye for numbers and student growth. He holds a B.E. in Computer Science from BIT Mesra, India and an M.S. in Quantitative Finance from Georgia Institute of Technology, USA. His teaching strengths include <span className="font-bold" style={{ color: '#30519d' }}>Grades 5–12: algebra, geometry, trigonometry, probability, functions, advanced functions, calculus, vectors</span>, and <span className="font-bold" style={{ color: '#30519d' }}>competitive math exams</span>. Kunal&apos;s strength lies in making complex concepts accessible through engaging, personalized instruction that builds confidence and curiosity.
                  </motion.p>
                  
                  <motion.p
                        className="text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                        His goal is to help students see math not as a hurdle, but as a <span className="font-bold" style={{ color: '#30519d' }}>skill they can master and enjoy</span>. With a strategic mindset and a passion for mentorship, he ensures every learner gets the support they need to level up.
                  </motion.p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Section 3 - Our Unique Teaching Approach */}
      <motion.div
        className="bg-gradient-to-br from-slate-100 via-blue-100 to-indigo-100 py-16 sm:py-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <motion.div
                className="mb-6 text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                Our Unique Teaching Approach
              </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  At Level Up Math Academy, we shape sharper thinkers by combining smarter math strategies with clear, structured learning
                </p>
            </motion.div>
          </div>

            {/* Teaching Approach Cards - 2x3 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {teachingApproaches.map((approach, index) => {
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 sm:p-8 shadow-lg border border-gray-200 transition-all duration-300 hover:bg-gray-200 hover:from-gray-200 hover:to-gray-200 hover:border-blue-600 hover:shadow-xl hover:scale-105 group flex flex-col min-h-[400px] sm:min-h-[450px]"
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
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl flex items-center justify-center text-3xl shadow-md">
                      {approach.customIcon ? (
                        <Image
                          src={approach.customIcon}
                          alt={`${approach.title} icon`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      ) : (
                        approach.icon
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                    {approach.title}
                  </h3>
                  
                  {/* Description and Details as Bullet Points */}
                  <div className="space-y-4 flex-grow">
                    {/* Description as first bullet point */}
                    <motion.div
                      className="flex items-start space-x-4 text-sm sm:text-base text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{approach.description}</span>
                    </motion.div>
                    
                    {/* Details as additional bullet points */}
                        {approach.details.map((detail, detailIndex) => (
                          <motion.div
                            key={detailIndex}
                        className="flex items-start space-x-4 text-sm sm:text-base text-gray-600"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 + detailIndex * 0.1 }}
                          >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                </motion.div>
              );
            })}
            </div>
        </div>
      </motion.div>

      {/* Section Separator */}
      <div className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-gray-100"></div>
        </div>
      </div>

      {/* Section 5 - Let's Learn Together */}
      <CallToActionSection />

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
}