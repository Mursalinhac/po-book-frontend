# Legacy React App - Preserved for Reference

## Overview
This directory contains the original React application that was migrated to Next.js. It has been preserved for reference, testing, and comparison purposes during and after the migration process.

## Original Application Details
- **Name**: po-book-frontend
- **Version**: 0.1.0
- **Framework**: Create React App (React 18.2.0)
- **Build Tool**: react-scripts 5.0.1
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Bootstrap
- **UI Components**: shadcn/ui (legacy configuration)

## Directory Structure
```
legacy-react-app/
├── package.json              # Original React app dependencies
├── package-lock.json         # Dependency lock file
├── yarn.lock                 # Yarn lock file
├── tsconfig.json             # TypeScript configuration (Create React App)
├── tailwind.config.js        # Tailwind CSS configuration (legacy)
├── components.json           # shadcn/ui configuration (legacy)
├── postcss.config.js         # PostCSS configuration
├── README.md                 # Original React app README
├── src/                      # Source code
│   ├── components/           # React components
│   ├── css/                  # Stylesheets
│   ├── images/               # Image assets
│   ├── lib/                  # Utility libraries
│   ├── types/                # TypeScript type definitions
│   ├── App.tsx               # Main App component
│   └── index.js              # Application entry point
├── public/                   # Public assets
├── build/                    # Production build output (if exists)
└── node_modules/             # Dependencies
```

## Key Features Migrated
- Customer information forms
- Order management system
- Price calculation and preview
- Print functionality
- Trade-in information handling
- Vehicle configuration options
- Bootstrap-based UI components

## Migration Status
✅ **COMPLETED** - This app has been successfully migrated to Next.js

The migrated version includes:
- Next.js 15.3.4 with App Router
- TypeScript with improved type safety
- Tailwind CSS with custom configurations
- shadcn/ui components
- Modern React patterns and hooks
- Improved build and development processes

## Usage Instructions

### To Run the Legacy App (if needed)
```bash
cd legacy-react-app
npm install
npm start
```

### To Build the Legacy App
```bash
cd legacy-react-app
npm run build
```

## Important Notes
- This legacy app is preserved for reference only
- Active development should use the migrated Next.js application
- The legacy app may have outdated dependencies
- Use this for comparison and testing purposes during migration validation

## Migration Documentation
For complete migration details, see:
- `../MIGRATION_ROADMAP.md` - Comprehensive migration documentation
- `../PROJECT_RESTRUCTURING_TASKS.md` - Restructuring task details

## Preservation Date
**Preserved on**: June 20, 2025
**Migration Phase**: Project Restructuring (Post-Migration)
**Status**: Archived for reference

---

*This legacy application has been preserved to ensure no work is lost and to provide a reference point for future development and troubleshooting.*
