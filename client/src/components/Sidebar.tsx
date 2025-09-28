import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { gsap } from "gsap";
import { 
  Home, 
  BookOpen, 
  History, 
  User, 
  Menu,
  ScrollText,
  Calendar,
  Settings,
  HelpCircle
} from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  { path: "/", label: "Main Dashboard", icon: Home },
  { path: "/mishvah", label: "Mishvah", icon: BookOpen },
  { path: "/talmud", label: "Talmud", icon: ScrollText },
  { path: "/weekly-portion", label: "Weekly Torah Portion", icon: Calendar, active: true },
  { path: "/subjects", label: "Subjects", icon: BookOpen },
  { path: "/departments", label: "Departments", icon: Settings },
  { path: "/matoim", label: "Matoim", icon: HelpCircle },
  { path: "/accounts", label: "Accounts", icon: User },
  { path: "/holiday", label: "Holiday", icon: Calendar },
  { path: "/history", label: "History & Resources", icon: History },
];

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [location] = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    if (sidebarRef.current) {
      gsap.to(sidebarRef.current, {
        width: isOpen ? "280px" : "64px",
        duration: 0.3,
        ease: "power2.out"
      });
      setCollapsed(!isOpen);
    }
  }, [isOpen]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      <div
        ref={sidebarRef}
        className="fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border z-50 overflow-hidden"
        style={{ width: isOpen ? "280px" : "64px" }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-sidebar-border">
          <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg flex-shrink-0">
            <ScrollText className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="text-lg font-semibold text-sidebar-foreground">
              Torah Bot
            </span>
          )}
        </div>

        {/* Navigation */}
        <div className="p-4 space-y-2">
          {!collapsed && (
            <div className="text-xs text-sidebar-foreground/60 mb-4 uppercase tracking-wider">
              Main Menu
            </div>
          )}
          
          {menuItems.map((item) => {
            const isActive = item.path === location || item.active;
            const Icon = item.icon;
            
            return (
              <Link key={item.path} href={item.path}>
                <div
                  data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`
                    flex items-center gap-3 px-3 py-2 rounded-lg transition-colors cursor-pointer
                    ${isActive 
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground' 
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                    }
                  `}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                  {!collapsed && item.path !== "/" && (
                    <div className="ml-auto">
                      <div className="w-1 h-1 bg-current rounded-full opacity-60" />
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}