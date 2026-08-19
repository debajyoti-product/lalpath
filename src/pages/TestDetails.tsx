import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Droplet, Clock, FileText, ShieldCheck, 
  Info, User, ChevronRight, MapPin, CheckCircle2, Home as HomeIcon, Check
} from "lucide-react";

const parametersData = {
  "Red Blood Cells (RBC)": ["RBC Count", "Hemoglobin", "Hematocrit (PCV)", "MCV", "MCH", "MCHC", "RDW"],
  "White Blood Cells (WBC)": ["Total WBC", "Neutrophils", "Lymphocytes", "Monocytes", "Eosinophils", "Basophils"],
  "Platelets": ["Platelet Count", "Mean Platelet Volume (MPV)"]
};

const labsData = [
  { name: "Lalpath Labs - Sector 14", distance: "0.7 kms" },
  { name: "Lalpath Labs - MG Road", distance: "2.1 kms" },
  { name: "Lalpath Labs - Galleria", distance: "3.5 kms" }
];

const slotDates = [
  { day: "Today", date: "24" },
  { day: "Tom", date: "25" },
  { day: "Wed", date: "26" },
  { day: "Thu", date: "27" },
  { day: "Fri", date: "28" },
  { day: "Sat", date: "29" }
];

const timeSlots = [
  "06:00 AM - 07:00 AM", "07:00 AM - 08:00 AM", "08:00 AM - 09:00 AM",
  "09:00 AM - 10:00 AM", "10:00 AM - 11:00 AM", "11:00 AM - 12:00 PM",
  "12:00 PM - 01:00 PM", "01:00 PM - 02:00 PM"
];

