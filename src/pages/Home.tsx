import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { ArrowUpRight } from "lucide-react";

import hba1cImg from "@/assets/content/hba1c.jpg";
import metforminImg from "@/assets/content/metformin.jpg";
import cholesterolImg from "@/assets/content/cholesterol.jpg";

import {
  ChatIllustration,
  HealthIllustration,
  PrescriptionIllustration,
  ConsultIllustration,
} from "@/components/illustrations";

const Home = () => {
  const navigate = useNavigate();

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 pb-24 relative overflow-hidden">
      <div className="px-5 pt-12 relative z-10 max-w-[390px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <p className="text-sm text-muted-foreground font-medium">Good morning,</p>
          <h1 className="text-3xl font-semibold text-foreground tracking-tight">Rohan</h1>
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800/50">
            <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <p className="text-xs font-medium text-amber-800 dark:text-amber-300">Last test was 14 months ago</p>
          </div>
        </motion.div>

        {/* Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-10 relative overflow-hidden rounded-[32px] shadow-card bg-gradient-to-br from-primary to-[hsl(20,80%,55%)] p-6 flex flex-col items-start"
        >
          <div className="text-white/60 text-[11px] uppercase tracking-[0.2em] font-medium mb-3">
            AI Insight
          </div>
          <h2 className="font-display text-2xl text-white font-medium mb-2">
            Your cholesterol needs attention
          </h2>
          <p className="text-white/80 text-sm leading-relaxed mb-6">
            Your recent LDL levels are slightly elevated. We've prepared a personalized plan to help you manage it naturally.
          </p>
          <button 
            onClick={() => navigate("/chat?context=cholesterol")}
            className="bg-white text-primary rounded-full px-6 py-3 text-sm font-semibold shadow-sm transition-transform active:scale-[0.98]"
          >
            View Recommendations
          </button>
        </motion.div>

        {/* Module Grid (2x2) */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="mb-10"
        >
          <h2 className="text-lg font-medium text-foreground mb-4 px-1">Explore</h2>
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              variants={itemVariant}
              onClick={() => navigate("/chat")}
              className="bg-card rounded-card shadow-card p-5 relative overflow-hidden min-h-[160px] flex flex-col justify-between cursor-pointer group transition-transform active:scale-[0.98]"
            >
              <div>
                <h3 className="text-sm font-semibold text-foreground">Chat</h3>
                <p className="text-xs text-muted-foreground mt-1">Ask anything</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center mt-4">
                <ArrowUpRight className="w-4 h-4 text-background" />
              </div>
              <div className="absolute bottom-[-8px] right-[-8px] opacity-80">
                <ChatIllustration />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariant}
              onClick={() => navigate("/profile")}
              className="bg-card rounded-card shadow-card p-5 relative overflow-hidden min-h-[160px] flex flex-col justify-between cursor-pointer group transition-transform active:scale-[0.98]"
            >
              <div>
                <h3 className="text-sm font-semibold text-foreground">Health Profile</h3>
                <p className="text-xs text-muted-foreground mt-1">Lab reports & biomarkers</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center mt-4">
                <ArrowUpRight className="w-4 h-4 text-background" />
              </div>
              <div className="absolute bottom-[-8px] right-[-8px] opacity-80">
                <HealthIllustration />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariant}
              onClick={() => navigate("/chat?context=metformin")}
              className="bg-card rounded-card shadow-card p-5 relative overflow-hidden min-h-[160px] flex flex-col justify-between cursor-pointer group transition-transform active:scale-[0.98]"
            >
              <div>
                <h3 className="text-sm font-semibold text-foreground">Prescriptions</h3>
                <p className="text-xs text-muted-foreground mt-1">Medication info</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center mt-4">
                <ArrowUpRight className="w-4 h-4 text-background" />
              </div>
              <div className="absolute bottom-[-8px] right-[-8px] opacity-80">
                <PrescriptionIllustration />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariant}
              onClick={() => navigate("/book-test")}
              className="bg-card rounded-card shadow-card p-5 relative overflow-hidden min-h-[160px] flex flex-col justify-between cursor-pointer group transition-transform active:scale-[0.98]"
            >
              <div>
                <h3 className="text-sm font-semibold text-foreground">Book a Consult</h3>
                <p className="text-xs text-muted-foreground mt-1">See a specialist</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center mt-4">
                <ArrowUpRight className="w-4 h-4 text-background" />
              </div>
              <div className="absolute bottom-[-8px] right-[-8px] opacity-80">
                <ConsultIllustration />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Personalized Content Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-lg font-medium text-foreground mb-4 px-1">For You</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 scrollbar-hide snap-x snap-mandatory">
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
