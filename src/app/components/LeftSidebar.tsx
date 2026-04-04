import { useState } from "react";
import { NavLink } from "react-router";
import { ChevronDown, ChevronRight, GraduationCap, Heart, BookOpen, PanelLeftClose, PanelLeftOpen } from "lucide-react";

interface SidebarSectionProps {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

function SidebarSection({ label, icon, children, defaultOpen = false }: SidebarSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all duration-200 group"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: 'var(--icpw-on-surface)',
          letterSpacing: '0.02em',
          background: open ? 'rgba(80,102,43,0.07)' : 'transparent',
        }}
        onMouseEnter={e => { if (!open) (e.currentTarget as HTMLElement).style.background = 'rgba(80,102,43,0.05)'; }}
        onMouseLeave={e => { if (!open) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
      >
        <span className="flex items-center gap-2">
          <span style={{ color: 'var(--icpw-primary)', opacity: 0.8 }}>{icon}</span>
          <span>{label}</span>
        </span>
        <span style={{ color: 'var(--icpw-outline-variant)' }}>
          {open ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
        </span>
      </button>
      {open && (
        <div className="pl-2 mt-1 space-y-0.5">
          {children}
        </div>
      )}
    </div>
  );
}

function SidebarLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-3 py-2 rounded-lg text-xs transition-all duration-150 ${
          isActive
            ? 'text-[#50662b] bg-[#50662b]/10 font-medium'
            : 'text-[#5c605a] hover:text-[#2f342e] hover:bg-[#f3f4ee]'
        }`
      }
      style={{ fontFamily: 'var(--font-body)', textDecoration: 'none' }}
    >
      {label}
    </NavLink>
  );
}

interface LeftSidebarProps {
  className?: string;
}

export function LeftSidebar({ className = "" }: LeftSidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`hidden xl:flex flex-col shrink-0 transition-all duration-300 ${collapsed ? 'w-12' : 'w-60'} ${className}`}
      style={{
        background: 'var(--icpw-surface-low)',
        minHeight: 'calc(100vh - 64px)',
        position: 'sticky',
        top: '64px',
        height: 'calc(100vh - 64px)',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
      {/* Collapse toggle */}
      <div className="flex justify-end p-2">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 rounded-lg transition-colors"
          style={{ color: 'var(--icpw-outline-variant)' }}
          title={collapsed ? 'Развернуть' : 'Свернуть'}
        >
          {collapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
        </button>
      </div>

      {!collapsed && (
        <nav className="px-3 pb-8 flex flex-col gap-1">
          {/* Label */}
          <div
            className="px-3 mb-2 uppercase tracking-widest"
            style={{
              fontSize: '0.65rem',
              color: 'var(--icpw-outline-variant)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
            }}
          >
            Навигация
          </div>

          {/* Образовательные программы */}
          <SidebarSection
            label="Образовательные программы"
            icon={<GraduationCap size={15} />}
            defaultOpen={true}
          >
            <SidebarLink to="/programs/international-certification" label="Международная сертификация" />
            <SidebarLink to="/programs/retraining" label="Переподготовка" />
            <SidebarLink to="/programs/advancement" label="Повышение квалификации" />
            <SidebarLink to="/programs/documents" label="Выдаваемые документы" />
            <SidebarLink to="/programs/certification-terms" label="Условия сертификации" />
          </SidebarSection>

          {/* Личная терапия */}
          <SidebarSection
            label="Личная терапия и супервизия"
            icon={<Heart size={15} />}
          >
            <SidebarLink to="/therapy" label="Рекомендуемые терапевты" />
            <SidebarLink to="/therapy#supervision" label="Супервизия" />
          </SidebarSection>

          {/* О процессуальной работе */}
          <SidebarSection
            label="О процессуальной работе"
            icon={<BookOpen size={15} />}
          >
            <SidebarLink to="/about-process-work" label="Что такое Process Work?" />
            <SidebarLink to="/about-process-work#videos" label="Полезные видео" />
          </SidebarSection>
        </nav>
      )}

      {collapsed && (
        <nav className="flex flex-col items-center gap-3 py-4">
          <NavLink to="/programs" title="Программы" style={{ color: 'var(--icpw-on-surface-variant)' }}>
            <GraduationCap size={18} />
          </NavLink>
          <NavLink to="/therapy" title="Терапия" style={{ color: 'var(--icpw-on-surface-variant)' }}>
            <Heart size={18} />
          </NavLink>
          <NavLink to="/about-process-work" title="О процессуальной работе" style={{ color: 'var(--icpw-on-surface-variant)' }}>
            <BookOpen size={18} />
          </NavLink>
        </nav>
      )}
    </aside>
  );
}
