import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, User as UserIcon, Calendar, CheckCircle2, Plus, Mic, X } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";

type Message = {
  id: string;
  sender: "ai" | "user";
  text?: string;
  isActionable?: boolean;
};

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
  }, [context, query]);

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

    // Mock AI Response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: context === "high_sugar" 
            ? "Based on your high sugar reading and symptoms, I recommend consulting with an Endocrinologist to adjust your care plan." 
            : "I understand your concern. To help route you correctly, could you share a bit more about what you're experiencing?",
          isActionable: context === "high_sugar" ? true : undefined,
        }
      ]);
    }, 1000);
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 flex flex-col relative overflow-hidden"
      >
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-orange-100/80 to-transparent dark:from-orange-900/30 pointer-events-none z-0" />

        {/* Close Button */}
        <div className="pt-14 px-6 relative z-20 flex items-center justify-between">
          <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            WelUp AI
          </h1>
          <button 
            onClick={() => navigate("/home")} 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm border border-border transition-transform active:scale-95"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 pt-4 pb-36 relative z-10 scroll-smooth">
          <div className="max-w-[390px] mx-auto space-y-6">
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
                            onClick={() => setInput(pill)} 
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
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#F9F7F5] via-[#F9F7F5] to-transparent dark:from-zinc-950 dark:via-zinc-950 z-40">
          <div className="max-w-[390px] mx-auto relative flex flex-col pb-[env(safe-area-inset-bottom,8px)]">
            
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Chat;
