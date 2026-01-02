import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShareDialog } from "./ShareDialog";
import { LoginDialog } from "./LoginDialog";
import logo from "@/assets/logo.png";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Milieu AI" className="h-8 w-8" />
        <span className="text-xl font-heading font-semibold text-primary">Milieu AI</span>
      </Link>
      
      <div className="flex items-center gap-4">
        <Link to="/about">
          <Button variant="ghost" className="text-foreground hover:bg-primary hover:text-background gap-2">
            About <ExternalLink className="h-4 w-4" />
          </Button>
        </Link>
        <ShareDialog />
        <LoginDialog />
      </div>
    </nav>
  );
}
