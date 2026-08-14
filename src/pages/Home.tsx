import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { ChevronRight, MessageCircle, Stethoscope, Pill } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  // State to randomly or sequentially mock the AI slot logic for prototype
  const [heroType] = useState<"action" | "content">("content");

  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 pb-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[-5%] left-[-5%] w-[300px] h-[300px] bg-amber-200/40 dark:bg-amber-900/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[250px] h-[250px] bg-rose-200/30 dark:bg-rose-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="px-5 pt-12 relative z-10 max-w-[390px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">Good morning,</p>
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">Rohan</h1>
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800/50">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <p className="text-xs font-medium text-amber-800 dark:text-amber-300">Last test was 14 months ago</p>
          </div>
        </motion.div>

        {/* Dynamic AI Hero Slot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 relative group"
        >
          <div className="absolute inset-0 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-[32px] border border-white/80 dark:border-white/10 shadow-sm" />
          
          {heroType === "action" ? (
            <div className="relative p-6 flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-rose-600 dark:text-rose-400" />
              </div>
              <div>
                <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-1">
                  You mentioned knee pain
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  Our AI suggests speaking with an Orthopedic Specialist. Your free consult credit is ready to use.
                </p>
              </div>
              <button
                onClick={() => navigate("/chat")}
                className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-base font-medium py-3.5 rounded-[20px] transition-transform active:scale-[0.98] flex items-center justify-center gap-2"
              >
                See a Specialist <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="relative p-6 flex flex-col items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center">
                <Pill className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-1">
                  About your Metformin
                </h2>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2 leading-relaxed">
                  You were recently prescribed Metformin (500mg) for blood sugar management. It works by reducing the amount of glucose your liver produces.
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-500 font-medium tracking-wide">
                  Common side effects include mild nausea, especially in the first week. Taking it with meals helps.
                </p>
              </div>
              <button
                onClick={() => navigate("/chat?context=metformin")}
                className="w-full bg-zinc-100 dark:bg-white/10 text-zinc-900 dark:text-white text-sm font-medium py-3 rounded-[16px] transition-transform active:scale-[0.98] flex items-center justify-center gap-2 mt-2"
              >
                Ask a follow-up question <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </motion.div>

        {/* Bookings Status Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-3 px-1">Bookings</h3>
          <div className="relative overflow-hidden rounded-[24px]">
            <div className="absolute inset-0 bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10" />
            <div className="relative flex divide-x divide-zinc-200 dark:divide-white/10">
              <div className="flex-1 p-4 flex flex-col items-center justify-center gap-1">
                <span className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">1</span>
                <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Scheduled</span>
              </div>
              <div className="flex-1 p-4 flex flex-col items-center justify-center gap-1 opacity-50">
                <span className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">0</span>
                <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">Completed</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick entry into AI Chat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <button
            onClick={() => navigate("/chat")}
            className="w-full flex items-center justify-between p-5 relative overflow-hidden group transition-transform active:scale-[0.98]"
          >
            <div className="absolute inset-0 bg-amber-600 rounded-[24px] shadow-lg shadow-amber-600/20" />
            <div className="relative z-10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-base font-medium text-white">Ask WelUp AI</h3>
                <p className="text-xs text-amber-100">Check symptoms or ask questions</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-white/70 relative z-10" />
          </button>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
