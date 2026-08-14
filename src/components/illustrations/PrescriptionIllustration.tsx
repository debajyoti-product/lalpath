import React from 'react';

export interface IllustrationProps {
  className?: string;
}

export const PrescriptionIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 96 96" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="pillGrad1" x1="16" y1="48" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(12, 76%, 61%)" />
          <stop offset="1" stopColor="hsl(12, 76%, 51%)" />
        </linearGradient>
        <linearGradient id="pillGrad2" x1="48" y1="48" x2="80" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(36, 33%, 97%)" />
          <stop offset="1" stopColor="hsl(28, 60%, 90%)" />
        </linearGradient>
      </defs>
      <g transform="rotate(-30 48 48)">
        <path d="M48 28 L34 28 C22.954 28 14 36.954 14 48 C14 59.046 22.954 68 34 68 L48 68 V28 Z" fill="url(#pillGrad1)" />
        <path d="M48 28 L62 28 C73.046 28 82 36.954 82 48 C82 59.046 73.046 68 62 68 L48 68 V28 Z" fill="url(#pillGrad2)" />
        <circle cx="28" cy="40" r="4" fill="hsl(36, 33%, 97%)" opacity="0.5" />
      </g>
    </svg>
  );
};

export default PrescriptionIllustration;
