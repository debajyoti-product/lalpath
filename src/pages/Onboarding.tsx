import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Watch, Upload, FileText } from "lucide-react";

const devices = [
  { name: "boAt", icon: "⌚" },
  { name: "Noise", icon: "⌚" },
  { name: "Apple Watch", icon: "⌚" },
  { name: "Samsung", icon: "⌚" },
];

const sleepOptions = ["Great", "Okay", "Poor"];
const stressOptions = ["Low", "Moderate", "High"];
const checkupOptions = ["< 3 months", "3–6 months", "> 6 months"];

const Onboarding = () => {
  const [step, setStep] = useState(0);
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const navigate = useNavigate();

  const next = () => {
    if (step < 2) setStep(step + 1);
    else navigate("/home");
  };

  return (
    <div className="min-h-screen max-w-[390px] mx-auto flex flex-col"
      style={{ background: "linear-gradient(180deg, hsl(28 60% 92%) 0%, hsl(36 33% 97%) 100%)" }}
    >
      {/* Progress pills */}
      <div className="flex gap-2 px-6 pt-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-pill transition-colors duration-300 ${
              i <= step ? "bg-primary" : "bg-border"
            }`}
          />
        ))}
      </div>

      <div className="flex-1 px-6 pt-8 pb-6 flex flex-col">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="flex-1 flex flex-col"
            >
              <h1 className="font-display text-3xl font-semibold text-foreground leading-tight mb-2">
                Your health, finally making sense.
              </h1>
              <p className="text-sm text-muted-foreground mb-8">Connect your wearable to get started.</p>

              <div className="grid grid-cols-2 gap-3 mb-auto">
                {devices.map((d) => (
                  <button
                    key={d.name}
                    onClick={() => setSelectedDevice(d.name)}
                    className={`flex flex-col items-center gap-2 p-5 rounded-card border-2 transition-all ${
                      selectedDevice === d.name
                        ? "border-primary bg-accent shadow-card"
                        : "border-border bg-card"
                    }`}
                  >
                    <span className="text-3xl">{d.icon}</span>
                    <span className="text-sm font-medium text-foreground">{d.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="flex-1 flex flex-col"
            >
              <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                Upload your last blood report
              </h2>
              <p className="text-sm text-muted-foreground mb-8">We'll extract key markers automatically.</p>

              <div className="flex-1 flex items-center justify-center">
                <div className="w-full border-2 border-dashed border-primary/40 rounded-card p-10 flex flex-col items-center gap-3 bg-accent/50">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText size={24} className="text-primary" />
                  </div>
                  <p className="text-sm font-medium text-foreground">Tap to upload PDF</p>
                  <p className="text-xs text-muted-foreground">or drag & drop here</p>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              className="flex-1 flex flex-col"
            >
              <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                Quick health snapshot
              </h2>
              <p className="text-sm text-muted-foreground mb-6">Tap the option that best fits you.</p>

              <div className="space-y-5 mb-auto">
                <QuestionGroup label="Sleep quality" options={sleepOptions} />
                <QuestionGroup label="Stress level" options={stressOptions} />
                <QuestionGroup label="Last check-up" options={checkupOptions} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={next}
          className="w-full bg-primary text-primary-foreground font-semibold text-base py-4 rounded-pill mt-6 transition-transform active:scale-[0.97]"
        >
          {step < 2 ? "Continue →" : "Build My Health Profile →"}
        </button>
      </div>
    </div>
  );
};

const QuestionGroup = ({ label, options }: { label: string; options: string[] }) => {
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <div>
      <p className="text-sm font-semibold text-foreground mb-2">{label}</p>
      <div className="flex gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => setSelected(opt)}
            className={`flex-1 py-2.5 text-sm font-medium rounded-pill border-2 transition-all ${
              selected === opt
                ? "border-primary bg-primary/10 text-primary"
                : "border-border bg-card text-muted-foreground"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Onboarding;
