import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { faqs } from "../data";
import { Link } from "react-router";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>('f1');

  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="mb-14">
        <div
          className="mb-3 uppercase tracking-widest text-xs"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', fontWeight: 600 }}
        >
          Помощь
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
          Часто задаваемые вопросы
        </h1>
        <p
          className="text-base"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}
        >
          Не нашли ответ? Напишите нам — мы ответим в течение 1–2 рабочих дней.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-3">
        {faqs.map(faq => (
          <div
            key={faq.id}
            className="rounded-2xl overflow-hidden transition-all duration-200"
            style={{
              background: 'var(--icpw-surface-lowest)',
              boxShadow: openId === faq.id ? '0 4px 20px rgba(47,52,46,0.08)' : '0 1px 4px rgba(47,52,46,0.04)',
            }}
          >
            <button
              className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 transition-colors"
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
            >
              <span
                className="text-sm flex-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  color: openId === faq.id ? 'var(--icpw-primary)' : 'var(--icpw-on-surface)',
                  lineHeight: 1.5,
                }}
              >
                {faq.question}
              </span>
              <ChevronDown
                size={18}
                className="shrink-0 transition-transform duration-200"
                style={{
                  color: openId === faq.id ? 'var(--icpw-primary)' : 'var(--icpw-outline-variant)',
                  transform: openId === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
                  marginTop: 2,
                }}
              />
            </button>

            {openId === faq.id && (
              <div
                className="px-6 pb-6"
              >
                <div
                  className="h-px mb-4"
                  style={{ background: 'rgba(175,179,172,0.2)' }}
                />
                <p
                  className="text-sm"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.85 }}
                >
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div
        className="mt-12 p-8 rounded-2xl text-center"
        style={{ background: 'var(--icpw-surface-low)' }}
      >
        <h2
          className="mb-2"
          style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.25rem', color: 'var(--icpw-on-surface)' }}
        >
          Остались вопросы?
        </h2>
        <p
          className="text-sm mb-5 max-w-sm mx-auto"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.7 }}
        >
          Мы всегда рады ответить. Напишите нам через форму обратной связи.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-lg text-sm transition-opacity hover:opacity-90"
          style={{
            background: 'linear-gradient(135deg, #50662b 0%, #455a20 100%)',
            color: '#ffffff',
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            textDecoration: 'none',
          }}
        >
          Написать нам <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
