import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";
import { CreditCard, Gift, Users, ChevronRight, Stethoscope, Syringe, Camera, FileText, Activity, Edit2, Calendar } from "lucide-react";

const Account = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 pb-24 relative overflow-hidden">
       {/* Background Orbs */}
       <div className="absolute top-[20%] left-[-10%] w-[250px] h-[250px] bg-indigo-200/30 dark:bg-indigo-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="px-5 pt-12 relative z-10 max-w-[390px] mx-auto">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight mb-8">
          Account
        </h1>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4 px-1">Your profile</h3>
          
          <div className="bg-card bg-gradient-to-tr from-orange-100/60 to-transparent dark:from-orange-900/20 rounded-[24px] shadow-sm p-5 border border-border/50 relative overflow-hidden">
            <div className="flex items-center gap-5 mb-5">
              
              {/* Profile Image with Edit Button */}
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-2 border-white dark:border-zinc-800 overflow-hidden shadow-sm bg-orange-50">
                  <img 
                    src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-0 right-0 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center shadow-md border-2 border-white dark:border-zinc-900 transition-transform active:scale-95">
                  <Camera className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h4 className="text-xl font-semibold text-foreground tracking-tight">Debajyoti</h4>
                <div className="flex flex-col gap-0.5 mt-1">
                  <p className="text-[13px] text-muted-foreground font-medium">Male, 28</p>
                  <p className="text-[13px] text-muted-foreground font-medium">+91 9876543210</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full">
              <button 
                onClick={() => navigate("/edit-profile")}
                className="flex-1 bg-white/60 dark:bg-white/5 border border-border/50 text-foreground text-sm font-semibold py-3 rounded-full shadow-sm flex items-center justify-center gap-1.5 transition-transform active:scale-[0.98]">
                <Edit2 className="w-4 h-4" /> Edit Profile
              </button>
              <button 
                onClick={() => navigate("/family")}
                className="flex-1 bg-primary text-white border border-primary text-sm font-semibold py-3 rounded-full shadow-sm flex items-center justify-center gap-1.5 transition-transform active:scale-[0.98]">
                <Users className="w-4 h-4" /> View Family
              </button>
            </div>
          </div>
        </motion.div>

        {/* Settings List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-[24px] border border-white/80 dark:border-white/10 shadow-sm overflow-hidden"
        >
          <div className="divide-y divide-zinc-200 dark:divide-white/10">
            <button className="w-full flex items-center justify-between p-5 hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                 <FileText className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                 <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">Health reports</span>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-400" />
            </button>
            <button className="w-full flex items-center justify-between p-5 hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                 <Activity className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                 <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">Health logs</span>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-400" />
            </button>
            <button className="w-full flex items-center justify-between p-5 hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                 <Calendar className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                 <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">Bookings</span>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-400" />
            </button>
          </div>
        </motion.div>

      </div>
      <BottomNav />
    </div>
  );
};

export default Account;
