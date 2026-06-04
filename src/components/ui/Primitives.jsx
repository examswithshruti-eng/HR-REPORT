import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Badge({ children, variant = 'neutral', className }) {
  const variants = {
    positive: 'bg-semantic-positive/10 text-semantic-positive border-semantic-positive/20',
    negative: 'bg-semantic-negative/10 text-semantic-negative border-semantic-negative/20',
    warning: 'bg-semantic-warning/10 text-semantic-warning border-semantic-warning/20',
    neutral: 'bg-white/5 text-text-secondary border-white/10',
  };

  return (
    <span className={cn(
      "px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-[.15em] border backdrop-blur-md",
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}

export function SectionLabel({ children, className }) {
  return (
    <div className={cn("flex items-center gap-6 mb-10", className)}>
      <div className="h-[2px] w-8 bg-accent-primary rounded-full"></div>
      <span className="text-text-primary text-xs tracking-[.4em] uppercase font-black">
        {children}
      </span>
      <div className="h-[1px] flex-1 bg-gradient-to-r from-border-strong to-transparent"></div>
    </div>
  );
}

export function Card({ children, className, id }) {
  return (
    <div 
      id={id}
      className={cn(
        "bg-bg-surface border border-border-default rounded-2xl p-8 transition-all duration-500 hover:border-accent-primary/40 hover:shadow-accent relative overflow-hidden group",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      {children}
    </div>
  );
}
