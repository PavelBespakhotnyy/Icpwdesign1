import { useState } from "react";
import { Play } from "lucide-react";

const videos = [
  {
    id: "v1",
    title: "Что такое процессуальная работа? Арнольд Минделл",
    description: "Основатель метода объясняет суть процессуально-ориентированной психологии на доступном языке.",
    duration: "18 мин",
    thumb: "https://images.unsplash.com/photo-1627257058738-001d206ba180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "v2",
    title: "Работа со сновидящим телом",
    description: "Демонстрация работы с телесными симптомами как посланиями бессознательного.",
    duration: "24 мин",
    thumb: "https://images.unsplash.com/photo-1595554919503-b806f0f8f106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "v3",
    title: "Мировая работа: конфликт как ресурс",
    description: "Введение в мировую работу — применение процессуального подхода к социальным конфликтам.",
    duration: "32 мин",
    thumb: "https://images.unsplash.com/photo-1764728671460-34931d8261f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "v4",
    title: "Ранг и привилегия в группе",
    description: "Как осознание психологического ранга меняет качество групповых взаимодействий.",
    duration: "21 мин",
    thumb: "https://images.unsplash.com/photo-1595554919503-b806f0f8f106?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export function AboutProcessWork() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="mb-14">
        <div
          className="mb-3 uppercase tracking-widest text-xs"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', fontWeight: 600 }}
        >
          Метод
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
          О процессуальной работе
        </h1>
        <p
          className="max-w-2xl text-base"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}
        >
          Process Work (процессуально-ориентированная психология) — живой, постоянно развивающийся 
          метод, который соединяет психологию, физику, шаманизм и философию в единый язык следования за жизнью.
        </p>
      </div>

      {/* About method */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem', color: 'var(--icpw-on-surface)' }}>
            История и основы
          </h2>
          <div className="space-y-4 text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.9 }}>
            <p>Процессуальная работа была разработана американским физиком и юнгианским аналитиком Арнольдом Минделлом в 1970-х годах. Изначально называясь «Дримворк» (Dreamwork), метод постепенно расширился до комплексного подхода к человеческому опыту во всей его полноте.</p>
            <p>В основе метода лежит концепция «процесса» — потока переживаний, который проявляется одновременно в снах, телесных симптомах, движениях, отношениях и социальных событиях. Задача процессуального работника — следовать за этим потоком, а не форсировать изменения.</p>
            <p>Сегодня процессуальная работа применяется в психотерапии, медицине, образовании, организационном развитии и разрешении международных конфликтов.</p>
          </div>
        </div>
        <div>
          <h2 className="mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem', color: 'var(--icpw-on-surface)' }}>
            Ключевые концепции
          </h2>
          <div className="space-y-3">
            {[
              { term: "Первичный и вторичный процесс", def: "Разделение переживания на то, с чем мы идентифицируемся, и то, что воспринимаем как чуждое или мешающее." },
              { term: "Сновидящее тело", def: "Связь между снами ночи и телесными симптомами дня — единый язык бессознательного." },
              { term: "Мировая работа", def: "Применение процессуального подхода к групповым и социальным конфликтам, включая политические." },
              { term: "Ранг и привилегия", def: "Осознание социального, психологического и духовного ранга как фактора динамики взаимодействий." },
            ].map(item => (
              <div
                key={item.term}
                className="p-4 rounded-xl"
                style={{ background: 'var(--icpw-surface-lowest)', boxShadow: '0 1px 8px rgba(47,52,46,0.04)' }}
              >
                <div
                  className="text-sm font-semibold mb-1"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--icpw-primary)' }}
                >
                  {item.term}
                </div>
                <div
                  className="text-xs"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.65 }}
                >
                  {item.def}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Videos section */}
      <div id="videos">
        <h2
          className="mb-8"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.5rem', color: 'var(--icpw-on-surface)' }}
        >
          Полезные видео
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {videos.map(video => (
            <div
              key={video.id}
              className="rounded-2xl overflow-hidden"
              style={{ background: 'var(--icpw-surface-lowest)', boxShadow: '0 4px 16px rgba(47,52,46,0.07)' }}
            >
              {activeVideo === video.id ? (
                <div style={{ aspectRatio: '16/9', background: '#000' }}>
                  <iframe
                    src={video.videoUrl}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <div
                  className="relative cursor-pointer group"
                  style={{ aspectRatio: '16/9' }}
                  onClick={() => setActiveVideo(video.id)}
                >
                  <img
                    src={video.thumb}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: 'rgba(47,52,46,0.4)' }}
                  >
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                      style={{ background: 'rgba(255,255,255,0.9)' }}
                    >
                      <Play size={18} style={{ color: 'var(--icpw-primary)', marginLeft: 2 }} fill="currentColor" />
                    </div>
                  </div>
                  <div
                    className="absolute bottom-2 right-2 px-2 py-0.5 rounded text-xs"
                    style={{ background: 'rgba(0,0,0,0.7)', color: '#fff', fontFamily: 'var(--font-body)' }}
                  >
                    {video.duration}
                  </div>
                </div>
              )}
              <div className="p-5">
                <h3
                  className="mb-1.5"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--icpw-on-surface)', lineHeight: 1.4 }}
                >
                  {video.title}
                </h3>
                <p
                  className="text-xs"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.6 }}
                >
                  {video.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
