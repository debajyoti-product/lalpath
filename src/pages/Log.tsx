import { useState } from "react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import { Search } from "lucide-react";

const moods = [
  { emoji: "😄", label: "Great" },
  { emoji: "🙂", label: "Good" },
  { emoji: "😐", label: "Okay" },
  { emoji: "😔", label: "Low" },
  { emoji: "😩", label: "Rough" },
];

const recentFoods = ["Dal & Rice", "Green Smoothie", "Oats Bowl"];

const Log = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen max-w-[390px] mx-auto bg-background pb-24">
      <div className="px-5 pt-8">
        <h1 className="font-display text-2xl font-semibold text-foreground mb-6">Daily Log</h1>

        {/* Mood */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-sm font-semibold text-foreground mb-3">How are you feeling?</p>
          <div className="flex gap-2 justify-between">
            {moods.map((m) => (
              <button
                key={m.label}
                onClick={() => setSelectedMood(m.label)}
                className={`flex-1 flex flex-col items-center gap-1.5 py-3 rounded-card border-2 transition-all ${
                  selectedMood === m.label
                    ? "border-primary bg-primary/10 scale-105"
                    : "border-border bg-card"
                }`}
              >
                <span className="text-2xl">{m.emoji}</span>
                <span className="text-[10px] font-medium text-muted-foreground">{m.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Food */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-sm font-semibold text-foreground mb-3">What did you eat?</p>

          <div className="relative mb-4">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search food..."
              className="w-full bg-card border-2 border-border rounded-pill py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {recentFoods.map((food) => (
              <button
                key={food}
                className="px-4 py-2 text-sm font-medium bg-accent text-accent-foreground rounded-pill border border-border transition-transform active:scale-95"
              >
                + {food}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-muted-foreground mt-12 italic"
        >
          Every log makes your health picture sharper.
        </motion.p>
      </div>

      <BottomNav />
    </div>
  );
};

export default Log;
