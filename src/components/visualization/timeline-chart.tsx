'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { CheckCircle2, Circle } from 'lucide-react'

interface TimelineItem {
  date: string
  title: string
  description: string
  completed?: boolean
}

interface TimelineChartProps {
  items: TimelineItem[]
  title?: string
}

export function TimelineChart({ items, title }: TimelineChartProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <div ref={ref} className="w-full">
      {title && (
        <h3 className="text-xl font-bold mb-6">{title}</h3>
      )}
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative"
      >
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300" />
        
        {/* Timeline items */}
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="relative flex items-start mb-8 last:mb-0"
          >
            {/* Icon */}
            <div className="relative z-10 flex-shrink-0">
              {item.completed ? (
                <CheckCircle2 className="w-8 h-8 text-secure-green bg-white rounded-full" />
              ) : (
                <Circle className="w-8 h-8 text-gray-400 bg-white rounded-full" />
              )}
            </div>
            
            {/* Content */}
            <div className="ml-6 flex-1">
              <div className="flex items-baseline gap-3 mb-1">
                <h4 className="font-semibold">{item.title}</h4>
                <span className="text-sm text-trust-slate">{item.date}</span>
              </div>
              <p className="text-trust-slate">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}