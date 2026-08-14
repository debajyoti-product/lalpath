import React from 'react';

export interface IllustrationProps {
  className?: string;
}

export const ChatIllustration: React.FC<IllustrationProps> = ({ className = '' }) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 96 96" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="chatGrad" x1="0" y1="0" x2="96" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(12, 76%, 61%)" />
          <stop offset="1" stopColor="hsl(12, 76%, 51%)" />
        </linearGradient>
        <linearGradient id="chatGrad2" x1="96" y1="96" x2="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(28, 60%, 90%)" />
          <stop offset="1" stopColor="hsl(36, 33%, 97%)" />
        </linearGradient>
      </defs>
      <path d="M78 48C78 64.5685 64.5685 78 48 78C42.8226 78 37.9525 76.6896 33.7275 74.4087L18 78L21.5913 62.2725C19.3104 58.0475 18 53.1774 18 48C18 31.4315 31.4315 18 48 18C64.5685 18 78 31.4315 78 48Z" fill="url(#chatGrad)"/>
      <circle cx="36" cy="48" r="4" fill="url(#chatGrad2)"/>
      <circle cx="48" cy="48" r="4" fill="url(#chatGrad2)"/>
      <circle cx="60" cy="48" r="4" fill="url(#chatGrad2)"/>
      <path d="M70 20 L72 26 L78 28 L72 30 L70 36 L68 30 L62 28 L68 26 Z" fill="url(#chatGrad2)"/>
    </svg>
  );
};

export default ChatIllustration;
