import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, User as UserIcon, Calendar, CheckCircle2, ThumbsUp, ThumbsDown, Copy, Info, Share2, Plus, Mic, ArrowLeft, Stethoscope, FileText, Pill } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

type Message = {
  id: string;
  sender: "ai" | "user";
  text?: string;
  isActionable?: boolean;
};

const AssistantStar = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl mb-4">
    <defs>
      <linearGradient id="starGrad" x1="20" y1="20" x2="80" y2="80">
        <stop stopColor="hsl(12, 76%, 61%)" />
        <stop offset="1" stopColor="hsl(20, 80%, 45%)" />
      </linearGradient>
      <linearGradient id="starHighlight" x1="20" y1="20" x2="50" y2="50">
        <stop stopColor="#ffffff" stopOpacity="0.4" />
        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
      </linearGradient>
    </defs>
    {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5].map((rot) => (
      <g key={rot} transform={`rotate(${rot} 50 50)`}>
        <rect x="44" y="10" width="12" height="80" rx="6" fill="url(#starGrad)" />
        <rect x="44" y="10" width="6" height="80" rx="3" fill="url(#starHighlight)" />
      </g>
    ))}
  </svg>
);

const Chat = () => {
  const [searchParams] = useSearchParams();
  const context = searchParams.get("context");
  const query = searchParams.get("query");
  const navigate = useNavigate();
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    
    // Initialize based on context
    if (context === "high_sugar") {
      setMessages([
        {
          id: "1",
          sender: "user",
          text: "I just logged a high fasting blood sugar reading (135 mg/dL).",
        },
        {
          id: "2",
          sender: "ai",
          text: "I see your logged reading is above your baseline. Have you experienced any increased thirst, frequent urination, or unexplained fatigue recently?",
        }
      ]);
    } else if (context === "metformin") {
      setMessages([
        {
          id: "1",
          sender: "user",
          text: "I'd like to ask a follow-up question about Metformin.",
        },
        {
          id: "2",
          sender: "ai",
          text: "Of course. Metformin is commonly prescribed to manage blood sugar levels. What specific questions do you have about it? Remember I provide general info, not medical advice.",
        }
      ]);
    } else if (query === "book_test") {
      setMessages([
        { id: "1", sender: "user", text: "I want to book a blood test" },
        { id: "2", sender: "ai", text: "I can help with that. Are there any specific blood tests you're looking for, or would you like to browse standard health packages?" }
      ]);
    } else if (query === "consult_doctor") {
      setMessages([
        { id: "1", sender: "user", text: "I want to book a doctor consultation" },
        { id: "2", sender: "ai", text: "Sure thing. What kind of symptoms are you experiencing so I can match you with the right specialist?" }
      ]);
    } else {
      setMessages([]);
    }
  }, [context]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), sender: "user", text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");

    // Mock AI Response for symptom triage
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: context === "high_sugar" 
            ? "Based on your high sugar reading and symptoms, I recommend consulting with an Endocrinologist to adjust your care plan." 
            : "I understand you're experiencing knee pain. To help route you correctly, how long has this been going on, and is there any swelling?",
          isActionable: context === "high_sugar" ? true : undefined,
        }
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 flex flex-col relative overflow-hidden">
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-orange-100/80 to-transparent dark:from-orange-900/30 pointer-events-none z-0" />

      {/* Header */}
      <div className="pt-12 pb-4 px-6 relative z-20 flex items-center gap-4 bg-transparent">
        <button 
          onClick={() => navigate("/home")} 
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm border border-border transition-transform active:scale-95 shrink-0"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
          WelUp AI
        </h1>
      </div>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 pt-2 pb-44 relative z-10 scroll-smooth">
        <div className="max-w-[390px] mx-auto space-y-6">
          {messages.length === 0 && !context && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-start px-2 mt-4"
            >
              
              <h2 className="text-[32px] font-medium leading-[1.1] text-foreground tracking-tight mb-2">
                Hi <span className="font-bold text-primary">Debajyoti!</span><br/>
                <span className="font-bold">How can I help you today?</span>
              </h2>

              <div className="mt-8">
                <ul className="space-y-4">
                  <li className="flex items-center gap-4 text-[15px] text-foreground font-medium">
                     <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-sm">
                       <Stethoscope className="w-4 h-4" />
                     </div>
                     Schedule doctor consultations
                  </li>
                  <li className="flex items-center gap-4 text-[15px] text-foreground font-medium">
                     <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-sm">
                       <FileText className="w-4 h-4" />
                     </div>
                     Get insights on your lab reports
                  </li>
                  <li className="flex items-center gap-4 text-[15px] text-foreground font-medium">
                     <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-sm">
                       <Pill className="w-4 h-4" />
                     </div>
                     Understand your medications
                  </li>
                </ul>
              </div>
            </motion.div>
          )}

          {messages.map((msg, index) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
            >
              {msg.text && (
                <div
                  className={`max-w-[85%] ${
                    msg.sender === "user"
                      ? "p-4 bg-primary/10 text-foreground rounded-[20px] rounded-br-[6px]"
                      : "text-foreground"
                  }`}
                >
                  <p className="text-[15px] leading-[1.75]">{msg.text}</p>
                  
                  {msg.sender === "ai" && index === messages.length - 1 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {query === "book_test" && ["Blood sugar test", "Heart health test", "Full body checkup", "Lipid profile"].map(pill => (
                        <button 
                          key={pill} 
                          onClick={() => {
                            setInput(pill);
                            // We don't auto-send here, just populate input so user can edit, or we could handleSend.
                            // Better UX is to let them send it or auto-send. I'll just populate.
                          }} 
                          className="text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {pill}
                        </button>
                      ))}
                      {query === "consult_doctor" && ["Cold & cough", "Fever", "Sore throat", "Body ache", "Upset stomach"].map(pill => (
                        <button 
                          key={pill} 
                          onClick={() => setInput(pill)} 
                          className="text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                        >
                          {pill}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Actionable Doctor Card */}
              {msg.isActionable && (
                <div className="mt-4 w-full max-w-[85%] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-[24px] p-4 shadow-sm">
                  <div className="flex gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center shrink-0">
                      <UserIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-zinc-900 dark:text-zinc-100">Dr. Sarah Jenkins</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">Specialist</p>
                    </div>
                  </div>
                  
                  <div className="bg-zinc-50 dark:bg-zinc-950 rounded-[16px] p-3 mb-4">
                    <p className="text-[13px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      <span className="font-medium text-zinc-900 dark:text-zinc-200">Why this doctor:</span> Best matched for your recent symptoms.
                    </p>
                  </div>

                  <button className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium py-3 rounded-[16px] flex items-center justify-center gap-2 mb-2">
                    <Calendar className="w-4 h-4" /> Book for Tomorrow
                  </button>
                  <div className="flex items-center justify-center gap-1.5 mt-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="text-[11px] font-medium text-zinc-500">Free consult credit applied</span>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-[80px] left-0 right-0 p-4 bg-gradient-to-t from-[#F9F7F5] via-[#F9F7F5] to-transparent dark:from-zinc-950 dark:via-zinc-950 z-40">
        <div className="max-w-[390px] mx-auto relative flex flex-col">
          
          <div className="relative flex items-center bg-card border border-border rounded-full shadow-sm">
            <button className="pl-4 pr-2 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0">
              <Plus className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 bg-transparent py-4 text-[15px] focus:outline-none text-foreground placeholder:text-muted-foreground"
            />
            <div className="pr-2 pl-2 flex items-center gap-2 flex-shrink-0">
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Mic className="w-5 h-5" />
              </button>
              <button
                onClick={handleSend}
                className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center transition-transform active:scale-95"
              >
                <Send className="w-4 h-4 ml-0.5" />
              </button>
            </div>
          </div>
          
          <p className="text-[11px] text-muted-foreground text-center mt-2">
            This is general info, not medical advice. Confirm with a doctor.
          </p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Chat;
