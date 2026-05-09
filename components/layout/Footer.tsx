import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Shield, Truck } from 'lucide-react';
import { contactInfo } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Shipping bar */}
      <div className="bg-[#E07B39] py-3">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap items-center justify-center gap-6 text-white text-xs font-sans">
          <span className="flex items-center gap-2"><Truck size={14}/>Livraison offerte à partir de 100$ CAD</span>
          <span className="hidden md:block opacity-40">|</span>
          <span>Expédition 2-3 jours ouvrés depuis Hawkesbury, Ontario</span>
          <span className="hidden md:block opacity-40">|</span>
          <span className="flex items-center gap-2"><Shield size={14}/>Paiement 100% sécurisé</span>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#D4A843] mb-2">Newsletter Afro Queens</p>
            <h3 className="font-script text-2xl md:text-3xl text-white">Rejoignez la famille des reines</h3>
            <p className="text-white/50 text-sm font-sans mt-1">-10% sur votre première commande + conseils exclusifs</p>
          </div>
          <form className="flex gap-0 w-full md:w-auto">
            <input type="email" placeholder="votre@email.com"
              className="bg-white/10 border border-white/20 text-white placeholder-white/40 px-5 py-3 font-sans text-sm outline-none flex-1 md:w-64 focus:border-[#D4A843] transition-colors"/>
            <button type="submit" className="bg-[#E07B39] text-white px-6 py-3 text-xs font-sans tracking-widest uppercase hover:bg-[#C4622A] transition-colors whitespace-nowrap">
              S&apos;abonner
            </button>
          </form>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="relative w-12 h-12">
              <Image src="/images/logo.jpeg" alt="Afro Queens" fill className="object-contain"/>
            </div>
            <div>
              <p className="font-script text-xl text-white">Afro Queens</p>
              <p className="text-[9px] tracking-[0.2em] uppercase text-[#D4A843]">La couronne naturelle</p>
            </div>
          </div>
          <p className="text-white/50 text-sm font-sans leading-relaxed mb-4">
            Des formules naturelles et puissantes conçues avec amour pour sublimer vos cheveux crépus, bouclés et frisés.
          </p>
          <p className="text-white/30 text-xs font-sans">📍 Hawkesbury, Ontario, Canada</p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-[#D4A843] mb-6">Navigation</h4>
          <ul className="space-y-4">
            {[['/', 'Accueil'],['/boutique','La Boutique'],['/a-propos','Notre Histoire'],['/blog','Le Blog'],['/contact','Contact'],['/faq','FAQ']].map(([href,label]) => (
              <li key={href}><Link href={href} className="text-white/50 text-sm font-sans hover:text-[#E07B39] transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Produits */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-[#D4A843] mb-6">Nos Produits</h4>
          <ul className="space-y-3">
            {[
              ['Shampoing Capillaire', '30$ CAD'],
              ['Sérum Huileux Fortifiant', '30$ CAD'],
              ['Spray Capillaire', '30$ CAD'],
              ['Crème Capillaire Protéinée', '35$ CAD'],
              ['Masque Capillaire', '35$ CAD'],
            ].map(([name, price]) => (
              <li key={name} className="flex items-center justify-between">
                <Link href="/boutique" className="text-white/50 text-sm font-sans hover:text-[#E07B39] transition-colors">{name}</Link>
                <span className="text-[#D4A843] text-xs font-sans">{price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-[#D4A843] mb-6">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Mail size={15} className="text-[#E07B39] mt-0.5 flex-shrink-0"/>
              <a href={`mailto:${contactInfo.email}`} className="text-white/50 text-sm font-sans hover:text-white transition-colors">{contactInfo.email}</a>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={15} className="text-[#E07B39] mt-0.5 flex-shrink-0"/>
              <div>
                <a href={`tel:${contactInfo.phone1.replace(/\s/g,'')}`} className="text-white/50 text-sm font-sans hover:text-white transition-colors block">{contactInfo.phone1}</a>
                <a href={`tel:${contactInfo.phone2.replace(/\s/g,'')}`} className="text-white/50 text-sm font-sans hover:text-white transition-colors block">{contactInfo.phone2}</a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={15} className="text-[#E07B39] mt-0.5 flex-shrink-0"/>
              <span className="text-white/50 text-sm font-sans">Hawkesbury, Ontario, Canada</span>
            </li>
          </ul>
          <div className="mt-6 p-4 border border-white/10 bg-white/5">
            <div className="flex items-center gap-2 mb-1">
              <Shield size={11} className="text-[#D4A843]"/>
              <p className="text-xs text-white/40 font-sans">Paiement sécurisé · SSL · 3D Secure</p>
            </div>
            <p className="text-xs text-white/40 font-sans">🚚 Livraison offerte dès 100$ CAD</p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-sans">© {new Date().getFullYear()} Afro Queens · Tous droits réservés · Hawkesbury, Ontario</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-white/30 text-xs font-sans hover:text-white transition-colors">Mentions légales</Link>
            <Link href="/cgv" className="text-white/30 text-xs font-sans hover:text-white transition-colors">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
