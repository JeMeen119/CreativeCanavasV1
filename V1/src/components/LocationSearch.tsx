import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface LocationSearchProps {
  onLocationSelect?: (location: string) => void;
}

export function LocationSearch({ onLocationSelect }: LocationSearchProps) {
  const [location, setLocation] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = () => {
    if (location.trim()) {
      onLocationSelect?.(location);
      toast({
        title: "Location set",
        description: `Searching results for: ${location}`,
      });
      setIsOpen(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
          <MapPin className="h-5 w-5" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72 bg-card border-border p-3">
        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Search Location</p>
          <div className="flex gap-2">
            <Input
              placeholder="Enter city or area..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-input border-border text-foreground placeholder:text-muted-foreground"
            />
            <Button size="icon" onClick={handleSearch} className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
