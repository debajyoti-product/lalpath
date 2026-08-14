import React from 'react';

export interface IllustrationProps {
  className?: string;
}

export const HealthIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 96 96" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="capGrad" x1="34" y1="12" x2="62" y2="24" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(12, 76%, 61%)" />
          <stop offset="1" stopColor="hsl(20, 80%, 55%)" />
        </linearGradient>
        <linearGradient id="bloodGrad" x1="36" y1="40" x2="60" y2="76" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(0, 75%, 50%)" />
          <stop offset="1" stopColor="hsl(350, 85%, 35%)" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="34" y1="20" x2="62" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(36, 33%, 95%)" stopOpacity="0.8" />
          <stop offset="1" stopColor="hsl(36, 33%, 85%)" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="highlight" x1="40" y1="20" x2="40" y2="70" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.7" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Back of glass */}
      <path d="M40 24 V74 C40 82 56 82 56 74 V24 Z" fill="url(#glassGrad)" />
      
      {/* Blood */}
      <path d="M42 45 V74 C42 79 54 79 54 74 V45 Q48 47 42 45 Z" fill="url(#bloodGrad)" />
      
      {/* Cap */}
      <rect x="38" y="14" width="20" height="12" rx="3" fill="url(#capGrad)" />
      <rect x="40" y="10" width="16" height="4" rx="1" fill="url(#capGrad)" />
      <rect x="36" y="24" width="24" height="3" rx="1" fill="#e5e5e5" /> {/* grey rubber rim */}
      
      {/* Front reflection */}
      <path d="M44 28 V70 C44 72 46 72 46 70 V28 Z" fill="url(#highlight)" />
    </svg>
  );
};

export default HealthIllustration;
