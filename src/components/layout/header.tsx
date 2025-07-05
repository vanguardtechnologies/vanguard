'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/layout/container'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Market Intelligence', href: '/market-intelligence' },
  { name: 'Services', href: '/services' },
  { name: 'Success Framework', href: '/success' },
  { name: 'Resources', href: '/resources' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full glass-subtle border-b border-white/20 shadow-lg">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
              <Image
                src="/vanguard-logo-black.png"
                alt="Vanguard Technology"
                width={200}
                height={70}
                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <span className="text-xl font-semibold text-vanguard-navy tracking-tight hidden sm:block">
                VANGUARD TECHNOLOGY
              </span>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-trust-slate"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-[#24292f] hover:text-[#1366f1] transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#1366f1] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            <Button variant="glass" size="sm" className="mr-2">
              Partner Portal
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden"
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-trust-slate hover:bg-muted hover:text-strategic-blue"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2">
              <Button variant="outline" size="sm" className="w-full">
                Partner Portal
              </Button>
              <Button size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  )
}