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
  ChevronDown,
  ChevronRight,
  Star,
  Download,
  X,
  Heart,
  FileText,
  Flame,
  Scale,
  Users,
  Lightbulb,
  Sparkles,
  Bot
} from "lucide-react";
import { useTopics } from "@/hooks/useTopics";

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface MenuItem {
  path: string;
  label: string;
  icon: any;
  subItems?: MenuItem[];
}

// Icon mapping for different categories
const categoryIcons: { [key: string]: any } = {
  "Parasha": Calendar,
  "Mishnah": BookOpen,
  "Talmud": ScrollText,
  "Halacha": Scale,
  "Ethics": Heart,
  "Midrash": Sparkles,
  "History": Users,
  "Chassidus": Lightbulb,
};

const staticMenuItems: MenuItem[] = [
  { path: "/", label: "Main Dashboard", icon: Home },
  { path: "/chat", label: "Interactive Bot", icon: Bot },
  { path: "/continue-learning", label: "Continue Learning", icon: BookOpen },
  { path: "/favorites", label: "My Favorites", icon: Star },
  { path: "/my-pdfs", label: "My PDFs", icon: Download },
  { path: "/accounts", label: "Accounts", icon: User },
  { path: "/history", label: "History & Resources", icon: History },
];

export default function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [location] = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(!isOpen);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<{ [key: string]: boolean }>({ "/lessons": false });
  const { data: topics, isLoading: loadingTopics } = useTopics();
  
  // Build menu items dynamically from API topics
  const menuItems: MenuItem[] = [
    ...staticMenuItems.slice(0, 1), // Main Dashboard
    {
      path: "/lessons",
      label: "Lessons",
      icon: BookOpen,
      subItems: topics
        ? topics
            .sort((a, b) => a.id - b.id) // Sort by ID in ascending order
            .map((topic) => ({
              path: `/lessons/${topic.name.toLowerCase().replace(/\s+/g, '-')}`,
              label: `${topic.id}. ${topic.name}`,
              icon: categoryIcons[topic.category] || BookOpen,
            }))
        : [],
    },
    ...staticMenuItems.slice(1), // Rest of menu items
  ];

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
        <div className={`space-y-1 ${collapsed ? 'p-2' : 'p-4'} overflow-y-auto flex-1`}>
          {!collapsed && (
            <div className="sidebar-text text-xs text-sidebar-foreground/60 mb-4 uppercase tracking-wider px-1">
              Main Menu
            </div>
          )}
          
          {menuItems.map((item) => {
            const isActive = item.path === location;
            const isExpanded = expandedMenus[item.path];
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const Icon = item.icon;
            
            return (
              <div key={item.path}>
                {/* Main Menu Item */}
                {hasSubItems ? (
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
                      e.preventDefault();
                      if (!collapsed) {
                        setExpandedMenus(prev => ({ ...prev, [item.path]: !prev[item.path] }));
                      }
                    }}
                  >
                    <Icon className="w-5 h-5 flex-shrink-0" />
                    {!collapsed && (
                      <>
                        <span className="sidebar-text text-sm font-medium whitespace-nowrap flex-1">{item.label}</span>
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4 flex-shrink-0" />
                        ) : (
                          <ChevronRight className="w-4 h-4 flex-shrink-0" />
                        )}
                      </>
                    )}
                    
                    {/* Tooltip for collapsed state */}
                    {collapsed && (
                      <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                        {item.label}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link href={item.path}>
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
                      
                      {/* Tooltip for collapsed state */}
                      {collapsed && (
                        <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                          {item.label}
                        </div>
                      )}
                    </div>
                  </Link>
                )}
                
                {/* Sub Menu Items */}
                {hasSubItems && isExpanded && !collapsed && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.subItems!.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isSubActive = subItem.path === location;
                      
                      return (
                        <Link key={subItem.path} href={subItem.path}>
                          <div
                            data-testid={`nav-${subItem.label.toLowerCase().replace(/\s+/g, '-')}`}
                            className={`
                              flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 cursor-pointer
                              ${isSubActive 
                                ? 'bg-sidebar-primary/80 text-sidebar-primary-foreground' 
                                : 'text-sidebar-foreground/80 hover:bg-yellow-600 hover:text-white'
                              }
                            `}
                            onClick={(e) => {
                              if (isMobile && isOpen && !isAnimating) {
                                setTimeout(() => {
                                  onToggle();
                                }, 100);
                              }
                            }}
                          >
                            <SubIcon className="w-4 h-4 flex-shrink-0" />
                            <span className="sidebar-text text-xs font-medium whitespace-nowrap">{subItem.label}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}