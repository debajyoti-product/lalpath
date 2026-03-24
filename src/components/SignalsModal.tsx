import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";

interface SignalsModalProps {
  open: boolean;
  onClose: () => void;
}

const SignalsModal = ({ open, onClose }: SignalsModalProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-background rounded-t-[28px] p-6 pb-10 max-w-[390px] mx-auto shadow-card-lg"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="w-10 h-1 rounded-pill bg-border mx-auto absolute left-1/2 -translate-x-1/2 top-3" />
              <h3 className="font-display text-xl font-semibold text-foreground">
                Take Action
              </h3>
              <button onClick={onClose} className="text-muted-foreground">
                <X size={20} />
              </button>
            </div>

            {/* Breathing Session Card */}
            <button className="w-full bg-accent rounded-card p-4 shadow-card flex items-center gap-4 mb-4 text-left transition-transform active:scale-[0.98]">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-3xl shrink-0">
                🧘
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-foreground">5 min breathing session</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Calm your nervous system with guided breathing
                </p>
              </div>
              <span className="text-primary text-sm font-semibold">Start →</span>
            </button>

            {/* Doctor Booking Card */}
            <div className="bg-card rounded-card p-4 shadow-card flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-2xl shrink-0">
                🧠
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm text-foreground">Dr. Meera Sharma</p>
                <p className="text-xs text-muted-foreground">Stress & Sleep Specialist</p>
                <div className="flex items-center gap-1 mt-1">
                  <Star size={12} className="fill-primary text-primary" />
                  <span className="text-xs text-muted-foreground">4.9 · 30 min session</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-primary text-primary-foreground font-semibold text-sm py-3.5 rounded-pill transition-transform active:scale-95">
              Book Now
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SignalsModal;
