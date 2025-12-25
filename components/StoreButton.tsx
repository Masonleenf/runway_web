import React from 'react';
import { GooglePlayIcon } from './Icons';

interface StoreButtonProps {
  variant?: 'primary' | 'outline';
  href?: string;
}

export const StoreButton: React.FC<StoreButtonProps> = ({ variant = 'primary', href = '#' }) => {
  const baseClasses = "flex items-center gap-3 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105";
  const variants = {
    primary: "bg-brand-lime text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]",
    outline: "border border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm"
  };

  return (
    <a href={href} className={`${baseClasses} ${variants[variant]}`}>
      <GooglePlayIcon className="w-6 h-6" />
      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] uppercase font-semibold opacity-80 mb-1">Get it on</span>
        <span className="text-lg font-bold">Google Play</span>
      </div>
    </a>
  );
};