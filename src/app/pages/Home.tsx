import { Link } from "react-router";
import { ArrowRight, Calendar, Play, ChevronRight, ExternalLink } from "lucide-react";
import { events } from "../data";
import { ContactFormBlock } from "../components/ContactFormBlock";
import icpwLogoHero from "../photos/icpw-logo-hero.png";

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
      <section className="flex flex-col items-center justify-center overflow-hidden" style={{ background: '#ffffff' }}>
        {/* Logo as full-width hero — clip bottom white space of the PNG (image is 1270x714, content ends ~y540) */}
        <div style={{ width: '100%', aspectRatio: '1270 / 540', overflow: 'hidden' }}>
          <img
            src={icpwLogoHero}
            alt="ICPW — International Center for Process Work"
            style={{ display: 'block', width: '100%' }}
          />
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

              {/* Visual accent */}
              <div
                className="relative min-h-[280px] lg:min-h-0"
                style={{
                  background: 'linear-gradient(135deg, var(--icpw-primary) 0%, var(--icpw-primary-dim) 100%)',
                  overflow: 'hidden',
                }}
              >
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white"
                >
                  <div
                    className="text-6xl font-bold tracking-widest mb-3 opacity-20"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    IAPOP
                  </div>
                  <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                    {[
                      { num: '3–4', label: 'года обучения' },
                      { num: '100+', label: 'часов практики' },
                      { num: '9', label: 'модулей' },
                      { num: '20+', label: 'стран признания' },
                    ].map(stat => (
                      <div
                        key={stat.label}
                        className="text-center p-3 rounded-xl"
                        style={{ background: 'rgba(255,255,255,0.1)' }}
                      >
                        <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                          {stat.num}
                        </div>
                        <div className="text-xs opacity-75 mt-1" style={{ fontFamily: 'var(--font-body)' }}>
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
                className="rounded-xl overflow-hidden group cursor-pointer"
                style={{ background: 'var(--icpw-surface-lowest)', boxShadow: '0 4px 20px rgba(47,52,46,0.06)' }}
              >
                {/* Thumbnail */}
                <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(47,52,46,0.35)' }}>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                      style={{ background: 'rgba(255,255,255,0.9)' }}
                    >
                      <Play size={18} style={{ color: 'var(--icpw-primary)', marginLeft: 2 }} fill="currentColor" />
                    </div>
                  </div>
                  <div
                    className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-xs"
                    style={{
                      background: 'rgba(0,0,0,0.7)',
                      color: '#ffffff',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {video.duration}
                  </div>
                </div>
                {/* Info */}
                <div className="p-4">
                  <h3
                    className="mb-1"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: 'var(--icpw-on-surface)',
                      lineHeight: 1.4,
                    }}
                  >
                    {video.title}
                  </h3>
                  <p
                    className="text-xs"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.5 }}
                  >
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================================================= */}
        {/* 4. CONTACT FORM */}
        {/* ================================================= */}
        <section className="py-16 pb-0">
          <div
            className="rounded-2xl p-8 lg:p-12"
            style={{ background: 'var(--icpw-surface-low)' }}
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
        </section>

      </div>
    </div>
  );
}