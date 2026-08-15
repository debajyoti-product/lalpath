import { motion } from "framer-motion";
import { ChevronLeft, Upload, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 flex flex-col relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] bg-emerald-200/30 dark:bg-emerald-900/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="pt-14 px-5 relative z-20 flex items-center justify-between">
        <button 
          onClick={() => navigate(-1)} 
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm border border-border transition-transform active:scale-95"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight absolute left-1/2 -translate-x-1/2">
          Health Reports
        </h1>
        <div className="w-10" />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center relative z-10 pb-20 mt-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8 drop-shadow-xl"
        >
          <FileText className="w-28 h-28 text-zinc-300 dark:text-zinc-600 stroke-[1] fill-white dark:fill-zinc-900" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-[22px] font-semibold text-zinc-400 dark:text-zinc-500 mb-2"
        >
          No reports available
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-[15px] text-zinc-400/80 dark:text-zinc-500/80 font-medium max-w-[260px]"
        >
          Upload reports to empower your health
        </motion.p>
      </div>

      <div className="px-[30%] pb-8 relative z-20">
        <button className="w-full bg-primary text-white text-[15px] font-semibold py-4 rounded-full shadow-md shadow-primary/20 transition-transform active:scale-[0.98] flex items-center justify-center gap-2">
          <Upload className="w-5 h-5" />
          Upload
        </button>
      </div>
    </div>
  );
};

export default Reports;
