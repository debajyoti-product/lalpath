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
    <div className="fixed left-0 right-0 z-50 flex justify-center px-4 pointer-events-none" style={{ bottom: 'max(24px, env(safe-area-inset-bottom))' }}>
      <nav className="w-full max-w-[358px] bg-white/60 dark:bg-zinc-900/60 backdrop-blur-3xl border border-white/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[32px] flex items-center justify-around p-2 pointer-events-auto">
        {tabs.map(({ icon: Icon, label, path }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="relative flex flex-col items-center gap-1 py-2 px-1 transition-colors w-16"
            >
              {active && (
                <motion.div
                  layoutId="bottom-nav-indicator"
                  className="absolute inset-0 bg-primary/15 dark:bg-primary/20 rounded-[20px]"
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
      </nav>
    </div>
  );
};

export default BottomNav;
