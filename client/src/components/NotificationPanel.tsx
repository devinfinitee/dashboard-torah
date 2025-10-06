import { X, BookOpen, Trophy, Calendar, Bell } from "lucide-react";

interface Notification {
  id: string;
  type: "lesson" | "achievement" | "reminder" | "general";
  title: string;
  message: string;
  time: string;
  read: boolean;
}

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  const notifications: Notification[] = [
    {
      id: "1",
      type: "lesson",
      title: "New Lesson Available",
      message: "New lesson on Shabbat is available! Continue your learning journey.",
      time: "2 hours ago",
      read: false,
    },
    {
      id: "2",
      type: "achievement",
      title: "Milestone Reached!",
      message: "You're 2 lessons away from completing your Kashrut module!",
      time: "5 hours ago",
      read: false,
    },
    {
      id: "3",
      type: "reminder",
      title: "Study Reminder",
      message: "Don't forget to continue your Daily Halacha lesson today.",
      time: "1 day ago",
      read: true,
    },
    {
      id: "4",
      type: "lesson",
      title: "Weekly Portion Updated",
      message: "This week's Torah portion (Parashat Vayishlach) is now available with new insights.",
      time: "2 days ago",
      read: true,
    },
    {
      id: "5",
      type: "achievement",
      title: "24-Day Streak!",
      message: "Congratulations! You've maintained a 24-day study streak. Keep it going!",
      time: "3 days ago",
      read: true,
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case "lesson":
        return <BookOpen className="w-5 h-5 text-blue-500" />;
      case "achievement":
        return <Trophy className="w-5 h-5 text-yellow-500" />;
      case "reminder":
        return <Calendar className="w-5 h-5 text-purple-500" />;
      default:
        return <Bell className="w-5 h-5 text-gray-500" />;
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />
      
      {/* Notification Panel */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-background border-l border-border z-50 shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Notifications</h2>
            {unreadCount > 0 && (
              <p className="text-xs text-muted-foreground">{unreadCount} unread</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8 text-center">
              <Bell className="w-16 h-16 text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">No notifications yet</p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-accent/50 transition-colors cursor-pointer ${
                    !notification.read ? "bg-primary/5" : ""
                  }`}
                >
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {getIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-foreground">
                          {notification.title}
                        </h3>
                        {!notification.read && (
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground/70">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="p-4 border-t border-border">
            <button
              onClick={() => console.log('Mark all as read')}
              className="w-full px-4 py-2 text-sm text-primary hover:bg-primary/10 rounded-lg transition-colors"
            >
              Mark all as read
            </button>
          </div>
        )}
      </div>
    </>
  );
}