export default function TestDetails() {
  const navigate = useNavigate();
  const [collectionMode, setCollectionMode] = useState<"home" | "lab">("home");
  const [showLabSheet, setShowLabSheet] = useState(false);
  const [showParamSheet, setShowParamSheet] = useState<string | null>(null);
  const [selectedLab, setSelectedLab] = useState(0);

  const [showPatientSheet, setShowPatientSheet] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState("Debajyoti Biswas");

  const [showDescSheet, setShowDescSheet] = useState(false);
  const [showInfoSheet, setShowInfoSheet] = useState(false);

  const [showSlotSheet, setShowSlotSheet] = useState(false);
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 pb-[100px] relative overflow-x-hidden">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 rounded-full hover:bg-muted active:scale-95 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-[16px] font-bold text-foreground">Complete Blood Count (CBC)</h1>
      </div>

      {/* Description */}
      <div className="px-5 pt-4 pb-4">
        <p className="text-[13px] font-medium text-muted-foreground line-clamp-2 inline">
          A comprehensive blood test that evaluates overall health and detects a wide range of disorders, including anemia and infection.
        </p>
        <span 
          onClick={() => setShowDescSheet(true)}
          className="text-[13px] font-bold text-primary ml-1 cursor-pointer active:opacity-70"
        >
          more
        </span>
      </div>

      <div className="px-4 flex flex-col gap-4">
        {/* Unified Info Card */}
        <div className="bg-card rounded-2xl shadow-sm border border-border flex flex-col">
          <div className="flex flex-col divide-y divide-border/50">
            {/* Sample */}
            <div className="flex items-center gap-3 p-3.5">
              <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center shrink-0">
                <Droplet className="w-4 h-4 text-red-500" />
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-0.5">Sample</p>
                <p className="text-[13px] font-bold text-foreground leading-tight">Blood & Urine</p>
              </div>
            </div>
            {/* Fasting */}
            <div className="flex items-center gap-3 p-3.5">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-blue-500" />
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-0.5">Fasting</p>
                <p className="text-[13px] font-bold text-foreground leading-tight">8-10 Hrs</p>
              </div>
            </div>
            {/* Report */}
            <div className="flex items-center gap-3 p-3.5">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center shrink-0">
                <FileText className="w-4 h-4 text-green-500" />
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-0.5">Report</p>
                <p className="text-[13px] font-bold text-foreground leading-tight">24 Hrs</p>
              </div>
            </div>
            {/* Gender */}
            <div className="flex items-center gap-3 p-3.5">
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center shrink-0">
                <User className="w-4 h-4 text-purple-500" />
              </div>
              <div className="flex flex-col flex-1">
                <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-0.5">Gender</p>
                <p className="text-[13px] font-bold text-foreground leading-tight">Male, Female</p>
              </div>
            </div>
          </div>
          
          {/* Additional Information Bar */}
          <div 
            className="border-t border-border/50 p-3.5 flex items-center justify-between cursor-pointer hover:bg-muted/30 active:bg-muted/50 transition-colors rounded-b-2xl bg-muted/10"
            onClick={() => setShowInfoSheet(true)}
          >
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-primary" />
              <span className="text-[13px] font-bold text-foreground">Additional information</span>
            </div>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        {/* Patient Selection */}
        <div 
          className="bg-card rounded-2xl shadow-sm border border-border p-3.5 flex items-center justify-between cursor-pointer active:scale-[0.99] transition-all"
          onClick={() => setShowPatientSheet(true)}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <User className="w-4.5 h-4.5 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-0.5">Patient Details</span>
              <span className="font-bold text-[13.5px] text-foreground leading-tight">{selectedPatient}</span>
              <span className="text-[11px] font-medium text-muted-foreground">Self • Male • 28 Yrs</span>
            </div>
          </div>
          <span className="text-[12px] font-bold text-primary px-3 py-1.5 rounded-lg bg-primary/10 shrink-0">Change</span>
        </div>

        {/* Collection Mode */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-4">
          <h3 className="font-bold text-[15px] text-foreground mb-3">Collection Mode</h3>
          <div className="flex flex-col gap-3">
            {/* Home Collection Checkbox */}
            <div 
              className={`flex flex-col p-3.5 rounded-xl border cursor-pointer transition-all ${collectionMode === 'home' ? 'border-[#ffcc00] bg-[#ffcc00]/10 shadow-sm' : 'border-border bg-card hover:bg-muted/30'}`}
              onClick={() => setCollectionMode('home')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${collectionMode === 'home' ? 'bg-[#ffcc00]/30 text-amber-600 dark:text-amber-500' : 'bg-muted text-muted-foreground'}`}>
                    <HomeIcon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[14px] text-foreground">Home Collection</span>
                    <span className="text-[12px] font-medium text-muted-foreground leading-tight">Free sample collection by our trained phlebotomists.</span>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-[6px] shrink-0 border-2 flex items-center justify-center ${collectionMode === 'home' ? 'border-primary bg-primary' : 'border-muted-foreground/30'}`}>
                  {collectionMode === 'home' && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                </div>
              </div>

              {collectionMode === 'home' && (
                <div className="mt-3 pt-3 border-t border-amber-500/20 flex items-center justify-between group">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-0.5">Selected Address</span>
                    <span className="font-bold text-[13px] text-foreground">Block A, Sector 14</span>
                    <span className="text-[12px] font-medium text-muted-foreground">Gurgaon, Haryana</span>
                  </div>
                  <span className="text-[12px] font-bold text-amber-600 dark:text-amber-500 px-3 py-1.5 rounded-lg bg-[#ffcc00]/20 group-active:scale-95 transition-transform shrink-0">Edit</span>
                </div>
              )}
            </div>

            {/* Lab Visit Checkbox */}
            <div 
              className={`flex flex-col p-3.5 rounded-xl border cursor-pointer transition-all ${collectionMode === 'lab' ? 'border-[#ffcc00] bg-[#ffcc00]/10 shadow-sm' : 'border-border bg-card hover:bg-muted/30'}`}
              onClick={() => setCollectionMode('lab')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${collectionMode === 'lab' ? 'bg-[#ffcc00]/30 text-amber-600 dark:text-amber-500' : 'bg-muted text-muted-foreground'}`}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-[14px] text-foreground">Lab Visit</span>
                    <span className="text-[12px] font-medium text-muted-foreground leading-tight">Visit your nearest Lalpath Lab center.</span>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-[6px] shrink-0 border-2 flex items-center justify-center ${collectionMode === 'lab' ? 'border-primary bg-primary' : 'border-muted-foreground/30'}`}>
                  {collectionMode === 'lab' && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                </div>
              </div>
              
              {collectionMode === 'lab' && (
                <div 
                  className="mt-3 pt-3 border-t border-amber-500/20 flex items-center justify-between group"
                  onClick={(e) => { e.stopPropagation(); setShowLabSheet(true); }}
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground mb-0.5">Selected Lab</span>
                    <span className="font-bold text-[13px] text-foreground">{labsData[selectedLab].name}</span>
                    <span className="text-[12px] font-bold text-amber-600 dark:text-amber-500">{labsData[selectedLab].distance} away</span>
                  </div>
                  <span className="text-[12px] font-bold text-amber-600 dark:text-amber-500 px-3 py-1.5 rounded-lg bg-[#ffcc00]/20 group-active:scale-95 transition-transform shrink-0">Change</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Parameters */}
        <div className="bg-card rounded-2xl shadow-sm border border-border p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-bold text-[15px] text-foreground">Test Parameters</h3>
            <span className="text-[12px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">26</span>
          </div>
          
          <div className="flex flex-col border border-border rounded-xl overflow-hidden divide-y divide-border/50">
            {Object.keys(parametersData).map(cat => (
              <div 
                key={cat} 
                onClick={() => setShowParamSheet(cat)} 
                className="flex items-center justify-between p-3.5 bg-card hover:bg-muted/30 cursor-pointer active:bg-muted/50 transition-colors"
              >
                <span className="font-bold text-[13px] text-foreground">{cat}</span>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold text-muted-foreground bg-muted px-2.5 py-1 rounded-md">
                    {parametersData[cat as keyof typeof parametersData].length}
                  </span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-4">
          <h3 className="font-bold text-[15px] text-foreground mb-3 px-1">How it works</h3>
          <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mr-5 pr-5">
            {[
              { img: '/book.png', title: 'Book a test', desc: 'from the app' },
              { img: '/phlebo.png', title: 'Phlebotomist', desc: 'collects the sample' },
              { img: '/lab.png', title: 'Experts analyze', desc: 'the sample securely' },
              { img: '/report.png', title: 'Report generated', desc: 'after 24 hours' }
            ].map((step, i) => (
              <div key={i} className="min-w-[120px] max-w-[120px] snap-start shrink-0 flex flex-col gap-2">
                <div className="w-full aspect-square rounded-[1.25rem] bg-card border border-border shadow-sm relative overflow-hidden flex items-center justify-center p-1">
                  <div className="absolute top-1.5 left-1.5 w-5 h-5 rounded-full bg-primary text-white text-[11px] font-bold flex items-center justify-center z-10 shadow-sm">{i + 1}</div>
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="px-0.5 text-center">
                  <p className="text-[12px] font-bold text-foreground leading-tight">{step.title}</p>
                  <p className="text-[10px] font-medium text-muted-foreground leading-tight mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NABL Badge */}
        <div className="flex items-center justify-center gap-2 py-2 mb-4 opacity-80">
          <ShieldCheck className="w-5 h-5 text-green-600" />
          <span className="text-[13px] font-bold text-foreground">NABL Accredited Laboratory</span>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 w-full max-w-[390px] mx-auto bg-card border-t border-border py-3 px-4 pb-4 flex items-center justify-between z-40 shadow-[0_-8px_30px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="font-extrabold text-[18px] text-foreground leading-none">₹599</span>
            <span className="text-[12px] text-muted-foreground line-through font-medium">₹999</span>
          </div>
          <span className="text-[11px] font-bold text-[#34A853] uppercase tracking-wide">40% OFF</span>
        </div>
        <button 
          onClick={() => setShowSlotSheet(true)}
          className="bg-primary text-primary-foreground font-bold text-[14px] py-2.5 px-8 rounded-xl active:scale-95 transition-transform shadow-lg shadow-primary/20"
        >
          Select slot
        </button>
      </div>

      {/* Slot Selection Sheet */}
      <AnimatePresence>
        {showSlotSheet && (
          <div className="fixed inset-0 z-[100] flex flex-col justify-end max-w-[390px] mx-auto">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowSlotSheet(false)}
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full bg-card dark:bg-zinc-950 rounded-t-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
            >
              <div className="w-12 h-1.5 bg-border rounded-full mx-auto mt-3 mb-4" />
              <div className="px-5 pb-6 flex-1 overflow-y-auto">
                <h3 className="text-[18px] font-bold text-foreground mb-5">Select slot for test booking</h3>
                
                {/* Dates Row */}
                <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1 -mr-5 pr-5 mb-5">
                  {slotDates.map((d, i) => (
                    <div 
                      key={i}
                      onClick={() => setSelectedDateIndex(i)}
                      className={`min-w-[65px] flex flex-col items-center justify-center p-2.5 rounded-xl border cursor-pointer transition-all ${
                        selectedDateIndex === i ? 'border-primary bg-primary/10 shadow-sm' : 'border-border bg-card hover:bg-muted/50'
                      }`}
                    >
                      <span className={`text-[11px] font-bold uppercase tracking-wide mb-1 ${selectedDateIndex === i ? 'text-primary' : 'text-muted-foreground'}`}>{d.day}</span>
                      <span className={`text-[18px] font-extrabold leading-none ${selectedDateIndex === i ? 'text-primary' : 'text-foreground'}`}>{d.date}</span>
                    </div>
                  ))}
                </div>

                <div className="w-full h-[1px] bg-border/50 mb-5" />

                {/* Time Slots Grid */}
                <h4 className="text-[14px] font-bold text-foreground mb-3">Available Time Slots</h4>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {timeSlots.map((time, i) => (
                    <div
                      key={i}
                      onClick={() => setSelectedTimeSlot(time)}
                      className={`py-2.5 px-2 text-center rounded-xl border cursor-pointer transition-all ${
                        selectedTimeSlot === time ? 'border-primary bg-primary/10 text-primary font-bold shadow-sm' : 'border-border bg-card hover:bg-muted/50 text-muted-foreground font-semibold'
                      }`}
                    >
                      <span className="text-[12px]">{time}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => setShowSlotSheet(false)}
                  className={`w-full font-bold text-[15px] py-3.5 rounded-xl transition-all shadow-lg ${
                    selectedTimeSlot ? 'bg-primary text-primary-foreground active:scale-95 shadow-primary/20' : 'bg-muted text-muted-foreground opacity-70 cursor-not-allowed'
                  }`}
                >
                  Confirm slot
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lab List Bottom Sheet */}
      <AnimatePresence>
        {showLabSheet && (
          <div className="fixed inset-0 z-[100] flex flex-col justify-end max-w-[390px] mx-auto">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowLabSheet(false)}
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full bg-card dark:bg-zinc-950 rounded-t-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
            >
              <div className="w-12 h-1.5 bg-border rounded-full mx-auto mt-3 mb-5" />
              <div className="px-5 pb-8 flex-1 overflow-y-auto">
                <h3 className="text-[18px] font-bold text-foreground mb-1">Select Nearest Lab</h3>
                <p className="text-[12px] font-medium text-muted-foreground mb-5">Sorted by ascending distance from your location</p>
                
                <div className="flex flex-col gap-3">
                  {labsData.map((lab, i) => (
                    <div 
                      key={i}
                      onClick={() => { setSelectedLab(i); setShowLabSheet(false); }}
                      className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                        selectedLab === i ? 'border-primary bg-primary/5' : 'border-border bg-card hover:bg-muted/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedLab === i ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-[14px] text-foreground">{lab.name}</span>
                          <span className="text-[12px] font-semibold text-primary">{lab.distance} away</span>
                        </div>
                      </div>
                      {selectedLab === i && <CheckCircle2 className="w-5 h-5 text-primary" />}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Parameters Bottom Sheet */}
      <AnimatePresence>
        {showParamSheet && (
          <div className="fixed inset-0 z-[100] flex flex-col justify-end max-w-[390px] mx-auto">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowParamSheet(null)}
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full bg-card dark:bg-zinc-950 rounded-t-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[70vh]"
            >
              <div className="w-12 h-1.5 bg-border rounded-full mx-auto mt-3 mb-5" />
              <div className="px-5 pb-8 flex-1 overflow-y-auto">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-[18px] font-bold text-foreground">{showParamSheet}</h3>
                  <span className="text-[12px] font-bold text-primary bg-primary/10 px-2 py-1 rounded-md">
                    {parametersData[showParamSheet as keyof typeof parametersData].length} Params
                  </span>
                </div>
                
                <div className="flex flex-col border border-border rounded-xl divide-y divide-border/50">
                  {parametersData[showParamSheet as keyof typeof parametersData].map((p, i) => (
                    <div key={i} className="p-3.5 flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-[14px] font-medium text-foreground">{p}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  onClick={() => setShowParamSheet(null)}
                  className="w-full mt-6 bg-muted text-foreground font-bold text-[14px] py-3.5 rounded-xl active:bg-muted/80 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Patient Sheet (Mock) */}
      <AnimatePresence>
        {showPatientSheet && (
          <div className="fixed inset-0 z-[100] flex flex-col justify-end max-w-[390px] mx-auto">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowPatientSheet(false)}
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full bg-card dark:bg-zinc-950 rounded-t-[2rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="w-12 h-1.5 bg-border rounded-full mx-auto mt-3 mb-5" />
              <div className="px-5 pb-8">
                <h3 className="text-[18px] font-bold text-foreground mb-4">Select Member</h3>
                
                <div className="flex flex-col gap-3">
                  {['Debajyoti Biswas', 'Sanjana Biswas (Wife)', 'Rahul Biswas (Son)'].map((p, i) => (
                    <div 
                      key={i}
                      onClick={() => { setSelectedPatient(p.split(' ')[0] + ' ' + p.split(' ')[1]); setShowPatientSheet(false); }}
                      className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer ${
                        selectedPatient.includes(p.split(' ')[0]) ? 'border-primary bg-primary/5' : 'border-border bg-card'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <User className={`w-5 h-5 ${selectedPatient.includes(p.split(' ')[0]) ? 'text-primary' : 'text-muted-foreground'}`} />
                        <span className="font-bold text-[14px] text-foreground">{p}</span>
                      </div>
                      {selectedPatient.includes(p.split(' ')[0]) && <CheckCircle2 className="w-5 h-5 text-primary" />}
                    </div>
                  ))}
                  <button className="flex items-center justify-center gap-2 p-3.5 rounded-xl border border-dashed border-primary/50 text-primary font-bold text-[14px] mt-2">
                    + Add New Member
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Description Sheet */}
      <AnimatePresence>
        {showDescSheet && (
          <div className="fixed inset-0 z-[100] flex flex-col justify-end max-w-[390px] mx-auto">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowDescSheet(false)}
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full bg-card dark:bg-zinc-950 rounded-t-[2rem] shadow-2xl overflow-hidden flex flex-col p-5 pb-8"
            >
              <div className="w-12 h-1.5 bg-border rounded-full mx-auto mt-[-4px] mb-5" />
              <h3 className="text-[18px] font-bold text-foreground mb-3">About Test</h3>
              <p className="text-[14px] text-muted-foreground font-medium leading-relaxed mb-6">
                A comprehensive blood test that evaluates overall health and detects a wide range of disorders, including anemia and infection. It measures various components of blood including Red Blood Cells, White Blood Cells, and Platelets to give a complete picture of your health status.
              </p>
              <button 
                onClick={() => setShowDescSheet(false)}
                className="w-full bg-muted text-foreground font-bold text-[14px] py-3.5 rounded-xl active:bg-muted/80 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Additional Info Sheet */}
      <AnimatePresence>
        {showInfoSheet && (
          <div className="fixed inset-0 z-[100] flex flex-col justify-end max-w-[390px] mx-auto">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setShowInfoSheet(false)}
            />
            <motion.div 
              initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full bg-card dark:bg-zinc-950 rounded-t-[2rem] shadow-2xl overflow-hidden flex flex-col p-5 pb-8"
            >
              <div className="w-12 h-1.5 bg-border rounded-full mx-auto mt-[-4px] mb-5" />
              <h3 className="text-[18px] font-bold text-foreground mb-4">Preparation & Requirements</h3>
              
              <div className="bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 p-4 rounded-xl flex gap-3 shadow-sm mb-6">
                <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div className="flex flex-col gap-2">
                  <p className="text-[13px] text-amber-800 dark:text-amber-200 font-medium leading-snug">
                    <strong className="font-bold">Fasting Rules:</strong> Please fast for 8-10 hours before the test. Water is allowed.
                  </p>
                  <p className="text-[13px] text-amber-800 dark:text-amber-200 font-medium leading-snug">
                    <strong className="font-bold">Dietary Restrictions:</strong> Avoid alcohol or smoking for 24 hours prior to the sample collection.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setShowInfoSheet(false)}
                className="w-full bg-muted text-foreground font-bold text-[14px] py-3.5 rounded-xl active:bg-muted/80 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
