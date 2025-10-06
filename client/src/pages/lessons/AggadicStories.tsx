import LessonTemplate from "@/components/LessonTemplate";
import { Sparkles } from "lucide-react";

export default function AggadicStories() {
  const topics = [
    {
      id: "1",
      title: "Hillel and the Convert",
      description: "The famous story of teaching the entire Torah while standing on one foot. Patience and the golden rule.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "2",
      title: "Rabbi Akiva's Journey",
      description: "From shepherd to greatest sage. Never too late to start learning. Water dripping on stone.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "3",
      title: "Kamtza and Bar Kamtza",
      description: "How baseless hatred led to the destruction of the Temple. The power of words and social responsibility.",
      completed: true,
      difficulty: "Intermediate" as const,
    },
    {
      id: "4",
      title: "The Four Who Entered Pardes",
      description: "Mystical journey of four sages. Different levels of understanding and spiritual readiness.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "5",
      title: "Choni the Circle Maker",
      description: "Prayer for rain and the power of faith. Sleeping for 70 years and the importance of community.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "6",
      title: "Rabbi Chanina ben Dosa",
      description: "Miracles of faith, healing, and trust in divine providence. Living with minimal material needs.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "7",
      title: "The Debate in Heaven",
      description: "When heaven and earth disagree on halacha. The authority of human Torah scholars.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "8",
      title: "The Widow's Two Coins",
      description: "True generosity measured by sacrifice, not amount. Giving from the heart.",
      completed: false,
      difficulty: "Beginner" as const,
    },
  ];

  const stats = {
    totalTime: "10h 20m",
    averageSession: "25 min",
    streak: 15,
    completedTopics: 15,
    totalTopics: 25,
    progressPercentage: 60,
  };

  const insights = [
    "You excel at extracting moral lessons from stories and applying them to contemporary situations.",
    "Your engagement with 'What would you have done?' questions shows deep ethical thinking.",
    "Consider exploring the Midrashic sources behind these stories for additional layers of meaning.",
  ];

  const challenges = [
    "Some Aggadic stories contain multiple interpretations - explore different commentaries for fuller understanding.",
    "Review the historical context of stories to better appreciate their original setting and message.",
    "Focus on memorizing key phrases from stories that can serve as life mottos and inspiration.",
  ];

  return (
    <LessonTemplate
      title="Aggadic Stories from Chazal"
      hebrewTitle="אגדות חז״ל"
      description="Torah values come to life through timeless stories from the Talmud and Midrash. Clear explanations, moral lessons, and interactive reflections."
      icon={<Sparkles className="w-8 h-8 text-white" />}
      topics={topics}
      stats={stats}
      insights={insights}
      challenges={challenges}
      color="purple"
    />
  );
}
