
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { cvData } from '../data';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIAssistantProps {
  onClose: () => void;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Jones' AI Strategist. Ask me anything about his approach to HR, AI, or cultural growth." }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemPrompt = `
        You are the professional AI Assistant for Jones Allen Sam S.
        Details:
        Name: ${cvData.name}
        Headline: ${cvData.headline}
        Summary: ${cvData.summary}
        Skills: ${cvData.skills.join(', ')}
        Work: ${JSON.stringify(cvData.experience)}
        Education: ${JSON.stringify(cvData.education)}

        Guidelines:
        - Be ultra-professional, concise, and insightful.
        - Emphasize his "AI-Augmented" and "UX-Centric" HR philosophy.
        - Do not invent facts; if you don't know, redirect to his core HR strengths.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        },
      });

      const text = response.text || "I'm having trouble processing that. Please try another question about my HR background.";
      setMessages(prev => [...prev, { role: 'assistant', content: text }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "System connection interrupted. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-28 right-8 z-50 flex h-[600px] w-[380px] flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-2xl ring-1 ring-slate-100 animate-in slide-in-from-bottom-10 duration-500">
      <div className="flex items-center justify-between bg-slate-950 p-6 text-white">
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-blue-500 animate-pulse"></div>
          <span className="font-modern font-bold tracking-tight">AGENT CONTEXT</span>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-slate-800 rounded-xl transition-all">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-[1.5rem] px-5 py-4 text-sm font-medium leading-relaxed ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-br-none shadow-lg shadow-blue-200' 
                : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
             <div className="px-5 py-4 rounded-[1.5rem] bg-white border border-slate-200 shadow-sm flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:0.2s]"></span>
              <span className="h-1.5 w-1.5 rounded-full bg-slate-300 animate-bounce [animation-delay:0.4s]"></span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t border-slate-100">
        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Inquire about Jones..."
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 pl-5 pr-14 py-4 text-sm font-bold focus:border-blue-600 outline-none transition-all"
          />
          <button 
            onClick={handleSend}
            disabled={isTyping}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900 text-white hover:bg-blue-600 disabled:opacity-50 transition-all"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <p className="mt-3 text-[10px] text-center font-bold text-slate-300 tracking-[0.2em] uppercase">GenAI Operational System</p>
      </div>
    </div>
  );
};

export default AIAssistant;
