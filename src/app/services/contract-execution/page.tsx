import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
 
  Users, 
  FileCheck,
  CheckCircle2,
  DollarSign,
  Package
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contract Execution Service - Vanguard Technology',
  description: 'End-to-end contract execution support for Bangladesh defense projects',
}

const features = [
  {
    icon: Package,
    title: 'Logistics Coordination',
    description: 'Complete supply chain management from factory to final delivery point.',
  },
  {
    icon: FileCheck,
    title: 'Compliance Management',
    description: 'Ensure all contractual obligations and regulatory requirements are met.',
  },
  {
    icon: Users,
    title: 'Local Liaison',
    description: 'On-ground team to coordinate with military units and government agencies.',
  },
  {
    icon: DollarSign,
    title: 'Payment Processing',
    description: 'Navigate complex payment procedures and banking requirements smoothly.',
  },
]

const services = [
  {
    category: 'Pre-Delivery',
    items: [
      'Contract review and risk assessment',
      'Import permit and clearance coordination',
      'Quality inspection arrangements',
      'Logistics planning and scheduling',
    ],
  },
  {
    category: 'Delivery Phase',
    items: [
      'Customs clearance support',
      'Transportation and warehousing',
      'Installation supervision',
      'Training coordination',
    ],
  },
  {
    category: 'Post-Delivery',
    items: [
      'Acceptance certificate management',
      'Warranty administration',
      'Payment collection support',
      'After-sales service coordination',
    ],
  },
]

const benefits = [
  { metric: 'On-Time Delivery', value: '98%' },
  { metric: 'Payment Collection', value: '< 45 days' },
  { metric: 'Contract Disputes', value: '0%' },
  { metric: 'Client Satisfaction', value: '95%' },
]

export default function ContractExecutionPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#d97706] to-[#0f172a] text-white py-24 gradient-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
        <Container>
          <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-6 h-6 text-white/90" />
                <span className="text-sm font-medium uppercase tracking-wider text-gradient-safe">
                  Contract Execution
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-title">
                Flawless Contract Delivery in Bangladesh
              </h1>
              <p className="text-xl text-gradient-subtitle mb-8">
                From contract signing to final payment, we ensure smooth execution 
                of your defense contracts with our on-ground expertise and established 
                processes.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary">
                  Get Execution Support
                </Button>
                <Button 
                  size="lg" 
                  variant="outline-dark"
                >
                  View Process Guide
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-gradient-title">Performance Metrics</h3>
                <div className="space-y-4">
                  {benefits.map((item) => (
                    <div key={item.metric} className="flex justify-between items-center">
                      <span className="text-white/80 text-shadow-sm">{item.metric}</span>
                      <span className="text-2xl font-bold text-white text-shadow-md">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Challenges Section */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Contract Execution Challenges We Solve
            </h2>
            <p className="text-xl text-trust-slate max-w-3xl mx-auto">
              Bangladesh defense contracts come with unique execution challenges. 
              We've solved them all.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Complex Import Procedures</h3>
                <p className="text-sm text-trust-slate">
                  Navigate defense import regulations, NOCs, and customs clearances 
                  with our established processes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Multi-Stakeholder Coordination</h3>
                <p className="text-sm text-trust-slate">
                  Manage relationships with military units, DGDP, customs, banks, 
                  and logistics providers seamlessly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Payment Delays</h3>
                <p className="text-sm text-trust-slate">
                  Accelerate payment processing through proper documentation and 
                  follow-up procedures.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Quality Inspections</h3>
                <p className="text-sm text-trust-slate">
                  Coordinate pre-delivery inspections and ensure smooth acceptance 
                  procedures.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">Documentation Compliance</h3>
                <p className="text-sm text-trust-slate">
                  Ensure all contractual documentation meets DGDP and government 
                  requirements.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">After-Sales Support</h3>
                <p className="text-sm text-trust-slate">
                  Maintain customer satisfaction through warranty management and 
                  service coordination.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Services Breakdown */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Execution Support
            </h2>
            <p className="text-xl text-trust-slate max-w-3xl mx-auto">
              We handle every aspect of contract execution so you can focus on 
              your next opportunity
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.category}>
                <CardHeader className="bg-vanguard-navy text-white">
                  <h3 className="text-xl font-bold">{service.category}</h3>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                        <span className="text-trust-slate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Execution Capabilities</h2>
            <p className="text-xl text-trust-slate max-w-3xl mx-auto">
              Specialized services that ensure successful contract completion
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-alert-amber/10 text-alert-amber">
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

      {/* Success Story */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Execution Excellence in Action</h2>
            <p className="text-xl text-trust-slate">
              How we helped deliver a complex $25M radar system project
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Project Overview</h3>
                  <p className="text-trust-slate">
                    A European defense contractor needed to deliver and install a 
                    sophisticated radar system across multiple Bangladesh Air Force 
                    bases within a tight 6-month timeline.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <h4 className="font-semibold mb-3">Challenges Faced</h4>
                    <ul className="space-y-2 text-trust-slate">
                      <li className="flex items-start gap-2">
                        <span className="text-alert-amber">•</span>
                        Complex import procedures for sensitive equipment
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-alert-amber">•</span>
                        Coordination across 5 military installations
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-alert-amber">•</span>
                        Technical training for 50+ operators
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-alert-amber">•</span>
                        Strict security and compliance requirements
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Our Solutions</h4>
                    <ul className="space-y-2 text-trust-slate">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0" />
                        <span>Secured all permits in record 15 days</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0" />
                        <span>Deployed dedicated project managers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0" />
                        <span>Coordinated phased training program</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0" />
                        <span>Achieved 100% compliance audit score</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-secure-green/10 rounded-lg">
                  <p className="text-secure-green font-semibold text-lg mb-2">
                    Project Delivered 2 Weeks Ahead of Schedule
                  </p>
                  <p className="text-trust-slate">
                    Full payment received within 30 days of completion. Client awarded 
                    us two additional contracts based on execution excellence.
                  </p>
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
              Ensure Smooth Execution of Your Defense Contracts
            </h2>
            <p className="text-xl mb-8 text-cta-body">
              Don't let execution challenges risk your hard-won contracts. Partner 
              with the team that has successfully delivered over $850M in defense 
              projects across Bangladesh.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Discuss Your Contract
              </Button>
              <Button 
                size="lg" 
                variant="outline-dark"
              >
                Download Execution Guide
              </Button>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              Available 24/7 for contract emergencies | Rapid response team
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}