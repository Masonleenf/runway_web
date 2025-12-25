import React from 'react';

export const GooglePlayIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 512 512" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l220.7-221.3-58.9-58.9L47 499z" />
  </svg>
);

export const RunwayLogo: React.FC<{ className?: string }> = ({ className }) => (
  <div className={`font-black tracking-tighter flex items-center justify-center bg-brand-dark border border-brand-lime/20 rounded-xl ${className}`}>
    <span className="text-brand-lime italic">R</span>
  </div>
);