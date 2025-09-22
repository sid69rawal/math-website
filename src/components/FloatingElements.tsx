'use client';

import { motion } from 'framer-motion';

interface FloatingElementsProps {
  elements?: string[];
  count?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  colors?: string[];
}

export default function FloatingElements({ 
  elements = ['✨', '🎯', '📚', '🚀', '⭐', '💡', '🎉', '🌟'],
  count = 6,
  className = '',
  size = 'md',
  colors = ['text-purple-300', 'text-pink-300', 'text-orange-300', 'text-teal-300']
}: FloatingElementsProps) {
  
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-3xl'
  };

  const generateRandomPosition = () => ({
    top: `${Math.random() * 80 + 10}%`,
    left: `${Math.random() * 80 + 10}%`,
  });

  const generateAnimation = () => ({
    y: [0, -20 - Math.random() * 20, 0],
    x: [0, (Math.random() - 0.5) * 30, 0],
    rotate: [0, (Math.random() - 0.5) * 60, 0],
    scale: [1, 1.1 + Math.random() * 0.2, 1],
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => {
        const position = generateRandomPosition();
        const element = elements[i % elements.length];
        const color = colors[i % colors.length];
        
        return (
          <motion.div
            key={i}
            className={`absolute ${sizeClasses[size]} ${color} font-bold opacity-20`}
            style={position}
            animate={generateAnimation()}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          >
            {element}
          </motion.div>
        );
      })}
    </div>
  );
}
