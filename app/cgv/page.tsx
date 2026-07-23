export default function CGVPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[#E07B39] mb-3">Conditions générales</p>
          <h1 className="font-script text-4xl md:text-5xl text-[#1A1A1A]">Conditions Générales de Vente</h1>
        </div>

        <div className="space-y-10 font-sans text-[#6B6B6B] text-sm leading-relaxed">
          {[
            {
              title: "1. Objet",
              content: "Les présentes CGV régissent les ventes de produits cosmétiques effectuées sur le site afroqueens.com par la société Afro Queens."
            },
            {
              title: "2. Produits",
              content: "Les produits proposés à la vente sont ceux figurant sur le site au moment de la commande. Afro Queens se réserve le droit de modifier sa gamme à tout moment."
            },
            {
              title: "3. Prix",
              content: "Les prix sont indiqués en dollars canadiens (CAD). Afro Queens se réserve le droit de modifier ses prix à tout moment, étant entendu que le prix applicable à la commande est celui en vigueur au moment de la validation de la commande."
            },
            {
              title: "4. Commande",
              content: "Les commandes s'effectuent directement via WhatsApp. La commande est validée après confirmation avec notre équipe. Une confirmation est envoyée via WhatsApp ou par email."
            },
            {
              title: "5. Paiement",
              content: "Les modalités de règlement sont convenues directement avec notre équipe lors de la confirmation de la commande via WhatsApp. Le paiement est confirmé lors de la validation de la commande."
            },
            {
              title: "6. Livraison",
              content: "Les commandes sont expédiées sous 48-72h ouvrées depuis Hawkesbury, Ontario. La livraison est offerte à partir de 200 CAD d'achat. Les délais indicatifs de livraison sont de 2 à 3 jours ouvrés au Canada."
            },
            {
              title: "7. Droit de rétractation",
              content: "Conformément à la législation, vous disposez d'un délai de 14 jours à compter de la réception de votre commande pour exercer votre droit de rétractation. Les produits doivent être retournés non ouverts dans leur emballage d'origine."
            },
            {
              title: "8. Garanties",
              content: "Afro Queens garantit la conformité des produits aux descriptions figurant sur le site. En cas de produit défectueux, contactez-nous dans les 48h suivant la réception."
            },
            {
              title: "9. Service client",
              content: "Pour toute question, contactez-nous :\n- Email : mbouoh@gmail.com\n- WhatsApp : 613 307 7293 ou 613 307 9593\n- Formulaire de contact sur le site"
            },
          ].map((section, i) => (
            <div key={i}>
              <h2 className="font-script text-xl text-[#1A1A1A] mb-3">{section.title}</h2>
              <div className="w-6 h-0.5 bg-[#E07B39] mb-3" />
              <p className="whitespace-pre-line">{section.content}</p>
            </div>
          ))}
          <p className="text-xs text-[#9E9E9E] pt-6 border-t border-gray-100">
            Dernière mise à jour : Janvier 2025
          </p>
        </div>
      </div>
    </div>
  );
}
