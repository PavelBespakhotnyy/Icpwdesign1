import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const stages = [
  {
    num: '01',
    title: 'Базовая подготовка',
    desc: 'Прохождение не менее 2 уровней обучения в сертифицированном центре IAPOP (ICPW). Минимальный объём — 200 учебных часов теории и практики.',
  },
  {
    num: '02',
    title: 'Личная терапия',
    desc: 'Не менее 50 часов индивидуальной работы с аккредитованным практиком процессуальной работы. Это обязательное условие для получения любого уровня сертификата IAPOP.',
  },
  {
    num: '03',
    title: 'Супервизия',
    desc: 'Не менее 40 часов профессиональной супервизии вашей практики у сертифицированного тренера IAPOP. Индивидуально или в группе.',
  },
  {
    num: '04',
    title: 'Клиентская практика',
    desc: 'Документированная практика с клиентами: минимум 150 часов работы под наблюдением и самостоятельно.',
  },
  {
    num: '05',
    title: 'Письменная работа',
    desc: 'Написание и защита итоговой письменной работы, демонстрирующей интеграцию концепций и методов процессуальной работы.',
  },
  {
    num: '06',
    title: 'Аттестация',
    desc: 'Итоговая оценочная сессия с комитетом тренеров. По результатам присваивается сертификат соответствующего уровня IAPOP.',
  },
];

const levels = [
  { title: 'Начальный уровень', subtitle: 'Entry-level Practitioner', desc: 'Базовая квалификация для работы под наблюдением. Признаётся организациями-членами IAPOP по всему миру.', docs: ['Диплом ICPW о проф. переподготовке', 'Сертификат IAPOP начального уровня'] },
  { title: 'Практик', subtitle: 'Practitioner', desc: 'Полная квалификация для самостоятельной практики. Требует дополнительного обучения после начального уровня.', docs: ['Сертификат IAPOP Practitioner'] },
  { title: 'Дипломированный практик', subtitle: 'Diplomate', desc: 'Высшая практическая квалификация IAPOP. Требует многолетней задокументированной практики.', docs: ['Сертификат IAPOP Diplomate'] },
];

export default function Certification() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div style={{ marginBottom: '48px' }}>
        <p style={{ fontSize: '0.7rem', color: 'var(--icpw-primary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>
          Профессиональное признание
        </p>
        <h1
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: '#2f342e',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}
        >
          Условия сертификации
        </h1>
        <p style={{ color: '#5c605a', fontSize: '0.975rem', lineHeight: 1.7, maxWidth: '560px' }}>
          Сертификация IAPOP (International Association of Process Oriented Psychology) — международный стандарт качества для практиков процессуальной работы.
        </p>
      </div>

      {/* IAPOP Levels */}
      <section style={{ marginBottom: '64px' }}>
        <h2
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: '1.3rem',
            color: '#2f342e',
            letterSpacing: '-0.01em',
            marginBottom: '24px',
          }}
        >
          Уровни квалификации IAPOP
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {levels.map((level, i) => (
            <div
              key={level.title}
              style={{
                backgroundColor: i === 0 ? '#ffffff' : '#fafaf5',
                borderRadius: '14px',
                padding: '22px',
                boxShadow: i === 0 ? '0 8px 24px rgba(47,52,46,0.07)' : 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {i === 0 && (
                <div style={{ position: 'absolute', top: '12px', right: '12px', backgroundColor: 'color-mix(in srgb, var(--icpw-primary) 10%, transparent)', borderRadius: '6px', padding: '3px 8px' }}>
                  <p style={{ fontSize: '0.65rem', color: 'var(--icpw-primary)', fontWeight: 600, letterSpacing: '0.05em' }}>Наша программа</p>
                </div>
              )}
              <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: '1rem', color: '#2f342e', lineHeight: 1.3, marginBottom: '4px' }}>{level.title}</p>
              <p style={{ fontSize: '0.75rem', color: '#787c75', marginBottom: '12px', fontStyle: 'italic' }}>{level.subtitle}</p>
              <p style={{ color: '#5c605a', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '14px' }}>{level.desc}</p>
              <div>
                {level.docs.map(doc => (
                  <div key={doc} style={{ display: 'flex', gap: '6px', marginBottom: '4px' }}>
                    <Check size={13} style={{ color: 'var(--icpw-primary)', marginTop: '2px', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.8rem', color: '#5c605a' }}>{doc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stages */}
      <section style={{ marginBottom: '64px' }}>
        <h2
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: '1.3rem',
            color: '#2f342e',
            letterSpacing: '-0.01em',
            marginBottom: '24px',
          }}
        >
          Этапы сертификации
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {stages.map((stage) => (
            <div
              key={stage.num}
              style={{
                display: 'grid',
                gridTemplateColumns: '56px 1fr',
                gap: '16px',
                backgroundColor: '#f3f4ee',
                borderRadius: '12px',
                padding: '18px 20px',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  backgroundColor: 'rgba(80,102,43,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <span style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: '0.8rem', color: 'var(--icpw-primary)' }}>{stage.num}</span>
              </div>
              <div>
                <p style={{ fontWeight: 600, color: '#2f342e', fontSize: '0.95rem', marginBottom: '4px' }}>{stage.title}</p>
                <p style={{ color: '#5c605a', fontSize: '0.85rem', lineHeight: 1.6 }}>{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ backgroundColor: '#f3f4ee', borderRadius: '16px', padding: '32px' }}>
        <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#2f342e', marginBottom: '8px' }}>
          Готовы начать путь к сертификации?
        </p>
        <p style={{ color: '#5c605a', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '20px', maxWidth: '480px' }}>
          Наша сертификационная программа — это прямой путь к получению международного сертификата IAPOP.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link
            to="/programs/certification"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '11px 24px', borderRadius: '8px',
              background: 'linear-gradient(135deg, var(--icpw-primary), var(--icpw-primary-dim))',
              color: '#ffffff', textDecoration: 'none',
              fontFamily: "'Work Sans', sans-serif", fontWeight: 500, fontSize: '0.9rem',
            }}
          >
            Сертификационная программа <ArrowRight size={14} />
          </Link>
          <Link
            to="/contacts"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '11px 24px', borderRadius: '8px',
              backgroundColor: '#ffffff', color: 'var(--icpw-primary)', textDecoration: 'none',
              fontFamily: "'Work Sans', sans-serif", fontWeight: 500, fontSize: '0.9rem',
            }}
          >
            Задать вопрос
          </Link>
        </div>
      </div>
    </div>
  );
}
