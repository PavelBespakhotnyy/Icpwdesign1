import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

interface ContactFormBlockProps {
  compact?: boolean;
}

export function ContactFormBlock({ compact = false }: ContactFormBlockProps) {
  const [form, setForm] = useState({
    lastName: '',
    firstName: '',
    middleName: '',
    contacts: '',
    message: '',
    consent: false,
    captcha: '',
  });
  const [captchaAnswer] = useState(() => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    return { a, b, answer: String(a + b) };
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.lastName.trim()) e.lastName = 'Укажите фамилию';
    if (!form.firstName.trim()) e.firstName = 'Укажите имя';
    if (!form.contacts.trim()) e.contacts = 'Укажите контактные данные';
    if (!form.message.trim()) e.message = 'Напишите сообщение';
    if (!form.consent) e.consent = 'Необходимо ваше согласие';
    if (form.captcha.trim() !== captchaAnswer.answer) e.captcha = 'Неверный ответ';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-200";
  const inputStyle = {
    background: 'var(--icpw-surface-lowest)',
    color: 'var(--icpw-on-surface)',
    fontFamily: 'var(--font-body)',
    border: '1.5px solid transparent',
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 gap-4 text-center">
        <CheckCircle size={48} style={{ color: 'var(--icpw-primary)' }} />
        <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--icpw-on-surface)', fontSize: '1.3rem', fontWeight: 600 }}>
          Сообщение отправлено!
        </h3>
        <p style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', maxWidth: '400px', lineHeight: 1.7 }}>
          Спасибо за ваше обращение. Мы ответим вам в течение 1–2 рабочих дней.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${compact ? '' : 'max-w-2xl'}`} noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Last name */}
        <div>
          <label className="block mb-1.5 text-xs font-medium" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}>
            Фамилия <span style={{ color: '#c0392b' }}>*</span>
          </label>
          <input
            type="text"
            className={inputClass}
            style={{ ...inputStyle, borderColor: errors.lastName ? '#c0392b' : 'rgba(175,179,172,0.25)' }}
            value={form.lastName}
            onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))}
            placeholder="Иванова"
            onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(80,102,43,0.4)'; }}
            onBlur={e => { (e.target as HTMLInputElement).style.borderColor = errors.lastName ? '#c0392b' : 'rgba(175,179,172,0.25)'; }}
          />
          {errors.lastName && <p className="mt-1 text-xs" style={{ color: '#c0392b' }}>{errors.lastName}</p>}
        </div>
        {/* First name */}
        <div>
          <label className="block mb-1.5 text-xs font-medium" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}>
            Имя <span style={{ color: '#c0392b' }}>*</span>
          </label>
          <input
            type="text"
            className={inputClass}
            style={{ ...inputStyle, borderColor: errors.firstName ? '#c0392b' : 'rgba(175,179,172,0.25)' }}
            value={form.firstName}
            onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))}
            placeholder="Мария"
            onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(80,102,43,0.4)'; }}
            onBlur={e => { (e.target as HTMLInputElement).style.borderColor = errors.firstName ? '#c0392b' : 'rgba(175,179,172,0.25)'; }}
          />
          {errors.firstName && <p className="mt-1 text-xs" style={{ color: '#c0392b' }}>{errors.firstName}</p>}
        </div>
        {/* Middle name */}
        <div>
          <label className="block mb-1.5 text-xs font-medium" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}>
            Отчество
          </label>
          <input
            type="text"
            className={inputClass}
            style={{ ...inputStyle, borderColor: 'rgba(175,179,172,0.25)' }}
            value={form.middleName}
            onChange={e => setForm(f => ({ ...f, middleName: e.target.value }))}
            placeholder="Александровна"
            onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(80,102,43,0.4)'; }}
            onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(175,179,172,0.25)'; }}
          />
        </div>
      </div>

      {/* Contacts */}
      <div>
        <label className="block mb-1.5 text-xs font-medium" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}>
          Контактные данные (email / телефон) <span style={{ color: '#c0392b' }}>*</span>
        </label>
        <input
          type="text"
          className={inputClass}
          style={{ ...inputStyle, borderColor: errors.contacts ? '#c0392b' : 'rgba(175,179,172,0.25)' }}
          value={form.contacts}
          onChange={e => setForm(f => ({ ...f, contacts: e.target.value }))}
          placeholder="email@example.com или +7 (XXX) XXX-XX-XX"
          onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(80,102,43,0.4)'; }}
          onBlur={e => { (e.target as HTMLInputElement).style.borderColor = errors.contacts ? '#c0392b' : 'rgba(175,179,172,0.25)'; }}
        />
        {errors.contacts && <p className="mt-1 text-xs" style={{ color: '#c0392b' }}>{errors.contacts}</p>}
      </div>

      {/* Message */}
      <div>
        <label className="block mb-1.5 text-xs font-medium" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}>
          Сообщение <span style={{ color: '#c0392b' }}>*</span>
        </label>
        <textarea
          rows={compact ? 4 : 5}
          className={`${inputClass} resize-none`}
          style={{ ...inputStyle, borderColor: errors.message ? '#c0392b' : 'rgba(175,179,172,0.25)' }}
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          placeholder="Ваш вопрос или сообщение..."
          onFocus={e => { (e.target as HTMLTextAreaElement).style.borderColor = 'rgba(80,102,43,0.4)'; }}
          onBlur={e => { (e.target as HTMLTextAreaElement).style.borderColor = errors.message ? '#c0392b' : 'rgba(175,179,172,0.25)'; }}
        />
        {errors.message && <p className="mt-1 text-xs" style={{ color: '#c0392b' }}>{errors.message}</p>}
      </div>

      {/* Captcha */}
      <div className="flex items-center gap-4">
        <span
          className="text-sm select-none"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}
        >
          Сколько будет {captchaAnswer.a} + {captchaAnswer.b}? <span style={{ color: '#c0392b' }}>*</span>
        </span>
        <input
          type="text"
          className="px-3 py-2 rounded-lg text-sm w-20 outline-none text-center"
          style={{ ...inputStyle, borderColor: errors.captcha ? '#c0392b' : 'rgba(175,179,172,0.25)' }}
          value={form.captcha}
          onChange={e => setForm(f => ({ ...f, captcha: e.target.value }))}
          placeholder="?"
          onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(80,102,43,0.4)'; }}
          onBlur={e => { (e.target as HTMLInputElement).style.borderColor = errors.captcha ? '#c0392b' : 'rgba(175,179,172,0.25)'; }}
        />
        {errors.captcha && <p className="text-xs" style={{ color: '#c0392b' }}>{errors.captcha}</p>}
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="consent-check"
          checked={form.consent}
          onChange={e => setForm(f => ({ ...f, consent: e.target.checked }))}
          className="mt-0.5 w-4 h-4 shrink-0 cursor-pointer rounded"
          style={{ accentColor: 'var(--icpw-primary)' }}
        />
        <label
          htmlFor="consent-check"
          className="text-xs leading-relaxed cursor-pointer"
          style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}
        >
          Я даю согласие на обработку персональных данных в соответствии с Федеральным законом № 152-ФЗ
          «О персональных данных». Мои данные будут использованы исключительно для ответа на запрос
          и не будут переданы третьим лицам.
        </label>
      </div>
      {errors.consent && <p className="text-xs" style={{ color: '#c0392b' }}>{errors.consent}</p>}

      {/* Submit */}
      <button
        type="submit"
        className="flex items-center gap-2 px-7 py-3 rounded-lg transition-all duration-200 text-sm"
        style={{
          background: 'linear-gradient(135deg, #50662b 0%, #455a20 100%)',
          color: '#ffffff',
          fontFamily: 'var(--font-body)',
          fontWeight: 500,
          border: 'none',
          cursor: 'pointer',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '0.9'; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
      >
        <Send size={15} />
        Отправить сообщение
      </button>
    </form>
  );
}
