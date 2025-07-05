# CLAUDE.md - Vanguard Technology Web Platform

## Project Overview
Vanguard Technology is building a revolutionary web platform to help international defense manufacturers enter the Bangladesh defense market. This is a Next.js 14 application with TypeScript, Tailwind CSS v4, and a focus on data visualization and user experience.

**Project Vision**: Transform traditional defense procurement advisory into a technology-enabled, data-driven experience that builds trust, demonstrates sophistication, and accelerates business growth.

## Current Status (Phase 1 - 100% Complete + Apple-Quality UI Redesign)
✅ **Completed**:
- Next.js 14 project setup with TypeScript
- Tailwind CSS v4 configuration (resolved compatibility issues)
- Apple-quality design system (enhanced colors, typography, animations)
- Premium UI components with glass-morphism and advanced animations
- Homepage with sophisticated Hero section and interactive elements
- Responsive navigation with mobile menu and magnetic hover effects
- Authentication system with NextAuth.js and Prisma adapter
- Database connected (Neon PostgreSQL) with schema deployed
- All 4 service pages with enhanced gradient backgrounds and perfect contrast
- Lead capture forms (Contact, Newsletter, Assessment) saving to database
- API routes for form submissions with database integration
- SEO implementation with next-seo, sitemap, and robots.txt
- Contact and Get Started pages
- Market Intelligence page with all visualizations
- 10 data visualizations (Counter, Growth Chart, Gauge, Timeline, Sunburst, Radar, Regional comparison)
- ROI Calculator interactive tool
- Email integration with Resend (templates ready, API key configured)
- Development server running on Windows via WSL (fixed turbopack issues)
- Logo integration with "VANGUARD TECHNOLOGY" text and hover animations
- GSAP integration for advanced scroll animations and parallax effects
- Complete contrast fix - all text fully visible on gradient backgrounds
- Premium button variants including new "outline-dark" for gradients

🚧 **Optional Next Steps**:
- Deploy to staging/production environment
- Configure custom domain for email sending
- Implement dark mode using CSS custom properties

## Technology Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS v4
- **UI Libraries**: Radix UI, Framer Motion, GSAP (ScrollTrigger)
- **Data Viz**: Recharts, D3.js (planned)
- **Fonts**: Inter (body), Poppins (headings), JetBrains Mono (code)
- **Database**: PostgreSQL (Neon) with Prisma ORM
- **Auth**: NextAuth.js v5 (beta) with Prisma Adapter
- **Email**: Resend API with React Email templates
- **Deployment**: AWS with CloudFlare CDN (planned)

## Project Structure
```
vanguard-web/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Header/Footer
│   │   ├── page.tsx            # Homepage
│   │   └── globals.css         # Global styles (Tailwind v4)
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── button.tsx      # Button with variants
│   │   │   └── card.tsx        # Card components
│   │   ├── layout/             # Layout components
│   │   │   ├── container.tsx   # Responsive container
│   │   │   ├── header.tsx      # Navigation header
│   │   │   └── footer.tsx      # Site footer
│   │   ├── sections/           # Page sections
│   │   │   └── hero.tsx        # Hero section
│   │   └── visualization/      # Data viz components
│   │       ├── animated-counter.tsx
│   │       └── growth-chart.tsx
│   └── lib/
│       └── utils.ts            # Utility functions (cn)
├── public/                     # Static assets
├── docs/                       # Project documentation
└── start-dev.bat              # Windows dev server script
```

