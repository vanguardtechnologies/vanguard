import { PrismaClient } from '@/generated/prisma'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash('password123', 10)
  
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@vanguard.tech' },
    update: {},
    create: {
      email: 'admin@vanguard.tech',
      name: 'Admin User',
      password: hashedPassword,
      role: 'ADMIN',
      emailVerified: new Date(),
    },
  })

  console.log({ adminUser })

  // Create sample services
  const services = [
    {
      slug: 'market-entry',
      title: 'Market Entry Strategy',
      subtitle: 'Your gateway to Bangladesh defense market',
      description: 'Comprehensive planning and execution for entering the Bangladesh defense market',
      content: 'Full service description and details...',
      order: 1,
    },
    {
      slug: 'tender-intelligence',
      title: 'Tender Intelligence',
      subtitle: 'Never miss an opportunity',
      description: 'Real-time monitoring and analysis of defense procurement opportunities',
      content: 'Full service description and details...',
      order: 2,
    },
    {
      slug: 'bid-management',
      title: 'Bid Management',
      subtitle: 'Win more contracts',
      description: 'End-to-end support for winning defense contracts in Bangladesh',
      content: 'Full service description and details...',
      order: 3,
    },
    {
      slug: 'contract-execution',
      title: 'Contract Execution',
      subtitle: 'Flawless delivery',
      description: 'Ensuring successful delivery and relationship management',
      content: 'Full service description and details...',
      order: 4,
    },
  ]

  for (const service of services) {
    await prisma.service.upsert({
      where: { slug: service.slug },
      update: {},
      create: service,
    })
  }

  // Create sample market data
  const marketData = [
    {
      year: 2024,
      category: 'defense-budget',
      value: 4500000000,
      unit: 'USD',
      description: 'Total Bangladesh Defense Budget',
    },
    {
      year: 2024,
      category: 'procurement-budget',
      value: 1200000000,
      unit: 'USD',
      description: 'Defense Procurement Budget',
    },
    {
      year: 2023,
      category: 'defense-budget',
      value: 4100000000,
      unit: 'USD',
      description: 'Total Bangladesh Defense Budget',
    },
  ]

  for (const data of marketData) {
    await prisma.marketData.upsert({
      where: {
        year_category: {
          year: data.year,
          category: data.category,
        },
      },
      update: {},
      create: data,
    })
  }

  console.log('Database seeded successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })