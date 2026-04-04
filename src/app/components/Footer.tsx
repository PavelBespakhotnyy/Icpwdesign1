import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="mt-24"
      style={{ background: 'var(--icpw-surface-highest)', color: 'var(--icpw-on-surface)' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div
              className="text-3xl tracking-widest mb-3"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--icpw-primary)' }}
            >
              ICPW
            </div>
            <div
              className="text-xs tracking-[0.25em] uppercase mb-4"
              style={{ fontFamily: 'var(--font-display)', color: 'var(--icpw-on-surface-variant)', letterSpacing: '0.2em' }}
            >
              Process Work
            </div>
            <p
              className="text-xs leading-relaxed"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}
            >
              Международный Центр Процессуальной Работы.<br />
              Профессиональное образование мирового уровня.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4
              className="mb-4 uppercase tracking-widest text-xs"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--icpw-outline-variant)' }}
            >
              Программы
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Международная сертификация', to: '/programs/international-certification' },
                { label: 'Переподготовка', to: '/programs/retraining' },
                { label: 'Повышение квалификации', to: '/programs/advancement' },
                { label: 'Документы об образовании', to: '/programs/documents' },
              ].map(item => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-xs transition-colors hover:text-[#50662b]"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', textDecoration: 'none' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="mb-4 uppercase tracking-widest text-xs"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--icpw-outline-variant)' }}
            >
              Разделы
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: 'О нас', to: '/about' },
                { label: 'Наши преподаватели', to: '/teachers' },
                { label: 'Отзывы', to: '/reviews' },
                { label: 'Библиотека', to: '/library' },
                { label: 'FAQ', to: '/faq' },
                { label: 'Контакты', to: '/contact' },
              ].map(item => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-xs transition-colors hover:text-[#50662b]"
                    style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', textDecoration: 'none' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="mb-4 uppercase tracking-widest text-xs"
              style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--icpw-outline-variant)' }}
            >
              Контакты
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={13} style={{ color: 'var(--icpw-tertiary)', marginTop: 2, shrink: 0 }} className="shrink-0" />
                <a
                  href="mailto:info@icpw.ru"
                  className="text-xs transition-colors hover:text-[#0e6781]"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', textDecoration: 'none' }}
                >
                  info@icpw.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={13} style={{ color: 'var(--icpw-tertiary)', marginTop: 2 }} className="shrink-0" />
                <a
                  href="tel:+74951234567"
                  className="text-xs transition-colors hover:text-[#0e6781]"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', textDecoration: 'none' }}
                >
                  +7 (495) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} style={{ color: 'var(--icpw-tertiary)', marginTop: 2 }} className="shrink-0" />
                <span
                  className="text-xs"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}
                >
                  Москва, Россия
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(175,179,172,0.3)' }}
        >
          <p
            className="text-xs"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-outline-variant)' }}
          >
            © 2024–2026 ICPW. Все права защищены.
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-outline-variant)' }}
          >
            Аффилирован с IAPOP · International Association of Process-Oriented Psychology
          </p>
        </div>
      </div>
    </footer>
  );
}
