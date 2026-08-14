import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, Plus } from "lucide-react";

const familyMembers = [
  { name: "Rina D.", relation: "Mother", avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg" },
  { name: "Arup D.", relation: "Father", avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg" },
];

const Family = () => {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 pb-12 relative overflow-hidden">
      {/* Top gradient */}
      <div className="absolute top-0 left-0 right-0 h-56 bg-gradient-to-b from-orange-100/80 to-transparent dark:from-orange-900/30 pointer-events-none z-0" />

      <div className="px-5 pt-12 relative z-10 max-w-[390px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate("/account")}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm border border-border transition-transform active:scale-95 shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
          <h1 className="text-xl font-medium text-foreground tracking-tight">Family Members</h1>
        </div>

        <motion.div variants={fadeUp} initial="hidden" animate="show">
          <div className="bg-card rounded-[24px] border border-border/50 shadow-sm overflow-hidden">
            {/* Family member rows */}
            {familyMembers.map((member, i) => (
              <div
                key={i}
                className={`flex items-center gap-4 p-4 ${
                  i < familyMembers.length - 1 ? "border-b border-border/30" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden bg-orange-50 border-2 border-white dark:border-zinc-800 shadow-sm shrink-0">
                  <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <p className="text-[15px] font-semibold text-foreground">{member.name}</p>
                  <p className="text-[12px] text-muted-foreground font-medium">{member.relation}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />
              </div>
            ))}

            {/* Add member button */}
            <button className="w-full flex items-center gap-4 p-4 border-t border-border/30 hover:bg-muted/20 transition-colors">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-dashed border-primary/30 shrink-0">
                <Plus className="w-5 h-5 text-primary" />
              </div>
              <p className="text-[15px] font-semibold text-primary">Add family member</p>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Family;
