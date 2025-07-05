import { Metadata } from 'next'
import { Container } from '@/components/layout/container'
import { ContactForm } from '@/components/forms/contact-form'
import { Card, CardContent } from '@/components/ui/card'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Vanguard Technology',
  description: 'Get in touch with our defense market experts',
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'Office',
    details: ['Dhaka, Bangladesh', 'Strategic location for defense sector access'],
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['+880 1XXX-XXXXXX', 'Mon-Fri 9:00 AM - 6:00 PM (BST)'],
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['info@vanguard.tech', 'Response within 24 hours'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: ['Sunday - Thursday', '9:00 AM - 6:00 PM (BST)'],
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-vanguard-navy to-strategic-blue text-white py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Discuss Your Defense Market Strategy
            </h1>
            <p className="text-xl text-gray-200">
              Connect with our experts to explore opportunities in the Bangladesh 
              defense market. We're here to guide you every step of the way.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="text-trust-slate mb-8">
                  Whether you're exploring market entry or ready to bid on tenders, 
                  our team is ready to support your success.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon
                  return (
                    <Card key={item.title}>
                      <CardContent className="flex items-start gap-4 pt-6">
                        <div className="p-2 bg-strategic-blue/10 rounded-lg">
                          <Icon className="w-5 h-5 text-strategic-blue" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          {item.details.map((detail, index) => (
                            <p key={index} className="text-sm text-trust-slate">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Quick Response Promise */}
              <Card className="bg-strategic-blue text-white">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold mb-2">Quick Response Promise</h3>
                  <p className="text-blue-100">
                    We respond to all inquiries within 24 hours. For urgent matters, 
                    please call during business hours.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm source="contact-page" />
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Preview */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-trust-slate">
              Quick answers to common questions about working with Vanguard Technology
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">
                  How long does market entry typically take?
                </h3>
                <p className="text-trust-slate">
                  With our proven process, most clients achieve their first contract 
                  within 90-120 days of engagement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">
                  Do you work with small manufacturers?
                </h3>
                <p className="text-trust-slate">
                  Yes! We work with manufacturers of all sizes, from startups to 
                  Fortune 500 companies.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">
                  What's included in the free assessment?
                </h3>
                <p className="text-trust-slate">
                  You'll receive a customized report covering market opportunity, 
                  competition analysis, and recommended entry strategy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-2">
                  Is my information confidential?
                </h3>
                <p className="text-trust-slate">
                  Absolutely. We maintain strict confidentiality and can sign NDAs 
                  before any detailed discussions.
                </p>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </>
  )
}