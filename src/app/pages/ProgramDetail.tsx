import { useParams, Link } from "react-router";
import { ArrowLeft, CheckCircle, Clock, GraduationCap, Calendar, Award, ArrowRight, Image } from "lucide-react";
import { programs } from "../data";
import { useState } from "react";

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
            color: "linear-gradient(135deg, #50662b 0%, #455a20 100%)",
          },
          {
            title: "Диплом ICPW",
            desc: "Диплом Международного Центра Процессуальной Работы. Выдаётся совместно с дипломом IAPOP.",
            color: "linear-gradient(135deg, #0e6781 0%, #085060 100%)",
          },
          {
            title: "Диплом о профессиональной переподготовке",
            desc: "Российский государственного образца диплом (520 часов). Выдаётся выпускникам программы переподготовки.",
            color: "linear-gradient(135deg, #516170 0%, #3a4a58 100%)",
          },
          {
            title: "Удостоверение о повышении квалификации",
            desc: "Российский государственного образца документ. Выдаётся по завершении программ повышения квалификации.",
            color: "linear-gradient(135deg, #8b6914 0%, #4a3800 100%)",
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
                <span className="text-xs px-2.5 py-0.5 rounded-full" style={{ background: 'rgba(80,102,43,0.1)', color: 'var(--icpw-primary)', fontFamily: 'var(--font-body)', fontWeight: 600 }}>{req.hours}</span>
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
  const [activeTab, setActiveTab] = useState<'overview' | 'modules' | 'result'>('overview');

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
    ? 'linear-gradient(135deg, #50662b 0%, #455a20 100%)'
    : program.id === 'retraining'
    ? 'linear-gradient(135deg, #0e6781 0%, #085060 100%)'
    : 'linear-gradient(135deg, #516170 0%, #3a4a58 100%)';

  const tabs = [
    { key: 'overview', label: 'Обзор' },
    { key: 'modules', label: 'Модули' },
    { key: 'result', label: 'Документ' },
  ] as const;

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16">
      <Link
        to="/programs"
        className="inline-flex items-center gap-2 mb-10 text-sm transition-colors hover:text-[#2f342e]"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', textDecoration: 'none' }}
      >
        <ArrowLeft size={15} />
        Все программы
      </Link>

      {/* Hero */}
      <div
        className="rounded-2xl p-8 lg:p-10 mb-8 text-white"
        style={{ background: accentGradient }}
      >
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
        <div className="flex flex-wrap gap-4">
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

      {/* Tabs */}
      <div className="flex gap-1 mb-8 p-1 rounded-xl" style={{ background: 'var(--icpw-surface-low)' }}>
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className="flex-1 py-2.5 rounded-lg text-sm transition-all duration-200"
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: activeTab === tab.key ? 600 : 400,
              background: activeTab === tab.key ? 'var(--icpw-surface-lowest)' : 'transparent',
              color: activeTab === tab.key ? 'var(--icpw-on-surface)' : 'var(--icpw-on-surface-variant)',
              boxShadow: activeTab === tab.key ? '0 1px 4px rgba(47,52,46,0.06)' : 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'overview' && (
        <div>
          <p
            className="text-base mb-8"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.85 }}
          >
            {program.description}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg text-sm transition-opacity hover:opacity-90"
            style={{
              background: accentGradient,
              color: '#ffffff',
              fontFamily: 'var(--font-body)',
              fontWeight: 500,
              textDecoration: 'none',
            }}
          >
            Записаться <ArrowRight size={15} />
          </Link>
        </div>
      )}

      {activeTab === 'modules' && (
        <div className="space-y-3">
          {program.modules.map((module, i) => (
            <div
              key={module}
              className="flex items-start gap-4 p-4 rounded-xl"
              style={{ background: 'var(--icpw-surface-lowest)' }}
            >
              <div
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: accentGradient, color: '#fff', fontFamily: 'var(--font-display)' }}
              >
                {i + 1}
              </div>
              <p className="text-sm pt-0.5" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface)', lineHeight: 1.6 }}>
                {module}
              </p>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'result' && (
        <div className="flex flex-col items-center text-center p-10 rounded-2xl" style={{ background: 'var(--icpw-surface-lowest)' }}>
          <Award size={48} className="mb-4" style={{ color: 'var(--icpw-primary)' }} />
          <h3 className="mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.2rem', color: 'var(--icpw-on-surface)' }}>
            Документ об образовании
          </h3>
          <p className="text-sm max-w-md" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}>
            {program.result}
          </p>
          <Link
            to="/programs/documents"
            className="mt-6 text-sm"
            style={{ color: 'var(--icpw-tertiary)', fontFamily: 'var(--font-body)', fontWeight: 600, textDecoration: 'none' }}
          >
            Образцы документов →
          </Link>
        </div>
      )}
    </div>
  );
}
