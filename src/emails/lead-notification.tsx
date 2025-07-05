import * as React from 'react'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'

interface LeadNotificationEmailProps {
  name: string
  email: string
  company?: string
  source: string
  message?: string
}

export function LeadNotificationEmail({
  name,
  email,
  company,
  source,
  message,
}: LeadNotificationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New lead from {source}: {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoSection}>
            <Img
              src="https://resend.com/static/logo.png"
              width="150"
              height="50"
              alt="Vanguard Technology"
              style={logo}
            />
          </Section>
          <Heading style={h1}>New Lead Received</Heading>
          
          <Section style={section}>
            <Text style={text}>
              A new lead has been submitted through the {source}.
            </Text>
            
            <Section style={details}>
              <Text style={label}>Name:</Text>
              <Text style={value}>{name}</Text>
              
              <Text style={label}>Email:</Text>
              <Text style={value}>
                <Link href={`mailto:${email}`}>{email}</Link>
              </Text>
              
              {company && (
                <>
                  <Text style={label}>Company:</Text>
                  <Text style={value}>{company}</Text>
                </>
              )}
              
              <Text style={label}>Source:</Text>
              <Text style={value}>{source}</Text>
              
              {message && (
                <>
                  <Text style={label}>Message:</Text>
                  <Text style={messageBox}>{message}</Text>
                </>
              )}
            </Section>
            
            <Text style={text}>
              Please follow up within 24 hours as per our service agreement.
            </Text>
          </Section>
          
          <Text style={footer}>
            Vanguard Technology - Defense Market Intelligence
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
}

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
}

const section = {
  padding: '0 48px',
}

const logoSection = {
  padding: '24px 48px',
  textAlign: 'center' as const,
}

const logo = {
  margin: '0 auto',
}

const h1 = {
  color: '#1E40AF',
  fontSize: '32px',
  fontWeight: '600',
  lineHeight: '40px',
  margin: '0 0 20px',
  padding: '0 48px',
}

const text = {
  color: '#475569',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 10px',
}

const details = {
  backgroundColor: '#f8fafc',
  borderRadius: '8px',
  padding: '24px',
  margin: '20px 0',
}

const label = {
  color: '#475569',
  fontSize: '14px',
  fontWeight: '600',
  margin: '0 0 4px',
}

const value = {
  color: '#0F172A',
  fontSize: '16px',
  margin: '0 0 16px',
}

const messageBox = {
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '4px',
  color: '#0F172A',
  fontSize: '14px',
  lineHeight: '20px',
  padding: '12px',
  margin: '0 0 16px',
}

const footer = {
  color: '#94a3b8',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '0',
  padding: '0 48px',
}

export default LeadNotificationEmail