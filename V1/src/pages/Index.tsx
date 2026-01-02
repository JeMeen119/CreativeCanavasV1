import { Navbar } from "@/components/Navbar";
import { SearchBox } from "@/components/SearchBox";
import { Sidebar } from "@/components/Sidebar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 px-6 pb-8">
        <div className="max-w-7xl mx-auto flex gap-8">
          {/* Main Content */}
          <div className="flex-1 flex flex-col items-center justify-start pt-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4 text-center">
              What do you want to know?
            </h1>
            <p className="text-muted-foreground mb-8 text-center">
              Search with AI-powered intelligence
            </p>
            <SearchBox />
          </div>
          
          {/* Sidebar */}
          <Sidebar />
        </div>
      </main>
    </div>
  );
};

export default Index;
