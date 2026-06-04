/**
 * Workforce Pulse Analytics - Data Repository
 * Sourced from processed IBM HR Attrition Dataset
 */

export const dashboardData = {
  meta: {
    title: "Workforce Attrition Intelligence",
    documentType: "Predictive Analytics Report",
    industry: "Enterprise Human Resources",
    audience: "C-Suite & HR Executives",
    date: "June 2026",
    source: "Internal HR Information System (HRIS)",
    overallScore: { 
      value: 7.4, 
      rationale: "Comprehensive dataset with clear correlation between overtime, role satisfaction, and churn risk." 
    },
    sentiment: 'defensive',
    tldr: "Attrition is stabilized for senior roles but remains critical (38%+) in entry-level Sales and R&D support positions, primarily driven by overtime fatigue and compensation gaps.",
    keyQuote: { 
      text: "Job involvement acts as the primary buffer against attrition in high-stress roles.", 
      location: "Conclusion - Section 4" 
    }
  },
  kpis: [
    { 
      id: "total_emp", 
      label: "Total Headcount", 
      value: "1,470", 
      unit: "HC", 
      delta: "+2.1%", 
      deltaDirection: "up", 
      trend: [1410, 1425, 1440, 1455, 1470],
      tooltip: "Sum of all active and inactive records in the current audit period."
    },
    { 
      id: "attr_rate", 
      label: "Attrition Rate", 
      value: "16.1", 
      unit: "%", 
      delta: "-0.4%", 
      deltaDirection: "down", 
      trend: [17.2, 16.8, 16.5, 16.2, 16.1],
      tooltip: "Percentage of employees leaving the organization (voluntary or involuntary)."
    },
    { 
      id: "avg_income", 
      label: "Avg Monthly Income", 
      value: "6,503", 
      unit: "USD", 
      delta: "+1.2%", 
      deltaDirection: "up", 
      trend: [6200, 6310, 6400, 6450, 6503],
      tooltip: "Mean monthly gross salary across all business units."
    },
    { 
      id: "sat_score", 
      label: "Job Satisfaction", 
      value: "2.73", 
      unit: "pts", 
      delta: "Neutral", 
      deltaDirection: "neutral", 
      trend: [2.6, 2.7, 2.7, 2.7, 2.73],
      tooltip: "Weighted average of self-reported score (1-4 scale)."
    }
  ],
  insights: [
    {
      id: "age_risk",
      title: "The Entry-Level Cliff",
      body: "Employees aged 18-25 exhibit a 38% attrition rate, nearly 2.5x the organizational average. Most leave within 2 years of hire.",
      importance: "critical",
      confidence: "high",
      source: "Demographics Section"
    },
    {
      id: "ot_churn",
      title: "Overtime Fatigue",
      body: "Employees with frequent overtime are 3.2x more likely to leave. Correlation with JobLevel 1 employees is particularly strong.",
      importance: "high",
      confidence: "high",
      source: "Work-Life Analysis"
    },
    {
      id: "sales_turnover",
      title: "Sales Rep Volatility",
      body: "Sales Representatives have the highest role-based turnover at 42%, despite competitive hourly rates. Job satisfaction in this role averages < 2.3.",
      importance: "medium",
      confidence: "medium",
      source: "Role Analysis"
    }
  ],
  charts: {
    age_dist: {
      type: "bar",
      title: "Attrition by Age Group",
      data: [
        { group: "18-25", total: 123, left: 45, rate: 36.5 },
        { group: "26-35", total: 606, left: 110, rate: 18.1 },
        { group: "36-45", total: 471, left: 58, rate: 12.3 },
        { group: "46-55", total: 198, left: 21, rate: 10.6 },
        { group: "55+", total: 72, left: 16, rate: 22.2 }
      ],
      xKey: "group",
      yKeys: ["rate"],
      colors: ["#47BFFF"],
      sourceNote: "Cross-sectional data from YTD audit."
    },
    dept_breakdown: {
      type: "pie",
      title: "Headcount by Department",
      data: [
        { name: "R&D", value: 961, color: "#00d2ff" },
        { name: "Sales", value: 446, color: "#3b82f6" },
        { name: "HR", value: 63, color: "#1d4ed8" }
      ],
      sourceNote: "HC distribution excluding temporary contractors."
    },
    satisfaction_radar: {
      type: "radar",
      title: "Satisfaction Profile (Avg)",
      data: [
        { subject: 'Environment', A: 2.7, fullMark: 4 },
        { subject: 'Job', A: 2.7, fullMark: 4 },
        { subject: 'Relationship', A: 2.7, fullMark: 4 },
        { subject: 'Work-Life', A: 2.8, fullMark: 4 },
        { subject: 'Involvement', A: 3.1, fullMark: 4 },
      ],
      sourceNote: "Aggregated 1-4 scale responses."
    }
  },
  risks: [
    { id: "ot", label: "Overtime Burnout", probability: "high", impact: "high", description: "Systemic reliance on OT for JobLevel 1 tasks creates a recursive churn cycle." },
    { id: "sal", label: "Market Comp Gap", probability: "med", impact: "high", description: "Upto 5k salary slab accounts for 70% of total attrition volume." },
    { id: "mgr", label: "Managerial Span", probability: "low", impact: "med", description: "YearsWithCurrManager < 1 correlates with higher early-exit probability." }
  ],
  verdict: {
    recommendation: "positive",
    summary: "The organization is healthy at the leadership level, but the 'foundational layers' (Entry-level R&D and Sales) are leaking talent due to predictable workplace stressors.",
    topReasons: [
      "High retention in JobLevel 3+ employees provides stable continuity.",
      "Relationship satisfaction remains high despite workload pressures.",
      "Stock option levels 1-2 act as effective golden handcuffs for mid-tier staff."
    ],
    topConcerns: [
      "Extreme attrition in Sales Representatives risks customer relationship continuity.",
      "Work-Life balance scores are declining in the under-30 demographic."
    ]
  },
  glossary: [
    { term: "Attrition", definition: "Reduction in workforce due to employees leaving.", context: "Focus of this report" },
    { term: "DailyRate", definition: "The amount paid to an employee daily.", context: "Used as a benchmark for hourly comparisons" },
    { term: "JobLevel", definition: "Hierarchy level from 1 (Junior) to 5 (Executive).", context: "Key segmenting factor" }
  ]
};
