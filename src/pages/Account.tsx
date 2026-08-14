import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";
import { CreditCard, Gift, Users, ChevronRight, Stethoscope, Syringe } from "lucide-react";

const Account = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 pb-24 relative overflow-hidden">
       {/* Background Orbs */}
       <div className="absolute top-[20%] left-[-10%] w-[250px] h-[250px] bg-indigo-200/30 dark:bg-indigo-900/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="px-5 pt-12 relative z-10 max-w-[390px] mx-auto">
        <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight mb-8">
          Account
        </h1>

        {/* Credit Wallet */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100 mb-4 px-1">Your Wallet</h3>
          
          <div className="space-y-4">
            {/* Free Consult Card */}
            <div className="relative overflow-hidden rounded-[24px] group">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-amber-600" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
              <div className="relative p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Stethoscope className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-white/20 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                    1 Available
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">Free GP/SP Consult</h4>
                  <p className="text-sm text-amber-100">Valid for any specialist in network</p>
                </div>
              </div>
            </div>

            {/* 50% Test Discount Card */}
            <div className="relative overflow-hidden rounded-[24px] group">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600" />
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
              <div className="relative p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Syringe className="w-5 h-5 text-white" />
                  </div>
                  <span className="bg-white/20 text-white text-xs font-medium px-2.5 py-1 rounded-full backdrop-blur-sm">
                    Active
                  </span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-white mb-1">50% Off First Test</h4>
                  <p className="text-sm text-emerald-100">Applies automatically at checkout</p>
                </div>
              </div>
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
                 <CreditCard className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                 <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">Payment Methods</span>
              </div>
              <ChevronRight className="w-5 h-5 text-zinc-400" />
            </button>
            <button className="w-full flex items-center justify-between p-5 hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                 <Gift className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                 <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">Subscription Status</span>
              </div>
              <span className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                 Free <ChevronRight className="w-5 h-5" />
              </span>
            </button>
            <button className="w-full flex items-center justify-between p-5 hover:bg-white/40 dark:hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-3">
                 <Users className="w-5 h-5 text-zinc-500 dark:text-zinc-400" />
                 <span className="text-base font-medium text-zinc-900 dark:text-zinc-100">Refer a Friend</span>
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
