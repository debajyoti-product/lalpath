import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
  const [chatInput, setChatInput] = useState("");
  const [lastChatQuery, setLastChatQuery] = useState<string | null>(null);

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
      
      <div className="px-5 pt-12 relative z-10 max-w-[390px] mx-auto">
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
          {lastChatQuery && (
            <button 
              onClick={() => navigate(`/chat?query=${lastChatQuery}`)}
              className="flex items-center gap-1.5 bg-white/70 dark:bg-white/5 border border-border/60 text-foreground text-xs font-semibold px-3.5 py-2 rounded-full shadow-sm transition-transform active:scale-95"
            >
              <History className="w-3.5 h-3.5" />
              History
            </button>
          )}
        </motion.div>

        {/* Chat Module */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mb-6"
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

          {/* Compact Action Cards */}
          <motion.div variants={itemVariant} className="mb-6">
            <div className="grid grid-cols-2 gap-2.5">
              <div
                onClick={() => {
                  setLastChatQuery("consult_doctor");
                  navigate("/chat?query=consult_doctor");
                }}
                className="bg-card bg-gradient-to-tr from-orange-100/60 to-transparent dark:from-orange-900/20 rounded-card shadow-card p-2 relative overflow-hidden h-[64px] flex flex-col justify-between cursor-pointer group transition-transform active:scale-[0.98] border border-border/50"
              >
                <h3 className="text-[11px] font-semibold text-foreground leading-tight pr-6">
                  Consult<br/><span className="text-[15px] block mt-0.5">Doctor</span>
                </h3>
                <div className="absolute bottom-[-4px] right-[-8px] opacity-90 -rotate-12 drop-shadow-lg scale-90">
                  <ConsultIllustration className="w-[38px] h-[38px]" />
                </div>
              </div>

              <div
                onClick={() => {
                  setLastChatQuery("book_test");
                  navigate("/chat?query=book_test");
                }}
                className="bg-card bg-gradient-to-tr from-orange-100/60 to-transparent dark:from-orange-900/20 rounded-card shadow-card p-2 relative overflow-hidden h-[64px] flex flex-col justify-between cursor-pointer group transition-transform active:scale-[0.98] border border-border/50"
              >
                <h3 className="text-[11px] font-semibold text-foreground leading-tight pr-6">
                  Book<br/><span className="text-[15px] block mt-0.5">Checkup</span>
                </h3>
                <div className="absolute bottom-[-4px] right-[-8px] opacity-90 rotate-12 drop-shadow-lg scale-90">
                  <HealthIllustration className="w-[38px] h-[38px]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chat Input */}
          <motion.div variants={itemVariant} className="mt-44 mb-10">
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
        </motion.div>

        {/* Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-10"
        >
          <h2 className="text-xl font-bold text-foreground mb-4 px-1">Know your <span className="italic font-normal">health</span> better</h2>
          <div className="bg-card dark:bg-zinc-900 border border-border/50 rounded-[24px] p-4 shadow-sm relative">
            
            {/* Header row */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-muted/60 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <h3 className="text-[15px] font-medium text-foreground leading-tight">report.pdf</h3>
                  <p className="text-[12px] text-muted-foreground mt-0.5">
                    Test date: <span className="font-semibold text-foreground">10-06-2026</span>
                  </p>
                </div>
              </div>
              <button className="w-8 h-8 rounded-full bg-muted/60 flex items-center justify-center transition-transform active:scale-95 shrink-0">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2.5 mb-5">
              {/* LDL High */}
              <div className="bg-background rounded-[20px] shadow-sm border border-border/50 p-3 flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                </div>
                <div className="w-full">
                  <p className="text-[12px] font-semibold text-foreground leading-tight">LDL</p>
                  <p className="text-[11px] text-rose-600 dark:text-rose-400 font-medium mt-0.5">High</p>
                </div>
              </div>

              {/* HbA1c Optimal */}
              <div className="bg-background rounded-[20px] shadow-sm border border-border/50 p-3 flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="w-full">
                  <p className="text-[12px] font-semibold text-foreground leading-tight">HbA1c</p>
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium mt-0.5">Optimal</p>
                </div>
              </div>

              {/* Vitamin D Low */}
              <div className="bg-background rounded-[20px] shadow-sm border border-border/50 p-3 flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                  <Droplets className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div className="w-full">
                  <p className="text-[12px] font-semibold text-foreground leading-tight">Vit. D</p>
                  <p className="text-[11px] text-amber-600 dark:text-amber-400 font-medium mt-0.5">Low</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/profile")}
              className="w-full bg-primary text-white text-[15px] font-semibold py-3.5 rounded-full shadow-md shadow-primary/20 transition-transform active:scale-[0.98] flex items-center justify-center gap-2"
            >
              Check insights <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* Personalized Content Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <h2 className="text-xl font-bold text-foreground mb-4 px-1">welUp bites</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 -mr-5 pr-5 scrollbar-hide snap-x snap-mandatory">
            <div
              onClick={() => navigate("/chat?context=high_sugar")}
              className="min-w-[240px] h-[160px] rounded-card shadow-card overflow-hidden relative shrink-0 snap-start cursor-pointer group"
            >
              <img src={hba1cImg} alt="Understanding your HbA1c" className="object-cover w-full h-full absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-base text-white font-medium">Understanding your HbA1c</h3>
                <p className="text-[11px] text-white/70 mt-1">Based on your recent test</p>
              </div>
            </div>

            <div
              onClick={() => navigate("/chat?context=metformin")}
              className="min-w-[240px] h-[160px] rounded-card shadow-card overflow-hidden relative shrink-0 snap-start cursor-pointer group"
            >
              <img src={metforminImg} alt="What is Metformin?" className="object-cover w-full h-full absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-base text-white font-medium">What is Metformin?</h3>
                <p className="text-[11px] text-white/70 mt-1">From your prescription</p>
              </div>
            </div>

            <div
              onClick={() => navigate("/chat?context=metformin")}
              className="min-w-[240px] h-[160px] rounded-card shadow-card overflow-hidden relative shrink-0 snap-start cursor-pointer group"
            >
              <img src={cholesterolImg} alt="Why cholesterol matters" className="object-cover w-full h-full absolute inset-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-display text-base text-white font-medium">Why cholesterol matters</h3>
                <p className="text-[11px] text-white/70 mt-1">Your LDL was flagged</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
