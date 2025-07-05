import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  FileSearch, 
  Bell, 
  TrendingUp, 
  CheckCircle2,
  Zap,
  Filter
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tender Intelligence Service - Vanguard Technology',
  description: 'AI-powered defense tender monitoring and analysis for Bangladesh market',
}

const features = [
  {
    icon: Bell,
    title: 'Real-Time Alerts',
    description: 'Instant notifications for relevant tenders matching your capabilities.',
  },
  {
    icon: Filter,
    title: 'Smart Filtering',
    description: 'AI-powered matching based on your products, certifications, and track record.',
  },
  {
    icon: TrendingUp,
    title: 'Win Probability',
    description: 'Data-driven assessment of your chances with actionable recommendations.',
  },
  {
    icon: FileSearch,
    title: 'Competitor Analysis',
    description: 'Understand who you are competing against and their strengths.',
  },
]

const metrics = [
  { label: 'Tenders Monitored Monthly', value: '500+' },
  { label: 'Average Alert Speed', value: '< 2 hrs' },
  { label: 'Match Accuracy', value: '94%' },
  { label: 'Client Win Rate', value: '72%' },
]

export default function TenderIntelligencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#059669] to-[#0052e0] text-white py-24 gradient-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
        <Container>
          <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <FileSearch className="w-6 h-6 text-white/90" />
                <span className="text-sm font-medium uppercase tracking-wider text-gradient-safe">
                  Tender Intelligence
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-title">
                Never Miss a Defense Opportunity
              </h1>
              <p className="text-xl text-gradient-subtitle mb-8">
                Our AI-powered system monitors all Bangladesh defense tenders 24/7, 
                ensuring you only see opportunities that match your capabilities.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary">
                  Start Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline-dark"
                >
                  View Sample Report
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-gradient-title">Live Metrics</h3>
                <div className="space-y-4">
                  {metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-3xl font-bold text-white text-shadow-md">{metric.value}</div>
                      <div className="text-white/80 text-shadow-sm">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Intelligence That Gives You The Edge
            </h2>
            <p className="text-xl text-trust-slate max-w-3xl mx-auto">
              Our proprietary system combines AI analysis with human expertise to 
              deliver actionable tender intelligence
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: '01',
                title: 'Profile Setup',
                description: 'We analyze your capabilities, certifications, and track record',
              },
              {
                step: '02',
                title: 'Smart Monitoring',
                description: 'AI monitors DGDP and other sources for matching opportunities',
              },
              {
                step: '03',
                title: 'Expert Analysis',
                description: 'Our team validates and enriches each opportunity',
              },
              {
                step: '04',
                title: 'Instant Delivery',
                description: 'Receive detailed alerts with win probability assessment',
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-secure-green mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-trust-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Intelligence Features</h2>
            <p className="text-xl text-trust-slate max-w-3xl mx-auto">
              Everything you need to identify and pursue the right opportunities
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-secure-green/10 text-secure-green">
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

      {/* Sample Alert */}
      <section className="py-24">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">See Intelligence in Action</h2>
            <p className="text-xl text-trust-slate">
              Example of a typical tender alert you would receive
            </p>
          </div>

          <Card className="max-w-4xl mx-auto">
            <CardHeader className="bg-secure-green text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Zap className="w-6 h-6" />
                  <div>
                    <h3 className="text-xl font-bold">High Match Alert</h3>
                    <p className="text-green-100">94% match with your profile</p>
                  </div>
                </div>
                <span className="text-sm">2 hours ago</span>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Tender Details</h4>
                  <p className="text-trust-slate">
                    Supply of 500 units of Tactical Communication Equipment for 
                    Bangladesh Army Signal Corps
                  </p>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <span className="text-sm text-trust-slate">Tender ID</span>
                    <p className="font-semibold">DGDP/2024/ICT/0892</p>
                  </div>
                  <div>
                    <span className="text-sm text-trust-slate">Deadline</span>
                    <p className="font-semibold">15 Feb 2024 (21 days)</p>
                  </div>
                  <div>
                    <span className="text-sm text-trust-slate">Estimated Value</span>
                    <p className="font-semibold">$2.5M - $3.5M</p>
                  </div>
                  <div>
                    <span className="text-sm text-trust-slate">Win Probability</span>
                    <p className="font-semibold text-secure-green">High (78%)</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Requirements Match</h4>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-secure-green" />
                      <span>ISO 9001:2015 certification ✓</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-secure-green" />
                      <span>Previous military supply experience ✓</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-secure-green" />
                      <span>Technical specifications match ✓</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t">
                  <Button className="w-full">
                    View Full Analysis & Recommendations
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Intelligence Level</h2>
            <p className="text-xl text-trust-slate">
              Flexible plans to match your business needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold">Essential</h3>
                <p className="text-3xl font-bold mt-2">$299<span className="text-lg font-normal">/month</span></p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                    <span>Up to 10 alerts/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                    <span>Basic matching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                    <span>Email delivery</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Start Free Trial</Button>
              </CardContent>
            </Card>

            <Card className="border-strategic-blue">
              <CardHeader>
                <div className="text-sm font-medium text-strategic-blue mb-2">RECOMMENDED</div>
                <h3 className="text-xl font-bold">Professional</h3>
                <p className="text-3xl font-bold mt-2">$599<span className="text-lg font-normal">/month</span></p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                    <span>Unlimited alerts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                    <span>AI-powered matching</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                    <span>Win probability analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                    <span>Competitor intelligence</span>
                  </li>
                </ul>
                <Button className="w-full">Start Free Trial</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-xl font-bold">Enterprise</h3>
                <p className="text-3xl font-bold mt-2">Custom</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                    <span>Everything in Professional</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                    <span>Dedicated analyst</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secure-green flex-shrink-0 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-cta text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-cta-title">
              Start Winning More Defense Contracts
            </h2>
            <p className="text-xl mb-8 text-cta-body">
              Join 50+ companies using our tender intelligence to increase their 
              win rate by an average of 3x.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Start 14-Day Free Trial
              </Button>
              <Button 
                size="lg" 
                variant="outline-dark"
              >
                Schedule Demo
              </Button>
            </div>
            <p className="mt-8 text-sm text-gray-400">
              No credit card required | Cancel anytime
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}