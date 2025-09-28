import TorahPortionCard from '../TorahPortionCard';

export default function TorahPortionCardExample() {
  return (
    <div className="p-6 bg-background">
      <TorahPortionCard
        title="Weekly Torah Portion"
        subtitle="Parashat HaShawua"
        lessonsCompleted={5}
        totalLessons={7}
        totalTime="5h 32m"
        averageSessionLength="45 min"
        currentLesson="Joseph's Dreams"
      />
    </div>
  );
}