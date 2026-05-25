# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a premium interior design website for Shaha Enterprises built with React 18, Vite, and TailwindCSS. The site features a luxury theme with dark/gold/white colors, extensive GSAP animations, glassmorphism effects, and modern responsive design.

## Common Commands

### Development
```bash
# Start development server (runs on localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Lint JavaScript/JSX files
npm run lint
```

### Testing
- No test runner is configured in this repository. There are currently no commands for running single tests or test suites.

### Package Management
```bash
# Install dependencies
npm install

# Add new dependency
npm install <package-name>

# Add dev dependency  
npm install -D <package-name>
```

## Architecture & Structure

### Component Architecture
- **Single-page application** with all sections in one App.jsx
- **Component-based structure** in `src/components/` with dedicated files for each major section
- **Section order**: Navbar → Hero → About → Services → Portfolio → WhyChooseUs → Testimonials → Contact → Footer

### Animation System
- **GSAP ScrollTrigger** is registered globally in App.jsx and used throughout components
- **Framer Motion** for React-specific animations and hover effects
- **Combined approach**: GSAP for scroll-based animations, Framer Motion for component-level interactions

### Styling System
- **TailwindCSS** with custom configuration in `tailwind.config.cjs`
- **Custom color palette**: Gold variations (`gold.300`, `gold.400`, `gold.500`) and dark theme colors (`dark.900`, `dark.800`, `dark.700`)
- **Typography**: Montserrat for headings, Lato for body text
- **Glassmorphism effects**: Custom backdrop blur and semi-transparent backgrounds

### Key Design Patterns
- **Consistent section structure**: Each component section uses similar padding/margin patterns
- **Luxury theming**: Dark backgrounds with gold accents and white text
- **Responsive design**: Mobile-first approach with responsive utilities
- **Animation triggers**: Most animations tied to scroll position using ScrollTrigger

## Development Notes

### Custom Configuration
- **Vite config**: Server runs on port 3000 with host access enabled
- **ESLint config**: TypeScript-aware with React-specific rules, unused vars as warnings
- **TailwindCSS**: Extended with custom colors, fonts, shadows, and backdrop blur utilities

### Animation Guidelines
- GSAP ScrollTrigger is already registered - use `gsap.to()`, `gsap.from()`, etc. with ScrollTrigger
- Framer Motion variants should follow existing patterns for consistency
- Hover effects typically use scale transforms and glow shadows

### Styling Conventions
- Use custom color classes: `text-gold-300`, `bg-dark-900`, `border-gold-400`
- Glassmorphism: Combine `backdrop-blur-md`, `bg-opacity-10`, and border classes
- Responsive breakpoints: Follow mobile-first approach with `sm:`, `md:`, `lg:`, `xl:` prefixes

### Content Structure
The website represents **Arch Taufiq Contractor** and **Shaha Enterprises** with services in interior design, office design, and bungalow construction. Contact information and business details are throughout the components and should be updated consistently when changed.
