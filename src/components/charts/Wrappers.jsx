import { 
  ResponsiveContainer, 
  BarChart as ReBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Cell,
  PieChart as RePieChart,
  Pie
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-bg-elevated border border-border-default p-3 rounded-lg shadow-lg">
        <p className="text-[10px] uppercase font-bold text-text-muted mb-1">{label}</p>
        <p className="text-sm font-bold text-text-primary">
          {payload[0].value}
          <span className="text-xs font-normal text-text-secondary ml-1">{payload[0].unit || ''}</span>
        </p>
      </div>
    );
  }
  return null;
};

export const BarChartWrapper = ({ data, xKey, yKey, title }) => (
  <div className="h-full w-full">
    <ResponsiveContainer width="100%" height="100%">
      <ReBarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
        <XAxis 
          dataKey={xKey} 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#64748B', fontSize: 10 }}
          dy={10}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: '#64748B', fontSize: 10 }}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.02)' }} />
        <Bar dataKey={yKey} fill="#38BDF8" radius={[4, 4, 0, 0]} barSize={24} />
      </ReBarChart>
    </ResponsiveContainer>
  </div>
);

export const DonutChart = ({ data }) => (
  <div className="h-full w-full">
    <ResponsiveContainer width="100%" height="100%">
      <RePieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius="60%"
          outerRadius="80%"
          paddingAngle={4}
          dataKey="value"
          stroke="none"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </RePieChart>
    </ResponsiveContainer>
  </div>
);
