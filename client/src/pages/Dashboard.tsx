import StatCard from "@/components/StatCard";
import TorahPortionCard from "@/components/TorahPortionCard";
import ProgressChart from "@/components/ProgressChart";
import LessonCard from "@/components/LessonCard";
import { Clock, Trophy, BookOpen, Flame, TrendingUp, Calendar } from "lucide-react";
import { useWeeklyTorahPortion, useDafYomi, useJewishDate, useUpcomingHolidays } from "@/hooks/useJewishData";

export default function Dashboard() {
  const { data: torahPortion, isLoading: loadingPortion } = useWeeklyTorahPortion();
  const { data: dafYomi, isLoading: loadingDaf } = useDafYomi();
  const { data: jewishDate } = useJewishDate();
  const { data: holidays } = useUpcomingHolidays(3);

  return (
    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6 max-w-full">
      {/* Jewish Date and Daf Yomi bar */}
      <div className="flex items-center gap-4 mb-4 sm:mb-6 flex-wrap">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Calendar className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">{jewishDate || 'Loading...'}</span>
        </div>
        {dafYomi && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm">Daf Yomi: {dafYomi.name}</span>
          </div>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        <StatCard 
          icon={Clock} 
          value="50" 
          label="HOURS Studied" 
          color="yellow" 
        />
        <StatCard 
          icon={Trophy} 
          value="15+" 
          label="Milestones" 
          color="brown" 
        />
        <StatCard 
          icon={BookOpen} 
          value="8/11" 
          label="Modules" 
          color="orange" 
        />
        <StatCard 
          icon={Flame} 
          value="24 Day" 
          label="Day Streak" 
          color="gold" 
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column - Torah Portion and Lessons */}
        <div className="xl:col-span-2 space-y-4 sm:space-y-6">
          {loadingPortion ? (
            <div className="bg-card rounded-lg p-6 border border-card-border">
              <div className="animate-pulse">
                <div className="h-6 bg-muted rounded w-1/3 mb-4"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
              </div>
            </div>
          ) : torahPortion ? (
            <TorahPortionCard
              title={`Parashat ${torahPortion.name}`}
              subtitle={torahPortion.hebrewName || "פרשת השבוע"}
              lessonsCompleted={5}
              totalLessons={7}
              totalTime="5h 32m"
              averageSessionLength="45 min"
              currentLesson={torahPortion.name}
            />
          ) : (
            <TorahPortionCard
              title="Weekly Torah Portion"
              subtitle="Parashat HaShavua"
              lessonsCompleted={5}
              totalLessons={7}
              totalTime="5h 32m"
              averageSessionLength="45 min"
              currentLesson="Loading..."
            />
          )}

          {/* Lesson Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <LessonCard
              title="Mishnah"
              subtitle="Beginner to Advanced"
              progress={75}
            />
            <LessonCard
              title="Talmud"
              subtitle="Beginner to Advanced"
              progress={45}
            />
          </div>
        </div>

        {/* Right Column - Analytics and Insights */}
        <div className="space-y-4 sm:space-y-6">
          <ProgressChart
            title="Progress Over Time"
            timeframe="Today"
          />

          {/* Deep Analytics */}
          <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border">
            <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">Deep Analytics</h3>
            <p className="text-sm text-muted-foreground mb-3 sm:mb-4">Total time studied length: 45 min.</p>
            
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Flame className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <span className="font-semibold text-sm sm:text-base">24-Day Streak</span>
            </div>
          </div>

          {/* Upcoming Holidays */}
          <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border">
            <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">Upcoming Holidays</h3>
            
            <div className="space-y-3">
              {holidays && holidays.length > 0 ? (
                holidays.map((holiday, index) => (
                  <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-foreground">{holiday.title}</p>
                      <p className="text-xs text-muted-foreground">{holiday.hebrew}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {new Date(holiday.date).toLocaleDateString('en-US', { 
                          weekday: 'short', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-muted-foreground">Loading holidays...</p>
              )}
            </div>
          </div>

          {/* Personalized Insights */}
          <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border">
            <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">Study Insights</h3>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex gap-3">
                <BookOpen className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm break-words">
                    {torahPortion 
                      ? `Continue studying Parashat ${torahPortion.name}. Focus on understanding the weekly portion's key themes and lessons.`
                      : 'Start your Torah study journey with the weekly portion and daily Daf Yomi.'
                    }
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Trophy className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-sm break-words">
                    {dafYomi 
                      ? `Today's Daf Yomi is ${dafYomi.name}. Join millions studying the same page worldwide.`
                      : 'Keep up your daily study streak to unlock new milestones!'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Analytics - Bottom */}
          <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border">
            <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">Deep Analytics</h3>
            <p className="text-sm text-muted-foreground">Total time studied length: 45 min.</p>
          </div>
        </div>
      </div>
    </div>
  );
}