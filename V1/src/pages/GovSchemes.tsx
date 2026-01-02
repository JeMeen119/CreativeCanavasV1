import { Navbar } from "@/components/Navbar";
import { ArrowLeft, Award, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const schemes = [
  {
    name: "Ayushman Bharat",
    description: "Health Insurance Scheme providing coverage up to ₹5 lakhs per family per year for secondary and tertiary hospitalization.",
    category: "Health Care",
    categoryColor: "text-danger bg-danger/10",
    eligibility: "Families identified based on deprivation criteria in SECC database",
    link: "#",
  },
  {
    name: "Startup India",
    description: "Initiative to catalyze startup culture and build a strong ecosystem for nurturing innovation and startups in the country.",
    category: "Business",
    categoryColor: "text-primary bg-primary/10",
    eligibility: "Startups recognized by DPIIT with innovative products/services",
    link: "#",
  },
  {
    name: "PM Kisan Samman Nidhi",
    description: "Income support of ₹6,000 per year in three equal installments to small and marginal farmer families.",
    category: "Agriculture",
    categoryColor: "text-success bg-success/10",
    eligibility: "Small and marginal farmers with landholding up to 2 hectares",
    link: "#",
  },
  {
    name: "Digital India",
    description: "Umbrella programme to transform India into a digitally empowered society and knowledge economy.",
    category: "Technology",
    categoryColor: "text-primary bg-primary/10",
    eligibility: "Open to all citizens and businesses",
    link: "#",
  },
  {
    name: "Pradhan Mantri Awas Yojana",
    description: "Housing for All initiative providing affordable housing to urban and rural poor.",
    category: "Housing",
    categoryColor: "text-muted-foreground bg-muted",
    eligibility: "EWS, LIG, MIG families without pucca house",
    link: "#",
  },
  {
    name: "Skill India",
    description: "National initiative to train over 40 crore people in different skills by 2022.",
    category: "Education",
    categoryColor: "text-primary bg-primary/10",
    eligibility: "Youth aged 15-35 years across all states",
    link: "#",
  },
];

const GovSchemes = () => {
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
            <Award className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-heading font-bold text-primary">Government Schemes</h1>
          </div>
          
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Explore various government schemes and initiatives designed to support citizens across different sectors.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {schemes.map((scheme) => (
              <div key={scheme.name} className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-heading font-semibold text-lg text-foreground">{scheme.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded ${scheme.categoryColor}`}>
                    {scheme.category}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{scheme.description}</p>
                <div className="mb-4">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Eligibility:</span> {scheme.eligibility}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="gap-2 border-border text-foreground hover:bg-muted">
                  Learn More <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GovSchemes;
