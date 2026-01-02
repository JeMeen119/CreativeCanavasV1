import { Navbar } from "@/components/Navbar";
import { ArrowLeft, Target, Users, Lightbulb, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-heading font-bold text-primary mb-6">About Milieu AI</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-foreground mb-8">
              Milieu AI is an advanced AI-powered search and intelligence platform designed to help you 
              discover, understand, and stay informed about the world around you.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground">
                  To democratize access to information by providing intelligent, context-aware search 
                  that understands your needs and delivers accurate, relevant results.
                </p>
              </div>
              
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">Who We Serve</h3>
                </div>
                <p className="text-muted-foreground">
                  From students and researchers to professionals and everyday users seeking 
                  reliable information across multiple domains.
                </p>
              </div>
              
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">Innovation</h3>
                </div>
                <p className="text-muted-foreground">
                  Leveraging cutting-edge AI models to provide intelligent responses that go beyond 
                  traditional search engines.
                </p>
              </div>
              
              <div className="bg-card rounded-xl border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground">Global Reach</h3>
                </div>
                <p className="text-muted-foreground">
                  Connecting you to information from diverse sources including web, academic papers, 
                  and government resources worldwide.
                </p>
              </div>
            </div>
            
            <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">Features</h2>
            <ul className="space-y-3 text-muted-foreground mb-8">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Multi-source search across web, academic, and government databases
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Real-time market data and financial insights
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Government scheme information and updates
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Voice-enabled search for hands-free operation
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                Location-based contextual results
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
