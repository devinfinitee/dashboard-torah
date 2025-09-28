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
      // Kill any existing animations
      gsap.killTweensOf('.sidebar-text');
      
      const tl = gsap.timeline();
      
      // Animate sidebar width
      tl.to(sidebarRef.current, {
        width: isOpen ? "280px" : "64px",
        duration: 0.4,
        ease: "power3.out"
      });
      
      if (isOpen) {
        setCollapsed(false);
        // Delay text animation until after sidebar opens
        tl.call(() => {
          const textElements = sidebarRef.current?.querySelectorAll('.sidebar-text');
          if (textElements && textElements.length > 0) {
            gsap.fromTo(textElements, 
              { opacity: 0, x: -20 },
              {
                opacity: 1,
                x: 0,
                duration: 0.3,
                stagger: 0.05,
                ease: "power2.out"
              }
            );
          }
        }, [], "+=0.1");
      } else {
        // Hide text immediately when closing
        const textElements = sidebarRef.current.querySelectorAll('.sidebar-text');
        if (textElements && textElements.length > 0) {
          gsap.to(textElements, {
            opacity: 0,
            x: -20,
            duration: 0.2,
            ease: "power2.in"
          });
        }
        tl.call(() => setCollapsed(true), [], "+=0.2");
      }
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
            <span className="sidebar-text text-lg font-semibold text-sidebar-foreground">
              Torah Bot
            </span>
          )}
        </div>

        {/* Navigation */}
        <div className="p-4 space-y-2">
          {!collapsed && (
            <div className="sidebar-text text-xs text-sidebar-foreground/60 mb-4 uppercase tracking-wider">
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
                    <span className="sidebar-text text-sm font-medium">{item.label}</span>
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