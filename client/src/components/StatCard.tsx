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
      className={`${colorClasses[color]} rounded-lg p-6 text-white relative overflow-hidden`}
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold mb-1">{value}</div>
          <div className="text-sm font-medium opacity-90">{label}</div>
        </div>
        <div className={`p-3 rounded-lg bg-white/20 ${iconColorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      
      {/* Decorative background pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
    </div>
  );
}