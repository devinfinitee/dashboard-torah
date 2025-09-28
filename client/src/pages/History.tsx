import { useState } from "react";
import { Search, Calendar, Download, FileText, Eye } from "lucide-react";

export default function History() {
  const [activeTab, setActiveTab] = useState("history");
  
  const historyItems = [
    {
      title: "Parashat Vayera - Midrashic Insights",
      date: "2/4 B 1.2024",
      status: "completed",
      action: "View Transcript"
    },
    {
      title: "Parashat Vayera 10, 2025, 10:30 AM", 
      date: "2/4 B 1.2025",
      status: "completed",
      action: "View Transcript"
    },
    {
      title: "Parasfa Vayera - Midrashic Insights",
      date: "2/4 B 1.2011", 
      status: "available",
      action: "Status"
    },
    {
      title: "Mgeso Hoye mot. PGS Ahrps Lue",
      date: "5/6B 1.115",
      status: "available", 
      action: "Download PDF"
    },
    {
      title: "Hasero Bhad Minrtierxnoocht tatwal",
      date: "5/4P 1.1137",
      status: "available",
      action: "Download PDF"
    },
    {
      title: "Practical Hiartatc Alphfhice Lessons",
      date: "554B 1.2121",
      status: "available",
      action: "Download PDF"
    }
  ];

  return (
    <div className="p-3 sm:p-6 max-w-full overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-800 to-amber-900 rounded-lg p-4 sm:p-6 text-white mb-4 sm:mb-6">
        <div className="flex items-center justify-between">
          <div className="min-w-0 flex-1">
            <h1 className="text-lg sm:text-2xl font-bold mb-2 break-words">Weekly Torah Portion</h1>
            <p className="text-amber-200 text-sm sm:text-base">(Parashat HaShawua)</p>
          </div>
          <div className="p-2 sm:p-3 bg-white/20 rounded-lg flex-shrink-0 ml-4">
            <div className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300">📜</div>
          </div>
        </div>
      </div>

      {/* Learning History Section */}
      <div className="bg-card rounded-lg p-4 sm:p-6 border border-card-border mb-4 sm:mb-6 min-w-0">
        <h2 className="text-lg sm:text-xl font-semibold text-card-foreground mb-4 sm:mb-6">Learning History</h2>
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 overflow-x-auto">
          <button
            data-testid="tab-history"
            onClick={() => setActiveTab("history")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "history" 
                ? "bg-amber-100 text-amber-800" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <FileText className="w-4 h-4" />
            Backoru History
          </button>
          <button
            data-testid="tab-bookmarks"
            onClick={() => setActiveTab("bookmarks")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "bookmarks" 
                ? "bg-primary text-primary-foreground" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            ⭐ Bookmarks & Favorites
          </button>
          <button
            data-testid="tab-pdfs"
            onClick={() => setActiveTab("pdfs")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "pdfs" 
                ? "bg-secondary text-secondary-foreground" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <FileText className="w-4 h-4" />
            My PDFs
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex-1 relative min-w-0">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs sm:text-sm text-muted-foreground">Topic</span>
            <input
              data-testid="input-topic-search"
              type="text"
              className="w-full pl-12 sm:pl-16 pr-4 py-2 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              onChange={(e) => console.log('Topic search:', e.target.value)}
            />
          </div>
          <div className="relative flex-shrink-0">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              data-testid="input-date-range"
              type="text"
              placeholder="Date Range"
              className="w-full sm:w-auto pl-10 pr-4 py-2 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              onChange={(e) => console.log('Date range:', e.target.value)}
            />
          </div>
          <button
            data-testid="button-search-history"
            onClick={() => console.log('Search clicked')}
            className="p-2 bg-muted rounded-lg hover:bg-accent flex-shrink-0 self-start sm:self-auto"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        {/* Table Header - Hidden on mobile */}
        <div className="hidden sm:grid grid-cols-4 gap-4 pb-4 border-b border-border">
          <div className="text-sm font-medium text-muted-foreground">Date & Time</div>
          <div className="text-sm font-medium text-muted-foreground">Date Range</div>
          <div className="text-sm font-medium text-muted-foreground">Status</div>
          <div className="text-sm font-medium text-muted-foreground">Actions</div>
        </div>

        {/* History Items */}
        <div className="space-y-4 mt-4">
          {historyItems.map((item, index) => (
            <div key={index} className="sm:grid sm:grid-cols-4 sm:gap-4 py-3 border-b border-border last:border-b-0 space-y-2 sm:space-y-0">
              {/* Mobile: Card layout, Desktop: Grid layout */}
              <div className="min-w-0">
                <h4 className="font-medium text-card-foreground break-words">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.date}</p>
              </div>
              <div className="hidden sm:block"></div>
              <div className="flex items-center justify-between sm:justify-start">
                <div className="flex items-center gap-2">
                  {item.status === "completed" && (
                    <>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">Completed</span>
                    </>
                  )}
                  {item.status === "available" && (
                    <>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-green-600">{item.action}</span>
                    </>
                  )}
                </div>
                {/* Mobile: Show actions inline */}
                <div className="flex gap-2 sm:hidden">
                  {item.action === "View Transcript" && (
                    <button
                      data-testid={`button-view-${index}`}
                      onClick={() => console.log('View clicked for:', item.title)}
                      className="p-2 text-muted-foreground hover:text-foreground bg-muted rounded-lg"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  )}
                  {item.action === "Download PDF" && (
                    <button
                      data-testid={`button-download-${index}`}
                      onClick={() => console.log('Download clicked for:', item.title)}
                      className="p-2 text-muted-foreground hover:text-foreground bg-muted rounded-lg"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
              {/* Desktop: Actions in separate column */}
              <div className="hidden sm:flex gap-2">
                {item.action === "View Transcript" && (
                  <button
                    data-testid={`button-view-${index}`}
                    onClick={() => console.log('View clicked for:', item.title)}
                    className="p-1 text-muted-foreground hover:text-foreground"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                )}
                {item.action === "Download PDF" && (
                  <button
                    data-testid={`button-download-${index}`}
                    onClick={() => console.log('Download clicked for:', item.title)}
                    className="p-1 text-muted-foreground hover:text-foreground"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote at bottom */}
      <div className="bg-muted rounded-lg p-4 text-center">
        <p className="text-sm text-muted-foreground italic">
          "אדרי מי יגעיזת בקוים מלין מי בעמ אחד שרי הובחיב בורו שרי מלי תעירנו"
        </p>
      </div>
    </div>
  );
}