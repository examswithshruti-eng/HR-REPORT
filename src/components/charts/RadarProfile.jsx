import React from 'react';
import { 
  ResponsiveContainer, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar 
} from 'recharts';

export function RadarProfile({ data }) {
  return (
    <div className="w-full h-full min-h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="rgba(255,255,255,0.08)" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: 'var(--color-text-secondary)', fontSize: 11, fontWeight: 600 }} 
          />
          <PolarRadiusAxis 
            angle={30} 
            domain={[0, 4]} 
            tick={false} 
            axisLine={false}
          />
          <Radar
            name="Org Average"
            dataKey="A"
            stroke="var(--color-accent-primary)"
            fill="var(--color-accent-primary)"
            fillOpacity={0.5}
            strokeWidth={3}
            isAnimationActive={true}
            animationDuration={2500}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
