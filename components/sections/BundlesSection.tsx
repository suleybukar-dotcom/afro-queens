import { bundles } from '@/lib/data';
import BundleCard from '@/components/ui/BundleCard';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Props { showTitle?: boolean; showCta?: boolean; max?: number; }

export default function BundlesSection({ showTitle = true, showCta = true, max }: Props) {
  const displayed = max ? bundles.slice(0, max) : bundles;
  return (
    <section className="py-24 bg-[#F5F0EA]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {showTitle && (
          <div className="text-center mb-14">
            <p className="text-xs tracking-[0.3em] uppercase text-[#E07B39] mb-4">Kits capillaires</p>
            <h2 className="font-script text-4xl md:text-5xl text-[#1A1A1A] mb-3">Nos Gammes</h2>
            <div className="flex items-center justify-center gap-4 mt-3 mb-5">
              <div className="w-10 h-px bg-[#D4A843]" />
              <span className="text-[#D4A843]">♛</span>
              <div className="w-10 h-px bg-[#D4A843]" />
            </div>
            <p className="text-sm font-sans text-[#6B6B6B] max-w-lg mx-auto">
              Composez votre rituel capillaire avec nos kits soigneusement sélectionnés. Économisez plus, chouchoutez plus.
            </p>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayed.map(bundle => <BundleCard key={bundle.id} bundle={bundle} />)}
        </div>
        <div className="mt-10 text-center">
          <p className="text-xs font-sans text-[#9E9E9E]">
            🚚 <strong className="text-[#E07B39]">Livraison offerte</strong> à partir de 100$ CAD · Paiement 100% sécurisé
          </p>
        </div>
        {showCta && (
          <div className="text-center mt-8">
            <Link href="/boutique" className="btn-outline inline-flex items-center gap-3 group">
              Voir toutes les gammes <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
