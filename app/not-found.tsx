import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-noir-DEFAULT flex items-center justify-center text-center px-4">
      <div>
        <span className="text-ocre-DEFAULT text-6xl mb-6 block">♛</span>
        <h1 className="font-script text-6xl md:text-8xl text-white mb-4">404</h1>
        <p className="text-xs tracking-[0.4em] uppercase text-orange-DEFAULT mb-4">Page introuvable</p>
        <p className="font-body text-lg text-white/60 mb-10 max-w-md mx-auto">
          Cette page n&apos;existe pas ou a été déplacée. Retournez à l&apos;accueil pour continuer votre parcours de reine.
        </p>
        <Link href="/" className="btn-primary inline-block">
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}
