import { Trophy, Calendar } from "lucide-react";

interface TorahPortionCardProps {
  title: string;
  subtitle: string;
  lessonsCompleted: number;
  totalLessons: number;
  totalTime: string;
  averageSessionLength: string;
  currentLesson?: string;
}

export default function TorahPortionCard({
  title,
  subtitle,
  lessonsCompleted,
  totalLessons,
  totalTime,
  averageSessionLength,
  currentLesson
}: TorahPortionCardProps) {
  const progressPercentage = (lessonsCompleted / totalLessons) * 100;

  return (
    <div 
      data-testid="torah-portion-card"
      className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-lg p-4 sm:p-6 text-white relative overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4 sm:mb-6">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl font-bold mb-1 truncate">{title}</h3>
          <p className="text-amber-200 text-sm truncate">({subtitle})</p>
        </div>
        <div className="p-2 bg-white/20 rounded-lg flex-shrink-0 ml-3">
          <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300" />
        </div>
      </div>

      {/* Progress indicator */}
      {currentLesson && (
        <div className="bg-primary rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 text-primary-foreground">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-4 h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">You've studied {lessonsCompleted} out of {totalLessons} lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            <Trophy className="w-4 h-4" />
          </div>
        </div>
      )}

      {/* Study levels */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
        {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level, index) => (
          <div key={`${level}-${index}`} className="text-center">
            <div className="text-xs text-amber-200 mb-1 truncate">{level}</div>
          </div>
        ))}
      </div>

      {/* Study stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:space-y-0 space-y-3">
        <div>
          <div className="text-base sm:text-lg font-bold">{totalTime}</div>
          <div className="text-xs sm:text-sm text-amber-200">Total time studied</div>
        </div>
        <div>
          <div className="text-base sm:text-lg font-bold">{averageSessionLength}</div>
          <div className="text-xs sm:text-sm text-amber-200">Average session length</div>
        </div>
      </div>

      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
    </div>
  );
}