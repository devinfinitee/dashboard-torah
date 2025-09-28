import { Search, Bell, Menu, Sun, Moon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";

interface HeaderProps {
  onMenuClick: () => void;
  sidebarOpen: boolean;
}

export default function Header({ onMenuClick, sidebarOpen }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (menuButtonRef.current) {
      // Only animate after initial load
      const initialRotation = window.innerWidth >= 1024 ? 0 : 90;
      gsap.set(menuButtonRef.current, { rotation: sidebarOpen ? 0 : initialRotation });
      
      gsap.to(menuButtonRef.current, {
        rotation: sidebarOpen ? 0 : 90,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [sidebarOpen]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    console.log('Theme toggled to:', isDark ? 'light' : 'dark');
  };

  const handleMenuClick = () => {
    // Add click animation
    if (menuButtonRef.current) {
      gsap.to(menuButtonRef.current, {
        scale: 0.9,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.out"
      });
    }
    onMenuClick();
  };

  return (
    <header className="h-16 bg-background border-b border-border flex items-center justify-between px-4 gap-4 relative z-30">
      {/* Left side - Enhanced Menu button */}
      <button
        ref={menuButtonRef}
        data-testid="button-menu-toggle"
        onClick={handleMenuClick}
        className="p-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors duration-200 active:scale-95"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Search bar */}
      <div className="flex-1 max-w-lg relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            data-testid="input-search"
            type="search"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-muted rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            onChange={(e) => console.log('Searching for:', e.target.value)}
          />
        </div>
      </div>

      {/* Right side - Theme toggle, notifications, user */}
      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        <button
          data-testid="button-theme-toggle"
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
        >
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Notifications */}
        <button
          data-testid="button-notifications"
          onClick={() => console.log('Notifications clicked')}
          className="relative p-2 rounded-lg hover:bg-accent hover:text-accent-foreground"
        >
          <Bell className="w-5 h-5" />
          <div className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></div>
        </button>

        {/* User profile */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
              alt="Chaim Cohen"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block">
            <div className="text-sm font-medium text-foreground">Chaim Cohen</div>
          </div>
        </div>
      </div>
    </header>
  );
}