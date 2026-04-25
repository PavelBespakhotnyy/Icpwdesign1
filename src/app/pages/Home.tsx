import { Link } from "react-router";
import { ArrowRight, Calendar, Play, ChevronRight, ExternalLink } from "lucide-react";
import { events } from "../data";
import { ContactFormBlock } from "../components/ContactFormBlock";
import heroPhoto from "../photos/1688164478_kartin-papik-pro-p-kartinki-nebo-listva-45-2420936487.jpg";

const videos = [
  {
    id: "v1",
    title: "Что такое процессуальная работа?",
    description: "Арнольд Минделл объясняет основы метода",
    thumb: "https://images.unsplash.com/photo-1627257058738-001d206ba180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    duration: "18 мин",
  },
  {
    id: "v2",
    title: "Работа со сновидящим телом",
    description: "Демонстрация сессии на семинаре ICPW",
    thumb: "https://images.unsplash.com/photo-1595554919503-b806f0f8f106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    duration: "24 мин",
  },
  {
    id: "v3",
    title: "Мировая работа: конфликт как ресурс",
    description: "Наталья Смирнова о групповой динамике",
    thumb: "https://images.unsplash.com/photo-1764728671460-34931d8261f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    duration: "32 мин",
  },
];

export function Home() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center overflow-hidden">

        {/* ── Typographic Hero Block (same size as the old photo) ── */}
        <div style={{
          width: '100%', aspectRatio: '1270 / 540', overflow: 'hidden', position: 'relative',
          background: [
            'radial-gradient(ellipse at 12% 20%, color-mix(in srgb, var(--icpw-tertiary) 40%, transparent) 0%, transparent 52%)',
            'radial-gradient(ellipse at 90% 15%, color-mix(in srgb, var(--icpw-primary) 38%, transparent) 0%, transparent 50%)',
            'radial-gradient(ellipse at 75% 90%, color-mix(in srgb, var(--icpw-tertiary) 34%, transparent) 0%, transparent 48%)',
            'radial-gradient(ellipse at 15% 85%, color-mix(in srgb, var(--icpw-primary) 32%, transparent) 0%, transparent 46%)',
            'radial-gradient(ellipse at 52% 5%,  color-mix(in srgb, var(--icpw-primary-dim) 26%, transparent) 0%, transparent 42%)',
            'radial-gradient(ellipse at 50% 96%, color-mix(in srgb, var(--icpw-tertiary) 28%, transparent) 0%, transparent 44%)',
            'radial-gradient(ellipse at 2%  50%, color-mix(in srgb, var(--icpw-secondary) 20%, transparent) 0%, transparent 36%)',
            'radial-gradient(ellipse at 98% 50%, color-mix(in srgb, var(--icpw-secondary) 18%, transparent) 0%, transparent 36%)',
            'var(--icpw-surface-lowest)',
          ].join(', '),
        }}>

          {/* Compass reticle – left */}
          <svg
            viewBox="0 0 200 200"
            style={{
              position: 'absolute',
              width: '40%', aspectRatio: '1',
              top: '50%', left: '-10%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              overflow: 'visible',
              opacity: 0.32,
            }}
            aria-hidden="true"
          >
            <g stroke="var(--icpw-primary)" fill="none">
              <circle cx="100" cy="100" r="95" strokeWidth="1" />
              <circle cx="100" cy="100" r="63" strokeWidth="0.75" />
              <circle cx="100" cy="100" r="31" strokeWidth="0.75" />
              <line x1="5" y1="100" x2="195" y2="100" strokeWidth="0.5" />
              <line x1="100" y1="5" x2="100" y2="195" strokeWidth="0.5" />
              {Array.from({ length: 12 }, (_, i) => {
                const a = (i * 30 - 90) * Math.PI / 180;
                const major = i % 3 === 0;
                return (
                  <line
                    key={i}
                    x1={100 + 95 * Math.cos(a)} y1={100 + 95 * Math.sin(a)}
                    x2={100 + (major ? 84 : 89) * Math.cos(a)}
                    y2={100 + (major ? 84 : 89) * Math.sin(a)}
                    strokeWidth={major ? 1.5 : 0.75}
                  />
                );
              })}
            </g>
            <g fill="var(--icpw-primary)">
              <circle cx="100" cy="5"   r="2.5" />
              <circle cx="195" cy="100" r="2.5" />
              <circle cx="100" cy="195" r="2.5" />
              <circle cx="5"   cy="100" r="2.5" />
              <circle cx="100" cy="100" r="3.5" />
            </g>
          </svg>

          {/* Compass reticle – right */}
          <svg
            viewBox="0 0 200 200"
            style={{
              position: 'absolute',
              width: '26%', aspectRatio: '1',
              top: '50%', right: '-6%',
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              overflow: 'visible',
              opacity: 0.28,
            }}
            aria-hidden="true"
          >
            <g stroke="var(--icpw-tertiary)" fill="none">
              <circle cx="100" cy="100" r="95" strokeWidth="1" />
              <circle cx="100" cy="100" r="52" strokeWidth="0.75" />
              <line x1="33" y1="33" x2="167" y2="167" strokeWidth="0.5" />
              <line x1="167" y1="33" x2="33" y2="167" strokeWidth="0.5" />
              {Array.from({ length: 8 }, (_, i) => {
                const a = (i * 45 - 90) * Math.PI / 180;
                return (
                  <line
                    key={i}
                    x1={100 + 95 * Math.cos(a)} y1={100 + 95 * Math.sin(a)}
                    x2={100 + (i % 2 === 0 ? 84 : 89) * Math.cos(a)}
                    y2={100 + (i % 2 === 0 ? 84 : 89) * Math.sin(a)}
                    strokeWidth={i % 2 === 0 ? 1.5 : 0.75}
                  />
                );
              })}
            </g>
            <g fill="var(--icpw-tertiary)">
              <circle cx="100" cy="5"   r="2.5" />
              <circle cx="195" cy="100" r="2.5" />
              <circle cx="100" cy="195" r="2.5" />
              <circle cx="5"   cy="100" r="2.5" />
              <circle cx="100" cy="100" r="3" />
            </g>
          </svg>

          {/* ── Text – matching original logo layout ── */}
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            padding: '0 6%',
          }}>
            {/* ICPW */}
            <div style={{
              fontFamily: '"Times New Roman", Times, serif',
              fontSize: 'clamp(3rem, 10.5vw, 8.5rem)',
              fontWeight: 400,
              color: '#376ea7',
              letterSpacing: '0.03em',
              lineHeight: 1,
              textAlign: 'center',
            }}>
              ICPW
            </div>

            {/* Horizontal rule */}
            <div style={{
              width: 'clamp(180px, 48%, 500px)',
              height: '2px',
              background: '#376ea7',
              margin: '0.45rem 0 0.4rem',
              opacity: 0.65,
            }} />

            {/* Process Work */}
            <div style={{
              fontFamily: '"Times New Roman", Times, serif',
              fontSize: 'clamp(1.4rem, 4.5vw, 3.8rem)',
              fontWeight: 400,
              color: '#376ea7',
              letterSpacing: '0.02em',
              lineHeight: 1.15,
              textAlign: 'center',
              marginBottom: 'clamp(0.6rem, 1.8vw, 1.4rem)',
            }}>
              Process Work
            </div>

            {/* Russian subtitle */}
            <div style={{
              fontFamily: '"Times New Roman", Times, serif',
              fontSize: 'clamp(0.6rem, 1.3vw, 1rem)',
              fontWeight: 700,
              color: '#376ea7',
              textAlign: 'center',
              lineHeight: 1.5,
            }}>
              Международный Центр Процессуальной Работы
            </div>

            {/* English subtitle */}
            <div style={{
              fontFamily: '"Times New Roman", Times, serif',
              fontSize: 'clamp(0.58rem, 1.2vw, 0.95rem)',
              fontWeight: 700,
              color: '#376ea7',
              textAlign: 'center',
              lineHeight: 1.5,
              marginTop: '0.2rem',
            }}>
              International Center for Process Work
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3 pb-12 pt-2">
          <Link
            to="/programs/international-certification"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, var(--icpw-primary) 0%, var(--icpw-primary-dim) 100%)',
              color: '#ffffff',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Поступить на программу
            <ArrowRight size={15} />
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm transition-all duration-200"
            style={{
              background: 'transparent',
              color: 'var(--icpw-primary)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              textDecoration: 'none',
              border: '2px solid var(--icpw-primary)',
            }}
          >
            Узнать о нас
          </Link>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* ================================================= */}
        {/* 1. INTERNATIONAL CERTIFICATION PROGRAM */}
        {/* ================================================= */}
        <section className="py-16">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: 'var(--icpw-surface-lowest)',
              boxShadow: '0 16px 64px rgba(47,52,46,0.07)',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Text content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div
                  className="mb-4 uppercase tracking-widest text-xs"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--icpw-primary)',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                  }}
                >
                  Флагманская программа
                </div>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                    color: 'var(--icpw-on-surface)',
                    lineHeight: 1.25,
                  }}
                >
                  Международная Сертификационная Программа
                </h2>
                <p
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--icpw-on-surface-variant)',
                    lineHeight: 1.75,
                    fontSize: '0.95rem',
                  }}
                >
                  Полная профессиональная подготовка в области процессуально-ориентированной психологии,
                  аккредитованная IAPOP. Вы получите глубокие теоретические знания и живые практические
                  навыки под руководством тренеров мирового уровня.
                </p>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6 w-fit"
                  style={{
                    background: 'color-mix(in srgb, var(--icpw-primary) 10%, transparent)',
                    color: 'var(--icpw-primary)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                >
                  <Calendar size={14} />
                  Старт: Сентябрь 2026
                </div>
                <Link
                  to="/programs/international-certification"
                  className="flex items-center gap-2 w-fit transition-all duration-200 group"
                  style={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--icpw-primary)',
                    textDecoration: 'none',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                  }}
                >
                  Подробнее о программе
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Photo panel */}
              <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden">
                <img
                  src={heroPhoto}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(135deg, rgba(55,110,167,0.55) 0%, rgba(30,60,100,0.45) 100%)' }}
                />
                {/* Stats overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white">
                  <div
                    className="text-5xl font-bold tracking-widest mb-5"
                    style={{
                      fontFamily: 'var(--font-display)',
                      lineHeight: 1,
                      color: '#ffffff',
                      letterSpacing: '0.18em',
                    }}
                  >
                    IAPOP
                  </div>
                  <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
                    {[
                      { num: '3–4', label: 'года обучения' },
                      { num: '100+', label: 'часов практики' },
                      { num: '9', label: 'модулей' },
                      { num: '20+', label: 'стран признания' },
                    ].map(stat => (
                      <div
                        key={stat.label}
                        className="text-center p-3 rounded-xl"
                        style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)' }}
                      >
                        <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                          {stat.num}
                        </div>
                        <div className="text-xs opacity-80 mt-1" style={{ fontFamily: 'var(--font-body)' }}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================= */}
        {/* 2. UPCOMING EVENTS */}
        {/* ================================================= */}
        <section className="py-10">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div
                className="mb-2 uppercase tracking-widest text-xs"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', fontWeight: 600 }}
              >
                Календарь
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.75rem',
                  color: 'var(--icpw-on-surface)',
                }}
              >
                Предстоящие события
              </h2>
            </div>
            <Link
              to="/events"
              className="text-sm hidden sm:flex items-center gap-1 transition-colors"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', textDecoration: 'none', fontWeight: 500 }}
            >
              Все события <ExternalLink size={13} />
            </Link>
          </div>

          <div className="space-y-3">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex items-start gap-5 p-5 rounded-xl group cursor-pointer transition-all duration-200"
                style={{ background: 'var(--icpw-surface-lowest)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(47,52,46,0.07)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                <div
                  className="shrink-0 w-16 text-center"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto"
                    style={{ background: 'color-mix(in srgb, var(--icpw-primary) 10%, transparent)' }}
                  >
                    <Calendar size={18} style={{ color: 'var(--icpw-primary)' }} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full"
                      style={{
                        background: 'rgba(14,103,129,0.08)',
                        color: 'var(--icpw-tertiary)',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 600,
                      }}
                    >
                      {event.type}
                    </span>
                    <span
                      className="text-xs"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-outline-variant)' }}
                    >
                      {event.date}
                    </span>
                    <span
                      className="text-xs"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-outline-variant)' }}
                    >
                      · {event.location}
                    </span>
                  </div>
                  <h3
                    className="mb-1"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '1rem',
                      color: 'var(--icpw-on-surface)',
                    }}
                  >
                    {event.title}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.6 }}
                  >
                    {event.description}
                  </p>
                </div>
                <ChevronRight
                  size={18}
                  className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity translate-x-0 group-hover:translate-x-1"
                  style={{ color: 'var(--icpw-primary)', marginTop: 4 }}
                />
              </div>
            ))}
          </div>
        </section>

        {/* ================================================= */}
        {/* 3. USEFUL VIDEOS */}
        {/* ================================================= */}
        <section className="py-10">
          <div className="mb-8">
            <div
              className="mb-2 uppercase tracking-widest text-xs"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', fontWeight: 600 }}
            >
              Медиатека
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.75rem',
                color: 'var(--icpw-on-surface)',
              }}
            >
              Полезные видео
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {videos.map(video => (
              <div
                key={video.id}
                className="rounded-2xl overflow-hidden group cursor-pointer"
                style={{ boxShadow: '0 8px 32px rgba(47,52,46,0.1)', position: 'relative' }}
              >
                {/* Full image with overlay */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '3/4' }}>
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark gradient overlay at bottom */}
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(15,20,35,0.92) 0%, rgba(15,20,35,0.3) 50%, transparent 100%)' }}
                  />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(255,255,255,0.4)' }}
                    >
                      <Play size={20} style={{ color: '#ffffff', marginLeft: 3 }} fill="currentColor" />
                    </div>
                  </div>
                  {/* Duration badge */}
                  <div
                    className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-medium"
                    style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)', color: '#ffffff', fontFamily: 'var(--font-body)' }}
                  >
                    {video.duration}
                  </div>
                  {/* Text at bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p
                      className="text-xs mb-1.5 uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-body)', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}
                    >
                      {video.description}
                    </p>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        color: '#ffffff',
                        lineHeight: 1.35,
                      }}
                    >
                      {video.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>{/* /max-w-5xl */}

      {/* ================================================= */}
      {/* 4. CONTACT FORM — full width */}
      {/* ================================================= */}
      <section
        className="py-20 pb-14"
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: `
            radial-gradient(ellipse at 93% 8%,  color-mix(in srgb, var(--icpw-tertiary)  40%, transparent) 0%, transparent 52%),
            radial-gradient(ellipse at 5%  90%, color-mix(in srgb, var(--icpw-primary)   34%, transparent) 0%, transparent 48%),
            radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--icpw-secondary) 16%, transparent) 0%, transparent 58%),
            var(--icpw-surface-lowest)
          `,
        }}
      >
        {/* Noise texture */}
        <svg
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            pointerEvents: 'none', zIndex: 0,
            mixBlendMode: 'overlay', opacity: 0.24,
          }}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <filter id="contact-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#contact-grain)" />
        </svg>

        {/* Concentric arcs – top-right */}
        <svg
          style={{ position: 'absolute', top: 0, right: 0, overflow: 'visible', pointerEvents: 'none', opacity: 0.22, zIndex: 0 }}
          width="300" height="260" viewBox="0 0 300 260"
          aria-hidden="true"
        >
          {[55, 96, 137, 178, 219, 260, 301].map(r => (
            <circle key={r} cx="300" cy="0" r={r} fill="none" stroke="var(--icpw-tertiary)" strokeWidth="1.5" />
          ))}
        </svg>

        {/* Dot grid – bottom-left */}
        <svg
          style={{ position: 'absolute', bottom: '28px', left: '28px', pointerEvents: 'none', opacity: 0.18, zIndex: 0 }}
          width="160" height="130" viewBox="0 0 160 130"
          aria-hidden="true"
        >
          {Array.from({ length: 8 }, (_, row) =>
            Array.from({ length: 10 }, (_, col) => (
              <circle key={`${row}-${col}`} cx={col * 16 + 8} cy={row * 16 + 8} r="2" fill="var(--icpw-primary)" />
            ))
          )}
        </svg>

        {/* Card – constrained width */}
        <div className="max-w-5xl mx-auto px-6 lg:px-10" style={{ position: 'relative', zIndex: 1 }}>
          <div
            className="rounded-2xl p-8 lg:p-12"
            style={{
              background: 'var(--icpw-surface-lowest)',
              boxShadow: '0 8px 48px rgba(0,0,0,0.09)',
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              <div className="lg:col-span-2">
                <div
                  className="mb-2 uppercase tracking-widest text-xs"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-primary)', fontWeight: 600 }}
                >
                  Связаться с нами
                </div>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.75rem',
                    color: 'var(--icpw-on-surface)',
                    lineHeight: 1.25,
                  }}
                >
                  Есть вопросы? Напишите нам
                </h2>
                <p
                  className="text-sm"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.75 }}
                >
                  Мы отвечаем в течение 1–2 рабочих дней. Ваши данные
                  хранятся в безопасности и не передаются третьим лицам.
                </p>
              </div>
              <div className="lg:col-span-3">
                <ContactFormBlock compact />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
