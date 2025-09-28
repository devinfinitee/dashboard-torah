import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
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
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/weekly-portion" component={WeeklyPortion} />
      <Route path="/history" component={History} />
      <Route path="/accounts" component={Profile} />
      <Route path="/mishvah" component={Dashboard} />
      <Route path="/talmud" component={Dashboard} />
      <Route path="/subjects" component={Dashboard} />
      <Route path="/departments" component={Dashboard} />
      <Route path="/matoim" component={Dashboard} />
      <Route path="/holiday" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
      <TooltipProvider>
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
        </div>
        
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;