import { Link } from "react-router";
import { Heart, ArrowRight, Star } from "lucide-react";
import { teachers } from "../data";

const graduates = [
  {
    id: "g1",
    name: "Анна Соколова",
    city: "Москва",
    specialization: "Индивидуальная терапия, кризисные состояния",
    contacts: "anna.sokolova@example.com",
    year: 2019,
    photo: "https://images.unsplash.com/photo-1729250829618-d02a3c0e8fdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
  },
  {
    id: "g2",
    name: "Павел Громов",
    city: "Санкт-Петербург",
    specialization: "Работа с травмой, телесная терапия",
    contacts: "pavel.gromov@example.com",
    year: 2020,
    photo: "https://images.unsplash.com/photo-1746813628081-0c8c1611aace?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
  },
  {
    id: "g3",
    name: "Елена Морозова",
    city: "Екатеринбург",
    specialization: "Семейная терапия, работа с парами",
    contacts: "elena.morozova@example.com",
    year: 2021,
    photo: "https://images.unsplash.com/photo-1772987057599-2f1088c1e993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=200",
  },
];

export function Therapy() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="mb-14">
        <div
          className="mb-3 uppercase tracking-widest text-xs"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', fontWeight: 600 }}
        >
          Терапия
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
          Личная терапия и супервизия
        </h1>
        <p
          className="max-w-2xl text-base"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}
        >
          Личная терапия является неотъемлемой частью профессионального роста в процессуальной работе. 
          Ниже представлены наши выпускники, которые принимают клиентов и супервизантов.
        </p>
      </div>

      {/* Why personal therapy */}
      <div
        className="rounded-2xl p-8 mb-12"
        style={{
          background: 'linear-gradient(135deg, rgba(80,102,43,0.06) 0%, rgba(14,103,129,0.05) 100%)',
        }}
      >
        <h2
          className="mb-4"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem', color: 'var(--icpw-on-surface)' }}
        >
          Почему важна личная терапия?
        </h2>
        <div className="space-y-3 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.85 }}>
          <p>В традиции процессуальной работы специалист, который помогает другим пройти через сложные переживания, сам должен знать этот путь изнутри. Личная терапия позволяет развить тонкое «внутреннее знание» — способность замечать, что происходит в пространстве сессии.</p>
          <p>Супервизия обеспечивает профессиональную поддержку и помогает справляться с трудными случаями, сохраняя баланс и профессиональные границы.</p>
        </div>
      </div>

      {/* Graduates list */}
      <h2
        className="mb-6"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.25rem', color: 'var(--icpw-on-surface)' }}
      >
        Рекомендуемые терапевты — наши выпускники
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
        {graduates.map(g => (
          <div
            key={g.id}
            className="rounded-2xl overflow-hidden"
            style={{ background: 'var(--icpw-surface-lowest)', boxShadow: '0 4px 16px rgba(47,52,46,0.07)' }}
          >
            <div className="relative" style={{ aspectRatio: '3/2' }}>
              <img
                src={g.photo}
                alt={g.name}
                className="w-full h-full object-cover object-top"
                style={{ filter: 'brightness(0.9)' }}
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-1.5 mb-1">
                <Star size={12} fill="currentColor" style={{ color: '#c49a1a' }} />
                <span className="text-xs" style={{ fontFamily: 'var(--font-body)', color: '#8b6914', fontWeight: 600 }}>
                  Выпускник {g.year}
                </span>
              </div>
              <h3
                className="mb-1"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--icpw-on-surface)' }}
              >
                {g.name}
              </h3>
              <p
                className="text-xs mb-3"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)' }}
              >
                {g.city}
              </p>
              <p
                className="text-xs mb-4"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.6 }}
              >
                {g.specialization}
              </p>
              <a
                href={`mailto:${g.contacts}`}
                className="text-xs"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-primary)', fontWeight: 600, textDecoration: 'none' }}
              >
                Написать →
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Trainers section */}
      <h2
        className="mb-6"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.25rem', color: 'var(--icpw-on-surface)' }}
      >
        Супервизия у тренеров ICPW
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {teachers.slice(0, 2).map(t => (
          <Link
            key={t.id}
            to={`/teachers/${t.id}`}
            className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
            style={{ background: 'var(--icpw-surface-lowest)', textDecoration: 'none', boxShadow: '0 2px 10px rgba(47,52,46,0.05)' }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(47,52,46,0.1)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 10px rgba(47,52,46,0.05)'; }}
          >
            <img
              src={t.photo}
              alt={t.name}
              className="w-14 h-14 rounded-full object-cover object-top shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div
                className="text-sm font-medium truncate"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--icpw-on-surface)' }}
              >
                {t.name}
              </div>
              <div
                className="text-xs truncate mb-1"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}
              >
                {t.role}
              </div>
            </div>
            <ArrowRight size={16} style={{ color: 'var(--icpw-primary)', shrink: 0 }} className="shrink-0" />
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div
        className="rounded-2xl p-7 text-center"
        style={{ background: 'var(--icpw-surface-low)' }}
      >
        <Heart size={28} className="mx-auto mb-3" style={{ color: 'var(--icpw-primary)' }} />
        <h3
          className="mb-2"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--icpw-on-surface)' }}
        >
          Хотите попасть в список рекомендуемых терапевтов?
        </h3>
        <p
          className="text-sm mb-4 max-w-sm mx-auto"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.7 }}
        >
          Если вы — выпускник ICPW и принимаете клиентов, напишите нам.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm text-white transition-opacity hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #50662b 0%, #455a20 100%)', fontFamily: 'var(--font-body)', fontWeight: 500, textDecoration: 'none' }}
        >
          Написать <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
