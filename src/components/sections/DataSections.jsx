import React from 'react';
import { motion } from 'motion/react';
import { dashboardData } from '../../data/dashboardData';
import { KpiCard } from '../ui/KpiCard';
import { SectionLabel, Card, Badge } from '../ui/Primitives';
import { BarComparison } from '../charts/BarComparison';
import { DonutBreakdown } from '../charts/DonutBreakdown';
import { RadarProfile } from '../charts/RadarProfile';

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: 'blur(4px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
}

export function DataSections() {
  return (
    <div className="px-12 pb-32 space-y-32">
      {/* KPI Grid */}
      <motion.section 
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8"
      >
        {dashboardData.kpis.map((kpi) => (
          <motion.div key={kpi.id} variants={fadeUp}>
            <KpiCard kpi={kpi} />
          </motion.div>
        ))}
      </motion.section>

      {/* Demographics Section */}
      <section id="demographics">
        <SectionLabel>Population Risk Vectors</SectionLabel>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <Card className="xl:col-span-2 p-10">
            <div className="mb-10 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-text-primary">Attrition by Age Group</h3>
                <p className="text-sm text-text-muted mt-1">Comparative churn rates across generational cohorts.</p>
              </div>
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors">Export CSV</button>
            </div>
            <div className="h-[400px]">
              <BarComparison 
                data={dashboardData.charts.age_dist.data}
                xKey="group"
                yKey="rate"
                colors={["#0f172a", "#0f172a", "var(--color-accent-primary)", "#0f172a", "#0f172a"]}
              />
            </div>
          </Card>
          
          <Card className="p-10 flex flex-col">
            <div className="mb-10">
              <h3 className="text-2xl font-bold tracking-tight text-text-primary">Departmental Share</h3>
              <p className="text-sm text-text-muted mt-1">Total workforce distribution.</p>
            </div>
            <div className="flex-1 min-h-[300px]">
              <DonutBreakdown data={dashboardData.charts.dept_breakdown.data} />
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-border-subtle pt-8 mt-6">
              {dashboardData.charts.dept_breakdown.data.map(d => (
                <div key={d.name} className="text-center">
                  <div className="text-[10px] font-mono font-bold text-text-muted uppercase mb-1">{d.name}</div>
                  <div className="text-xl font-bold tabular text-text-primary">{d.value}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Sentiment Section */}
      <section id="performance">
        <SectionLabel>Employee Sentiment Profile</SectionLabel>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          <Card className="p-10">
            <div className="mb-8">
              <h3 className="text-2xl font-bold tracking-tight text-text-primary">Satisfaction Radar</h3>
              <p className="text-sm text-text-muted mt-1">Weighted average across core workplace dimensions.</p>
            </div>
            <RadarProfile data={dashboardData.charts.satisfaction_radar.data} />
          </Card>
          
          <div className="space-y-8 py-4">
            <div className="text-[11px] font-mono text-accent-tertiary uppercase tracking-[.4em] font-black mb-4 px-2">Predictive Vulnerabilities</div>
            {dashboardData.insights.map((insight, idx) => (
              <motion.div 
                key={insight.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-bg-surface border-l-4 border-accent-primary p-8 rounded-r-3xl border-y border-r border-border-subtle group hover:bg-bg-elevated transition-colors duration-500 shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="text-lg font-bold text-text-primary tracking-tight">{insight.title}</div>
                  <Badge variant={insight.importance === 'critical' ? 'negative' : 'warning'}>{insight.importance}</Badge>
                </div>
                <p className="text-[15px] text-text-secondary leading-relaxed font-medium mb-6">{insight.body}</p>
                <div className="flex items-center gap-4">
                  <span className="text-[10px] font-mono font-bold uppercase py-1 px-3 bg-white/5 rounded-full text-text-muted">SOURCE_REF: {insight.source}</span>
                  <div className="h-px flex-1 bg-border-subtle"></div>
                  <span className="text-[10px] font-mono text-accent-primary font-bold">CONFIDENCE: 98.4%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
