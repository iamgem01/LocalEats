# LocalEats - Vietnamese Local Specialty O2O Platform

## Overview

LocalEats is an Online-to-Offline (O2O) e-commerce platform connecting Vietnamese farmers, artisans, and local specialty producers directly with consumers. The platform emphasizes storytelling, transparency, and authenticity, featuring video documentation of production processes, QR code traceability, and group-buying features to reduce shipping costs.

**Core Value Proposition**: "Xem Tận Mắt, Mua Tận Gốc" (See It Yourself, Buy From Source) - eliminating intermediaries and providing transparent product origins through visual storytelling.

**Target Market**: Initially focused on Da Nang and Central Vietnam, with plans to expand regionally.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom theme configuration following design guidelines
- **Typography**: Inter (primary) and Playfair Display (storytelling headlines) from Google Fonts

**Design System**:
- Follows reference-based approach inspired by Etsy, Airbnb, and artisan e-commerce platforms
- Custom color system with HSL variables supporting light/dark modes
- Spacing system based on Tailwind's standardized units (2, 4, 6, 8, 12, 16, 20, 24)
- Responsive grid: 1 column (mobile) → 2 columns (tablet) → 3-4 columns (desktop)

**Key Pages**:
- Home: Hero section, featured products, farmer profiles, regional highlights, group-buy banners
- Products: Filterable product catalog with search, region, and category filters
- Farmers: Directory of producers with profiles, specialties, and product counts
- About: Mission, values, team information

**Component Structure**:
- Reusable components: ProductCard, FarmerCard, RegionCard, GroupBuyBanner
- Layout components: Header (navigation, search, cart), Footer (links, newsletter)
- UI primitives from Shadcn/ui for consistency

### Backend Architecture

**Runtime**: Node.js with Express.js
- **Module System**: ESM (ES Modules)
- **Language**: TypeScript for type safety
- **Development Server**: tsx for TypeScript execution in development
- **Production Build**: esbuild for bundling server code

**Current Implementation**: Minimal backend with placeholder routes
- Storage abstraction layer (IStorage interface) with in-memory implementation
- Prepared for database integration (schema defined but routes not yet implemented)
- Session management scaffolding with connect-pg-simple

**API Structure**: RESTful endpoints under `/api` prefix (to be implemented)

### Data Storage

**ORM**: Drizzle ORM with PostgreSQL dialect
- **Database Provider**: Neon (serverless PostgreSQL) via `@neondatabase/serverless`
- **Connection**: WebSocket-based connection pooling for serverless environments
- **Schema Location**: `shared/schema.ts` for type sharing between client and server
- **Migrations**: Managed through drizzle-kit, output to `./migrations` directory

**Current Schema**:
- Users table with UUID primary keys, username/password authentication
- Schema uses Zod for runtime validation via drizzle-zod integration

**Design Decision**: Drizzle chosen for its TypeScript-first approach, lightweight footprint, and excellent type inference, aligning with the project's emphasis on type safety.

### Authentication & Authorization

**Current State**: Basic user schema defined, no authentication implementation yet
- User model includes username and password fields
- Storage interface includes methods for user CRUD operations
- Session store configured for PostgreSQL via connect-pg-simple

**Planned Approach**: Session-based authentication (infrastructure prepared but not active)

### Project Structure

```
├── client/              # Frontend application
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── pages/       # Route pages
│   │   ├── hooks/       # Custom React hooks
│   │   ├── lib/         # Utilities and query client
│   │   └── index.css    # Global styles with CSS variables
│   └── index.html       # HTML entry point
├── server/              # Backend application
│   ├── index.ts         # Express server setup
│   ├── routes.ts        # API route registration
│   ├── storage.ts       # Data access abstraction
│   ├── db.ts            # Database connection
│   └── vite.ts          # Vite dev server integration
├── shared/              # Shared types and schemas
│   └── schema.ts        # Database schema and Zod validators
├── attached_assets/     # Project documentation and images
└── migrations/          # Database migration files
```

## External Dependencies

### Third-Party Services

**Database**: Neon PostgreSQL (serverless)
- Accessed via `DATABASE_URL` environment variable
- WebSocket support for serverless connections

**Build & Development Tools**:
- Vite for frontend bundling and development server
- Replit-specific plugins for development (cartographer, dev-banner, runtime-error-modal)

### Key NPM Packages

**UI & Styling**:
- `@radix-ui/*`: Unstyled, accessible component primitives (accordion, dialog, dropdown, etc.)
- `tailwindcss`: Utility-first CSS framework
- `class-variance-authority`: Type-safe variant management for components
- `lucide-react`: Icon library
- `embla-carousel-react`: Carousel functionality

**State & Data**:
- `@tanstack/react-query`: Server state management and caching
- `drizzle-orm`: TypeScript ORM for PostgreSQL
- `drizzle-zod`: Zod schema generation from Drizzle schemas
- `zod`: Runtime type validation

**Forms & Validation**:
- `react-hook-form`: Form state management
- `@hookform/resolvers`: Validation resolver integration

**Routing & Navigation**:
- `wouter`: Lightweight routing library for React

**Backend**:
- `express`: Web framework
- `connect-pg-simple`: PostgreSQL session store
- `ws`: WebSocket client for Neon database connections

**Development**:
- `tsx`: TypeScript execution for development
- `esbuild`: Fast bundler for production builds
- `vite`: Frontend build tool and dev server

### Asset Management

**Images**: Stored in `attached_assets/generated_images/` directory
- Vietnamese agricultural imagery (farmers, products, landscapes)
- Imported statically in components via Vite's asset handling
- Alias configured: `@assets` points to `attached_assets` directory

### Configuration Files

- `drizzle.config.ts`: Database migration and schema configuration
- `tailwind.config.ts`: Custom theme with extended colors, border radius, and shadows
- `vite.config.ts`: Build configuration with path aliases and Replit plugins
- `tsconfig.json`: TypeScript compiler options with path mapping
- `components.json`: Shadcn/ui configuration for component generation