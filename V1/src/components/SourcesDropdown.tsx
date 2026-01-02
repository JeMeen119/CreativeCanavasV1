import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe, ChevronDown, GraduationCap, Building2, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const sources = [
  { id: "web", label: "Web", icon: Globe },
  { id: "academics", label: "Academics", icon: GraduationCap },
  { id: "government", label: "Government Website", icon: Building2 },
  { id: "more", label: "More Sources", icon: MoreHorizontal },
];

interface SourcesDropdownProps {
  onSelect?: (source: string) => void;
}

export function SourcesDropdown({ onSelect }: SourcesDropdownProps) {
  const [selected, setSelected] = useState("web");

  const handleSelect = (sourceId: string) => {
    setSelected(sourceId);
    onSelect?.(sourceId);
  };

  const selectedSource = sources.find(s => s.id === selected);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-primary hover:text-background gap-2">
          <Globe className="h-4 w-4" />
          Sources
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-card border-border min-w-[180px]">
        {sources.map((source) => (
          <DropdownMenuItem
            key={source.id}
            onClick={() => handleSelect(source.id)}
            className={`cursor-pointer gap-2 ${selected === source.id ? 'bg-muted text-primary' : 'text-foreground hover:bg-muted'}`}
          >
            <source.icon className="h-4 w-4" />
            {source.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
