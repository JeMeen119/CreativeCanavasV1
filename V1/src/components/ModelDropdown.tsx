import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Box, ChevronDown, Check } from "lucide-react";
import { useState } from "react";

const models = [
  { id: "milieu-pro", label: "Milieu Pro", description: "Most capable" },
  { id: "milieu-fast", label: "Milieu Fast", description: "Fastest responses" },
  { id: "milieu-basic", label: "Milieu Basic", description: "Free tier" },
  { id: "gpt-4", label: "GPT-4", description: "OpenAI" },
  { id: "claude-3", label: "Claude 3", description: "Anthropic" },
];

interface ModelDropdownProps {
  onSelect?: (model: string) => void;
}

export function ModelDropdown({ onSelect }: ModelDropdownProps) {
  const [selected, setSelected] = useState("milieu-pro");

  const handleSelect = (modelId: string) => {
    setSelected(modelId);
    onSelect?.(modelId);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-primary hover:text-background gap-2">
          <Box className="h-4 w-4" />
          Model
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="bg-card border-border min-w-[200px]">
        {models.map((model) => (
          <DropdownMenuItem
            key={model.id}
            onClick={() => handleSelect(model.id)}
            className={`cursor-pointer flex items-center justify-between ${selected === model.id ? 'bg-muted' : 'hover:bg-muted'}`}
          >
            <div className="flex flex-col">
              <span className="text-foreground">{model.label}</span>
              <span className="text-xs text-muted-foreground">{model.description}</span>
            </div>
            {selected === model.id && <Check className="h-4 w-4 text-primary" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
