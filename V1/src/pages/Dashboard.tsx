import { Navbar } from "@/components/Navbar";
import { Search, MessageCircle, Settings, Database, Bell, LogOut, ChevronDown, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const chatHistory = [
  { id: 1, title: "What are latest gov schemes?", time: "2h ago", preview: "Ayushman Bharat covers..." },
  { id: 2, title: "India GDP growth?", time: "4h ago", preview: "7.6% exceeding predictions..." },
  { id: 3, title: "RBI policy update", time: "6h ago", preview: "Repo rate unchanged..." },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="min-h-screen bg-[#19181A] text-[#DDDAE5] font-['Roboto'] flex">
      {/* Left Sidebar - Chat History */}
      <div className="w-80 bg-[#252426] border-r border-[#19181A]">
        <div className="p-6 border-b border-[#19181A]">
          <h2 className="text-xl font-['Poppins'] text-[#F2CB55] flex items-center gap-2">
            <MessageCircle size={20} /> Chat History
          </h2>
        </div>
        <div className="p-4 space-y-2 max-h-screen overflow-y-auto">
          {chatHistory.map((chat) => (
            <ChatItem 
              key={chat.id}
              chat={chat}
              active={selectedChat?.id === chat.id}
              onClick={() => setSelectedChat(chat)}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-8">
          <div className="max-w-4xl mx-auto">
            {selectedChat ? (
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <button onClick={() => setSelectedChat(null)} className="text-[#F2CB55] hover:opacity-75">
                    ← Back to chats
                  </button>
                  <h1 className="text-3xl font-['Poppins'] text-[#DDDAE5]">{selectedChat.title}</h1>
                </div>
                <div className="bg-[#252426] p-8 rounded-2xl">
                  <div className="chat-messages space-y-4 mb-8 max-h-96 overflow-y-auto">
                    <div className="bg-[#19181A] p-6 rounded-xl">
                      <p>{selectedChat.preview}</p>
                    </div>
                  </div>
                  <div className="search-box p-6 bg-[#19181A] rounded-xl flex gap-4">
                    <Search className="w-6 h-6 text-[#F2CB55] mt-1 flex-shrink-0" />
                    <input 
                      placeholder="Continue this conversation..." 
                      className="flex-1 bg-transparent border-none outline-none text-lg" 
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-32">
                <Search className="w-24 h-24 text-[#F2CB55] mx-auto mb-8 opacity-50" />
                <h1 className="text-5xl font-['Poppins'] mb-4 text-[#DDDAE5]">Your AI Assistant</h1>
                <p className="text-xl opacity-75 mb-8">Click any chat to continue or start a new conversation</p>
                <div className="search-box max-w-2xl mx-auto p-8 bg-[#252426] rounded-2xl">
                  <Search className="w-12 h-12 text-[#F2CB55] mb-4 mx-auto" />
                  <input 
                    type="text" 
                    placeholder="Ask anything..." 
                    className="w-full p-4 bg-transparent text-2xl border-none outline-none text-center" 
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* User Dropdown */}
      <div className="relative">
        <button 
          onClick={() => setOpenDropdown(!openDropdown)}
          className="w-14 h-14 bg-[#F2CB55]/20 hover:bg-[#F2CB55]/40 rounded-full flex items-center justify-center ml-4 mr-8 mt-4"
        >
          <User className="w-6 h-6 text-[#F2CB55]" />
          {openDropdown && <ChevronDown className="w-4 h-4 absolute -bottom-1 right-1 rotate-180" />}
        </button>
        {openDropdown && (
          <div className="absolute right-0 top-full mt-2 w-64 bg-[#252426] rounded-2xl shadow-2xl border border-[#19181A] py-2 z-50">
            <Link to="/dashboard" className="flex items-center gap-3 px-6 py-4 hover:bg-[#19181A] rounded-xl mx-2">
              <div className="w-10 h-10 bg-[#F2CB55]/20 rounded-xl flex items-center justify-center">
                <User className="w-5 h-5 text-[#F2CB55]" />
              </div>
              <div>
                <div className="font-['Poppins'] font-semibold">Dashboard</div>
                <div className="text-sm opacity-75">Your overview</div>
              </div>
            </Link>
            
            <div className="border-t border-[#19181A] my-1"></div>
            
            <Link to="/account" className="flex items-center gap-3 px-6 py-4 hover:bg-[#19181A] rounded-xl mx-2 font-['Poppins']">
              Account
            </Link>
            <Link to="/personalization" className="flex items-center gap-3 px-6 py-4 hover:bg-[#19181A] rounded-xl mx-2 font-['Poppins']">
              Personalization
            </Link>
            <Link to="/storage" className="flex items-center gap-3 px-6 py-4 hover:bg-[#19181A] rounded-xl mx-2 font-['Poppins']">
              <Database className="w-4 h-4" /> Storage
            </Link>
            <Link to="/notifications" className="flex items-center gap-3 px-6 py-4 hover:bg-[#19181A] rounded-xl mx-2 font-['Poppins']">
              <Bell className="w-4 h-4" /> Notifications
            </Link>
            
            <div className="border-t border-[#19181A] my-1"></div>
            
            <button 
              onClick={() => navigate("/")} 
              className="w-full flex items-center gap-3 px-6 py-4 hover:bg-[#19181A] rounded-xl mx-2 text-left font-['Poppins']"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function ChatItem({ chat, active, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full p-4 rounded-xl flex flex-col gap-2 transition-all group ${
        active ? "bg-[#19181A] border border-[#F2CB55]" : "hover:bg-[#19181A]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-['Poppins'] font-semibold text-[#DDDAE5]">{chat.title}</span>
        <span className="text-xs opacity-50">{chat.time}</span>
      </div>
      <p className="text-sm opacity-75 line-clamp-2">{chat.preview}</p>
    </button>
  );
}
