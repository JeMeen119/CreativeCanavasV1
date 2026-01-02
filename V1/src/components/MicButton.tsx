import { Button } from "@/components/ui/button";
import { Mic, MicOff } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface MicButtonProps {
  onToggle?: (isOn: boolean) => void;
}

export function MicButton({ onToggle }: MicButtonProps) {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle?.(newState);
    toast({
      title: newState ? "Microphone on" : "Microphone off",
      description: newState ? "Listening for voice input..." : "Voice input stopped.",
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleToggle}
      className={cn(
        "transition-all duration-300",
        isOn 
          ? "text-primary bg-primary/20 animate-pulse-glow" 
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {isOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
    </Button>
  );
}
