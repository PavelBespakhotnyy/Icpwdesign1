import { Mail, Phone, MapPin, MessageSquare, Clock } from "lucide-react";
import { ContactFormBlock } from "../components/ContactFormBlock";

export function Contact() {
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="mb-14">
        <div
          className="mb-3 uppercase tracking-widest text-xs"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', fontWeight: 600 }}
        >
          Связь
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
          Контакты
        </h1>
        <p
          className="max-w-xl text-base"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.8 }}
        >
          Мы открыты для диалога. Свяжитесь с нами по любому вопросу — 
          о программах, записи, сотрудничестве или просто из любопытства.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Contact info */}
        <div className="lg:col-span-2 space-y-5">
          {/* Info cards */}
          {[
            {
              icon: <Mail size={20} />,
              title: 'Электронная почта',
              content: 'info@icpw.ru',
              link: 'mailto:info@icpw.ru',
              color: 'var(--icpw-primary)',
            },
            {
              icon: <Phone size={20} />,
              title: 'Телефон',
              content: '+7 (495) 123-45-67',
              link: 'tel:+74951234567',
              color: 'var(--icpw-primary)',
            },
            {
              icon: <MapPin size={20} />,
              title: 'Адрес',
              content: 'Москва, Россия',
              link: null,
              color: 'var(--icpw-primary)',
            },
            {
              icon: <Clock size={20} />,
              title: 'Часы работы',
              content: 'Пн–Пт: 10:00–19:00',
              link: null,
              color: 'var(--icpw-primary)',
            },
          ].map(item => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-5 rounded-xl"
              style={{ background: 'var(--icpw-surface-lowest)', boxShadow: '0 2px 12px rgba(47,52,46,0.05)' }}
            >
              <div
                className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: 'rgba(80,102,43,0.1)', color: item.color }}
              >
                {item.icon}
              </div>
              <div>
                <div
                  className="text-xs uppercase tracking-wide mb-1"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-outline-variant)', fontWeight: 600 }}
                >
                  {item.title}
                </div>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-sm transition-colors hover:text-[#50662b]"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface)', textDecoration: 'none' }}
                  >
                    {item.content}
                  </a>
                ) : (
                  <span
                    className="text-sm"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface)' }}
                  >
                    {item.content}
                  </span>
                )}
              </div>
            </div>
          ))}

          {/* Social / messaging note */}
          <div
            className="p-5 rounded-xl"
            style={{ background: 'rgba(14,103,129,0.06)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare size={16} style={{ color: 'var(--icpw-tertiary)' }} />
              <span
                className="text-xs font-medium"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)' }}
              >
                Мессенджеры
              </span>
            </div>
            <p
              className="text-xs"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.7 }}
            >
              Также доступны в Telegram и WhatsApp по номеру телефона.
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-3">
          <div
            className="rounded-2xl p-7 lg:p-8"
            style={{ background: 'var(--icpw-surface-lowest)', boxShadow: '0 4px 24px rgba(47,52,46,0.06)' }}
          >
            <h2
              className="mb-6"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.2rem', color: 'var(--icpw-on-surface)' }}
            >
              Написать нам
            </h2>
            <ContactFormBlock />
          </div>
        </div>
      </div>
    </div>
  );
}
