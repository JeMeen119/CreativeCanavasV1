// src/pages/Index.tsx - Updated Home Page
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
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

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        const res = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${pos.coords.latitude}&longitude=${pos.coords.longitude}&localityLanguage=en`);
        const data = await res.json();
        setLocality(data.locality || 'Unknown');
      });
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      {/* Fixed Navbar */}
      <Navbar onLogoClick={handleLogoClick} />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Chat Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Messages Scroll Area */}
          <ScrollArea className="flex-1 p-6 space-y-4 overflow-y-auto" ref={scrollRef}>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md p-3 rounded-2xl ${msg.type === 'user' ? 'bg-indigo-600 text-white' : 'bg-white shadow-lg'}`}>
                  <p>{msg.text}</p>
                  <Badge variant="secondary" className="mt-2 text-xs">{msg.type === 'user' ? 'You' : 'AI'}</Badge>
                </div>
              </div>
            ))}
            {messages.length === 1 && (
              <div className="text-center text-gray-500 py-20">
                <Skeleton className="h-12 w-64 mx-auto mb-4" />
                <p>Start chatting with Vibe Coder AI!</p>
              </div>
            )}
          </ScrollArea>
          
          {/* Fixed Bottom Search Bar */}
          <div className="sticky bottom-0 bg-white/80 backdrop-blur-md border-t p-4 shadow-2xl">
            <div className="max-w-4xl mx-auto flex items-center gap-3">
              <LocationSearch locality={locality} onGetLocation={getUserLocation} />
              <div className="flex-1 relative">
                <SearchBox 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about news, schemes, or local info..."
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl transition-all"
                >
                  Send
                </button>
              </div>
              <div className="flex items-center gap-2">
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
