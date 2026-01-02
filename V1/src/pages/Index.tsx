import { Navbar } from "@/components/Navbar";
import { Search, Newspaper, Award, Globe, ToggleLeft, ToggleRight } from "lucide-react";
import { useState } from "react";

const sources = [
  { name: "News", icon: Newspaper, active: true },
  { name: "Gov Schemes", icon: Award, active: false },
  { name: "Global", icon: Globe, active: false }
];

export default function Index() {
  const [activeSource, setActiveSource] = useState("News");

  return (
    <div className="min-h-screen bg-[#19181A] text-[#DDDAE5] font-['Roboto']">
      <Navbar />
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-5xl font-['Poppins'] mb-8 text-[#F2CB55]">Search Everything</h1>
        <div className="flex gap-4 mb-12">
          {sources.map((source) => (
            <ToggleButton
              key={source.name}
              source={source}
              active={activeSource === source.name}
              onToggle={() => setActiveSource(source.name)}
            />
          ))}
        </div>
        <div className="search-box p-8 bg-[#252426] rounded-2xl">
          <Search className="w-12 h-12 text-[#F2CB55] mb-4" />
          <input type="text" placeholder="Ask anything..." className="w-full p-4 bg-transparent text-2xl border-none outline-none" />
        </div>
      </div>
    </div>
  );
}

function ToggleButton({ source, active, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all font-['Poppins'] ${
        active 
          ? "bg-[#F2CB55] text-[#19181A]" 
          : "bg-[#252426] hover:bg-[#19181A]"
      }`}
    >
      <source.icon className="w-5 h-5" />
      {source.name}
    </button>
  );
}
