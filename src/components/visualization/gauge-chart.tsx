'use client'

import { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface GaugeChartProps {
  value: number
  max?: number
  label: string
  color?: string
  size?: number
}

export function GaugeChart({ 
  value, 
  max = 100, 
  label, 
  color = '#1E40AF',
  size = 200 
}: GaugeChartProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  
  const percentage = (value / max) * 100
  const strokeWidth = size * 0.1
  const radius = (size - strokeWidth) / 2
  const circumference = radius * Math.PI
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  useEffect(() => {
    if (isInView) {
      controls.start({ strokeDashoffset, opacity: 1 })
    }
  }, [isInView, controls, strokeDashoffset])

  return (
    <div ref={ref} className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="transform -rotate-90"
      >
        {/* Background arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference * 0.25}
        />
        
        {/* Value arc */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          initial={{ strokeDashoffset: circumference, opacity: 0 }}
          animate={controls}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ strokeDashoffset: circumference * 0.25 }}
        />
      </svg>
      
      {/* Center text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center"
        >
          <div className="text-3xl font-bold" style={{ color }}>
            {value}{max === 100 ? '%' : ''}
          </div>
          <div className="text-sm text-trust-slate mt-1">{label}</div>
        </motion.div>
      </div>
    </div>
  )
}