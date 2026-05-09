import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { products } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import BundlesSection from '@/components/sections/BundlesSection';
import ShippingBanner from '@/components/sections/ShippingBanner';

const featuredProducts = products.filter(p => p.featured);

const testimonials = [
  { name: "Aicha M.", text: "Le sérum huileux a transformé mes cheveux en 2 semaines. Fini la sécheresse !", stars: 5 },
  { name: "Fatou D.", text: "Le masque est incroyable ! Mes cheveux n'ont jamais été aussi souples et brillants.", stars: 5 },
  { name: "Mariama K.", text: "La crème capillaire est parfaite pour définir mes boucles. J'adore !", stars: 5 },
];

export default function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/products-grid.jpeg" alt="Afro Queens" fill className="object-cover opacity-20" priority />
        </div>
        <div className="absolute inset-0" style={{background:'linear-gradient(135deg,rgba(26,15,0,0.75) 0%,rgba(61,43,10,0.55) 100%)'}}/>
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white fade-in">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="text-[#D4A843]">♛</span>
              <span className="text-xs tracking-[0.4em] uppercase font-sans text-[#D4A843]">La Couronne de vos Cheveux Naturels</span>
              <span className="text-[#D4A843]">♛</span>
            </div>
            <h1 className="font-script text-5xl md:text-7xl leading-tight mb-6">
              <span className="text-white">Sublimez </span>
              <span className="gold-shimmer">votre</span>
              <br /><span className="text-white">couronne</span>
            </h1>
            <p className="font-body text-lg text-white/80 leading-relaxed mb-10 max-w-lg">
              Des formules naturelles et puissantes, conçues avec amour pour les cheveux crépus, bouclés et frisés.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/boutique" className="btn-primary inline-flex items-center gap-3 justify-center group">
                Découvrir la gamme <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/a-propos" className="inline-flex items-center gap-2 justify-center border border-white text-white font-sans tracking-widest uppercase text-xs px-8 py-4 hover:bg-white hover:text-[#1A1A1A] transition-all duration-300">
                Notre histoire
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 mt-12">
              {['Livraison offerte dès 100$ CAD','Sans sulfates','Vegan & naturel','Paiement sécurisé'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={13} className="text-[#D4A843]" />
                  <span className="text-white/70 text-xs font-sans">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center justify-center slide-up delay-200">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full border border-[#D4A843]/20" style={{transform:'scale(1.15)'}}/>
              <div className="absolute inset-0 rounded-full border border-[#E07B39]/10" style={{transform:'scale(1.3)'}}/>
              <div className="relative rounded-full overflow-hidden w-full h-full">
                <Image src="/images/logo.jpeg" alt="Afro Queens" fill className="object-cover animate-float" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-12" style={{background:'linear-gradient(to bottom, transparent, #D4A843)'}}/>
          <span className="text-white/40 text-[10px] tracking-widest uppercase font-sans">Découvrir</span>
        </div>
      </section>

      {/* SHIPPING BANNER */}
      <ShippingBanner />

      {/* VALUES */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🌿', title: "100% Naturel", desc: "Ingrédients botaniques sélectionnés avec soin pour chaque couronne" },
              { icon: '💧', title: "Hydratation Intense", desc: "Formules conçues pour les besoins uniques des cheveux afro" },
              { icon: '👑', title: "Premium", desc: "Qualité royale au service de votre beauté naturelle" },
            ].map((val, i) => (
              <div key={i} className="text-center p-8 bg-[#F5F0EA] hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">{val.icon}</div>
                <h3 className="font-script text-xl text-[#1A1A1A] mb-2">{val.title}</h3>
                <p className="text-sm font-sans text-[#6B6B6B] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 bg-[#F5F0EA]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#E07B39] mb-4">Nos Best-sellers</p>
            <h2 className="font-script text-4xl md:text-5xl text-[#1A1A1A]">Produits phares</h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="w-12 h-px bg-[#D4A843]"/>
              <span className="text-[#D4A843] text-lg">♛</span>
              <div className="w-12 h-px bg-[#D4A843]"/>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => <ProductCard key={product.id} product={product} />)}
          </div>
          <div className="text-center mt-12">
            <Link href="/boutique" className="btn-outline inline-flex items-center gap-3 group">
              Voir tous nos produits <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* BUNDLES */}
      <BundlesSection showCta={false} />

      {/* BRAND STORY */}
      <section className="py-24 bg-white max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#D4A843]/30 z-0"/>
            <div className="grid grid-cols-2 gap-3 relative z-10">
              {products.slice(0,4).map(p => (
                <div key={p.id} className="rounded overflow-hidden flex items-center justify-center p-3" style={{background:'#1A0F00',aspectRatio:'1'}}>
                  <Image src={p.image} alt={p.name} width={150} height={150} className="w-full h-full object-contain"/>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[#E07B39]/30 z-0"/>
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#E07B39] mb-4">Notre mission</p>
            <h2 className="font-script text-4xl md:text-5xl text-[#1A1A1A] mb-6 leading-tight">
              Inspirée par la nature,<br/><em className="text-[#E07B39]">créée pour votre couronne</em>
            </h2>
            <div className="w-16 h-0.5 bg-[#D4A843] mb-6"/>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed mb-4">
              Afro Queens est née d&apos;un constat simple : les cheveux afro, bouclés et crépus manquent cruellement de soins vraiment adaptés à leur nature unique.
            </p>
            <p className="font-body text-base text-[#6B6B6B] leading-relaxed mb-8">
              Nous avons créé des formules qui s&apos;inspirent des savoirs ancestraux africains, enrichis d&apos;actifs botaniques de haute performance — parce que chaque couronne mérite le meilleur.
            </p>
            <Link href="/a-propos" className="btn-dark inline-flex items-center gap-3 group">
              Lire notre histoire <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#F5F0EA]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#E07B39] mb-4">La famille des reines</p>
            <h2 className="font-script text-4xl md:text-5xl text-[#1A1A1A]">Ce qu&apos;elles en pensent</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t,i) => (
              <div key={i} className="bg-white p-8 relative">
                <div className="text-5xl text-[#D4A843]/20 font-script absolute top-4 left-6">&ldquo;</div>
                <div className="flex mb-4 mt-4">
                  {[...Array(t.stars)].map((_,j) => <Star key={j} size={14} className="fill-[#D4A843] text-[#D4A843]" />)}
                </div>
                <p className="font-body text-base text-[#6B6B6B] italic leading-relaxed mb-6">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#E07B39] flex items-center justify-center text-white font-sans text-sm font-bold">{t.name[0]}</div>
                  <div>
                    <p className="font-sans text-sm font-bold text-[#1A1A1A]">{t.name}</p>
                    <p className="text-xs text-[#6B6B6B] font-sans">Cliente vérifiée ✓</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-24 overflow-hidden" style={{backgroundColor:'#1A0F00'}}>
        <div className="absolute inset-0">
          <Image src="/images/products-grid.jpeg" alt="bg" fill className="object-cover opacity-10" />
        </div>
        <div className="absolute inset-0" style={{background:'linear-gradient(135deg,rgba(26,15,0,0.94) 0%,rgba(61,43,10,0.90) 50%,rgba(26,15,0,0.94) 100%)'}}/>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
          <span className="text-[#D4A843] text-3xl mb-6 block">♛</span>
          <h2 className="font-script text-4xl md:text-6xl text-white mb-6">Votre couronne.<br />Notre mission.</h2>
          <p className="text-white/90 font-sans text-sm mb-4 leading-relaxed max-w-xl mx-auto">
            Rejoignez des milliers de reines qui ont déjà adopté Afro Queens comme leur rituel capillaire quotidien.
          </p>
          <p className="text-[#D4A843] text-xs font-sans mb-10 tracking-wide">
            🚚 Livraison offerte à partir de 100$ CAD · Expédition sous 48h · Hawkesbury, Ontario
          </p>
          <Link href="/boutique" className="inline-flex items-center gap-3 bg-[#E07B39] text-white font-sans tracking-widest uppercase text-xs px-10 py-5 hover:bg-[#D4A843] transition-all duration-300 group">
            Commencer mon rituel <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
