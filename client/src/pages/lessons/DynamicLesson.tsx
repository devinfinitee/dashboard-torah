import { useParams } from "wouter";
import { useTopics } from "@/hooks/useTopics";
import LessonTemplate from "@/components/LessonTemplate";
import { BookOpen, Loader2 } from "lucide-react";

// Icon mapping for different categories
const categoryIcons: { [key: string]: any } = {
  "Parasha": "📜",
  "Mishnah": "📖",
  "Talmud": "📚",
  "Halacha": "⚖️",
  "Ethics": "❤️",
  "Midrash": "✨",
  "History": "👥",
  "Chassidus": "💡",
};

export default function DynamicLesson() {
  const params = useParams();
  const lessonSlug = params.slug;
  const { data: topics, isLoading } = useTopics();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  // Find the matching topic
  const topic = topics?.find(
    (t) => t.name.toLowerCase().replace(/\s+/g, '-') === lessonSlug
  );

  if (!topic) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8">
        <BookOpen className="w-16 h-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold mb-2">Lesson Not Found</h2>
        <p className="text-muted-foreground">
          The lesson you're looking for doesn't exist or hasn't been loaded yet.
        </p>
      </div>
    );
  }

  // Convert lessons to topics format
  const lessonTopics = topic.lessons.map((lesson, index) => ({
    id: lesson.id.toString(),
    title: lesson.title,
    description: lesson.content.substring(0, 150) + "...",
    completed: index < 2, // Mark first 2 as completed for demo
    difficulty: (index < 3 ? "Beginner" : index < 6 ? "Intermediate" : "Advanced") as const,
  }));

  const stats = {
    totalTime: "8h 30m",
    averageSession: "28 min",
    streak: 12,
    completedTopics: lessonTopics.filter(t => t.completed).length,
    totalTopics: lessonTopics.length,
    progressPercentage: Math.round((lessonTopics.filter(t => t.completed).length / lessonTopics.length) * 100),
  };

  const insights = [
    `You're making great progress in ${topic.name}!`,
    "Your engagement with the material shows strong comprehension.",
    "Consider reviewing previous lessons to reinforce your understanding.",
  ];

  const challenges = [
    "Take time to reflect on how these teachings apply to your daily life.",
    "Try discussing these concepts with a study partner for deeper insights.",
    "Review the source texts to strengthen your foundational knowledge.",
  ];

  return (
    <LessonTemplate
      title={topic.name}
      hebrewTitle={topic.category}
      description={topic.description}
      icon={<span className="text-3xl">{categoryIcons[topic.category] || "📖"}</span>}
      topics={lessonTopics}
      stats={stats}
      insights={insights}
      challenges={challenges}
      color="blue"
    />
  );
}
