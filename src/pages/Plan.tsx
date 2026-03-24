import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import ServiceModal from "@/components/ServiceModal";
import { Check } from "lucide-react";

const microHabits = [
  { emoji: "🥗", name: "Reduce sodium intake", streak: 5, done: false, triggerModal: false },
  { emoji: "😴", name: "Sleep by 10:30pm", streak: 3, done: false, triggerModal: false },
  { emoji: "🧘", name: "5-min breathing exercise", streak: 12, done: true, triggerModal: true },
  { emoji: "🚶", name: "Walk 8,000 steps", streak: 7, done: false, triggerModal: false },
  { emoji: "💧", name: "Drink 3L water", streak: 2, done: false, triggerModal: false },
];

const macroItems = [
  { name: "Quarterly blood test", date: "Apr 15", status: "Scheduled" },
  { name: "Cardiologist check-in", date: "Apr 28", status: "Recommended" },
  { name: "Dietitian session", date: "Mar 10", status: "Done" },
  { name: "Eye examination", date: "May 5", status: "Recommended" },
];

const statusColors: Record<string, string> = {
  Scheduled: "bg-primary/15 text-primary",
  Recommended: "bg-accent text-accent-foreground",
  Done: "bg-secondary/15 text-secondary",
};

const Plan = () => {
  const [tab, setTab] = useState<"micro" | "macro">("micro");
  const [habits, setHabits] = useState(microHabits);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleHabit = (index: number) => {
    const updated = [...habits];
    updated[index] = { ...updated[index], done: !updated[index].done };
    setHabits(updated);
    if (updated[index].triggerModal && updated[index].done) {
      setTimeout(() => setModalOpen(true), 400);
    }
  };

  return (
    <div className="min-h-screen max-w-[390px] mx-auto bg-background pb-24">
      <div className="px-5 pt-8">
        <h1 className="font-display text-2xl font-semibold text-foreground mb-5">Your Plan</h1>

        {/* Tab switcher */}
        <div className="flex bg-muted rounded-pill p-1 mb-6">
          {(["micro", "macro"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 text-sm font-semibold rounded-pill transition-all ${
                tab === t ? "bg-background text-foreground shadow-card" : "text-muted-foreground"
              }`}
            >
              {t === "micro" ? "This Week" : "This Quarter"}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === "micro" ? (
            <motion.div
              key="micro"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-3"
            >
              {habits.map((h, i) => (
                <motion.button
                  key={h.name}
                  onClick={() => toggleHabit(i)}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full flex items-center gap-3 p-4 rounded-card border-2 transition-all text-left ${
                    h.done ? "border-secondary/30 bg-secondary/5" : "border-border bg-card"
                  }`}
                >
                  <span className="text-2xl">{h.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold ${h.done ? "line-through text-muted-foreground" : "text-foreground"}`}>
                      {h.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{h.streak} day streak 🔥</p>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${
                      h.done ? "bg-secondary border-secondary" : "border-border"
                    }`}
                  >
                    {h.done && <Check size={14} className="text-secondary-foreground" />}
                  </div>
                </motion.button>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="macro"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-3"
            >
              {macroItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-3 p-4 rounded-card border-2 border-border bg-card"
                >
                  <div className="w-1 h-10 rounded-pill bg-primary/40" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-pill ${statusColors[item.status]}`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ServiceModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <BottomNav />
    </div>
  );
};

export default Plan;
