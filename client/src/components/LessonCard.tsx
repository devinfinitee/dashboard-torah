import { CheckCircle, Book, Trophy } from "lucide-react";

interface LessonCardProps {
  title: string;
  subtitle: string;
  progress: number;
  isActive?: boolean;
}

export default function LessonCard({ title, subtitle, progress, isActive }: LessonCardProps) {
  return (
    <div 
      data-testid={`lesson-card-${title.toLowerCase().replace(/\s+/g, '-')}`}
      className={`
        bg-card rounded-lg p-4 border border-card-border relative overflow-hidden
        ${isActive ? 'ring-2 ring-primary' : ''}
      `}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-amber-100 rounded-lg">
            <Book className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <h4 className="font-semibold text-card-foreground">{title}</h4>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        
        {progress === 100 && (
          <div className="p-1 bg-green-100 rounded-full">
            <CheckCircle className="w-4 h-4 text-green-600" />
          </div>
        )}
      </div>

      {/* Progress bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Beginner</span>
          <span className="text-muted-foreground">Advanced</span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="h-2 bg-primary rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Trophy icons for completed sections */}
      {progress > 0 && (
        <div className="flex gap-1 mt-3">
          {Array.from({ length: Math.floor(progress / 25) }).map((_, i) => (
            <Trophy key={i} className="w-4 h-4 text-yellow-500" />
          ))}
        </div>
      )}
    </div>
  );
}