import { TrendingUp, Calendar } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

interface ProgressChartProps {
  title: string;
  timeframe?: string;
  data?: Array<{ name: string; value: number }>;
}

// todo: remove mock functionality - replace with real data
const mockData = [
  { name: "Week 1", value: 20 },
  { name: "Week 2", value: 45 },
  { name: "Week 3", value: 30 },
  { name: "Week 4", value: 80 },
  { name: "Week 5", value: 60 },
  { name: "Week 6", value: 90 },
  { name: "Week 7", value: 70 },
  { name: "Week 8", value: 100 },
];

export default function ProgressChart({ 
  title, 
  timeframe = "Today",
  data = mockData 
}: ProgressChartProps) {
  return (
    <div 
      data-testid="progress-chart"
      className="bg-card rounded-lg p-6 border border-card-border"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-card-foreground">{title}</h3>
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <select 
            data-testid="select-timeframe"
            className="text-sm bg-transparent border-0 text-muted-foreground focus:outline-none"
            defaultValue={timeframe}
            onChange={(e) => console.log('Timeframe changed to:', e.target.value)}
          >
            <option value="Today">Today</option>
            <option value="This Week">This Week</option>
            <option value="This Month">This Month</option>
            <option value="This Year">This Year</option>
          </select>
        </div>
      </div>

      <div className="h-64 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'hsl(var(--popover))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px',
                fontSize: '12px'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--primary))" 
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <TrendingUp className="w-4 h-4 text-green-500" />
        <span>Progress trending upward</span>
      </div>
    </div>
  );
}