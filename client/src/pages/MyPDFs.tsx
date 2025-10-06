import { useState } from "react";
import { Download, FileText, Trash2, Search, Calendar, Eye } from "lucide-react";

interface PDF {
  id: string;
  title: string;
  lesson: string;
  dateCreated: string;
  size: string;
  pages: number;
}

export default function MyPDFs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pdfs, setPdfs] = useState<PDF[]>([
    {
      id: "1",
      title: "Parashat Vayera - Complete Summary",
      lesson: "Weekly Torah Portion",
      dateCreated: "Jan 15, 2025",
      size: "2.4 MB",
      pages: 8,
    },
    {
      id: "2",
      title: "Mishnah Seder Moed - Study Notes",
      lesson: "Mishnah",
      dateCreated: "Jan 12, 2025",
      size: "3.1 MB",
      pages: 12,
    },
    {
      id: "3",
      title: "Daily Halacha - Blessings Guide",
      lesson: "Daily Halacha",
      dateCreated: "Jan 10, 2025",
      size: "1.8 MB",
      pages: 6,
    },
    {
      id: "4",
      title: "Jewish Ethics - Humility and Patience",
      lesson: "Jewish Ethics & Mussar",
      dateCreated: "Jan 8, 2025",
      size: "2.2 MB",
      pages: 7,
    },
    {
      id: "5",
      title: "Talmudic Stories Collection",
      lesson: "Aggadic Stories",
      dateCreated: "Jan 5, 2025",
      size: "4.5 MB",
      pages: 15,
    },
    {
      id: "6",
      title: "Shabbat Laws - Complete Reference",
      lesson: "Shabbat",
      dateCreated: "Jan 3, 2025",
      size: "5.2 MB",
      pages: 18,
    },
    {
      id: "7",
      title: "Kashrut Kitchen Guide",
      lesson: "Kashrut",
      dateCreated: "Dec 28, 2024",
      size: "2.9 MB",
      pages: 10,
    },
    {
      id: "8",
      title: "Biblical Figures - Abraham's Journey",
      lesson: "Biblical Figures",
      dateCreated: "Dec 25, 2024",
      size: "3.3 MB",
      pages: 11,
    },
  ]);

  const deletePDF = (id: string) => {
    setPdfs(pdfs.filter(pdf => pdf.id !== id));
  };

  const downloadPDF = (pdf: PDF) => {
    console.log('Downloading:', pdf.title);
    // TODO: Implement actual PDF download
  };

  const filteredPDFs = pdfs.filter(pdf => 
    pdf.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    pdf.lesson.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalSize = pdfs.reduce((acc, pdf) => {
    const size = parseFloat(pdf.size);
    return acc + size;
  }, 0);

  return (
    <div className="p-4 sm:p-6 max-w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <FileText className="w-8 h-8 text-primary" />
          My PDFs
        </h1>
        <p className="text-muted-foreground">Your downloaded Torah study summaries and reference materials</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search PDFs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-card rounded-lg p-4 border border-card-border">
          <div className="text-2xl font-bold text-primary">{pdfs.length}</div>
          <div className="text-xs text-muted-foreground">Total PDFs</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-card-border">
          <div className="text-2xl font-bold text-primary">{totalSize.toFixed(1)} MB</div>
          <div className="text-xs text-muted-foreground">Total Size</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-card-border">
          <div className="text-2xl font-bold text-primary">
            {pdfs.reduce((acc, pdf) => acc + pdf.pages, 0)}
          </div>
          <div className="text-xs text-muted-foreground">Total Pages</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-card-border">
          <div className="text-2xl font-bold text-primary">8</div>
          <div className="text-xs text-muted-foreground">This Month</div>
        </div>
      </div>

      {/* PDFs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPDFs.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <FileText className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-muted-foreground">No PDFs found</p>
          </div>
        ) : (
          filteredPDFs.map((pdf) => (
            <div
              key={pdf.id}
              className="bg-card rounded-lg p-4 border border-card-border hover:border-primary transition-all duration-200 group"
            >
              {/* PDF Icon */}
              <div className="flex items-center justify-center w-full h-32 bg-primary/5 rounded-lg mb-4 group-hover:bg-primary/10 transition-colors">
                <FileText className="w-16 h-16 text-primary" />
              </div>

              {/* PDF Info */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-card-foreground mb-1 line-clamp-2">
                  {pdf.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">{pdf.lesson}</p>
                
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {pdf.dateCreated}
                  </span>
                </div>
                
                <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                  <span>{pdf.size}</span>
                  <span>•</span>
                  <span>{pdf.pages} pages</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => downloadPDF(pdf)}
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button
                  onClick={() => console.log('Preview:', pdf.id)}
                  className="px-3 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                  title="Preview"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => deletePDF(pdf.id)}
                  className="px-3 py-2 bg-destructive/10 text-destructive rounded-lg hover:bg-destructive/20 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Empty State */}
      {pdfs.length === 0 && (
        <div className="mt-8 bg-card rounded-lg p-8 border border-card-border text-center">
          <FileText className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">No PDFs yet</h3>
          <p className="text-muted-foreground mb-4">
            Download lesson summaries to build your personal Torah library
          </p>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Explore Lessons
          </button>
        </div>
      )}

      {/* Download All Button */}
      {pdfs.length > 0 && (
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => console.log('Download all PDFs')}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            <span>Download All PDFs</span>
          </button>
        </div>
      )}
    </div>
  );
}
