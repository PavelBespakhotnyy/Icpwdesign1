import { useState } from "react";
import { BookOpen, FileText, GraduationCap, Download, Upload, Search } from "lucide-react";
import { libraryItems, type Book } from "../data";

type Category = 'all' | 'book' | 'article' | 'dissertation';

const categoryConfig: Record<Category, { label: string; icon: React.ReactNode; color: string }> = {
  all: { label: 'Все', icon: <Search size={15} />, color: 'var(--icpw-primary)' },
  book: { label: 'Книги', icon: <BookOpen size={15} />, color: 'var(--icpw-primary)' },
  article: { label: 'Статьи', icon: <FileText size={15} />, color: 'var(--icpw-tertiary)' },
  dissertation: { label: 'Диссертации', icon: <GraduationCap size={15} />, color: 'var(--icpw-secondary)' },
};

function LibraryCard({ item }: { item: Book }) {
  const catStyle = {
    book: { tag: 'color-mix(in srgb, var(--icpw-primary) 10%, transparent)', tagText: 'var(--icpw-primary)' },
    article: { tag: 'color-mix(in srgb, var(--icpw-tertiary) 10%, transparent)', tagText: 'var(--icpw-tertiary)' },
    dissertation: { tag: 'color-mix(in srgb, var(--icpw-secondary) 10%, transparent)', tagText: 'var(--icpw-secondary)' },
  }[item.category];

  return (
    <div
      className="rounded-xl p-5 flex flex-col gap-3 transition-all duration-200"
      style={{ background: 'var(--icpw-surface-lowest)', boxShadow: '0 2px 12px rgba(47,52,46,0.05)' }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span
              className="text-xs px-2.5 py-0.5 rounded-full"
              style={{ background: catStyle.tag, color: catStyle.tagText, fontFamily: 'var(--font-body)', fontWeight: 600 }}
            >
              {item.category === 'book' ? 'Книга' : item.category === 'article' ? 'Статья' : 'Диссертация'}
            </span>
            <span
              className="text-xs"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-outline-variant)' }}
            >
              {item.year}
            </span>
            {item.pages && (
              <span
                className="text-xs"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-outline-variant)' }}
              >
                {item.pages} стр.
              </span>
            )}
          </div>
          <h3
            className="mb-1"
            style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--icpw-on-surface)', lineHeight: 1.4 }}
          >
            {item.title}
          </h3>
          <p
            className="text-xs mb-2"
            style={{ fontFamily: 'var(--font-body)', color: catStyle.tagText, fontWeight: 600 }}
          >
            {item.author}
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.65 }}
          >
            {item.description}
          </p>
        </div>

        {/* Download - only for books */}
        {item.category === 'book' && item.fileUrl && (
          <a
            href={item.fileUrl}
            className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
            style={{ background: 'color-mix(in srgb, var(--icpw-primary) 10%, transparent)', color: 'var(--icpw-primary)' }}
            title="Скачать"
            onClick={e => e.preventDefault()}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(80,102,43,0.18)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'color-mix(in srgb, var(--icpw-primary) 10%, transparent)'; }}
          >
            <Download size={15} />
          </a>
        )}
      </div>
    </div>
  );
}

