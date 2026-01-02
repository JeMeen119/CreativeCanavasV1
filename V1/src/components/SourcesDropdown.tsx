import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { ChevronDown, Radio } from 'lucide-react';
import { useState } from 'react';
import { toast } from '@/hooks/use-toast';

const sources = [
  { value: 'newsapi', label: 'News API' },
  { value: 'govapi', label: 'Gov Schemes' },
  { value: 'localnews', label: 'Local News' },
  { value: 'social', label: 'Social Media' },
  { value: 'all', label: 'All Sources' },
];

export function SourcesDropdown() {
  const [selectedSource, setSelectedSource] = useState('all');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Radio className="h-4 w-4" />
          <ChevronDown className="h-4 w-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Select Source</DropdownMenuLabel>
        <DropdownMenuRadioGroup value={selectedSource} onValueChange={(value) => {
          setSelectedSource(value);
          toast({
            title: 'Source switched',
            description: `Now using ${sources.find(s => s.value === value)?.label}`,
          });
        }}>
          {sources.map((source) => (
            <Button 
              key={source.value} 
              variant={selectedSource === source.value ? 'default' : 'ghost'}
              className="justify-start w-full h-10 px-2 py-1.5"
              value={source.value}
            >
              {source.label}
            </Button>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
