import LessonTemplate from "@/components/LessonTemplate";
import { ScrollText } from "lucide-react";

export default function Talmud() {
  const topics = [
    {
      id: "1",
      title: "Introduction to Talmudic Logic",
      description: "Understanding the structure of Talmudic debate, question and answer format, and reasoning methods.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "2",
      title: "Famous Talmudic Stories",
      description: "Hillel and Shammai, Rabbi Akiva, Rabbi Yochanan ben Zakkai, and other inspiring narratives.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "3",
      title: "The Oven of Akhnai",
      description: "A profound debate about authority, majority rule, and divine intervention in halachic decisions.",
      completed: true,
      difficulty: "Intermediate" as const,
    },
    {
      id: "4",
      title: "Talmudic Principles of Interpretation",
      description: "The 13 hermeneutical rules of Rabbi Ishmael and how they unlock deeper textual meanings.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "5",
      title: "Aggadic Passages in the Talmud",
      description: "Non-legal narratives that teach ethics, theology, and life wisdom through stories.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "6",
      title: "Key Talmudic Terms Glossary",
      description: "Mastering essential Aramaic and Hebrew terms used throughout Talmudic discussions.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "7",
      title: "The Debate Format: Kushya and Terutz",
      description: "Understanding how questions (kushya) and answers (terutz) structure Talmudic reasoning.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "8",
      title: "Talmudic Ethics and Mussar",
      description: "Ethical teachings embedded in legal discussions - character development through study.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
  ];

  const stats = {
    totalTime: "15h 30m",
    averageSession: "38 min",
    streak: 12,
    completedTopics: 4,
    totalTopics: 10,
    progressPercentage: 40,
  };

  const insights = [
    "You demonstrate strong analytical skills in following Talmudic debates and understanding the logical flow.",
    "Your engagement with Aggadic stories shows appreciation for the ethical dimensions of Talmud study.",
    "Consider studying with a chavruta (study partner) to enhance your understanding through discussion.",
  ];

  const challenges = [
    "The 13 hermeneutical principles require memorization and practice - review them systematically.",
    "Aramaic vocabulary can be challenging - create a personal glossary as you encounter new terms.",
    "Focus on understanding the difference between Tannaim (Mishnaic sages) and Amoraim (Talmudic sages).",
  ];

  return (
    <LessonTemplate
      title="Talmud (Gemara)"
      hebrewTitle="תלמוד גמרא"
      description="Explore selected Talmudic stories and concepts with clear explanations, visual breakdowns, and key terms. A conversation across generations."
      icon={<ScrollText className="w-8 h-8 text-white" />}
      topics={topics}
      stats={stats}
      insights={insights}
      challenges={challenges}
      color="purple"
    />
  );
}
