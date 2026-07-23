'use client';
import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Truck, MessageCircle, ShieldCheck, Clock } from 'lucide-react';
import { shippingInfo, whatsappOrderUrl, contactInfo } from '@/lib/data';

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();

  const freeShipping = totalPrice >= shippingInfo.freeShippingThreshold;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-20 px-4">
        <div className="text-center">
          <h2 className="font-script text-3xl text-[#1A1A1A] mb-4">Votre panier est vide</h2>
          <Link href="/boutique" className="btn-primary inline-block">Découvrir nos produits</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F0EA] pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="mb-10">
          <Link href="/boutique" className="inline-flex items-center gap-2 text-xs font-sans text-[#9E9E9E] hover:text-[#E07B39] transition-colors mb-4">
            <ArrowLeft size={14}/> Continuer mes achats
          </Link>
          <h1 className="font-script text-4xl text-[#1A1A1A]">Commande</h1>
          <p className="text-sm font-sans text-[#6B6B6B] mt-3 max-w-xl">
            Vos commandes se finalisent directement sur WhatsApp avec notre équipe : simple, rapide et personnalisé.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white p-8">
              <h2 className="font-script text-2xl text-[#1A1A1A] mb-6">Commander via WhatsApp</h2>
              <ol className="space-y-5 mb-8">
                {[
                  "Cliquez sur le bouton « Commander sur WhatsApp »",
                  "Une conversation s'ouvre automatiquement avec notre équipe",
                  "Indiquez les produits de votre panier et votre adresse de livraison",
                  "Nous confirmons ensemble votre commande, la livraison et le règlement",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E07B39] text-white text-xs font-sans flex items-center justify-center font-bold">{i + 1}</span>
                    <p className="text-sm font-sans text-[#6B6B6B] leading-relaxed pt-1.5">{step}</p>
                  </li>
                ))}
              </ol>
              <a href={whatsappOrderUrl} target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-sans tracking-widest uppercase text-xs py-5 transition-colors">
                <MessageCircle size={18} fill="white" />
                Commander sur WhatsApp
              </a>
              <p className="text-xs font-sans text-[#9E9E9E] text-center mt-4">
                WhatsApp : {contactInfo.phone1} · Réponse en moins de 2 heures
              </p>
              <div className="grid grid-cols-3 gap-4 pt-8 mt-8 border-t border-gray-100">
                {[
                  { icon: <Truck size={16}/>, label: "Livraison offerte dès 200 CAD" },
                  { icon: <Clock size={16}/>, label: "Expédition 2-3 jours ouvrés" },
                  { icon: <ShieldCheck size={16}/>, label: "Certifié Santé Canada" },
                ].map((t, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 text-center">
                    <div className="text-[#E07B39]">{t.icon}</div>
                    <span className="text-xs font-sans text-[#6B6B6B]">{t.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div>
            <div className="bg-white p-6 sticky top-8">
              <h3 className="font-script text-2xl text-[#1A1A1A] mb-6">Votre commande</h3>
              <div className="space-y-4 mb-6">
                {items.map(({product,quantity}) => (
                  <div key={product.id} className="flex gap-3 items-center">
                    <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden bg-[#F5F0EA]">
                      <Image src={product.image} alt={product.name} fill className="object-cover"/>
                      <span className="absolute -top-1 -right-1 bg-[#E07B39] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center">{quantity}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-script text-sm text-[#1A1A1A] leading-tight">{product.name}</p>
                      <p className="text-xs text-[#9E9E9E] font-sans">{product.volume}</p>
                    </div>
                    <p className="font-sans text-sm font-bold">{(product.price * quantity).toFixed(2)} $</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-4 space-y-3">
                <div className="flex justify-between text-sm font-sans text-[#6B6B6B]">
                  <span>Sous-total</span><span>{totalPrice.toFixed(2)} $ CAD</span>
                </div>
                <div className="flex justify-between text-sm font-sans text-[#6B6B6B]">
                  <span className="flex items-center gap-2"><Truck size={13}/>Livraison</span>
                  <span>{freeShipping ? <span className="text-green-600 font-bold">Offerte !</span> : 'À confirmer sur WhatsApp'}</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span className="font-script text-xl text-[#1A1A1A]">Total</span>
                  <span className="font-script text-2xl text-[#E07B39]">{totalPrice.toFixed(2)} $ CAD</span>
                </div>
              </div>
              {!freeShipping && (
                <div className="mt-4 p-3 bg-[#E07B39]/5 border border-[#E07B39]/20">
                  <p className="text-xs font-sans text-[#E07B39] text-center">
                    Encore {(shippingInfo.freeShippingThreshold - totalPrice).toFixed(2)} $ pour la livraison offerte !
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
