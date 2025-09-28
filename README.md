# DashTailTS - Torah Learning Dashboard

A modern, responsive Torah learning dashboard built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation & Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   
   **Option A: Full-stack development (with backend)**
   ```bash
   npm run dev
   ```
   This will start both the client and server. The app will be available at `http://localhost:5000`

   **Option B: Frontend-only development (recommended for preview)**
   ```bash
   npm run dev:client
   ```
   This will start only the React frontend. The app will be available at `http://localhost:5173`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Interactive Sidebar**: Collapsible navigation with smooth animations
- **Torah Study Tracking**: Progress monitoring and session management
- **Modern UI**: Clean, accessible interface with dark/light theme support
- **Study Analytics**: Progress charts and personalized insights

## 🛠 Development Scripts

- `npm run dev` - Start full-stack development server
- `npm run dev:client` - Start frontend-only development server
- `npm run dev:server` - Start backend-only development server
- `npm run build` - Build for production
- `npm run build:client` - Build frontend only
- `npm run preview` - Preview production build
- `npm run check` - Run TypeScript type checking

## 📁 Project Structure

```
DashTailTS/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
├── server/                # Backend Express server
├── shared/                # Shared types and utilities
└── dist/                  # Production build output
```

## 🎨 Recent Improvements

### Sidebar Fixes
- ✅ Fixed text visibility issues with GSAP animations
- ✅ Improved icon alignment in collapsed state
- ✅ Added hover tooltips for collapsed menu items
- ✅ Better animation timing and state management

### Mobile Responsiveness
- ✅ Responsive grid layouts (2 cols mobile → 4 cols desktop)
- ✅ Adaptive header with responsive search bar
- ✅ Improved button layouts and text wrapping
- ✅ Better spacing and typography scaling
- ✅ Overflow handling for long content

## 🌐 Deployment

This project is configured for easy deployment to platforms like:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

For deployment, run:
```bash
npm run build
```

The built files will be in the `dist/public` directory.

## 🔧 Configuration

- **Vite**: Modern build tool with hot reload
- **Tailwind CSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript
- **GSAP**: High-performance animations
- **React Query**: Data fetching and caching

## 📝 Notes

- The project was originally designed for Replit but has been configured for local development
- All Replit-specific plugins are conditionally loaded only when running on Replit
- Cross-platform compatibility ensured with `cross-env`
- TypeScript errors in IDE are expected until dependencies are installed

## 🤝 Contributing

1. Install dependencies: `npm install`
2. Start development server: `npm run dev:client`
3. Make your changes
4. Test on different screen sizes
5. Build and test: `npm run build && npm run preview`

---

**Happy coding! 🎉**
