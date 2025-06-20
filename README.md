# Corvette Purchase Order System

A modern, full-featured web application for creating and managing Corvette purchase orders. Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🚗 Overview

The Corvette Purchase Order System enables dealers and customers to configure, customize, and generate purchase orders for all Corvette models including Stingray, Z06, ERAY, and ZR1. The application provides comprehensive forms for customer information, trade-in details, factory-installed options, dealer-installed options, and generates professional purchase order documents.

### Key Features

- **Vehicle Configuration**: Support for all 4 Corvette models with detailed customization options
- **Customer Management**: Comprehensive customer information forms with validation
- **Trade-in Processing**: Complete trade-in vehicle information and valuation
- **Options Management**: Factory and dealer-installed options with real-time pricing
- **Price Calculation**: Dynamic pricing with real-time updates based on selections
- **Purchase Orders**: Professional document generation with print functionality
- **Responsive Design**: Mobile-first design that works on all devices

## 🛠️ Tech Stack

### Current Stack (Post-Migration)
- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript 5.6.3 with strict mode
- **Styling**: Tailwind CSS 3.4.17 with custom configuration
- **Components**: shadcn/ui with Radix UI primitives
- **Build Tool**: Next.js with Turbopack
- **Package Manager**: npm

### Backend Integration
- **API Server**: Node.js backend on `localhost:3001`
- **API Client**: Fetch-based with TypeScript interfaces
- **Environment**: Development configuration with API rewrites

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm
- Backend API server running on port 3001

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd po-book-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Development Commands

```bash
# Development
npm run dev          # Start development server with hot reload

# Building
npm run build        # Create production build
npm run start        # Start production server

# Quality Assurance
npm run lint         # Run ESLint
npx tsc --noEmit     # Type check without emitting files
```

## 📁 Project Structure

```
po-book-frontend/                    # Repository Root
├── src/                            # Next.js Source Code
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page
│   │   └── orders/new/[model]/     # Dynamic model routes
│   ├── components/                 # React Components (28 components)
│   │   ├── ui/                     # shadcn/ui components
│   │   ├── Navigation.tsx          # Navigation component
│   │   ├── CustomerInfoForm.tsx    # Customer form
│   │   └── ...                     # Other components
│   ├── lib/                        # Utility Libraries
│   ├── types/                      # TypeScript Definitions
│   └── css/                        # Stylesheets
├── public/                         # Public Assets
│   ├── images/                     # Vehicle images
│   └── *.svg                       # Icon files
├── legacy-react-app/               # Original React App Backup
├── node_modules/                   # Dependencies (376 packages)
├── .next/                          # Next.js Build Output
├── package.json                    # Next.js Dependencies
├── next.config.ts                  # Next.js Configuration
├── tsconfig.json                   # TypeScript Configuration
├── tailwind.config.js              # Tailwind CSS Configuration
├── components.json                 # shadcn/ui Configuration
└── [Documentation Files]          # Migration and project docs
```

## 🔄 Migration History

This project has undergone a comprehensive **4-phase migration** from Create React App to a modern Next.js stack:

### ✅ Completed Migration Phases

| Phase | Technology | Status | Key Achievements |
|-------|------------|--------|------------------|
| **Phase 1** | TypeScript | ✅ Complete | 69→0 errors, 100% functionality preserved |
| **Phase 2** | Tailwind CSS | ✅ Complete | Bootstrap→Tailwind, visual parity restored |
| **Phase 3** | shadcn/ui | ✅ Complete | Modern components, enhanced accessibility |
| **Phase 4** | Next.js | ✅ Complete | App Router, performance optimization, SEO |
| **Phase 5** | Restructuring | ✅ Complete | Repository reorganized, legacy app preserved |

**Migration Completed**: June 2025  
**Total Duration**: 5-7 weeks  
**Success Rate**: 100% with zero breaking changes

### Legacy Application

The original Create React App is preserved in the `legacy-react-app/` directory for reference and comparison purposes. See [`legacy-react-app/LEGACY_APP_INFO.md`](legacy-react-app/LEGACY_APP_INFO.md) for details.

## 🔧 Development Workflow

### Getting Started
1. Ensure the backend API server is running on `localhost:3001`
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open browser to `http://localhost:3000`

### Project Guidelines
- **Components**: Place in `src/components/` with TypeScript
- **Pages**: Use App Router in `src/app/`
- **Utilities**: Add to `src/lib/`
- **Types**: Define in `src/types/`
- **Styles**: Global styles in `src/css/`
- **Assets**: Public files in `public/`

### Code Quality
- TypeScript strict mode enabled
- ESLint with Next.js TypeScript rules
- Prettier for code formatting
- shadcn/ui component patterns

## 🌐 API Integration

### Backend Configuration
- **Base URL**: `http://localhost:3001`
- **Health Check**: `GET /health`
- **Price Lists**: `GET /pricelist/{model}`
- **Environment**: Configured via `.env.local`

### API Client
```typescript
// Example API usage
import { apiClient } from '@/lib/api';

const priceList = await apiClient.getPriceList('stingray');
```

## 📚 Documentation

### Comprehensive Documentation Available
- **[MIGRATION_COMPLETION_REPORT.md](MIGRATION_COMPLETION_REPORT.md)** - Complete migration documentation
- **[PROJECT_RESTRUCTURING_TASKS.md](PROJECT_RESTRUCTURING_TASKS.md)** - Detailed task breakdown and results
- **[MIGRATION_ROADMAP.md](MIGRATION_ROADMAP.md)** - Original migration planning
- **[legacy-react-app/LEGACY_APP_INFO.md](legacy-react-app/LEGACY_APP_INFO.md)** - Legacy app preservation guide

## 🎯 Performance & Quality

### Metrics Achieved
- **Bundle Size**: 102 kB shared + route-specific chunks
- **Build Time**: Optimized with Turbopack
- **Type Safety**: Zero TypeScript errors
- **Code Quality**: Zero ESLint warnings
- **Accessibility**: WCAG 2.1 AA compliance
- **Performance**: Fast development with hot reload

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

### Development Setup
1. Follow the Quick Start guide above
2. Create feature branches from `main`
3. Ensure all tests pass before submitting PRs
4. Follow TypeScript and ESLint guidelines
5. Use shadcn/ui components for consistency

### Testing
- Use Playwright for end-to-end testing
- Maintain visual consistency with existing design
- Test all Corvette models and form flows
- Verify API integration functionality

## 📄 License

[Add your license information here]

## 🆘 Support

For technical questions or support:
1. Check the comprehensive documentation in this repository
2. Review the migration reports for implementation details
3. Refer to the legacy app for comparison if needed

---

**Status**: ✅ Production Ready  
**Last Updated**: June 2025  
**Migration**: Complete and Successful  

*The Corvette Purchase Order System now operates on a modern, scalable, and maintainable Next.js foundation with excellent developer experience and performance characteristics.*
