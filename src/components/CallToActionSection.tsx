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
          fillOpacity="0.25" /* subtle visibility on light background */
          style={{ fontVariantLigatures: 'none' }}
        >
          {/* Safe zone masks to hide symbols behind text */}
          <defs>
            <mask id="textSafeZone">
              <rect width="1600" height="600" fill="white" />
              {/* Much larger text safe zones */}
              <rect x="0" y="0" width="800" height="300" fill="black" />
              <rect x="0" y="400" width="1000" height="200" fill="black" />
            </mask>
          </defs>
          {/* Row - right area */}
          <text x="1120" y="100" fontSize="34">ax² + bx + c = 0</text>
          <text x="1160" y="140" fontSize="18">sin²α + cos²α = 1</text>
          <text x="1200" y="180" fontSize="16">Δy/Δx</text>
          <text x="1240" y="200" fontSize="16">y = mx + b</text>

          {/* Left cluster - masked to avoid text interference */}
          <g mask="url(#textSafeZone)">
            <text x="80" y="120" fontSize="20">∫ f(x) dx</text>
            <text x="90" y="150" fontSize="16">e^(iπ) + 1 = 0</text>
            <text x="60" y="200" fontSize="18">y = x²</text>
            <text x="60" y="240" fontSize="14">45°</text>
          </g>

          {/* center cluster - masked to avoid text interference */}
          <g mask="url(#textSafeZone)">
            <text x="400" y="90" fontSize="18">√(a² + b²)</text>
            <text x="500" y="120" fontSize="14">lim (x→0) sin(x)/x = 1</text>
            <text x="420" y="140" fontSize="16">d/dx [xⁿ] = n xⁿ⁻¹</text>
            <text x="460" y="170" fontSize="16">∑{'{'}{'n=1'}{'}'}{'{'}{'∞'}{'}'} 1/n² = π²/6</text>
          </g>

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

          {/* small functional and vector notations - masked to avoid text interference */}
          <g mask="url(#textSafeZone)">
            <text x="520" y="300" fontSize="14">∇·E = ρ/ε₀</text>
            <text x="560" y="320" fontSize="14">(x₁, y₁)</text>
            <text x="440" y="340" fontSize="14">F₁ ≠ F₂</text>
          </g>

          {/* Additional Elementary Math - masked to avoid text interference */}
          <g mask="url(#textSafeZone)">
            <text x="150" y="300" fontSize="18">2 + 3 = 5</text>
            <text x="250" y="320" fontSize="16">4 × 5 = 20</text>
            <text x="350" y="300" fontSize="14">1/2 + 1/4 = 3/4</text>
            <text x="450" y="320" fontSize="18">10 - 7 = 3</text>
            <text x="550" y="300" fontSize="16">6 ÷ 2 = 3</text>
            <text x="650" y="320" fontSize="14">3² = 9</text>
            <text x="750" y="300" fontSize="18">√16 = 4</text>
            <text x="850" y="320" fontSize="16">2³ = 8</text>
          </g>

          {/* More Geometry */}
          <text x="100" y="450" fontSize="16">A = πr²</text>
          <text x="200" y="470" fontSize="14">C = 2πr</text>
          <text x="300" y="450" fontSize="18">V = l × w × h</text>
          <text x="400" y="470" fontSize="16">P = 2(l + w)</text>
          <text x="500" y="450" fontSize="14">A = (1/2)bh</text>
          <text x="600" y="470" fontSize="18">V = (4/3)πr³</text>
          <text x="700" y="450" fontSize="16">S = 4πr²</text>
          <text x="800" y="470" fontSize="14">∠A + ∠B + ∠C = 180°</text>

          {/* More Algebra */}
          <text x="900" y="450" fontSize="16">x + 5 = 12</text>
          <text x="1000" y="470" fontSize="14">y = 2x + 3</text>
          <text x="1100" y="450" fontSize="18">ax + by = c</text>
          <text x="1200" y="470" fontSize="16">x² - 4 = 0</text>
          <text x="1300" y="450" fontSize="14">(x + 2)(x - 3) = 0</text>
          <text x="1400" y="470" fontSize="18">f(x) = x² + 2x + 1</text>

          {/* More Trigonometry */}
          <text x="100" y="520" fontSize="16">sin(30°) = 1/2</text>
          <text x="250" y="540" fontSize="14">cos(60°) = 1/2</text>
          <text x="400" y="520" fontSize="18">tan(45°) = 1</text>
          <text x="550" y="540" fontSize="16">sin(A + B) = sin A cos B + cos A sin B</text>
          <text x="800" y="520" fontSize="14">cos(A + B) = cos A cos B - sin A sin B</text>
          <text x="1100" y="540" fontSize="18">sin²θ + cos²θ = 1</text>

          {/* More Calculus */}
          <text x="100" y="580" fontSize="16">∫ x dx = x²/2 + C</text>
          <text x="300" y="600" fontSize="14">d/dx [sin(x)] = cos(x)</text>
          <text x="500" y="580" fontSize="18">d/dx [cos(x)] = -sin(x)</text>
          <text x="700" y="600" fontSize="16">∫ sin(x) dx = -cos(x) + C</text>
          <text x="950" y="580" fontSize="14">lim (x→0) (1-cos x)/x² = 1/2</text>
          <text x="1200" y="600" fontSize="18">∫₀^∞ e^(-x²) dx = √π/2</text>

          {/* More Advanced Math Symbols - masked to avoid heading interference */}
          <g mask="url(#textSafeZone)">
            <text x="200" y="50" fontSize="24" fontWeight="700">∂</text>
            <text x="300" y="50" fontSize="22" fontWeight="700">∇</text>
            <text x="400" y="50" fontSize="20" fontWeight="700">∏</text>
            <text x="500" y="50" fontSize="18" fontWeight="700">ℂ</text>
            <text x="600" y="50" fontSize="22" fontWeight="700">ℝ</text>
            <text x="700" y="50" fontSize="20" fontWeight="700">ℤ</text>
            <text x="800" y="50" fontSize="18" fontWeight="700">ℕ</text>
            <text x="900" y="50" fontSize="22" fontWeight="700">ℚ</text>
            <text x="1000" y="50" fontSize="20" fontWeight="700">∈</text>
            <text x="1100" y="50" fontSize="18" fontWeight="700">∉</text>
            <text x="1200" y="50" fontSize="22" fontWeight="700">⊂</text>
            <text x="1300" y="50" fontSize="20" fontWeight="700">⊃</text>
            <text x="1400" y="50" fontSize="18" fontWeight="700">∪</text>
          </g>

          {/* More Basic Math Symbols - masked to avoid text interference */}
          <g mask="url(#textSafeZone)">
            <text x="100" y="150" fontSize="26" fontWeight="700">+</text>
            <text x="200" y="150" fontSize="24" fontWeight="700">-</text>
            <text x="300" y="150" fontSize="22" fontWeight="700">×</text>
            <text x="400" y="150" fontSize="20" fontWeight="700">÷</text>
            <text x="500" y="150" fontSize="18" fontWeight="700">=</text>
            <text x="600" y="150" fontSize="22" fontWeight="700">≠</text>
            <text x="700" y="150" fontSize="20" fontWeight="700">≈</text>
            <text x="800" y="150" fontSize="18" fontWeight="700">±</text>
            <text x="900" y="150" fontSize="24" fontWeight="700">√</text>
            <text x="1000" y="150" fontSize="22" fontWeight="700">π</text>
            <text x="1100" y="150" fontSize="20" fontWeight="700">∞</text>
            <text x="1200" y="150" fontSize="18" fontWeight="700">≤</text>
            <text x="1300" y="150" fontSize="22" fontWeight="700">≥</text>
            <text x="1400" y="150" fontSize="20" fontWeight="700">&lt;</text>
            <text x="1500" y="150" fontSize="18" fontWeight="700">&gt;</text>
          </g>

          {/* More Complex Formulas - masked to avoid text interference */}
          <g mask="url(#textSafeZone)">
            <text x="100" y="250" fontSize="14">log(a) + log(b) = log(ab)</text>
            <text x="350" y="270" fontSize="16">log(a) - log(b) = log(a/b)</text>
            <text x="600" y="250" fontSize="18">a^log_a(x) = x</text>
            <text x="800" y="270" fontSize="14">e^(ln x) = x</text>
            <text x="1000" y="250" fontSize="16">ln(e^x) = x</text>
            <text x="1200" y="270" fontSize="18">∑{'{'}{'k=0'}{'}'}{'{'}{'n'}{'}'} C(n,k) = 2^n</text>
          </g>

          {/* More Physics - masked to avoid button interference */}
          <g mask="url(#textSafeZone)">
            <text x="100" y="350" fontSize="16">E = hf</text>
            <text x="200" y="370" fontSize="14">p = mv</text>
            <text x="300" y="350" fontSize="18">KE = (1/2)mv²</text>
            <text x="500" y="370" fontSize="16">PE = mgh</text>
            <text x="700" y="350" fontSize="14">W = Fd</text>
            <text x="800" y="370" fontSize="18">P = W/t</text>
            <text x="950" y="350" fontSize="16">V = IR</text>
            <text x="1100" y="370" fontSize="14">P = IV</text>
            <text x="1250" y="350" fontSize="18">Q = mcΔT</text>
            <text x="1400" y="370" fontSize="16">PV = nRT</text>
          </g>
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
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
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
            <Image
              src="/level_up1.png"
              alt="Level Up Math Academy"
              width={320}
              height={220}
              className="h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
