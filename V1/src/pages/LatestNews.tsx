import { Navbar } from "@/components/Navbar";
import { ArrowLeft, Newspaper, ExternalLink, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const newsItems = [
  { title: "RBI announces new monetary policy", description: "Repo rates unchanged, inflation focus.", category: "ECONOMY", source: "Economic Times" },
  { title: "Tech stocks rally", description: "Global market recovery signals.", category: "MARKETS", source: "Business Standard" },
  { title: "₹10 lakh crore infra program", description: "Nationwide connectivity boost.", category: "INFRASTRUCTURE", source: "The Hindu" },
  { title: "India GDP 7.6% growth", description: "Exceeds analyst predictions.", category: "ECONOMY", source: "Mint" },
  { title: "NEP implementation accelerates", description: "Skill development focus.", category: "EDUCATION", source: "Indian Express" },
  { title: "Renewable energy investments surge", description: "Solar and wind projects.", category: "ENERGY", source: "Reuters" },
];

export default function LatestNews() {
  const [selectedNews, setSelectedNews] = useState(null);
  const [showSummary, setShowSummary] = useState(false);

  const aiSummary = "AI stub: RBI maintains repo rate at 6.5% while introducing targeted liquidity measures to control inflation without stifling growth. Focus on balancing economic recovery with price stability.";

  return (
    <div className="min-h-screen bg-[#19181A] text-[#DDDAE5] font-['Roboto']">
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <Link to="/" className="flex items-center gap-2 text-[#F2CB55] mb-8 font-['Poppins']">
          <ArrowLeft size={20} /> Back
        </Link>
        <h1 className="text-4xl font-['Poppins'] mb-12 text-[#F2CB55]">Latest News</h1>
        <div className="space-y-6">
          {newsItems.map((item) => (
            <NewsCard key={item.title} item={item} onReadMore={() => setSelectedNews(item)} />
          ))}
        </div>
      </div>

      {selectedNews && (
        <NewsPopup 
          item={selectedNews} 
          onClose={() => setSelectedNews(null)}
          onSummary={() => setShowSummary(!showSummary)}
          summary={aiSummary}
        />
      )}
    </div>
  );
}

function NewsCard({ item, onReadMore }) {
  return (
    <div className="bg-[#252426] p-8 rounded-2xl hover:bg-[#19181A] transition-all group">
      <span className="inline-block px-4 py-2 bg-[#F2CB55]/10 text-[#F2CB55] rounded-xl font-['Poppins'] mb-4">
        {item.category}
      </span>
      <h3 className="text-2xl font-['Poppins'] mb-4 group-hover:text-[#F2CB55] transition-colors">{item.title}</h3>
      <p className="mb-6">{item.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm opacity-75">{item.source}</span>
        <Button onClick={onReadMore} size="sm" className="bg-[#F2CB55] text-[#19181A]">
          Read Full <ExternalLink className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}

function NewsPopup({ item, onClose, onSummary, summary }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#252426] max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-[#F2CB55] font-['Poppins'] mb-2 block">{item.category}</span>
            <h2 className="text-3xl font-['Poppins']">{item.title}</h2>
          </div>
          <button onClick={onClose} className="text-[#DDDAE5] hover:text-[#F2CB55] text-2xl">×</button>
        </div>
        <div className="space-y-6">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg leading-relaxed">{item.description} [Full article stub content would go here...]</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" onClick={onSummary} className="border-[#F2CB55] text-[#F2CB55]">
              <MessageSquare className="w-4 h-4 mr-2" /> Short AI Summary
            </Button>
          </div>
          {showSummary && (
            <div className="bg-[#19181A]/50 p-6 rounded-xl">
              <h4 className="font-['Poppins'] mb-3 text-[#F2CB55]">AI Summary:</h4>
              <p>{summary}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
