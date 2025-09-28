import StatCard from "@/components/StatCard";
import TorahPortionCard from "@/components/TorahPortionCard";
import ProgressChart from "@/components/ProgressChart";
import LessonCard from "@/components/LessonCard";
import { Clock, Trophy, BookOpen, Flame, TrendingUp } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Search and filter bar */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2 text-muted-foreground">
          <div className="w-6 h-6 bg-muted rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-primary rounded"></div>
          </div>
          <span className="text-sm">Gemaron bene bavei</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Torah Portion and Lessons */}
        <div className="lg:col-span-2 space-y-6">
          <TorahPortionCard
            title="Weekly Torah Portion"
            subtitle="Parashat HaShawua"
            lessonsCompleted={5}
            totalLessons={7}
            totalTime="5h 32m"
            averageSessionLength="45 min"
            currentLesson="Joseph's Dreams"
          />

          {/* Lesson Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <div className="space-y-6">
          <ProgressChart
            title="Progress Over Time"
            timeframe="Today"
          />

          {/* Deep Analytics */}
          <div className="bg-card rounded-lg p-6 border border-card-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Deep Analytics</h3>
            <p className="text-sm text-muted-foreground mb-4">Total time studied length: 45 min.</p>
            
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="font-semibold">24-Day Streak</span>
            </div>
          </div>

          {/* Personalized Insights */}
          <div className="bg-card rounded-lg p-6 border border-card-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Personalized Insights</h3>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <BookOpen className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">You are strongest in Parashat Vayera Midrashic insights, but review Mishah Oral Law foundations.</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <Trophy className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm">You are strongest in Parashat Vayera Midrashic insights...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Deep Analytics - Bottom */}
          <div className="bg-card rounded-lg p-6 border border-card-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Deep Analytics</h3>
            <p className="text-sm text-muted-foreground">Total time studied length: 45 min.</p>
          </div>
        </div>
      </div>
    </div>
  );
}