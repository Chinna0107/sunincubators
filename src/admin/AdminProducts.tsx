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

const CATEGORIES = [
  { id: 'commercial', label: 'Commercial Incubators' },
  { id: 'small_medium', label: 'Small & Medium Incubators' },
  { id: 'hatchers', label: 'Poultry Equipment' },
  { id: 'spare_part', label: 'Spare Parts' },
];

interface Product {
  id: number;
  slug: string;
  title: string;
  category: string;
  short_desc: string;
  img_url: string;
  placeholder: string;
}

const empty: Omit<Product, 'id'> = { slug: '', title: '', category: 'commercial', short_desc: '', img_url: '', placeholder: '' };

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState<{ open: boolean; editing: Product | null }>({ open: false, editing: null });
  const [form, setForm] = useState<Omit<Product, 'id'>>(empty);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [filterCat, setFilterCat] = useState('all');

  async function load() {
    setLoading(true);
    try {
      const data = await apiFetch('/api/products');
      setProducts(data);
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

  function openEdit(p: Product) {
    setForm({ slug: p.slug, title: p.title, category: p.category, short_desc: p.short_desc, img_url: p.img_url, placeholder: p.placeholder });
    setImageFile(null);
    setPreview(p.img_url || '');
    setError('');
    setModal({ open: true, editing: p });
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
      Object.entries(form).forEach(([k, v]) => fd.append(k, v));
      if (imageFile) fd.append('image', imageFile);

      if (modal.editing) {
        await fetch(`${BASE}/api/products/${modal.editing.id}`, { method: 'PUT', headers: authHeaders(true), body: fd });
      } else {
        await fetch(`${BASE}/api/products`, { method: 'POST', headers: authHeaders(true), body: fd });
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
    if (!confirm('Delete this product?')) return;
    await apiFetch(`/api/products/${id}`, { method: 'DELETE', headers: authHeaders() });
    load();
  }

  const filtered = filterCat === 'all' ? products : products.filter(p => p.category === filterCat);

  return (
    <div className="p-4 md:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-navy" style={{ fontFamily: 'Outfit, sans-serif' }}>Products</h1>
          <p className="text-slate-400 text-xs md:text-sm">{products.length} total products</p>
        </div>
        <button onClick={openAdd} className="flex items-center gap-1.5 bg-primary hover:bg-blue-600 text-white font-bold px-3 md:px-4 py-2 md:py-2.5 rounded-lg text-xs md:text-sm transition-colors">
          <Plus size={14} /> <span className="hidden sm:inline">Add Product</span><span className="sm:hidden">Add</span>
        </button>
      </div>

      {/* Category filter — horizontal scroll on mobile */}
      <div className="flex gap-2 mb-5 overflow-x-auto pb-1 scrollbar-hide">
        {[{ id: 'all', label: 'All' }, ...CATEGORIES].map(c => (
          <button
            key={c.id}
            onClick={() => setFilterCat(c.id)}
            className={`text-xs font-bold px-3 py-1.5 rounded-full border whitespace-nowrap transition-colors shrink-0 ${filterCat === c.id ? 'bg-primary text-white border-primary' : 'bg-white text-slate-600 border-slate-200'}`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-400">Loading...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
          {filtered.map(p => (
            <div key={p.id} className="bg-white rounded-xl border border-slate-100 overflow-hidden shadow-sm">
              <div className="aspect-[4/3] bg-slate-50 flex items-center justify-center overflow-hidden">
                {p.img_url ? (
                  <img src={resolveUrl(p.img_url)} alt={p.title} className="w-full h-full object-contain p-2" onError={e => { (e.target as HTMLImageElement).style.opacity = '0'; }} />
                ) : (
                  <span className="text-slate-300 text-[10px] text-center p-2">{p.placeholder}</span>
                )}
              </div>
              <div className="p-2.5 md:p-3">
                <span className="text-[9px] md:text-[10px] font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded-full uppercase">{p.category}</span>
                <h3 className="font-bold text-navy text-xs md:text-sm mt-1 line-clamp-2">{p.title}</h3>
                <p className="text-slate-400 text-[10px] md:text-xs mt-0.5 line-clamp-2 hidden sm:block">{p.short_desc}</p>
                <div className="flex gap-1.5 mt-2">
                  <button onClick={() => openEdit(p)} className="flex-1 flex items-center justify-center gap-1 text-[10px] md:text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 py-1.5 rounded-lg transition-colors">
                    <Pencil size={10} /> Edit
                  </button>
                  <button onClick={() => handleDelete(p.id)} className="flex-1 flex items-center justify-center gap-1 text-[10px] md:text-xs font-bold text-red-500 bg-red-50 hover:bg-red-100 py-1.5 rounded-lg transition-colors">
                    <Trash2 size={10} /> Del
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {modal.open && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:max-w-lg max-h-[92vh] overflow-y-auto">
            <div className="flex items-center justify-between p-4 md:p-5 border-b sticky top-0 bg-white z-10">
              <h2 className="font-black text-navy text-base md:text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                {modal.editing ? 'Edit Product' : 'Add Product'}
              </h2>
              <button onClick={() => setModal({ open: false, editing: null })} className="text-slate-400 hover:text-slate-600 p-1">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleSave} className="p-4 md:p-5 space-y-4">
              {[
                { label: 'Title', key: 'title', required: true },
                { label: 'Slug (unique ID)', key: 'slug', required: !modal.editing },
                { label: 'Short Description', key: 'short_desc' },
                { label: 'Placeholder text', key: 'placeholder' },
              ].map(({ label, key, required }) => (
                <div key={key}>
                  <label className="block text-xs font-bold text-slate-600 mb-1">{label}</label>
                  <input
                    type="text"
                    value={(form as any)[key]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    required={required}
                    disabled={key === 'slug' && !!modal.editing}
                    className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:bg-slate-50"
                  />
                </div>
              ))}

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Category</label>
                <select
                  value={form.category}
                  onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                  className="w-full border border-slate-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.label}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Image</label>
                {preview && <img src={resolveUrl(preview)} alt="preview" className="w-full h-36 object-contain bg-slate-50 rounded-lg mb-2" />}
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
