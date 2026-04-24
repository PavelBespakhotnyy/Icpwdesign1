export function Graduates() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
      <div
        className="mb-2 uppercase tracking-widest text-xs"
        style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-primary)', fontWeight: 600 }}
      >
        Сообщество
      </div>
      <h1
        className="mb-4"
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          color: 'var(--icpw-on-surface)',
          lineHeight: 1.2,
        }}
      >
        Наши выпускники
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          color: 'var(--icpw-on-surface-variant)',
          lineHeight: 1.75,
          fontSize: '0.95rem',
          maxWidth: '600px',
        }}
      >
        Здесь будут представлены выпускники ICPW — практикующие специалисты в области
        процессуально-ориентированной психологии.
      </p>
    </div>
  );
}
