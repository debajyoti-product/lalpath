import { Home, HeartPulse, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const ChatStarIcon = ({ size = 22, className = "", strokeWidth = 1.8 }: { size?: number, className?: string, strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93"/>
  </svg>
);

const tabs = [
  { icon: Home, label: "Home", path: "/home" },
  { icon: ChatStarIcon, label: "Chat", path: "/chat" },
  { icon: HeartPulse, label: "Health", path: "/profile" },
  { icon: User, label: "Account", path: "/account" },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-2xl border-t border-white/10 dark:border-white/5">
      <div className="max-w-[390px] mx-auto flex items-center justify-around py-3 pb-[env(safe-area-inset-bottom,16px)]">
        {tabs.map(({ icon: Icon, label, path }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="relative flex flex-col items-center gap-1 p-2 transition-colors w-16"
            >
              {active && (
                <motion.div
                  layoutId="bottom-nav-indicator"
                  className="absolute inset-0 bg-primary/10 rounded-xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <Icon 
                size={22} 
                className={`relative z-10 transition-colors ${active ? "text-primary" : "text-muted-foreground"}`} 
                strokeWidth={active ? 2.5 : 1.8} 
              />
              <span className={`text-[10px] font-medium relative z-10 transition-colors ${active ? "text-primary" : "text-muted-foreground"}`}>
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
