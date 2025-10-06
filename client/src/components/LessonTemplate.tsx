import { useState } from "react";
import { Star, Download, MessageCircle, BookOpen, Clock, TrendingUp, Flame, Target, Award } from "lucide-react";
import TorahBotModal from "./TorahBotModal";
import { Progress } from "@/components/ui/progress";

interface Topic {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
}

interface LessonStats {
  totalTime: string;
  averageSession: string;
  streak: number;
  completedTopics: number;
  totalTopics: number;
  progressPercentage: number;
}

interface LessonTemplateProps {
  title: string;
  hebrewTitle?: string;
  description: string;
  icon: React.ReactNode;
  topics: Topic[];
  stats: LessonStats;
  insights?: string[];
  challenges?: string[];
  color?: string;
}

export default function LessonTemplate({
  title,
  hebrewTitle,
  description,
  icon,
  topics,
  stats,
  insights = [],
  challenges = [],
  color = "amber"
}: LessonTemplateProps) {
  const [isBotModalOpen, setIsBotModalOpen] = useState(false);
  const [bookmarkedTopics, setBookmarkedTopics] = useState<Set<string>>(new Set());

  const toggleBookmark = (topicId: string) => {
    setBookmarkedTopics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(topicId)) {
        newSet.delete(topicId);
      } else {
        newSet.add(topicId);
      }
      return newSet;
    });
  };

  const handleDownloadPDF = () => {
    console.log('Downloading PDF for:', title);
    // TODO: Implement PDF generation
  };

  const getMilestone = (percentage: number) => {
    if (percentage < 33) return "Beginner";
    if (percentage < 66) return "Intermediate";
    return "Advanced";
  };

  const colorClasses = {
    amber: "from-amber-800 to-amber-900",
    blue: "from-blue-800 to-blue-900",
    green: "from-green-800 to-green-900",
    purple: "from-purple-800 to-purple-900",
    orange: "from-orange-800 to-orange-900",
    red: "from-red-800 to-red-900",
  };

  return (
    <div className="p-4 sm:p-6 max-w-full">
      {/* Header Section */}
      <div className={`bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses] || colorClasses.amber} rounded-lg p-4 sm:p-6 text-white mb-4 sm:mb-6`}>
        <div className="flex items-center justify-between mb-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{title}</h1>
            {hebrewTitle && (
              <p className="text-white/80 text-lg">{hebrewTitle}</p>
            )}
            <p className="text-white/70 text-sm mt-2">{description}</p>
          </div>
          <div className="p-3 bg-white/20 rounded-lg flex-shrink-0 ml-4">
            {icon}
          </div>
        </div>
      </div>

      {/* Progress Overview Section */}
      <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border mb-4 sm:mb-6">
        <h2 className="text-xl font-semibold text-card-foreground mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" />
          Progress Overview
        </h2>
        
        <div className="space-y-4">
          {/* Progress Bar with Milestones */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                {stats.completedTopics} of {stats.totalTopics} topics completed
              </span>
              <span className="text-sm font-bold text-primary">
                {stats.progressPercentage}%
              </span>
            </div>
            <Progress value={stats.progressPercentage} className="h-3" />
            <div className="flex justify-between mt-2 text-xs text-muted-foreground">
              <span className={stats.progressPercentage >= 0 ? "font-semibold text-primary" : ""}>Beginner</span>
              <span className={stats.progressPercentage >= 33 ? "font-semibold text-primary" : ""}>Intermediate</span>
              <span className={stats.progressPercentage >= 66 ? "font-semibold text-primary" : ""}>Advanced</span>
            </div>
          </div>

          {/* Current Milestone */}
          <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">
              Current Level: <span className="font-bold text-primary">{getMilestone(stats.progressPercentage)}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column - Topics List */}
        <div className="xl:col-span-2 space-y-4">
          {/* Deep Analytics */}
          <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Deep Analytics
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">{stats.totalTime}</span>
                <span className="text-xs text-muted-foreground">Total Time Spent</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-primary">{stats.averageSession}</span>
                <span className="text-xs text-muted-foreground">Avg Session Length</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <Flame className="w-5 h-5 text-orange-500" />
                  <span className="text-2xl font-bold text-primary">{stats.streak}</span>
                </div>
                <span className="text-xs text-muted-foreground">Day Streak</span>
              </div>
            </div>
          </div>

          {/* Topics Breakdown */}
          <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Content Breakdown
            </h3>
            
            <div className="space-y-3">
              {topics.map((topic) => (
                <div
                  key={topic.id}
                  className={`p-4 rounded-lg border transition-all duration-200 ${
                    topic.completed
                      ? "bg-primary/5 border-primary/20"
                      : "bg-muted/30 border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-card-foreground">{topic.title}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          topic.difficulty === "Beginner" ? "bg-green-100 text-green-700" :
                          topic.difficulty === "Intermediate" ? "bg-yellow-100 text-yellow-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {topic.difficulty}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{topic.description}</p>
                    </div>
                    <button
                      onClick={() => toggleBookmark(topic.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        bookmarkedTopics.has(topic.id)
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted hover:bg-muted/80"
                      }`}
                    >
                      <Star className="w-4 h-4" fill={bookmarkedTopics.has(topic.id) ? "currentColor" : "none"} />
                    </button>
                  </div>
                  {topic.completed && (
                    <div className="mt-2 flex items-center gap-1 text-xs text-primary">
                      <Award className="w-3 h-3" />
                      <span>Completed</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <button
              onClick={handleDownloadPDF}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 text-sm transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Summary (PDF)</span>
            </button>
            <button
              onClick={() => setIsBotModalOpen(true)}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 text-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Torah Bot</span>
            </button>
          </div>
        </div>

        {/* Right Column - Insights and Challenges */}
        <div className="space-y-4">
          {/* Personalized Insights */}
          {insights.length > 0 && (
            <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Personalized Insights</h3>
              <div className="space-y-3">
                {insights.map((insight, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-blue-600 rounded"></div>
                    </div>
                    <p className="text-sm text-muted-foreground">{insight}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Challenging Areas */}
          {challenges.length > 0 && (
            <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border">
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Areas to Review</h3>
              <div className="space-y-3">
                {challenges.map((challenge, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-6 h-6 bg-amber-100 rounded flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-amber-600 rounded"></div>
                    </div>
                    <p className="text-sm text-muted-foreground">{challenge}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Weekly Consistency Chart Placeholder */}
          <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Weekly Consistency</h3>
            <div className="flex justify-between items-end h-32 gap-2">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => {
                const height = Math.random() * 100;
                return (
                  <div key={day} className="flex-1 flex flex-col items-center gap-2">
                    <div className="w-full bg-primary/20 rounded-t relative" style={{ height: `${height}%`, minHeight: '20%' }}>
                      <div className="absolute inset-0 bg-primary rounded-t"></div>
                    </div>
                    <span className="text-xs text-muted-foreground">{day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Motivational Banner */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-4 text-primary-foreground">
            <p className="text-sm font-medium">
              🎯 Keep going! You're making excellent progress in your Torah learning journey.
            </p>
          </div>
        </div>
      </div>

      {/* Torah Bot Modal */}
      <TorahBotModal 
        isOpen={isBotModalOpen} 
        onClose={() => setIsBotModalOpen(false)}
        initialTopic={title}
      />
    </div>
  );
}
