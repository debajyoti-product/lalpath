import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar as CalendarIcon } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip } from "recharts";

const historyData = [
  { date: "Jul 1", value: 92 },
  { date: "Jul 4", value: 94 },
  { date: "Jul 7", value: 93 },
  { date: "Jul 10", value: 95 },
  { date: "Jul 14", value: 95 },
];

const History = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 pb-24 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-[10%] right-[-10%] w-[300px] h-[300px] bg-amber-200/30 dark:bg-amber-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="px-5 pt-12 relative z-10 max-w-[390px] mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={() => navigate(-1)} 
            className="w-10 h-10 rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md border border-white/80 dark:border-white/10 flex items-center justify-center shadow-sm transition-transform active:scale-95"
          >
            <ArrowLeft className="w-5 h-5 text-zinc-900 dark:text-zinc-100" />
          </button>
          <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight">
            Fasting Blood Sugar
          </h1>
        </div>

        <div className="bg-white/60 dark:bg-white/5 backdrop-blur-md rounded-[24px] p-6 border border-white/80 dark:border-white/10 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">2-Week History</h2>
            <div className="flex items-center gap-1.5 text-zinc-500 bg-black/5 dark:bg-white/10 px-3 py-1.5 rounded-full">
              <CalendarIcon className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">Last 14 days</span>
            </div>
          </div>

          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={historyData} margin={{ top: 5, right: 10, bottom: 0, left: -25 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(150, 150, 150, 0.2)" />
                <XAxis dataKey="date" tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} dy={10} />
                <YAxis tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} domain={[85, 105]} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(val: number) => [`${val} mg/dL`, 'Blood Sugar']}
                  labelStyle={{ color: 'black', fontWeight: 'bold', marginBottom: '4px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#10b981" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: "#10b981", stroke: "white", strokeWidth: 2 }}
                  activeDot={{ r: 6, fill: "#10b981", stroke: "white", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-6 flex items-center justify-between p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl">
             <div>
                <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">Average</p>
                <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">93.8 <span className="text-sm font-medium">mg/dL</span></p>
             </div>
             <span className="px-3 py-1 bg-emerald-200 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-100 text-xs font-medium rounded-full">
                Optimal
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
