import { Search, Bell, Menu, Sun, Moon } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
    console.log('Theme toggled to:', isDark ? 'light' : 'dark');
  };

  return (
    <header className="h-16 bg-background border-b border-border flex items-center justify-between px-4 gap-4">
      {/* Left side - Menu button */}
      <button
        data-testid="button-menu-toggle"
        onClick={onMenuClick}
        className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground lg:hidden"
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