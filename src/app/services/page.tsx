import { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/layout/container'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Target, 
  FileSearch, 
  TrendingUp, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - Vanguard Technology',
  description: 'Comprehensive defense market entry and procurement services for Bangladesh',
}

const services = [
  {
    id: 'market-entry',
    title: 'Market Entry Strategy',
    description: 'Comprehensive planning and execution for entering the Bangladesh defense market',
    icon: Target,
    features: [
      'Market landscape analysis',
      'Regulatory compliance roadmap',
      'Local partnership facilitation',
      'Risk assessment & mitigation',
    ],
    href: '/services/market-entry',
    color: 'text-strategic-blue',
  },
  {
    id: 'tender-intelligence',
    title: 'Tender Intelligence',
    description: 'Real-time monitoring and analysis of defense procurement opportunities',
    icon: FileSearch,
    features: [
      'DGDP tender monitoring',
      'Bid qualification analysis',
      'Competitor intelligence',
      'Win probability assessment',
    ],
    href: '/services/tender-intelligence',
    color: 'text-secure-green',
  },
  {
    id: 'bid-management',
    title: 'Bid Management',
    description: 'End-to-end support for winning defense contracts in Bangladesh',
    icon: TrendingUp,
    features: [
      'Technical proposal writing',
      'Compliance documentation',
      'Pricing strategy optimization',
      'Submission coordination',
    ],
    href: '/services/bid-management',
    color: 'text-sky-accent',
  },
  {
    id: 'contract-execution',
    title: 'Contract Execution',
    description: 'Ensuring successful delivery and relationship management',
    icon: Shield,
    features: [
      'Project management support',
      'Local liaison services',
      'Quality assurance',
      'Payment facilitation',
    ],
    href: '/services/contract-execution',
    color: 'text-alert-amber',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#0052e0] to-[#003ba6] text-white py-24 overflow-hidden gradient-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse-subtle"></div>
        <Container>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-title">
              Comprehensive Defense Market Services
            </h1>
            <p className="text-xl text-gradient-subtitle mb-8">
              From market entry to contract execution, we provide end-to-end support for 
              international defense manufacturers in Bangladesh.
            </p>
            <div className="flex gap-4">
              <Button size="lg" variant="secondary">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline-dark">
                Download Service Guide
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-gradient-subtle">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Service Portfolio</h2>
            <p className="text-xl text-trust-slate max-w-3xl mx-auto">
              Each service is designed to address specific challenges in the Bangladesh 
              defense procurement ecosystem.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.id} className="card-elevated hover-lift">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gray-50 ${service.color}`}>
                        <Icon className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                        <p className="text-trust-slate">{service.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                          <span className="text-trust-slate">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={service.href}>
                      <Button className="w-full group">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Process Overview */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-xl text-trust-slate max-w-3xl mx-auto">
              A systematic approach that delivers results
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understanding your capabilities and objectives',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Developing a tailored market entry plan',
              },
              {
                step: '03',
                title: 'Execution',
                description: 'Implementing with precision and agility',
              },
              {
                step: '04',
                title: 'Success',
                description: 'Achieving sustainable market presence',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-strategic-blue mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-trust-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-cta text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-cta-title">
              Ready to Enter the Bangladesh Defense Market?
            </h2>
            <p className="text-xl mb-8 text-cta-body">
              Let's discuss how our services can accelerate your success in one of 
              Asia's most promising defense markets.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Schedule Strategy Call
              </Button>
              <Button size="lg" variant="outline-dark">
                Request Service Details
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}