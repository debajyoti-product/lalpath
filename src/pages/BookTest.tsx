import { useNavigate } from "react-router-dom";
import { ArrowLeft, Beaker, User as UserIcon } from "lucide-react";

const BookTest = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 pb-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[20%] left-[-10%] w-[300px] h-[300px] bg-rose-200/30 dark:bg-rose-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="px-5 pt-12 relative z-10 max-w-[390px] mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate(-1)} 
            className="w-10 h-10 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-white/80 dark:border-white/10 flex items-center justify-center shadow-sm transition-transform active:scale-95"
          >
            <ArrowLeft className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
          </button>
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Book a Test
          </h1>
        </div>

        <div className="space-y-4">
          {/* Lipid Profile Card */}
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-[24px] border border-white dark:border-white/10 shadow-sm overflow-hidden flex flex-col group">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-900/40 flex items-center justify-center shrink-0">
                  <Beaker className="w-6 h-6 text-rose-600 dark:text-rose-400" />
                </div>
                <div className="text-right">
                  <span className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">$45</span>
                </div>
              </div>
              <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-2">Lipid Profile</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                Comprehensive cholesterol test to assess heart health risk.
              </p>
              
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-4 mb-6">
                <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-300 mb-2 uppercase tracking-wider">Parameters Included</p>
                <div className="flex flex-wrap gap-2">
                  {["Total Cholesterol", "HDL", "LDL", "Triglycerides"].map(param => (
                    <span key={param} className="px-2.5 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-[11px] font-medium text-zinc-700 dark:text-zinc-300">
                      {param}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium py-3.5 rounded-[20px] transition-transform active:scale-[0.98]">
                Select Test
              </button>
            </div>
          </div>

          {/* Men's Full Body Lite Card */}
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl rounded-[24px] border border-white dark:border-white/10 shadow-sm overflow-hidden flex flex-col group">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center shrink-0">
                  <UserIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <div className="text-right">
                  <span className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">$129</span>
                </div>
              </div>
              <h2 className="text-xl font-medium text-zinc-900 dark:text-zinc-100 mb-2">Men's Full Body Lite</h2>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
                Essential baseline covering metabolic, kidney, liver, and hormonal health.
              </p>
              
              <div className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-4 mb-6">
                <p className="text-xs font-semibold text-zinc-900 dark:text-zinc-300 mb-2 uppercase tracking-wider">Parameters Included</p>
                <div className="flex flex-wrap gap-2">
                  {["HbA1c", "Lipid Profile", "Liver Function", "Kidney Panel", "Testosterone"].map(param => (
                    <span key={param} className="px-2.5 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-md text-[11px] font-medium text-zinc-700 dark:text-zinc-300">
                      {param}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium py-3.5 rounded-[20px] transition-transform active:scale-[0.98]">
                Select Test
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookTest;
