import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Paperclip, FileText, Image, File, Upload } from "lucide-react";
import { useRef } from "react";
import { toast } from "@/hooks/use-toast";

const fileTypes = [
  { id: "document", label: "Document", icon: FileText, accept: ".pdf,.doc,.docx,.txt" },
  { id: "image", label: "Image", icon: Image, accept: "image/*" },
  { id: "file", label: "Any File", icon: File, accept: "*" },
];

interface AttachDropdownProps {
  onFileSelect?: (file: File) => void;
}

export function AttachDropdown({ onFileSelect }: AttachDropdownProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentAcceptRef = useRef<string>("*");

  const handleSelect = (accept: string) => {
    currentAcceptRef.current = accept;
    if (fileInputRef.current) {
      fileInputRef.current.accept = accept;
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect?.(file);
      toast({
        title: "File attached",
        description: `${file.name} has been attached.`,
      });
    }
    e.target.value = "";
  };

  return (
    <>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:bg-primary hover:text-background gap-2">
            <Paperclip className="h-4 w-4" />
            Attach
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-card border-border min-w-[160px]">
          {fileTypes.map((type) => (
            <DropdownMenuItem
              key={type.id}
              onClick={() => handleSelect(type.accept)}
              className="cursor-pointer gap-2 text-foreground hover:bg-muted"
            >
              <type.icon className="h-4 w-4" />
              {type.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
