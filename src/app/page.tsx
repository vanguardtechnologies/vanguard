import { Hero } from '@/components/sections/hero'
import { Container } from '@/components/layout/container'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { NewsletterForm } from '@/components/forms/newsletter-form'
import Link from 'next/link'

const services = [
  {
    title: 'Strategic Market Entry',
    description: 'Navigate Bangladesh defense procurement with expert guidance and proven strategies.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Tender Intelligence',
    description: 'AI-powered matching and real-time alerts for relevant defense opportunities.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Bid Management',
    description: 'End-to-end support from RFP analysis to proposal submission and negotiations.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Contract Execution',
    description: 'Comprehensive support through delivery, compliance, and payment processes.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
]

const trustSignals = [
  { label: 'Years of Experience', value: '15+' },
  { label: 'Success Rate', value: '90%' },
  { label: 'Active Principals', value: '25+' },
  { label: 'Contract Value', value: '$500M+' },
]

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-gradient-subtle">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-vanguard-navy sm:text-4xl">
              Transform Your Defense Business
            </h2>
            <p className="mt-4 text-lg text-trust-slate">
              Comprehensive solutions for every stage of your Bangladesh market journey
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="group card-elevated hover-lift">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-strategic-blue/10 text-strategic-blue group-hover:bg-strategic-blue group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button size="lg" variant="outline">
                Explore All Services
              </Button>
            </Link>
          </div>
        </Container>
      </section>
      
      {/* Trust Signals Section */}
      <section className="bg-gradient-to-r from-[#0052e0] to-[#003ba6] py-16 sm:py-24 relative overflow-hidden gradient-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/10"></div>
        <Container>
          <div className="relative z-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {trustSignals.map((signal) => (
              <div key={signal.label} className="text-center">
                <div className="text-4xl font-bold text-white text-shadow-md">{signal.value}</div>
                <div className="mt-2 text-sm text-white/90 text-shadow-sm">{signal.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 sm:py-24 section-gradient">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Competition</h2>
              <p className="text-lg text-trust-slate mb-6">
                Get weekly insights on Bangladesh defense opportunities, tender alerts, 
                and market intelligence delivered to your inbox.
              </p>
              <ul className="space-y-2 text-trust-slate">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-secure-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Early tender notifications
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-secure-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Market analysis and trends
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-secure-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Success stories and case studies
                </li>
              </ul>
            </div>
            <div>
              <NewsletterForm source="homepage" />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <Container>
          <Card className="bg-gradient-to-r from-[#0052e0] to-[#0080d4] p-8 text-center text-white border-0">
            <h2 className="text-3xl font-bold text-gradient-title">Ready to Enter Bangladesh Defense Market?</h2>
            <p className="mt-4 text-lg text-white text-shadow-sm">
              Join leading defense manufacturers who trust Vanguard Technology for market success.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/get-started">
                <Button size="lg" variant="secondary">
                  Start Your Assessment
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline-dark">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </Card>
        </Container>
      </section>
    </>
  )
}