import { useEffect, useState } from 'react';
import { Plus, Pencil, Trash2, X, Check } from 'lucide-react';
import { apiFetch, authHeaders } from '../lib/api';

const BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function resolveUrl(url: string) {
  if (!url) return '';
  if (url.startsWith('http') || url.startsWith('blob')) return url;
  if (url.startsWith('/images/')) return url;
  return `${BASE}${url}`;
}

const CATEGORIES = ['products', 'factory', 'installation', 'team'];

interface GalleryItem {
  id: number;
  label: string;
  category: string;
  img_url: string;
  placeholder: string;
  sort_order: number;
}

const empty: Omit<GalleryItem, 'id'> = { label: '', category: 'products', img_url: '', placeholder: '', sort_order: 0 };

export default function AdminGallery() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<{ open: boolean; editing: GalleryItem | null }>({ open: false, editing: null });
  const [form, setForm] = useState<Omit<GalleryItem, 'id'>>(empty);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [filterCat, setFilterCat] = useState('all');

  async function load() {
    setLoading(true);
    try {
      const data = await apiFetch('/api/gallery');
      setItems(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  function openAdd() {
    setForm(empty);
    setImageFile(null);
    setPreview('');
    setError('');
    setModal({ open: true, editing: null });
  }

  function openEdit(item: GalleryItem) {
    setForm({ label: item.label, category: item.category, img_url: item.img_url, placeholder: item.placeholder, sort_order: item.sort_order });
    setImageFile(null);
    setPreview(item.img_url || '');
    setError('');
    setModal({ open: true, editing: item });
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (!f) return;
    setImageFile(f);
    setPreview(URL.createObjectURL(f));
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const fd = new FormData();
      fd.append('label', form.label);
      fd.append('category', form.category);
      fd.append('placeholder', form.placeholder);
      fd.append('sort_order', String(form.sort_order));
      if (imageFile) fd.append('image', imageFile);
      else fd.append('img_url', form.img_url);

      if (modal.editing) {
        await fetch(`${BASE}/api/gallery/${modal.editing.id}`, { method: 'PUT', headers: authHeaders(true), body: fd });
      } else {
        await fetch(`${BASE}/api/gallery`, { method: 'POST', headers: authHeaders(true), body: fd });
      }
      setModal({ open: false, editing: null });
      load();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm('Delete this gallery item?')) return;
    await apiFetch(`/api/gallery/${id}`, { method: 'DELETE', headers: authHeaders() });
    load();
  }

  const filtered = filterCat === 'all' ? items : items.filter(i => i.category === filterCat);

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-navy" style={{ fontFamily: 'Outfit, sans-serif' }}>Gallery</h1>
          <p className="text-slate-400 text-xs md:text-sm">{items.length} total items</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-1.5 bg-primary hover:bg-blue-600 text-white font-bold px-3 md:px-4 py-2 md:py-2.5 rounded-lg text-xs md:text-sm transition-colors">
          <Plus size={14} /> <span className="hidden sm:inline">Add Image</span><span className="sm:hidden">Add</span>
        </button>
      </div>

      {/* Category filter — horizontal scroll on mobile */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1 scrollbar-hide">
        {['all', ...CATEGORIES].map(c => (
          <button
            key={c}
            onClick={() => setFilterCat(c)}
            className={`text-xs font-bold px-3 py-1.5 rounded-full border capitalize whitespace-nowrap shrink-0 transition-colors ${filterCat === c ? 'bg-primary text-white border-primary' : 'bg-white text-slate-600 border-slate-200'}`}
          >
            {c}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-400">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
          {filtered.map(item => (
            <div key={item.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm group">
              <div className="aspect-square bg-slate-50 overflow-hidden relative">
                <img
                  src={resolveUrl(item.img_url)}
                  alt={item.label}
                  className="w-full h-full object-cover"
                  onError={e => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </div>
              <div className="p-2">
                <span className="text-[9px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full capitalize">{item.category}</span>
                <p className="text-[10px] md:text-xs font-semibold text-navy mt-1 line-clamp-2">{item.label}</p>
                <div className="flex gap-1.5 mt-2">
                  <button onClick={() => openEdit(item)} className="flex-1 flex items-center justify-center gap-1 text-[10px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 py-1.5 rounded-md transition-colors">
                    <Pencil size={10} /> Edit
                  </button>
                  <button onClick={() => handleDelete(item.id)} className="flex-1 flex items-center justify-center gap-1 text-[10px] font-bold text-red-500 bg-red-50 hover:bg-red-100 py-1.5 rounded-md transition-colors">
                    <Trash2 size={10} /> Del
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal — bottom sheet on mobile, centered on desktop */}
      {modal.open && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:max-w-md max-h-[92vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 md:p-5 border-b sticky top-0 bg-white z-10">
              <h2 className="font-black text-navy text-base md:text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {modal.editing ? 'Edit Gallery Item' : 'Add Gallery Item'}
              </h2>
              <button onClick={() => setModal({ open: false, editing: null })} className="text-slate-400 hover:text-slate-600 p-1">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSave} className="p-4 md:p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Label</label>
                <input
                  type="text"
                  value={form.label}
                  onChange={e => setForm(f => ({ ...f, label: e.target.value }))}
                  required
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Category</label>
                <select
                  value={form.category}
                  onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  {CATEGORIES.map(c => <option key={c} value={c} className="capitalize">{c}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Sort Order</label>
                <input
                  type="number"
                  value={form.sort_order}
                  onChange={e => setForm(f => ({ ...f, sort_order: Number(e.target.value) }))}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Image</label>
                {preview && (
                  <img src={resolveUrl(preview)} alt="preview" className="w-full h-36 object-cover bg-slate-50 rounded-lg mb-2" />
                )}
                <input type="file" accept="image/*" onChange={handleFile} className="text-sm text-slate-500 w-full" />
                {!imageFile && (
                  <input
                    type="text"
                    placeholder="Or paste image URL"
                    value={form.img_url}
                    onChange={e => { setForm(f => ({ ...f, img_url: e.target.value })); setPreview(e.target.value); }}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm mt-2 focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                )}
              </div>

              {error && <p className="text-red-500 text-xs">{error}</p>}

              <div className="flex gap-3 pt-1 pb-2">
                <button type="button" onClick={() => setModal({ open: false, editing: null })} className="flex-1 border border-slate-200 text-slate-600 font-bold py-3 rounded-lg text-sm hover:bg-slate-50 transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={saving} className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-blue-600 text-white font-bold py-3 rounded-lg text-sm transition-colors disabled:opacity-60">
                  <Check size={14} /> {saving ? 'Saving...' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
