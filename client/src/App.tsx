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
import ContinueLearning from "@/pages/ContinueLearning";
import Favorites from "@/pages/Favorites";
import MyPDFs from "@/pages/MyPDFs";

// Lesson pages
import WeeklyTorahPortion from "@/pages/lessons/WeeklyTorahPortion";
import Mishnah from "@/pages/lessons/Mishnah";
import Talmud from "@/pages/lessons/Talmud";
import DailyHalacha from "@/pages/lessons/DailyHalacha";
import EthicsMussar from "@/pages/lessons/EthicsMussar";
import AggadicStories from "@/pages/lessons/AggadicStories";
import Holidays from "@/pages/lessons/Holidays";
import BiblicalFigures from "@/pages/lessons/BiblicalFigures";
import Shabbat from "@/pages/lessons/Shabbat";
import Kashrut from "@/pages/lessons/Kashrut";
import Relationships from "@/pages/lessons/Relationships";
import LikuteiSichos from "@/pages/lessons/LikuteiSichos";

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
      
      {/* Continue Learning, Favorites, PDFs */}
      <Route path="/continue-learning">
        <ProtectedRoute>
          <ContinueLearning />
        </ProtectedRoute>
      </Route>
      <Route path="/favorites">
        <ProtectedRoute>
          <Favorites />
        </ProtectedRoute>
      </Route>
      <Route path="/my-pdfs">
        <ProtectedRoute>
          <MyPDFs />
        </ProtectedRoute>
      </Route>
      
      {/* Lesson Routes */}
      <Route path="/lessons/weekly-portion">
        <ProtectedRoute>
          <WeeklyTorahPortion />
        </ProtectedRoute>
      </Route>
      <Route path="/lessons/mishnah">
        <ProtectedRoute>
          <Mishnah />
        </ProtectedRoute>
      </Route>
      <Route path="/lessons/talmud">
        <ProtectedRoute>
          <Talmud />
        </ProtectedRoute>
      </Route>
      <Route path="/lessons/daily-halacha">
        <ProtectedRoute>
          <DailyHalacha />
        </ProtectedRoute>
      </Route>
      <Route path="/lessons/ethics-mussar">
        <ProtectedRoute>
          <EthicsMussar />
        </ProtectedRoute>
      </Route>
      <Route path="/lessons/aggadic-stories">
        <ProtectedRoute>
          <AggadicStories />
        </ProtectedRoute>
      </Route>
      <Route path="/lessons/holidays">
        <ProtectedRoute>
          <Holidays />
        </ProtectedRoute>
      </Route>
      <Route path="/lessons/biblical-figures">
        <ProtectedRoute>
          <BiblicalFigures />
        </ProtectedRoute>
      </Route>
      <Route path="/lessons/shabbat">
        <ProtectedRoute>
          <Shabbat />
        </ProtectedRoute>
      </Route>
      <Route path="/lessons/kashrut">
        <ProtectedRoute>
          <Kashrut />
        </ProtectedRoute>
      </Route>
      <Route path="/lessons/relationships">
        <ProtectedRoute>
          <Relationships />
        </ProtectedRoute>
      </Route>
      <Route path="/lessons/likutei-sichos">
        <ProtectedRoute>
          <LikuteiSichos />
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