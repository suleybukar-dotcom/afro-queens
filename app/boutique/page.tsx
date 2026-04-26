'use client';

import { useState } from 'react';
import { products } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import { SlidersHorizontal } from 'lucide-react';

const categories = ['Tous', 'Soin lavant', 'Soin intensif', 'Hydratation', 'Coiffage & nutrition', 'Traitement intensif'];

export default function BoutiquePage() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [sortBy, setSortBy] = useState('default');

  const filtered = products.filter(p =>
    activeCategory === 'Tous' ? true : p.category === activeCategory
  );

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="bg-noir-DEFAULT text-white pt-32 pb-20 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-ocre-DEFAULT mb-4">Afro Queens</p>
        <h1 className="font-script text-5xl md:text-7xl text-white mb-4">La Boutique</h1>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div className="w-12 h-px bg-ocre-DEFAULT/50" />
          <span className="text-ocre-DEFAULT">♛</span>
          <div className="w-12 h-px bg-ocre-DEFAULT/50" />
        </div>
        <p className="text-white/60 font-sans text-sm mt-6 max-w-md mx-auto">
          Découvrez toute notre gamme de soins capillaires naturels et premium
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12 pb-6 border-b border-gray-100">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-sans tracking-widest uppercase px-5 py-2.5 transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-noir-DEFAULT text-white'
                    : 'border border-gray-200 text-gris-DEFAULT hover:border-noir-DEFAULT hover:text-noir-DEFAULT'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <SlidersHorizontal size={16} className="text-gris-DEFAULT" />
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-xs font-sans tracking-wide text-gris-DEFAULT border border-gray-200 px-4 py-2.5 outline-none focus:border-noir-DEFAULT bg-white"
            >
              <option value="default">Tri par défaut</option>
              <option value="price-asc">Prix croissant</option>
              <option value="price-desc">Prix décroissant</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-xs font-sans text-gris-DEFAULT tracking-wide mb-8">
          {sorted.length} produit{sorted.length > 1 ? 's' : ''} {activeCategory !== 'Tous' ? `dans "${activeCategory}"` : ''}
        </p>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sorted.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty state */}
        {sorted.length === 0 && (
          <div className="text-center py-20">
            <p className="font-script text-2xl text-gris-DEFAULT">Aucun produit dans cette catégorie</p>
          </div>
        )}

        {/* Bottom promo */}
        <div className="mt-20 bg-gris-warm p-10 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-orange-DEFAULT mb-3">Livraison offerte</p>
          <h3 className="font-script text-3xl text-noir-DEFAULT mb-2">À partir de 50€ d&apos;achat</h3>
          <p className="text-sm font-sans text-gris-DEFAULT">Livraison express en 2-3 jours ouvrés · Retours gratuits · Paiement sécurisé</p>
        </div>
      </div>
    </div>
  );
}
