import { Resend } from 'resend'
import { LeadNotificationEmail } from '@/emails/lead-notification'

const resend = new Resend(process.env.RESEND_API_KEY || 'demo-key')

// Note: For production, you'll need to:
// 1. Verify your domain at https://resend.com/domains
// 2. Update the 'from' addresses to use your verified domain
// 3. Update the 'to' addresses to use real email addresses

export async function sendLeadNotification(lead: {
  name: string
  email: string
  company?: string
  source: string
  message?: string
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Vanguard Technology <onboarding@resend.dev>',
      to: ['delivered@resend.dev'], // In production, use actual sales email
      subject: `New Lead: ${lead.name} from ${lead.source}`,
      react: LeadNotificationEmail(lead),
    })

    if (error) {
      console.error('Failed to send lead notification:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, error }
  }
}

export async function sendNewsletterWelcome(email: string) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Vanguard Technology <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to Vanguard Technology Newsletter',
      html: `
        <h2>Welcome to Vanguard Technology!</h2>
        <p>Thank you for subscribing to our defense market intelligence newsletter.</p>
        <p>You'll receive weekly insights on:</p>
        <ul>
          <li>Bangladesh defense opportunities</li>
          <li>Tender alerts and analysis</li>
          <li>Market trends and forecasts</li>
          <li>Success stories and case studies</li>
        </ul>
        <p>Stay tuned for valuable insights!</p>
        <hr>
        <p style="font-size: 12px; color: #666;">
          You can unsubscribe at any time by clicking the link at the bottom of our emails.
        </p>
      `,
    })

    if (error) {
      console.error('Failed to send welcome email:', error)
      return { success: false, error }
    }

    return { success: true, data }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, error }
  }
}