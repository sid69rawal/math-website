'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function CallToActionSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-r from-blue-100 via-blue-200 to-blue-400">
      {/* Inline SVG chalk overlay: no big black marks, more formulas, slightly darker */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
        viewBox="0 0 1600 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        style={{ display: 'block' }}
      >
        <defs>
          {/* very subtle roughness for chalky stroke */}
          <filter id="chalkGrain" x="-30%" y="-30%" width="160%" height="160%">
            <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="1" stitchTiles="stitch" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
            <feGaussianBlur stdDeviation="0.5" />
          </filter>

          <filter id="softBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="1.4" />
          </filter>
        </defs>


        {/* formulas and symbols group - dark text on light background */}
        <g
          fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, monospace"
          fill="#0a3b5a"
          fillOpacity="0.4" /* subtle visibility on light background */
          style={{ fontVariantLigatures: 'none' }}
        >
          {/* Row - right area */}
          <text x="1120" y="100" fontSize="34">ax² + bx + c = 0</text>
          <text x="1160" y="140" fontSize="18">sin²α + cos²α = 1</text>
          <text x="1200" y="180" fontSize="16">Δy/Δx</text>
          <text x="1240" y="200" fontSize="16">y = mx + b</text>

          {/* Left cluster */}
          <text x="80" y="120" fontSize="20">∫ f(x) dx</text>
          <text x="90" y="150" fontSize="16">e^(iπ) + 1 = 0</text>
          <text x="60" y="200" fontSize="18">y = x²</text>
          <text x="60" y="240" fontSize="14">45°</text>

          {/* center cluster */}
          <text x="400" y="90" fontSize="18">√(a² + b²)</text>
          <text x="500" y="120" fontSize="14">lim (x→0) sin(x)/x = 1</text>
          <text x="420" y="140" fontSize="16">d/dx [xⁿ] = n xⁿ⁻¹</text>
          <text x="460" y="170" fontSize="16">∑{'{'}{'n=1'}{'}'}{'{'}{'∞'}{'}'} 1/n² = π²/6</text>

          {/* lower-left */}
          <text x="200" y="380" fontSize="16">A ∪ B</text>
          <text x="260" y="400" fontSize="16">A ∩ B</text>
          <text x="180" y="430" fontSize="14">110 010 001</text>

          {/* lower-right cluster */}
          <text x="1140" y="380" fontSize="16">sin(θ)</text>
          <text x="1180" y="404" fontSize="16">cos(θ)</text>
          <text x="1220" y="428" fontSize="16">tan(θ)</text>

          {/* a few extra math symbols spaced around */}
          <text x="940" y="360" fontSize="28" fontWeight="700">∑</text>
          <text x="990" y="360" fontSize="26" fontWeight="700">π</text>
          <text x="1040" y="360" fontSize="24" fontWeight="700">∞</text>
          <text x="350" y="48" fontSize="22">π</text>
          <text x="420" y="64" fontSize="20">√</text>
          <text x="540" y="34" fontSize="22">±</text>
          <text x="820" y="44" fontSize="22">≈</text>
          <text x="1400" y="72" fontSize="22">≠</text>

          {/* physics/chemistry */}
          <text x="620" y="500" fontSize="16">E = mc²</text>
          <text x="700" y="520" fontSize="14">F = ma</text>
          <text x="780" y="500" fontSize="14">C₆H₆</text>

          {/* small functional and vector notations */}
          <text x="520" y="300" fontSize="14">∇·E = ρ/ε₀</text>
          <text x="560" y="320" fontSize="14">(x₁, y₁)</text>
          <text x="440" y="340" fontSize="14">F₁ ≠ F₂</text>
        </g>

        {/* delicate small chalk accents */}
        <g stroke="#0b4a76" strokeOpacity="0.2" strokeWidth="1.0" strokeLinecap="round" fill="none">
          <path d="M420 200 q28 -20 56 -8" />
          <path d="M980 80 q20 14 40 8" />
        </g>
      </svg>

      {/* content (heading + CTA) */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Text and CTA */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Let&apos;s{' '}
              <span style={{ color: '#30519d' }}>
                LEVEL UP
              </span>{' '}
              Together!
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-800 font-medium leading-relaxed mb-6 sm:mb-8 md:mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Schedule a free assessment and explore Level Up Math Academy&apos;s unique approach, curriculum, pricing and flexible class options.
            </motion.p>

            <motion.div
              className="flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link href="/contact">
                <motion.div
                  className="inline-flex items-center justify-center px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 cursor-pointer text-center hover:opacity-90 text-lg"
                  style={{ backgroundColor: '#30519d' }}
                  whileHover={{
                    scale: 1.05,
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a Free Assessment
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            className="flex justify-center lg:justify-end relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Subtle overlay to blend with background */}
            <div className="absolute inset-0 bg-gradient-to-l from-blue-200/20 to-transparent rounded-lg pointer-events-none z-10"></div>
            
            <Image
              src="/level_up.png"
              alt="Level Up Math Academy"
              width={400}
              height={320}
              className="max-w-full h-auto max-h-72 lg:max-h-80 object-contain relative z-0"
              style={{
                filter: 'brightness(1.1) contrast(0.9) saturate(0.8)',
                mixBlendMode: 'multiply'
              }}
            />
            
            {/* Additional subtle shadow for depth */}
            <div className="absolute inset-0 bg-blue-300/10 rounded-lg blur-sm -z-10 scale-105"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
