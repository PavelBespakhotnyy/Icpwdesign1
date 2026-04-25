import { useState } from "react";
import { NavLink } from "react-router";
import { ChevronDown, ChevronRight, GraduationCap, Heart, BookOpen, PanelLeftClose, PanelLeftOpen } from "lucide-react";

interface SidebarSectionProps {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  topLink?: { to: string; label: string };
}

function SidebarSection({ label, icon, children, defaultOpen = false, topLink }: SidebarSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="mb-1">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left transition-all duration-200"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: 'var(--icpw-on-surface)',
          letterSpacing: '0.02em',
          background: open ? 'color-mix(in srgb, var(--icpw-primary) 8%, transparent)' : 'transparent',
        }}
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
          {topLink && (
            <NavLink
              to={topLink.to}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-xs transition-all duration-150 font-medium ${
                  isActive ? '' : 'hover:bg-[rgba(0,0,0,0.04)]'
                }`
              }
              style={({ isActive }) => ({
                fontFamily: 'var(--font-body)',
                textDecoration: 'none',
                color: isActive ? 'var(--icpw-primary)' : 'var(--icpw-on-surface)',
                background: isActive ? 'color-mix(in srgb, var(--icpw-primary) 8%, transparent)' : undefined,
              })}
            >
              {topLink.label}
            </NavLink>
          )}
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
          isActive ? '' : 'hover:bg-[rgba(0,0,0,0.04)]'
        }`
      }
      style={({ isActive }) => ({
        fontFamily: 'var(--font-body)',
        textDecoration: 'none',
        color: isActive ? 'var(--icpw-primary)' : 'var(--icpw-on-surface-variant)',
        background: isActive ? 'color-mix(in srgb, var(--icpw-primary) 8%, transparent)' : undefined,
        fontWeight: isActive ? 500 : 400,
      })}
    >
      {label}
    </NavLink>
  );
}

export function LeftSidebar({ className = "" }: { className?: string }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`hidden lg:flex flex-col shrink-0 transition-all duration-300 ${collapsed ? 'w-12' : 'w-64'} ${className}`}
      style={{
        background: 'var(--icpw-surface-low)',
        position: 'sticky',
        top: '64px',
        height: 'calc(100vh - 64px)',
        overflowY: 'auto',
        overflowX: 'hidden',
      }}
    >
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
          <SidebarSection
            label="Образовательные программы"
            icon={<GraduationCap size={15} />}
            defaultOpen={true}
            topLink={{ to: "/programs", label: "Все программы" }}
          >
            <SidebarLink to="/programs/retraining" label="Переподготовка" />
            <SidebarLink to="/programs/advancement" label="Повышение квалификации" />
            <SidebarLink to="/programs/documents" label="Выдаваемые документы" />
            <SidebarLink to="/programs/certification-terms" label="Условия сертификации" />
          </SidebarSection>

          <SidebarSection
            label="Личная терапия и супервизия"
            icon={<Heart size={15} />}
          >
            <SidebarLink to="/therapy" label="Рекомендуемые терапевты" />
            <SidebarLink to="/graduates" label="Наши выпускники" />
          </SidebarSection>

          <SidebarSection
            label="О процессуальной работе"
            icon={<BookOpen size={15} />}
          >
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
