import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";

interface ServiceModalProps {
  open: boolean;
  onClose: () => void;
}

const ServiceModal = ({ open, onClose }: ServiceModalProps) => {
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
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-1 rounded-pill bg-border mx-auto absolute left-1/2 -translate-x-1/2 top-3" />
              <button onClick={onClose} className="ml-auto text-muted-foreground">
                <X size={20} />
              </button>
            </div>

            <h3 className="font-display text-xl font-semibold text-foreground mb-1">
              2 weeks of high stress detected
            </h3>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Based on your HRV and sleep data, a 30-min stress consult could help reset your baseline.
            </p>

            <div className="bg-card rounded-card p-4 shadow-card flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center text-2xl">
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

            <div className="flex gap-3">
              <button className="flex-1 bg-primary text-primary-foreground font-semibold text-sm py-3.5 rounded-pill transition-transform active:scale-95">
                Book Now
              </button>
              <button
                onClick={onClose}
                className="flex-1 border border-border text-foreground font-semibold text-sm py-3.5 rounded-pill transition-transform active:scale-95"
              >
                Remind me later
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
