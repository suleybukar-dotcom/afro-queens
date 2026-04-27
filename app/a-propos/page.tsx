import Link from 'next/link';
import { ArrowRight, Heart, Leaf, Crown, Users, Sparkles } from 'lucide-react';

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ── full dark, no images */}
      <div className="relative bg-[#1A0F00] text-white pt-32 pb-28 overflow-hidden">
        {/* Ambient glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #E07B39, transparent)' }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full opacity-8 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4A843, transparent)' }} />

        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs tracking-[0.5em] uppercase text-[#D4A843] mb-6 fade-in">Notre identité</p>

          {/* Crown divider */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-[#D4A843]/40" />
            <span className="text-[#D4A843] text-2xl">♛</span>
            <div className="w-16 h-px bg-[#D4A843]/40" />
          </div>

          <h1 className="font-script text-5xl md:text-7xl text-white mb-8 fade-in">
            L&apos;histoire d&apos;<em className="text-[#E07B39]">Afro Queens</em>
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed slide-up delay-200">
            Une marque née de la passion, de l&apos;amour du naturel et d&apos;une conviction profonde —
            chaque femme mérite de porter sa couronne avec fierté.
          </p>
        </div>
      </div>

      {/* ── STORY ── text only, no images */}
      <section className="py-24 max-w-5xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-5 gap-12 items-start">

          {/* Left: label + quote */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-[0.3em] uppercase text-[#E07B39] mb-4">Notre origine</p>
            <div className="w-10 h-0.5 bg-[#D4A843] mb-8" />
            {/* Stats block */}
            <div className="space-y-8">
              {[
                { number: '5', label: 'Produits naturels' },
                { number: '100%', label: 'Sans sulfates & parabènes' },
                { number: '∞', label: 'Amour pour votre couronne' },
              ].map((s, i) => (
                <div key={i} className="border-l-2 border-[#E07B39] pl-5">
                  <p className="font-script text-3xl text-[#1A1A1A]">{s.number}</p>
                  <p className="text-xs font-sans text-[#6B6B6B] tracking-wide mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: story text */}
          <div className="md:col-span-3">
            <h2 className="font-script text-3xl md:text-4xl text-[#1A1A1A] mb-6 leading-tight">
              Une histoire de cheveux,<br />
              <em className="text-[#E07B39]">d&apos;identité et de fierté</em>
            </h2>

            <div className="space-y-5 font-body text-base text-[#6B6B6B] leading-relaxed">
              <p>
                Afro Queens est née d&apos;une frustration partagée par des millions de femmes à travers
                le monde : trouver des soins capillaires vraiment adaptés aux cheveux afro, bouclés
                et crépus était un véritable parcours du combattant.
              </p>
              <p>
                Trop de produits sur le marché promettaient monts et merveilles mais livraient des
                formules chargées de silicones, de sulfates et d&apos;ingrédients qui nuisaient plus
                qu&apos;ils n&apos;aidaient. Nos cheveux méritaient mieux.
              </p>
              <p>
                Inspirées par les savoirs ancestraux africains — ces recettes de grand-mères transmises
                de génération en génération — et armées d&apos;une passion pour la cosmétique naturelle,
                nous avons décidé de créer la gamme que nous aurions voulu trouver.
              </p>
            </div>

            {/* Pull quote */}
            <div className="mt-10 p-6 border-l-4 border-[#E07B39] bg-[#F5F0EA]">
              <p className="font-script text-xl md:text-2xl text-[#1A1A1A] italic leading-relaxed">
                &ldquo;Chaque couronne mérite le meilleur soin royal — naturel, puissant et authentique.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="py-24 bg-[#F5F0EA]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#E07B39] mb-4">Nos valeurs</p>
            <h2 className="font-script text-4xl md:text-5xl text-[#1A1A1A]">Ce qui nous guide chaque jour</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🌿', title: 'Naturalité', desc: 'Nous sélectionnons chaque ingrédient avec soin, en privilégiant les actifs botaniques et les extraits naturels.' },
              { icon: '💛', title: 'Authenticité', desc: 'Nos formules célèbrent la beauté naturelle des cheveux afro dans toute leur diversité et leur splendeur.' },
              { icon: '✨', title: 'Excellence', desc: 'Aucun compromis sur la qualité. Chaque produit est développé et testé avec la plus grande rigueur.' },
              { icon: '👑', title: 'Communauté', desc: 'Afro Queens est une famille de reines qui s\'entraident et célèbrent leur beauté naturelle ensemble.' },
            ].map((val, i) => (
              <div key={i} className="bg-white p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl mb-5">{val.icon}</div>
                <h3 className="font-script text-xl text-[#1A1A1A] mb-3">{val.title}</h3>
                <p className="text-sm font-sans text-[#6B6B6B] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MISSION & VISION ── */}
      <section className="py-24 bg-[#1A0F00] text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="border-l-2 border-[#E07B39] pl-8">
              <p className="text-xs tracking-[0.3em] uppercase text-[#D4A843] mb-4">Notre mission</p>
              <h3 className="font-script text-3xl text-white mb-5">Sublimer chaque couronne</h3>
              <p className="font-sans text-white/65 text-sm leading-relaxed">
                Offrir à chaque femme aux cheveux naturels des soins de haute qualité, formulés
                spécifiquement pour leurs besoins uniques, afin de transformer leur routine capillaire
                en un véritable rituel de bien-être et de confiance en soi.
              </p>
            </div>
            <div className="border-l-2 border-[#D4A843] pl-8">
              <p className="text-xs tracking-[0.3em] uppercase text-[#D4A843] mb-4">Notre vision</p>
              <h3 className="font-script text-3xl text-white mb-5">Un monde de reines épanouies</h3>
              <p className="font-sans text-white/65 text-sm leading-relaxed">
                Devenir la référence des soins capillaires naturels pour les femmes afro-descendantes —
                une marque qui célèbre la diversité des textures et place la couronne naturelle
                là où elle mérite d&apos;être : au sommet.
              </p>
            </div>
          </div>

          {/* Engagement */}
          <div className="mt-20 pt-16 border-t border-white/10 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#D4A843]/40" />
              <span className="text-[#D4A843] text-xs tracking-[0.4em] uppercase">Notre engagement</span>
              <div className="w-12 h-px bg-[#D4A843]/40" />
            </div>
            <p className="font-script text-2xl md:text-4xl text-white leading-relaxed max-w-3xl mx-auto">
              &ldquo;Pas de sulfates. Pas de silicones. Pas de parabènes.<br />
              <em className="text-[#D4A843]">Juste la nature, la science et l&apos;amour de votre couronne.</em>&rdquo;
            </p>

            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {['Sans sulfates', 'Sans silicones', 'Sans parabènes', 'Vegan', '100% Naturel'].map(b => (
                <span key={b} className="border border-[#D4A843]/40 text-[#D4A843] text-xs font-sans tracking-widest uppercase px-4 py-2">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 text-center bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <span className="text-[#D4A843] text-2xl block mb-4">♛</span>
          <h3 className="font-script text-4xl text-[#1A1A1A] mb-4">Prête à rejoindre la famille ?</h3>
          <p className="text-sm font-sans text-[#6B6B6B] mb-8 leading-relaxed">
            Découvrez nos soins et commencez votre rituel capillaire naturel dès aujourd&apos;hui.
          </p>
          <Link href="/boutique" className="btn-primary inline-flex items-center gap-3 group">
            Découvrir la gamme
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

    </div>
  );
}