export function Library() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [search, setSearch] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const filtered = libraryItems.filter(item => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const matchSearch = !search || 
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.author.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const counts = {
    all: libraryItems.length,
    book: libraryItems.filter(i => i.category === 'book').length,
    article: libraryItems.filter(i => i.category === 'article').length,
    dissertation: libraryItems.filter(i => i.category === 'dissertation').length,
  };

  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-10 py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
        <div>
          <div
            className="mb-3 uppercase tracking-widest text-xs"
            style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-tertiary)', fontWeight: 600 }}
          >
            Знания
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--icpw-on-surface)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Библиотека
          </h1>
        </div>
        <button
          onClick={() => setShowUploadModal(true)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm shrink-0 transition-opacity hover:opacity-90"
          style={{
            background: 'linear-gradient(135deg, var(--icpw-primary) 0%, var(--icpw-primary-dim) 100%)',
            color: '#ffffff',
            fontFamily: 'var(--font-body)',
            fontWeight: 500,
            border: 'none',
            cursor: 'pointer',
          }}
        >
          <Upload size={15} />
          Добавить материал
        </button>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'var(--icpw-outline-variant)' }} />
        <input
          type="text"
          placeholder="Поиск по названию или автору..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
          style={{
            background: 'var(--icpw-surface-lowest)',
            color: 'var(--icpw-on-surface)',
            fontFamily: 'var(--font-body)',
            border: '1.5px solid rgba(175,179,172,0.25)',
          }}
          onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(80,102,43,0.4)'; }}
          onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(175,179,172,0.25)'; }}
        />
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {(Object.keys(categoryConfig) as Category[]).map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all duration-200"
            style={{
              background: activeCategory === cat ? 'rgba(80,102,43,0.12)' : 'var(--icpw-surface-lowest)',
              color: activeCategory === cat ? categoryConfig[cat].color : 'var(--icpw-on-surface-variant)',
              fontFamily: 'var(--font-body)',
              fontWeight: activeCategory === cat ? 600 : 400,
              border: 'none',
              cursor: 'pointer',
              boxShadow: activeCategory === cat ? 'none' : '0 1px 4px rgba(47,52,46,0.05)',
            }}
          >
            {categoryConfig[cat].icon}
            {categoryConfig[cat].label}
            <span
              className="text-xs px-1.5 py-0.5 rounded-full"
              style={{
                background: activeCategory === cat ? 'rgba(80,102,43,0.15)' : 'var(--icpw-surface-low)',
                color: activeCategory === cat ? 'var(--icpw-primary)' : 'var(--icpw-outline-variant)',
              }}
            >
              {counts[cat]}
            </span>
          </button>
        ))}
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <>
          {/* Books section */}
          {(activeCategory === 'all' || activeCategory === 'book') && (
            <section className="mb-10">
              {activeCategory === 'all' && (
                <h2
                  className="mb-5 flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--icpw-on-surface)' }}
                >
                  <BookOpen size={18} style={{ color: 'var(--icpw-primary)' }} />
                  Книги
                </h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.filter(i => i.category === 'book').map(item => (
                  <LibraryCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}

          {/* Articles section */}
          {(activeCategory === 'all' || activeCategory === 'article') && (
            <section className="mb-10">
              {activeCategory === 'all' && (
                <h2
                  className="mb-5 flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--icpw-on-surface)' }}
                >
                  <FileText size={18} style={{ color: 'var(--icpw-tertiary)' }} />
                  Статьи
                </h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.filter(i => i.category === 'article').map(item => (
                  <LibraryCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}

          {/* Dissertations section */}
          {(activeCategory === 'all' || activeCategory === 'dissertation') && (
            <section className="mb-10">
              {activeCategory === 'all' && (
                <h2
                  className="mb-5 flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.1rem', color: 'var(--icpw-on-surface)' }}
                >
                  <GraduationCap size={18} style={{ color: 'var(--icpw-secondary)' }} />
                  Диссертации
                </h2>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filtered.filter(i => i.category === 'dissertation').map(item => (
                  <LibraryCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        <div className="py-20 text-center">
          <p style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-outline-variant)' }}>
            По вашему запросу ничего не найдено.
          </p>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(47,52,46,0.6)', backdropFilter: 'blur(8px)' }}
          onClick={e => { if (e.target === e.currentTarget) setShowUploadModal(false); }}
        >
          <div
            className="w-full max-w-md rounded-2xl p-8"
            style={{ background: 'var(--icpw-surface-lowest)', boxShadow: '0 24px 80px rgba(47,52,46,0.2)' }}
          >
            <h2
              className="mb-2"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '1.3rem', color: 'var(--icpw-on-surface)' }}
            >
              Добавить материал
            </h2>
            <p
              className="text-sm mb-6"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)', lineHeight: 1.7 }}
            >
              Для добавления материалов в библиотеку необходимо авторизоваться как администратор 
              или отправить файл для проверки через форму ниже.
            </p>
            <div className="space-y-3 mb-6">
              <input
                type="text"
                placeholder="Название"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                style={{ background: 'var(--icpw-surface-low)', color: 'var(--icpw-on-surface)', fontFamily: 'var(--font-body)', border: '1.5px solid rgba(175,179,172,0.25)' }}
                onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(80,102,43,0.4)'; }}
                onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(175,179,172,0.25)'; }}
              />
              <input
                type="text"
                placeholder="Автор"
                className="w-full px-4 py-3 rounded-lg text-sm outline-none"
                style={{ background: 'var(--icpw-surface-low)', color: 'var(--icpw-on-surface)', fontFamily: 'var(--font-body)', border: '1.5px solid rgba(175,179,172,0.25)' }}
                onFocus={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(80,102,43,0.4)'; }}
                onBlur={e => { (e.target as HTMLInputElement).style.borderColor = 'rgba(175,179,172,0.25)'; }}
              />
              <div
                className="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors"
                style={{ borderColor: 'rgba(175,179,172,0.4)' }}
              >
                <Upload size={24} className="mx-auto mb-2" style={{ color: 'var(--icpw-outline-variant)' }} />
                <p className="text-sm" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-on-surface-variant)' }}>
                  Нажмите для выбора файла или перетащите сюда
                </p>
                <p className="text-xs mt-1" style={{ fontFamily: 'var(--font-body)', color: 'var(--icpw-outline-variant)' }}>
                  PDF, DOCX до 50 МБ
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 py-2.5 rounded-lg text-sm"
                style={{ background: 'var(--icpw-surface-low)', color: 'var(--icpw-on-surface-variant)', fontFamily: 'var(--font-body)', border: 'none', cursor: 'pointer' }}
              >
                Отмена
              </button>
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 py-2.5 rounded-lg text-sm text-white"
                style={{ background: 'linear-gradient(135deg, var(--icpw-primary) 0%, var(--icpw-primary-dim) 100%)', fontFamily: 'var(--font-body)', fontWeight: 500, border: 'none', cursor: 'pointer' }}
              >
                Отправить на проверку
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
