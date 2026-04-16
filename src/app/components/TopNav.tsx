import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { useTheme, type Palette } from "../context/ThemeContext";

const navItems = [
  { label: "О нас", to: "/about" },
  { label: "Наши программы", to: "/programs" },
  { label: "Наши преподаватели", to: "/teachers" },
  { label: "Отзывы", to: "/reviews" },
  { label: "Библиотека", to: "/library" },
  { label: "FAQ", to: "/faq" },
  { label: "Контакты", to: "/contact" },
];

const PALETTES: { id: Palette; label: string; color: string }[] = [
  { id: "2", label: "Палитра 2", color: "#00897b" },
  { id: "8", label: "Палитра 8", color: "#1565c0" },
];

export function TopNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { palette, setPalette } = useTheme();

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: 'rgba(250,250,245,0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(175,179,172,0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo (compact in nav) */}
          <Link
            to="/"
            className="flex items-center gap-2 shrink-0"
            style={{ textDecoration: 'none' }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.4rem',
                color: 'var(--icpw-primary)',
                letterSpacing: '0.1em',
                lineHeight: 1,
              }}
            >
              ICPW
            </span>
            <span
              className="hidden sm:block text-xs tracking-widest"
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--icpw-on-surface-variant)',
                letterSpacing: '0.2em',
                paddingTop: '2px'
              }}
            >
              PROCESS WORK
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-[#50662b] bg-[#50662b]/8'
                      : 'text-[#5c605a] hover:text-[#2f342e] hover:bg-[#f3f4ee]'
                  }`
                }
                style={{ fontFamily: 'var(--font-body)', textDecoration: 'none', fontWeight: 500 }}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Palette switcher */}
          <div
            className="flex items-center gap-1 px-2 py-1 rounded-xl"
            style={{
              background: 'rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.07)',
            }}
          >
            <span
              className="text-xs mr-1 hidden sm:block"
              style={{ color: 'var(--icpw-on-surface-variant)', fontFamily: 'var(--font-body)', fontWeight: 500 }}
            >
              Палитра:
            </span>
            {PALETTES.map((p) => (
              <button
                key={p.id}
                onClick={() => setPalette(p.id)}
                title={p.label}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium transition-all duration-200"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: palette === p.id ? p.color : 'transparent',
                  color: palette === p.id ? '#ffffff' : 'var(--icpw-on-surface-variant)',
                  fontWeight: palette === p.id ? 600 : 400,
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: p.color, opacity: palette === p.id ? 1 : 0.6 }}
                />
                {p.id}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-lg"
            style={{ color: 'var(--icpw-on-surface-variant)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t px-4 py-4 space-y-1"
          style={{
            background: 'rgba(250,250,245,0.97)',
            borderColor: 'rgba(175,179,172,0.2)',
          }}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-lg text-sm transition-all ${
                  isActive
                    ? 'text-[#50662b] bg-[#50662b]/8 font-medium'
                    : 'text-[#5c605a] hover:text-[#2f342e] hover:bg-[#f3f4ee]'
                }`
              }
              style={{ fontFamily: 'var(--font-body)', textDecoration: 'none' }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
