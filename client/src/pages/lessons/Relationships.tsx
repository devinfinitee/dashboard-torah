import LessonTemplate from "@/components/LessonTemplate";
import { Heart } from "lucide-react";

export default function Relationships() {
  const topics = [
    {
      id: "1",
      title: "Love and Kindness in Torah",
      description: "Biblical sources on love, chesed, and treating others with dignity. The foundation of relationships.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "2",
      title: "Adam and Chava - First Relationship",
      description: "Partnership, companionship, and the concept of 'ezer kenegdo' (helper opposite). Complementary roles.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "3",
      title: "Avraham and Sarah - Partnership in Mission",
      description: "Supporting each other's spiritual growth, facing challenges together, and shared purpose.",
      completed: true,
      difficulty: "Intermediate" as const,
    },
    {
      id: "4",
      title: "Communication in Relationships",
      description: "Speaking with respect, active listening, and resolving conflicts constructively. Torah guidance.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "5",
      title: "Shalom Bayit - Peace in the Home",
      description: "Creating harmony, compromise, and prioritizing peace. When to bend and when to stand firm.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "6",
      title: "Dating with Torah Values",
      description: "Approaching relationships with intention, boundaries, and clarity of purpose.",
      completed: false,
      difficulty: "Beginner" as const,
    },
    {
      id: "7",
      title: "Marriage in Jewish Law",
      description: "Kiddushin, ketubah, mutual obligations, and the sanctity of the marital bond.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "8",
      title: "Honoring Parents",
      description: "The mitzvah of kibud av v'em, practical applications, and balancing with other obligations.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "9",
      title: "Raising Children with Torah Values",
      description: "Education, discipline with love, and transmitting tradition to the next generation.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "10",
      title: "Boundaries and Respect",
      description: "Healthy boundaries in relationships, respecting personal space, and maintaining dignity.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
  ];

  const stats = {
    totalTime: "11h 40m",
    averageSession: "29 min",
    streak: 14,
    completedTopics: 3,
    totalTopics: 12,
    progressPercentage: 25,
  };

  const insights = [
    "You demonstrate thoughtful engagement with applying Torah wisdom to modern relationship challenges.",
    "Your reflection on biblical couples shows understanding of timeless relationship principles.",
    "Consider discussing these lessons with a partner or study group for deeper insights.",
  ];

  const challenges = [
    "Review the balance between individual growth and relationship commitment in Torah thought.",
    "Focus on practical communication techniques derived from Torah and rabbinic sources.",
    "Create a personal action plan for implementing one relationship principle each week.",
  ];

  return (
    <LessonTemplate
      title="Torah on Relationships"
      hebrewTitle="יחסים בתורה"
      description="Build deeper connections through Torah wisdom. Sources on love, kindness, boundaries, marriage, and communication with halachic and emotional guidance."
      icon={<Heart className="w-8 h-8 text-white" />}
      topics={topics}
      stats={stats}
      insights={insights}
      challenges={challenges}
      color="red"
    />
  );
}
