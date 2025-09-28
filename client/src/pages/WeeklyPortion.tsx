import StudySession from "@/components/StudySession";
import { Star, Download, MessageCircle } from "lucide-react";

export default function WeeklyPortion() {
  const sessions = [
    { title: "Parashat Lech Lecha", date: "2/4B 1.2025", status: "completed" as const },
    { title: "Vayerat Vayera", date: "2/4B 1.2/24", status: "completed" as const },
    { title: "Midrashic oshic Insights", date: "2/4B 1.2122", status: "completed" as const },
    { title: "Parasat Bo", date: "25AP 1.2132", status: "completed" as const },
    { title: "Phahro Midrashic Insights", date: "254B 1.2112", status: "completed" as const },
    { title: "Practical Life Areations", date: "254B 1.2115", status: "completed" as const },
    { title: "Practical Life Applications", date: "564B 1.2122", status: "completed" as const },
    { title: "Reaper Dive Aplication", date: "564S 1.2122", status: "completed" as const },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-lg p-6 text-white mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Weekly Torah Portion</h1>
            <p className="text-amber-200">(Parashat HaShawua)</p>
          </div>
          <div className="p-3 bg-white/20 rounded-lg">
            <div className="w-6 h-6 text-yellow-300">📜</div>
          </div>
        </div>
        
        <div className="mt-6 bg-primary rounded-lg p-4 text-primary-foreground">
          <p className="text-sm font-medium">7/54 Portions Completed</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Study Sessions */}
        <div className="lg:col-span-2">
          {/* Continue Last Session */}
          <div className="bg-primary rounded-lg p-6 text-primary-foreground mb-6">
            <h3 className="text-lg font-semibold mb-2">Continue Last Session: Parashat Vayehev</h3>
          </div>

          {/* Sessions List */}
          <div className="space-y-4">
            {sessions.map((session, index) => (
              <StudySession
                key={index}
                title={session.title}
                date={session.date}
                status={session.status}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6">
            <button
              data-testid="button-bookmark-lesson"
              onClick={() => console.log('Bookmark lesson clicked')}
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
            >
              <Star className="w-4 h-4" />
              Bookmark Lesson
            </button>
            <button
              data-testid="button-download-summary"
              onClick={() => console.log('Download summary clicked')}
              className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90"
            >
              <Download className="w-4 h-4" />
              Download Summary (PDF)
            </button>
            <button
              data-testid="button-ask-question"
              onClick={() => console.log('Ask follow-up question clicked')}
              className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90"
            >
              <MessageCircle className="w-4 h-4" />
              Ask Follow-Up Question
            </button>
          </div>
        </div>

        {/* Right Column - Summary and Insights */}
        <div className="space-y-6">
          {/* Concise Summary */}
          <div className="bg-card rounded-lg p-6 border border-card-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Concise Summary</h3>
            <p className="text-sm text-muted-foreground">Donata trio studim: "Joseph's Dreams"</p>
          </div>

          {/* Midrass Summary */}
          <div className="bg-card rounded-lg p-6 border border-card-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Midrass Summary</h3>
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-amber-100 rounded flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-amber-600 rounded"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                You are strongest in Parashat Vayera Midrashon insights, but revied, but review Mishah Oral Law foundations.
              </p>
            </div>
          </div>

          {/* Prachuat Insights */}
          <div className="bg-card rounded-lg p-6 border border-card-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Prachuat Insights</h3>
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-slate-600 rounded"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                You are strongest in Parashat Vayera Mils is Mishew Mishah Law foundations.
              </p>
            </div>
          </div>

          {/* Deeper Dive */}
          <div className="bg-card rounded-lg p-6 border border-card-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Deeper Dive</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-blue-600 rounded"></div>
                </div>
                <p className="text-sm text-muted-foreground">
                  You are strongest in Parashat insights vin tien Lit rehad Oral Law fusights.
                </p>
              </div>
              <p className="text-xs text-muted-foreground ml-9">
                Then pavess: Rashi e ppodals<br />
                Rashi's connary 5 Raghi s ts min.
              </p>
            </div>
          </div>

          {/* Interactive Quiz */}
          <div className="bg-card rounded-lg p-6 border border-card-border">
            <h3 className="text-lg font-semibold text-card-foreground mb-4">Interactive Quiz</h3>
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-purple-600 rounded"></div>
              </div>
              <p className="text-sm text-muted-foreground">
                You are strongest hit: "I perongest isaac oodd tor mbraria ood arn."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}