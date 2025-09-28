import { useState } from "react";
import StudySession from "@/components/StudySession";
import TorahBotModal from "@/components/TorahBotModal";
import { Star, Download, MessageCircle } from "lucide-react";

export default function WeeklyPortion() {
  const [isBotModalOpen, setIsBotModalOpen] = useState(false);
  
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
    <div className="p-4 sm:p-6 max-w-full">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-lg p-4 sm:p-6 text-white mb-4 sm:mb-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold mb-2 truncate">Weekly Torah Portion</h1>
            <p className="text-amber-200 text-sm truncate">(Parashat HaShawua)</p>
          </div>
          <div className="p-2 sm:p-3 bg-white/20 rounded-lg flex-shrink-0 ml-3">
            <div className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300">📜</div>
          </div>
        </div>
        
        <div className="mt-4 sm:mt-6 bg-primary rounded-lg p-3 sm:p-4 text-primary-foreground">
          <p className="text-sm font-medium">7/54 Portions Completed</p>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Left Column - Study Sessions */}
        <div className="xl:col-span-2">
          {/* Continue Last Session */}
          <div className="bg-primary rounded-lg p-4 sm:p-6 text-primary-foreground mb-4 sm:mb-6">
            <h3 className="text-base sm:text-lg font-semibold mb-2">Continue Last Session: Parashat Vayehev</h3>
          </div>

          {/* Sessions List */}
          <div className="space-y-3 sm:space-y-4">
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
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-4 sm:mt-6">
            <button
              data-testid="button-bookmark-lesson"
              onClick={() => console.log('Bookmark lesson clicked')}
              className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 text-sm"
            >
              <Star className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">Bookmark Lesson</span>
            </button>
            <button
              data-testid="button-download-summary"
              onClick={() => console.log('Download summary clicked')}
              className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 text-sm"
            >
              <Download className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">Download Summary (PDF)</span>
            </button>
            <button
              data-testid="button-ask-question"
              onClick={() => setIsBotModalOpen(true)}
              className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 text-sm"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">Ask Follow-Up Question</span>
            </button>
          </div>
        </div>

        {/* Right Column - Summary and Insights */}
        <div className="space-y-4 sm:space-y-6">
          {/* Concise Summary */}
          <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border">
            <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">Concise Summary</h3>
            <p className="text-sm text-muted-foreground break-words">Donata trio studim: "Joseph's Dreams"</p>
          </div>

          {/* Midrass Summary */}
          <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border">
            <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">Midrass Summary</h3>
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-amber-100 rounded flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-amber-600 rounded"></div>
              </div>
              <p className="text-sm text-muted-foreground break-words min-w-0">
                You are strongest in Parashat Vayera Midrashon insights, but revied, but review Mishah Oral Law foundations.
              </p>
            </div>
          </div>

          {/* Prachuat Insights */}
          <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border">
            <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">Prachuat Insights</h3>
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-slate-600 rounded"></div>
              </div>
              <p className="text-sm text-muted-foreground break-words min-w-0">
                You are strongest in Parashat Vayera Mils is Mishew Mishah Law foundations.
              </p>
            </div>
          </div>

          {/* Deeper Dive */}
          <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border">
            <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">Deeper Dive</h3>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 bg-blue-600 rounded"></div>
                </div>
                <p className="text-sm text-muted-foreground break-words min-w-0">
                  You are strongest in Parashat insights vin tien Lit rehad Oral Law fusights.
                </p>
              </div>
              <p className="text-xs text-muted-foreground ml-9 break-words">
                Then pavess: Rashi e ppodals<br />
                Rashi's connary 5 Raghi s ts min.
              </p>
            </div>
          </div>

          {/* Interactive Quiz */}
          <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border">
            <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">Interactive Quiz</h3>
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center flex-shrink-0">
                <div className="w-3 h-3 bg-purple-600 rounded"></div>
              </div>
              <p className="text-sm text-muted-foreground break-words min-w-0">
                You are strongest hit: "I perongest isaac oodd tor mbraria ood arn."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Torah Bot Modal */}
      <TorahBotModal 
        isOpen={isBotModalOpen} 
        onClose={() => setIsBotModalOpen(false)} 
      />
    </div>
  );
}