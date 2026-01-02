import { useState, useEffect, useRef } from 'react';
import { MicButton } from '@/components/MicButton';
import { SourcesDropdown } from '@/components/SourcesDropdown';
import { SearchBox } from '@/components/SearchBox';
import { NavLink } from '@/components/NavLink';
import { LocationSearch } from '@/components/LocationSearch';
import { ModelDropdown } from '@/components/ModelDropdown';
import { AttachDropdown } from '@/components/AttachDropdown';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

const Index = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Welcome to Vibe Coder AI!", type: 'bot' as 'bot' | 'user' },
  ]);
  const [input, setInput] = useState('');
  const [locality, setLocality] = useState('Guntur, AP');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input, type: 'user' }, 
                  { id: Date.now() + 1, text: `Echo: ${input}`, type: 'bot' }]);
      setInput('');
    }
  };

  const getUserLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        try {
          const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=en`);
          const data = await res.json();
          setLocality(data.locality || data.city || 'Unknown');
        } catch {
          setLocality('Location unavailable');
        }
      });
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <Navbar onLogoClick={handleLogoClick} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <ScrollArea className="flex-1 p-6 space-y-4" ref={scrollRef}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md p-3 rounded-2xl shadow-lg ${msg.type === 'user' ? 'bg-indigo-600 text-white' : 'bg-white'}`}>
                  <p>{msg.text}</p>
                  <Badge variant="secondary" className="mt-2 text-xs">{msg.type === 'user' ? 'You' : 'AI'}</Badge>
                </div>
              </div>
            ))}
          </ScrollArea>
          <div className="sticky bottom-0 bg-white/95 backdrop-blur-md border-t p-4 shadow-2xl">
            <div className="max-w-4xl mx-auto flex items-center gap-3">
              <LocationSearch locality={locality} onGetLocation={getUserLocation} />
              <div className="flex-1 relative">
                <SearchBox value={input} onChange={(e) => setInput(e.target.value)} onSend={handleSend} />
              </div>
              <div className="flex gap-1">
                <AttachDropdown />
                <SourcesDropdown />
                <ModelDropdown />
                <MicButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
