import LessonTemplate from "@/components/LessonTemplate";
import { Calendar } from "lucide-react";

export default function Holidays() {
  const topics = [
    {
      id: "1",
      title: "Rosh Hashanah - The Jewish New Year",
      description: "Themes of judgment, repentance, and renewal. Shofar, prayers, and symbolic foods.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "2",
      title: "Yom Kippur - Day of Atonement",
      description: "The holiest day. Fasting, prayer, and complete forgiveness. Five prohibitions and spiritual elevation.",
      completed: true,
      difficulty: "Intermediate" as const,
    },
    {
      id: "3",
      title: "Sukkot - Festival of Booths",
      description: "Living in temporary dwellings, four species, and celebrating divine protection.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "4",
      title: "Chanukah - Festival of Lights",
      description: "Miracle of the oil, rededication of the Temple, and spiritual resistance against assimilation.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "5",
      title: "Purim - Celebration of Deliverance",
      description: "The Megillah story, hidden miracles, joy, and unity. Mitzvot of the day.",
      completed: false,
      difficulty: "Beginner" as const,
    },
    {
      id: "6",
      title: "Pesach - Passover",
      description: "Exodus from Egypt, Seder night, matzah and maror, and the journey to freedom.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "7",
      title: "Shavuot - Receiving the Torah",
      description: "Giving of the Torah at Sinai, all-night learning, dairy foods, and commitment to Torah study.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "8",
      title: "Tisha B'Av - Day of Mourning",
      description: "Destruction of both Temples, fasting, and hope for rebuilding. Lessons in unity and baseless hatred.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "9",
      title: "Tu B'Shvat - New Year for Trees",
      description: "Environmental awareness, fruits of Israel, and our connection to the land.",
      completed: false,
      difficulty: "Beginner" as const,
    },
  ];

  const stats = {
    totalTime: "16h 35m",
    averageSession: "30 min",
    streak: 19,
    completedTopics: 4,
    totalTopics: 9,
    progressPercentage: 44,
  };

  const insights = [
    "You demonstrate strong understanding of the spiritual themes underlying each holiday.",
    "Your preparation checklists show excellent practical planning for holiday observance.",
    "Consider exploring the connection between holidays and the agricultural cycle in Israel.",
  ];

  const challenges = [
    "Review the specific halachot for each holiday to ensure proper observance.",
    "Focus on understanding the deeper kabbalistic meanings of holiday rituals and customs.",
    "Create a personal holiday guide with your family's customs and traditions.",
  ];

  return (
    <LessonTemplate
      title="Jewish Holidays (Chagim)"
      hebrewTitle="חגים ומועדים"
      description="Celebrate with depth. Overview of each holiday's origins, mitzvot, laws, customs, and spiritual themes with preparation checklists."
      icon={<Calendar className="w-8 h-8 text-white" />}
      topics={topics}
      stats={stats}
      insights={insights}
      challenges={challenges}
      color="orange"
    />
  );
}
