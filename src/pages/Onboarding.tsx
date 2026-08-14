import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Stethoscope, Search, FileUp, Sparkles, Activity } from "lucide-react";

type Intent = "symptom" | "routine" | "explore" | null;

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [intent, setIntent] = useState<Intent>(null);
  const navigate = useNavigate();

  const handleIntentSelection = (selectedIntent: Intent) => {
    setIntent(selectedIntent);
    if (selectedIntent === "symptom") {
      navigate("/chat");
    } else {
      setStep(1); // Proceed to test upload for routine/explore
    }
  };

  const nextStep = () => {
    if (step < 2) setStep(step + 1);
    else navigate("/home");
  };

  const skipTestUpload = () => {
    setStep(2);
  };

  return (
    <div className="min-h-screen max-w-[390px] mx-auto flex flex-col bg-[#F9F7F5] dark:bg-zinc-950 overflow-hidden relative shadow-2xl">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-amber-200/40 dark:bg-amber-900/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-rose-200/40 dark:bg-rose-900/30 blur-[100px] rounded-full pointer-events-none" />

      {/* Header/Progress */}
      <div className="pt-12 px-6 relative z-10 flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${
              i <= step ? "bg-amber-600 dark:bg-amber-500" : "bg-black/5 dark:bg-white/10"
            }`}
          />
        ))}
      </div>

      <div className="flex-1 px-6 pt-10 pb-10 flex flex-col relative z-10">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col"
            >
              <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-50 mb-2 tracking-tight">
                Why are you here today?
              </h1>
              <p className="text-base text-zinc-500 dark:text-zinc-400 mb-10">
                Let's get you to the right place.
              </p>

              <div className="space-y-4">
                <IntentCard
                  icon={<Stethoscope className="text-rose-500" />}
                  title="I have a symptom"
                  desc="Chat with our AI to find the right specialist."
                  onClick={() => handleIntentSelection("symptom")}
                />
                <IntentCard
                  icon={<Activity className="text-emerald-500" />}
                  title="Routine check-up"
                  desc="Upload tests or see what you need."
                  onClick={() => handleIntentSelection("routine")}
                />
                <IntentCard
                  icon={<Search className="text-indigo-500" />}
                  title="Just exploring"
                  desc="See what WelUp can do for you."
                  onClick={() => handleIntentSelection("explore")}
                />
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col"
            >
              <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-50 mb-2 tracking-tight">
                Got a past test report?
              </h1>
              <p className="text-base text-zinc-500 dark:text-zinc-400 mb-10">
                Upload it now so our AI can start building your health profile.
              </p>

              <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-full relative group cursor-pointer">
                  <div className="absolute inset-0 bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-[32px] border border-white/60 dark:border-white/10" />
                  <div className="relative p-12 flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                      <FileUp className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Upload PDF</h3>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">Tap to browse files</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  onClick={nextStep}
                  className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-lg font-medium py-4 rounded-[20px] transition-transform active:scale-[0.98]"
                >
                  Upload & Continue
                </button>
                <button
                  onClick={skipTestUpload}
                  className="w-full bg-transparent text-zinc-500 dark:text-zinc-400 text-base font-medium py-4 rounded-[20px]"
                >
                  Skip for now
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              className="flex-1 flex flex-col justify-center text-center relative"
            >
               <div className="absolute inset-0 bg-white/40 dark:bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/60 dark:border-white/10 flex flex-col items-center justify-center p-8">
                 <div className="w-20 h-20 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center mb-6">
                    <Sparkles className="w-10 h-10 text-amber-600 dark:text-amber-400" />
                 </div>
                 <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4 tracking-tight">
                    Welcome to WelUp
                 </h1>
                 <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-[280px]">
                    Enjoy a <span className="font-semibold text-zinc-900 dark:text-zinc-100">Free GP/SP Consult</span> and <span className="font-semibold text-zinc-900 dark:text-zinc-100">50% off</span> your first test as a welcome gift.
                 </p>
                 <button
                    onClick={() => navigate("/home")}
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white text-lg font-medium py-4 rounded-[20px] transition-transform active:scale-[0.98] shadow-xl shadow-amber-600/20"
                  >
                    Get Started
                  </button>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const IntentCard = ({ icon, title, desc, onClick }: { icon: React.ReactNode, title: string, desc: string, onClick: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-5 p-5 relative overflow-hidden group text-left transition-transform active:scale-[0.98]"
    >
      <div className="absolute inset-0 bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-[24px] border border-white/80 dark:border-white/10 group-hover:bg-white/80 dark:group-hover:bg-white/10 transition-colors" />
      <div className="relative z-10 w-12 h-12 rounded-full bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div className="relative z-10 flex-1">
        <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{title}</h3>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">{desc}</p>
      </div>
    </button>
  );
};

export default Onboarding;
