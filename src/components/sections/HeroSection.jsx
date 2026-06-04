import React from 'react';
import { motion } from 'motion/react';
import { dashboardData } from '../../data/dashboardData';
import { Badge } from '../ui/Primitives';

export function HeroSection() {
  return (
    <section id="overview" className="relative py-20 px-12 overflow-hidden mesh-gradient">
      <div className="relative z-10 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Badge variant="neutral">June 2026 AUDIT</Badge>
            <div className="w-10 h-[1px] bg-border-strong"></div>
            <span className="text-[11px] font-mono text-accent-primary font-bold uppercase tracking-[.3em]">SECURE_FEED: {dashboardData.meta.source}</span>
          </div>
          
          <h1 className="text-display mb-8 text-white tracking-tighter">
            <span className="block italic font-light opacity-50 mb-2">Personnel Intelligence</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-accent-primary">
              {dashboardData.meta.title}
            </span>
          </h1>
          
          <p className="text-text-secondary text-2xl max-w-3xl leading-relaxed mb-12 font-medium tracking-tight">
            {dashboardData.meta.tldr}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            <div className="lg:col-span-2 bg-white/[0.03] border border-white/5 p-10 rounded-[2.5rem] backdrop-blur-2xl flex flex-col justify-center">
              <div className="text-accent-secondary text-xs font-bold uppercase tracking-[.4em] mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-secondary shadow-[0_0_10px_rgba(129,140,248,0.5)]"></div>
                Critical Synthesis
              </div>
              <div className="text-3xl font-bold text-text-primary leading-[1.1] tracking-tight italic">
                "{dashboardData.meta.keyQuote.text}"
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-accent-primary/20 to-accent-tertiary/20 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-2xl flex flex-col items-center justify-center text-center">
              <div className="text-[11px] font-mono font-black uppercase tracking-[.3em] text-white/50 mb-4">Continuity Score</div>
              <div className="relative mb-6">
                <span className="text-7xl font-black text-white">{dashboardData.meta.overallScore.value}</span>
                <div className="absolute -top-2 -right-6 w-12 h-12 border-2 border-accent-secondary rounded-full flex items-center justify-center text-[10px] font-black bg-bg-base text-accent-secondary animate-pulse">/10</div>
              </div>
              <p className="text-xs text-text-secondary font-medium leading-relaxed max-w-[180px]">
                {dashboardData.meta.overallScore.rationale}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
