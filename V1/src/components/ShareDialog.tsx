import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Share2, Copy, Twitter, Facebook, Linkedin, Mail, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export function ShareDialog() {
  const [copied, setCopied] = useState(false);
  const shareUrl = window.location.href;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    toast({
      title: "Link copied!",
      description: "The link has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const shareLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=Check out Milieu AI`,
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "Email",
      icon: Mail,
      url: `mailto:?subject=Check out Milieu AI&body=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="text-foreground hover:bg-primary hover:text-background gap-2">
          Share <Share2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-heading text-foreground">Share Milieu AI</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center gap-2 p-3 bg-input rounded-lg">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 bg-transparent text-sm text-muted-foreground outline-none"
            />
            <Button size="sm" onClick={copyToClipboard} className="bg-primary text-primary-foreground hover:bg-primary/90">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-3 rounded-lg bg-input hover:bg-muted transition-colors"
              >
                <link.icon className="h-6 w-6 text-foreground" />
                <span className="text-xs text-muted-foreground">{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
