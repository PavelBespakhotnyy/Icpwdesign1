import { useParams, Link } from "react-router";
import { ArrowLeft, CheckCircle, Clock, GraduationCap, Calendar, Award, ArrowRight, Image } from "lucide-react";
import { programs } from "../data";

const certImg = "https://images.unsplash.com/photo-1759563875689-65fa889e2a62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600";

// Static pages for sidebar links
function DocumentsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
      <Link
        to="/programs"
        className="inline-flex items-center gap-2 mb-10 text-sm transition-colors"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', textDecoration: 'none' }}
      >
        <ArrowLeft size={15} />
        Все программы
      </Link>
      <div
        className="mb-3 uppercase tracking-widest text-xs"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', fontWeight: 600 }}
      >
        Документы
      </div>
      <h1
        className="mb-8"
        style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--icpw-on-surface)', lineHeight: 1.15 }}
      >
        Выдаваемые документы
      </h1>
      <p className="mb-10 text-sm max-w-2xl" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}>
        В зависимости от программы обучения наши выпускники получают различные документы об образовании, 
        признаваемые в России и за рубежом.
      </p>

      {/* Document cards */}
      <div className="space-y-6 mb-14">
        {[
          {
            title: "Международный диплом IAPOP",
            desc: "Выдаётся выпускникам Международной Сертификационной Программы. Признаётся в 20+ странах как профессиональный сертификат процессуального работника.",
            color: "linear-gradient(135deg, var(--icpw-primary) 0%, var(--icpw-primary-dim) 100%)",
          },
          {
            title: "Диплом ICPW",
            desc: "Диплом Международного Центра Процессуальной Работы. Выдаётся совместно с дипломом IAPOP.",
            color: "linear-gradient(135deg, var(--icpw-tertiary) 0%, color-mix(in srgb, var(--icpw-tertiary) 70%, black) 100%)",
          },
          {
            title: "Диплом о профессиональной переподготовке",
            desc: "Российский государственного образца диплом (520 часов). Выдаётся выпускникам программы переподготовки.",
            color: "linear-gradient(135deg, color-mix(in srgb, var(--icpw-primary) 60%, var(--icpw-tertiary)) 0%, var(--icpw-primary-dim) 100%)",
          },
          {
            title: "Удостоверение о повышении квалификации",
            desc: "Российский государственного образца документ. Выдаётся по завершении программ повышения квалификации.",
            color: "linear-gradient(135deg, color-mix(in srgb, var(--icpw-secondary) 80%, black) 0%, color-mix(in srgb, var(--icpw-secondary) 55%, black) 100%)",
          },
        ].map(doc => (
          <div
            key={doc.title}
            className="flex flex-col sm:flex-row gap-0 rounded-2xl overflow-hidden"
            style={{ background: 'var(--icpw-surface-lowest)', boxShadow: '0 4px 20px rgba(47,52,46,0.06)' }}
          >
            <div
              className="sm:w-2 shrink-0"
              style={{ background: doc.color, minHeight: 8 }}
            />
            <div className="p-6 flex-1">
              <h3
                className="mb-2"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem', color: 'var(--icpw-on-surface)' }}
              >
                {doc.title}
              </h3>
              <p
                className="text-sm"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.7 }}
              >
                {doc.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Sample certificate image */}
      <div>
        <h2 className="mb-5" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.25rem', color: 'var(--icpw-on-surface)' }}>
          Образцы документов
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="rounded-xl overflow-hidden" style={{ boxShadow: '0 4px 20px rgba(47,52,46,0.1)' }}>
            <img src={certImg} alt="Образец диплома" className="w-full object-cover" style={{ aspectRatio: '4/3' }} />
            <div className="p-3 text-center text-xs" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', background: 'var(--icpw-surface-low)' }}>
              Образец диплома (может отличаться от финального варианта)
            </div>
          </div>
          <div
            className="rounded-xl flex flex-col items-center justify-center gap-3 text-center p-8"
            style={{ background: 'var(--icpw-surface-low)', border: '2px dashed rgba(175,179,172,0.3)' }}
          >
            <Image size={32} style={{ color: 'var(--icpw-outline-variant)' }} />
            <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}>
              Фотографии реальных документов будут добавлены администратором
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CertificationTermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
      <Link
        to="/programs"
        className="inline-flex items-center gap-2 mb-10 text-sm transition-colors"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', textDecoration: 'none' }}
      >
        <ArrowLeft size={15} /> Все программы
      </Link>
      <div
        className="mb-3 uppercase tracking-widest text-xs"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', fontWeight: 600 }}
      >
        Требования
      </div>
      <h1 className="mb-8" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: 'var(--icpw-on-surface)', lineHeight: 1.15 }}>
        Условия сертификации
      </h1>
      <p className="mb-10 text-sm max-w-2xl" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}>
        Для получения международного диплома IAPOP необходимо выполнить ряд требований, 
        обеспечивающих высокое качество профессиональной подготовки.
      </p>
      <div className="space-y-4">
        {[
          { label: "Теоретическое обучение", hours: "не менее 300 часов", desc: "Посещение модулей программы, лекций и семинаров." },
          { label: "Личная терапия", hours: "не менее 100 часов", desc: "Индивидуальные сессии с дипломированным процессуальным работником." },
          { label: "Супервизия", hours: "не менее 50 часов", desc: "Обсуждение собственной практики с супервизором." },
          { label: "Практика", hours: "не менее 150 часов", desc: "Задокументированная работа с клиентами под супервизией." },
          { label: "Итоговая работа", hours: "письменный кейс", desc: "Подробное описание и анализ клинического случая или серии сессий." },
          { label: "Экзамен", hours: "устная защита", desc: "Защита итоговой работы перед комиссией тренеров ICPW." },
        ].map(req => (
          <div key={req.label} className="flex gap-5 p-5 rounded-xl" style={{ background: 'var(--icpw-surface-lowest)' }}>
            <CheckCircle size={20} className="shrink-0 mt-0.5" style={{ color: 'var(--icpw-primary)' }} />
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <span className="text-sm font-medium" style={{ fontFamily: 'var(--font-display)', color: 'var(--icpw-on-surface)' }}>{req.label}</span>
                <span className="text-xs px-2.5 py-0.5 rounded-full" style={{ background: 'color-mix(in srgb, var(--icpw-primary) 10%, transparent)', color: 'var(--icpw-primary)', fontFamily: 'var(--font-body)', fontWeight: 600 }}>{req.hours}</span>
              </div>
              <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.6 }}>{req.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProgramDetail() {
  const { slug } = useParams();

  if (slug === 'documents') return <DocumentsPage />;
  if (slug === 'certification-terms') return <CertificationTermsPage />;

  const program = programs.find(p => p.id === slug);

  if (!program) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--icpw-on-surface)' }}>Программа не найдена</h2>
        <Link to="/programs" className="mt-4 inline-block text-sm" style={{ color: 'var(--icpw-tertiary)', textDecoration: 'none' }}>← Все программы</Link>
      </div>
    );
  }

  const accentGradient = program.id === 'international-certification'
    ? 'linear-gradient(135deg, var(--icpw-primary) 0%, var(--icpw-primary-dim) 100%)'
    : program.id === 'retraining'
    ? 'linear-gradient(135deg, var(--icpw-tertiary) 0%, color-mix(in srgb, var(--icpw-tertiary) 70%, black) 100%)'
    : 'linear-gradient(135deg, color-mix(in srgb, var(--icpw-primary) 60%, var(--icpw-tertiary)) 0%, var(--icpw-primary-dim) 100%)';

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
      <Link
        to="/programs"
        className="inline-flex items-center gap-2 mb-10 text-sm transition-colors"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', textDecoration: 'none' }}
      >
        <ArrowLeft size={15} />
        Все программы
      </Link>

      {/* Hero */}
      <div
        className="rounded-2xl p-8 lg:p-12 mb-12 text-white relative overflow-hidden"
        style={{ background: accentGradient }}
      >
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.1)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-15px', right: '-15px', width: '110px', height: '110px', borderRadius: '50%', border: '1.5px solid rgba(255,255,255,0.15)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '150px', height: '150px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.08)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative' }}>
          <div className="text-xs uppercase tracking-widest mb-3 opacity-70" style={{ fontFamily: 'var(--font-body)', letterSpacing: '0.2em' }}>
            {program.level}
          </div>
          <h1
            className="mb-3"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', lineHeight: 1.2 }}
          >
            {program.title}
          </h1>
          <p className="text-sm opacity-80 italic mb-6" style={{ fontFamily: 'var(--font-body)' }}>{program.subtitle}</p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: <Clock size={14} />, label: program.duration },
              { icon: <GraduationCap size={14} />, label: program.format },
              ...(program.start ? [{ icon: <Calendar size={14} />, label: `Старт: ${program.start}` }] : []),
            ].map(item => (
              <div
                key={item.label}
                className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg"
                style={{ background: 'rgba(255,255,255,0.15)', fontFamily: 'var(--font-body)' }}
              >
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div style={{ width: 3, height: 22, borderRadius: 2, background: accentGradient }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--icpw-on-surface)' }}>
            О программе
          </h2>
        </div>
        <p
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.9, fontSize: '0.97rem' }}
        >
          {program.description}
        </p>
      </section>

      {/* Modules */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div style={{ width: 3, height: 22, borderRadius: 2, background: accentGradient }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--icpw-on-surface)' }}>
            Модули программы
          </h2>
        </div>
        <div className="space-y-3">
          {program.modules.map((module, i) => (
            <div
              key={module}
              className="flex items-start gap-4 p-5 rounded-xl transition-all duration-200"
              style={{ background: 'var(--icpw-surface-lowest)', boxShadow: '0 1px 6px rgba(47,52,46,0.05)' }}
            >
              <div
                className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                style={{ background: accentGradient, fontFamily: 'var(--font-display)' }}
              >
                {i + 1}
              </div>
              <p className="text-sm pt-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface)', lineHeight: 1.65 }}>
                {module}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Result */}
      <section className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div style={{ width: 3, height: 22, borderRadius: 2, background: accentGradient }} />
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--icpw-on-surface)' }}>
            Документ об образовании
          </h2>
        </div>
        <div
          className="flex items-start gap-5 p-6 rounded-2xl"
          style={{ background: 'var(--icpw-surface-lowest)', boxShadow: '0 2px 12px rgba(47,52,46,0.06)' }}
        >
          <div
            className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: 'color-mix(in srgb, var(--icpw-primary) 10%, transparent)' }}
          >
            <Award size={22} style={{ color: 'var(--icpw-primary)' }} />
          </div>
          <div>
            <p className="text-sm mb-3" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}>
              {program.result}
            </p>
            <Link
              to="/programs/documents"
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition-opacity hover:opacity-75"
              style={{ color: 'var(--icpw-primary)', fontFamily: 'var(--font-body)', textDecoration: 'none' }}
            >
              Образцы документов <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div
        className="rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
        style={{ background: 'color-mix(in srgb, var(--icpw-primary) 6%, var(--icpw-surface-lowest))' }}
      >
        <div>
          <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--icpw-on-surface)', marginBottom: 4 }}>
            Готовы начать?
          </p>
          <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}>
            Свяжитесь с нами — ответим на все вопросы
          </p>
        </div>
        <Link
          to="/contact"
          className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm transition-opacity hover:opacity-90"
          style={{
            background: accentGradient,
            color: '#ffffff',
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          Записаться <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
