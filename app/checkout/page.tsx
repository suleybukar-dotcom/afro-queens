'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, ArrowLeft, Truck, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [step, setStep] = useState<'info' | 'payment' | 'success'>('info');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', postalCode: '', country: 'France',
  });

  const shipping = totalPrice >= 50 ? 0 : 5.90;
  const total = totalPrice + shipping;

  const handleInfoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePayment = async (method: 'stripe' | 'paypal') => {
    setLoading(true);
    // Simulate payment
    await new Promise(r => setTimeout(r, 2000));
    setLoading(false);
    setStep('success');
    clearCart();
  };

  if (items.length === 0 && step !== 'success') {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="font-script text-3xl text-noir-DEFAULT mb-4">Votre panier est vide</h2>
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
            <CheckCircle size={40} className="text-green-500" />
          </div>
          <span className="text-ocre-DEFAULT text-2xl block mb-4">♛</span>
          <h2 className="font-script text-4xl text-noir-DEFAULT mb-3">Commande confirmée !</h2>
          <p className="font-sans text-sm text-gris-DEFAULT mb-6 leading-relaxed">
            Merci pour votre commande, Reine ! Un email de confirmation a été envoyé à votre adresse. Votre couronne sera livrée dans 3-5 jours ouvrés.
          </p>
          <p className="text-xs font-sans text-orange-DEFAULT mb-8">
            N° de commande : AQ-{Math.random().toString(36).substr(2, 8).toUpperCase()}
          </p>
          <Link href="/" className="btn-primary inline-block">Retour à l&apos;accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gris-warm pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-10">
          <Link href="/boutique" className="inline-flex items-center gap-2 text-xs font-sans text-gris-DEFAULT hover:text-orange-DEFAULT transition-colors mb-4">
            <ArrowLeft size={14} /> Continuer mes achats
          </Link>
          <h1 className="font-script text-4xl text-noir-DEFAULT">Commande</h1>
          {/* Progress */}
          <div className="flex items-center gap-3 mt-6">
            {['info', 'payment'].map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-sans font-600 ${step === s || (step === 'payment' && i === 0) ? 'bg-orange-DEFAULT text-white' : 'bg-gray-200 text-gris-DEFAULT'}`}>
                  {i + 1}
                </div>
                <span className="text-xs font-sans text-gris-DEFAULT capitalize">{s === 'info' ? 'Informations' : 'Paiement'}</span>
                {i === 0 && <div className="w-8 h-px bg-gray-300" />}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Form */}
          <div className="lg:col-span-2">
            {step === 'info' && (
              <form onSubmit={handleInfoSubmit} className="bg-white p-8 space-y-6">
                <h2 className="font-script text-2xl text-noir-DEFAULT mb-6">Vos informations</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { key: 'firstName', label: 'Prénom', type: 'text', required: true },
                    { key: 'lastName', label: 'Nom', type: 'text', required: true },
                    { key: 'email', label: 'Email', type: 'email', required: true },
                    { key: 'phone', label: 'Téléphone', type: 'tel', required: false },
                  ].map(field => (
                    <div key={field.key}>
                      <label className="block text-xs font-sans tracking-widest uppercase text-gris-DEFAULT mb-2">
                        {field.label} {field.required && '*'}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [field.key]: e.target.value })}
                        className="w-full border border-gray-200 px-4 py-3.5 font-sans text-sm outline-none focus:border-orange-DEFAULT transition-colors"
                      />
                    </div>
                  ))}
                </div>

                <h3 className="font-script text-xl text-noir-DEFAULT pt-4">Adresse de livraison</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-sans tracking-widest uppercase text-gris-DEFAULT mb-2">Adresse *</label>
                    <input
                      type="text"
                      required
                      value={form.address}
                      onChange={e => setForm({ ...form, address: e.target.value })}
                      className="w-full border border-gray-200 px-4 py-3.5 font-sans text-sm outline-none focus:border-orange-DEFAULT transition-colors"
                      placeholder="Numéro et nom de rue"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans tracking-widest uppercase text-gris-DEFAULT mb-2">Code Postal *</label>
                      <input
                        type="text"
                        required
                        value={form.postalCode}
                        onChange={e => setForm({ ...form, postalCode: e.target.value })}
                        className="w-full border border-gray-200 px-4 py-3.5 font-sans text-sm outline-none focus:border-orange-DEFAULT transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans tracking-widest uppercase text-gris-DEFAULT mb-2">Ville *</label>
                      <input
                        type="text"
                        required
                        value={form.city}
                        onChange={e => setForm({ ...form, city: e.target.value })}
                        className="w-full border border-gray-200 px-4 py-3.5 font-sans text-sm outline-none focus:border-orange-DEFAULT transition-colors"
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Continuer vers le paiement →
                </button>
              </form>
            )}

            {step === 'payment' && (
              <div className="bg-white p-8">
                <h2 className="font-script text-2xl text-noir-DEFAULT mb-8">Choisir votre mode de paiement</h2>

                {/* Stripe */}
                <div className="border border-gray-200 p-6 mb-4 hover:border-orange-DEFAULT transition-colors">
                  <h3 className="font-sans text-sm font-600 text-noir-DEFAULT mb-2 flex items-center gap-2">
                    💳 Carte bancaire (Stripe)
                  </h3>
                  <p className="text-xs font-sans text-gris-DEFAULT mb-4">Paiement 100% sécurisé via Stripe. Visa, Mastercard, American Express acceptés.</p>
                  <div className="grid gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="border border-gray-200 px-4 py-3 font-sans text-sm outline-none focus:border-orange-DEFAULT transition-colors w-full"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" placeholder="MM/AA" className="border border-gray-200 px-4 py-3 font-sans text-sm outline-none focus:border-orange-DEFAULT transition-colors" />
                      <input type="text" placeholder="CVV" className="border border-gray-200 px-4 py-3 font-sans text-sm outline-none focus:border-orange-DEFAULT transition-colors" />
                    </div>
                  </div>
                  <button
                    onClick={() => handlePayment('stripe')}
                    disabled={loading}
                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? (
                      <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Traitement...</>
                    ) : (
                      <><Shield size={16} /> Payer {total.toFixed(2)} € en toute sécurité</>
                    )}
                  </button>
                </div>

                {/* PayPal */}
                <div className="border border-gray-200 p-6">
                  <h3 className="font-sans text-sm font-600 text-noir-DEFAULT mb-2">PayPal</h3>
                  <p className="text-xs font-sans text-gris-DEFAULT mb-4">Payez facilement avec votre compte PayPal.</p>
                  <button
                    onClick={() => handlePayment('paypal')}
                    disabled={loading}
                    className="w-full bg-[#FFC439] text-[#003087] font-sans font-700 py-4 hover:bg-[#F0B429] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {loading ? 'Traitement...' : `Pay Pal — Payer ${total.toFixed(2)} €`}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 mt-6 text-xs font-sans text-gris-DEFAULT">
                  <Shield size={14} className="text-green-500" />
                  Paiement 100% sécurisé · SSL 3D Secure · Données chiffrées
                </div>
              </div>
            )}
          </div>

          {/* Right: Order summary */}
          <div>
            <div className="bg-white p-6 sticky top-8">
              <h3 className="font-script text-2xl text-noir-DEFAULT mb-6">Votre commande</h3>
              <div className="space-y-4 mb-6">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex gap-3 items-center">
                    <div className="relative w-14 h-14 bg-gris-warm flex-shrink-0 overflow-hidden">
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                      <span className="absolute -top-1 -right-1 bg-orange-DEFAULT text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">{quantity}</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-script text-sm text-noir-DEFAULT">{product.name}</p>
                      <p className="text-xs text-gris-DEFAULT font-sans">{product.volume}</p>
                    </div>
                    <p className="font-sans text-sm font-600">{(product.price * quantity).toFixed(2)} €</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-3">
                <div className="flex justify-between text-sm font-sans text-gris-DEFAULT">
                  <span>Sous-total</span>
                  <span>{totalPrice.toFixed(2)} €</span>
                </div>
                <div className="flex justify-between text-sm font-sans text-gris-DEFAULT">
                  <span className="flex items-center gap-2"><Truck size={14} /> Livraison</span>
                  <span>{shipping === 0 ? <span className="text-green-600">Offerte !</span> : `${shipping.toFixed(2)} €`}</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between">
                  <span className="font-script text-xl text-noir-DEFAULT">Total</span>
                  <span className="font-script text-2xl text-orange-DEFAULT">{total.toFixed(2)} €</span>
                </div>
              </div>

              {totalPrice < 50 && (
                <div className="mt-4 p-3 bg-orange-DEFAULT/5 border border-orange-DEFAULT/20">
                  <p className="text-xs font-sans text-orange-DEFAULT text-center">
                    Encore {(50 - totalPrice).toFixed(2)} € pour bénéficier de la livraison offerte !
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
