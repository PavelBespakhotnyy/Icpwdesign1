import { useParams, Link } from "react-router";
import { ArrowLeft, Mail } from "lucide-react";
import { teachers } from "../data";

export function TeacherDetail() {
  const { id } = useParams();
  const teacher = teachers.find(t => t.id === id);

  if (!teacher) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--icpw-on-surface)' }}>Преподаватель не найден</h2>
        <Link to="/teachers" className="mt-4 inline-block text-sm" style={{ color: 'var(--icpw-tertiary)', textDecoration: 'none' }}>← Все преподаватели</Link>
      </div>
    );
  }

  return (
    <div style={{ background: teacher.theme.bg, minHeight: '100vh' }}>
      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{ minHeight: '55vh' }}
      >
        {/* Background photo */}
        <div className="absolute inset-0">
          <img
            src={teacher.photo}
            alt={teacher.name}
            className="w-full h-full object-cover object-top"
            style={{ filter: 'brightness(0.45)' }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, rgba(47,52,46,0.3) 0%, rgba(47,52,46,0.8) 100%)`,
            }}
          />
        </div>

        {/* Navigation */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 pt-8">
          <Link
            to="/teachers"
            className="inline-flex items-center gap-2 text-sm"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.7)',
              textDecoration: 'none',
            }}
          >
            <ArrowLeft size={15} />
            Все преподаватели
          </Link>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-10 pb-12 pt-6">
          {/* Colored stripe */}
          <div
            className="w-12 h-1 rounded-full mb-5"
            style={{ background: teacher.theme.heroGradient }}
          />
          <h1
            className="mb-2"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            {teacher.name}
          </h1>
          <p
            className="text-sm max-w-xl"
            style={{
              fontFamily: 'var(--font-body)',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}
          >
            {teacher.role}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main bio */}
          <div className="lg:col-span-2">
            <h2
              className="mb-5"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem', color: 'var(--icpw-on-surface)' }}
            >
              Биография
            </h2>
            <div
              className="space-y-4 text-sm"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.9 }}
            >
              {teacher.fullBio.split('\n\n').map((para, i) => (
                <p key={i}>{para.trim()}</p>
              ))}
            </div>

            {/* Contact CTA */}
            <div
              className="mt-8 p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.7)', boxShadow: '0 2px 16px rgba(47,52,46,0.06)' }}
            >
              <p
                className="text-sm mb-4"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.7 }}
              >
                Хотите записаться на индивидуальную сессию или супервизию? Свяжитесь с нами.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm text-white transition-opacity hover:opacity-90"
                style={{
                  background: teacher.theme.heroGradient,
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
              >
                <Mail size={14} />
                Написать нам
              </Link>
            </div>
          </div>

          {/* Sidebar info */}
          <div className="space-y-6">
            {/* Specialization */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.7)', boxShadow: '0 2px 16px rgba(47,52,46,0.06)' }}
            >
              <h3
                className="mb-4 text-xs uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-body)', color: teacher.theme.accent, fontWeight: 600 }}
              >
                Специализация
              </h3>
              <div className="flex flex-wrap gap-2">
                {teacher.specialization.map(spec => (
                  <span
                    key={spec}
                    className="text-xs px-3 py-1.5 rounded-full"
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
            </div>

            {/* Education */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: 'rgba(255,255,255,0.7)', boxShadow: '0 2px 16px rgba(47,52,46,0.06)' }}
            >
              <h3
                className="mb-4 text-xs uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-body)', color: teacher.theme.accent, fontWeight: 600 }}
              >
                Образование
              </h3>
              <ul className="space-y-3">
                {teacher.education.map(edu => (
                  <li
                    key={edu}
                    className="flex items-start gap-2.5 text-xs"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.6 }}
                  >
                    <div
                      className="shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                      style={{ background: teacher.theme.accent }}
                    />
                    {edu}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Other teachers */}
        <div className="mt-16">
          <h2
            className="mb-6"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.25rem', color: 'var(--icpw-on-surface)' }}
          >
            Другие преподаватели
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {teachers.filter(t => t.id !== teacher.id).map(t => (
              <Link
                key={t.id}
                to={`/teachers/${t.id}`}
                className="flex items-center gap-3 p-4 rounded-xl transition-all duration-200 group"
                style={{ background: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.9)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.6)'; }}
              >
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover object-top shrink-0"
                />
                <div className="min-w-0">
                  <div
                    className="text-xs font-medium truncate"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--icpw-on-surface)' }}
                  >
                    {t.name.split(' ').slice(0, 2).join(' ')}
                  </div>
                  <div
                    className="text-xs truncate"
                    style={{ fontFamily: 'var(--font-body)', color: t.theme.accent }}
                  >
                    Подробнее →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
