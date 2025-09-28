import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
  color?: "yellow" | "brown" | "orange" | "gold";
}

export default function StatCard({ icon: Icon, value, label, color = "yellow" }: StatCardProps) {
  const colorClasses = {
    yellow: "bg-gradient-to-r from-yellow-400 to-yellow-500",
    brown: "bg-gradient-to-r from-amber-800 to-amber-900", 
    orange: "bg-gradient-to-r from-orange-600 to-orange-700",
    gold: "bg-gradient-to-r from-yellow-400 to-amber-500"
  };

  const iconColorClasses = {
    yellow: "text-yellow-800",
    brown: "text-amber-100",
    orange: "text-orange-100", 
    gold: "text-yellow-800"
  };

  return (
    <div 
      data-testid={`stat-card-${label.toLowerCase().replace(/\s+/g, '-')}`}
      className={`${colorClasses[color]} rounded-lg p-4 sm:p-6 text-white relative overflow-hidden min-h-[100px] sm:min-h-[120px]`}
    >
      <div className="flex items-center justify-between h-full">
        <div className="flex-1 min-w-0">
          <div className="text-xl sm:text-2xl font-bold mb-1 truncate">{value}</div>
          <div className="text-xs sm:text-sm font-medium opacity-90 leading-tight">{label}</div>
        </div>
        <div className={`p-2 sm:p-3 rounded-lg bg-white/20 ${iconColorClasses[color]} flex-shrink-0 ml-2`}>
          <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>
      </div>
      
      {/* Decorative background pattern */}
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/5 rounded-full -translate-y-12 translate-x-12 sm:-translate-y-16 sm:translate-x-16"></div>
    </div>
  );
}