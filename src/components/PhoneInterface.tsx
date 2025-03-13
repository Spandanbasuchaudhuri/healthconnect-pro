
import { useState, useEffect } from "react";
import { MessageSquare, Send, Mic } from "lucide-react";
import FadeIn from "./FadeIn";

const messages = [
  {
    id: 1,
    text: "Hello! How can I help you today?",
    isBot: true,
    language: "English",
  },
  {
    id: 2,
    text: "I have a severe headache and fever.",
    isBot: false,
  },
  {
    id: 3,
    text: "I'm sorry to hear that. How long have you had these symptoms?",
    isBot: true,
    language: "English",
  },
  {
    id: 4,
    text: "Since this morning. It's getting worse.",
    isBot: false,
  },
  {
    id: 5,
    text: "Based on your symptoms, you may have a viral infection. I recommend taking acetaminophen for the fever and headache, staying hydrated, and resting. If symptoms persist for more than 48 hours or worsen, please consult a doctor immediately.",
    isBot: true,
    language: "English",
  },
  {
    id: 6,
    text: "¿Quieres que traduzca esta información al español?",
    isBot: true,
    language: "Spanish",
  },
];

const PhoneInterface = () => {
  const [displayedMessages, setDisplayedMessages] = useState<typeof messages>([]);
  const [typing, setTyping] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("English");
  const languages = ["English", "Español", "Français", "Deutsch", "中文"];

  useEffect(() => {
    let currentIndex = 0;
    
    const intervalId = setInterval(() => {
      if (currentIndex < messages.length) {
        setTyping(true);
        
        setTimeout(() => {
          setDisplayedMessages((prev) => [...prev, messages[currentIndex]]);
          setTyping(false);
          currentIndex++;
        }, 800);
      } else {
        clearInterval(intervalId);
      }
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setCurrentLanguage(languages[index]);
      index = (index + 1) % languages.length;
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <FadeIn className="w-full max-w-[300px] h-[600px] bg-white rounded-[40px] border-8 border-gray-200 shadow-2xl overflow-hidden relative mx-auto">
      <div className="absolute top-0 w-1/3 h-6 bg-gray-200 rounded-b-xl left-1/2 transform -translate-x-1/2"></div>
      <div className="h-full flex flex-col">
        <div className="bg-medical-500 text-white p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">MediCall AI</h3>
            <div className="text-xs bg-white/20 px-2 py-1 rounded-full">
              {currentLanguage}
            </div>
          </div>
          <p className="text-xs opacity-80 mt-1">AI Healthcare Assistant</p>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
          {displayedMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.isBot ? "justify-start" : "justify-end"
              }`}
            >
              {message.isBot && (
                <div className="flex-shrink-0 h-8 w-8 bg-medical-400 rounded-full flex items-center justify-center text-white mr-2 text-sm">
                  AI
                </div>
              )}
              <div
                className={`max-w-[70%] p-3 rounded-2xl ${
                  message.isBot
                    ? "bg-white shadow-sm"
                    : "bg-medical-500 text-white"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                {message.language && message.language !== "English" && (
                  <div className="text-xs opacity-70 mt-1">
                    {message.language}
                  </div>
                )}
              </div>
            </div>
          ))}
          {typing && (
            <div className="flex justify-start">
              <div className="flex-shrink-0 h-8 w-8 bg-medical-400 rounded-full flex items-center justify-center text-white mr-2 text-sm">
                AI
              </div>
              <div className="max-w-[70%] p-3 rounded-2xl bg-white shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="p-3 border-t border-gray-200 bg-white">
          <div className="flex items-center">
            <button className="p-2 text-gray-500 hover:text-medical-500 transition-colors">
              <Mic size={18} />
            </button>
            <input 
              type="text" 
              placeholder="Type your symptoms..." 
              className="flex-1 px-3 py-2 border-none focus:outline-none focus:ring-0 text-sm"
            />
            <button className="p-2 text-medical-500 hover:text-medical-600 transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default PhoneInterface;
