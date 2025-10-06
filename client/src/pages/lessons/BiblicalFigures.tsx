import LessonTemplate from "@/components/LessonTemplate";
import { Users } from "lucide-react";

export default function BiblicalFigures() {
  const topics = [
    {
      id: "1",
      title: "Avraham Avinu - Father of Faith",
      description: "Journey from Ur, hospitality, passing ten tests, and establishing monotheism. Chesed personified.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "2",
      title: "Sarah Imeinu - Mother of the Nation",
      description: "Prophecy greater than Abraham's, strength in adversity, and the power of laughter.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "3",
      title: "Moshe Rabbeinu - Greatest Prophet",
      description: "From prince to shepherd to leader. Humility, leadership, and bringing down the Torah.",
      completed: true,
      difficulty: "Intermediate" as const,
    },
    {
      id: "4",
      title: "King David - Warrior and Poet",
      description: "From shepherd boy to king. Author of Psalms, repentance, and establishing Jerusalem.",
      completed: true,
      difficulty: "Intermediate" as const,
    },
    {
      id: "5",
      title: "Queen Esther - Hidden Heroine",
      description: "Courage in the palace, hidden identity, and saving the Jewish people from destruction.",
      completed: false,
      difficulty: "Beginner" as const,
    },
    {
      id: "6",
      title: "Yosef HaTzaddik - The Righteous",
      description: "Dreams, slavery, temptation, and rising to power. Forgiveness and divine providence.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "7",
      title: "Miriam the Prophetess",
      description: "Watching over baby Moses, leading women in song, and the well that followed Israel.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "8",
      title: "Ruth - The Convert",
      description: "Loyalty, conversion, and becoming the grandmother of King David. Chesed and commitment.",
      completed: false,
      difficulty: "Beginner" as const,
    },
    {
      id: "9",
      title: "Yaakov Avinu - Israel",
      description: "Struggle with angels and men, twelve tribes, and transformation through adversity.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "10",
      title: "Devorah the Judge",
      description: "Female leadership, prophecy, and military victory. Wisdom and courage combined.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
  ];

  const stats = {
    totalTime: "14h 50m",
    averageSession: "35 min",
    streak: 16,
    completedTopics: 4,
    totalTopics: 20,
    progressPercentage: 20,
  };

  const insights = [
    "You excel at identifying character traits and extracting personal lessons from biblical narratives.",
    "Your compare/contrast analyses show deep understanding of different leadership styles.",
    "Consider exploring how these figures are portrayed in Midrash vs. the plain biblical text.",
  ];

  const challenges = [
    "Review the chronological timeline of biblical figures to understand historical context.",
    "Focus on understanding how each figure's challenges relate to their unique mission.",
    "Create character maps showing relationships and influences between different biblical personalities.",
  ];

  return (
    <LessonTemplate
      title="Biblical & Historical Figures"
      hebrewTitle="דמויות תנכיות"
      description="Find yourself in their journey. Character studies of key Torah personalities with traits, decisions, spiritual messages, and life lessons."
      icon={<Users className="w-8 h-8 text-white" />}
      topics={topics}
      stats={stats}
      insights={insights}
      challenges={challenges}
      color="blue"
    />
  );
}
