import LessonTemplate from "@/components/LessonTemplate";
import { Flame } from "lucide-react";

export default function Shabbat() {
  const topics = [
    {
      id: "1",
      title: "The Spiritual Meaning of Shabbat",
      description: "Why we rest, what we gain, and the concept of menucha (rest). Shabbat as a taste of the World to Come.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "2",
      title: "Preparing for Shabbat",
      description: "Erev Shabbat checklist, cooking, cleaning, and creating the right atmosphere. Kavod Shabbat.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "3",
      title: "Candle Lighting",
      description: "Times, blessings, number of candles, and the spiritual significance of bringing in light.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "4",
      title: "Kiddush and Shabbat Meals",
      description: "Friday night and Shabbat day Kiddush, three meals, challah, and zemiros (songs).",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "5",
      title: "The 39 Melachot - Categories of Work",
      description: "Understanding the biblical categories of forbidden labor and their modern applications.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "6",
      title: "Muktzeh - Items Not to Handle",
      description: "Categories of muktzeh, practical applications, and common questions about moving objects.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "7",
      title: "Shabbat in the Kitchen",
      description: "Cooking, warming food, using timers, and practical halachot for meal preparation.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "8",
      title: "Havdalah - Separating the Sacred",
      description: "Ending Shabbat with wine, spices, and fire. The transition back to the weekday.",
      completed: false,
      difficulty: "Beginner" as const,
    },
    {
      id: "9",
      title: "Oneg Shabbat - Shabbat Delight",
      description: "Making Shabbat enjoyable through food, rest, learning, and family time. Balance of restrictions and pleasure.",
      completed: false,
      difficulty: "Beginner" as const,
    },
    {
      id: "10",
      title: "Common Shabbat Questions",
      description: "Electricity, medicine, emergencies, and modern technology. Practical halachic guidance.",
      completed: false,
      difficulty: "Advanced" as const,
    },
  ];

  const stats = {
    totalTime: "20h 15m",
    averageSession: "40 min",
    streak: 28,
    completedTopics: 12,
    totalTopics: 30,
    progressPercentage: 40,
  };

  const insights = [
    "Your weekly Shabbat preparation shows excellent commitment to creating a meaningful experience.",
    "You demonstrate strong understanding of the balance between Shabbat restrictions and enjoyment.",
    "Consider learning one new Shabbat song (zemer) each week to enhance your meals.",
  ];

  const challenges = [
    "The 39 Melachot require systematic study - focus on one category per week with practical examples.",
    "Review muktzeh categories with real-life scenarios to build intuitive understanding.",
    "Create a personal Shabbat preparation checklist tailored to your household's needs.",
  ];

  return (
    <LessonTemplate
      title="Shabbat"
      hebrewTitle="שבת קודש"
      description="Bring light into your week. Laws of Shabbat, spiritual meaning, preparation tips, and one-minute inspiration for Erev Shabbat."
      icon={<Flame className="w-8 h-8 text-white" />}
      topics={topics}
      stats={stats}
      insights={insights}
      challenges={challenges}
      color="purple"
    />
  );
}
