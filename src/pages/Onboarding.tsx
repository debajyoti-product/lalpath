import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FileUp } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/home");
  };

  return (
    <div className="min-h-screen max-w-[390px] mx-auto flex flex-col bg-[#F9F7F5] dark:bg-zinc-950 overflow-hidden relative shadow-2xl">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[300px] h-[300px] bg-amber-200/40 dark:bg-amber-900/30 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[300px] h-[300px] bg-rose-200/40 dark:bg-rose-900/30 blur-[100px] rounded-full pointer-events-none" />

      <div className="flex-1 px-6 pt-20 pb-10 flex flex-col relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
              onClick={handleNext}
              className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-lg font-medium py-4 rounded-[20px] transition-transform active:scale-[0.98]"
            >
              Upload & Continue
            </button>
            <button
              onClick={handleNext}
              className="w-full bg-transparent text-zinc-500 dark:text-zinc-400 text-base font-medium py-4 rounded-[20px]"
            >
              Skip for now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Onboarding;
