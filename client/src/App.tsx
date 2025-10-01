import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Dashboard from "@/pages/Dashboard";
import WeeklyPortion from "@/pages/WeeklyPortion";
import History from "@/pages/History";
import Profile from "@/pages/Profile";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import NotFound from "@/pages/not-found";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";

function Router() {
  return (
    <Switch>
      {/* Public routes - accessible without authentication */}
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      
      {/* Protected routes - require authentication */}
      <Route path="/">
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/weekly-portion">
        <ProtectedRoute>
          <WeeklyPortion />
        </ProtectedRoute>
      </Route>
      <Route path="/history">
        <ProtectedRoute>
          <History />
        </ProtectedRoute>
      </Route>
      <Route path="/accounts">
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      </Route>
      <Route path="/mishvah">
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/talmud">
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/subjects">
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/departments">
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/matoim">
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/holiday">
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location, setLocation] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if current route is auth page (login/signup)
  const isAuthPage = location === "/login" || location === "/signup";

  // Redirect to signup on initial load if at root and not authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    if (location === "/" && !isAuthenticated) {
      setLocation("/signup");
    }
  }, [location, setLocation]);

  // Check for mobile screen size with better detection
  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 1024 || 
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                    (window.innerWidth < 1200 && window.innerHeight < 800);
      
      setIsMobile(mobile);
      
      // Auto-open sidebar on desktop only
      if (!mobile && window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else if (mobile) {
        setSidebarOpen(false);
      }
    };

    // Initial check
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          {isAuthPage ? (
            // Auth pages (Login/Signup) - no sidebar or header
            <div className="flex h-screen bg-background overflow-hidden">
              <Router />
              <Toaster />
            </div>
          ) : (
            // Dashboard pages - with sidebar and header
            <div className="flex h-screen bg-background overflow-hidden">
              <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
              
              <div 
                className={`flex-1 flex flex-col transition-all duration-300 min-w-0 ${
                  isMobile ? 'ml-0 w-full' : (sidebarOpen ? 'ml-[280px]' : 'ml-16')
                }`}
              >
                <Header onMenuClick={toggleSidebar} sidebarOpen={sidebarOpen} />
                
                <main className="flex-1 overflow-auto">
                  <div className="min-h-full w-full">
                    <Router />
                  </div>
                </main>
              </div>
              
              <Toaster />
            </div>
          )}
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;