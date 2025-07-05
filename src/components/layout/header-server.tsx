import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/layout/container'
import { HeaderAuth } from '@/components/layout/header-auth'
import { MobileMenu } from '@/components/layout/mobile-menu'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Market Intelligence', href: '/market-intelligence' },
  { name: 'Services', href: '/services' },
  { name: 'Success Framework', href: '/success' },
  { name: 'Resources', href: '/resources' },
]

export function Header() {
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
          
          <MobileMenu navigation={navigation} />
          
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
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <HeaderAuth />
          </div>
        </nav>
      </Container>
    </header>
  )
}