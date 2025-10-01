# 🚀 Quick Start Guide

## Getting Started in 2 Steps

### Step 1: Install Dependencies
Double-click: **`setup.bat`**

### Step 2: Run the App
Double-click: **`start-dev.bat`**

---

## 🌐 Access the Application

Once the server starts, open your browser to:

### **Login Page**
```
http://localhost:5173/login
```

### **Signup Page**
```
http://localhost:5173/signup
```

### **Dashboard** (after login)
```
http://localhost:5173/
```

---

## ✨ What's New

### Login Page (`/login`)
- Username field
- Password field
- "Sign In" button
- Link to signup page

### Signup Page (`/signup`)
- Username field
- Password field
- "Create Account" button
- Link to login page

### Design Features
- ✅ Torah Bot branding with gold accent color
- ✅ Clean, centered layout
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Matches existing dashboard design
- ✅ No sidebar/header on auth pages for focused experience

---

## 📁 Files Created

| File | Purpose |
|------|---------|
| `client/src/pages/Login.tsx` | Login page component |
| `client/src/pages/Signup.tsx` | Signup page component |
| `start-dev.bat` | Quick start script |
| `WINDOWS_SETUP.md` | Detailed Windows setup guide |
| `IMPLEMENTATION_SUMMARY.md` | Complete implementation details |
| `QUICK_START.md` | This file |

---

## 🔧 Troubleshooting

### PowerShell Script Errors?
Use **Command Prompt** instead or run the `.bat` files by double-clicking them.

### Port 5173 Already in Use?
Close other applications using that port or change the port in `vite.config.ts`.

### Dependencies Won't Install?
1. Delete `node_modules` folder
2. Delete `package-lock.json`
3. Run `setup.bat` again

---

## 📚 More Information

- **Detailed Setup**: See `WINDOWS_SETUP.md`
- **Implementation Details**: See `IMPLEMENTATION_SUMMARY.md`
- **Design Guidelines**: See `design_guidelines.md`
- **General Info**: See `README.md`

---

## 🎨 Color Scheme

The login and signup pages use the Torah Bot color palette:

- **Gold Accent**: `hsl(45 85% 55%)` - Buttons, links
- **Deep Brown**: `hsl(25 35% 15%)` - Text
- **Cream**: `hsl(40 20% 95%)` - Background
- **White Cards**: Clean, modern look

---

## 💡 Tips

1. **First time?** Start with the login page to see the design
2. **Testing?** Use any username/password (no validation yet)
3. **Developing?** The app hot-reloads when you save files
4. **Need help?** Check the documentation files listed above

---

**Ready to start?** Double-click `start-dev.bat` and visit http://localhost:5173/login 🎉
