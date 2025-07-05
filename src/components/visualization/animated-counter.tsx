'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

interface AnimatedCounterProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  decimals?: number
  className?: string
  onComplete?: () => void
}

export function AnimatedCounter({
  value,
  duration = 3,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
  onComplete,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  })

  const display = useTransform(spring, (current) =>
    `${prefix}${new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(current)}${suffix}`
  )

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value)
      setHasAnimated(true)
      if (onComplete) {
        setTimeout(onComplete, duration * 1000)
      }
    }
  }, [isInView, value, spring, duration, hasAnimated, onComplete])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <motion.span>{display}</motion.span>
    </motion.span>
  )
}