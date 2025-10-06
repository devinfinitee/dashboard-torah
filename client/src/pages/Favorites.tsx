import { useState } from "react";
import { Star, BookOpen, Trash2, Download, Search } from "lucide-react";
import { Link } from "wouter";

interface Favorite {
  id: string;
  lesson: string;
  topic: string;
  quote?: string;
  dateAdded: string;
  path: string;
  type: "topic" | "quote";
}

export default function Favorites() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favorites, setFavorites] = useState<Favorite[]>([
    {
      id: "1",
      lesson: "Weekly Torah Portion",
      topic: "Parashat Vayera - Abraham's Hospitality",
      quote: "Abraham ran to greet the strangers, teaching us that hospitality is not just about providing food, but about making others feel valued and welcomed.",
      dateAdded: "2 days ago",
      path: "/lessons/weekly-portion",
      type: "quote",
    },
    {
      id: "2",
      lesson: "Jewish Ethics & Mussar",
      topic: "Humility (Anavah)",
      dateAdded: "5 days ago",
      path: "/lessons/ethics-mussar",
      type: "topic",
    },
    {
      id: "3",
      lesson: "Aggadic Stories",
      topic: "Rabbi Akiva's Journey",
      quote: "If water can carve through stone, then surely words of Torah can penetrate my heart.",
      dateAdded: "1 week ago",
      path: "/lessons/aggadic-stories",
      type: "quote",
    },
    {
      id: "4",
      lesson: "Mishnah",
      topic: "Pirkei Avot - Ethics of the Fathers",
      quote: "Who is wise? One who learns from every person. Who is strong? One who conquers their inclination.",
      dateAdded: "1 week ago",
      path: "/lessons/mishnah",
      type: "quote",
    },
    {
      id: "5",
      lesson: "Daily Halacha",
      topic: "Blessings Over Food",
      dateAdded: "2 weeks ago",
      path: "/lessons/daily-halacha",
      type: "topic",
    },
    {
      id: "6",
      lesson: "Likutei Sichos",
      topic: "Ahavat Yisrael - Love of Fellow Jews",
      quote: "Love your fellow Jew unconditionally, regardless of their level of observance. Every Jewish soul is precious.",
      dateAdded: "2 weeks ago",
      path: "/lessons/likutei-sichos",
      type: "quote",
    },
  ]);

  const removeFavorite = (id: string) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  const filteredFavorites = favorites.filter(fav => 
    fav.lesson.toLowerCase().includes(searchQuery.toLowerCase()) ||
    fav.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (fav.quote && fav.quote.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="p-4 sm:p-6 max-w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-2">
          <Star className="w-8 h-8 text-primary" fill="currentColor" />
          My Favorites
        </h1>
        <p className="text-muted-foreground">Bookmarked lessons, topics, and inspiring quotes from your Torah study</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search favorites..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-muted rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-card rounded-lg p-4 border border-card-border">
          <div className="text-2xl font-bold text-primary">{favorites.length}</div>
          <div className="text-xs text-muted-foreground">Total Favorites</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-card-border">
          <div className="text-2xl font-bold text-primary">{favorites.filter(f => f.type === "topic").length}</div>
          <div className="text-xs text-muted-foreground">Topics</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-card-border">
          <div className="text-2xl font-bold text-primary">{favorites.filter(f => f.type === "quote").length}</div>
          <div className="text-xs text-muted-foreground">Quotes</div>
        </div>
        <div className="bg-card rounded-lg p-4 border border-card-border">
          <div className="text-2xl font-bold text-primary">12</div>
          <div className="text-xs text-muted-foreground">Lessons</div>
        </div>
      </div>

      {/* Favorites List */}
      <div className="space-y-4">
        {filteredFavorites.length === 0 ? (
          <div className="text-center py-12">
            <Star className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-muted-foreground">No favorites found</p>
          </div>
        ) : (
          filteredFavorites.map((favorite) => (
            <div
              key={favorite.id}
              className="bg-card rounded-lg p-4 sm:p-6 border border-card-border hover:border-primary transition-all duration-200"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Lesson and Topic */}
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{favorite.lesson}</span>
                  </div>
                  
                  <Link href={favorite.path}>
                    <h3 className="text-lg font-semibold text-card-foreground mb-2 hover:text-primary cursor-pointer">
                      {favorite.topic}
                    </h3>
                  </Link>
                  
                  {/* Quote if available */}
                  {favorite.quote && (
                    <blockquote className="border-l-4 border-primary pl-4 py-2 mb-3 bg-muted/30 rounded-r">
                      <p className="text-sm text-muted-foreground italic">"{favorite.quote}"</p>
                    </blockquote>
                  )}
                  
                  {/* Date Added */}
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Added {favorite.dateAdded}</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {favorite.type === "quote" ? "Quote" : "Topic"}
                    </span>
                  </div>
                </div>
                
                {/* Actions */}
                <div className="flex flex-col gap-2 flex-shrink-0">
                  <button
                    onClick={() => removeFavorite(favorite.id)}
                    className="p-2 rounded-lg bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors"
                    title="Remove from favorites"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => console.log('Download:', favorite.id)}
                    className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                    title="Download"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Empty State for new users */}
      {favorites.length === 0 && (
        <div className="mt-8 bg-card rounded-lg p-8 border border-card-border text-center">
          <Star className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">No favorites yet</h3>
          <p className="text-muted-foreground mb-4">
            Start bookmarking topics and quotes from your lessons to build your personal collection
          </p>
          <Link href="/lessons/weekly-portion">
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Explore Lessons
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
