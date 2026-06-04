import React from 'react';
import { 
  LayoutDashboard, 
  Database, 
  ShieldCheck, 
  HardDrive, 
  Users, 
  CreditCard, 
  Settings,
  Circle
} from 'lucide-react';
import { useDashboardStore } from '@/store/dashboardStore';

const NavItem = ({ id, icon: Icon, label }) => {
  const { activeSection, setActiveSection } = useDashboardStore();
  const isActive = activeSection === id;

  return (
    <div 
      onClick={() => setActiveSection(id)}
      className={`flex items-center px-3 py-2.5 mb-1 rounded-lg text-sm transition-all cursor-pointer group ${
        isActive ? 'bg-bg-elevated text-text-primary' : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated/50'
      }`}
    >
      <div className={`w-2 h-2 rounded-full mr-3 transition-colors ${isActive ? 'bg-accent-primary' : 'bg-transparent'}`} />
      <Icon size={18} className="mr-3 opacity-80 group-hover:opacity-100" />
      <span className={isActive ? 'font-medium' : ''}>{label}</span>
    </div>
  );
};

export const Sidebar = () => {
  return (
    <aside className="w-[260px] bg-bg-surface border-right border-border-default flex flex-col p-6 h-full transition-all shrink-0">
      <div className="flex items-center gap-2.5 mb-10 pl-1">
        <div className="w-6 h-6 bg-accent-primary rounded-[4px]" />
        <span className="text-lg font-bold tracking-tight text-accent-primary uppercase">Core_OS</span>
      </div>

      <nav className="flex-1">
        <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest mb-4 pl-3">Main Menu</div>
        <NavItem id="overview" icon={LayoutDashboard} label="Dashboard" />
        <NavItem id="data" icon={Database} label="Project Assets" />
        <NavItem id="security" icon={ShieldCheck} label="Deployments" />
        <NavItem id="infrastructure" icon={HardDrive} label="Infrastructure" />
        <NavItem id="team" icon={Users} label="Team Access" />
        <NavItem id="billing" icon={CreditCard} label="Billing" />
      </nav>

      <div className="pt-6 border-t border-border-default">
        <NavItem id="settings" icon={Settings} label="Settings" />
      </div>
    </aside>
  );
};

export const TopBar = () => {
  return (
    <header className="h-16 border-b border-border-default flex items-center justify-between px-8 bg-bg-base/50 backdrop-blur-md sticky top-0 z-10">
      <div className="flex items-center gap-1 text-[13px]">
        <span className="text-text-secondary">Projects /</span>
        <span className="font-semibold text-text-primary">Neon_Architecture_V3</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Circle size={8} fill="currentColor" />
          <span className="text-[10px] font-bold uppercase tracking-wider">System Live</span>
        </div>
        
        <div className="w-8 h-8 rounded-full bg-accent-primary flex items-center justify-center text-[11px] font-bold text-[#0F172A] cursor-pointer hover:ring-2 hover:ring-accent-primary/20 transition-all">
          JD
        </div>
      </div>
    </header>
  );
};
