import React from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { HeroSection } from './components/sections/HeroSection';
import { DataSections } from './components/sections/DataSections';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Bell, User } from 'lucide-react';

export default function App() {
  return (
    <div className="flex h-screen w-full bg-bg-base overflow-hidden">
      {/* Sidebar - Desktop Only */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto scroll-smooth">
        {/* Top Navigation Bar */}
        <header className="sticky top-0 z-50 h-20 border-b border-border-subtle bg-bg-base/60 backdrop-blur-xl flex items-center justify-between px-12">
          <div className="flex items-center gap-8">
            <div className="text-[11px] font-mono font-black text-text-disabled uppercase tracking-[.3em] hidden sm:block">
              NODE // <span className="text-accent-primary">AP-SOUTH-1</span> // STABLE
            </div>
            <div className="sm:hidden text-accent-primary font-bold text-xl tracking-tighter">PULSE.AI</div>
          </div>

          <div className="flex items-center gap-8">
            <div className="relative group hidden md:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-disabled group-focus-within:text-accent-primary transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Secure Database Search..."
                className="bg-white/5 border border-white/5 rounded-full pl-12 pr-6 py-2.5 text-xs font-medium focus:outline-none focus:border-accent-primary focus:ring-4 focus:ring-accent-primary/10 w-80 transition-all placeholder:opacity-50"
              />
            </div>
            
            <div className="flex items-center gap-6 border-l border-border-strong pl-8">
              <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 transition-all relative group">
                <Bell size={18} />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-semantic-negative rounded-full border-2 border-bg-base group-hover:scale-125 transition-transform"></span>
              </button>
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-bold text-text-primary uppercase tracking-wider">J. DOE</div>
                  <div className="text-[10px] font-mono text-accent-primary font-black uppercase">Admin Auth</div>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-bg-base font-black text-xs shadow-lg group-hover:scale-105 transition-transform">
                  JD
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Scrollable Workspace */}
        <div className="flex-1">
          <HeroSection />
          <DataSections />
          
          {/* Footer Branding */}
          <footer className="py-12 px-8 border-t border-border-subtle bg-bg-surface/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              <div className="text-[10px] font-mono tracking-widest uppercase">
                // System Output Generated June 2026
              </div>
              <div className="text-[10px] font-mono tracking-widest uppercase">
                Privacy Policy / Data Governance / ISO-27001
              </div>
            </div>
          </footer>
        </div>
      </main>

      {/* Floating Action / Scroll Indicator */}
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2 }}
          className="fixed bottom-8 right-8 pointer-events-none hidden xl:block"
        >
          <div className="font-mono text-[8px] uppercase tracking-[.4em] rotate-90 origin-right whitespace-nowrap">
            Scroll for granular detail
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
