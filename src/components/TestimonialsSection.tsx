'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

// Testimonial Carousel Component
function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      text: "Level Up Math Academy completely transformed my daughter's relationship with math! She went from dreading math homework to actually enjoying it. The personalized approach and patient teachers made all the difference. Her grades improved from C+ to A- in just 3 months!",
      author: "Sarah Chen",
      role: "Parent of Grade 8 Student",
      rating: 5
    },
    {
      text: "I was struggling with calculus and thought I'd never understand it. The teachers at Level Up Math Academy broke down complex concepts into simple steps. Their concept-first teaching really works! I'm now confident going into my final exams.",
      author: "Alex Kumar",
      role: "Grade 12 Student", 
      rating: 5
    },
    {
      text: "The flexibility of online and in-person sessions was perfect for our busy schedule. My son loves the small group setting - he gets the attention he needs without feeling overwhelmed. The support beyond class hours is exceptional!",
      author: "Michelle Rodriguez",
      role: "Parent of Grade 10 Student",
      rating: 5
    },
    {
      text: "As a parent, I was amazed by how quickly my child's confidence grew. The teachers don't just teach math; they build self-esteem and problem-solving skills. The investment is worth every penny - highly recommend!",
      author: "David Thompson", 
      role: "Parent of Grade 6 Student",
      rating: 5
    },
    {
      text: "I've tried other tutoring centers, but Level Up Math Academy is different. They actually care about understanding the 'why' behind math, not just memorizing formulas. My algebra skills have improved tremendously!",
      author: "Emma Zhang",
      role: "Grade 9 Student",
      rating: 5
    },
    {
      text: "The curriculum-aligned approach helped my daughter excel in her EQAO tests. The teachers prepared her not just for exams but for real understanding. She's now helping her friends with math - what a turnaround!",
      author: "Robert Singh",
      role: "Parent of Grade 7 Student", 
      rating: 5
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Auto-advance every 8 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* Main Testimonial Card */}
      <motion.div
        className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 min-h-[400px] flex flex-col justify-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
            {/* Star Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic">
              &quot;{testimonials[currentIndex].text}&quot;
            </blockquote>

            {/* Author Info */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-900 font-semibold text-lg mb-1">
                — {testimonials[currentIndex].author}
              </p>
              <p className="text-gray-600 text-sm">
                {testimonials[currentIndex].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Navigation Arrows */}
      <button
        onClick={prevTestimonial}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-all duration-300 group shadow-md hover:scale-105"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform" />
      </button>
      
      <button
        onClick={nextTestimonial}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition-all duration-300 group shadow-md hover:scale-105"
      >
        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:scale-110 transition-transform" />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-8 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 scale-125' 
                : 'bg-gray-300 hover:bg-purple-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            TESTIMONIALS
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            What Parents & Students Say About Us?
          </p>
        </motion.div>

        <TestimonialCarousel />
      </div>
    </section>
  );
}
