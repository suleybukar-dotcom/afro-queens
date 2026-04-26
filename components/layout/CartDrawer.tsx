'use client';

import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, totalItems } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md z-50 bg-white flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-orange-DEFAULT" />
            <span className="font-sans font-500 tracking-widest uppercase text-sm text-noir-DEFAULT">
              Panier ({totalItems})
            </span>
          </div>
          <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-gris-DEFAULT">
              <ShoppingBag size={48} className="text-gray-200" />
              <p className="font-sans text-sm tracking-wide">Votre panier est vide</p>
              <button
                onClick={() => setIsOpen(false)}
                className="btn-outline text-xs mt-4"
              >
                Découvrir nos produits
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex gap-4 items-start">
                  <div className="relative w-20 h-20 flex-shrink-0 bg-gris-warm overflow-hidden rounded">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-script text-base text-noir-DEFAULT leading-tight">{product.name}</h4>
                    <p className="text-xs text-gris-DEFAULT font-sans mt-1">{product.volume}</p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 border border-gray-200">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="w-8 text-center font-sans text-sm">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <span className="font-sans font-600 text-orange-DEFAULT">
                        {(product.price * quantity).toFixed(2)} €
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeItem(product.id)}
                    className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="p-6 border-t border-gray-100 bg-gris-warm">
            <div className="flex justify-between items-center mb-4">
              <span className="font-sans text-sm tracking-wide text-gris-DEFAULT uppercase">Total</span>
              <span className="font-script text-2xl text-noir-DEFAULT">{totalPrice.toFixed(2)} €</span>
            </div>
            <p className="text-xs text-gris-DEFAULT font-sans mb-4 text-center">
              Livraison gratuite à partir de 50€ · Taxes incluses
            </p>
            <Link
              href="/checkout"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-center block"
            >
              Commander maintenant
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="w-full text-center text-xs font-sans text-gris-DEFAULT hover:text-noir-DEFAULT mt-3 transition-colors tracking-wide"
            >
              Continuer mes achats →
            </button>
          </div>
        )}
      </div>
    </>
  );
}
