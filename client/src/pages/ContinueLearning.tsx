import { BookOpen, Clock, Calendar, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function ContinueLearning() {
  const recentSessions = [
    {
      id: "1",
      lesson: "Weekly Torah Portion",
      topic: "Parashat Vayishlach - Jacob Wrestles",
      progress: 65,
      lastAccessed: "2 hours ago",
      path: "/lessons/weekly-portion",
      color: "amber",
    },
    {
      id: "2",
      lesson: "Mishnah",
      topic: "Seder Nezikin - Damages",
      progress: 40,
      lastAccessed: "Yesterday",
      path: "/lessons/mishnah",
      color: "blue",
    },
    {
      id: "3",
      lesson: "Daily Halacha",
      topic: "Laws of Lashon Hara",
      progress: 80,
      lastAccessed: "2 days ago",
      path: "/lessons/daily-halacha",
      color: "green",
    },
    {
      id: "4",
      lesson: "Jewish Ethics & Mussar",
      topic: "Overcoming Pride (Gaavah)",
      progress: 30,
      lastAccessed: "3 days ago",
      path: "/lessons/ethics-mussar",
      color: "red",
    },
    {
      id: "5",
      lesson: "Shabbat",
      topic: "Common Shabbat Questions",
      progress: 55,
      lastAccessed: "4 days ago",
      path: "/lessons/shabbat",
      color: "purple",
    },
  ];

  const colorClasses = {
    amber: "bg-amber-100 text-amber-700 border-amber-200",
    blue: "bg-blue-100 text-blue-700 border-blue-200",
    green: "bg-green-100 text-green-700 border-green-200",
    red: "bg-red-100 text-red-700 border-red-200",
    purple: "bg-purple-100 text-purple-700 border-purple-200",
  };

  return (
    <div className="p-4 sm:p-6 max-w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">Continue Learning</h1>
        <p className="text-muted-foreground">Pick up where you left off and continue your Torah study journey</p>
      </div>

      {/* Recent Sessions */}
      <div className="space-y-4">
        {recentSessions.map((session) => (
          <Link key={session.id} href={session.path}>
            <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border hover:border-primary transition-all duration-200 cursor-pointer group">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-5 h-5 text-primary flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-card-foreground">{session.lesson}</h3>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-3">{session.topic}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-muted-foreground">Progress</span>
                      <span className="text-xs font-semibold text-primary">{session.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary rounded-full h-2 transition-all duration-300"
                        style={{ width: `${session.progress}%` }}
                      />
                    </div>
                  </div>
                  
                  {/* Last Accessed */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>Last accessed {session.lastAccessed}</span>
                  </div>
                </div>
                
                {/* Continue Button */}
                <div className="flex-shrink-0">
                  <div className={`px-3 py-2 rounded-lg border ${colorClasses[session.color as keyof typeof colorClasses]} group-hover:scale-105 transition-transform duration-200 flex items-center gap-2`}>
                    <span className="text-sm font-medium">Continue</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Study Streak */}
      <div className="mt-8 bg-gradient-to-r from-primary to-primary/80 rounded-lg p-6 text-primary-foreground">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-1">Keep Your Streak Going! 🔥</h3>
            <p className="text-sm text-primary-foreground/80">You've studied for 24 consecutive days</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">24</div>
            <div className="text-sm text-primary-foreground/80">Days</div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-card rounded-lg p-4 border border-card-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">12</div>
              <div className="text-xs text-muted-foreground">Active Lessons</div>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-4 border border-card-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">142h</div>
              <div className="text-xs text-muted-foreground">Total Study Time</div>
            </div>
          </div>
        </div>
        
        <div className="bg-card rounded-lg p-4 border border-card-border">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">89</div>
              <div className="text-xs text-muted-foreground">Topics Completed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
