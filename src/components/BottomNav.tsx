import { Home, Search, ClipboardList, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const tabs = [
  { icon: Home, label: "Home", path: "/home" },
  { icon: Search, label: "Search", path: "/search" },
  { icon: ClipboardList, label: "Bookings", path: "/bookings" },
  { icon: User, label: "Account", path: "/account" },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed left-0 right-0 z-50 flex justify-center px-4 pointer-events-none" style={{ bottom: 'max(24px, env(safe-area-inset-bottom))' }}>
      <nav className="w-full max-w-[358px] bg-white/90 dark:bg-zinc-900/90 backdrop-blur-3xl border border-white/50 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[20px] flex items-center justify-around py-1 px-1.5 pointer-events-auto">
        {tabs.map(({ icon: Icon, label, path }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="relative flex flex-col items-center justify-center py-1.5 flex-1 transition-all"
            >
              {active && (
                <motion.div
                  layoutId="bottom-nav-indicator"
                  className="absolute inset-0 bg-primary/10 dark:bg-primary/20 rounded-[16px]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <div className="relative z-10 flex flex-col items-center gap-0.5">
                <Icon
                  size={18}
                  className={active ? "text-primary" : "text-muted-foreground"}
                  strokeWidth={active ? 2.5 : 2}
                />
                <span className={`text-[10px] leading-tight ${active ? "font-bold text-primary" : "font-medium text-muted-foreground"}`}>
                  {label}
                </span>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default BottomNav;
