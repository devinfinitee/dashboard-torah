import StatCard from '../StatCard';
import { Clock, Trophy, BookOpen, Flame } from "lucide-react";

export default function StatCardExample() {
  return (
    <div className="p-6 bg-background">
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
    </div>
  );
}