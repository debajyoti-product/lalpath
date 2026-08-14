import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { 
  Activity, AlertCircle, CheckCircle2, TrendingUp, Syringe, 
  Plus, X, Calendar as CalendarIcon, FileUp, Stethoscope
} from "lucide-react";
import { 
  LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip 
} from "recharts";
import { Drawer, DrawerContent, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";

// Initial Mock Data with History
const initialBiomarkers = [
  { 
    id: 1, 
    name: "Fasting Blood Sugar", 
    value: "95 mg/dL", 
    status: "healthy", 
    explanation: "Optimal level. Indicates normal insulin sensitivity.",
    source: "lab",
    history: [
      { date: "Jan", value: 92, source: "lab" },
      { date: "Feb", value: 94, source: "lab" },
      { date: "Mar", value: 95, source: "lab" }
    ],
    threshold: 125 // Deviation threshold for consult trigger
  },
  { 
    id: 2, 
    name: "LDL Cholesterol", 
    value: "110 mg/dL", 
    status: "watch", 
    explanation: "Borderline high. Known as 'bad' cholesterol.",
    source: "lab",
    history: [],
    threshold: 160
  }
];

const HealthProfile = () => {
  const navigate = useNavigate();
  const [biomarkers, setBiomarkers] = useState(initialBiomarkers);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  
  // Logging State
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [logValue, setLogValue] = useState("");
  const [hasDeviation, setHasDeviation] = useState(false);

  const handleLogSubmit = () => {
    const numericValue = parseFloat(logValue);
    if (isNaN(numericValue)) return;

    // We'll mock adding to Fasting Blood Sugar
    const updated = biomarkers.map(b => {
      if (b.name === "Fasting Blood Sugar") {
        const newHistory = [...b.history, { date: "Now", value: numericValue, source: "logged" }];
        const isHigh = numericValue > b.threshold;
        if (isHigh) setHasDeviation(true);
        
        return {
          ...b,
          value: `${numericValue} mg/dL`,
          status: isHigh ? "risk" : "healthy",
          explanation: isHigh ? "Significantly elevated above your baseline." : b.explanation,
          history: newHistory
        };
      }
      return b;
    });

    setBiomarkers(updated);
    setIsDrawerOpen(false);
    setLogValue("");
  };

  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 pb-24 relative overflow-hidden">
       {/* Background Orbs */}
       <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] bg-emerald-200/30 dark:bg-emerald-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="px-5 pt-12 relative z-10 max-w-[390px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Health Profile
          </h1>
          
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-white/80 dark:border-white/10 flex items-center justify-center shadow-sm">
              <FileUp className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
            </button>
            <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
              <DrawerTrigger asChild>
                <button className="h-10 px-4 rounded-full bg-amber-600 text-white flex items-center gap-2 shadow-sm shadow-amber-600/20">
                  <Plus className="w-4 h-4" />
                  <span className="text-sm font-medium">Log</span>
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
                        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1.5 block">Value (mg/dL)</label>
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
          </div>
        </div>

        {/* AI Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 relative group"
        >
          <div className="absolute inset-0 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-[24px] border border-white/80 dark:border-white/10 shadow-sm" />
          <div className="relative p-5">
             <div className="flex items-center gap-2 mb-3">
               <div className="w-6 h-6 rounded-full bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                  <Activity className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
               </div>
               <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">AI Summary</span>
             </div>
             <p className="text-[15px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
               {hasDeviation 
                  ? <span>Your recently logged <span className="font-medium text-zinc-900 dark:text-zinc-100">Blood Sugar</span> is significantly higher than your baseline. I recommend consulting a specialist to adjust your care.</span>
                  : <span>Everything remains stable based on your latest data. We recommend keeping an eye on your dietary sugar.</span>
               }
             </p>
          </div>
        </motion.div>

        {/* Biomarkers List with Trend Views */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4 px-1">Biomarkers</h3>
          <div className="space-y-3">
            {biomarkers.map((marker, idx) => {
               const isExpanded = expandedId === marker.id;
               
               return (
                 <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.1 + (idx * 0.05) }}
                   key={marker.id} 
                   onClick={() => setExpandedId(isExpanded ? null : marker.id)}
                   className="bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-[20px] p-4 border border-white/80 dark:border-white/10 shadow-sm overflow-hidden cursor-pointer transition-all"
                 >
                   <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                         <h4 className="text-base font-medium text-zinc-900 dark:text-zinc-100">{marker.name}</h4>
                         <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-200">{marker.value}</span>
                      </div>
                      {marker.status === "healthy" && <CheckCircle2 className="w-5 h-5 text-emerald-500" />}
                      {marker.status === "watch" && <AlertCircle className="w-5 h-5 text-amber-500" />}
                      {marker.status === "risk" && <TrendingUp className="w-5 h-5 text-rose-500" />}
                   </div>
                   <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-2">
                     {marker.explanation}
                   </p>
                   
                   <AnimatePresence>
                     {isExpanded && marker.history && marker.history.length > 0 && (
                       <motion.div 
                         initial={{ height: 0, opacity: 0 }}
                         animate={{ height: "auto", opacity: 1 }}
                         exit={{ height: 0, opacity: 0 }}
                         className="pt-4 border-t border-zinc-200 dark:border-white/10 mt-2"
                       >
                         <h5 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">Trend (Lab + Logged)</h5>
                         <div className="h-[120px] w-full">
                           <ResponsiveContainer width="100%" height="100%">
                             <LineChart data={marker.history} margin={{ top: 5, right: 5, bottom: 0, left: -25 }}>
                               <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(150, 150, 150, 0.2)" />
                               <XAxis dataKey="date" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                               <YAxis tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                               <Tooltip 
                                 contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                 formatter={(val: number) => [`${val}`, 'Value']}
                                 labelStyle={{ color: 'black', fontWeight: 'bold', marginBottom: '4px' }}
                               />
                               <Line 
                                 type="monotone" 
                                 dataKey="value" 
                                 stroke="#d97706" 
                                 strokeWidth={3} 
                                 dot={(props) => {
                                   const { cx, cy, payload } = props;
                                   return (
                                     <circle 
                                       key={`dot-${payload.date}`}
                                       cx={cx} cy={cy} r={4} 
                                       fill={payload.source === "logged" ? "#d97706" : "#059669"} 
                                       stroke="white" strokeWidth={2} 
                                     />
                                   );
                                 }}
                               />
                             </LineChart>
                           </ResponsiveContainer>
                         </div>
                         <div className="flex items-center gap-4 mt-3">
                            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-600"></div><span className="text-[10px] text-zinc-500">Lab</span></div>
                            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-amber-600"></div><span className="text-[10px] text-zinc-500">Logged</span></div>
                         </div>
                       </motion.div>
                     )}
                   </AnimatePresence>
                 </motion.div>
               )
            })}
          </div>
        </motion.div>

        {/* Action Engine (Dynamic based on deviation) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4 px-1">Recommended Action</h3>
          
          {hasDeviation ? (
             <div 
               onClick={() => navigate("/chat?context=high_sugar")}
               className="relative group cursor-pointer overflow-hidden rounded-[24px]"
             >
               <div className="absolute inset-0 bg-rose-600 transition-transform group-active:scale-[0.98]" />
               <div className="relative p-5 flex items-center justify-between transition-transform group-active:scale-[0.98]">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                       <Stethoscope className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-white">Consult Endocrinologist</h4>
                      <p className="text-sm text-rose-100 mt-0.5">High sugar reading logged.</p>
                    </div>
                 </div>
               </div>
            </div>
          ) : (
            <div className="relative group cursor-pointer overflow-hidden rounded-[24px]">
               <div className="absolute inset-0 bg-zinc-900 dark:bg-white transition-transform group-active:scale-[0.98]" />
               <div className="relative p-5 flex items-center justify-between transition-transform group-active:scale-[0.98]">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 dark:bg-black/5 flex items-center justify-center shrink-0">
                       <Syringe className="w-6 h-6 text-white dark:text-zinc-900" />
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-white dark:text-zinc-900">Basic Metabolic Panel</h4>
                      <p className="text-sm text-zinc-300 dark:text-zinc-600 mt-0.5">Your last test is 14 months old.</p>
                    </div>
                 </div>
               </div>
            </div>
          )}
        </motion.div>

      </div>
      <BottomNav />
    </div>
  );
};

export default HealthProfile;
