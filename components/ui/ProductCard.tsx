'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Star } from 'lucide-react';
import { Product } from '@/lib/data';
import { useCart } from '@/lib/cart-context';

interface ProductCardProps { product: Product; }

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  return (
    <div className="group bg-white card-hover overflow-hidden">
      <div className="relative overflow-hidden bg-[#1A0F00]" style={{aspectRatio:'1'}}>
        <Image src={product.image} alt={product.name} fill className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"/>
        {product.badge && <span className="product-badge">{product.badge}</span>}
        {product.originalPrice && (
          <span className="absolute top-3 right-3 bg-[#1A1A1A] text-[#D4A843] text-xs font-sans tracking-wide px-2 py-1">
            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </span>
        )}
        <div className="absolute inset-0 bg-[#1A1A1A]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link href={`/produit/${product.slug}`} className="border border-white text-white text-xs font-sans tracking-widest uppercase px-6 py-3 hover:bg-white hover:text-[#1A1A1A] transition-all">
            Voir le produit
          </Link>
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-sans tracking-widest uppercase text-[#E07B39] mb-1">{product.category}</p>
        <h3 className="font-script text-xl text-[#1A1A1A] leading-tight mb-1">{product.name}</h3>
        <p className="text-xs font-sans text-[#6B6B6B] italic mb-3">{product.tagline}</p>
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_,i) => <Star key={i} size={12} className="fill-[#D4A843] text-[#D4A843]"/>)}
          <span className="text-xs text-[#6B6B6B] font-sans ml-1">(4.9)</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="font-script text-2xl text-[#1A1A1A]">{product.price.toFixed(2)} $</span>
            <span className="text-xs text-[#9E9E9E] font-sans ml-1">CAD</span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-[#9E9E9E] font-sans line-through">{product.originalPrice.toFixed(2)} $</span>
            )}
          </div>
          <button onClick={() => addItem(product)}
            className="flex items-center gap-2 text-white text-xs font-sans tracking-wide px-4 py-2.5 hover:bg-[#E07B39] transition-colors duration-300"
            style={{backgroundColor:'#1A1A1A'}}>
            <ShoppingBag size={14}/> Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
