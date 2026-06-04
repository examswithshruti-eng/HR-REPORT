import React from 'react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  Legend 
} from 'recharts';

export function DonutBreakdown({ data }) {
  return (
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
            dataKey="value"
            isAnimationActive={true}
            animationBegin={200}
            animationDuration={1200}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color || '#47BFFF'} stroke="transparent" />
            ))}
          </Pie>
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--color-bg-surface)', 
              border: 'var(--border-default)',
              borderRadius: '8px',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px'
            }}
          />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            formatter={(value) => <span className="text-[10px] font-mono text-text-muted uppercase tracking-widest leading-none">{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
