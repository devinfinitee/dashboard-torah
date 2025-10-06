import LessonTemplate from "@/components/LessonTemplate";
import { BookOpen } from "lucide-react";

export default function Mishnah() {
  const topics = [
    {
      id: "1",
      title: "Seder Zeraim - Seeds & Agriculture",
      description: "Laws of blessings, tithes, agricultural gifts, and produce. Foundation of gratitude and sustenance.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "2",
      title: "Seder Moed - Appointed Times",
      description: "Shabbat, festivals, fasts, and special days. Understanding the Jewish calendar and its sanctity.",
      completed: true,
      difficulty: "Intermediate" as const,
    },
    {
      id: "3",
      title: "Seder Nashim - Women & Family",
      description: "Marriage, divorce, vows, and family law. The structure and sanctity of Jewish family life.",
      completed: true,
      difficulty: "Intermediate" as const,
    },
    {
      id: "4",
      title: "Seder Nezikin - Damages",
      description: "Civil and criminal law, courts, oaths, and ethics. Justice and responsibility in society.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "5",
      title: "Seder Kodashim - Holy Things",
      description: "Temple service, sacrifices, and dietary laws. The sacred service and spiritual elevation.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "6",
      title: "Seder Tahorot - Purities",
      description: "Ritual purity and impurity laws. Spiritual cleanliness and holiness.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "7",
      title: "Tractate Berachot - Blessings",
      description: "Daily prayers, blessings over food, and Shema. Building a life of constant gratitude.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "8",
      title: "Tractate Pirkei Avot - Ethics of the Fathers",
      description: "Timeless wisdom and ethical teachings from the Sages. Character development and life guidance.",
      completed: true,
      difficulty: "Beginner" as const,
    },
  ];

  const stats = {
    totalTime: "28h 15m",
    averageSession: "42 min",
    streak: 24,
    completedTopics: 18,
    totalTopics: 63,
    progressPercentage: 29,
  };

  const insights = [
    "You excel in understanding Pirkei Avot's ethical teachings and applying them to modern life situations.",
    "Your grasp of Seder Moed shows strong comprehension of the Jewish calendar and festival laws.",
    "Consider creating flashcards for key Mishnaic terms to strengthen your Hebrew vocabulary.",
  ];

  const challenges = [
    "Seder Nezikin contains complex legal scenarios - break them down into smaller case studies.",
    "Review the structure of the six orders (Sedarim) to better understand the organization of the Mishnah.",
    "Focus on understanding the debates between Beit Hillel and Beit Shammai in various tractates.",
  ];

  return (
    <LessonTemplate
      title="Mishnah"
      hebrewTitle="משנה"
      description="Explore the foundation of Oral Torah organized by six orders. Each Mishnah includes Hebrew text, simplified explanations, key terms, and quizzes."
      icon={<BookOpen className="w-8 h-8 text-white" />}
      topics={topics}
      stats={stats}
      insights={insights}
      challenges={challenges}
      color="blue"
    />
  );
}
