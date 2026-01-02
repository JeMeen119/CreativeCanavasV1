import { Navbar } from "@/components/Navbar";
import { ArrowLeft, Newspaper, ExternalLink, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    title: "RBI announces new monetary policy with focus on inflation control",
    description: "The Reserve Bank of India has unveiled its latest monetary policy, keeping repo rates unchanged while emphasizing measures to control inflation.",
    source: "Economic Times",
    time: "2h ago",
    category: "Economy",
    categoryColor: "text-primary bg-primary/10",
  },
  {
    title: "Tech stocks rally amid global market recovery",
    description: "Major technology stocks witnessed significant gains as global markets showed signs of recovery following positive economic indicators.",
    source: "Business Standard",
    time: "4h ago",
    category: "Markets",
    categoryColor: "text-success bg-success/10",
  },
  {
    title: "Government launches new infrastructure development program",
    description: "A comprehensive infrastructure development initiative worth ₹10 lakh crore has been announced to boost connectivity across the nation.",
    source: "The Hindu",
    time: "5h ago",
    category: "Infrastructure",
    categoryColor: "text-muted-foreground bg-muted",
  },
  {
    title: "India's GDP growth exceeds expectations in Q3",
    description: "The latest quarterly figures show India's economy growing at 7.6%, surpassing analyst predictions and cementing its position as a fast-growing economy.",
    source: "Mint",
    time: "6h ago",
    category: "Economy",
    categoryColor: "text-primary bg-primary/10",
  },
  {
    title: "New education policy implementation gains momentum",
    description: "States across India are accelerating the implementation of the National Education Policy with focus on skill development and digital learning.",
    source: "Indian Express",
    time: "8h ago",
    category: "Education",
    categoryColor: "text-primary bg-primary/10",
  },
  {
    title: "Renewable energy investments surge to record levels",
    description: "India attracts unprecedented investments in solar and wind energy projects as the country pushes towards its clean energy targets.",
    source: "Reuters",
    time: "10h ago",
    category: "Energy",
    categoryColor: "text-success bg-success/10",
  },
];

const LatestNews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 px-6 pb-8">
        <div className="max-w-5xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <Newspaper className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-heading font-bold text-primary">Latest News</h1>
          </div>
          
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Stay updated with the latest news from trusted sources across economy, markets, and more.
          </p>
          
          <div className="space-y-4">
            {newsItems.map((item, index) => (
              <article key={index} className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-heading font-semibold text-lg text-foreground flex-1">{item.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded whitespace-nowrap ${item.categoryColor}`}>
                    {item.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="font-medium">{item.source}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {item.time}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-2 text-primary hover:text-primary hover:bg-primary/10">
                    Read Full Article <ExternalLink className="h-3 w-3" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LatestNews;
