import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, User, Phone, Calendar, Ruler, Weight, Users, Plus, ChevronRight, Check } from "lucide-react";

const genderOptions = ["Male", "Female", "Other"];

const MaleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="10" cy="14" r="6" />
    <path d="M20 4l-6 6" />
    <path d="M14 4h6v6" />
  </svg>
);

const FemaleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="10" r="6" />
    <path d="M12 16v6" />
    <path d="M9 19h6" />
  </svg>
);

const familyMembers = [
  { name: "Rina D.", relation: "Mother", avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436191.jpg" },
  { name: "Arup D.", relation: "Father", avatar: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436178.jpg" },
];

const EditProfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("Debajyoti");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("+91 9876543210");
  const [dob, setDob] = useState("1998-03-15");
  const [height, setHeight] = useState("175");
  const [weight, setWeight] = useState("72");

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
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
          <h1 className="text-xl font-medium text-foreground tracking-tight">Edit Profile</h1>
        </div>

        <motion.div variants={stagger} initial="hidden" animate="show">
          {/* Avatar */}
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-28 h-28 rounded-full border-[3px] border-white dark:border-zinc-800 overflow-hidden shadow-lg bg-orange-50">
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-1 right-1 w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center shadow-lg border-[3px] border-white dark:border-zinc-900 transition-transform active:scale-95">
                <Camera className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Form Fields */}
          <div className="space-y-4 mb-8">
            {/* Name */}
            <motion.div variants={fadeUp} className="bg-card rounded-[20px] border border-border/50 shadow-sm p-4">
              <label className="flex items-center gap-2.5 text-[12px] text-muted-foreground font-medium uppercase tracking-wide mb-2">
                <User className="w-4 h-4" /> Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent text-[16px] font-medium text-foreground focus:outline-none placeholder:text-muted-foreground"
              />
            </motion.div>

            {/* Gender */}
            <motion.div variants={fadeUp} className="bg-card rounded-[20px] border border-border/50 shadow-sm p-4">
              <label className="flex items-center gap-2.5 text-[12px] text-muted-foreground font-medium uppercase tracking-wide mb-3">
                {gender === "Female" ? <FemaleIcon /> : <MaleIcon />} Gender
              </label>
              <div className="flex gap-2">
                {genderOptions.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGender(g)}
                    className={`flex-1 py-2.5 rounded-full text-[14px] font-medium transition-all ${
                      gender === g
                        ? "bg-primary text-white shadow-sm"
                        : "bg-muted/40 text-muted-foreground hover:bg-muted/60"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div variants={fadeUp} className="bg-card rounded-[20px] border border-border/50 shadow-sm p-4">
              <label className="flex items-center gap-2.5 text-[12px] text-muted-foreground font-medium uppercase tracking-wide mb-2">
                <Phone className="w-4 h-4" /> Phone Number
              </label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent text-[16px] font-medium text-foreground focus:outline-none placeholder:text-muted-foreground"
              />
            </motion.div>

            {/* DOB */}
            <motion.div variants={fadeUp} className="bg-card rounded-[20px] border border-border/50 shadow-sm p-4">
              <label className="flex items-center gap-2.5 text-[12px] text-muted-foreground font-medium uppercase tracking-wide mb-2">
                <Calendar className="w-4 h-4" /> Date of Birth
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full bg-transparent text-[16px] font-medium text-foreground focus:outline-none"
              />
            </motion.div>

            {/* Height & Weight side by side */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-3">
              <div className="bg-card rounded-[20px] border border-border/50 shadow-sm p-4">
                <label className="flex items-center gap-2.5 text-[12px] text-muted-foreground font-medium uppercase tracking-wide mb-2">
                  <Ruler className="w-4 h-4" /> Height
                </label>
                <div className="flex items-baseline gap-1">
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-transparent text-[16px] font-medium text-foreground focus:outline-none"
                  />
                  <span className="text-[13px] text-muted-foreground font-medium shrink-0">cm</span>
                </div>
              </div>
              <div className="bg-card rounded-[20px] border border-border/50 shadow-sm p-4">
                <label className="flex items-center gap-2.5 text-[12px] text-muted-foreground font-medium uppercase tracking-wide mb-2">
                  <Weight className="w-4 h-4" /> Weight
                </label>
                <div className="flex items-baseline gap-1">
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-transparent text-[16px] font-medium text-foreground focus:outline-none"
                  />
                  <span className="text-[13px] text-muted-foreground font-medium shrink-0">kg</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* View Family Section */}
          <motion.div variants={fadeUp} className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-4 px-1">View family</h3>
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

          {/* Save Button */}
          <motion.div variants={fadeUp}>
            <button className="w-full bg-primary text-white text-[15px] font-semibold py-4 rounded-full shadow-md shadow-primary/20 transition-transform active:scale-[0.98] flex items-center justify-center gap-2">
              <Check className="w-5 h-5" /> Save Changes
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default EditProfile;
