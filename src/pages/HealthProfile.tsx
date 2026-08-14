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
            onClick={() => navigate("/home")} 
            className="w-10 h-10 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-white/80 dark:border-white/10 flex items-center justify-center shadow-sm transition-transform active:scale-95 shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
          </button>
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Health Profile
          </h1>
        </div>

        {/* Action Cards (CTAs) */}
        <div className="grid grid-cols-2 gap-3 mb-6">
           <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
             <DrawerTrigger asChild>
               <div className="bg-gradient-to-tr from-orange-100/60 to-transparent dark:from-orange-900/20 bg-card rounded-card shadow-card p-3 h-[90px] flex flex-col justify-between cursor-pointer border border-border/50 transition-transform active:scale-[0.98]">
                 <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                   <Plus className="w-4 h-4 text-primary" />
                 </div>
                 <h3 className="text-[13px] font-semibold text-foreground">Add Manual</h3>
               </div>
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

           <div className="bg-gradient-to-tr from-orange-100/60 to-transparent dark:from-orange-900/20 bg-card rounded-card shadow-card p-3 h-[90px] flex flex-col justify-between cursor-pointer border border-border/50 transition-transform active:scale-[0.98]">
             <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
               <FileUp className="w-4 h-4 text-primary" />
             </div>
             <h3 className="text-[13px] font-semibold text-foreground">Upload Report</h3>
           </div>
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

        {/* Trends Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-foreground mb-3 px-1">Trends</h3>
          
          {/* Pills */}
          <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide px-1">
            <button className="px-4 py-1.5 rounded-full bg-primary text-white text-xs font-medium shrink-0">Blood Sugar</button>
            <button className="px-4 py-1.5 rounded-full bg-card border border-border text-foreground text-xs font-medium shrink-0">LDL</button>
            <button className="px-4 py-1.5 rounded-full bg-card border border-border text-foreground text-xs font-medium shrink-0">Vit. D</button>
          </div>

          {/* Trend Graph (Mock) */}
          <div className="bg-card rounded-[20px] p-4 border border-border/50 shadow-sm mb-4 h-[180px] flex items-end gap-2 justify-between">
            {[40, 70, 50, 90, 60, 100, 80].map((h, i) => (
              <div key={i} className="w-8 bg-primary/20 rounded-t-sm" style={{ height: `${h}%` }}>
                 <div className="w-full bg-primary rounded-t-sm" style={{ height: '4px' }} />
              </div>
            ))}
          </div>

          {/* Secondary CTA */}
          <button className="w-full bg-card border border-primary/20 text-primary text-sm font-semibold py-3.5 rounded-full shadow-sm transition-transform active:scale-[0.98]">
            Check detail health trends
          </button>
        </div>

      <BottomNav />
    </div>
  );
};

export default HealthProfile;
