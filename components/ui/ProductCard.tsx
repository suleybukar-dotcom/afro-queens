'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Star } from 'lucide-react';
import { useState } from 'react';
import { Product } from '@/lib/data';
import { useCart } from '@/lib/cart-context';

interface Props { product: Product; }

export default function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const [imgError, setImgError] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const discount = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <div className="group bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      {/* Image container */}
      <div className="relative overflow-hidden" style={{ aspectRatio: '1', background: 'linear-gradient(135deg, #1A0F00 0%, #2D1A06 50%, #150D02 100%)' }}>
        {!imgError ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            loading="lazy"
            className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          /* Fallback if image missing */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span className="text-4xl text-[#D4A843] opacity-60">♛</span>
            <span className="text-xs font-sans text-[#D4A843]/50 tracking-widest uppercase">Afro Queens</span>
          </div>
        )}

        {/* Badges */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-[#E07B39] text-white text-[10px] font-sans tracking-widest uppercase px-3 py-1">
            {product.badge}
          </span>
        )}
        {discount && (
          <span className="absolute top-3 right-3 bg-[#1A1A1A] text-[#D4A843] text-[10px] font-sans tracking-wide px-2 py-1">
            -{discount}%
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          style={{ background: 'rgba(26,15,0,0.55)' }}>
          <Link href={`/produit/${product.slug}`}
            className="border border-white text-white text-xs font-sans tracking-widest uppercase px-6 py-2.5 hover:bg-white hover:text-[#1A1A1A] transition-all">
            Voir le produit
          </Link>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <p className="text-[10px] font-sans tracking-[0.25em] uppercase text-[#E07B39] mb-1">{product.category}</p>
        <h3 className="font-script text-xl text-[#1A1A1A] leading-tight mb-1">{product.name}</h3>
        <p className="text-xs font-sans text-[#9E9E9E] italic mb-3">{product.tagline}</p>

        {/* Stars */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} className="fill-[#D4A843] text-[#D4A843]" />
          ))}
          <span className="text-[11px] text-[#9E9E9E] font-sans ml-1">(4.9)</span>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5 flex-wrap">
            <span className="font-script text-2xl text-[#1A1A1A]">{product.price.toFixed(2)}</span>
            <span className="text-xs text-[#6B6B6B] font-sans">$ CAD</span>
            {product.originalPrice && (
              <span className="text-xs text-[#BBBBBB] font-sans line-through">{product.originalPrice.toFixed(2)} $</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 text-white text-[10px] font-sans tracking-wide px-3 py-2.5 transition-all duration-300 flex-shrink-0 ${
              added ? 'bg-green-600' : 'bg-[#1A1A1A] hover:bg-[#E07B39]'
            }`}
          >
            <ShoppingBag size={12} />
            {added ? '✓ Ajouté' : 'Ajouter'}
          </button>
        </div>
      </div>
    </div>
  );
}
