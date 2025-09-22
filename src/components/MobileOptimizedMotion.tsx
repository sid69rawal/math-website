'use client';

import { motion, MotionProps } from 'framer-motion';
import { useEffect, useState } from 'react';

interface MobileOptimizedMotionProps extends MotionProps {
  children: React.ReactNode;
  mobileAnimation?: Record<string, unknown>;
  desktopAnimation?: Record<string, unknown>;
  className?: string;
}

export default function MobileOptimizedMotion({
  children,
  mobileAnimation,
  desktopAnimation,
  className,
  ...props
}: MobileOptimizedMotionProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use reduced motion for mobile or if user prefers reduced motion
  const shouldUseReducedMotion = isMobile || (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const animationProps = shouldUseReducedMotion 
    ? { ...mobileAnimation, ...props }
    : { ...desktopAnimation, ...props };

  return (
    <motion.div className={className} {...animationProps}>
      {children}
    </motion.div>
  );
}

// Mobile-friendly animation presets
export const mobileAnimations = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: "easeOut" }
  },
  slideIn: {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const desktopAnimations = {
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, type: "spring", bounce: 0.4 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, type: "spring", bounce: 0.5 }
  },
  slideIn: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, type: "spring", bounce: 0.3 }
  }
};
