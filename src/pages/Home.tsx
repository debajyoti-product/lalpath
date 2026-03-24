import { useState } from "react";
import { motion } from "framer-motion";
import HealthScore from "@/components/HealthScore";
import BottomNav from "@/components/BottomNav";
import SignalsModal from "@/components/SignalsModal";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from "recharts";

const sleepData = [
  { day: "Mon", hours: 6.0 },
  { day: "Tue", hours: 7.0 },
  { day: "Wed", hours: 5.5 },
  { day: "Thu", hours: 6.2 },
  { day: "Fri", hours: 7.1 },
  { day: "Sat", hours: 5.8 },
  { day: "Sun", hours: 6.2 },
];

const hrData = [
  { day: "Mon", bpm: 72 },
  { day: "Tue", bpm: 68 },
  { day: "Wed", bpm: 75 },
  { day: "Thu", bpm: 70 },
  { day: "Fri", bpm: 74 },
  { day: "Sat", bpm: 69 },
  { day: "Sun", bpm: 71 },
];

const Home = () => {
  const [showSignals, setShowSignals] = useState(false);

  return (
    <div className="min-h-screen max-w-[390px] mx-auto bg-background pb-24">
      <div className="px-5 pt-8">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6"
        >
          <div>
            <p className="text-sm text-muted-foreground">Good morning,</p>
            <h1 className="font-display text-2xl font-semibold text-foreground">Rohan</h1>
          </div>
          <HealthScore score={72} />
        </motion.div>

        {/* Sleep Quality Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-card p-4 shadow-card mb-4"
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Sleep Quality</p>
          <p className="text-lg font-bold text-foreground mb-3">6.2h <span className="text-xs font-normal text-muted-foreground">avg this week</span></p>
          <div className="h-[120px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={sleepData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                <defs>
                  <linearGradient id="sleepGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <YAxis domain={[4, 8]} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <Area type="monotone" dataKey="hours" stroke="hsl(var(--secondary))" strokeWidth={2} fill="url(#sleepGrad)" dot={{ r: 3, fill: "hsl(var(--secondary))", strokeWidth: 0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Heart Rate Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-card p-4 shadow-card mb-5"
        >
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Resting Heart Rate</p>
          <p className="text-lg font-bold text-foreground mb-3">71 bpm <span className="text-xs font-normal text-muted-foreground">avg this week</span></p>
          <div className="h-[120px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={hrData} margin={{ top: 4, right: 4, bottom: 0, left: -20 }}>
                <defs>
                  <linearGradient id="hrGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity={0.02} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
                <XAxis dataKey="day" tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <YAxis domain={[60, 80]} tick={{ fontSize: 10, fill: "hsl(var(--muted-foreground))" }} axisLine={false} tickLine={false} />
                <Area type="monotone" dataKey="bpm" stroke="hsl(var(--primary))" strokeWidth={2} fill="url(#hrGrad)" dot={{ r: 3, fill: "hsl(var(--primary))", strokeWidth: 0 }} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Signals Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="rounded-card p-5 shadow-card-lg"
          style={{ background: "linear-gradient(135deg, hsl(12 76% 61% / 0.9), hsl(20 80% 55%))" }}
        >
          <p className="text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider mb-1">⚡ Signal Detected</p>
          <p className="text-primary-foreground text-xl font-display font-semibold mb-1">Stress buildup</p>
          <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
            Your sleep quality dropped 22% and resting heart rate is trending up this week.
          </p>
          <button
            onClick={() => setShowSignals(true)}
            className="w-full bg-primary-foreground text-primary font-semibold text-sm py-3 rounded-pill transition-transform active:scale-[0.97]"
          >
            Take Action →
          </button>
        </motion.div>
      </div>

      <SignalsModal open={showSignals} onClose={() => setShowSignals(false)} />
      <BottomNav />
    </div>
  );
};

export default Home;
