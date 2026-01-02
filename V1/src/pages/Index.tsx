import { Navbar } from "@/components/Navbar";
import { Search, Newspaper, Award, Globe, ToggleLeft, ToggleRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const sources = [
  { name: "News", icon: Newspaper, path: "/latest-news", active: true },
  { name: "Gov Schemes", icon: Award, path: "/gov-schemes", active: false },
  { name: "Global", icon: Globe, path: "/global", active: false }
];

export default function Index() {
  const [activeSource, setActiveSource] = useState("News");

  return (
    <div className="min-h-screen bg-[#19181A] text-[#DDDAE5] font-['Roboto']">
      <Navbar />
      <div className="max-w-6xl mx-auto p-8">
        {/* Hero */}
        <div className="text-center mb-20">
          <div className="inline-block w-28 h-28 bg-[#F2CB55]/20 rounded-3xl flex items-center justify-center mb-8 p-6">
            {/* Logo placeholder - replace with your image */}
            <Search className="w-12 h-12 text-[#F2CB55]" />
          </div>
          <h1 className="text-6xl font-['Poppins'] mb-6 bg-gradient-to-r from-[#F2CB55] to-[#DDDAE5] bg-clip-text text-transparent">
            Milieu AI
          </h1>
          <p className="text-xl opacity-75 mb-12 max-w-2xl mx-auto">
            Your intelligent search companion for news, government schemes, and global insights
          </p>
        </div>

        {/* Source Toggles */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {sources.map((source) => (
            <SourceToggle
              key={source.name}
              source={source}
              active={activeSource === source.name}
              onToggle={() => {
                setActiveSource(source.name);
                if (source.path !== "/") window.location.href = source.path;
              }}
            />
          ))}
        </div>

        {/* Search Box */}
        <div className="text-center">
          <div className="search-box inline-block p-12 bg-[#252426] rounded-3xl shadow-2xl max-w-4xl w-full mx-auto group">
            <Search className="w-16 h-16 text-[#F2CB55] mx-auto mb-8 group-hover:scale-110 transition-transform duration-300" />
            <input 
              type="text" 
              placeholder={`Search ${activeSource}... (Press Enter or click)`} 
              className="w-full p-8 bg-transparent text-3xl font-['Poppins'] border-none outline-none text-center placeholder:opacity-75 transition-all duration-300" 
            />
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <Button asChild size="lg" className="bg-[#F2CB55] text-[#19181A] hover:bg-[#DDDAE5] px-12 font-['Poppins']">
              <Link to="/login">Get Started Free</Link>
            </Button>
            <Button variant="outline" asChild size="lg" className="border-[#F2CB55] text-[#F2CB55] px-12 font-['Poppins']">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SourceToggle({ source, active, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`group flex items-center gap-3 px-8 py-4 rounded-2xl font-['Poppins'] font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 ${
        active 
          ? "bg-[#F2CB55] text-[#19181A] shadow-[#F2CB55]/25" 
          : "bg-[#252426] hover:bg-[#19181A] text-[#DDDAE5] border border-[#252426] hover:border-[#F2CB55]/50"
      }`}
    >
      <source.icon className={`w-6 h-6 transition-transform ${active ? 'scale-110' : 'group-hover:scale-110'}`} />
      {source.name}
      {active && <ToggleRight className="w-5 h-5 ml-auto" />}
    </button>
  );
}
