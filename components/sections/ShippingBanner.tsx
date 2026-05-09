import { Truck, Shield, RefreshCw, Clock } from 'lucide-react';

export default function ShippingBanner() {
  const items = [
    { icon: <Truck size={20} />, title: "Livraison offerte", desc: "À partir de 100$ CAD" },
    { icon: <Clock size={20} />, title: "Livraison express", desc: "2-3 jours ouvrés" },
    { icon: <Shield size={20} />, title: "Paiement sécurisé", desc: "SSL · Stripe · PayPal" },
    { icon: <RefreshCw size={20} />, title: "Retours gratuits", desc: "Sous 14 jours" },
  ];
  return (
    <section className="bg-[#1A0F00] py-8 border-t border-[#D4A843]/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="text-[#D4A843] flex-shrink-0">{item.icon}</div>
              <div>
                <p className="text-white text-xs font-sans font-bold tracking-wide">{item.title}</p>
                <p className="text-white/50 text-[11px] font-sans">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
