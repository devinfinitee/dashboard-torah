# Torah Bot Dashboard

## Overview

Torah Bot Dashboard is a React-based educational web application designed for tracking Torah study progress and engagement. The platform provides users with personalized insights, weekly Torah portion tracking, study analytics, and interactive learning tools. Built with modern web technologies, it features a comprehensive dashboard interface with collapsible navigation, progress visualization, and study session management.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Shadcn/UI components built on Radix UI primitives for accessibility and consistency
- **Styling**: Tailwind CSS with custom design system featuring Torah-inspired color palette (deep browns, golds, cream backgrounds)
- **Animation**: GSAP for smooth sidebar transitions and interactive animations
- **State Management**: React hooks with TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for API development
- **Database Layer**: Drizzle ORM configured for PostgreSQL with Neon Database integration
- **Session Storage**: Connect-pg-simple for PostgreSQL-backed session management
- **Storage Interface**: Abstracted storage layer supporting both memory-based and database implementations
- **Development**: Hot module replacement and middleware-based development setup

### Component Architecture
- **Layout System**: Responsive sidebar navigation with collapsible functionality
- **Card-Based UI**: Modular components for stats, lessons, progress charts, and study sessions
- **Modal System**: Interactive Torah Bot modal for study assistance
- **Theme Support**: Light/dark mode toggle with CSS custom properties
- **Chart Integration**: Recharts for progress visualization and analytics

### Data Models
- **User Management**: User authentication with username/password system
- **Study Tracking**: Progress monitoring, milestone tracking, and session history
- **Content Structure**: Torah portions, lessons, and educational materials organization

### Design System
- **Typography**: Inter font family with hierarchical weight system
- **Color Palette**: Educational interface with warm browns, gold accents, and cream backgrounds
- **Spacing**: Consistent Tailwind spacing units (2, 4, 6, 8)
- **Component Library**: Reusable UI components with variant-based styling using class-variance-authority

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation
- **Routing**: Wouter for declarative routing
- **State Management**: TanStack React Query for server state synchronization

### UI and Styling
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS for utility-first styling
- **Animation**: GSAP for performance-optimized animations
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React for consistent iconography

### Database and Backend
- **Database**: Neon Database (PostgreSQL) for data persistence
- **ORM**: Drizzle ORM with Drizzle Kit for schema management
- **Session Store**: Connect-pg-simple for PostgreSQL session storage
- **Validation**: Zod for runtime type checking and validation

### Development Tools
- **Build System**: Vite with React plugin for fast development
- **TypeScript**: Full TypeScript support across frontend and backend
- **Development Plugins**: Replit-specific plugins for runtime error handling and development banners

### Utility Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Class Management**: clsx and tailwind-merge for conditional styling
- **Carousel**: Embla Carousel for content sliders
- **Command Interface**: cmdk for command palette functionality