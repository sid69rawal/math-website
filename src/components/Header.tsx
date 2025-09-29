'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { contactConfig } from '@/config/contact';

/**
 * Ticker
 * - measures container and text widths using useLayoutEffect for first-paint accuracy
 * - uses a pixelsPerSecond speed (so long messages take longer and remain readable)
 * - waits until measurement is ready before starting the animated element
 * - shows a static, readable fallback while measuring
 * - respects prefers-reduced-motion
 */
function Ticker({
  messages = [] as string[],
  pixelsPerSecond = 70, // how many pixels per second the text travels (lower = slower)
  minDuration = 4,      // minimum seconds per message (prevents too-fast for tiny text)
}: {
  messages?: string[];
  pixelsPerSecond?: number;
  minDuration?: number;
}) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLDivElement | null>(null);

  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [textWidth, setTextWidth] = useState<number>(0);
  const [measured, setMeasured] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // detect reduced motion (accessibility)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)');
    setReduceMotion(!!mq?.matches);
    const onChange = () => setReduceMotion(!!mq?.matches);
    mq?.addEventListener?.('change', onChange);
    return () => mq?.removeEventListener?.('change', onChange);
  }, []);

  // measurement helper (call inside layout effect)
  const measure = () => {
    const c = containerRef.current;
    const m = measureRef.current;
    if (!c || !m) return;
    const cw = Math.ceil(c.getBoundingClientRect().width);
    const tw = Math.ceil(m.getBoundingClientRect().width);
    setContainerWidth(cw);
    setTextWidth(tw);
  };

  // useLayoutEffect to measure synchronously after DOM paint (prevents initial-mid-screen issue)
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    // measure once synchronously
    measure();

    // also measure after fonts load (helps prevent layout shifts)
    if (typeof document !== 'undefined' && 'fonts' in document && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        // measure on next animation frame
        requestAnimationFrame(() => {
          measure();
          setMeasured(true);
        });
      });
    } else {
      // no font API, measure and mark measured
      requestAnimationFrame(() => {
        measure();
        setMeasured(true);
      });
    }

    // ResizeObserver for live updates
    let ro: ResizeObserver | null = null;
    try {
      ro = new ResizeObserver(() => {
        measure();
      });
      if (containerRef.current) ro.observe(containerRef.current);
      if (measureRef.current) ro.observe(measureRef.current);
    } catch {
      // fallback to window resize
      const onResize = () => measure();
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }

    return () => {
      ro?.disconnect();
    };
  }, [messages]);

  // ensure index valid if messages length changes
  useEffect(() => {
    if (!messages || messages.length === 0) return;
    if (index >= messages.length) setIndex(0);
  }, [messages, index]);

  if (!messages || messages.length === 0) return null;

  // Accessibility: reduced motion -> static message (announced by aria-live)
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

  // only animate when we have measurements
  const canAnimate = measured && containerWidth > 0 && textWidth > 0;
  // compute duration based on pixelsPerSecond
  const computedDuration = Math.max(minDuration, (containerWidth + textWidth) / Math.max(1, pixelsPerSecond));

  return (
    <div
      className="ticker-container w-full overflow-hidden"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      style={{ minHeight: 32 }}
      ref={containerRef}
    >
      {/* Hidden measure element - kept in DOM to provide accurate measurements */}
      <div
        ref={measureRef}
        aria-hidden="true"
        style={{ position: 'absolute', left: -9999, top: -9999, whiteSpace: 'nowrap', visibility: 'hidden' }}
        className="font-medium text-sm sm:text-base"
      >
        {/* Use the longest message for stable measurement so that animation duration is stable for that message */}
        {messages.reduce((a, b) => (a.length > b.length ? a : b))}
      </div>

      {/* Fallback visible static message while measuring so users see content immediately (centered/truncated) */}
      {!canAnimate && (
        <div className="inline-block whitespace-nowrap font-medium text-sm sm:text-base truncate px-2" style={{ maxWidth: '100%' }}>
          {messages[index]}
        </div>
      )}

      {/* Animated element — only mount when we have accurate measurements */}
      {canAnimate && (
        <motion.div
          key={index}
          initial={{ x: containerWidth }}
          animate={{ x: -textWidth }}
          transition={{ duration: computedDuration, ease: 'linear' }}
          className="inline-block whitespace-nowrap font-medium text-sm sm:text-base leading-tight"
          style={{ display: 'inline-block' }}
          onAnimationComplete={() => {
            // Advance to the next message exactly when animation finishes.
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
              {/* Phone Number: hide label on xs to save space but keep icon */}
              <div className="flex items-center space-x-2 flex-shrink-0 mr-3">
                <a
                  href={`tel:${phone}`}
                  className="flex items-center space-x-1 text-xs sm:text-sm whitespace-nowrap"
                  aria-label={`Phone ${phone}`}
                >
                  <span className="text-sm">📞</span>
                  <span className="hidden sm:inline-block truncate max-w-[160px]">{phone}</span>
                </a>
              </div>

              {/* Messages area - ticker (flex-1 so it takes remaining width) */}
              <div className="flex-1 min-w-0">
                {/* Pass a slightly lower px/sec for small screens (mobile readability) */}
                <Ticker messages={messages} pixelsPerSecond={70} minDuration={4} />
              </div>

              {/* Optional small right spacing (keeps ticker from touching edge on tiny screens) */}
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
                  <Image src="/logo_3.png" alt="Level Up Math Academy Logo" width={90} height={90} className="object-contain" />
                </motion.div>
              </Link>

              {/* Desktop Navigation Menu */}
              <div className="hidden lg:flex items-center space-x-18 ml-36">
                <Link href="/">
                  <motion.a className="text-gray-800 hover:text-blue-600 transition-colors font-semibold cursor-pointer text-lg" whileHover={{ scale: 1.05 }}>
                    Home
                  </motion.a>
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
                  <motion.a className="text-gray-800 hover:text-blue-600 transition-colors font-semibold cursor-pointer text-lg" whileHover={{ scale: 1.05 }}>
                    Our Services
                  </motion.a>
                </Link>
                <Link href="/about">
                  <motion.a className="text-gray-800 hover:text-blue-600 transition-colors font-semibold cursor-pointer text-lg" whileHover={{ scale: 1.05 }}>
                    About Us
                  </motion.a>
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
