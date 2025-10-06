import LessonTemplate from "@/components/LessonTemplate";
import { Heart } from "lucide-react";

export default function EthicsMussar() {
  const topics = [
    {
      id: "1",
      title: "Humility (Anavah)",
      description: "Understanding true humility vs. false modesty. Learning from Moshe Rabbeinu and other humble leaders.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "2",
      title: "Patience (Savlanut)",
      description: "Developing patience in relationships, work, and spiritual growth. The power of waiting with grace.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "3",
      title: "Anger Management (Kaas)",
      description: "Understanding the destructive nature of anger and practical strategies for emotional regulation.",
      completed: true,
      difficulty: "Intermediate" as const,
    },
    {
      id: "4",
      title: "Generosity (Nedivut)",
      description: "The mitzvah of tzedakah, giving with joy, and developing a generous heart and open hand.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "5",
      title: "Truth and Honesty (Emet)",
      description: "The seal of Hashem is truth. Living with integrity in business, relationships, and self-reflection.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "6",
      title: "Gratitude (Hakarat HaTov)",
      description: "Recognizing the good in others and in life. Building a mindset of appreciation and thankfulness.",
      completed: false,
      difficulty: "Beginner" as const,
    },
    {
      id: "7",
      title: "Overcoming Pride (Gaavah)",
      description: "The root of many spiritual challenges. Practical steps to recognize and overcome arrogance.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "8",
      title: "Love of Fellow Jews (Ahavat Yisrael)",
      description: "The great principle of Torah. Practical ways to love, judge favorably, and build community.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "9",
      title: "Mesilat Yesharim - Path of the Just",
      description: "Rabbi Moshe Chaim Luzzatto's systematic approach to spiritual growth and character refinement.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "10",
      title: "Orchot Tzadikim - Ways of the Righteous",
      description: "Classic mussar work on character traits with practical guidance for daily life.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
  ];

  const stats = {
    totalTime: "18h 45m",
    averageSession: "32 min",
    streak: 21,
    completedTopics: 4,
    totalTopics: 12,
    progressPercentage: 33,
  };

  const insights = [
    "You show deep engagement with practical applications of mussar teachings to modern life challenges.",
    "Your reflection prompts demonstrate genuine self-examination and desire for character growth.",
    "Consider keeping a mussar journal to track your progress in specific character traits.",
  ];

  const challenges = [
    "Mesilat Yesharim's systematic approach requires slow, contemplative study - don't rush through it.",
    "Focus on one character trait at a time for deeper transformation rather than surface-level learning.",
    "Review the difference between intellectual understanding and emotional integration of mussar teachings.",
  ];

  return (
    <LessonTemplate
      title="Jewish Ethics & Mussar"
      hebrewTitle="מוסר ומידות טובות"
      description="Grow not just in knowledge but in character. Teachings from Mesilat Yesharim, Orchot Tzadikim, and other mussar classics with real-world applications."
      icon={<Heart className="w-8 h-8 text-white" />}
      topics={topics}
      stats={stats}
      insights={insights}
      challenges={challenges}
      color="red"
    />
  );
}
