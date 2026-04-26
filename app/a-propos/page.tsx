import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Heart, Leaf, Crown, Users } from 'lucide-react';

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-noir-DEFAULT text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/brand-mood.jpeg" alt="Brand" fill className="object-cover opacity-15" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-ocre-DEFAULT mb-6">Notre identité</p>
          <h1 className="font-script text-5xl md:text-7xl text-white mb-6">
            L&apos;histoire d&apos;<em className="text-orange-DEFAULT">Afro Queens</em>
          </h1>
          <p className="font-body text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Une marque née de la passion, de l&apos;amour du naturel et d&apos;une conviction profonde — chaque femme mérite de porter sa couronne avec fierté.
          </p>
        </div>
      </div>

      {/* Story */}
      <section className="py-24 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-subtitle mb-4">Notre origine</p>
            <h2 className="section-title mb-6">Une histoire de<br /><em className="text-orange-DEFAULT">cheveux, d&apos;identité et de fierté</em></h2>
            <div className="w-16 h-0.5 bg-ocre-DEFAULT mb-6" />
            <p className="font-body text-base text-gris-DEFAULT leading-relaxed mb-4">
              Afro Queens est née d&apos;une frustration partagée par des millions de femmes à travers le monde : trouver des soins capillaires vraiment adaptés aux cheveux afro, bouclés et crépus était un véritable parcours du combattant.
            </p>
            <p className="font-body text-base text-gris-DEFAULT leading-relaxed mb-4">
              Trop de produits sur le marché promettaient monts et merveilles mais livraient des formules chargées de silicones, de sulfates et d&apos;ingrédients qui nuisaient plus qu&apos;ils n&apos;aidaient. Nos cheveux méritaient mieux.
            </p>
            <p className="font-body text-base text-gris-DEFAULT leading-relaxed mb-8">
              Inspirées par les savoirs ancestraux africains — ces recettes de grand-mères transmises de génération en génération — et armées d&apos;une passion pour la cosmétique naturelle, nous avons décidé de créer la gamme que nous aurions voulu trouver.
            </p>
            <p className="font-script text-2xl text-orange-DEFAULT italic">
              &ldquo;Chaque couronne mérite le meilleur soin royal.&rdquo;
            </p>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-orange-DEFAULT/5 rounded-full" />
            <Image
              src="/images/products-grid.jpeg"
              alt="Afro Queens Story"
              width={600}
              height={700}
              className="relative z-10 w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gris-warm">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="section-subtitle mb-4">Nos valeurs</p>
            <h2 className="section-title">Ce qui nous guide chaque jour</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Leaf size={28} />, title: "Naturalité", desc: "Nous sélectionnons chaque ingrédient avec soin, en privilégiant les actifs botaniques, les huiles végétales et les extraits naturels aux formules chimiques." },
              { icon: <Heart size={28} />, title: "Authenticité", desc: "Nous restons fidèles à notre identité et à celle de nos clientes. Nos formules célèbrent la beauté naturelle des cheveux afro dans toute leur diversité." },
              { icon: <Crown size={28} />, title: "Excellence", desc: "Nous ne faisons aucun compromis sur la qualité. Chaque produit passe par de multiples étapes de développement et de tests avant d&apos;atteindre votre salle de bain." },
              { icon: <Users size={28} />, title: "Communauté", desc: "Afro Queens est bien plus qu&apos;une marque — c&apos;est une famille de reines qui s&apos;entraident, se soutiennent et célèbrent leur beauté naturelle ensemble." },
            ].map((val, i) => (
              <div key={i} className="bg-white p-8 hover:shadow-xl transition-all duration-300">
                <div className="inline-flex w-14 h-14 bg-orange-DEFAULT/10 text-orange-DEFAULT items-center justify-center mb-5">
                  {val.icon}
                </div>
                <h3 className="font-script text-xl text-noir-DEFAULT mb-3">{val.title}</h3>
                <p className="text-sm font-sans text-gris-DEFAULT leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-noir-DEFAULT text-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="border-l-2 border-orange-DEFAULT pl-8">
              <p className="text-xs tracking-[0.3em] uppercase text-ocre-DEFAULT mb-4">Notre mission</p>
              <h3 className="font-script text-3xl text-white mb-5">Sublimer chaque couronne</h3>
              <p className="font-sans text-white/60 text-sm leading-relaxed">
                Offrir à chaque femme aux cheveux naturels des soins de haute qualité, formulés spécifiquement pour leurs besoins uniques, afin de transformer leur routine capillaire en un véritable rituel de bien-être et de confiance en soi.
              </p>
            </div>
            <div className="border-l-2 border-ocre-DEFAULT pl-8">
              <p className="text-xs tracking-[0.3em] uppercase text-ocre-DEFAULT mb-4">Notre vision</p>
              <h3 className="font-script text-3xl text-white mb-5">Un monde de reines épanouies</h3>
              <p className="font-sans text-white/60 text-sm leading-relaxed">
                Devenir la référence mondiale des soins capillaires naturels pour les femmes afro-descendantes — une marque qui célèbre la diversité des textures, brise les stéréotypes beauté et place la couronne naturelle là où elle mérite d&apos;être : au sommet.
              </p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-white/10 text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-ocre-DEFAULT mb-3">♛ Notre engagement ♛</p>
            <p className="font-script text-3xl md:text-4xl text-white leading-relaxed max-w-3xl mx-auto">
              &ldquo;Pas de sulfates agressifs. Pas de silicones occlusifs. Pas de parabènes. Juste la nature, la science et l&apos;amour de votre couronne.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="font-script text-4xl text-noir-DEFAULT mb-4">Prête à rejoindre la famille ?</h3>
          <p className="text-sm font-sans text-gris-DEFAULT mb-8">Découvrez nos soins et commencez votre rituel capillaire naturel dès aujourd&apos;hui.</p>
          <Link href="/boutique" className="btn-primary inline-flex items-center gap-3 group">
            Découvrir la gamme
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
