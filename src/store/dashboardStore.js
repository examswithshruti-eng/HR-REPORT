import { create } from 'zustand';

export const useDashboardStore = create((set) => ({
  activeSection: 'overview',
  setActiveSection: (id) => set({ activeSection: id }),
  
  timePeriod: 'All',
  setTimePeriod: (period) => set({ timePeriod: period }),
  
  theme: 'dark', // Fixed precision dark theme
}));
