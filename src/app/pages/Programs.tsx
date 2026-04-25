import { Link } from "react-router";
import { ArrowRight, Clock, GraduationCap, Calendar, CheckCircle } from "lucide-react";
import { programs } from "../data";

const cardAccents = [
  {
    bg: 'linear-gradient(135deg, var(--icpw-primary) 0%, var(--icpw-primary-dim) 100%)',
    badge: 'rgba(255,255,255,0.15)',
  },
  {
    bg: 'linear-gradient(135deg, var(--icpw-tertiary) 0%, color-mix(in srgb, var(--icpw-tertiary) 70%, black) 100%)',
    badge: 'rgba(255,255,255,0.15)',
  },
  {
    bg: 'linear-gradient(135deg, color-mix(in srgb, var(--icpw-primary) 60%, var(--icpw-tertiary)) 0%, color-mix(in srgb, var(--icpw-primary-dim) 55%, black) 100%)',
    badge: 'rgba(255,255,255,0.15)',
  },
];

export function Programs() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="mb-14">
        <div
          className="mb-3 uppercase tracking-widest text-xs"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', fontWeight: 600 }}
        >
          Образование
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
          Наши программы
        </h1>
        <p
          className="max-w-2xl text-base"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}
        >
          ICPW предлагает образовательные программы разного уровня — от краткосрочного
          повышения квалификации до полной международной сертификации. Выберите путь,
          подходящий именно вам.
        </p>
      </div>

      {/* Programs list */}
      <div className="space-y-8">
        {programs.map((program, i) => {
          const accent = cardAccents[i % cardAccents.length];
          return (
            <div
              key={program.id}
              className="rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                background: 'var(--icpw-surface-lowest)',
                boxShadow: '0 4px 24px rgba(47,52,46,0.07)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Accent column */}
                <div
                  className="p-8 flex flex-col justify-between relative overflow-hidden"
                  style={{ background: accent.bg, color: '#ffffff' }}
                >
                  {/* Decorative circles */}
                  <div style={{
                    position: 'absolute', top: '-40px', right: '-40px',
                    width: '160px', height: '160px', borderRadius: '50%',
                    border: '1.5px solid rgba(255,255,255,0.12)',
                    pointerEvents: 'none',
                  }} />
                  <div style={{
                    position: 'absolute', top: '-10px', right: '-10px',
                    width: '90px', height: '90px', borderRadius: '50%',
                    border: '1.5px solid rgba(255,255,255,0.18)',
                    pointerEvents: 'none',
                  }} />
                  <div style={{
                    position: 'absolute', bottom: '-30px', left: '-30px',
                    width: '120px', height: '120px', borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.1)',
                    pointerEvents: 'none',
                  }} />

                  <div style={{ position: 'relative' }}>
                    <div
                      className="text-xs uppercase tracking-widest mb-3 opacity-70"
                      style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.2em' }}
                    >
                      {program.level}
                    </div>
                    <h2
                      className="mb-2"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1.25rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {program.title}
                    </h2>
                    <p
                      className="text-xs opacity-75"
                      style={{ fontFamily: 'var(--font-body)', fontStyle: 'italic' }}
                    >
                      {program.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-col gap-2" style={{ position: 'relative' }}>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <Clock size={14} />
                      <span style={{ fontFamily: 'var(--font-body)' }}>{program.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <GraduationCap size={14} />
                      <span style={{ fontFamily: 'var(--font-body)' }}>{program.format}</span>
                    </div>
                    {program.start && (
                      <div
                        className="flex items-center gap-2 text-sm mt-2 px-3 py-1.5 rounded-lg w-fit"
                        style={{ background: 'rgba(255,255,255,0.18)', fontFamily: 'var(--font-body)', fontWeight: 600 }}
                      >
                        <Calendar size={14} />
                        Старт: {program.start}
                      </div>
                    )}
                  </div>
                </div>

                {/* Content column */}
                <div className="lg:col-span-2 p-8 flex flex-col justify-between">
                  <div>
                    <p
                      className="text-sm mb-6"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}
                    >
                      {program.description}
                    </p>
                    <h4
                      className="mb-3 text-xs uppercase tracking-widest"
                      style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-outline-variant)', fontWeight: 600 }}
                    >
                      Модули программы
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {program.modules.slice(0, 5).map(module => (
                        <li
                          key={module}
                          className="flex items-start gap-2.5 text-sm"
                          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}
                        >
                          <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: 'var(--icpw-primary)' }} />
                          {module}
                        </li>
                      ))}
                      {program.modules.length > 5 && (
                        <li
                          className="text-xs pl-6"
                          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-outline-variant)' }}
                        >
                          + ещё {program.modules.length - 5} модулей
                        </li>
                      )}
                    </ul>
                    <div
                      className="text-xs px-4 py-2.5 rounded-lg inline-block"
                      style={{
                        background: 'color-mix(in srgb, var(--icpw-primary) 8%, transparent)',
                        color: 'var(--icpw-primary)',
                        fontFamily: 'var(--font-body)',
                        fontWeight: 600,
                      }}
                    >
                      Результат: {program.result}
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      to={`/programs/${program.id}`}
                      className="flex items-center gap-2 w-fit text-sm transition-colors group"
                      style={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--icpw-primary)',
                        textDecoration: 'none',
                        fontWeight: 600,
                      }}
                    >
                      Подробнее о программе
                      <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div
        className="mt-14 rounded-2xl p-8 text-center"
        style={{ background: 'var(--icpw-surface-low)' }}
      >
        <h2
          className="mb-3"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.5rem', color: 'var(--icpw-on-surface)' }}
        >
          Не знаете, с чего начать?
        </h2>
        <p
          className="mb-6 text-sm max-w-lg mx-auto"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}
        >
          Запишитесь на бесплатную консультацию — мы поможем выбрать программу,
          которая подходит именно вам и вашим целям.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm transition-opacity hover:opacity-90"
          style={{
            background: 'linear-gradient(135deg, var(--icpw-primary) 0%, var(--icpw-primary-dim) 100%)',
            color: '#ffffff',
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          Написать нам <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
