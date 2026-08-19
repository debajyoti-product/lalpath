import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Search, MapPin, Mic, MessageSquareText, Phone, ShoppingCart, Wallet, ChevronDown, User, Plus, Check, UploadCloud } from "lucide-react";

const bookedTests = [
  { name: "Complete blood count", params: 83, price: 599, mrp: 999 },
  { name: "Glucose fasting", params: 1, price: 99, mrp: 150 },
  { name: "HbA1c", params: 1, price: 299, mrp: 450 },
  { name: "Lipid profile", params: 8, price: 399, mrp: 750 },
];

const Home = () => {
  const navigate = useNavigate();
  const [selectedCondition, setSelectedCondition] = useState("Popular");
  const [showMemberDropdown, setShowMemberDropdown] = useState(false);
  const [showAddMemberDrawer, setShowAddMemberDrawer] = useState(false);
  const [selectedGender, setSelectedGender] = useState("Male");
  const [selectedRelation, setSelectedRelation] = useState("");
  const [showCallbackSheet, setShowCallbackSheet] = useState(false);
  const [exclusiveTab, setExclusiveTab] = useState("Women");

  const exclusiveTests = {
    Men: [
      { name: "PSA", image: "/man-crossed-arms.jpg", bg: "from-[#002147]/30 to-[#ffcc00]/20" },
      { name: "Hormone Panel", image: "/man-crossed-arms.jpg", bg: "from-[#ffcc00]/30 to-[#002147]/10" },
      { name: "Fertility", image: "/man-crossed-arms.jpg", bg: "from-[#002147]/20 to-[#4ECDC4]/20" }
    ],
    Women: [
      { name: "PCOS", image: "/woman-crossed-arms.jpg", bg: "from-[#002147]/20 to-[#4ECDC4]/20" },
      { name: "Fertility", image: "/woman-crossed-arms.jpg", bg: "from-[#ffcc00]/30 to-[#002147]/10" },
      { name: "Pregnancy", image: "/woman-pregnant.jpg", bg: "from-pink-200/80 to-[#ffcc00]/20" },
      { name: "Obstetrics", image: "/woman-pregnant.jpg", bg: "from-[#002147]/20 to-pink-200/60" },
      { name: "Menopause", image: "/woman-crossed-arms.jpg", bg: "from-purple-200/60 to-purple-50/20" }
    ],
    Kids: [],
    Elders: []
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 pb-24 relative overflow-hidden">
      {/* Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#ffcc00]/25 to-transparent pointer-events-none z-0" />
      
      <div className="px-5 pt-6 pb-6 relative z-10 max-w-[390px] mx-auto flex flex-col min-h-[calc(100vh-90px)]">
        {/* Header - Location & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 flex items-center justify-between text-foreground"
        >
          {/* Location */}
          <div className="flex items-center gap-2 flex-1 overflow-hidden pr-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-4 h-4 text-primary" />
            </div>
            <p className="text-[14px] font-semibold truncate underline decoration-dashed decoration-primary/40 underline-offset-[4px]">
              20, dr. nagen ghosh....
            </p>
          </div>
          
          {/* Icons */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative p-1.5 cursor-pointer active:scale-95 transition-transform">
              <Wallet className="w-[22px] h-[22px] text-foreground" />
            </div>
            <div className="relative p-1.5 cursor-pointer active:scale-95 transition-transform">
              <ShoppingCart className="w-[22px] h-[22px] text-foreground" />
              <span className="absolute top-0 right-0 bg-red-500 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#F9F7F5] dark:border-zinc-950">
                2
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="flex-1 flex flex-col"
        >
          {/* Value Proposition & Logo */}
          <motion.div variants={itemVariant} className="mb-4 w-full">
            <div className="p-[1.5px] rounded-2xl bg-gradient-to-r from-[#ffcc00]/60 via-[#ffcc00]/20 to-[#ffcc00]/60 shadow-sm">
              <div className="bg-card dark:bg-zinc-950 rounded-[calc(1rem-1.5px)] py-0.5 px-1 flex flex-col items-center justify-center w-full">
                
                {/* Minimized Logo */}
                <img 
                  src="/banner.png" 
                  alt="Dr Lal PathLabs" 
                  className="h-[86px] w-auto object-contain mix-blend-multiply opacity-90 -mt-7 -mb-7"
                />

                <div className="flex justify-between items-center w-full relative z-10">
                  <div className="flex flex-col items-center flex-1 text-center">
                    <span className="text-[15px] font-extrabold text-primary mb-0 tracking-tight">50mn+</span>
                    <span className="text-[9px] text-muted-foreground font-semibold leading-tight">Samples<br/>Processed</span>
                  </div>
                  <div className="w-[1.5px] h-6 bg-border/60 mx-1 self-center rounded-full" />
                  <div className="flex flex-col items-center flex-1 text-center">
                    <span className="text-[15px] font-extrabold text-primary mb-0 tracking-tight">50+</span>
                    <span className="text-[9px] text-muted-foreground font-semibold leading-tight">Quality<br/>Checks</span>
                  </div>
                  <div className="w-[1.5px] h-6 bg-border/60 mx-1 self-center rounded-full" />
                  <div className="flex flex-col items-center flex-1 text-center">
                    <span className="text-[15px] font-extrabold text-primary mb-0 tracking-tight">310+</span>
                    <span className="text-[9px] text-muted-foreground font-semibold leading-tight">Advanced<br/>Labs</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          {/* Action Options */}
          <motion.div variants={itemVariant} className="mb-6 flex flex-col">
            <h2 className="text-[16px] font-bold text-foreground mb-3">Book a test via</h2>
            <div className="grid grid-cols-2 gap-3">
              <div 
                onClick={() => navigate("/chat?query=consult_doctor")}
                className="flex flex-col items-center gap-1.5 cursor-pointer active:scale-95 transition-transform group"
              >
                <div className="w-[48px] h-[48px] rounded-full bg-[#ffcc00] text-primary flex items-center justify-center shadow-md shadow-[#ffcc00]/20 group-hover:bg-[#ffcc00]/90">
                  <MessageSquareText className="w-5 h-5 text-primary" />
                </div>
                <span className="text-[12px] font-semibold text-foreground">Chat support</span>
              </div>
              <div 
                onClick={() => setShowCallbackSheet(true)}
                className="flex flex-col items-center gap-1.5 cursor-pointer active:scale-95 transition-transform group"
              >
                <div className="w-[48px] h-[48px] rounded-full bg-[#ffcc00] text-primary flex items-center justify-center shadow-md shadow-[#ffcc00]/20 group-hover:bg-[#ffcc00]/90">
                  <Phone className="w-5 h-5 text-primary fill-primary/10" />
                </div>
                <span className="text-[12px] font-semibold text-foreground">Callback</span>
              </div>
            </div>
          </motion.div>

          {/* Explore tests */}
          <motion.div variants={itemVariant} className="mb-4 flex flex-col">
            <div className="flex items-center justify-between mb-3 relative z-20">
              <div 
                className="flex items-center gap-1 cursor-pointer select-none"
                onClick={() => setShowMemberDropdown(!showMemberDropdown)}
              >
                <h2 className="text-[16px] font-bold text-foreground">Explore tests for you</h2>
                <ChevronDown className={`w-4 h-4 text-primary transition-transform ${showMemberDropdown ? 'rotate-180' : ''}`} />
              </div>
              
              {/* Dropdown Menu */}
              {showMemberDropdown && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-2xl shadow-xl border border-border overflow-hidden z-50">
                  <div 
                    className="flex items-center gap-3 p-3 hover:bg-muted/50 cursor-pointer border-b border-border/50 transition-colors"
                    onClick={() => setShowMemberDropdown(false)}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-[14px] font-semibold text-foreground flex-1">Debajyoti Biswas</span>
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div 
                    className="flex items-center gap-3 p-3 hover:bg-muted/50 cursor-pointer transition-colors text-primary"
                    onClick={() => {
                      setShowMemberDropdown(false);
                      setShowAddMemberDrawer(true);
                    }}
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Plus className="w-4 h-4" />
                    </div>
                    <span className="text-[14px] font-semibold">Add member</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Condition Categories */}
            <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-hide -mr-5 pr-5 mb-2 snap-x">
              {[
                { name: "Popular", icon: "🧪" },
                { name: "Diabetes", icon: "🩸" },
                { name: "Allergy", icon: "🌿" },
                { name: "Fever", icon: "🤒" },
                { name: "Arthritis", icon: "🦴" },
                { name: "Heart", icon: "❤️" },
                { name: "Kidney", icon: "🫘" },
              ].map((c) => (
                <div 
                  key={c.name} 
                  onClick={() => setSelectedCondition(c.name)}
                  className={`flex items-center justify-center px-5 py-1.5 rounded-full cursor-pointer snap-start shrink-0 active:scale-95 transition-all duration-200 shadow-sm ${
                    selectedCondition === c.name 
                      ? 'border-[1.5px] border-primary bg-primary/5 shadow-md shadow-primary/10' 
                      : 'bg-white dark:bg-card border border-border/60'
                  }`}
                >
                  <span className={`text-[13px] font-semibold ${
                    selectedCondition === c.name ? 'text-primary' : 'text-foreground'
                  }`}>
                    {c.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Test Cards */}
            <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide -mr-5 pr-5">
              {bookedTests.map((test, index) => {
                const discount = Math.round(((test.mrp - test.price) / test.mrp) * 100);
                return (
                <div 
                  key={index} 
                  onClick={() => navigate('/test/cbc')}
                  className="min-w-[160px] max-w-[160px] bg-card rounded-[1.25rem] shadow-card border border-border p-3.5 flex flex-col snap-start shrink-0 cursor-pointer active:scale-[0.98] transition-transform justify-between"
                >
                  <div>
                    <h3 className="font-bold text-[14px] leading-[1.2] mb-1 line-clamp-2 min-h-[2.4em] text-foreground">
                      {test.name}
                    </h3>
                    <p className="text-[12px] font-medium text-muted-foreground mb-3">
                      {test.params} Parameter{test.params > 1 ? 's' : ''}
                    </p>
                  </div>
                  
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-extrabold text-[15px] text-foreground">₹{test.price}</span>
                      <span className="text-[12px] text-muted-foreground line-through font-medium">₹{test.mrp}</span>
                      <span className="text-[11px] font-bold text-[#34A853] ml-auto">
                        {discount}% OFF
                      </span>
                    </div>
                    <button className="-mx-1.5 w-[calc(100%+12px)] py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-[13px] active:scale-[0.98] transition-transform shadow-sm">
                      Book Now
                    </button>
                  </div>
                </div>
              )})}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-1.5 mt-1 mb-4">
              {[0, 1, 2].map((_, i) => (
                <div key={i} className={`h-1.5 rounded-full transition-all ${i === 0 ? 'w-4 bg-primary' : 'w-1.5 bg-border'}`} />
              ))}
            </div>
          </motion.div>

          {/* Swasthfit packages */}
          <motion.div variants={itemVariant} className="mb-2 flex flex-col">
            
            {/* Swasthfit Category Header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-baseline gap-1.5">
                <div className="flex items-baseline gap-[1px]">
                  <span className="text-[16px] font-extrabold italic text-primary tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>Swasth</span>
                  <span className="text-[16px] font-extrabold italic text-red-600 tracking-tight">fit</span>
                </div>
                <span className="text-[16px] font-bold text-foreground whitespace-nowrap">Full Body Packages</span>
              </div>
              <button className="text-[12px] font-bold text-primary active:opacity-70 shrink-0">
                View all
              </button>
            </div>

            {/* Horizontally Scrollable Package Cards */}
            <div className="flex overflow-x-auto gap-3 pb-4 snap-x snap-mandatory scrollbar-hide -mr-5 pr-5">
              {[
                { name: "Swasthfit Super 4", params: 84, price: "2,499", mrp: "3,200" },
                { name: "Swasthfit Super 2", params: 68, price: "1,899", mrp: "2,500" },
                { name: "Swasthfit Super 1", params: 42, price: "999", mrp: "1,500" },
                { name: "Swasthfit Super 3", params: 56, price: "1,599", mrp: "2,100" },
              ].map((pkg, i) => {
                const priceNum = parseInt(pkg.price.replace(',', ''));
                const mrpNum = parseInt(pkg.mrp.replace(',', ''));
                const discount = Math.round(((mrpNum - priceNum) / mrpNum) * 100);

                return (
                <div key={i} className="min-w-[190px] max-w-[190px] bg-card rounded-[1.25rem] shadow-sm border border-border/80 p-3 flex flex-col snap-start shrink-0 relative overflow-hidden">
                  
                  {/* Discount Tag */}
                  <div className="absolute top-0 right-0 bg-[#34A853] text-white text-[10px] font-bold px-2.5 py-1 rounded-bl-[10px] z-10 shadow-sm">
                    {discount}% OFF
                  </div>

                  <h3 className="font-bold text-[13px] text-foreground leading-tight mb-1 min-h-[2.6em] pr-10 relative z-0">
                    Swasthfit<br />{pkg.name.replace("Swasthfit ", "")}
                  </h3>
                  <p className="text-[11px] font-medium text-muted-foreground mb-2">
                    {pkg.params} Parameters
                  </p>
                  <div className="mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-extrabold text-[15px] text-foreground">₹{pkg.price}</span>
                      <span className="text-[11px] text-muted-foreground line-through font-medium">₹{pkg.mrp}</span>
                    </div>
                    <button className="w-full py-2 rounded-xl border-[1.5px] border-primary/30 text-primary font-bold text-[12px] active:bg-primary/5 transition-colors text-center">
                      View details
                    </button>
                  </div>
                </div>
              )})}
            </div>
          </motion.div>

          {/* Exclusive tests */}
          <motion.div variants={itemVariant} className="mb-4 flex flex-col">
            <h2 className="text-[16px] font-bold text-foreground mb-3">Exclusive tests</h2>
            
            {/* Filter Pills */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-4 -mr-5 pr-5">
              {Object.keys(exclusiveTests).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setExclusiveTab(cat)}
                  className={`px-4 py-1.5 rounded-full text-[13px] font-semibold whitespace-nowrap transition-colors ${
                    exclusiveTab === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground border border-border"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Test Cards Grid */}
            <div className="grid grid-cols-3 gap-x-3 gap-y-4 pb-4">
              {exclusiveTests[exclusiveTab as keyof typeof exclusiveTests].map((test, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className={`w-full aspect-square rounded-[1.25rem] bg-gradient-to-br ${test.bg} flex items-center justify-center p-0 overflow-hidden relative shadow-sm`}>
                    <img src={test.image} className="w-full h-full object-cover mix-blend-multiply opacity-90" alt={test.name} />
                  </div>
                  <h3 className="font-bold text-[12px] text-foreground leading-tight text-center px-0.5 line-clamp-2">{test.name}</h3>
                </div>
              ))}
              
              {exclusiveTests[exclusiveTab as keyof typeof exclusiveTests].length === 0 && (
                <div className="col-span-3 py-8 w-full text-center text-muted-foreground text-[13px]">
                  Coming soon...
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Add Member Bottom Drawer Overlay */}
      {showAddMemberDrawer && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-end max-w-[390px] mx-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowAddMemberDrawer(false)}
          />
          
          {/* Drawer Content */}
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full bg-card dark:bg-zinc-950 rounded-t-[2rem] shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="w-12 h-1.5 bg-border rounded-full mx-auto mt-3 mb-5" />
            
            <div className="px-6 pb-8">
              <h3 className="text-[20px] font-bold text-foreground mb-6">Add new member</h3>
              
              <div className="flex flex-col gap-5">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-foreground">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter full name" 
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                
                {/* Relation */}
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-foreground">Relation</label>
                  <div className="relative">
                    <select
                      value={selectedRelation}
                      onChange={(e) => setSelectedRelation(e.target.value)}
                      className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-primary/50 transition-colors text-foreground appearance-none pr-10 cursor-pointer"
                    >
                      <option value="" disabled>Select relation</option>
                      <option value="Father">Father</option>
                      <option value="Mother">Mother</option>
                      <option value="Wife">Wife</option>
                      <option value="Sister">Sister</option>
                      <option value="Child">Child</option>
                    </select>
                    <ChevronDown className="w-4 h-4 text-muted-foreground absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>

                {/* Gender */}
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-foreground">Gender</label>
                  <div className="flex gap-3">
                    <button 
                      type="button"
                      onClick={() => setSelectedGender("Male")}
                      className={`flex-1 py-3 px-4 rounded-xl border font-semibold text-[13px] transition-all flex items-center justify-center gap-2 ${
                        selectedGender === 'Male' 
                          ? 'bg-primary/10 border-primary text-primary shadow-sm' 
                          : 'bg-transparent border-border text-muted-foreground hover:bg-muted/50'
                      }`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="10" cy="14" r="5"/>
                        <path d="M19 5l-5.4 5.4"/>
                        <path d="M19 5h-5"/>
                        <path d="M19 5v5"/>
                      </svg>
                      Male
                    </button>
                    <button 
                      type="button"
                      onClick={() => setSelectedGender("Female")}
                      className={`flex-1 py-3 px-4 rounded-xl border font-semibold text-[13px] transition-all flex items-center justify-center gap-2 ${
                        selectedGender === 'Female' 
                          ? 'bg-primary/10 border-primary text-primary shadow-sm' 
                          : 'bg-transparent border-border text-muted-foreground hover:bg-muted/50'
                      }`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="9" r="5"/>
                        <path d="M12 14v7"/>
                        <path d="M9 18h6"/>
                      </svg>
                      Female
                    </button>
                  </div>
                </div>

                {/* DOB */}
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-foreground">Date of Birth</label>
                  <input 
                    type="date" 
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3.5 text-[15px] focus:outline-none focus:border-primary/50 transition-colors text-foreground"
                  />
                </div>
              </div>

              <button 
                onClick={() => setShowAddMemberDrawer(false)}
                className="w-full mt-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-[15px] active:scale-[0.98] transition-transform shadow-lg shadow-primary/20"
              >
                Add member
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Callback Sheet */}
      <AnimatePresence>
        {showCallbackSheet && (
          <div className="fixed inset-0 z-[100] flex flex-col justify-end max-w-[390px] mx-auto">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowCallbackSheet(false)}
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full bg-card dark:bg-zinc-950 rounded-t-[2rem] shadow-2xl overflow-hidden flex flex-col p-5 pb-8"
            >
              <div className="w-12 h-1.5 bg-border rounded-full mx-auto mt-[-4px] mb-5" />
              <h3 className="text-[18px] font-bold text-foreground mb-5">Request a Callback</h3>
              
              <div className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-foreground">Name</label>
                  <input 
                    type="text" 
                    value="Debajyoti Biswas"
                    readOnly
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3.5 text-[15px] focus:outline-none text-foreground font-medium"
                  />
                </div>
                
                {/* Phone */}
                <div className="flex flex-col gap-2">
                  <label className="text-[13px] font-semibold text-foreground">Phone Number</label>
                  <input 
                    type="text" 
                    value="+91 9876543210"
                    readOnly
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3.5 text-[15px] focus:outline-none text-foreground font-medium"
                  />
                </div>

                {/* Prescription Upload */}
                <div className="flex flex-col gap-2 mt-2">
                  <label className="text-[13px] font-semibold text-foreground">Upload Prescription (Optional)</label>
                  <div className="w-full border-2 border-dashed border-primary/40 bg-primary/5 rounded-xl p-4 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-primary/10 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <UploadCloud className="w-5 h-5" />
                    </div>
                    <span className="text-[13px] font-semibold text-primary">Tap to upload file</span>
                    <span className="text-[11px] text-muted-foreground">PDF, JPG or PNG (Max 5MB)</span>
                  </div>
                </div>

                <div className="bg-[#ffcc00]/10 border border-[#ffcc00]/30 rounded-xl p-3.5 mt-2 flex items-start gap-3">
                  <span className="text-xl leading-none">⏱️</span>
                  <p className="text-[13px] font-medium text-foreground leading-snug">
                    Get a callback from one of our experts in <strong className="font-bold text-amber-600 dark:text-amber-500">&lt;5 mins</strong>
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setShowCallbackSheet(false)}
                className="w-full mt-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-[15px] active:scale-[0.98] transition-transform shadow-lg shadow-primary/20"
              >
                Submit request
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <BottomNav />
    </div>
  );
};

export default Home;
