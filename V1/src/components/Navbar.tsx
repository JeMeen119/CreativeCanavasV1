import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ShareDialog } from './ShareDialog';
import { LoginDialog } from './LoginDialog';
import logo from '@/assets/logo.png'; // Adjust path if needed

interface NavbarProps {
  onLogoClick?: () => void;
}

export function Navbar({ onLogoClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-background/80 backdrop-blur-sm border-b border-border shadow-sm">
      {/* Logo - Click to scroll home */}
      <Link 
        to="/" 
        onClick={onLogoClick}
        className="flex items-center gap-2 hover:no-underline group"
      >
        <img 
          src={logo} 
          alt="Vibe Coder AI" 
          className="h-9 w-9 transition-transform group-hover:scale-110 cursor-pointer" 
        />
        <span className="text-2xl font-heading font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform">
          Vibe Coder
        </span>
      </Link>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        <NavLink to="/about">
          <Button variant="ghost" className="text-foreground hover:bg-primary hover:text-background gap-2">
            About
            <ExternalLink className="h-4 w-4" />
          </Button>
        </NavLink>
        <ShareDialog />
        <LoginDialog />
      </div>
    </nav>
  );
}
