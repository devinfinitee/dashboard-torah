# Windows Setup Guide - Torah Bot Dashboard

This guide will help you set up and run the Torah Bot Dashboard on Windows.

## Prerequisites

Before you begin, make sure you have the following installed:

1. **Node.js** (v18 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: Open PowerShell and run `node --version`

2. **npm** (comes with Node.js)
   - Verify installation: `npm --version`

## Quick Start

### Option 1: Using the Setup Scripts (Recommended)

1. **First Time Setup:**
   - Open the project folder in File Explorer
   - Double-click `setup.bat`
   - Wait for dependencies to install

2. **Running the App:**
   - Double-click `start-dev.bat`
   - Your browser should open automatically
   - If not, navigate to http://localhost:5173/login

### Option 2: Using Command Prompt (If PowerShell is Restricted)

1. Open **Command Prompt** (not PowerShell)
2. Navigate to the project directory:
   ```cmd
   cd "C:\Users\victor ogunlade\Downloads\DashTailTS\DashTailTS"
   ```

3. Install dependencies (first time only):
   ```cmd
   npm install
   ```

4. Start the development server:
   ```cmd
   npm run dev:client
   ```

### Option 3: Fix PowerShell Execution Policy (Advanced)

If you prefer using PowerShell, run this command as Administrator:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then you can use PowerShell normally.

## Running the Application

### Frontend Only (Recommended for Windows)

```powershell
npm run dev:client
```

The application will be available at: **http://localhost:5173**

### Full-Stack Mode

```powershell
npm run dev
```

The application will be available at: **http://localhost:5000**

## Accessing the Application

### Authentication Pages

- **Login Page**: http://localhost:5173/login
- **Signup Page**: http://localhost:5173/signup

### Dashboard Pages

After logging in, you can access:

- **Dashboard**: http://localhost:5173/
- **Weekly Portion**: http://localhost:5173/weekly-portion
- **History**: http://localhost:5173/history
- **Profile**: http://localhost:5173/accounts

## New Features

### Login & Signup Pages

The application now includes authentication pages:

1. **Login Page** (`/login`)
   - Username and password fields
   - Link to signup page for new users
   - Matches the Torah Bot design with gold accent colors

2. **Signup Page** (`/signup`)
   - Username and password fields
   - Link to login page for existing users
   - Same consistent design as the dashboard

### Design Features

Both pages follow the design guidelines:
- **Colors**: Deep brown, warm brown, and gold accent (45 85% 55%)
- **Typography**: Inter font family
- **Components**: Shadcn UI components with custom styling
- **Responsive**: Works on mobile, tablet, and desktop

## Troubleshooting

### Port Already in Use

If you see an error about port 5173 being in use:

1. Close any other applications using that port
2. Or change the port in `vite.config.ts`

### Dependencies Installation Fails

If `npm install` fails:

1. Delete the `node_modules` folder
2. Delete `package-lock.json`
3. Run `npm install` again

### TypeScript Errors in IDE

If you see TypeScript errors in your IDE:

1. Restart your IDE
2. Run `npm run check` to verify there are no actual errors
3. The application should still run correctly

## Development Commands

- `npm run dev:client` - Start frontend development server
- `npm run dev:server` - Start backend server only
- `npm run dev` - Start full-stack development
- `npm run build` - Build for production
- `npm run check` - Run TypeScript type checking

## Project Structure

```
DashTailTS/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.tsx      (NEW - Login page)
│   │   │   ├── Signup.tsx     (NEW - Signup page)
│   │   │   ├── Dashboard.tsx
│   │   │   ├── WeeklyPortion.tsx
│   │   │   ├── History.tsx
│   │   │   └── Profile.tsx
│   │   ├── components/
│   │   │   ├── ui/           (Shadcn UI components)
│   │   │   ├── Sidebar.tsx
│   │   │   └── Header.tsx
│   │   ├── App.tsx           (UPDATED - Added auth routing)
│   │   └── index.css
│   └── index.html
├── server/
├── package.json
├── setup.bat
└── WINDOWS_SETUP.md          (This file)
```

## Notes

- The authentication is currently frontend-only (no backend validation yet)
- Both login and signup pages will redirect to the dashboard after form submission
- The sidebar and header are hidden on login/signup pages for a clean authentication experience

## Support

For issues or questions, please refer to the main README.md or contact the development team.
