import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, ChevronRight, FileUp, Plus, X, Calendar as CalendarIcon, ArrowLeft } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import BottomNav from "@/components/BottomNav";

// Mock Data
const biomarkers = [
  { 
    id: 1, 
    name: "Fasting Blood Sugar", 
    value: "95 mg/dL", 
    status: "optimal", 
    path: "/history"
  },
  { 
    id: 2, 
    name: "LDL Cholesterol", 
    value: "110 mg/dL", 
    status: "high", 
    path: "/book-test"
  }
];

const HealthProfile = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [logValue, setLogValue] = useState("");

  const handleLogSubmit = () => {
    // Mock save
    setIsDrawerOpen(false);
    setLogValue("");
  };

  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 pb-32 relative overflow-hidden flex flex-col">
       {/* Background Orbs */}
       <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] bg-emerald-200/30 dark:bg-emerald-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="px-5 pt-12 relative z-10 max-w-[390px] mx-auto flex-1 w-full">
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={() => navigate(-1)} 
            className="w-10 h-10 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-white/80 dark:border-white/10 flex items-center justify-center shadow-sm transition-transform active:scale-95 shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
          </button>
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Health Profile
          </h1>
        </div>

        {/* Insights Card */}
        <div className="mb-8 relative group">
          <div className="absolute inset-0 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-[20px] border border-white/80 dark:border-white/10 shadow-sm" />
          <div className="relative p-4 flex gap-3 items-start">
             <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center shrink-0 mt-0.5">
                <Star className="w-4 h-4 text-amber-600 dark:text-amber-400 fill-amber-600 dark:fill-amber-400" />
             </div>
             <div>
               <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 block mb-1">Insights</span>
               <p className="text-[13px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
                 Your blood sugar levels are stable. But your cholesterol levels were high on your last test. Recommend checking them again.
               </p>
             </div>
          </div>
        </div>

        {/* Biomarkers List */}
        <div className="mb-8">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4 px-1">Biomarkers</h3>
          <div className="space-y-4">
            
            {/* Fasting Blood Sugar Card */}
            <div 
              onClick={() => navigate("/history")}
              className="bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-[20px] p-5 border border-white/80 dark:border-white/10 shadow-sm cursor-pointer transition-transform active:scale-[0.98] flex items-center justify-between"
            >
              <div>
                 <h4 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">Fasting Blood Sugar</h4>
                 <div className="flex items-center gap-3">
                   <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">95 <span className="text-sm font-semibold">mg/dL</span></span>
                   <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold rounded-full">
                      Optimal
                   </span>
                 </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                 <ChevronRight className="w-5 h-5 text-zinc-600 dark:text-zinc-400" />
              </div>
            </div>

            {/* LDL Cholesterol Card */}
            <div 
              className="bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-[20px] p-5 border border-white/80 dark:border-white/10 shadow-sm flex items-center justify-between"
            >
              <div>
                 <h4 className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-1">LDL Cholesterol</h4>
                 <div className="flex items-center gap-3">
                   <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">110 <span className="text-sm font-semibold">mg/dL</span></span>
                   <span className="px-2.5 py-1 bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-400 text-xs font-semibold rounded-full">
                      High
                   </span>
                 </div>
              </div>
              <button 
                onClick={() => navigate("/book-test")}
                className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold px-4 py-2.5 rounded-full shadow-sm transition-transform active:scale-95 shrink-0"
              >
                Book test
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Fixed Bottom CTAs */}
      <div className="fixed bottom-[env(safe-area-bottom,72px)] left-0 right-0 p-5 bg-gradient-to-t from-[#F9F7F5] via-[#F9F7F5] to-transparent dark:from-zinc-950 dark:via-zinc-950 z-40 pointer-events-none">
         <div className="max-w-[390px] mx-auto flex flex-row gap-3 pointer-events-auto">
           <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
             <DrawerTrigger asChild>
               <button className="flex-1 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 text-sm font-semibold py-4 rounded-full border border-zinc-200 dark:border-white/10 shadow-md shadow-zinc-200/50 dark:shadow-black/20 transition-transform active:scale-[0.98] flex items-center justify-center">
                 Log Data
               </button>
             </DrawerTrigger>
             <DrawerContent className="bg-[#F9F7F5] dark:bg-zinc-950 border-t border-zinc-200 dark:border-white/10">
                <div className="p-6 max-w-[390px] mx-auto w-full">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">Log a Reading</h2>
                    <DrawerClose asChild>
                      <button className="w-8 h-8 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center">
                        <X className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
                      </button>
                    </DrawerClose>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 block">Biomarker</label>
                      <select className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-amber-500/20 shadow-sm appearance-none">
                        <option>Fasting Blood Sugar</option>
                        <option>Blood Pressure</option>
                        <option>Weight</option>
                      </select>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 block">Value</label>
                        <input 
                          type="number" 
                          value={logValue}
                          onChange={(e) => setLogValue(e.target.value)}
                          placeholder="e.g. 95" 
                          className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-amber-500/20 shadow-sm"
                        />
                      </div>
                      <div className="flex-1">
                        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 block">Date</label>
                        <div className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-[15px] shadow-sm flex items-center justify-between text-zinc-500">
                          <span>Today</span>
                          <CalendarIcon className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={handleLogSubmit}
                    disabled={!logValue}
                    className="w-full bg-amber-600 disabled:opacity-50 text-white text-base font-medium py-4 rounded-[20px] transition-transform active:scale-[0.98] shadow-lg shadow-amber-600/20"
                  >
                    Save Reading
                  </button>
                </div>
              </DrawerContent>
           </Drawer>

           <button className="flex-1 bg-amber-600 text-white text-sm font-semibold py-4 rounded-full shadow-md shadow-amber-600/30 transition-transform active:scale-[0.98] flex items-center justify-center">
             Upload report
           </button>
         </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default HealthProfile;