## Brand Design System
### Colors (Apple-Quality Design System + Military-Tech Theme)
- **Primary**: Premium Blue (#1366f1 → #0052e0) with perfect contrast
- **Secondary**: Vanguard Navy (#0f172a → #1e293b) with depth
- **Military-Tech Colors**:
  - Tactical Green: #00ff41 (primary accent)
  - Cyber Blue: #00d4ff (data/metrics)
  - Alert Orange: #ff6b35 (highlights/warnings)
  - Deep Navy: #0a0e27 (backgrounds)
- **Text Colors**: #0d1117 (primary), #24292f (secondary), #57606a (muted)
- **Borders**: #d0d7de (default), #b1bac4 (hover) for subtle definition
- **Glass Effects**: Multiple variants (glass, glass-subtle, glass-dark, glass-primary)
- **Shadows**: Multi-layer system with glass-shadow and glow effects
- **Gradients**: Mesh gradients, animated backgrounds, noise textures, CTA gradients

### Typography
- **Body**: Inter with antialiased rendering
- **Headings**: Poppins (600, 700) with text shadows
- **Code**: JetBrains Mono
- **Effects**: Gradient text, shadow utilities

### UI Features
- **Glass-morphism**: Advanced system with saturate(180%) and multiple variants
- **Animations**: 
  - GSAP ScrollTrigger for scroll-based animations
  - Magnetic hover effects on interactive elements
  - Stagger animations with custom easing (ease-out-expo)
  - Parallax backgrounds and floating orbs
  - 3D globe rotation with CSS transforms
  - Radar sweep animations
  - Data point pulse effects
  - Typing cursor animations
- **Button System**:
  - 9 variants including glass and outline-dark
  - Gradient animations with hover effects
  - Text shadows on all gradient buttons
  - Perfect contrast on all backgrounds
- **Military-Tech Components**:
  - Split-screen hero layout (hero-split-container)
  - 3D globe with grid overlay (globe-3d, globe-sphere, globe-grid)
  - Tactical badges (military-badge)
  - Scan line animations (tactical-line)
  - Data points with pulse rings (data-point)
  - Gradient CTA sections (bg-gradient-cta)
- **Premium Effects**:
  - Card shine animations
  - Shimmer loading states
  - Glow pulse effects
  - Custom scrollbar styling
  - Selection color customization
  - Bento grid layouts
  - Security badges

## Development Phases

### Phase 1: Foundation (Days 1-30) - COMPLETED ✅
- [x] Project setup and configuration
- [x] Apple-quality design system implementation
- [x] Premium UI components with glass-morphism
- [x] Homepage with advanced animations
- [x] Database configuration (Neon PostgreSQL + Prisma)
- [x] Authentication setup (NextAuth.js v5 beta)
- [x] Lead capture system with database integration
- [x] SEO implementation (sitemap, robots.txt, meta tags)
- [x] All service pages with perfect contrast
- [x] 10 data visualizations implemented
- [x] Email integration with Resend API
- [x] Logo integration with branding
- [x] GSAP animations and scroll effects
- [x] Complete UI polish and contrast fixes

### Phase 2: Trust Building (Days 31-60)
- [ ] Market intelligence pages
- [ ] Interactive data visualizations (20+ charts)
- [ ] Service detail pages
- [ ] Blog/CMS system
- [ ] ROI calculator tool
- [ ] DGDP timeline visualization
- [ ] Email automation integration

### Phase 3: Intelligence Platform (Days 61-90)
- [ ] Partner portal (NDA-gated)
- [ ] Client dashboard (contract-gated)
- [ ] AI-powered tender matching
- [ ] Document management system
- [ ] Analytics dashboard
- [ ] Performance optimization
- [ ] Security hardening
- [ ] Production deployment

## Key Features to Implement

### Data Visualizations (20 planned)
1. Market size counter ($4.5B) ✅
2. Defense budget growth chart 🚧
3. Service portfolio sunburst
4. Procurement timeline
5. Success rate gauge
6. ROI projection calculator
7. Tender match radar
8. Compliance checklist
9. Force structure diagram
10. Regional comparison charts

### Interactive Tools
- Market entry assessment wizard
- ROI calculator
- DGDP compliance checker
- Tender match score tool
- Bid strategy planner

### Three-Tier Access System
1. **Public Layer**: Market intelligence, service info
2. **Partner Portal**: Detailed analytics, resources (NDA required)
3. **Client Dashboard**: Full platform access (contract required)

## Development Guidelines

### Code Style
- Use TypeScript strict mode
- Prefer functional components with hooks
- Use `'use client'` only when necessary
- Follow Radix UI patterns for accessibility
- Keep components small and focused
- Use CSS custom properties for theming
- Ensure WCAG AAA contrast compliance
- Test all gradient backgrounds for visibility

### File Naming
- Components: PascalCase (e.g., `Button.tsx`)
- Utilities: camelCase (e.g., `formatCurrency.ts`)
- Pages: kebab-case folders (e.g., `market-intelligence/`)

### Git Workflow
- Main branch: production-ready code
- Feature branches: `feature/component-name`
- Commit format: `type: description` (feat, fix, docs, style)

### Performance Targets
- Lighthouse score: 95+
- First Contentful Paint: <1.5s
- Time to Interactive: <3.5s
- Cumulative Layout Shift: <0.1

## Common Commands

### Development
```bash
# Windows (use Command Prompt, not PowerShell)
cd C:\Users\riz\Desktop\Vanguard\vanguard-web
npm run dev

# Or use the batch file
double-click start-dev.bat

# WSL
cd /mnt/c/Users/riz/Desktop/Vanguard/vanguard-web
npm run dev
```

### Build & Deploy
```bash
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:seed      # Seed database with initial data
```

### Testing Email
```bash
# Emails are configured with Resend API
# Test emails go to delivered@resend.dev
# Production requires domain verification
```

## Known Issues & Solutions

### PowerShell Script Execution
If you get "scripts disabled" error in PowerShell:
1. Use Command Prompt instead, or
2. Run as Admin: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`

### Tailwind CSS v4 Compatibility
- Don't use `@apply` with custom properties
- No `tailwind.config.ts` needed
- Use standard CSS for complex styles

### WSL Network Access
- Server runs on `http://localhost:3000`
- If issues, check Windows Firewall settings

## MCP Servers Installed
- @upstash/context7-mcp
- @automatalabs/mcp-server-playwright
- @modelcontextprotocol/server-sequential-thinking
- cf-memory-mcp
- @modelcontextprotocol/server-filesystem
- @coretext-ai/github-mcp-server
- @notionhq/notion-mcp-server
- writer-mcp-server

## Important Links
- [Site Architecture](../docs/site-architecture.md)
- [Component Library](../docs/component-library.md)
- [Visual Specifications](../docs/visual-specifications.md)
- [Business Plan](../docs/vanguard_business_plan.md)
- [Implementation Roadmap](../docs/implementation-roadmap.md)

## Next Steps for Phase 2
1. Implement Partner Portal with NDA-gated access
2. Build Client Dashboard with contract-based access
3. Add advanced data visualizations (20+ total)
4. Implement AI-powered tender matching
5. Create document management system
6. Build blog/CMS system
7. Set up analytics dashboard
8. Implement performance monitoring

## Security Considerations
- Military-grade security required
- Implement CSP headers
- Use HTTPS everywhere
- Sanitize all user inputs
- Implement rate limiting
- Regular security audits

## Contact & Support
- Project: Vanguard Technology Defense Platform
- Stack: Next.js 14, TypeScript, Tailwind CSS v4
- Environment: Windows with WSL
- Node Version: Check with `node --version`

## Recent Updates

### Military-Tech Hero Section Redesign (Latest - December 2024)
- Implemented split-screen asymmetric layout with 40/60 ratio
- Created 3D rotating globe with CSS transforms
- Added military-themed UI elements (tactical badges, scan lines)
- Implemented radar sweep animation on globe
- Added floating data points with pulse animations
- Created tactical green (#00ff41) color scheme
- Added typing cursor effect for headlines
- Implemented bottom ticker with scrolling credentials
- Fixed all text alignment and visibility issues

### CTA Section Visibility Fixes (December 2024)
- Created new `bg-gradient-cta` class with animated gradients
- Added `text-cta-title` and `text-cta-body` classes with strong shadows
- Fixed all service page CTA sections (main + 4 sub-pages)
- Enhanced button visibility with proper contrast
- Fixed Market Intelligence page Button import error

### Footer Redesign (December 2024)
- Redesigned with modern minimal aesthetic
- Added newsletter subscription section
- Included contact information with icons
- Added social media links
- Implemented clean white background design
- Better visual hierarchy and spacing

### Apple-Quality UI Redesign (Previous)
- Implemented premium color system with perfect contrast
- Added GSAP for professional scroll animations
- Created glass-morphism component system
- Fixed all white-on-white contrast issues
- Added "outline-dark" button variant for gradients
- Enhanced all service page hero sections
- Implemented text-shadow utilities for gradients
- Added floating orbs and parallax backgrounds
- Created magnetic hover effects
- Upgraded typography with premium feel

### Technical Fixes
- Fixed turbopack compatibility issues
- Created separate dev commands (with/without turbopack)
- Fixed PowerShell execution policy issues
- Added WSL networking configuration
- Created Windows setup documentation

### Known Issues Resolved
- ✅ Button text visibility on gradients
- ✅ Trust signals section contrast
- ✅ Service page hero text visibility
- ✅ Outline buttons on dark backgrounds
- ✅ Metrics/stats box readability

---
*Last Updated: Phase 1 Complete + Apple-Quality UI Redesign - Ready for Phase 2*