'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { contactConfig } from '@/config/contact';

/**
 * Ticker
 * - measures container and current-message widths using useLayoutEffect
 * - computes duration per message: duration = clamp((container + msg)/pxPerSec, minDuration, maxDuration)
 * - waits until measurement ready before animating (prevents mid-screen start)
 * - fallback static message while measuring
 * - respects prefers-reduced-motion
 */
function Ticker({
  messages = [] as string[],
  pixelsPerSecond = 70, // px/sec visual speed
  minDuration = 3,      // seconds minimum for any message
  maxDuration = 8,      // seconds maximum for any message (prevents very-long delays)
}: {
  messages?: string[];
  pixelsPerSecond?: number;
  minDuration?: number;
  maxDuration?: number;
}) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const currentMeasureRef = useRef<HTMLDivElement | null>(null);

  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [currentTextWidth, setCurrentTextWidth] = useState<number>(0);
  const [measured, setMeasured] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // reduced motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    setReduceMotion(!!mq?.matches);
    const onChange = () => setReduceMotion(!!mq?.matches);
    mq?.addEventListener?.('change', onChange);
    return () => mq?.removeEventListener?.('change', onChange);
  }, []);

  const measure = () => {
    const c = containerRef.current;
    const m = currentMeasureRef.current;
    if (!c || !m) return;
    const cw = Math.ceil(c.getBoundingClientRect().width);
    const tw = Math.ceil(m.getBoundingClientRect().width);
    setContainerWidth(cw);
    setCurrentTextWidth(tw);
  };

  // measure after paint and whenever index/messages change
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    // synchronous-ish measure
    measure();

    // try to wait until fonts ready to reduce layout-shift
    if (typeof document !== 'undefined' && 'fonts' in document && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        requestAnimationFrame(() => {
          measure();
          setMeasured(true);
        });
      });
    } else {
      requestAnimationFrame(() => {
        measure();
        setMeasured(true);
      });
    }

    // ResizeObserver to keep measurements current
    let ro: ResizeObserver | null = null;
    try {
      ro = new ResizeObserver(() => {
        measure();
      });
      if (containerRef.current) ro.observe(containerRef.current);
      if (currentMeasureRef.current) ro.observe(currentMeasureRef.current);
    } catch {
      const onResize = () => measure();
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }

    return () => ro?.disconnect();
    // re-run when current message changes so we measure it
  }, [index, messages]);

  // keep index valid if messages change
  useEffect(() => {
    if (!messages || messages.length === 0) return;
    if (index >= messages.length) setIndex(0);
  }, [messages, index]);

  if (!messages || messages.length === 0) return null;

  if (reduceMotion) {
    return (
      <div
        className="ticker-container w-full overflow-hidden"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        style={{ minHeight: 28 }}
        ref={containerRef}
      >
        <div className="inline-block whitespace-nowrap font-medium text-sm sm:text-base leading-tight">
          <span className="px-2">{messages[index]}</span>
        </div>
      </div>
    );
  }

  // can animate only after we've measured both container and current text
  const canAnimate = measured && containerWidth > 0 && currentTextWidth > 0;

  // compute duration for THIS message (clamped)
  const rawDuration = (containerWidth + currentTextWidth) / Math.max(1, pixelsPerSecond);
  const computedDuration = Math.max(minDuration, Math.min(maxDuration, rawDuration));

  return (
    <div
      className="ticker-container w-full overflow-hidden"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{ minHeight: 32 }}
      ref={containerRef}
    >
      {/* Hidden element that contains the current message (used for accurate measurement) */}
      <div
        ref={currentMeasureRef}
        aria-hidden="true"
        style={{ position: 'absolute', left: -9999, top: -9999, whiteSpace: 'nowrap', visibility: 'hidden' }}
        className="font-medium text-sm sm:text-base"
      >
        {messages[index]}
      </div>

      {/* Fallback static message while measuring */}
      {!canAnimate && (
        <div className="inline-block whitespace-nowrap font-medium text-sm sm:text-base truncate px-2" style={{ maxWidth: '100%' }}>
          {messages[index]}
        </div>
      )}

      {/* Animated message (only mounts when measurement ready) */}
      {canAnimate && (
        <motion.div
          key={index}
          initial={{ x: containerWidth }}
          animate={{ x: -currentTextWidth }}
          transition={{ duration: computedDuration, ease: 'linear' }}
          className="inline-block whitespace-nowrap font-medium text-sm sm:text-base leading-tight"
          style={{ display: 'inline-block' }}
          onAnimationComplete={() => {
            setIndex((i) => (i + 1) % messages.length);
          }}
        >
          <span className="px-2">{messages[index]}</span>
        </motion.div>
      )}
    </div>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  const messages = [
    'First Month Money-Back Guarantee',
    'Algebra, Geometry, Trigonometry, Functions, Advanced Functions, Calculus & Vectors, Math Competitions etc.',
  ];

  // safe fallbacks if contactConfig is undefined/missing values
  const phone = contactConfig?.phone ?? '+91-0000000000';
  const facebook = contactConfig?.socialMedia?.facebook ?? '#';
  const instagram = contactConfig?.socialMedia?.instagram ?? '#';

  return (
    <>
      {/* Combined Header with Ribbon */}
      <div className="sticky top-0 z-50">
        {/* Ribbon */}
        <div className="text-white py-2 sm:py-3" style={{ backgroundColor: '#30519d' }}>
          <div className="max-w-7xl mx-auto px-3 sm:px-4">
            <div className="flex flex-row items-center gap-3 text-base sm:text-lg">
              {/* Phone Number: visible on mobile, truncated to prevent overflow */}
              <div className="flex items-center space-x-2 flex-shrink-0 mr-3">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center space-x-1 text-xs sm:text-sm whitespace-nowrap"
                  aria-label={`Phone ${phone}`}
                >
                  <span className="text-sm">📞</span>
                  {/* show small truncated number on xs; full (more space) on sm+ */}
                  <span className="inline-block truncate max-w-[90px] sm:max-w-[160px] text-xs sm:text-sm">{phone}</span>
                </a>
              </div>

              {/* Messages area - ticker (flex-1 so it takes remaining width) */}
              <div className="flex-1 min-w-0">
                {/* Use slightly faster px/sec on very small screens for snappier transitions */}
                <Ticker
                  messages={messages}
                  pixelsPerSecond={70} // you can increase to 90 for faster motion
                  minDuration={2.5}
                  maxDuration={8}
                />
              </div>

              {/* Right spacer for small screens so text doesn't butt up against edge */}
              <div className="hidden sm:block w-3" aria-hidden="true" />
            </div>
          </div>
        </div>
        {/* end ribbon */}

        {/* Main Navigation */}
        <motion.nav
          className="bg-white shadow-sm"
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6"
            animate={{
              paddingTop: '0.125rem',
              paddingBottom: '0.125rem',
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/">
                <motion.div className="flex items-center" whileHover={{ scale: 1.02 }}>
                  <Image 
                    src="/logo_3.png" 
                    alt="Level Up Math Academy Logo" 
                    width={90} 
                    height={90} 
                    className="object-contain" 
                    priority
                    style={{ width: "auto", height: "auto" }}
                  />
                </motion.div>
              </Link>

              {/* Desktop Navigation Menu */}
              <div className="hidden lg:flex items-center space-x-18 ml-36">
                <Link href="/">
                  <motion.span className="text-gray-800 hover:text-blue-600 transition-colors font-semibold cursor-pointer text-lg" whileHover={{ scale: 1.05 }}>
                    Home
                  </motion.span>
                </Link>

                {/* Courses Dropdown */}
                <div className="relative" onMouseEnter={() => setCoursesDropdownOpen(true)} onMouseLeave={() => setCoursesDropdownOpen(false)}>
                  <motion.div className="flex items-center space-x-1 text-gray-800 hover:text-blue-600 transition-colors font-semibold cursor-pointer text-lg" whileHover={{ scale: 1.05 }}>
                    <span>Courses</span>
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>

                  {/* Dropdown Menu */}
                  <motion.div
                    className="absolute top-full left-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{
                      opacity: coursesDropdownOpen ? 1 : 0,
                      y: coursesDropdownOpen ? 0 : -10,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ pointerEvents: coursesDropdownOpen ? 'auto' : 'none' }}
                  >
                    <Link href="/courses/grades-3-5">
                      <motion.div className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer text-lg" whileHover={{ x: 5 }}>
                        Grades 3-5
                      </motion.div>
                    </Link>
                    <Link href="/courses/grades-6-8">
                      <motion.div className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer text-lg" whileHover={{ x: 5 }}>
                        Grades 6-8
                      </motion.div>
                    </Link>
                    <Link href="/courses/grades-9-12">
                      <motion.div className="px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors cursor-pointer text-lg" whileHover={{ x: 5 }}>
                        Grades 9-12
                      </motion.div>
                    </Link>
                  </motion.div>
                </div>

                <Link href="/services">
                  <motion.span className="text-gray-800 hover:text-blue-600 transition-colors font-semibold cursor-pointer text-lg" whileHover={{ scale: 1.05 }}>
                    Our Services
                  </motion.span>
                </Link>
                <Link href="/about">
                  <motion.span className="text-gray-800 hover:text-blue-600 transition-colors font-semibold cursor-pointer text-lg" whileHover={{ scale: 1.05 }}>
                    About Us
                  </motion.span>
                </Link>

                {/* Social Media Icons */}
                <div className="flex items-center space-x-3 ml-4">
                  <motion.a href={facebook} target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#1877F2' }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a href={instagram} target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: '#E4405F' }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                </div>

                <Link href="/contact">
                  <motion.button className="text-white px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 cursor-pointer hover:opacity-90" style={{ backgroundColor: '#30519d' }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    Contact Us
                  </motion.button>
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <motion.button className="lg:hidden text-gray-700 p-2" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>

            {/* Mobile Navigation Menu */}
            <motion.div className="lg:hidden overflow-hidden" initial={{ opacity: 0, height: 0 }} animate={{ opacity: mobileMenuOpen ? 1 : 0, height: mobileMenuOpen ? 'auto' : 0 }} transition={{ duration: 0.3 }}>
              <div className="mt-4 bg-gray-50 rounded-lg p-4 space-y-3">
                <Link href="/">
                  <motion.div className="block text-gray-800 hover:text-blue-600 transition-colors font-semibold py-2 cursor-pointer" onClick={() => setMobileMenuOpen(false)} whileHover={{ x: 5 }}>
                    Home
                  </motion.div>
                </Link>

                {/* Mobile Courses Dropdown */}
                <div>
                  <motion.div className="flex items-center justify-between text-gray-800 hover:text-blue-600 transition-colors font-semibold py-2 cursor-pointer" onClick={() => setCoursesDropdownOpen(!coursesDropdownOpen)} whileHover={{ x: 5 }}>
                    <span>Courses</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${coursesDropdownOpen ? 'rotate-180' : ''}`} />
                  </motion.div>

                  {/* Mobile Dropdown Menu */}
                  <motion.div className="overflow-hidden" initial={{ opacity: 0, height: 0 }} animate={{ opacity: coursesDropdownOpen ? 1 : 0, height: coursesDropdownOpen ? 'auto' : 0 }} transition={{ duration: 0.3 }}>
                    <div className="pl-4 space-y-2 mt-2">
                      <Link href="/courses/grades-3-5">
                        <motion.div
                          className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 cursor-pointer"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setCoursesDropdownOpen(false);
                          }}
                          whileHover={{ x: 5 }}
                        >
                          Grades 3-5
                        </motion.div>
                      </Link>
                      <Link href="/courses/grades-6-8">
                        <motion.div
                          className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 cursor-pointer"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setCoursesDropdownOpen(false);
                          }}
                          whileHover={{ x: 5 }}
                        >
                          Grades 6-8
                        </motion.div>
                      </Link>
                      <Link href="/courses/grades-9-12">
                        <motion.div
                          className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2 cursor-pointer"
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setCoursesDropdownOpen(false);
                          }}
                          whileHover={{ x: 5 }}
                        >
                          Grades 9-12
                        </motion.div>
                      </Link>
                    </div>
                  </motion.div>
                </div>
                <Link href="/services">
                  <motion.div className="block text-gray-800 hover:text-blue-600 transition-colors font-semibold py-2 cursor-pointer" onClick={() => setMobileMenuOpen(false)} whileHover={{ x: 5 }}>
                    Our Services
                  </motion.div>
                </Link>
                <Link href="/about">
                  <motion.div className="block text-gray-800 hover:text-blue-600 transition-colors font-semibold py-2 cursor-pointer" onClick={() => setMobileMenuOpen(false)} whileHover={{ x: 5 }}>
                    About Us
                  </motion.div>
                </Link>

                <div className="flex space-x-4 pt-2 pb-2">
                  <motion.a href={facebook} target="_blank" rel="noopener noreferrer" className="" style={{ color: '#1877F2' }} whileHover={{ scale: 1.2 }}>
                    <Facebook className="w-5 h-5" />
                  </motion.a>
                  <motion.a href={instagram} target="_blank" rel="noopener noreferrer" className="" style={{ color: '#E4405F' }} whileHover={{ scale: 1.2 }}>
                    <Instagram className="w-5 h-5" />
                  </motion.a>
                </div>

                <Link href="/contact">
                  <motion.button className="w-full text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer hover:opacity-90" style={{ backgroundColor: '#30519d' }} onClick={() => setMobileMenuOpen(false)} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    Contact Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.nav>
      </div>

      <style jsx>{`
        /* keep ticker accessible for reduced-motion users */
        @media (prefers-reduced-motion: reduce) {
          .ticker-container > * {
            transition: none !important;
            transform: none !important;
            opacity: 1 !important;
          }
        }

        /* Small visual polish: ensure ticker text doesn't wrap and remains legible */
        .ticker-container span {
          display: inline-block;
          padding-left: 6px;
          padding-right: 6px;
        }
      `}</style>
    </>
  );
}
