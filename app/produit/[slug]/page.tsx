'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Star, ChevronDown, ArrowLeft, Shield, Truck, RefreshCw } from 'lucide-react';
import { products } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import ProductCard from '@/components/ui/ProductCard';
import { useState } from 'react';

interface Props {
  params: { slug: string };
}

type Tab = 'description' | 'ingredients' | 'howToUse';

export default function ProductPage({ params }: Props) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) notFound();

  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<Tab>('description');
  const [added, setAdded] = useState(false);

  const related = products.filter(p => p.id !== product.id).slice(0, 3);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const tabs: { key: Tab; label: string }[] = [
    { key: 'description', label: 'Description & Bienfaits' },
    { key: 'ingredients', label: 'Ingrédients' },
    { key: 'howToUse', label: 'Mode d\'utilisation' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gris-warm pt-24 pb-4">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center gap-2 text-xs font-sans text-gris-DEFAULT">
          <Link href="/" className="hover:text-orange-DEFAULT transition-colors">Accueil</Link>
          <span>/</span>
          <Link href="/boutique" className="hover:text-orange-DEFAULT transition-colors">Boutique</Link>
          <span>/</span>
          <span className="text-noir-DEFAULT">{product.name}</span>
        </div>
      </div>

      {/* Product section */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Image */}
          <div className="relative">
            {product.badge && (
              <span className="absolute top-4 left-4 z-10 bg-orange-DEFAULT text-white text-xs font-sans tracking-widest uppercase px-3 py-1.5">
                {product.badge}
              </span>
            )}
            <div className="relative aspect-square bg-gris-warm overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            {/* Volume badge */}
            <div className="absolute bottom-4 right-4 bg-white border border-gray-200 px-4 py-2">
              <span className="text-xs font-sans text-gris-DEFAULT tracking-wide">{product.volume}</span>
            </div>
          </div>

          {/* Info */}
          <div>
            <Link href="/boutique" className="inline-flex items-center gap-2 text-xs font-sans text-gris-DEFAULT hover:text-orange-DEFAULT transition-colors tracking-wide mb-6">
              <ArrowLeft size={14} />
              Retour à la boutique
            </Link>

            <p className="text-xs font-sans tracking-[0.3em] uppercase text-orange-DEFAULT mb-2">{product.category}</p>
            <h1 className="font-script text-4xl md:text-5xl text-noir-DEFAULT leading-tight mb-2">{product.name}</h1>
            <p className="font-body text-lg text-gris-DEFAULT italic mb-6">{product.tagline}</p>

            {/* Stars */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-ocre-DEFAULT text-ocre-DEFAULT" />
                ))}
              </div>
              <span className="text-sm font-sans text-gris-DEFAULT">(4.9) · 127 avis</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="font-script text-4xl text-noir-DEFAULT">{product.price.toFixed(2)} €</span>
              {product.originalPrice && (
                <span className="text-lg text-gris-DEFAULT font-sans line-through">{product.originalPrice.toFixed(2)} €</span>
              )}
              {product.originalPrice && (
                <span className="text-xs bg-orange-DEFAULT text-white px-2 py-1 font-sans">
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              )}
            </div>

            {/* Quick benefits */}
            <ul className="space-y-2 mb-8">
              {product.benefits.slice(0, 3).map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-sm font-sans text-gris-DEFAULT">
                  <span className="text-orange-DEFAULT mt-0.5 flex-shrink-0">✓</span>
                  {b}
                </li>
              ))}
            </ul>

            {/* Quantity + Add to cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-gray-200">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-12 h-12 flex items-center justify-center hover:bg-gris-warm transition-colors font-sans text-xl"
                >
                  −
                </button>
                <span className="w-12 text-center font-sans text-sm font-600">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-12 h-12 flex items-center justify-center hover:bg-gris-warm transition-colors font-sans text-xl"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAdd}
                className={`flex-1 flex items-center justify-center gap-3 py-4 font-sans tracking-widest uppercase text-xs transition-all duration-300 ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-noir-DEFAULT text-white hover:bg-orange-DEFAULT'
                }`}
              >
                <ShoppingBag size={16} />
                {added ? '✓ Ajouté au panier !' : 'Ajouter au panier'}
              </button>
            </div>

            {/* PayPal button (simulated) */}
            <button className="w-full bg-[#FFC439] text-[#003087] font-sans font-600 text-sm py-3.5 hover:bg-[#F0B429] transition-colors mb-6">
              <span className="font-bold">Pay</span><span>Pal</span> — Commander rapidement
            </button>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
              {[
                { icon: <Truck size={16} />, label: "Livraison express" },
                { icon: <RefreshCw size={16} />, label: "Retours 14 jours" },
                { icon: <Shield size={16} />, label: "Paiement sécurisé" },
              ].map((t, i) => (
                <div key={i} className="flex flex-col items-center gap-2 text-center">
                  <div className="text-orange-DEFAULT">{t.icon}</div>
                  <span className="text-xs font-sans text-gris-DEFAULT">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-20 border-t border-gray-100">
          <div className="flex gap-0 border-b border-gray-100 overflow-x-auto">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`text-xs font-sans tracking-widest uppercase px-8 py-5 whitespace-nowrap transition-all border-b-2 ${
                  activeTab === tab.key
                    ? 'border-orange-DEFAULT text-orange-DEFAULT'
                    : 'border-transparent text-gris-DEFAULT hover:text-noir-DEFAULT'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="py-10 max-w-3xl">
            {activeTab === 'description' && (
              <div className="fade-in">
                <p className="font-body text-base text-gris-DEFAULT leading-relaxed mb-8">{product.description}</p>
                <h4 className="font-script text-xl text-noir-DEFAULT mb-4">Les bienfaits</h4>
                <ul className="space-y-3">
                  {product.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-sans text-gris-DEFAULT">
                      <span className="text-orange-DEFAULT font-600 mt-0.5 flex-shrink-0">0{i + 1}</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {activeTab === 'ingredients' && (
              <div className="fade-in">
                <p className="text-xs font-sans text-gris-DEFAULT tracking-wide mb-6 uppercase">
                  Ingrédients actifs principaux
                </p>
                <ul className="space-y-4">
                  {product.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-start gap-4 p-4 bg-gris-warm">
                      <span className="text-lg flex-shrink-0">🌿</span>
                      <span className="text-sm font-sans text-gris-DEFAULT leading-relaxed">{ing}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs font-sans text-gris-DEFAULT mt-6 italic">
                  * Formule sans sulfates, sans silicones occlusifs, sans parabènes et sans colorants artificiels.
                </p>
              </div>
            )}
            {activeTab === 'howToUse' && (
              <div className="fade-in">
                <h4 className="font-script text-xl text-noir-DEFAULT mb-6">Comment l&apos;utiliser</h4>
                <ol className="space-y-6">
                  {product.howToUse.map((step, i) => (
                    <li key={i} className="flex items-start gap-5">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-DEFAULT text-white text-xs font-sans flex items-center justify-center font-600">
                        {i + 1}
                      </span>
                      <p className="text-sm font-sans text-gris-DEFAULT leading-relaxed pt-1">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>

        {/* Related products */}
        <div className="mt-20 pt-12 border-t border-gray-100">
          <h3 className="font-script text-3xl text-noir-DEFAULT mb-10">Vous aimerez aussi</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
