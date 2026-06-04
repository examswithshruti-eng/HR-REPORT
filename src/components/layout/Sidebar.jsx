import React from 'react';
import { LayoutDashboard, Users, Zap, ShieldAlert, BookOpen, Settings } from 'lucide-react';
import { motion } from 'motion/react';
import { useDashboardStore } from '../../store/dashboardStore';
import { cn } from '../ui/Primitives';

const navItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'demographics', label: 'Demographics', icon: Users },
  { id: 'performance', label: 'Market Benchmarks', icon: Zap },
  { id: 'risks', label: 'Risk Analysis', icon: ShieldAlert },
  { id: 'glossary', label: 'Documentation', icon: BookOpen },
];

export function Sidebar() {
  const { activeSection, setActiveSection } = useDashboardStore();

  return (
    <aside className="w-64 border-r border-border-default flex flex-col p-8 hidden lg:flex bg-bg-surface shrink-0">
      <div className="flex items-center gap-4 mb-16 px-2">
        <div className="relative">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-accent-primary to-accent-tertiary flex items-center justify-center text-bg-base font-black text-2xl shadow-accent rotate-3 group-hover:rotate-0 transition-transform">
            W
          </div>
          <div className="absolute -inset-1 bg-accent-primary/20 blur-lg rounded-xl pointer-events-none"></div>
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-xl tracking-tighter leading-none text-text-primary">PULSE.AI</span>
          <span className="text-[10px] font-mono text-text-disabled uppercase tracking-[.25em] mt-1">Personnel Ops</span>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              id={`nav-${item.id}`}
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-300 group text-left relative overflow-hidden",
                isActive ? "text-text-primary" : "text-text-muted hover:text-text-primary"
              )}
            >
              {isActive && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute inset-0 bg-white/[0.03] border border-white/5 rounded-xl"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-accent-primary rounded-r-full"></div>
              )}
              <Icon size={20} className={cn("transition-all duration-300", isActive ? "text-accent-primary scale-110" : "text-text-disabled group-hover:text-text-muted")} />
              <span className="text-[13px] font-semibold tracking-tight relative z-10">{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="pt-8 border-t border-border-subtle mt-auto">
        <button className="w-full flex items-center gap-4 px-4 py-3 rounded-xl text-text-muted hover:text-text-primary transition-colors text-xs font-bold uppercase tracking-widest">
          <Settings size={20} />
          Terminal
        </button>
      </div>
    </aside>
  );
}
