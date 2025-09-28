import { useState } from "react";
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
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    console.log('Sidebar toggled:', !sidebarOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex h-screen bg-background">
          <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
          
          <div 
            className="flex-1 flex flex-col transition-all duration-300"
            style={{ 
              marginLeft: sidebarOpen ? "280px" : "64px",
            }}
          >
            <Header onMenuClick={toggleSidebar} />
            
            <main className="flex-1 overflow-auto">
              <Router />
            </main>
          </div>
        </div>
        
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;