# Torah Bot - Windows Quick Start Guide

This project has been configured to run as a **frontend-only** application on Windows, with all Replit/backend dependencies removed.

## Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

## Quick Start (3 Steps)

### Option 1: Using Batch Files (Easiest)

1. **Double-click** `setup-windows.bat` (first time only)
2. **Double-click** `start-dev.bat` to run the app
3. Browser will open automatically at `http://localhost:5000`

### Option 2: Using Command Line

```bash
# 1. Install dependencies (first time only)
npm install

# 2. Start the development server
npm run dev
```

The app will automatically open in your browser at `http://localhost:5000`

## What Changed?

This project has been converted from a Replit-based full-stack app to a **Windows-friendly frontend-only** application:

### ✅ Removed
- All Replit plugins (`@replit/vite-plugin-*`)
- Backend dependencies (Express, Passport, Drizzle ORM, PostgreSQL)
- Server-side code coupling
- Database configuration

### ✅ Added
- **Auto-install script** (`scripts/ensure-install.cjs`) - Runs before `npm run dev`
- **Windows batch files** for easy setup and running
- **Vite configuration** optimized for Windows (port 5000, auto-open browser)
- Clean frontend-only `package.json`

### ✅ Configured
- **Port**: 5000 (instead of 5173)
- **Auto-open**: Browser opens automatically
- **Host**: Accessible on local network
- **Pre-dev check**: Automatically installs dependencies if missing

## Available Scripts

```bash
npm run dev      # Start development server (auto-installs deps if needed)
npm run build    # Build for production
npm run preview  # Preview production build
npm run check    # Type-check TypeScript
```

## Project Structure

```
DashTailTS/
├── client/              # Frontend source code
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── contexts/    # React contexts (Auth, etc.)
│   │   └── lib/         # Utilities
│   └── index.html       # Entry HTML
├── scripts/
│   └── ensure-install.cjs  # Auto-install script
├── vite.config.ts       # Vite configuration (Windows-optimized)
├── package.json         # Frontend-only dependencies
├── setup-windows.bat    # Initial setup script
└── start-dev.bat        # Quick start script
```

## Troubleshooting

### Dependencies not installing?
```bash
# Delete node_modules and package-lock.json
rmdir /s /q node_modules
del package-lock.json

# Reinstall
npm install
```

### Port 5000 already in use?
Edit `vite.config.ts` and change the port:
```typescript
server: {
  port: 3000,  // Change to any available port
  // ...
}
```

### npm install fails?
Try using PowerShell or CMD as Administrator:
```bash
npm install --legacy-peer-deps
```

### Still seeing Replit errors?
Make sure you're running the latest code. The Replit plugins have been completely removed from:
- `vite.config.ts`
- `package.json` (devDependencies)

## Features

- ✅ Modern React 18 with TypeScript
- ✅ Vite for fast development
- ✅ TailwindCSS for styling
- ✅ Radix UI components
- ✅ GSAP animations
- ✅ Recharts for data visualization
- ✅ React Query for state management
- ✅ Wouter for routing
- ✅ Auto-install dependencies before dev

## Authentication Flow

1. **First visit** → Signup page (`/signup`)
2. **After signup** → Login page (`/login`)
3. **After login** → Dashboard (`/`)

User data is stored in `localStorage` (frontend-only, no backend required).

## Notes

- This is a **frontend-only** application
- No backend server or database required
- All authentication is handled client-side via `localStorage`
- Perfect for development, prototyping, and static deployment

## Support

If you encounter any issues:
1. Make sure Node.js is installed: `node --version`
2. Try deleting `node_modules` and reinstalling
3. Check that port 5000 is available
4. Run as Administrator if permission errors occur

---

**Ready to start?** Just run `npm run dev` or double-click `start-dev.bat`! 🚀
