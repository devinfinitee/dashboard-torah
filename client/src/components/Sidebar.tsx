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
  HelpCircle,
  X
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
  const [collapsed, setCollapsed] = useState(!isOpen);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Manage body scroll on mobile when sidebar is open
  useEffect(() => {
    if (isMobile) {
      if (isOpen) {
        document.body.classList.add('sidebar-open');
      } else {
        document.body.classList.remove('sidebar-open');
      }
    }
    
    return () => {
      document.body.classList.remove('sidebar-open');
    };
  }, [isOpen, isMobile]);

  useEffect(() => {
    if (sidebarRef.current) {
      // Prevent multiple animations
      if (isAnimating) return;
      
      setIsAnimating(true);
      
      // Kill any existing animations completely
      gsap.killTweensOf('.sidebar-text');
      gsap.killTweensOf(sidebarRef.current);
      gsap.set('.sidebar-text', { clearProps: "all" });
      
      const tl = gsap.timeline({
        onComplete: () => {
          setIsAnimating(false);
          // Ensure final state is correct
          if (isOpen) {
            setCollapsed(false);
          } else {
            setCollapsed(true);
          }
        }
      });
      
      if (isOpen) {
        // Opening animation
        setCollapsed(false);
        
        if (isMobile) {
          // Mobile: slide in from left
          gsap.set(sidebarRef.current, { 
            width: "320px",
            x: "-100%"
          });
          
          tl.to(sidebarRef.current, {
            x: 0,
            duration: 0.35,
            ease: "power3.out"
          });
        } else {
          // Desktop: expand width
          tl.to(sidebarRef.current, {
            width: "280px",
            duration: 0.35,
            ease: "power3.out"
          });
        }
        
        // Animate text in with delay
        tl.call(() => {
          const textElements = sidebarRef.current?.querySelectorAll('.sidebar-text');
          if (textElements && textElements.length > 0) {
            gsap.fromTo(textElements, 
              { opacity: 0, x: -15 },
              {
                opacity: 1,
                x: 0,
                duration: 0.3,
                stagger: 0.04,
                ease: "power2.out"
              }
            );
          }
        }, [], "+=0.15");
        
      } else {
        // Closing animation
        const textElements = sidebarRef.current.querySelectorAll('.sidebar-text');
        
        // Hide text first
        if (textElements && textElements.length > 0) {
          tl.to(textElements, {
            opacity: 0,
            x: -15,
            duration: 0.2,
            ease: "power2.in"
          });
        }
        
        // Then animate sidebar
        if (isMobile) {
          tl.to(sidebarRef.current, {
            x: "-100%",
            duration: 0.35,
            ease: "power3.in"
          }, "+=0.1");
        } else {
          tl.to(sidebarRef.current, {
            width: "64px",
            duration: 0.35,
            ease: "power3.in"
          }, "+=0.1");
        }
        
        // Set collapsed state
        tl.call(() => setCollapsed(true), [], "+=0.1");
      }
    }
  }, [isOpen, isMobile]);

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && isMobile && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onTouchStart={(e) => {
            e.preventDefault();
            if (!isAnimating) {
              onToggle();
            }
          }}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (!isAnimating) {
              // Add small delay to prevent glitching
              setTimeout(() => {
                onToggle();
              }, 50);
            }
          }}
        />
      )}
      
      <div
        ref={sidebarRef}
        className={`fixed left-0 top-0 h-full bg-sidebar border-r border-sidebar-border z-50 overflow-hidden sidebar-container ${
          isMobile 
            ? 'w-80' 
            : isOpen ? 'w-[280px]' : 'w-16'
        }`}
        style={isMobile ? { 
          transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
          width: '320px' // Ensure full width on mobile
        } : {}}
      >
        {/* Header */}
        <div className={`flex items-center border-b border-sidebar-border ${collapsed ? 'justify-center p-4' : 'justify-between p-4'}`}>
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg flex-shrink-0">
              <ScrollText className="w-5 h-5 text-primary-foreground" />
            </div>
            {!collapsed && (
              <span className="sidebar-text text-lg font-semibold text-sidebar-foreground whitespace-nowrap">
                Torah Bot
              </span>
            )}
          </div>
          
          {/* Close button - visible on mobile when sidebar is open */}
          {!collapsed && isMobile && (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (!isAnimating) {
                  onToggle();
                }
              }}
              className="p-2 rounded-lg hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors duration-200 flex-shrink-0"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <div className={`space-y-2 ${collapsed ? 'p-2' : 'p-4'}`}>
          {!collapsed && (
            <div className="sidebar-text text-xs text-sidebar-foreground/60 mb-4 uppercase tracking-wider px-1">
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
                    flex items-center rounded-lg transition-all duration-200 cursor-pointer group relative
                    ${collapsed 
                      ? 'justify-center p-3 mx-1' 
                      : 'gap-3 px-3 py-2'
                    }
                    ${isActive 
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground' 
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                    }
                  `}
                  title={collapsed ? item.label : undefined}
                  onClick={(e) => {
                    // Auto-collapse sidebar on mobile when link is clicked
                    if (isMobile && isOpen && !isAnimating) {
                      // Small delay to allow navigation to start
                      setTimeout(() => {
                        onToggle();
                      }, 100);
                    }
                  }}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && (
                    <span className="sidebar-text text-sm font-medium whitespace-nowrap">{item.label}</span>
                  )}
                  {!collapsed && item.path !== "/" && (
                    <div className="ml-auto">
                      <div className="w-1 h-1 bg-current rounded-full opacity-60" />
                    </div>
                  )}
                  
                  {/* Tooltip for collapsed state */}
                  {collapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                      {item.label}
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