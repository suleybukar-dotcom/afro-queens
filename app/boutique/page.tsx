'use client';
import { useState } from 'react';
import { products, bundles } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import BundleCard from '@/components/ui/BundleCard';
import ShippingBanner from '@/components/sections/ShippingBanner';
import { SlidersHorizontal } from 'lucide-react';

const categories = ['Tous', 'Soin lavant', 'Soin intensif', 'Hydratation', 'Coiffage & nutrition', 'Traitement intensif'];

export default function BoutiquePage() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [sortBy, setSortBy] = useState('default');
  const [activeTab, setActiveTab] = useState<'produits'|'gammes'>('produits');

  const filtered = products.filter(p => activeCategory === 'Tous' ? true : p.category === activeCategory);
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#1A1A1A] text-white pt-32 pb-20 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[#D4A843] mb-4">Afro Queens</p>
        <h1 className="font-script text-5xl md:text-7xl text-white mb-4">La Boutique</h1>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="w-12 h-px bg-[#D4A843]/50"/>
          <span className="text-[#D4A843]">♛</span>
          <div className="w-12 h-px bg-[#D4A843]/50"/>
        </div>
        <p className="text-white/60 font-sans text-sm mt-6 max-w-md mx-auto">
          Découvrez toute notre gamme de soins capillaires naturels et premium
        </p>
      </div>

      <ShippingBanner />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Tabs: Produits / Gammes */}
        <div className="flex gap-0 border-b border-gray-200 mb-10">
          {(['produits','gammes'] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-8 py-4 text-xs font-sans tracking-widest uppercase transition-all border-b-2 ${
                activeTab === tab ? 'border-[#E07B39] text-[#E07B39]' : 'border-transparent text-[#9E9E9E] hover:text-[#1A1A1A]'
              }`}>
              {tab === 'produits' ? '🛍️ Produits individuels' : '✨ Gammes & Kits'}
            </button>
          ))}
        </div>

        {/* PRODUITS TAB */}
        {activeTab === 'produits' && (
          <>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10 pb-6 border-b border-gray-100">
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button key={cat} onClick={() => setActiveCategory(cat)}
                    className={`text-xs font-sans tracking-widest uppercase px-5 py-2.5 transition-all duration-200 ${
                      activeCategory === cat ? 'bg-[#1A1A1A] text-white' : 'border border-gray-200 text-[#6B6B6B] hover:border-[#1A1A1A] hover:text-[#1A1A1A]'
                    }`}>
                    {cat}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <SlidersHorizontal size={16} className="text-[#9E9E9E]" />
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}
                  className="text-xs font-sans text-[#6B6B6B] border border-gray-200 px-4 py-2.5 outline-none focus:border-[#1A1A1A] bg-white">
                  <option value="default">Tri par défaut</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                </select>
              </div>
            </div>
            <p className="text-xs font-sans text-[#9E9E9E] tracking-wide mb-8">
              {sorted.length} produit{sorted.length > 1 ? 's' : ''}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sorted.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
          </>
        )}

        {/* GAMMES TAB */}
        {activeTab === 'gammes' && (
          <>
            <div className="mb-10">
              <p className="text-sm font-sans text-[#6B6B6B] mb-2">
                Nos kits sont composés de produits complémentaires soigneusement sélectionnés pour votre type de cheveux.
              </p>
              <p className="text-xs font-sans text-[#E07B39]">🚚 Livraison offerte à partir de 100$ CAD</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {bundles.map(bundle => <BundleCard key={bundle.id} bundle={bundle} />)}
            </div>
          </>
        )}

        {/* Bottom promo */}
        <div className="mt-20 bg-[#F5F0EA] p-10 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#E07B39] mb-3">Livraison offerte</p>
          <h3 className="font-script text-3xl text-[#1A1A1A] mb-2">À partir de 100$ CAD d&apos;achat</h3>
          <p className="text-sm font-sans text-[#6B6B6B]">Livraison express 2-3 jours · Retours gratuits · Paiement sécurisé · Hawkesbury, Ontario</p>
        </div>
      </div>
    </div>
  );
}
