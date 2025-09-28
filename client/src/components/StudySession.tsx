import { Clock, CheckCircle, Download, BookOpen } from "lucide-react";

interface StudySessionProps {
  title: string;
  date: string;
  status: "completed" | "in-progress" | "available";
  duration?: string;
  type?: "lesson" | "practice" | "review";
}

export default function StudySession({ 
  title, 
  date, 
  status, 
  duration,
  type = "lesson" 
}: StudySessionProps) {
  const statusConfig = {
    completed: {
      icon: CheckCircle,
      color: "text-green-600",
      bg: "bg-green-50",
      text: "Completed"
    },
    "in-progress": {
      icon: Clock,
      color: "text-blue-600", 
      bg: "bg-blue-50",
      text: "In Progress"
    },
    available: {
      icon: BookOpen,
      color: "text-gray-600",
      bg: "bg-gray-50", 
      text: "Available"
    }
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  return (
    <div 
      data-testid={`study-session-${title.toLowerCase().replace(/\s+/g, '-')}`}
      className="bg-card rounded-lg p-4 border border-card-border hover:shadow-md transition-shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="font-medium text-card-foreground mb-1">{title}</h4>
          <p className="text-sm text-muted-foreground mb-3">{date}</p>
          
          {duration && (
            <p className="text-xs text-muted-foreground">{duration}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${config.bg}`}>
            <StatusIcon className={`w-3 h-3 ${config.color}`} />
            <span className={`text-xs font-medium ${config.color}`}>
              {config.text}
            </span>
          </div>
          
          {status === "completed" && (
            <button
              data-testid={`button-download-${title.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => console.log('Download clicked for:', title)}
              className="p-1 text-muted-foreground hover:text-foreground"
            >
              <Download className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {status === "in-progress" && (
        <div className="mt-4">
          <button
            data-testid={`button-resume-${title.toLowerCase().replace(/\s+/g, '-')}`}
            onClick={() => console.log('Resume clicked for:', title)}
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90"
          >
            Resume
          </button>
        </div>
      )}
    </div>
  );
}