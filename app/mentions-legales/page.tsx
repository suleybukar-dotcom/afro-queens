export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#E07B39] mb-3">Informations légales</p>
          <h1 className="font-script text-4xl md:text-5xl text-[#1A1A1A]">Mentions Légales</h1>
        </div>

        <div className="space-y-10 font-sans text-[#6B6B6B]">
          {[
            {
              title: "Éditeur du site",
              content: `Afro Queens\nSociété : [Forme juridique à compléter]\nSiège social : France\nEmail : contact@afroqueens.com\nTéléphone : +33 7 XX XX XX XX`
            },
            {
              title: "Hébergement",
              content: `Vercel Inc.\n340 Pine Street, Suite 701\nSan Francisco, CA 94104, USA\nhttps://vercel.com`
            },
            {
              title: "Propriété intellectuelle",
              content: `L'ensemble du contenu de ce site (textes, images, logos, vidéos) est protégé par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable d'Afro Queens.`
            },
            {
              title: "Responsabilité",
              content: `Afro Queens s'efforce d'assurer l'exactitude des informations publiées sur ce site. Cependant, elle ne peut garantir l'exactitude, la complétude ou l'actualité des informations et décline toute responsabilité pour les erreurs ou omissions.`
            },
            {
              title: "Données personnelles",
              content: `Les données collectées sur ce site sont traitées conformément au RGPD. Pour exercer vos droits d'accès, de rectification ou de suppression, contactez-nous à contact@afroqueens.com.`
            },
          ].map((section, i) => (
            <div key={i}>
              <h2 className="font-script text-2xl text-[#1A1A1A] mb-3">{section.title}</h2>
              <div className="w-8 h-0.5 bg-[#E07B39] mb-4" />
              <p className="text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
