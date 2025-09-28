import LessonCard from '../LessonCard';

export default function LessonCardExample() {
  return (
    <div className="p-6 bg-background space-y-4">
      <LessonCard
        title="Mishnah"
        subtitle="Beginner to Advanced"
        progress={75}
        isActive={true}
      />
      <LessonCard
        title="Talmud"
        subtitle="Beginner to Advanced"
        progress={45}
      />
    </div>
  );
}