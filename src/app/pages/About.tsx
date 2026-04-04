import { Link } from "react-router";
import { ArrowRight, Globe, Award, Users, BookOpen } from "lucide-react";

const workshopImg = "https://images.unsplash.com/photo-1595554919503-b806f0f8f106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export function About() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
      {/* Page Header */}
      <div className="mb-14">
        <div
          className="mb-3 uppercase tracking-widest text-xs"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', fontWeight: 600 }}
        >
          О центре
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
          Международный Центр<br />Процессуальной Работы
        </h1>
        <p
          className="max-w-2xl text-base"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}
        >
          ICPW — это профессиональный образовательный и терапевтический центр, основанный 
          практикующими специалистами в области процессуально-ориентированной психологии. 
          Мы объединяем глубину академической традиции с живой практикой трансформации.
        </p>
      </div>

      {/* Image + intro text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="relative">
          <img
            src={workshopImg}
            alt="Семинар ICPW"
            className="w-full rounded-2xl object-cover"
            style={{ aspectRatio: '4/3', filter: 'brightness(0.95)' }}
          />
          <div
            className="absolute -bottom-4 -right-4 px-6 py-4 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, #50662b 0%, #455a20 100%)',
              color: '#fff',
              boxShadow: '0 8px 32px rgba(80,102,43,0.25)',
            }}
          >
            <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>15+</div>
            <div className="text-xs opacity-85 mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>лет в России</div>
          </div>
        </div>
        <div>
          <h2
            className="mb-5"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '1.5rem',
              color: 'var(--icpw-on-surface)',
            }}
          >
            Наша история
          </h2>
          <div className="space-y-4 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}>
            <p>
              ICPW был основан группой российских специалистов, прошедших обучение у Арнольда Минделла 
              и других пионеров процессуальной работы в США, Европе и Австралии. С первых дней своего 
              существования мы стремились не просто передавать знания, но создавать живое сообщество 
              практиков.
            </p>
            <p>
              Сегодня наш центр аккредитован Международной Ассоциацией Процессуально-Ориентированной 
              Психологии (IAPOP) и является единственной организацией в России, предлагающей полную 
              сертификационную программу с признанием на международном уровне.
            </p>
            <p>
              За годы работы мы подготовили более 200 дипломированных специалистов, которые сегодня 
              практикуют в России, Европе, Израиле и других странах.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2
          className="mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
            fontSize: '1.5rem',
            color: 'var(--icpw-on-surface)',
          }}
        >
          Наши ценности
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            {
              icon: <Globe size={22} />,
              title: "Международные стандарты",
              text: "Наши программы соответствуют стандартам IAPOP и открывают двери в международное сообщество процессуальных работников."
            },
            {
              icon: <Award size={22} />,
              title: "Глубина и качество",
              text: "Мы не идём на компромисс с качеством. Каждый тренер ICPW — это дипломированный специалист с многолетней практикой."
            },
            {
              icon: <Users size={22} />,
              title: "Живое сообщество",
              text: "Обучение в ICPW — это не только курс лекций, но и вхождение в тёплое, поддерживающее профессиональное сообщество."
            },
            {
              icon: <BookOpen size={22} />,
              title: "Интеграция теории и практики",
              text: "Каждый концепт осваивается через живой опыт. Мы учим не техникам, а способности присутствовать и следовать за процессом."
            },
          ].map(item => (
            <div
              key={item.title}
              className="p-6 rounded-xl"
              style={{ background: 'var(--icpw-surface-lowest)', boxShadow: '0 2px 16px rgba(47,52,46,0.05)' }}
            >
              <div
                className="mb-4 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(80,102,43,0.1)', color: 'var(--icpw-primary)' }}
              >
                {item.icon}
              </div>
              <h3
                className="mb-2"
                style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1rem', color: 'var(--icpw-on-surface)' }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.7 }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* About Process Work */}
      <div
        className="rounded-2xl p-8 lg:p-10 mb-10"
        style={{
          background: 'linear-gradient(135deg, rgba(80,102,43,0.06) 0%, rgba(14,103,129,0.05) 100%)',
        }}
      >
        <h2
          className="mb-4"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.5rem', color: 'var(--icpw-on-surface)' }}
        >
          О процессуальной работе
        </h2>
        <div className="space-y-4 text-sm mb-6" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}>
          <p>
            Процессуально-ориентированная психология (Process Work) — это интегративный подход к 
            психотерапии, личностному развитию и работе с группами, разработанный Арнольдом 
            Минделлом в 1970-х годах. В его основе лежит идея о том, что любой симптом, сон, 
            телесное переживание или социальный конфликт несёт в себе смысл и направление.
          </p>
          <p>
            Процессуальная работа применяется в индивидуальной терапии, работе с парами, 
            группами и целыми сообществами. Метод признан и используется в более чем 30 странах 
            мира, а его выпускники работают в больницах, образовате��ьных учреждениях, 
            организациях и частной практике.
          </p>
        </div>
        <Link
          to="/about-process-work"
          className="flex items-center gap-2 w-fit text-sm transition-colors"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', textDecoration: 'none', fontWeight: 600 }}
        >
          Подробнее о методе <ArrowRight size={15} />
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { num: '200+', label: 'выпускников' },
          { num: '15+', label: 'лет в России' },
          { num: '20+', label: 'стран признания' },
          { num: '4', label: 'тренера' },
        ].map(s => (
          <div
            key={s.label}
            className="text-center p-6 rounded-xl"
            style={{ background: 'var(--icpw-surface-lowest)' }}
          >
            <div
              className="text-3xl font-bold mb-1"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--icpw-primary)' }}
            >
              {s.num}
            </div>
            <div
              className="text-xs"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
