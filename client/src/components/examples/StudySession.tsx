import StudySession from '../StudySession';

export default function StudySessionExample() {
  return (
    <div className="p-6 bg-background space-y-4">
      <StudySession
        title="Parashat Lech Lecha"
        date="2/4B 1.2025"
        status="completed"
        duration="45 min"
      />
      <StudySession
        title="Vayerat Vayera"
        date="2/4B 1.2/24"
        status="in-progress"
        duration="30 min"
      />
      <StudySession
        title="Midrashic oshic Insights"
        date="2/4B 1.2122"
        status="available"
      />
    </div>
  );
}