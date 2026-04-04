import { useState, useRef } from 'react';
import { Plus, Image, X, FileCheck } from 'lucide-react';

interface DocImage {
  id: number;
  name: string;
  src: string;
  description: string;
}

const initialDocs: DocImage[] = [
  {
    id: 1,
    name: 'Диплом о профессиональной переподготовке',
    src: 'https://images.unsplash.com/photo-1761319114727-372806b1c56a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
    description: 'Образец диплома о профессиональной переподготовке российского образца.',
  },
];

export default function Documents() {
  const [docs, setDocs] = useState<DocImage[]>(initialDocs);
  const [showAdd, setShowAdd] = useState(false);
  const [newDoc, setNewDoc] = useState({ name: '', description: '', src: '' });
  const [preview, setPreview] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<DocImage | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result as string;
      setPreview(result);
      setNewDoc(d => ({ ...d, src: result }));
    };
    reader.readAsDataURL(file);
  };

  const handleAdd = () => {
    if (!newDoc.name || !newDoc.src) return;
    setDocs([...docs, { ...newDoc, id: Date.now() }]);
    setNewDoc({ name: '', description: '', src: '' });
    setPreview(null);
    setShowAdd(false);
  };

  const handleRemove = (id: number) => {
    setDocs(docs.filter(d => d.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: '0.7rem', color: '#50662b', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '12px' }}>
          Образование
        </p>
        <h1
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            color: '#2f342e',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}
        >
          Выдаваемые документы
        </h1>
        <p style={{ color: '#5c605a', fontSize: '0.975rem', lineHeight: 1.7, maxWidth: '560px' }}>
          Образцы дипломов, сертификатов и удостоверений, которые получают выпускники наших программ.
        </p>
      </div>

      {/* Add button */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
        <button
          onClick={() => setShowAdd(true)}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            padding: '9px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer',
            background: 'linear-gradient(135deg, #50662b, #455a20)',
            color: '#ffffff', fontSize: '0.875rem', fontWeight: 500,
            fontFamily: "'Work Sans', sans-serif",
          }}
        >
          <Plus size={15} /> Добавить документ
        </button>
      </div>

      {/* Add modal */}
      {showAdd && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 100,
            backgroundColor: 'rgba(47,52,46,0.4)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
          }}
          onClick={() => setShowAdd(false)}
        >
          <div
            style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '28px', width: '100%', maxWidth: '480px', boxShadow: '0 32px 64px rgba(47,52,46,0.15)' }}
            onClick={e => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <p style={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#2f342e' }}>
                Добавить документ
              </p>
              <button onClick={() => setShowAdd(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#787c75' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
              <input
                placeholder="Название документа *"
                value={newDoc.name}
                onChange={e => setNewDoc({ ...newDoc, name: e.target.value })}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', backgroundColor: '#f3f4ee', border: '2px solid transparent', outline: 'none', color: '#2f342e', fontFamily: "'Work Sans', sans-serif", fontSize: '0.875rem' }}
              />
              <textarea
                placeholder="Краткое описание"
                value={newDoc.description}
                onChange={e => setNewDoc({ ...newDoc, description: e.target.value })}
                rows={2}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', backgroundColor: '#f3f4ee', border: '2px solid transparent', outline: 'none', color: '#2f342e', fontFamily: "'Work Sans', sans-serif", fontSize: '0.875rem', resize: 'vertical' }}
              />

              {/* Image upload */}
              <div>
                <p style={{ fontSize: '0.775rem', color: '#787c75', marginBottom: '8px' }}>Фото / скан документа *</p>
                <div
                  onClick={() => fileRef.current?.click()}
                  style={{
                    border: '2px dashed rgba(80,102,43,0.3)',
                    borderRadius: '10px',
                    padding: '20px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    backgroundColor: '#fafaf5',
                    transition: 'border-color 0.15s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(80,102,43,0.6)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(80,102,43,0.3)')}
                >
                  {preview ? (
                    <img src={preview} alt="preview" style={{ maxHeight: '140px', borderRadius: '8px', margin: '0 auto' }} />
                  ) : (
                    <div>
                      <Image size={28} style={{ color: '#afb3ac', margin: '0 auto 8px' }} />
                      <p style={{ color: '#5c605a', fontSize: '0.825rem' }}>Нажмите для загрузки</p>
                      <p style={{ color: '#afb3ac', fontSize: '0.75rem', marginTop: '4px' }}>JPG, PNG, PDF</p>
                    </div>
                  )}
                </div>
                <input ref={fileRef} type="file" accept="image/*,application/pdf" style={{ display: 'none' }} onChange={handleFileChange} />
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button onClick={() => setShowAdd(false)} style={{ padding: '9px 18px', borderRadius: '8px', border: 'none', backgroundColor: '#f3f4ee', color: '#5c605a', cursor: 'pointer', fontSize: '0.875rem', fontFamily: "'Work Sans', sans-serif" }}>
                Отмена
              </button>
              <button
                onClick={handleAdd}
                disabled={!newDoc.name || !newDoc.src}
                style={{
                  padding: '9px 18px', borderRadius: '8px', border: 'none',
                  background: newDoc.name && newDoc.src ? 'linear-gradient(135deg, #50662b, #455a20)' : '#e0e4dc',
                  color: newDoc.name && newDoc.src ? '#ffffff' : '#afb3ac',
                  cursor: newDoc.name && newDoc.src ? 'pointer' : 'default',
                  fontSize: '0.875rem', fontFamily: "'Work Sans', sans-serif", fontWeight: 500,
                }}
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Documents grid */}
      {docs.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0', color: '#787c75' }}>
          <FileCheck size={40} style={{ margin: '0 auto 12px', opacity: 0.4 }} />
          <p>Документы пока не добавлены.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {docs.map((doc) => (
            <div
              key={doc.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '14px',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(47,52,46,0.07)',
                position: 'relative',
              }}
            >
              <div
                style={{ height: '220px', overflow: 'hidden', cursor: 'zoom-in' }}
                onClick={() => setLightbox(doc)}
              >
                <img
                  src={doc.src}
                  alt={doc.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
              <div style={{ padding: '16px' }}>
                <p style={{ fontWeight: 600, color: '#2f342e', fontSize: '0.9rem', lineHeight: 1.4, marginBottom: '6px' }}>{doc.name}</p>
                {doc.description && <p style={{ color: '#787c75', fontSize: '0.8rem', lineHeight: 1.5 }}>{doc.description}</p>}
              </div>
              <button
                onClick={() => handleRemove(doc.id)}
                style={{
                  position: 'absolute', top: '8px', right: '8px',
                  width: '28px', height: '28px', borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.85)', border: 'none',
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#787c75',
                }}
                title="Удалить"
              >
                <X size={13} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            backgroundColor: 'rgba(47,52,46,0.85)', backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px',
            cursor: 'zoom-out',
          }}
          onClick={() => setLightbox(null)}
        >
          <div style={{ maxWidth: '800px', width: '100%' }} onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.name} style={{ width: '100%', borderRadius: '12px', boxShadow: '0 32px 64px rgba(0,0,0,0.3)' }} />
            <p style={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', marginTop: '12px', fontSize: '0.9rem' }}>{lightbox.name}</p>
          </div>
          <button
            onClick={() => setLightbox(null)}
            style={{ position: 'fixed', top: '20px', right: '20px', background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff' }}
          >
            <X size={28} />
          </button>
        </div>
      )}
    </div>
  );
}
