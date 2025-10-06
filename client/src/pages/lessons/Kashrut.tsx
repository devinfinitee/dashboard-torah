import LessonTemplate from "@/components/LessonTemplate";
import { FileText } from "lucide-react";

export default function Kashrut() {
  const topics = [
    {
      id: "1",
      title: "Introduction to Kashrut",
      description: "Biblical sources, reasons for kosher laws, and the spiritual dimension of eating.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "2",
      title: "Kosher Animals, Birds, and Fish",
      description: "Signs of kosher species, forbidden animals, and how to identify kosher fish.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "3",
      title: "Meat and Dairy Separation",
      description: "The prohibition of mixing, waiting times, separate utensils, and practical kitchen setup.",
      completed: true,
      difficulty: "Intermediate" as const,
    },
    {
      id: "4",
      title: "Shechita - Kosher Slaughter",
      description: "The process of ritual slaughter, who can perform it, and why it's required.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "5",
      title: "Checking for Insects",
      description: "Which produce requires checking, how to check properly, and common problem areas.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "6",
      title: "Kosher Certification (Hechsherim)",
      description: "Understanding different kosher symbols, reliability standards, and what to look for.",
      completed: true,
      difficulty: "Beginner" as const,
    },
    {
      id: "7",
      title: "Kosher Kitchen Setup",
      description: "Organizing your kitchen, kashering utensils, and avoiding common mistakes.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "8",
      title: "Eating Out and Travel",
      description: "Restaurant guidelines, traveling while keeping kosher, and reading ingredient labels.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
    {
      id: "9",
      title: "Bishul Akum and Pat Akum",
      description: "Foods cooked or baked by non-Jews, when it's permitted, and practical applications.",
      completed: false,
      difficulty: "Advanced" as const,
    },
    {
      id: "10",
      title: "Common Kashrut Questions",
      description: "FAQ about ingredients, additives, medicines, and modern food technology.",
      completed: false,
      difficulty: "Intermediate" as const,
    },
  ];

  const stats = {
    totalTime: "13h 25m",
    averageSession: "27 min",
    streak: 22,
    completedTopics: 18,
    totalTopics: 25,
    progressPercentage: 72,
  };

  const insights = [
    "You show excellent attention to detail in understanding kashrut requirements and applications.",
    "Your practical questions demonstrate real-world engagement with keeping a kosher kitchen.",
    "Consider creating a quick-reference guide for checking produce in your area.",
  ];

  const challenges = [
    "Review the different methods of kashering utensils (hagalah, libun) with specific examples.",
    "Focus on understanding ingredient lists and identifying problematic additives.",
    "Create a personal kosher restaurant and product list for your location.",
  ];

  return (
    <LessonTemplate
      title="Kashrut (Kosher Laws)"
      hebrewTitle="כשרות"
      description="Elevate what you eat through knowledge and awareness. Kashrut basics, kitchen issues, checking for insects, and practical FAQ."
      icon={<FileText className="w-8 h-8 text-white" />}
      topics={topics}
      stats={stats}
      insights={insights}
      challenges={challenges}
      color="green"
    />
  );
}
