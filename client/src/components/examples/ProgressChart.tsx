import ProgressChart from '../ProgressChart';

export default function ProgressChartExample() {
  return (
    <div className="p-6 bg-background">
      <ProgressChart
        title="Progress Over Time"
        timeframe="Today"
      />
    </div>
  );
}