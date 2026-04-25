import { useState } from "react";
import { Play, Quote, ChevronDown } from "lucide-react";
import { reviews } from "../data";

export function Reviews() {
  const written = reviews.filter(r => r.type === 'written');
  const videos = reviews.filter(r => r.type === 'video');
  const [showAll, setShowAll] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const visibleReviews = showAll ? written : written.slice(0, 1);

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="mb-14">
        <div
          className="mb-3 uppercase tracking-widest text-xs"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', fontWeight: 600 }}
        >
          Что говорят наши выпускники
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
          Отзывы
        </h1>
      </div>

      {/* ======================================== */}
      {/* Written reviews */}
      {/* ======================================== */}
      <section className="mb-16">
        <h2
          className="mb-8"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.5rem', color: 'var(--icpw-on-surface)' }}
        >
          Письменные отзывы
        </h2>

        <div className="space-y-5">
          {visibleReviews.map(review => (
            <div
              key={review.id}
              className="relative p-7 rounded-2xl"
              style={{ background: 'var(--icpw-surface-lowest)', boxShadow: '0 4px 20px rgba(47,52,46,0.06)' }}
            >
              {/* Quote icon */}
              <Quote
                size={36}
                className="absolute top-6 right-6 opacity-8"
                style={{ color: 'var(--icpw-primary)', opacity: 0.08 }}
              />
              <p
                className="text-sm leading-relaxed mb-6 relative z-10"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.85 }}
              >
                «{review.text}»
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, var(--icpw-primary) 0%, var(--icpw-primary-dim) 100%)',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {review.author[0]}
                </div>
                <div>
                  <div
                    className="text-sm font-medium"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--icpw-on-surface)' }}
                  >
                    {review.author}
                  </div>
                  <div
                    className="text-xs"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}
                  >
                    {review.role}{review.city ? ` · ${review.city}` : ''} · {review.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more button */}
        {!showAll && written.length > 1 && (
          <button
            onClick={() => setShowAll(true)}
            className="mt-6 w-full py-4 rounded-2xl flex items-center justify-center gap-2 text-sm transition-all duration-200"
            style={{
              background: 'var(--icpw-surface-low)',
              color: 'var(--icpw-primary)',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(80,102,43,0.08)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--icpw-surface-low)'; }}
          >
            <ChevronDown size={16} />
            Показать все {written.length} отзыва
          </button>
        )}

        {showAll && (
          <button
            onClick={() => setShowAll(false)}
            className="mt-4 w-full py-3 rounded-xl flex items-center justify-center gap-2 text-xs transition-all duration-200"
            style={{
              color: 'var(--icpw-outline-variant)',
              fontFamily: 'var(--font-body)',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Свернуть
          </button>
        )}
      </section>

      {/* ======================================== */}
      {/* Video reviews */}
      {/* ======================================== */}
      <section>
        <h2
          className="mb-8"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.5rem', color: 'var(--icpw-on-surface)' }}
        >
          Видеоотзывы
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {videos.map(video => (
            <div
              key={video.id}
              className="rounded-2xl overflow-hidden"
              style={{ background: 'var(--icpw-surface-lowest)', boxShadow: '0 4px 20px rgba(47,52,46,0.06)' }}
            >
              {/* Video player or thumbnail */}
              {activeVideo === video.id ? (
                <div style={{ aspectRatio: '16/9', background: '#000' }}>
                  <iframe
                    src={video.videoUrl}
                    title={video.text}
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
                    src={video.videoThumb}
                    alt={video.author}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: 'rgba(47,52,46,0.35)' }}
                  >
                    <div
                      className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110"
                      style={{ background: 'rgba(255,255,255,0.92)', boxShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
                    >
                      <Play size={22} style={{ color: 'var(--icpw-primary)', marginLeft: 3 }} fill="currentColor" />
                    </div>
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="p-5">
                <div
                  className="text-sm font-medium mb-1"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--icpw-on-surface)' }}
                >
                  {video.author}
                </div>
                <div
                  className="text-xs"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}
                >
                  {video.role}{video.city ? ` · ${video.city}` : ''} · {video.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state placeholder */}
        <div
          className="mt-5 p-6 rounded-2xl text-center"
          style={{ background: 'var(--icpw-surface-low)', border: '2px dashed rgba(175,179,172,0.3)' }}
        >
          <p
            className="text-sm"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-outline-variant)' }}
          >
            Новые видеоотзывы скоро появятся. Если вы хотите поделиться своим опытом — напишите нам.
          </p>
        </div>
      </section>
    </div>
  );
}
