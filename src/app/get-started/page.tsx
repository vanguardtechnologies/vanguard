import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { AssessmentForm } from '@/components/forms/assessment-form'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle2, Clock, FileText, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Get Started - Free Market Assessment | Vanguard Technology',
  description: 'Get a customized Bangladesh defense market entry strategy based on your capabilities',
}

const benefits = [
  {
    icon: FileText,
    title: 'Customized Report',
    description: 'Receive a detailed analysis tailored to your products and capabilities',
  },
  {
    icon: Users,
    title: 'Expert Consultation',
    description: '30-minute call with our defense market specialists',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'Complete assessment delivered within 48 hours',
  },
]

const process = [
  'Fill out the assessment form (5 minutes)',
  'Our experts analyze your information',
  'Receive customized market entry report',
  'Schedule follow-up consultation',
]

export default function GetStartedPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-vanguard-navy to-strategic-blue text-white py-16">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Bangladesh Defense Market Journey
            </h1>
            <p className="text-xl text-gray-200">
              Get a free, customized assessment of your market entry potential. 
              No obligations, just insights.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Benefits Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">What You'll Receive</h2>
                <div className="space-y-4">
                  {benefits.map((benefit) => {
                    const Icon = benefit.icon
                    return (
                      <Card key={benefit.title}>
                        <CardContent className="flex items-start gap-4 pt-6">
                          <div className="p-2 bg-strategic-blue/10 rounded-lg">
                            <Icon className="w-5 h-5 text-strategic-blue" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{benefit.title}</h3>
                            <p className="text-sm text-trust-slate">
                              {benefit.description}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>

              <Card className="bg-gray-50">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Simple Process</h3>
                  <ol className="space-y-3">
                    {process.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-strategic-blue text-white rounded-full flex items-center justify-center text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="text-sm text-trust-slate">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-secure-green text-white">
                <CardContent className="pt-6">
                  <CheckCircle2 className="w-8 h-8 mb-3" />
                  <h3 className="text-lg font-bold mb-2">100% Confidential</h3>
                  <p className="text-green-100 text-sm">
                    Your information is protected by strict confidentiality. 
                    We can sign an NDA before detailed discussions.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Assessment Form */}
            <div className="lg:col-span-2">
              <AssessmentForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Global Leaders</h2>
            <p className="text-xl text-trust-slate">
              Join 25+ international defense manufacturers who've successfully 
              entered Bangladesh with our guidance
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4 text-center">
            <div>
              <div className="text-4xl font-bold text-strategic-blue mb-2">95%</div>
              <div className="text-trust-slate">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secure-green mb-2">90 Days</div>
              <div className="text-trust-slate">Avg. Time to Contract</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-sky-accent mb-2">$2.3B</div>
              <div className="text-trust-slate">Contracts Facilitated</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-alert-amber mb-2">15+ Years</div>
              <div className="text-trust-slate">Market Experience</div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}