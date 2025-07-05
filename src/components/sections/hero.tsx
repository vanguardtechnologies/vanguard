'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'
import { AnimatedCounter } from '@/components/visualization/animated-counter'
import Link from 'next/link'
import { Shield, Target, Zap, Globe } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-[#0a0e27] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff41' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <Container>
        <div className="hero-split-container">
          {/* Left Content */}
          <div className="hero-split-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Military Badge */}
              <div className="flex items-center gap-4 mb-8">
                <div className="military-badge">
                  <Shield className="w-3 h-3" />
                  <span>Defense Grade Security</span>
                </div>
                <div className="military-badge">
                  <Target className="w-3 h-3" />
                  <span>Mission Ready</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                Strategic Entry to
                <motion.span 
                  className="block text-[#00ff41] mt-2 typing-text"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Bangladesh Defense
                </motion.span>
              </h1>

              <div className="tactical-line" />

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Your technology-enabled strategic partner. Navigate complex 
                procurement with military precision, powered by AI intelligence 
                and 15+ years of proven expertise.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-left"
                >
                  <div className="text-3xl font-bold text-[#00ff41]">
                    <AnimatedCounter value={4.5} prefix="$" suffix="B" decimals={1} duration={2} />
                  </div>
                  <p className="text-sm text-gray-400">Market Size</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-left"
                >
                  <div className="text-3xl font-bold text-[#00d4ff]">
                    <AnimatedCounter value={68} suffix="%" duration={2} />
                  </div>
                  <p className="text-sm text-gray-400">Win Rate</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="text-left"
                >
                  <div className="text-3xl font-bold text-[#ff6b35]">
                    <AnimatedCounter value={90} suffix=" Days" duration={2} />
                  </div>
                  <p className="text-sm text-gray-400">To Contract</p>
                </motion.div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/get-started">
                  <Button 
                    size="lg" 
                    className="bg-[#00ff41] hover:bg-[#00ff41]/90 text-black font-bold px-8"
                  >
                    <Zap className="w-4 h-4 mr-2" />
                    Deploy Strategy
                  </Button>
                </Link>
                <Link href="/market-intelligence">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-[#00ff41] text-[#00ff41] hover:bg-[#00ff41]/10"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    View Intel Report
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Globe */}
          <div className="hero-split-right">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="globe-container"
            >
              <div className="globe-3d">
                <div className="globe-sphere" />
                <div className="globe-grid" />
                
                {/* Radar Sweep */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'conic-gradient(from 0deg, transparent 0deg, #00ff41 10deg, transparent 40deg)',
                    }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                {/* Bangladesh Location Marker */}
                <div 
                  className="data-point" 
                  style={{ 
                    top: '35%', 
                    left: '65%',
                    background: '#ff6b35',
                    boxShadow: '0 0 30px #ff6b35, 0 0 60px #ff6b35'
                  }}
                >
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="text-xs text-[#ff6b35] font-bold">DHAKA</span>
                  </div>
                </div>

                {/* Other Strategic Points */}
                <div className="data-point" style={{ top: '25%', left: '45%' }} />
                <div className="data-point" style={{ top: '55%', left: '70%' }} />
                <div className="data-point" style={{ top: '40%', left: '30%' }} />
                <div className="data-point" style={{ top: '60%', left: '50%' }} />

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ transform: 'rotateY(0deg) rotateX(10deg)' }}>
                  <motion.line
                    x1="65%" y1="35%"
                    x2="45%" y2="25%"
                    stroke="#00ff41"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    opacity="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.line
                    x1="65%" y1="35%"
                    x2="70%" y2="55%"
                    stroke="#00ff41"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                    opacity="0.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                  />
                </svg>
              </div>

              {/* Floating Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute bottom-10 right-10 bg-black/80 backdrop-blur-sm border border-[#00d4ff]/30 rounded-lg p-6"
              >
                <div className="flex items-center gap-6">
                  <div>
                    <div className="text-sm text-[#00d4ff] font-bold mb-1">YOY GROWTH</div>
                    <div className="text-3xl font-bold text-white">+15%</div>
                  </div>
                  <div className="w-px h-12 bg-[#00d4ff]/30"></div>
                  <div>
                    <div className="text-sm text-[#00ff41] font-bold mb-1">CONTRACTS</div>
                    <div className="text-3xl font-bold text-white">500+</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>

      {/* Bottom Ticker */}
      <div className="border-t border-[#00ff41]/20 mt-20">
        <div className="py-4 overflow-hidden">
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-8 text-sm text-gray-400"
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00ff41] rounded-full" />
              DGDP APPROVED VENDOR
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00d4ff] rounded-full" />
              ISO 27001 CERTIFIED
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff6b35] rounded-full" />
              500+ CONTRACTS SECURED
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00ff41] rounded-full" />
              24/7 MISSION SUPPORT
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00d4ff] rounded-full" />
              MILITARY GRADE SECURITY
            </span>
            {/* Duplicate for seamless loop */}
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00ff41] rounded-full" />
              DGDP APPROVED VENDOR
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00d4ff] rounded-full" />
              ISO 27001 CERTIFIED
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#ff6b35] rounded-full" />
              500+ CONTRACTS SECURED
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00ff41] rounded-full" />
              24/7 MISSION SUPPORT
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#00d4ff] rounded-full" />
              MILITARY GRADE SECURITY
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}