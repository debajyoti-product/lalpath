import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Droplets, TrendingUp, ChevronRight, ArrowRight, FileText, X, Clock, Pill, Send, Plus, Mic, History } from "lucide-react";

import hba1cImg from "@/assets/content/hba1c.jpg";
import metforminImg from "@/assets/content/metformin.jpg";
import cholesterolImg from "@/assets/content/cholesterol.jpg";

import {
  ConsultIllustration,
  HealthIllustration,
} from "@/components/illustrations";

const Home = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const historyQuery = searchParams.get("historyQuery");
  const [chatInput, setChatInput] = useState("");
  const [lastChatQuery, setLastChatQuery] = useState<string | null>(historyQuery);

  const handleChatSend = () => {
    if (!chatInput.trim()) return;
    const query = chatInput;
    setChatInput("");
    setLastChatQuery("free_chat");
    navigate(`/chat?freeText=${encodeURIComponent(query)}`);
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 pb-24 relative overflow-hidden">
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-orange-100/80 to-transparent dark:from-orange-900/30 pointer-events-none z-0" />
      
      <div className="px-5 pt-12 pb-6 relative z-10 max-w-[390px] mx-auto flex flex-col min-h-[calc(100vh-90px)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 flex items-start justify-between"
        >
          <div>
            <p className="text-sm text-muted-foreground font-medium">Hello,</p>
            <h1 className="text-4xl font-semibold text-primary tracking-tight">Debajyoti</h1>
          </div>
          <button 
            disabled={!lastChatQuery}
            onClick={() => lastChatQuery && navigate(`/chat?query=${lastChatQuery}`)}
            className={`w-10 h-10 rounded-full flex items-center justify-center bg-card border border-border/60 shadow-sm transition-all ${
              !lastChatQuery ? 'opacity-40 cursor-not-allowed' : 'active:scale-95 hover:shadow-md cursor-pointer text-primary'
            }`}
          >
            <History className="w-[18px] h-[18px]" />
          </button>
        </motion.div>

        {/* Chat Module */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col"
        >
          <motion.h2 
            variants={itemVariant}
            className="text-xl font-bold text-foreground mb-4 px-1"
          >
            How can I help you today?
          </motion.h2>

          <motion.div variants={itemVariant} className="mb-5 px-1">
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[13px] text-foreground font-medium">
                <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                Book doctor consults & blood tests
              </li>
              <li className="flex items-center gap-3 text-[13px] text-foreground font-medium">
                <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                Get insights on your lab reports
              </li>
              <li className="flex items-center gap-3 text-[13px] text-foreground font-medium">
                <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <Pill className="w-3.5 h-3.5" />
                </div>
                Understand your medications
              </li>
            </ul>
          </motion.div>

          <div className="mt-auto">
            {/* Compact Action Cards */}
            <motion.div variants={itemVariant} className="mb-8">
              <div className="grid grid-cols-2 gap-3">
                <div
                  onClick={() => {
                    setLastChatQuery("consult_doctor");
                    navigate("/chat?query=consult_doctor");
                  }}
                  className="bg-card bg-gradient-to-tr from-orange-100/60 to-transparent dark:from-orange-900/20 rounded-card shadow-card p-2.5 relative overflow-hidden h-[74px] flex flex-col justify-between cursor-pointer group transition-transform active:scale-[0.98] border border-border/50"
                >
                  <h3 className="text-[13px] font-semibold text-foreground leading-tight pr-6">
                    Consult<br/><span className="text-[17px] block mt-0.5">Doctor</span>
                  </h3>
                  <div className="absolute bottom-[-4px] right-[-6px] opacity-90 -rotate-12 drop-shadow-lg scale-100">
                    <ConsultIllustration className="w-[44px] h-[44px]" />
                  </div>
                </div>

                <div
                  onClick={() => {
                    setLastChatQuery("book_test");
                    navigate("/chat?query=book_test");
                  }}
                  className="bg-card bg-gradient-to-tr from-orange-100/60 to-transparent dark:from-orange-900/20 rounded-card shadow-card p-2.5 relative overflow-hidden h-[74px] flex flex-col justify-between cursor-pointer group transition-transform active:scale-[0.98] border border-border/50"
                >
                  <h3 className="text-[13px] font-semibold text-foreground leading-tight pr-6">
                    Book<br/><span className="text-[17px] block mt-0.5">Checkup</span>
                  </h3>
                  <div className="absolute bottom-[-4px] right-[-6px] opacity-90 rotate-12 drop-shadow-lg scale-100">
                    <HealthIllustration className="w-[44px] h-[44px]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Chat Input */}
            <motion.div variants={itemVariant} className="mb-2">
            <div className="relative p-[2px] rounded-full overflow-hidden shadow-lg shadow-primary/20 group">
              <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,hsl(var(--primary))_50%,transparent_100%)] opacity-80" />
              <div className="relative flex items-center bg-card rounded-full w-full">
                <button className="pl-4 pr-2 text-muted-foreground hover:text-foreground transition-colors flex-shrink-0">
                  <Plus className="w-5 h-5" />
                </button>
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleChatSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent py-4 text-[14.5px] focus:outline-none text-foreground placeholder:text-muted-foreground"
                />
                <div className="pr-2 pl-2 flex items-center gap-2 flex-shrink-0">
                  <button className="text-muted-foreground hover:text-foreground transition-colors">
                    <Mic className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleChatSend}
                    className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center transition-transform active:scale-95"
                  >
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          </div>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
