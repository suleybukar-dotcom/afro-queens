import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowLeft, Tag } from 'lucide-react';
import { blogArticles } from '@/lib/data';

interface Props {
  params: { slug: string };
}

const fullContent: Record<string, string[]> = {
  "routine-cheveux-naturels-debutante": [
    "Embrasser ses cheveux naturels est l'un des plus beaux voyages que l'on puisse entreprendre. C'est un retour à soi, une célébration de son authenticité, une ode à sa couronne. Mais par où commencer ?",
    "La première étape est de comprendre votre type de cheveux. Les cheveux afro et bouclés se classent généralement en types 3A (boucles lâches) à 4C (crépus très serrés). Connaître votre type vous aide à choisir les bons produits et les bonnes techniques.",
    "Ensuite, vient la construction de votre routine. Une routine capillaire complète comprend généralement : le shampoing (1-2 fois par semaine), l'après-shampoing ou le masque (à chaque lavage), l'hydratation quotidienne avec un spray, et un soin hebdomadaire intensif.",
    "La méthode LOC (Liquide, Huile, Crème) est votre meilleure alliée. Appliquez d'abord un produit liquide (eau ou spray hydratant), puis une huile pour sceller, et enfin une crème pour maintenir.",
    "N'oubliez pas : la patience est la clé. Les cheveux naturels demandent du temps, de l'amour et de la constance. Chaque couronne est unique — écoutez vos cheveux et adaptez votre routine à leurs besoins."
  ],
  "bienfaits-fenugrec-cheveux": [
    "Le fenugrec est connu depuis des millénaires dans les traditions africaines et indiennes pour ses vertus capillaires exceptionnelles. Riche en protéines, en fer et en vitamines du groupe B, il est l'allié idéal pour des cheveux forts et sains.",
    "Les graines de fenugrec contiennent de la lécithine, un agent hydratant naturel qui aide à nourrir la tige du cheveu de l'intérieur. Elles sont également riches en phytostérols qui stimulent la pousse et renforcent le cuir chevelu.",
    "Les graines de lin, de leur côté, sont extraordinairement riches en oméga-3 et en mucilage — un gel naturel qui enveloppe chaque mèche, définit les boucles et leur donne une brillance remarquable sans effet gras.",
    "Ensemble, ces deux super-ingrédients forment un duo de choc pour les cheveux naturels : le fenugrec fortifie et stimule, les graines de lin hydratent et définissent. C'est pourquoi ils sont au cœur de toutes nos formules Afro Queens.",
    "Pour profiter de leurs bienfaits à domicile, vous pouvez faire tremper des graines de fenugrec une nuit et les appliquer en masque capillaire. Pour les graines de lin, faites-les bouillir dans l'eau jusqu'à obtenir un gel et utilisez-le comme définissant de boucles."
  ],
  "methode-loc-hydratation-maximale": [
    "L'hydratation est le pilier fondamental des soins des cheveux afro, bouclés et crépus. Et parmi toutes les techniques existantes, la méthode LOC s'est imposée comme la référence absolue dans notre communauté.",
    "LOC signifie Liquide (L), Huile (O pour Oil), Crème (C). L'idée est simple mais brillante : on applique ces trois types de produits dans cet ordre précis pour maximiser et sceller l'hydratation dans la tige capillaire.",
    "Le L (Liquide) est la base hydratante. On utilise généralement de l'eau ou un spray capillaire comme notre Spray Hydratant Afro Queens. Il pénètre dans le cheveu et apporte l'hydratation initiale.",
    "Le O (Huile) vient ensuite sceller cette hydratation. Une huile légère comme l'huile de sésame crée une fine barrière qui empêche l'eau de s'évaporer trop vite. Notre Sérum Huileux est parfait à cette étape.",
    "Enfin, le C (Crème) vient compléter et maintenir. Notre Crème Capillaire, enrichie au beurre de mangue et à la kératine végétale, forme un bouclier protecteur qui garde vos cheveux hydratés pendant des jours.",
    "Conseil de pro : appliquez toujours la méthode LOC sur cheveux légèrement humides, jamais sur cheveux complètement secs. Sectionnez vos cheveux pour vous assurer de bien couvrir chaque mèche. Résultat garanti !"
  ]
};

export default function BlogPostPage({ params }: Props) {
  const article = blogArticles.find(a => a.slug === params.slug);
  if (!article) notFound();

  const paragraphs = fullContent[params.slug] || [article.content];
  const related = blogArticles.filter(a => a.slug !== params.slug);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-noir-DEFAULT pt-24">
        <div className="absolute inset-0">
          <Image src={article.image} alt={article.title} fill className="object-cover opacity-20" unoptimized={article.image.endsWith(".svg")} />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 py-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2 text-orange-DEFAULT text-xs font-sans">
              <Tag size={14} />
              {article.category}
            </div>
            <span className="text-white/30">·</span>
            <div className="flex items-center gap-2 text-white/50 text-xs font-sans">
              <Clock size={14} />
              {article.readTime} de lecture
            </div>
          </div>
          <h1 className="font-script text-4xl md:text-6xl text-white leading-tight mb-6">{article.title}</h1>
          <p className="font-body text-lg text-white/60 max-w-2xl mx-auto">{article.excerpt}</p>
          <p className="text-xs font-sans text-white/30 mt-6">{article.date}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 md:px-8 py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-sans text-gris-DEFAULT hover:text-orange-DEFAULT transition-colors tracking-wide mb-10">
          <ArrowLeft size={14} />
          Retour au blog
        </Link>

        <div className="relative aspect-video mb-12 overflow-hidden">
          <Image src={article.image} alt={article.title} fill className="object-cover" />
        </div>

        <div className="prose prose-lg max-w-none">
          {paragraphs.map((para, i) => (
            <p key={i} className="font-body text-base text-gris-DEFAULT leading-relaxed mb-6">
              {para}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gris-warm p-10 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-orange-DEFAULT mb-3">Afro Queens</p>
          <h3 className="font-script text-3xl text-noir-DEFAULT mb-3">
            Prête à passer à l&apos;action ?
          </h3>
          <p className="text-sm font-sans text-gris-DEFAULT mb-6">
            Découvrez nos soins capillaires naturels et commencez votre transformation
          </p>
          <Link href="/boutique" className="btn-primary inline-block">
            Découvrir la boutique
          </Link>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 border-t border-gray-100">
          <h3 className="font-script text-3xl text-noir-DEFAULT mb-8">Articles similaires</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {related.map(a => (
              <Link key={a.id} href={`/blog/${a.slug}`} className="group flex gap-6 card-hover p-4 bg-gris-warm">
                <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                  <Image src={a.image} alt={a.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div>
                  <p className="text-xs font-sans text-orange-DEFAULT mb-2">{a.category}</p>
                  <h4 className="font-script text-lg text-noir-DEFAULT leading-tight group-hover:text-orange-DEFAULT transition-colors">{a.title}</h4>
                  <p className="text-xs font-sans text-gris-DEFAULT mt-2">{a.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
