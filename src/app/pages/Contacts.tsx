import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: '8px',
  backgroundColor: '#f3f4ee',
  border: '2px solid transparent',
  outline: 'none',
  color: '#2f342e',
  fontFamily: "'Work Sans', sans-serif",
  fontSize: '0.9rem',
};

export default function Contacts() {
  const [form, setForm] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    contact: '',
    message: '',
    consent: false,
    captchaAnswer: '',
  });
  const [captcha] = useState({ a: Math.floor(Math.random() * 8) + 2, b: Math.floor(Math.random() * 8) + 2 });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) { setError('Необходимо согласие на обработку персональных данных.'); return; }
    if (parseInt(form.captchaAnswer) !== captcha.a + captcha.b) { setError('Неверный ответ на проверочный вопрос. Попробуйте ещё раз.'); return; }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div style={{ marginBottom: '48px' }}>
        <p style={{ fontSize: '0.7rem', color: 'var(--icpw-primary)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>
          Свяжитесь с нами
        </p>
        <h1
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.6rem, 4vw, 2.5rem)',
            color: '#2f342e',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
          }}
        >
          Контакты
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Contact info */}
        <div className="lg:col-span-2">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div>
              <p style={{ fontSize: '0.7rem', color: '#787c75', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 600 }}>
                Реквизиты
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  {
                    icon: <Mail size={16} style={{ color: 'var(--icpw-primary)' }} />,
                    label: 'Email',
                    value: 'info@icpw.ru',
                    href: 'mailto:info@icpw.ru',
                  },
                  {
                    icon: <Phone size={16} style={{ color: 'var(--icpw-primary)' }} />,
                    label: 'Телефон',
                    value: '+7 (495) 000-00-00',
                    href: 'tel:+74950000000',
                  },
                  {
                    icon: <MapPin size={16} style={{ color: 'var(--icpw-primary)' }} />,
                    label: 'Адрес',
                    value: 'Москва, Россия',
                    href: undefined,
                  },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ marginTop: '1px', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: '#787c75', marginBottom: '2px' }}>{item.label}</p>
                      {item.href ? (
                        <a href={item.href} style={{ color: '#2f342e', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ color: '#2f342e', fontSize: '0.9rem', fontWeight: 500 }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ backgroundColor: '#f3f4ee', borderRadius: '12px', padding: '20px' }}>
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  color: '#2f342e',
                  marginBottom: '8px',
                }}
              >
                Режим работы
              </p>
              <p style={{ color: '#5c605a', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Пн–Пт: 10:00–19:00<br />
                Сб: по договорённости<br />
                Вс: выходной
              </p>
            </div>

            <div style={{ backgroundColor: '#f3f4ee', borderRadius: '12px', padding: '20px' }}>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: '0.95rem', color: '#2f342e', marginBottom: '8px' }}>
                Время ответа
              </p>
              <p style={{ color: '#5c605a', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Мы отвечаем на все обращения в течение одного рабочего дня.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3">
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: 'clamp(24px, 4vw, 40px)',
              boxShadow: '0 16px 32px rgba(47,52,46,0.06)',
            }}
          >
            {submitted ? (
              <div style={{ padding: '32px', textAlign: 'center' }}>
                <div
                  style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--icpw-primary), var(--icpw-primary-dim))',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 16px',
                  }}
                >
                  <Send size={22} style={{ color: '#fff' }} />
                </div>
                <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#2f342e', marginBottom: '8px' }}>
                  Сообщение отправлено!
                </p>
                <p style={{ color: '#5c605a', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Спасибо за ваше обращение. Мы свяжемся с вами в течение одного рабочего дня.
                </p>
              </div>
            ) : (
              <>
                <p
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: '#2f342e',
                    marginBottom: '6px',
                  }}
                >
                  Форма обратной связи
                </p>
                <p style={{ color: '#787c75', fontSize: '0.825rem', marginBottom: '24px' }}>
                  Поля, отмеченные *, обязательны для заполнения
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {/* Name fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label style={{ fontSize: '0.75rem', color: '#787c75', display: 'block', marginBottom: '5px' }}>Фамилия *</label>
                      <input
                        type="text"
                        placeholder="Иванов"
                        value={form.lastName}
                        onChange={e => setForm({ ...form, lastName: e.target.value })}
                        required
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', color: '#787c75', display: 'block', marginBottom: '5px' }}>Имя *</label>
                      <input
                        type="text"
                        placeholder="Иван"
                        value={form.firstName}
                        onChange={e => setForm({ ...form, firstName: e.target.value })}
                        required
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '0.75rem', color: '#787c75', display: 'block', marginBottom: '5px' }}>Отчество</label>
                      <input
                        type="text"
                        placeholder="Иванович"
                        value={form.middleName}
                        onChange={e => setForm({ ...form, middleName: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  {/* Contact */}
                  <div>
                    <label style={{ fontSize: '0.75rem', color: '#787c75', display: 'block', marginBottom: '5px' }}>Email или телефон *</label>
                    <input
                      type="text"
                      placeholder="example@mail.ru или +7 900 000-00-00"
                      value={form.contact}
                      onChange={e => setForm({ ...form, contact: e.target.value })}
                      required
                      style={inputStyle}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ fontSize: '0.75rem', color: '#787c75', display: 'block', marginBottom: '5px' }}>Сообщение *</label>
                    <textarea
                      placeholder="Ваш вопрос или сообщение..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>

                  {/* Captcha */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                    <label style={{ fontSize: '0.875rem', color: '#5c605a', whiteSpace: 'nowrap' }}>
                      Проверка: сколько будет {captcha.a} + {captcha.b}?
                    </label>
                    <input
                      type="text"
                      placeholder="Ответ"
                      value={form.captchaAnswer}
                      onChange={e => setForm({ ...form, captchaAnswer: e.target.value })}
                      required
                      style={{ ...inputStyle, width: '80px', flexShrink: 0 }}
                    />
                  </div>

                  {/* Consent */}
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <input
                      type="checkbox"
                      id="consent"
                      checked={form.consent}
                      onChange={e => setForm({ ...form, consent: e.target.checked })}
                      style={{ marginTop: '3px', accentColor: 'var(--icpw-primary)', flexShrink: 0 }}
                    />
                    <label htmlFor="consent" style={{ fontSize: '0.8rem', color: '#5c605a', lineHeight: 1.6, cursor: 'pointer' }}>
                      Я ознакомлен(а) и согласен(на) с{' '}
                      <span style={{ color: 'var(--icpw-tertiary)', textDecoration: 'underline', cursor: 'pointer' }}>
                        Политикой конфиденциальности
                      </span>{' '}
                      и даю согласие на обработку персональных данных в соответствии с Федеральным законом №152-ФЗ «О персональных данных»
                    </label>
                  </div>

                  {error && (
                    <p style={{ color: '#d4183d', fontSize: '0.825rem', backgroundColor: 'rgba(212,24,61,0.06)', padding: '10px 14px', borderRadius: '8px' }}>
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    style={{
                      alignSelf: 'flex-start',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '13px 32px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, var(--icpw-primary), var(--icpw-primary-dim))',
                      color: '#ffffff',
                      border: 'none',
                      cursor: 'pointer',
                      fontFamily: "'Work Sans', sans-serif",
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      marginTop: '4px',
                      transition: 'opacity 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.opacity = '0.9')}
                    onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                  >
                    <Send size={15} /> Отправить сообщение
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
