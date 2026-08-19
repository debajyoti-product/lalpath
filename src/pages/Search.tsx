import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Search as SearchIcon, Mic, X } from "lucide-react";
import { motion } from "framer-motion";
import BottomNav from "@/components/BottomNav";

const popularTests = [
  { name: "Complete blood count", params: 83, price: 599, mrp: 999 },
  { name: "Glucose fasting", params: 1, price: 99, mrp: 150 },
  { name: "HbA1c", params: 1, price: 299, mrp: 450 },
  { name: "Lipid profile", params: 8, price: 399, mrp: 750 },
];

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus search input on mount
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F7F5] dark:bg-zinc-950 flex justify-center">
      <div className="w-full max-w-[390px] flex flex-col relative overflow-hidden pb-24 min-h-screen">
        {/* Top Gradient */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-transparent dark:from-zinc-900 pointer-events-none z-0" />

        {/* Header */}
        <div className="sticky top-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border-b border-border/50 px-4 py-3 flex items-center gap-3">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 rounded-full hover:bg-muted active:scale-95 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        
        <div className="flex-1 relative flex items-center bg-muted/60 dark:bg-muted/40 rounded-xl px-3 py-2 border border-border/60 focus-within:border-primary/50 focus-within:bg-white dark:focus-within:bg-zinc-900 transition-all">
          <SearchIcon className="w-4 h-4 text-muted-foreground mr-2 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for tests, packages..."
            className="flex-1 bg-transparent text-[14px] focus:outline-none text-foreground placeholder:text-muted-foreground/70"
          />
          {query ? (
            <button onClick={() => setQuery("")} className="p-1 rounded-full hover:bg-muted ml-1">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          ) : (
            <button className="p-1 rounded-full hover:bg-muted ml-1 text-primary">
              <Mic className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-6 relative z-10">
        {/* Most Popular Tests */}
        {!query && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col"
          >
            <h2 className="text-[16px] font-bold text-foreground mb-4">Most popular tests</h2>
            
            <div className="flex flex-col gap-3 pb-4">
              {popularTests.map((test, index) => {
                const discount = Math.round(((test.mrp - test.price) / test.mrp) * 100);
                return (
                  <div 
                    key={index} 
                    onClick={() => navigate('/test/cbc')}
                    className="w-full bg-card rounded-2xl shadow-sm border border-border py-2.5 px-3.5 flex items-center justify-between cursor-pointer active:scale-[0.98] transition-transform"
                  >
                    <div className="flex flex-col pr-3">
                      <h3 className="font-bold text-[13.5px] leading-tight mb-0.5 text-foreground line-clamp-1">
                        {test.name}
                      </h3>
                      <p className="text-[11px] font-medium text-muted-foreground mb-1">
                        {test.params} Parameter{test.params > 1 ? 's' : ''}
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span className="font-extrabold text-[14px] text-foreground">₹{test.price}</span>
                        <span className="text-[11px] text-muted-foreground line-through font-medium">₹{test.mrp}</span>
                        <span className="text-[10px] font-bold text-[#34A853] whitespace-nowrap">
                          {discount}% OFF
                        </span>
                      </div>
                    </div>
                    
                    <button className="px-5 py-1.5 h-fit rounded-xl bg-primary/10 text-primary font-bold text-[12px] active:bg-primary/20 transition-colors shrink-0">
                      Book
                    </button>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Search Results Placeholder */}
        {query && (
          <div className="flex flex-col items-center justify-center py-12 opacity-50">
            <SearchIcon className="w-12 h-12 text-muted-foreground mb-3" />
            <p className="text-[14px] font-medium text-muted-foreground text-center">
              Searching for "{query}"...<br/>
              Results will appear here.
            </p>
          </div>
        )}
      </div>
      
      <BottomNav />
    </div>
  </div>
  );
};

export default Search;
