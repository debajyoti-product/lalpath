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
        <linearGradient id="healthGrad1" x1="48" y1="12" x2="48" y2="84" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(160, 30%, 28%)" />
          <stop offset="1" stopColor="hsl(160, 30%, 18%)" />
        </linearGradient>
        <linearGradient id="healthGrad2" x1="48" y1="40" x2="48" y2="84" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(160, 30%, 38%)" />
          <stop offset="1" stopColor="hsl(160, 30%, 28%)" />
        </linearGradient>
        <linearGradient id="healthGrad3" x1="20" y1="20" x2="76" y2="76" gradientUnits="userSpaceOnUse">
           <stop stopColor="hsl(36, 33%, 97%)" />
           <stop offset="1" stopColor="hsl(28, 60%, 90%)" />
        </linearGradient>
      </defs>
      {/* Beaker outline / liquid background */}
      <path d="M34 16 H62 V40 L76 68 C78 72 76 78 70 80 H26 C20 78 18 72 20 68 L34 40 V16 Z" fill="url(#healthGrad1)" />
      {/* Liquid */}
      <path d="M30 48 L66 48 L74 68 C75 70 74 74 70 76 H26 C22 74 21 70 22 68 L30 48 Z" fill="url(#healthGrad3)" />
      <circle cx="48" cy="64" r="6" fill="url(#healthGrad2)" />
      <circle cx="38" cy="70" r="3" fill="url(#healthGrad2)" />
      <circle cx="58" cy="58" r="4" fill="url(#healthGrad2)" />
    </svg>
  );
};

export default HealthIllustration;
