import LessonTemplate from "@/components/LessonTemplate";
import { Scale } from "lucide-react";

export default function DailyHalacha() {
  const topics = [
    {
      id: "1",
      title: "Morning Blessings (Birchot HaShachar)",
      description: "Daily blessings upon waking, gratitude for body and soul, and starting the day with awareness.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "2",
      title: "Laws of Netilat Yadayim",
      description: "Ritual hand washing before eating bread, upon waking, and other occasions. Proper procedure and blessings.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "3",
      title: "Blessings Over Food (Berachot)",
      description: "Different blessings for various foods, after-blessings (Bracha Acharona), and Birkat HaMazon.",
      completed: true,
      difficulty: "Intermediate" as const,
    },
    {
      id: "4",
      title: "Prayer Times and Requirements",
      description: "Shacharit, Mincha, Maariv - proper times, essential components, and what to do if you miss a prayer.",
      completed: true,
      difficulty: "Intermediate" as const,
    },
    {
      id: "5",
      title: "Shabbat Preparation",
      description: "What can and cannot be done before Shabbat, candle lighting times, and preparing the home.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "6",
      title: "39 Melachot - Shabbat Prohibitions",
      description: "Understanding the categories of forbidden work on Shabbat and their practical applications.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "7",
      title: "Kashrut Basics in the Kitchen",
      description: "Separating meat and dairy, kosher symbols, checking for insects, and common kitchen questions.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "8",
      title: "Laws of Lashon Hara",
      description: "Guarding your speech, when it's permitted to share information, and building positive communication.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
  ];

  const stats = {
    totalTime: "22h 10m",
    averageSession: "28 min",
    streak: 35,
    completedTopics: 35,
    totalTopics: 100,
    progressPercentage: 35,
  };

  const insights = [
    "Your daily consistency in studying halacha is excellent - you're building strong practical knowledge.",
    "You show particular strength in understanding blessing requirements and their proper applications.",
    "Your questions demonstrate thoughtful engagement with real-life halachic scenarios.",
  ];

  const challenges = [
    "The 39 Melachot require systematic study - consider learning one category per week in depth.",
    "Review common mistakes in Birkat HaMazon to ensure you're fulfilling the mitzvah properly.",
    "Focus on understanding the underlying principles (ta'amei hamitzvot) behind the laws you're learning.",
  ];

  return (
    <LessonTemplate
      title="Daily Halacha"
      hebrewTitle="הלכה יומית"
      description="Build halachic fluency one day at a time. Practical rulings on blessings, prayer, Shabbat, kashrut, and daily life based on Shulchan Aruch."
      icon={<Scale className="w-8 h-8 text-white" />}
      topics={topics}
      stats={stats}
      insights={insights}
      challenges={challenges}
      color="green"
    />
  );
}
