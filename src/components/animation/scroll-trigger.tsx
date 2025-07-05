'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface ScrollAnimationProps {
  children: React.ReactNode
  animation?: 'fade-up' | 'fade-in' | 'scale' | 'slide-left' | 'slide-right'
  duration?: number
  delay?: number
  stagger?: number
  className?: string
}

export function ScrollAnimation({
  children,
  animation = 'fade-up',
  duration = 1,
  delay = 0,
  stagger = 0.1,
  className = '',
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // Set initial states based on animation type
    const animations: Record<string, gsap.TweenVars> = {
      'fade-up': {
        y: 60,
        opacity: 0,
      },
      'fade-in': {
        opacity: 0,
      },
      'scale': {
        scale: 0.8,
        opacity: 0,
      },
      'slide-left': {
        x: 100,
        opacity: 0,
      },
      'slide-right': {
        x: -100,
        opacity: 0,
      },
    }

    // Apply initial state
    gsap.set(element.children, animations[animation])

    // Create scroll trigger animation
    gsap.to(element.children, {
      y: 0,
      x: 0,
      scale: 1,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
      },
    })

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [animation, duration, delay, stagger])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

// Parallax component for background elements
interface ParallaxElementProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export function ParallaxElement({
  children,
  speed = 0.5,
  className = '',
}: ParallaxElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    gsap.to(element, {
      yPercent: -100 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [speed])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

// Magnetic hover effect
interface MagneticHoverProps {
  children: React.ReactNode
  strength?: number
  className?: string
}

export function MagneticHover({
  children,
  strength = 0.5,
  className = '',
}: MagneticHoverProps) {
  const magnetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = magnetRef.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [strength])

  return (
    <div ref={magnetRef} className={`inline-block ${className}`}>
      {children}
    </div>
  )
}