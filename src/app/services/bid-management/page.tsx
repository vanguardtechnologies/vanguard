import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  TrendingUp, 
  FileText, 
  Users, 
  Shield,
  CheckCircle2,
  Award,
  Calculator
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Bid Management Service - Vanguard Technology',
  description: 'End-to-end bid management support for Bangladesh defense contracts',
}

const features = [
  {
    icon: FileText,
    title: 'Technical Proposal Writing',
    description: 'Expert technical writers who understand defense requirements and DGDP standards.',
  },
  {
    icon: Shield,
    title: 'Compliance Management',
    description: 'Ensure 100% compliance with all tender requirements and documentation.',
  },
  {
    icon: Calculator,
    title: 'Pricing Strategy',
    description: 'Data-driven pricing optimization balancing competitiveness and profitability.',
  },
  {
    icon: Users,
    title: 'Local Partner Coordination',
    description: 'Manage relationships with local agents, banks, and logistics partners.',
  },
]

const process = [
  {
    phase: 'Bid Analysis',
    duration: '2-3 days',
    activities: [
      'Tender document review',
      'Requirement analysis',
      'Go/No-go decision',
      'Win strategy development',
    ],
  },
  {
    phase: 'Proposal Development',
    duration: '7-10 days',
    activities: [
      'Technical solution design',
      'Compliance matrix',
      'Pricing optimization',
      'Risk assessment',
    ],
  },
  {
    phase: 'Submission & Follow-up',
    duration: '1-2 days',
    activities: [
      'Final review & QA',
      'Submission coordination',
      'Clarification responses',
      'Negotiation support',
    ],
  },
]

const stats = [
  { label: 'Bids Managed', value: '500+' },
  { label: 'Win Rate', value: '68%' },
  { label: 'Average Proposal Score', value: '92/100' },
  { label: 'Total Contract Value', value: '$850M+' },
]

export default function BidManagementPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0080d4] to-[#0052e0] text-white py-24 gradient-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
        <Container>
          <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6 text-white/90" />
                <span className="text-sm font-medium uppercase tracking-wider text-gradient-safe">
                  Bid Management
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-title">
                Win More Defense Contracts
              </h1>
              <p className="text-xl text-gradient-subtitle mb-8">
                From RFP analysis to contract award, our expert team manages every 
                aspect of your bid with a proven 68% win rate in Bangladesh defense 
                tenders.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary">
                  Discuss Your Next Bid
                </Button>
                <Button 
                  size="lg" 
                  variant="outline-dark"
                >
                  View Success Stories
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-gradient-title">Our Track Record</h3>
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-3xl font-bold text-white text-shadow-md">{stat.value}</div>
                      <div className="text-white/80 text-sm text-shadow-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Why Leading Manufacturers Choose Our Bid Management
            </h2>
            <p className="text-xl text-trust-slate max-w-3xl mx-auto">
              We combine local expertise with international best practices to 
              maximize your win probability
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardContent className="pt-8 text-center">
                <Award className="w-12 h-12 text-strategic-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">DGDP Expertise</h3>
                <p className="text-trust-slate">
                  Deep understanding of DGDP evaluation criteria and preferences 
                  built over 15+ years
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 text-center">
                <Users className="w-12 h-12 text-secure-green mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Local Network</h3>
                <p className="text-trust-slate">
                  Established relationships with key stakeholders, agents, and 
                  support services
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-8 text-center">
                <Shield className="w-12 h-12 text-alert-amber mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Risk Mitigation</h3>
                <p className="text-trust-slate">
                  Proactive identification and management of bid risks to protect 
                  your interests
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Bid Support Services
            </h2>
            <p className="text-xl text-trust-slate max-w-3xl mx-auto">
              Every element required for a winning bid is handled by our specialists
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-sky-accent/10 text-sky-accent">
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

      {/* Process Timeline */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Bid Management Process</h2>
            <p className="text-xl text-trust-slate max-w-3xl mx-auto">
              A systematic approach that has delivered consistent results
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {process.map((phase, index) => (
              <Card key={phase.phase} className="relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-sky-accent"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl font-bold text-sky-accent">
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

      {/* Case Study Preview */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Recent Success Story</h2>
            <p className="text-xl text-trust-slate">
              How we helped a European manufacturer win their first Bangladesh Army contract
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold mb-4">The Challenge</h3>
                  <p className="text-trust-slate mb-4">
                    A leading European tactical equipment manufacturer wanted to enter 
                    the Bangladesh market but faced challenges with local requirements, 
                    documentation, and competition from established suppliers.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Contract Value:</span>
                      <span className="text-sm text-trust-slate">$12.5 million</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Competition:</span>
                      <span className="text-sm text-trust-slate">7 international bidders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Timeline:</span>
                      <span className="text-sm text-trust-slate">45 days from RFP to submission</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Our Solution</h3>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                      <span className="text-trust-slate">
                        Conducted detailed competitor analysis and pricing strategy
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                      <span className="text-trust-slate">
                        Developed compelling technical proposal with local adaptations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                      <span className="text-trust-slate">
                        Managed all compliance documentation and certifications
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                      <span className="text-trust-slate">
                        Coordinated with local partners for logistics and support
                      </span>
                    </li>
                  </ul>
                  <div className="p-4 bg-secure-green/10 rounded-lg">
                    <p className="text-secure-green font-semibold">
                      Result: Won the contract with highest technical score
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-cta text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-cta-title">
              Let Us Manage Your Next Bangladesh Defense Bid
            </h2>
            <p className="text-xl mb-8 text-cta-body">
              With our expertise and track record, you can focus on your core 
              business while we handle the complexities of Bangladesh procurement.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Discuss Your Opportunity
              </Button>
              <Button 
                size="lg" 
                variant="outline-dark"
              >
                Download Bid Guide
              </Button>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              Free consultation | Confidential discussion | No obligations
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}