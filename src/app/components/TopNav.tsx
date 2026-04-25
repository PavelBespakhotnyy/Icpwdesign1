import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X, GraduationCap, Heart, BookOpen, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { useTheme, type Palette } from "../context/ThemeContext";

const PALETTES: { id: Palette; label: string; color: string }[] = [
  { id: "2", label: "Палитра 2", color: "#00897b" },
  { id: "8", label: "Палитра 8", color: "#1565c0" },
  { id: "3", label: "Палитра 3", color: "#f9ce00" },
  { id: "4", label: "Палитра 4", color: "#376ea7" },
];

const sidebarSections = [
  {
    label: "Образовательные программы",
    icon: <GraduationCap size={15} />,
    links: [
      { to: "/programs/international-certification", label: "Международная сертификация" },
      { to: "/programs/retraining", label: "Переподготовка" },
      { to: "/programs/advancement", label: "Повышение квалификации" },
      { to: "/programs/documents", label: "Выдаваемые документы" },
      { to: "/programs/certification-terms", label: "Условия сертификации" },
    ],
  },
  {
    label: "Личная терапия и супервизия",
    icon: <Heart size={15} />,
    links: [
      { to: "/therapy", label: "Рекомендуемые терапевты" },
      { to: "/therapy#supervision", label: "Супервизия" },
    ],
  },
  {
    label: "О процессуальной работе",
    icon: <BookOpen size={15} />,
    links: [
      { to: "/about-process-work", label: "Что такое Process Work?" },
      { to: "/about-process-work#videos", label: "Полезные видео" },
    ],
  },
];

const navItems = [
  { label: "О нас", to: "/about" },
  { label: "Преподаватели", to: "/teachers" },
  { label: "Отзывы", to: "/reviews" },
  { label: "Библиотека", to: "/library" },
  { label: "FAQ", to: "/faq" },
  { label: "Контакты", to: "/contact" },
];

function SectionsDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-all duration-200"
        style={{
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          color: open ? 'var(--icpw-primary)' : 'var(--icpw-on-surface-variant)',
          background: open ? 'color-mix(in srgb, var(--icpw-primary) 8%, transparent)' : 'transparent',
          textDecoration: 'none',
        }}
      >
        Разделы
        <ChevronDown
          size={14}
          style={{
            transition: 'transform 0.2s',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {open && (
        <div
          className="absolute left-0 top-full mt-2 rounded-xl shadow-xl z-50"
          style={{
            background: 'var(--icpw-surface-lowest)',
            border: '1px solid rgba(175,179,172,0.2)',
            minWidth: '580px',
            padding: '16px',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '8px',
          }}
        >
          {sidebarSections.map((section) => (
            <div key={section.label}>
              <div
                className="flex items-center gap-2 px-2 pb-2 mb-1"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--icpw-on-surface)',
                  borderBottom: '1px solid rgba(175,179,172,0.2)',
                }}
              >
                <span style={{ color: 'var(--icpw-primary)' }}>{section.icon}</span>
                {section.label}
              </div>
              <div className="space-y-0.5">
                {section.links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-2 py-1.5 rounded-lg text-xs transition-all duration-150 ${
                        isActive
                          ? 'font-medium'
                          : 'hover:bg-[rgba(0,0,0,0.04)]'
                      }`
                    }
                    style={({ isActive }) => ({
                      fontFamily: 'var(--font-body)',
                      textDecoration: 'none',
                      color: isActive ? 'var(--icpw-primary)' : 'var(--icpw-on-surface-variant)',
                      background: isActive ? 'color-mix(in srgb, var(--icpw-primary) 8%, transparent)' : undefined,
                    })}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

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
          {/* Logo */}
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
                color: '#376ea7',
                letterSpacing: '0.1em',
                lineHeight: 1,
              }}
            >
              ICPW
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
                      ? 'font-medium'
                      : 'hover:bg-[rgba(0,0,0,0.04)]'
                  }`
                }
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-body)',
                  textDecoration: 'none',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--icpw-primary)' : 'var(--icpw-on-surface-variant)',
                  background: isActive ? 'color-mix(in srgb, var(--icpw-primary) 8%, transparent)' : undefined,
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Palette switcher */}
          <div
            className="hidden sm:flex items-center gap-1 px-2 py-1 rounded-xl"
            style={{
              background: 'rgba(0,0,0,0.04)',
              border: '1px solid rgba(0,0,0,0.07)',
            }}
          >
            <span
              className="text-xs mr-1"
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
          {/* Sidebar sections in mobile */}
          {sidebarSections.map((section) => (
            <div key={section.label} className="pb-2">
              <div
                className="flex items-center gap-2 px-2 py-1 mb-1"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  color: 'var(--icpw-on-surface)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                <span style={{ color: 'var(--icpw-primary)' }}>{section.icon}</span>
                {section.label}
              </div>
              {section.links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-sm transition-all ${
                      isActive ? 'font-medium' : 'hover:bg-[rgba(0,0,0,0.04)]'
                    }`
                  }
                  style={({ isActive }) => ({
                    fontFamily: 'var(--font-body)',
                    textDecoration: 'none',
                    color: isActive ? 'var(--icpw-primary)' : 'var(--icpw-on-surface-variant)',
                  })}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          ))}

          <div style={{ borderTop: '1px solid rgba(175,179,172,0.2)', marginTop: '8px', paddingTop: '8px' }}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded-lg text-sm transition-all ${
                    isActive ? 'font-medium' : 'hover:bg-[rgba(0,0,0,0.04)]'
                  }`
                }
                style={({ isActive }) => ({
                  fontFamily: 'var(--font-body)',
                  textDecoration: 'none',
                  color: isActive ? 'var(--icpw-primary)' : 'var(--icpw-on-surface-variant)',
                })}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(175,179,172,0.2)', marginTop: '8px', paddingTop: '12px' }}>
            <div
              className="px-2 pb-2"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--icpw-on-surface)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              Палитра
            </div>
            <div className="flex gap-2 px-2">
              {PALETTES.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPalette(p.id)}
                  title={p.label}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200"
                  style={{
                    fontFamily: 'var(--font-body)',
                    background: palette === p.id ? p.color : 'rgba(0,0,0,0.04)',
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
          </div>
        </div>
      )}
    </header>
  );
}
