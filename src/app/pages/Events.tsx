import { Link } from "react-router";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { events } from "../data";

const typeColors: Record<string, { bg: string; text: string }> = {
  'Интенсив': { bg: 'color-mix(in srgb, var(--icpw-primary) 10%, transparent)', text: 'var(--icpw-primary)' },
  'Семинар': { bg: 'color-mix(in srgb, var(--icpw-tertiary) 10%, transparent)', text: 'var(--icpw-tertiary)' },
  'Вебинар (бесплатно)': { bg: 'rgba(192,114,74,0.1)', text: '#c0724a' },
  'Программа': { bg: 'color-mix(in srgb, var(--icpw-tertiary) 10%, transparent)', text: 'var(--icpw-tertiary)' },
};

export function Events() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="mb-14">
        <div
          className="mb-3 uppercase tracking-widest text-xs"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', fontWeight: 600 }}
        >
          Афиша
        </div>
        <h1
          className="mb-5"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            color: 'var(--icpw-on-surface)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}
        >
          Предстоящие события
        </h1>
        <p
          className="text-base max-w-xl"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}
        >
          Семинары, интенсивы, вебинары и старты новых программ. 
          Следите за анонсами и записывайтесь заранее.
        </p>
      </div>

      {/* Events */}
      <div className="space-y-5">
        {events.map(event => {
          const colors = typeColors[event.type] || { bg: 'color-mix(in srgb, var(--icpw-primary) 10%, transparent)', text: 'var(--icpw-primary)' };
          return (
            <div
              key={event.id}
              className="rounded-2xl overflow-hidden transition-all duration-200"
              style={{ background: 'var(--icpw-surface-lowest)', boxShadow: '0 2px 12px rgba(47,52,46,0.06)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(47,52,46,0.1)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(47,52,46,0.06)'; }}
            >
              <div className="flex flex-col sm:flex-row">
                {/* Date block */}
                <div
                  className="sm:w-32 flex sm:flex-col items-center justify-center gap-2 sm:gap-0 p-5 sm:py-8"
                  style={{ background: colors.bg }}
                >
                  <Calendar size={22} style={{ color: colors.text }} />
                  <span
                    className="text-xs font-medium mt-0 sm:mt-2 text-center"
                    style={{ fontFamily: 'var(--font-body)', color: colors.text }}
                  >
                    {event.date}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                      style={{ background: colors.bg, color: colors.text, fontFamily: 'var(--font-body)' }}
                    >
                      {event.type}
                    </span>
                    <span className="flex items-center gap-1 text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-outline-variant)' }}>
                      <MapPin size={11} />
                      {event.location}
                    </span>
                  </div>
                  <h2
                    className="mb-2"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--icpw-on-surface)', lineHeight: 1.35 }}
                  >
                    {event.title}
                  </h2>
                  <p
                    className="text-sm mb-4"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.7 }}
                  >
                    {event.description}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors group"
                    style={{ color: colors.text, fontFamily: 'var(--font-body)', textDecoration: 'none' }}
                  >
                    Записаться / узнать подробнее
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Newsletter */}
      <div
        className="mt-12 p-8 rounded-2xl text-center"
        style={{ background: 'var(--icpw-surface-low)' }}
      >
        <h3
          className="mb-2"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--icpw-on-surface)' }}
        >
          Не пропустите новые события
        </h3>
        <p
          className="text-sm mb-5 max-w-sm mx-auto"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.7 }}
        >
          Оставьте свои контакты — мы будем сообщать вам о новых мероприятиях первыми.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm text-white transition-opacity hover:opacity-90"
          style={{
            background: 'linear-gradient(135deg, var(--icpw-primary) 0%, var(--icpw-primary-dim) 100%)',
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          Написать нам <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
