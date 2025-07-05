import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Target, 
  Map, 
  Users, 
  Shield,
  CheckCircle2,
  BarChart3,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Market Entry Strategy - Vanguard Technology',
  description: 'Comprehensive market entry services for defense manufacturers entering Bangladesh',
}

const features = [
  {
    icon: Map,
    title: 'Market Landscape Analysis',
    description: 'Deep dive into Bangladesh defense procurement ecosystem, key players, and opportunities.',
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Navigate DGDP requirements, import regulations, and defense procurement policies.',
  },
  {
    icon: Users,
    title: 'Partnership Development',
    description: 'Connect with vetted local partners, agents, and technology transfer opportunities.',
  },
  {
    icon: BarChart3,
    title: 'Risk Assessment',
    description: 'Identify and mitigate market entry risks with data-driven strategies.',
  },
]

const process = [
  {
    phase: 'Discovery',
    duration: '2-3 weeks',
    activities: [
      'Capability assessment',
      'Market fit analysis',
      'Competition mapping',
      'Opportunity identification',
    ],
  },
  {
    phase: 'Strategy Development',
    duration: '3-4 weeks',
    activities: [
      'Entry mode selection',
      'Partner identification',
      'Regulatory roadmap',
      'Financial planning',
    ],
  },
  {
    phase: 'Implementation',
    duration: '8-12 weeks',
    activities: [
      'Partnership facilitation',
      'Registration support',
      'Market activation',
      'Performance tracking',
    ],
  },
]

export default function MarketEntryPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0052e0] to-[#0f172a] text-white py-24 gradient-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
        <Container>
          <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-6 h-6 text-white/90" />
                <span className="text-sm font-medium uppercase tracking-wider text-gradient-safe">
                  Market Entry Strategy
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-title">
                Your Gateway to Bangladesh Defense Market
              </h1>
              <p className="text-xl text-gradient-subtitle mb-8">
                Navigate the complexities of market entry with confidence. Our proven 
                strategies have helped 25+ international manufacturers establish successful 
                operations in Bangladesh.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary">
                  Get Market Assessment
                </Button>
                <Button 
                  size="lg" 
                  variant="outline-dark"
                >
                  Download Entry Guide
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-gradient-title">Market Snapshot</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-white text-shadow-md">$4.5B</div>
                    <div className="text-white/80 text-shadow-sm">Defense Budget (2024)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white text-shadow-md">15%</div>
                    <div className="text-white/80 text-shadow-sm">YoY Growth Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white text-shadow-md">180M+</div>
                    <div className="text-white/80 text-shadow-sm">Population</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white text-shadow-md">Strategic</div>
                    <div className="text-white/80 text-shadow-sm">Geopolitical Position</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Market Entry Support
            </h2>
            <p className="text-xl text-trust-slate max-w-3xl mx-auto">
              Every aspect of your market entry is covered with our end-to-end services
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-strategic-blue/10 text-strategic-blue">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-trust-slate">{feature.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Market Entry Process</h2>
            <p className="text-xl text-trust-slate max-w-3xl mx-auto">
              A structured approach that ensures successful market entry within 90-120 days
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {process.map((phase, index) => (
              <Card key={phase.phase} className="relative">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold text-strategic-blue">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm text-trust-slate">{phase.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold">{phase.phase}</h3>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {phase.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                        <span className="text-trust-slate">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Success Metrics */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Proven Success Metrics</h2>
            <p className="text-xl text-trust-slate max-w-3xl mx-auto">
              Our market entry strategies deliver measurable results
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-strategic-blue mb-2">95%</div>
              <div className="text-lg font-semibold mb-1">Success Rate</div>
              <div className="text-trust-slate">Market entry success</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secure-green mb-2">90 Days</div>
              <div className="text-lg font-semibold mb-1">Average Time</div>
              <div className="text-trust-slate">To first contract</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-accent mb-2">25+</div>
              <div className="text-lg font-semibold mb-1">Clients Served</div>
              <div className="text-trust-slate">Global manufacturers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-alert-amber mb-2">$2.3B</div>
              <div className="text-lg font-semibold mb-1">Contracts Facilitated</div>
              <div className="text-trust-slate">Total value secured</div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-cta text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-cta-title">
              Ready to Enter the Bangladesh Defense Market?
            </h2>
            <p className="text-xl mb-8 text-cta-body">
              Get a customized market entry strategy based on your specific capabilities 
              and objectives. Our experts will guide you through every step.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Request Market Assessment
              </Button>
              <Button 
                size="lg" 
                variant="outline-dark"
              >
                Schedule Expert Call
              </Button>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              Average response time: 24 hours | Confidential consultation
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}