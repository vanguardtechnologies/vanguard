# Vanguard Technology - Defense Market Intelligence Platform

Vanguard Technology is a revolutionary web platform helping international defense manufacturers enter and succeed in the Bangladesh defense market. Built with Next.js 14, TypeScript, and modern web technologies.

## 🚀 Features

- **Market Intelligence Dashboard**: Real-time data and analytics on Bangladesh defense market
- **Service Portfolio**: Comprehensive suite of defense procurement services
- **Lead Management System**: Capture and track potential clients
- **Data Visualizations**: 10+ interactive charts and metrics
- **Authentication System**: Secure access with NextAuth.js
- **Email Integration**: Automated notifications with Resend
- **Military-Tech UI**: Premium design with glassmorphism and 3D effects

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS v4
- **UI Components**: Radix UI, Framer Motion, GSAP
- **Database**: PostgreSQL (Neon) with Prisma ORM
- **Authentication**: NextAuth.js v5
- **Email**: Resend API with React Email
- **Deployment**: Vercel

## 📋 Prerequisites

- Node.js 18+ 
- PostgreSQL database (Neon or Supabase)
- Resend API key for email functionality

## 🔧 Installation

1. Clone the repository:
```bash
git clone https://github.com/vanguardtechnologies/vanguard.git
cd vanguard
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your credentials:
- Database URL
- NextAuth secret
- Resend API key

5. Run database migrations:
```bash
npx prisma migrate dev
```

6. Seed the database (optional):
```bash
npm run db:seed
```

7. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🚀 Deployment

This project is configured for deployment on Vercel:

1. Push to GitHub:
```bash
git push origin main
```

2. Import project in Vercel dashboard

3. Configure environment variables:
   - `DATABASE_URL`
   - `NEXTAUTH_URL` 
   - `NEXTAUTH_SECRET`
   - `RESEND_API_KEY`

4. Deploy!

## 📁 Project Structure

```
vanguard-web/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   └── emails/          # Email templates
├── prisma/              # Database schema
├── public/              # Static assets
└── docs/                # Documentation
```

## 🔐 Security

- Military-grade security implementation
- Environment variables for sensitive data
- Secure authentication with NextAuth.js
- Input sanitization and validation
- Security headers configured

## 📄 License

Copyright © 2024 Vanguard Technology. All rights reserved.

## 🤝 Contact

For inquiries about defense procurement services in Bangladesh:
- Website: [vanguardtech.com](https://vanguardtech.com)
- Email: info@vanguardtech.com

---

Built with ❤️ by Vanguard Technology