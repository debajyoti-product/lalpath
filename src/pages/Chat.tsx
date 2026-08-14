import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, ShieldAlert, Phone, User as UserIcon, Calendar, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

type Message = {
  id: string;
  sender: "ai" | "user";
  text?: string;
  isActionable?: boolean;
};

const Chat = () => {
  const [searchParams] = useSearchParams();
  const context = searchParams.get("context");
  
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
    } else {
      setMessages([
        {
          id: "1",
          sender: "ai",
          text: "Hi there. I'm the WelUp AI. I can help route your symptoms to the right specialist, or answer questions about your past prescriptions. How can I help today?",
        }
      ]);
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

  const handleMockDoctorMatch = () => {
    setMessages(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: "user",
        text: "It's been hurting for about 2 weeks, mainly after running. A little bit of swelling.",
      }
    ]);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "ai",
          text: "Got it. Based on that, I recommend seeing an Orthopedic Specialist to assess the joint and rule out ligament strain.",
          isActionable: true,
        }
      ]);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 flex flex-col relative overflow-hidden">
      {/* Header */}
      <div className="pt-12 pb-4 px-6 relative z-20 bg-[#F9F7F5]/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-200 dark:border-white/5">
        <h1 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 tracking-tight text-center">
          WelUp AI
        </h1>
        <div className="flex items-center justify-center gap-1.5 mt-1">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
          <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 uppercase tracking-widest">
            General Info, not medical advice
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 pt-6 pb-32 relative z-10 scroll-smooth">
        <div className="max-w-[390px] mx-auto space-y-6">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
            >
              {msg.text && (
                <div
                  className={`max-w-[85%] p-4 ${
                    msg.sender === "user"
                      ? "bg-amber-600 text-white rounded-[24px] rounded-br-[8px]"
                      : "bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/5 shadow-sm rounded-[24px] rounded-bl-[8px]"
                  }`}
                >
                  <p className="text-[15px] leading-relaxed">{msg.text}</p>
                </div>
              )}

              {/* Actionable Doctor Card */}
              {msg.isActionable && (
                <div className="mt-3 w-full max-w-[85%] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-[24px] p-4 shadow-sm">
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
          {!context && messages.length === 1 && (
             <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onClick={handleMockDoctorMatch}
                className="text-xs font-medium text-amber-600 bg-amber-50 px-4 py-2 rounded-full border border-amber-200 self-center mx-auto block"
              >
                (Mock Response: 2 weeks, swelling)
             </motion.button>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="absolute bottom-[env(safe-area-bottom,72px)] left-0 right-0 p-4 bg-gradient-to-t from-[#F9F7F5] via-[#F9F7F5] to-transparent dark:from-zinc-950 dark:via-zinc-950 z-30">
        <div className="max-w-[390px] mx-auto relative">
           {/* Persistent "Talk to a doctor" affordance */}
          <div className="absolute -top-10 right-2">
             <button className="flex items-center gap-1.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 shadow-sm px-3 py-1.5 rounded-full text-xs font-medium text-zinc-600 dark:text-zinc-300">
               <Phone className="w-3 h-3 text-rose-500" /> Talk to a doctor
             </button>
          </div>

          <div className="relative flex items-center mb-[env(safe-area-inset-bottom,48px)] pb-12">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Describe your symptom..."
              className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-full pl-5 pr-14 py-4 text-[15px] focus:outline-none focus:ring-2 focus:ring-amber-500/20 shadow-sm"
            />
            <button
              onClick={handleSend}
              className="absolute right-2 top-1 w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center transition-transform active:scale-95"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Chat;
