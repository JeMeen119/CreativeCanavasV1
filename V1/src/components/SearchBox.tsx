import { useState } from 'react';
import { Send } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { SourcesDropdown } from './SourcesDropdown';
import { AttachDropdown } from './AttachDropdown';
import { ModelDropdown } from './ModelDropdown';
import { LocationSearch } from './LocationSearch';
import { MicButton } from './MicButton';
import { toast } from '@/hooks/use-toast';

const quickActions = ['Latest news', 'Gov schemes', 'Weather', 'Stocks'];

interface SearchBoxProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend?: () => void;
}

export function SearchBox({ value = '', onChange, onSend }: SearchBoxProps) {
  const [query, setQuery] = useState(value);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (query.trim()) {
      setIsLoading(true);
      toast({
        title: 'Searching...',
        description: `Looking for "${query}"`,
      });
      await new Promise(r => setTimeout(r, 1000));
      onSend?.();
      setIsLoading(false);
      setQuery('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="w-full">
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <Textarea
          placeholder="Ask anything about news, schemes, or local info..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            onChange?.(e);
          }}
          onKeyDown={handleKeyDown}
          className="min-h-[80px] border-0 bg-transparent resize-none focus-visible:ring-0 text-foreground placeholder:text-muted-foreground p-4"
        />
        <div className="flex items-center justify-between px-3 py-2 border-t border-border">
          <div className="flex items-center gap-1">
            <SourcesDropdown />
            <AttachDropdown />
            <ModelDropdown />
          </div>
          <div className="flex items-center gap-1">
            <LocationSearch />
            <MicButton />
            <Button 
              size="icon" 
              onClick={handleSubmit}
              disabled={isLoading || !query.trim()}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full ml-2"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {quickActions.map((action) => (
          <Button
            key={action}
            variant="outline"
            size="sm"
            onClick={() => {
              setQuery(action);
              onChange?.({ target: { value: action } } as any);
            }}
            className="bg-card border-border text-foreground hover:bg-muted hover:text-foreground"
          >
            {action}
          </Button>
        ))}
      </div>
    </div>
  );
}
