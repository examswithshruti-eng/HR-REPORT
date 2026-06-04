import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Info } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import { useCountUp } from '../../hooks/useCountUp';
import { cn, Card } from './Primitives';

export function KpiCard({ kpi }) {
  const animatedValue = useCountUp(kpi.value);
  const isPositive = kpi.deltaDirection === 'up';
  
  return (
    <Card className="flex flex-col justify-between min-h-[190px]">
      <div className="flex justify-between items-start mb-6">
        <div className="flex flex-col">
          <span className="text-text-muted text-[10px] uppercase font-black tracking-[.25em] font-mono mb-1">
            {kpi.label}
          </span>
          <div className={cn(
            "flex items-center gap-1.5 text-xs font-mono font-bold",
            isPositive ? "text-semantic-positive" : "text-semantic-negative"
          )}>
            {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {kpi.delta}
          </div>
        </div>
        <button className="w-8 h-8 rounded-full flex items-center justify-center bg-white/5 text-text-disabled hover:text-accent-primary hover:bg-white/10 transition-all">
          <Info size={14} />
        </button>
      </div>

      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-5xl font-extrabold text-text-primary tabular tracking-tighter">
          {animatedValue}
        </span>
        <span className="text-text-muted text-lg font-mono font-medium lowercase">
          {kpi.unit}
        </span>
      </div>

      <div className="w-full h-12 -mx-8 -mb-8 mt-4 overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={kpi.trend.map(v => ({ v }))}>
            <defs>
              <linearGradient id={`grad-${kpi.id}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={isPositive ? "var(--color-semantic-positive)" : "var(--color-semantic-negative)"} stopOpacity={0.5}/>
                <stop offset="95%" stopColor={isPositive ? "var(--color-semantic-positive)" : "var(--color-semantic-negative)"} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area 
              type="monotone" 
              dataKey="v" 
              stroke={isPositive ? "var(--color-semantic-positive)" : "var(--color-semantic-negative)"} 
              fill={`url(#grad-${kpi.id})`}
              strokeWidth={3}
              isAnimationActive={true}
              animationDuration={2000}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
