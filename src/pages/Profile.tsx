import BottomNav from "@/components/BottomNav";
import { motion } from "framer-motion";
import { User, Bell, Shield, HelpCircle, LogOut } from "lucide-react";

const menuItems = [
  { icon: User, label: "Personal Details" },
  { icon: Bell, label: "Notifications" },
  { icon: Shield, label: "Privacy & Data" },
  { icon: HelpCircle, label: "Help & Support" },
];

const Profile = () => {
  return (
    <div className="min-h-screen max-w-[390px] mx-auto bg-background pb-24">
      <div className="px-5 pt-8">
        <h1 className="font-display text-2xl font-semibold text-foreground mb-6">Profile</h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-3xl">
            🙋‍♂️
          </div>
          <div>
            <p className="font-semibold text-foreground">Rohan Mehta</p>
            <p className="text-sm text-muted-foreground">rohan@email.com</p>
          </div>
        </motion.div>

        <div className="space-y-2">
          {menuItems.map((item, i) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="w-full flex items-center gap-3 p-4 rounded-card bg-card border border-border text-left transition-transform active:scale-[0.98]"
            >
              <item.icon size={20} className="text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </motion.button>
          ))}
        </div>

        <button className="w-full flex items-center justify-center gap-2 mt-8 text-sm font-semibold text-destructive py-3">
          <LogOut size={16} />
          Sign Out
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
