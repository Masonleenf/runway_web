import React from 'react';
import { MapPin, Navigation, BarChart3, Share2 } from 'lucide-react';

interface PhoneMockupProps {
  type: 'map' | 'stats' | 'splash';
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ type }) => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-900 border-[8px] rounded-[2.5rem] h-[500px] w-[280px] shadow-2xl flex flex-col overflow-hidden">
      {/* Notch */}
      <div className="w-[100px] h-[20px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute z-20"></div>
      
      {/* Content Area */}
      <div className="flex-1 bg-brand-black relative text-white font-sans overflow-hidden">
        
        {/* === TYPE: MAP / COURSE === */}
        {type === 'map' && (
          <>
            {/* Fake Map Background */}
            <div className="absolute inset-0 bg-[#1e2229] opacity-100">
               {/* Roads */}
               <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M10,0 Q30,50 10,100" stroke="#333" strokeWidth="2" fill="none" />
                  <path d="M40,0 Q60,50 40,100" stroke="#333" strokeWidth="2" fill="none" />
                  <path d="M80,0 Q50,50 90,100" stroke="#333" strokeWidth="2" fill="none" />
                  <path d="M0,30 Q50,40 100,20" stroke="#444" strokeWidth="1" fill="none" />
                  <path d="M0,70 Q50,60 100,80" stroke="#444" strokeWidth="1" fill="none" />
               </svg>
               {/* The Run Path (Green) */}
               <svg className="absolute inset-0 w-full h-full drop-shadow-[0_0_10px_rgba(204,255,0,0.6)]" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M50,80 L55,60 L45,40 L60,20" stroke="#ccff00" strokeWidth="4" fill="none" strokeLinecap="round" />
               </svg>
               {/* Markers */}
               <div className="absolute top-[20%] left-[60%] text-brand-lime transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-4 h-4 bg-brand-lime rounded-full animate-ping absolute opacity-75"></div>
                  <div className="w-4 h-4 bg-brand-lime rounded-full border-2 border-black"></div>
               </div>
               <div className="absolute top-[80%] left-[50%] text-red-500 transform -translate-x-1/2 -translate-y-1/2">
                 <MapPin size={24} fill="#ef4444" />
               </div>
            </div>

            {/* Bottom Card UI */}
            <div className="absolute bottom-0 w-full bg-[#121212] rounded-t-3xl p-5 border-t border-white/10">
              <h3 className="text-lg font-bold mb-4">Han River Park Run</h3>
              <div className="flex justify-between items-center mb-6">
                 <div className="text-center">
                    <div className="text-xs text-gray-400">Distance</div>
                    <div className="text-xl font-bold text-white">8.2<span className="text-sm font-normal">km</span></div>
                 </div>
                 <div className="text-center">
                    <div className="text-xs text-gray-400">Pace</div>
                    <div className="text-xl font-bold text-white">5'30"</div>
                 </div>
                 <div className="text-center">
                    <div className="text-xs text-gray-400">Difficulty</div>
                    <div className="text-xl font-bold text-brand-lime">Easy</div>
                 </div>
              </div>
              <button className="w-full bg-brand-lime text-black font-bold py-3 rounded-full flex items-center justify-center gap-2">
                 <Navigation size={18} />
                 Start Course
              </button>
            </div>
          </>
        )}

        {/* === TYPE: STATS === */}
        {type === 'stats' && (
          <div className="p-6 flex flex-col h-full">
            <div className="mt-8 mb-6">
              <h2 className="text-2xl font-bold text-white">Statistics</h2>
              <p className="text-gray-400 text-sm">Weekly Activity</p>
            </div>

            {/* Big Stat */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 mb-4 border border-white/5">
               <div className="flex items-end gap-2">
                 <span className="text-4xl font-bold text-white">12.4</span>
                 <span className="text-brand-lime font-bold mb-2">km</span>
               </div>
               <div className="mt-2 text-sm text-gray-400">Total Distance</div>
            </div>

            {/* Bar Chart Mockup */}
            <div className="bg-[#1a1a1a] rounded-2xl p-6 flex-1 border border-white/5 flex flex-col justify-end">
               <div className="flex justify-between items-end h-32 gap-2">
                  <div className="w-4 bg-gray-800 rounded-t-sm h-[30%]"></div>
                  <div className="w-4 bg-gray-800 rounded-t-sm h-[50%]"></div>
                  <div className="w-4 bg-brand-lime rounded-t-sm h-[80%] shadow-[0_0_15px_rgba(204,255,0,0.3)]"></div>
                  <div className="w-4 bg-gray-800 rounded-t-sm h-[40%]"></div>
                  <div className="w-4 bg-gray-800 rounded-t-sm h-[60%]"></div>
                  <div className="w-4 bg-gray-800 rounded-t-sm h-[20%]"></div>
               </div>
               <div className="flex justify-between mt-4 text-xs text-gray-500">
                 <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
               </div>
            </div>
          </div>
        )}

        {/* === TYPE: SPLASH / BRAND === */}
        {type === 'splash' && (
          <div className="h-full w-full flex flex-col items-center justify-center bg-black relative">
             <div className="absolute inset-0 bg-brand-lime/5 blur-3xl rounded-full transform scale-150"></div>
             <div className="text-8xl font-black italic text-brand-lime relative z-10 tracking-tighter">R</div>
             <h1 className="text-3xl font-bold text-white mt-4 italic tracking-widest relative z-10">RUNWAY</h1>
             <p className="text-gray-400 mt-2 text-xs tracking-widest uppercase">Connect • Run • Share</p>
          </div>
        )}

      </div>
    </div>
  );
};