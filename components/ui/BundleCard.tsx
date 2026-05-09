'use client';
import { ShoppingBag, Check } from 'lucide-react';
import { Bundle } from '@/lib/data';
import { useCart } from '@/lib/cart-context';
import { products } from '@/lib/data';
import { useState } from 'react';

interface Props { bundle: Bundle; }

export default function BundleCard({ bundle }: Props) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    // Add each product in the bundle to cart
    bundle.products.forEach(name => {
      const product = products.find(p => p.name === name);
      if (product) addItem(product);
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const regularTotal = bundle.price + bundle.savings;

  return (
    <div className="relative bg-white overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
      {/* Top color bar */}
      <div className="h-1.5 w-full" style={{ backgroundColor: bundle.color }} />

      {/* Badge */}
      {bundle.badge && (
        <div className="absolute top-4 right-4 text-white text-[10px] font-sans tracking-widest uppercase px-3 py-1"
          style={{ backgroundColor: bundle.color }}>
          {bundle.badge}
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        {/* Icon + Name */}
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{bundle.icon}</span>
          <div>
            <p className="text-[10px] font-sans tracking-[0.3em] uppercase text-[#9E9E9E]">Gamme</p>
            <h3 className="font-script text-2xl text-[#1A1A1A] leading-tight">{bundle.name}</h3>
          </div>
        </div>

        <p className="text-xs font-sans text-[#9E9E9E] italic mb-5">{bundle.tagline}</p>

        {/* Products list */}
        <ul className="space-y-2 mb-6 flex-1">
          {bundle.products.map((p, i) => (
            <li key={i} className="flex items-center gap-2.5 text-sm font-sans text-[#6B6B6B]">
              <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: bundle.color + '20', color: bundle.color }}>
                <Check size={10} strokeWidth={3} />
              </span>
              {p}
            </li>
          ))}
        </ul>

        {/* Savings */}
        {bundle.savings > 0 && (
          <div className="mb-4 px-3 py-2 text-xs font-sans text-center"
            style={{ backgroundColor: bundle.color + '12', color: bundle.color }}>
            🎁 Vous économisez <strong>${bundle.savings} CAD</strong> vs achat séparé
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex items-end justify-between gap-3 mt-auto">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-script text-3xl text-[#1A1A1A]">${bundle.price}</span>
              <span className="text-xs font-sans text-[#9E9E9E]">CAD</span>
            </div>
            {bundle.savings > 0 && (
              <span className="text-xs font-sans text-[#BBBBBB] line-through">${regularTotal} CAD</span>
            )}
          </div>
          <button
            onClick={handleAdd}
            className="flex items-center gap-2 text-white text-xs font-sans tracking-wide px-5 py-3 transition-all duration-300 flex-shrink-0"
            style={{ backgroundColor: added ? '#16a34a' : bundle.color }}
          >
            <ShoppingBag size={13} />
            {added ? '✓ Ajouté !' : 'Choisir'}
          </button>
        </div>
      </div>
    </div>
  );
}
