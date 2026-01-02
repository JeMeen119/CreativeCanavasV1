import { Navbar } from "@/components/Navbar";
import { ArrowLeft, Award, ExternalLink, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const schemes = [
  { name: "Ayushman Bharat", description: "Health insurance up to ₹5 lakhs per family.", category: "HEALTH CARE", link: "#" },
  { name: "Startup India", description: "Catalyze startup culture.", category: "BUSINESS", link: "#" },
  { name: "PM Kisan Samman Nidhi", description: "₹6,000/year to farmers.", category: "AGRICULTURE", link: "#" },
  { name: "Digital India", description: "Digital empowerment program.", category: "TECHNOLOGY", link: "#" },
  { name: "Pradhan Mantri Awas Yojana", description: "Housing for all.", category: "HOUSING", link: "#" },
  { name: "Skill India", description: "Train 40 crore people.", category: "EDUCATION", link: "#" },
];

export default function GovSchemes() {
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [showSummary, setShowSummary] = useState(false);

  const aiSummary = "AI stub: This scheme provides comprehensive health coverage for low-income families, covering hospitalization costs up to ₹5 lakhs annually. Eligibility based on SECC database criteria.";

  return (
    <div className="min-h-screen bg-[#19181A] text-[#DDDAE5] font-['Roboto']">
      <Navbar />
      <div className="max-w-4xl mx-auto p-8">
        <Link to="/" className="flex items-center gap-2 text-[#F2CB55] mb-8 font-['Poppins']">
          <ArrowLeft size={20} /> Back
        </Link>
        <h1 className="text-4xl font-['Poppins'] mb-12 text-[#F2CB55]">Government Schemes</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {schemes.map((scheme) => (
            <SchemeCard key={scheme.name} scheme={scheme} onLearnMore={() => setSelectedScheme(scheme)} />
          ))}
        </div>
      </div>

      {selectedScheme && (
        <SchemePopup 
          scheme={selectedScheme} 
          onClose={() => setSelectedScheme(null)}
          onSummary={() => setShowSummary(!showSummary)}
          summary={aiSummary}
        />
      )}
    </div>
  );
}

function SchemeCard({ scheme, onLearnMore }) {
  return (
    <div className="bg-[#252426] p-8 rounded-2xl hover:bg-[#19181A] transition-all">
      <span className="inline-block px-4 py-2 bg-[#F2CB55]/10 text-[#F2CB55] rounded-xl font-['Poppins'] mb-4">
        {scheme.category}
      </span>
      <h3 className="text-2xl font-['Poppins'] mb-4">{scheme.name}</h3>
      <p className="mb-6">{scheme.description}</p>
      <Button onClick={onLearnMore} className="bg-[#F2CB55] text-[#19181A] hover:bg-[#DDDAE5]">
        Learn More <ExternalLink className="ml-2 w-4 h-4" />
      </Button>
    </div>
  );
}

function SchemePopup({ scheme, onClose, onSummary, summary }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#252426] max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl p-8">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-3xl font-['Poppins'] text-[#F2CB55]">{scheme.name}</h2>
          <button onClick={onClose} className="text-[#DDDAE5] hover:text-[#F2CB55] text-2xl">×</button>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="text-[#F2CB55] font-['Poppins']">{scheme.category}</span>
            <p className="text-lg">{scheme.description}</p>
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
