import React from 'react';

export interface IllustrationProps {
  className?: string;
}

export const ConsultIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 96 96" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="consultGrad1" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(12, 76%, 61%)" />
          <stop offset="1" stopColor="hsl(12, 76%, 51%)" />
        </linearGradient>
        <linearGradient id="consultGrad2" x1="96" y1="0" x2="0" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(160, 30%, 28%)" />
          <stop offset="1" stopColor="hsl(160, 30%, 18%)" />
        </linearGradient>
      </defs>
      {/* Stethoscope tubes */}
      <path d="M28 20 C28 44 28 64 48 64 C68 64 68 44 68 20" stroke="url(#consultGrad1)" strokeWidth="6" strokeLinecap="round" />
      {/* Y-junction */}
      <path d="M48 64 L48 80" stroke="url(#consultGrad1)" strokeWidth="6" strokeLinecap="round" />
      {/* Chest piece */}
      <circle cx="48" cy="82" r="10" fill="url(#consultGrad2)" />
      <circle cx="48" cy="82" r="5" fill="hsl(36, 33%, 97%)" opacity="0.8" />
      {/* Ear pieces */}
      <circle cx="28" cy="18" r="6" fill="url(#consultGrad2)" />
      <circle cx="68" cy="18" r="6" fill="url(#consultGrad2)" />
    </svg>
  );
};

export default ConsultIllustration;
