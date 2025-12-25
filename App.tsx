import React, { useState } from 'react';
import { TrendingUp, Users, Globe, Zap, Share2 } from 'lucide-react';
import { PhoneMockup } from './components/PhoneMockup';
import { StoreButton } from './components/StoreButton';
import { TermsOfService } from './components/TermsOfService';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'terms'>('home');
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.mason.runway";

  if (view === 'terms') {
    return <TermsOfService onBack={() => setView('home')} />;
  }

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-lime selection:text-black overflow-x-hidden">
      
      {/* Navigation - Simplified (Logo Only) */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-brand-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center cursor-pointer" onClick={() => setView('home')}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center bg-brand-lime rounded text-black font-black italic">R</div>
            <span className="font-bold text-xl tracking-wide italic">RUNWAY</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-lime/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-lime/30 bg-brand-lime/10 text-brand-lime text-xs font-bold uppercase tracking-wider">
              <Zap size={12} className="fill-brand-lime" />
              Now Available on Android
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter leading-tight">
              RUN WHERE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lime to-white">THEY RAN.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
              Don't just run. Explore. 
              Find courses created by local runners when you travel, or share your favorite neighborhood loop with the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <StoreButton variant="primary" href={playStoreLink} />
            </div>
          </div>

          <div className="relative z-10 flex justify-center md:justify-end">
             {/* Phone Mockups layered */}
             <div className="relative">
                <div className="absolute top-10 -left-12 md:-left-24 z-0 transform -rotate-6 scale-90 opacity-60 blur-[1px]">
                  <PhoneMockup type="stats" />
                </div>
                <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <PhoneMockup type="map" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Unique Selling Point: Travel */}
      <section className="py-24 bg-[#0A0A0A] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Travel. Open App. Run.</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The hardest part of running in a new city is knowing where to go. 
              With Runway, you instantly see routes verified by locals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Local Knowledge",
                desc: "Access hidden trails and safe city loops that only locals know about."
              },
              {
                icon: Share2,
                title: "One-Click Share",
                desc: "Finished a great run? Publish it as a 'Course' for others to follow instantly."
              },
              {
                icon: TrendingUp,
                title: "Compete & Compare",
                desc: "See how your pace compares to the course creator and other runners."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-brand-gray p-8 rounded-2xl border border-white/5 hover:border-brand-lime/30 transition-all group">
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="text-brand-lime w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
             <div className="order-2 md:order-1 flex justify-center">
                <PhoneMockup type="stats" />
             </div>
             <div className="order-1 md:order-2 space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold">
                  Track Every <br />
                  <span className="text-brand-lime">Heartbeat.</span>
                </h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-lime/10 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="text-brand-lime" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-white">Advanced Analytics</h4>
                      <p className="text-gray-400 mt-1">Visualize your pace, elevation, and heart rate zones with our sleek dark-mode charts.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-lime/10 flex items-center justify-center flex-shrink-0">
                      <Users className="text-brand-lime" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-white">Community Leaderboards</h4>
                      <p className="text-gray-400 mt-1">Every course has a leaderboard. Become the 'Local Legend' of your neighborhood loop.</p>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6">
         <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#1A1A1A] to-black border border-white/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-lime/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            
            <h2 className="text-4xl md:text-6xl font-black italic mb-6 relative z-10">
              READY TO <span className="text-brand-lime">RUN?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto relative z-10">
              Join the community of explorers. Download Runway today and never run out of new paths.
            </p>
            <div className="flex justify-center relative z-10">
               <StoreButton variant="primary" href={playStoreLink} />
            </div>
         </div>
      </section>

      {/* Simplified Footer */}
      <footer className="bg-black border-t border-white/10 py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
            
            <div className="mb-8 opacity-50">
               <div className="w-10 h-10 mx-auto flex items-center justify-center bg-white/10 rounded text-brand-lime font-black italic mb-4">R</div>
            </div>

            <div className="space-y-4 text-gray-400 text-sm mb-8">
               <p>Account Deletion Inquiry: <a href="mailto:runwayteams@gmail.com" className="text-brand-lime hover:underline">runwayteams@gmail.com</a></p>
            </div>

            <div className="flex gap-8 text-xs text-gray-600 font-medium">
               <a href="https://runway-privacy-policy-802424170264.us-west1.run.app" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
               <button onClick={() => setView('terms')} className="hover:text-white transition-colors">Terms of Service</button>
            </div>
            
            <p className="mt-8 text-xs text-gray-700">
               &copy; {new Date().getFullYear()} Runway Inc. All rights reserved.
            </p>
        </div>
      </footer>
    </div>
  );
}

export default App;