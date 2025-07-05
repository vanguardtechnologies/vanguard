import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AnimatedCounter } from '@/components/visualization/animated-counter'
import { GrowthChart } from '@/components/visualization/growth-chart'
import { GaugeChart } from '@/components/visualization/gauge-chart'
import { TimelineChart } from '@/components/visualization/timeline-chart'
import { SunburstChart } from '@/components/visualization/sunburst-chart'
import { RadarChart } from '@/components/visualization/radar-chart'
import { RegionalChart } from '@/components/visualization/regional-chart'
import { ROICalculator } from '@/components/tools/roi-calculator'

export const metadata: Metadata = {
  title: 'Market Intelligence - Vanguard Technology',
  description: 'Bangladesh defense market data, insights, and analysis',
}

// Sample data for visualizations
const timelineData = [
  {
    date: '2020',
    title: 'Forces Goal 2030 Announced',
    description: 'Bangladesh announces comprehensive military modernization plan',
    completed: true,
  },
  {
    date: '2022',
    title: 'Defense Budget Increase',
    description: '15% YoY increase in defense procurement budget',
    completed: true,
  },
  {
    date: '2024',
    title: 'International Partnerships',
    description: 'Opening to western defense manufacturers',
    completed: true,
  },
  {
    date: '2025',
    title: 'Major Procurement Phase',
    description: 'Expected $2B+ in new contracts',
    completed: false,
  },
  {
    date: '2027',
    title: 'Mid-term Review',
    description: 'Forces Goal 2030 progress assessment',
    completed: false,
  },
]

const servicePortfolioData = [
  {
    name: 'Advisory',
    value: 40,
    children: [
      { name: 'Market Entry', value: 15 },
      { name: 'Strategy', value: 15 },
      { name: 'Compliance', value: 10 },
    ],
  },
  {
    name: 'Operations',
    value: 35,
    children: [
      { name: 'Bid Management', value: 20 },
      { name: 'Contract Execution', value: 15 },
    ],
  },
  {
    name: 'Intelligence',
    value: 25,
    children: [
      { name: 'Tender Monitoring', value: 15 },
      { name: 'Analytics', value: 10 },
    ],
  },
]

const tenderMatchData = [
  { category: 'Technical Fit', value: 85, fullMark: 100 },
  { category: 'Price Competitiveness', value: 70, fullMark: 100 },
  { category: 'Local Presence', value: 90, fullMark: 100 },
  { category: 'Past Performance', value: 95, fullMark: 100 },
  { category: 'Compliance', value: 88, fullMark: 100 },
  { category: 'Financial Strength', value: 92, fullMark: 100 },
]

const regionalData = [
  { country: 'Bangladesh', defenseSpend: 4500000000, marketSize: 1200000000, growthRate: 15 },
  { country: 'India', defenseSpend: 72000000000, marketSize: 25000000000, growthRate: 8 },
  { country: 'Pakistan', defenseSpend: 11000000000, marketSize: 3500000000, growthRate: 6 },
  { country: 'Myanmar', defenseSpend: 2200000000, marketSize: 600000000, growthRate: 10 },
  { country: 'Sri Lanka', defenseSpend: 1800000000, marketSize: 400000000, growthRate: 5 },
]

export default function MarketIntelligencePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0f172a] to-[#0052e0] text-white py-24 gradient-overlay">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20"></div>
        <Container>
          <div className="relative z-10 max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-title">
              Bangladesh Defense Market Intelligence
            </h1>
            <p className="text-xl text-gradient-subtitle mb-8">
              Real-time data, insights, and analysis to guide your market entry 
              and expansion strategy in one of Asia's fastest-growing defense markets.
            </p>
            <Button size="lg" variant="secondary">
              Get personalized market intelligence and strategic guidance to win in the Bangladesh defense market.
            </Button>
          </div>
        </Container>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-sm font-medium text-trust-slate mb-2">
                  Defense Budget 2024
                </h3>
                <AnimatedCounter value={4.5} suffix="B" prefix="$" />
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-sm font-medium text-trust-slate mb-2">
                  YoY Growth
                </h3>
                <AnimatedCounter value={15} suffix="%" />
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-sm font-medium text-trust-slate mb-2">
                  Active Tenders
                </h3>
                <AnimatedCounter value={127} />
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-sm font-medium text-trust-slate mb-2">
                  Win Rate
                </h3>
                <AnimatedCounter value={68} suffix="%" />
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Growth Chart */}
      <section className="py-16 bg-gray-50">
        <Container>
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Defense Budget Growth Trend</h2>
              <p className="text-trust-slate">
                Bangladesh defense spending trajectory 2019-2028
              </p>
            </CardHeader>
            <CardContent>
              <GrowthChart />
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Timeline and Success Rate */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold">Procurement Timeline</h2>
                <p className="text-trust-slate">
                  Key milestones in Bangladesh defense modernization
                </p>
              </CardHeader>
              <CardContent>
                <TimelineChart items={timelineData} />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold">Success Metrics</h2>
                <p className="text-trust-slate">
                  Our performance in Bangladesh defense market
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-8 place-items-center">
                  <GaugeChart value={95} label="Client Satisfaction" color="#059669" />
                  <GaugeChart value={68} label="Win Rate" color="#1E40AF" />
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Service Portfolio */}
      <section className="py-16 bg-gray-50">
        <Container>
          <Card>
            <CardHeader>
              <h2 className="text-2xl font-bold">Service Portfolio Distribution</h2>
              <p className="text-trust-slate">
                How we allocate resources across our service offerings
              </p>
            </CardHeader>
            <CardContent>
              <SunburstChart 
                data={servicePortfolioData} 
                title="Click segments to explore"
              />
            </CardContent>
          </Card>
        </Container>
      </section>

      {/* Tender Match and Regional Comparison */}
      <section className="py-16">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold">Tender Match Analysis</h2>
                <p className="text-trust-slate">
                  Average scoring across key evaluation criteria
                </p>
              </CardHeader>
              <CardContent>
                <RadarChart 
                  data={tenderMatchData}
                  title="Your Competitive Position"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold">Regional Comparison</h2>
                <p className="text-trust-slate">
                  South Asian defense markets at a glance
                </p>
              </CardHeader>
              <CardContent>
                <RegionalChart 
                  data={regionalData}
                  title="Defense Spending vs Market Size"
                />
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* ROI Calculator */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Calculate Your ROI</h2>
            <p className="text-xl text-trust-slate">
              Estimate your potential returns from entering the Bangladesh defense market
            </p>
          </div>
          <ROICalculator />
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-vanguard-navy text-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Turn Data Into Contracts
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get personalized market intelligence and strategic guidance to win 
              in the Bangladesh defense market.
            </p>
            <div className="flex gap-4 justify-center">
              <a 
                href="/get-started" 
                className="inline-flex items-center justify-center px-6 py-3 bg-strategic-blue text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Get Custom Analysis
              </a>
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                Talk to Expert
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}