import { motion } from "framer-motion";
import HealthScore from "@/components/HealthScore";
import SparkLine from "@/components/SparkLine";
import BottomNav from "@/components/BottomNav";
import { Moon, Heart, Footprints } from "lucide-react";

const stats = [
  { icon: Moon, label: "Sleep", value: "6.2h", data: [6, 7, 5.5, 6.2, 7.1, 5.8, 6.2], color: "hsl(var(--secondary))" },
  { icon: Heart, label: "HRV", value: "42ms", data: [45, 42, 38, 44, 40, 39, 42], color: "hsl(var(--primary))" },
  { icon: Footprints, label: "Steps", value: "7.2k", data: [8000, 6500, 7200, 9100, 5400, 7800, 7200], color: "hsl(var(--forest))" },
];

const Home = () => {
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

        {/* Hero insight card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="rounded-card p-5 mb-6 shadow-card-lg"
          style={{ background: "linear-gradient(135deg, hsl(12 76% 61% / 0.9), hsl(20 80% 55%))" }}
        >
          <p className="text-primary-foreground/80 text-xs font-semibold uppercase tracking-wider mb-2">
            Weekly Insight
          </p>
          <p className="text-primary-foreground text-[15px] leading-relaxed font-medium mb-4">
            Your sleep quality dropped 22% this week. Your resting heart rate is trending up. This pattern usually signals stress buildup.
          </p>
          <button className="text-primary-foreground text-sm font-semibold underline underline-offset-4 decoration-primary-foreground/40">
            See what to do →
          </button>
        </motion.div>

        {/* Stat tiles */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.08 }}
              className="bg-card rounded-card p-3 shadow-card flex flex-col items-center gap-2"
            >
              <stat.icon size={18} className="text-muted-foreground" />
              <p className="text-lg font-bold text-foreground">{stat.value}</p>
              <p className="text-[10px] text-muted-foreground font-medium">{stat.label}</p>
              <SparkLine data={stat.data} color={stat.color} />
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;
