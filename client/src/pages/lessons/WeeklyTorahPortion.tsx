import LessonTemplate from "@/components/LessonTemplate";
import { Calendar } from "lucide-react";

export default function WeeklyTorahPortion() {
  const topics = [
    {
      id: "1",
      title: "Parashat Bereshit - In the Beginning",
      description: "Creation of the world, Adam and Eve, Cain and Abel. Understanding the foundations of existence and human nature.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "2",
      title: "Parashat Noach - Noah and the Flood",
      description: "The story of Noah's ark, the flood, and the covenant with the rainbow. Lessons on righteousness and renewal.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "3",
      title: "Parashat Lech Lecha - Abraham's Journey",
      description: "Abraham's call to leave his homeland, the covenant, and the promise of descendants. Faith and trust in God.",
      completed: true,
      difficulty: "Intermediate" as const,
    },
    {
      id: "4",
      title: "Parashat Vayera - Abraham's Hospitality",
      description: "The three angels, Sodom and Gomorrah, the binding of Isaac. Hospitality, justice, and ultimate faith.",
      completed: true,
      difficulty: "Intermediate" as const,
    },
    {
      id: "5",
      title: "Parashat Chayei Sarah - Sarah's Life",
      description: "Sarah's death, finding a wife for Isaac, Abraham's final days. Life transitions and legacy.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "6",
      title: "Parashat Toldot - Isaac and His Sons",
      description: "Birth of Jacob and Esau, the sale of the birthright, Isaac's blessings. Sibling rivalry and destiny.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "7",
      title: "Parashat Vayetzei - Jacob's Dream",
      description: "Jacob's ladder, working for Rachel and Leah, birth of the tribes. Dreams, perseverance, and family.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "8",
      title: "Parashat Vayishlach - Jacob Wrestles",
      description: "Wrestling with the angel, reconciliation with Esau, Dinah's story. Struggle, transformation, and identity.",
      completed: false,
      difficulty: "Advanced" as const,
    },
  ];

  const stats = {
    totalTime: "12h 45m",
    averageSession: "35 min",
    streak: 18,
    completedTopics: 4,
    totalTopics: 54,
    progressPercentage: 7,
  };

  const insights = [
    "You are strongest in understanding Parashat Vayera's Midrashic insights, particularly the lessons on hospitality and faith.",
    "Your engagement with weekly quizzes shows excellent comprehension of the narrative flow and character development.",
    "Consider exploring more Rashi commentary to deepen your understanding of the text's deeper meanings.",
  ];

  const challenges = [
    "Review the chronology of events in Parashat Noach - the timeline can be complex.",
    "The binding of Isaac (Akeidat Yitzchak) contains profound philosophical questions worth revisiting.",
    "Focus on memorizing the names of Jacob's twelve sons in order - this is foundational for later studies.",
  ];

  return (
    <LessonTemplate
      title="Weekly Torah Portion"
      hebrewTitle="פרשת השבוע (Parashat HaShavua)"
      description="Journey through all 54 weekly Torah portions with summaries, Midrashic insights, practical applications, and weekly quizzes."
      icon={<Calendar className="w-8 h-8 text-white" />}
      topics={topics}
      stats={stats}
      insights={insights}
      challenges={challenges}
      color="amber"
    />
  );
}
