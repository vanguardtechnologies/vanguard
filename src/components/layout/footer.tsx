'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/container'
import { Button } from '@/components/ui/button'
import { 
  Twitter, 
  Linkedin, 
  Mail,
  MapPin,
  Phone,
  ArrowRight
} from 'lucide-react'

const footerLinks = {
  solutions: [
    { name: 'Market Entry', href: '/services/market-entry' },
    { name: 'Tender Intelligence', href: '/services/tender-intelligence' },
    { name: 'Bid Management', href: '/services/bid-management' },
    { name: 'Contract Support', href: '/services/contract-support' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'Blog', href: '/blog' },
    { name: 'Market Reports', href: '/resources/reports' },
    { name: 'DGDP Guide', href: '/resources/dgdp-guide' },
    { name: 'FAQ', href: '/faq' },
  ],
}

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Email', href: 'mailto:info@vanguardtech.com', icon: Mail },
]

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#d0d7de]">
      <Container>
        {/* Newsletter Section */}
        <div className="py-16 border-b border-[#d0d7de]">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">
              Stay Ahead in Defense Market Intelligence
            </h3>
            <p className="text-[#57606a] mb-8">
              Get monthly insights on Bangladesh defense opportunities and market trends
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-[#d0d7de] focus:outline-none focus:ring-2 focus:ring-[#1366f1] focus:border-transparent"
              />
              <Button type="submit" className="whitespace-nowrap">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/vanguard-logo-black.png"
                  alt="Vanguard Technology"
                  width={180}
                  height={60}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="text-[#57606a] mb-6 max-w-sm">
                Your premier technology-enabled strategic partner for entering and succeeding in the Bangladesh defense market.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#57606a] mt-0.5" />
                  <span className="text-sm text-[#57606a]">
                    Dhaka, Bangladesh<br />
                    Singapore (Regional HQ)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#57606a]" />
                  <span className="text-sm text-[#57606a]">+880 1234-567890</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#57606a]" />
                  <span className="text-sm text-[#57606a]">info@vanguardtech.com</span>
                </div>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#57606a] hover:text-[#1366f1] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#57606a] hover:text-[#1366f1] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#57606a] hover:text-[#1366f1] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-[#d0d7de]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <p className="text-sm text-[#57606a]">
                © {new Date().getFullYear()} Vanguard Technology. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/privacy"
                  className="text-sm text-[#57606a] hover:text-[#1366f1] transition-colors"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm text-[#57606a] hover:text-[#1366f1] transition-colors"
                >
                  Terms
                </Link>
                <Link
                  href="/security"
                  className="text-sm text-[#57606a] hover:text-[#1366f1] transition-colors"
                >
                  Security
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-[#d0d7de] flex items-center justify-center hover:border-[#1366f1] hover:text-[#1366f1] transition-all hover:shadow-md"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}