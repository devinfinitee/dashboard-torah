import LessonTemplate from "@/components/LessonTemplate";
import { Lightbulb } from "lucide-react";

export default function LikuteiSichos() {
  const topics = [
    {
      id: "1",
      title: "Introduction to the Rebbe's Teachings",
      description: "Understanding the Lubavitcher Rebbe's approach to Torah, life, and Jewish outreach.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "2",
      title: "Emunah - Faith in Daily Life",
      description: "Practical faith, trusting in divine providence, and seeing God's hand in everything.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "3",
      title: "Ahavat Yisrael - Love of Fellow Jews",
      description: "Unconditional love, judging favorably, and reaching out to every Jew regardless of observance level.",
      completed: true,
      difficulty: "Intermediate" as const,
    },
    {
      id: "4",
      title: "Leadership and Responsibility",
      description: "Every person's unique mission, taking responsibility for the Jewish people, and positive influence.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "5",
      title: "Simcha - Joy in Service",
      description: "Serving God with joy, overcoming sadness, and the power of positive energy.",
      completed: false,
      difficulty: "Beginner" as const,
    },
    {
      id: "6",
      title: "Torah and Science",
      description: "The Rebbe's approach to reconciling Torah wisdom with modern scientific understanding.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "7",
      title: "Moshiach and Redemption",
      description: "Living with awareness of redemption, hastening Moshiach's arrival, and practical preparations.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "8",
      title: "Education and Chinuch",
      description: "The Rebbe's revolutionary approach to Jewish education and raising children with values.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "9",
      title: "Shlichus - Being an Emissary",
      description: "Every Jew as God's emissary, spreading light, and making the world a dwelling place for God.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "10",
      title: "Weekly Sicha on the Parasha",
      description: "The Rebbe's unique insights on the weekly Torah portion with practical applications.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
  ];

  const stats = {
    totalTime: "9h 55m",
    averageSession: "31 min",
    streak: 11,
    completedTopics: 3,
    totalTopics: 15,
    progressPercentage: 20,
  };

  const insights = [
    "You show deep appreciation for the Rebbe's practical approach to Torah and mitzvot.",
    "Your engagement with Ahavat Yisrael teachings demonstrates genuine desire to love and help others.",
    "Consider implementing one teaching each week in your daily life for transformative growth.",
  ];

  const challenges = [
    "The Rebbe's sichos often contain multiple layers - review them slowly and repeatedly.",
    "Focus on understanding the connection between Chassidic philosophy and practical action.",
    "Create a study schedule to cover one sicha per week aligned with the Torah portion.",
  ];

  return (
    <LessonTemplate
      title="Likutei Sichos"
      hebrewTitle="לקוטי שיחות"
      description="Wisdom that uplifts - from the Rebbe's heart to yours. Translated excerpts on emunah, leadership, Ahavat Yisrael, and practical applications in modern life."
      icon={<Lightbulb className="w-8 h-8 text-white" />}
      topics={topics}
      stats={stats}
      insights={insights}
      challenges={challenges}
      color="amber"
    />
  );
}
