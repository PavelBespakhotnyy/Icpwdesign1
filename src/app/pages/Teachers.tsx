import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { teachers } from "../data";

export function Teachers() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="mb-14">
        <div
          className="mb-3 uppercase tracking-widest text-xs"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', fontWeight: 600 }}
        >
          Команда
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
          Наши преподаватели
        </h1>
        <p
          className="max-w-2xl text-base"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}
        >
          Все тренеры ICPW — дипломированные специалисты с многолетней клинической практикой и 
          международными сертификатами. Они не только преподают метод, но и живут им.
        </p>
      </div>

      {/* Teachers grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {teachers.map((teacher) => (
          <Link
            key={teacher.id}
            to={`/teachers/${teacher.id}`}
            className="group rounded-2xl overflow-hidden transition-all duration-300 block"
            style={{
              background: 'var(--icpw-surface-lowest)',
              boxShadow: '0 4px 20px rgba(47,52,46,0.06)',
              textDecoration: 'none',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 40px rgba(47,52,46,0.12)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(47,52,46,0.06)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; }}
          >
            {/* Photo */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
              <img
                src={teacher.photo}
                alt={teacher.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ objectPosition: 'center top' }}
              />
              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(47,52,46,0.6) 0%, transparent 50%)',
                }}
              />
              {/* Name on photo */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h2
                  className="text-white"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                  }}
                >
                  {teacher.name}
                </h2>
              </div>

              {/* Theme color accent stripe */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: teacher.theme.heroGradient }}
              />
            </div>

            {/* Info */}
            <div className="p-5">
              <p
                className="mb-3 text-xs"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.5 }}
              >
                {teacher.role}
              </p>
              <p
                className="text-sm mb-4"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.7 }}
              >
                {teacher.bio}
              </p>

              {/* Specializations */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {teacher.specialization.slice(0, 3).map(spec => (
                  <span
                    key={spec}
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: teacher.theme.tagBg,
                      color: teacher.theme.accent,
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {spec}
                  </span>
                ))}
              </div>

              <div
                className="flex items-center gap-1.5 text-sm font-medium transition-gap group-hover:gap-3"
                style={{ color: teacher.theme.accent, fontFamily: 'var(--font-body)' }}
              >
                Читать биографию
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
