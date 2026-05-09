'use client';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, ArrowLeft, Truck, CheckCircle } from 'lucide-react';
import { shippingInfo } from '@/lib/data';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<'info'|'payment'|'success'>('info');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ firstName:'', lastName:'', email:'', phone:'', address:'', city:'', postalCode:'', country:'Canada' });

  const shipping = totalPrice >= shippingInfo.freeShippingThreshold ? 0 : 9.99;
  const total = totalPrice + shipping;

  const handleInfoSubmit = (e: React.FormEvent) => { e.preventDefault(); setStep('payment'); };
  const handlePayment = async () => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false); setStep('success'); clearCart();
  };

  if (items.length === 0 && step !== 'success') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-20 px-4">
        <div className="text-center">
          <h2 className="font-script text-3xl text-[#1A1A1A] mb-4">Votre panier est vide</h2>
          <Link href="/boutique" className="btn-primary inline-block">Découvrir nos produits</Link>
        </div>
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-20 px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-500"/>
          </div>
          <span className="text-[#D4A843] text-2xl block mb-4">♛</span>
          <h2 className="font-script text-4xl text-[#1A1A1A] mb-3">Commande confirmée !</h2>
          <p className="font-sans text-sm text-[#6B6B6B] mb-2 leading-relaxed">
            Merci pour votre commande ! Un email de confirmation a été envoyé. Votre couronne sera livrée en {shippingInfo.deliveryDays}.
          </p>
          <p className="text-xs font-sans text-[#E07B39] mb-8">
            N° de commande : AQ-{Math.random().toString(36).substr(2,8).toUpperCase()}
          </p>
          <Link href="/" className="btn-primary inline-block">Retour à l&apos;accueil</Link>
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
          <div className="flex items-center gap-3 mt-6">
            {['info','payment'].map((s,i) => (
              <div key={s} className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-sans font-bold ${step === s || (step === 'payment' && i===0) ? 'bg-[#E07B39] text-white' : 'bg-gray-200 text-[#9E9E9E]'}`}>{i+1}</div>
                <span className="text-xs font-sans text-[#9E9E9E] capitalize">{s==='info'?'Informations':'Paiement'}</span>
                {i===0 && <div className="w-8 h-px bg-gray-300"/>}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            {step === 'info' && (
              <form onSubmit={handleInfoSubmit} className="bg-white p-8 space-y-6">
                <h2 className="font-script text-2xl text-[#1A1A1A] mb-6">Vos informations</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[{key:'firstName',label:'Prénom',type:'text',req:true},{key:'lastName',label:'Nom',type:'text',req:true},{key:'email',label:'Email',type:'email',req:true},{key:'phone',label:'Téléphone',type:'tel',req:false}].map(f => (
                    <div key={f.key}>
                      <label className="block text-xs font-sans tracking-widest uppercase text-[#9E9E9E] mb-2">{f.label} {f.req&&'*'}</label>
                      <input type={f.type} required={f.req} value={form[f.key as keyof typeof form]} onChange={e=>setForm({...form,[f.key]:e.target.value})}
                        className="w-full border border-gray-200 px-4 py-3.5 font-sans text-sm outline-none focus:border-[#E07B39] transition-colors"/>
                    </div>
                  ))}
                </div>
                <h3 className="font-script text-xl text-[#1A1A1A] pt-4">Adresse de livraison</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-sans tracking-widest uppercase text-[#9E9E9E] mb-2">Adresse *</label>
                    <input type="text" required value={form.address} onChange={e=>setForm({...form,address:e.target.value})}
                      className="w-full border border-gray-200 px-4 py-3.5 font-sans text-sm outline-none focus:border-[#E07B39] transition-colors" placeholder="Numéro et nom de rue"/>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[{key:'postalCode',label:'Code Postal'},{key:'city',label:'Ville'},{key:'country',label:'Province/Pays'}].map(f => (
                      <div key={f.key}>
                        <label className="block text-xs font-sans tracking-widest uppercase text-[#9E9E9E] mb-2">{f.label} *</label>
                        <input type="text" required value={form[f.key as keyof typeof form]} onChange={e=>setForm({...form,[f.key]:e.target.value})}
                          className="w-full border border-gray-200 px-4 py-3.5 font-sans text-sm outline-none focus:border-[#E07B39] transition-colors"/>
                      </div>
                    ))}
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full">Continuer vers le paiement →</button>
              </form>
            )}

            {step === 'payment' && (
              <div className="bg-white p-8">
                <h2 className="font-script text-2xl text-[#1A1A1A] mb-8">Mode de paiement</h2>
                <div className="border border-gray-200 p-6 mb-4">
                  <h3 className="font-sans text-sm font-bold text-[#1A1A1A] mb-2">💳 Carte bancaire (Stripe)</h3>
                  <p className="text-xs font-sans text-[#9E9E9E] mb-4">Paiement 100% sécurisé — Visa, Mastercard, Amex</p>
                  <div className="grid gap-4 mb-4">
                    <input type="text" placeholder="1234 5678 9012 3456" className="border border-gray-200 px-4 py-3 font-sans text-sm outline-none focus:border-[#E07B39] w-full"/>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="MM/AA" className="border border-gray-200 px-4 py-3 font-sans text-sm outline-none focus:border-[#E07B39]"/>
                      <input type="text" placeholder="CVV" className="border border-gray-200 px-4 py-3 font-sans text-sm outline-none focus:border-[#E07B39]"/>
                    </div>
                  </div>
                  <button onClick={handlePayment} disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60">
                    {loading ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"/>Traitement...</>
                      : <><Shield size={16}/>Payer {total.toFixed(2)} $ CAD</>}
                  </button>
                </div>
                <div className="border border-gray-200 p-6">
                  <h3 className="font-sans text-sm font-bold text-[#1A1A1A] mb-2">PayPal</h3>
                  <button onClick={handlePayment} disabled={loading}
                    className="w-full bg-[#FFC439] text-[#003087] font-sans font-bold py-4 hover:bg-[#F0B429] transition-colors disabled:opacity-60">
                    {loading ? 'Traitement...' : `PayPal — ${total.toFixed(2)} $ CAD`}
                  </button>
                </div>
                <div className="flex items-center justify-center gap-2 mt-6 text-xs font-sans text-[#9E9E9E]">
                  <Shield size={13} className="text-green-500"/>Paiement sécurisé SSL · 3D Secure
                </div>
              </div>
            )}
          </div>

          {/* Order summary */}
          <div>
            <div className="bg-white p-6 sticky top-8">
              <h3 className="font-script text-2xl text-[#1A1A1A] mb-6">Votre commande</h3>
              <div className="space-y-4 mb-6">
                {items.map(({product,quantity}) => (
                  <div key={product.id} className="flex gap-3 items-center">
                    <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden" style={{background:'#1A0F00'}}>
                      <Image src={product.image} alt={product.name} fill className="object-contain p-1" unoptimized/>
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
                  <span>{shipping === 0 ? <span className="text-green-600 font-bold">Offerte !</span> : `${shipping.toFixed(2)} $ CAD`}</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span className="font-script text-xl text-[#1A1A1A]">Total</span>
                  <span className="font-script text-2xl text-[#E07B39]">{total.toFixed(2)} $ CAD</span>
                </div>
              </div>
              {totalPrice < shippingInfo.freeShippingThreshold && (
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
