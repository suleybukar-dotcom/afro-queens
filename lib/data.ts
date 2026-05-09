export interface Product {
  id: string; slug: string; name: string; tagline: string;
  price: number; originalPrice?: number; category: string; badge?: string;
  description: string; benefits: string[]; ingredients: string[];
  howToUse: string[]; volume: string; image: string; featured: boolean;
}

export interface Bundle {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  products: string[]; // product names list
  price: number;
  savings: number;
  color: string;
  icon: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1", slug: "shampoing-capillaire",
    name: "Shampoing Capillaire Naturel", tagline: "Purification douce, brillance absolue",
    price: 30, category: "Soin lavant", badge: "Bestseller",
    description: "Notre shampoing capillaire est une formule révolutionnaire, enrichie d'actifs naturels soigneusement sélectionnés pour respecter la structure unique des cheveux afro, bouclés et crépus. Inspiré par les savoirs ancestraux africains et enrichi par la science moderne, ce shampoing nettoie en douceur sans dépouiller vos cheveux de leurs huiles naturelles essentielles. Chaque lavage est une invitation au rituel — un moment pour honorer votre couronne.",
    benefits: ["Nettoie en profondeur sans agresser le cuir chevelu","Préserve les huiles naturelles essentielles des cheveux","Démêle et facilite le coiffage","Stimule la croissance grâce au fenugrec","Apaise les démangeaisons et irritations","Renforce les fibres capillaires dès le premier lavage"],
    ingredients: ["Eau florale d'eucalyptus (agent purifiant et apaisant)","Fenugrec (stimulant de croissance, renforçant)","Graines de lin (hydratation et brillance)","Aloe vera (hydratant, apaisant)","Panthénol B5 (réparateur en profondeur)","Glycérine végétale (agent humectant)","Macérat de persil (brillance et vitalité)"],
    howToUse: ["Mouiller abondamment les cheveux avec de l'eau tiède","Appliquer une noisette de shampoing sur le cuir chevelu","Masser délicatement en mouvements circulaires pendant 2 minutes","Laisser agir 1 minute puis rincer à l'eau tiède","Répéter si nécessaire, puis appliquer un après-shampoing"],
    volume: "250 ml", image: "/images/products/shampoing.svg", featured: true
  },
  {
    id: "2", slug: "serum-huileux",
    name: "Sérum Huileux Fortifiant", tagline: "L'or liquide pour votre couronne",
    price: 30, category: "Soin intensif", badge: "Nouveau",
    description: "Ce sérum huileux d'exception est notre formule signature — une alliance luxueuse entre l'huile de sésame pressée à froid et des extraits botaniques de haute valeur. Conçu spécifiquement pour nourrir le cuir chevelu et fortifier les racines, ce sérum pénètre au cœur de la fibre capillaire pour une réparation profonde. Sa texture soyeuse fond instantanément, sans résidu gras, pour des cheveux brillants et fortifiés.",
    benefits: ["Nourrit intensément le cuir chevelu en profondeur","Fortifie les racines et réduit la chute de cheveux","Stimule la microcirculation et la pousse","Restaure l'élasticité et la souplesse","Scelle l'hydratation sans effet gras","Protège contre les agressions extérieures"],
    ingredients: ["Huile de sésame (nourrissante, protectrice, anti-âge)","Fenugrec (stimulant de croissance)","Panthénol B5 (réparateur cellulaire)","Macérat de persil (purifiant et stimulant)","Aloe vera (hydratant profond)","Glycérine végétale (humectant longue durée)","Eau florale d'eucalyptus (tonifiante)"],
    howToUse: ["Partitionner les cheveux en sections","Appliquer quelques gouttes directement sur le cuir chevelu","Masser en petits cercles pour activer la circulation","Faire glisser l'excédent sur les longueurs","Laisser agir minimum 30 min ou toute une nuit sous bonnet"],
    volume: "60 ml", image: "/images/products/serum.svg", featured: true
  },
  {
    id: "3", slug: "spray-capillaire",
    name: "Spray Capillaire Hydratant", tagline: "Hydratation express, légèreté assurée",
    price: 30, category: "Hydratation",
    description: "Notre spray capillaire est votre allié quotidien pour maintenir des cheveux hydratés, souples et vivants entre les lavages. Sa formule eau florale enrichie aux actifs botaniques enveloppe chaque mèche d'un voile protecteur d'hydratation. Léger, non gras et au parfum naturellement délicat, ce spray rafraîchit et redéfinit vos boucles en quelques secondes.",
    benefits: ["Hydrate instantanément sans alourdir les cheveux","Redéfinit et ravive les boucles et les spirales","Réduit le frisottis et facilite le démêlage","Formule légère non grasse, idéale au quotidien","Parfum naturel et délicat à l'eucalyptus","Protège contre la déshydratation et la casse"],
    ingredients: ["Eau florale d'eucalyptus (base hydratante purifiante)","Aloe vera (hydratant multi-couches)","Glycérine végétale (agent humectant retenteur d'eau)","Graines de lin (définition et maintien des boucles)","Panthénol B5 (réparateur et fortifiant)","Macérat de persil (brillance et vitalité)"],
    howToUse: ["Agiter le flacon avant utilisation","Vaporiser à 20-30 cm des cheveux légèrement humides ou secs","Lisser avec les doigts ou avec un peigne à dents larges","Utiliser matin et soir selon vos besoins","Peut être utilisé sur cheveux naturels et protecteurs"],
    volume: "200 ml", image: "/images/products/spray.svg", featured: false
  },
  {
    id: "4", slug: "creme-capillaire",
    name: "Crème Capillaire Protéinée", tagline: "Douceur royale pour vos boucles",
    price: 35, category: "Coiffage & nutrition", badge: "Coup de cœur",
    description: "La Crème Capillaire Protéinée Afro Queens est notre formule de couronnes — une émulsion crémeuse et enveloppante qui transforme des cheveux secs et cassants en une chevelure souple, lumineuse et parfaitement définie. Enrichie au beurre de mangue et à la kératine végétale, cette crème scelle l'hydratation, réduit la porosité et offre une protection durable.",
    benefits: ["Nourrit en profondeur les cheveux très secs et poreux","Définit et allonge les boucles naturellement","Réduit le frisottis pour un résultat net et défini","Protège contre la casse et les fourches","Scelle l'hydratation pour une longue tenue","Compatible avec la méthode LOC/LCO et toutes techniques"],
    ingredients: ["Beurre de mangue (nourrissant ultra-riche, anti-casse)","Kératine végétale (réparatrice, fortifiante)","Graines de lin (définition et brillance naturelle)","Aloe vera (hydratant et adoucissant)","Glycérine végétale (humectant longue durée)","Huile de sésame (scellant nourrissant)","Panthénol B5 (réparateur en profondeur)"],
    howToUse: ["Appliquer sur cheveux propres et humides","Prendre une noisette dans la paume et réchauffer entre les mains","Répartir uniformément sur chaque section de cheveux","Étirer doucement les boucles ou laisser se former naturellement","Diffuser à l'air libre ou sous un diffuseur à basse chaleur"],
    volume: "200 ml", image: "/images/products/creme.svg", featured: true
  },
  {
    id: "5", slug: "masque-capillaire",
    name: "Masque Capillaire Reconstituant", tagline: "Traitement royal, résultats extraordinaires",
    price: 35, category: "Traitement intensif",
    description: "Notre Masque Capillaire Reconstituant est le traitement ultime pour les cheveux très abîmés, décolorés ou surtraités. Une formule concentrée et enveloppante, inspirée des rituels de beauté africains ancestraux, qui répare, reconstruit et ressource les fibres capillaires en un seul soin.",
    benefits: ["Répare en profondeur les fibres capillaires abîmées","Reconstruit la structure interne du cheveu","Réduit drastiquement la casse et les fourches","Restaure brillance et souplesse naturelle","Nourrit intensément sans alourdir","Résultats visibles dès le premier soin"],
    ingredients: ["Beurre de mangue (traitement ultra-nourrissant)","Kératine végétale (reconstruction de la fibre)","Fenugrec (renforcement et stimulation)","Graines de lin (brillance et élasticité)","Aloe vera (hydratation intense et cicatrisante)","Panthénol B5 (réparation cellulaire en profondeur)","Huile de sésame (nutrition et protection)"],
    howToUse: ["Appliquer généreusement sur cheveux propres et essorés","Masser doucement pour faire pénétrer le produit","Couvrir d'un bonnet chauffant ou d'une serviette chaude","Laisser agir minimum 30 minutes (idéalement 1 heure)","Rincer abondamment à l'eau tiède puis froide pour sceller"],
    volume: "300 ml", image: "/images/products/masque.svg", featured: true
  }
];

export const bundles: Bundle[] = [
  {
    id: "b1",
    name: "Must Have",
    tagline: "L'essentiel pour commencer",
    badge: "Populaire",
    products: ["Shampoing Capillaire Naturel", "Sérum Huileux Fortifiant"],
    price: 55,
    savings: 5,
    color: "#E07B39",
    icon: "✨",
    featured: true,
  },
  {
    id: "b2",
    name: "Essentiel",
    tagline: "La routine complète du quotidien",
    badge: "Best value",
    products: ["Shampoing Capillaire Naturel", "Sérum Huileux Fortifiant", "Crème Capillaire Protéinée"],
    price: 90,
    savings: 5,
    color: "#D4A843",
    icon: "💛",
    featured: true,
  },
  {
    id: "b3",
    name: "Clean Girl",
    tagline: "Soin complet & reconstruction",
    badge: "Recommandé",
    products: ["Shampoing Capillaire Naturel", "Sérum Huileux Fortifiant", "Crème Capillaire Protéinée", "Masque Capillaire Reconstituant"],
    price: 120,
    savings: 10,
    color: "#8B6914",
    icon: "👑",
    featured: true,
  },
  {
    id: "b4",
    name: "Reine",
    tagline: "La routine royale complète",
    badge: "Collection complète",
    products: ["Shampoing Capillaire Naturel", "Sérum Huileux Fortifiant", "Crème Capillaire Protéinée", "Masque Capillaire Reconstituant", "Spray Capillaire Hydratant"],
    price: 150,
    savings: 10,
    color: "#1A0F00",
    icon: "♛",
    featured: true,
  },
];

export const blogArticles = [
  {
    id: "1", slug: "routine-cheveux-naturels-debutante",
    title: "La Routine Capillaire Idéale pour Commencer avec les Cheveux Naturels",
    excerpt: "Débuter avec les cheveux naturels peut sembler intimidant. Découvrez notre guide complet pour établir une routine simple, efficace et adaptée à vos cheveux.",
    content: "Embrasser ses cheveux naturels est l'un des plus beaux voyages que l'on puisse entreprendre.",
    category: "Routine", readTime: "8 min", date: "15 Mars 2025",
    image: "/images/products/blog-routine.svg"
  },
  {
    id: "2", slug: "bienfaits-fenugrec-cheveux",
    title: "Fenugrec & Graines de Lin : Les Super-Actifs de vos Cheveux",
    excerpt: "Découvrez pourquoi le fenugrec et les graines de lin sont devenus les ingrédients stars de la communauté des cheveux naturels et comment les intégrer dans votre routine.",
    content: "Le fenugrec est connu depuis des millénaires dans les traditions africaines et indiennes pour ses vertus capillaires exceptionnelles.",
    category: "Ingrédients", readTime: "6 min", date: "28 Février 2025",
    image: "/images/products/blog-ingredients.svg"
  },
  {
    id: "3", slug: "methode-loc-hydratation-maximale",
    title: "La Méthode LOC : Le Secret de l'Hydratation Maximale",
    excerpt: "La méthode LOC (Liquide, Huile, Crème) est la technique numéro 1 pour maximiser et sceller l'hydratation des cheveux afro et bouclés. On vous explique tout.",
    content: "L'hydratation est le pilier fondamental des soins des cheveux afro, bouclés et crépus.",
    category: "Technique", readTime: "10 min", date: "10 Janvier 2025",
    image: "/images/products/blog-loc.svg"
  }
];

export const faqs = [
  { question: "Vos produits sont-ils adaptés à tous les types de cheveux ?", answer: "Oui ! Nos formules sont spécialement conçues pour les cheveux afro, bouclés, crépus et frisés (types 3A à 4C), mais conviennent également à tous ceux qui cherchent des soins naturels et nourrissants." },
  { question: "Vos produits sont-ils 100% naturels ?", answer: "Nous formulons avec un maximum d'ingrédients naturels et botaniques. Tous nos produits sont sans sulfates agressifs, sans silicones occlusifs, sans parabènes et sans colorants artificiels." },
  { question: "Combien de temps durent les livraisons ?", answer: "Les commandes sont expédiées sous 48-72h ouvrées. La livraison standard prend 2-3 jours ouvrés au Canada. La livraison est offerte à partir de 100$ CAD d'achat." },
  { question: "Puis-je retourner un produit ?", answer: "Vous disposez de 14 jours après réception pour nous retourner tout produit non ouvert dans son emballage d'origine. Contactez-nous via WhatsApp ou email pour initier le retour." },
  { question: "Comment passer commande ?", answer: "Ajoutez vos produits au panier, puis cliquez sur 'Commander'. Vous pouvez payer par carte bancaire (Stripe) ou PayPal. Vous recevrez une confirmation par email immédiatement." },
  { question: "Avez-vous des offres pour les premiers achats ?", answer: "Oui ! Inscrivez-vous à notre newsletter pour recevoir 10% de réduction sur votre première commande. Des codes promo sont aussi partagés régulièrement sur nos réseaux sociaux." },
  { question: "Vos produits peuvent-ils être utilisés pendant la grossesse ?", answer: "Nos formules sont douces, mais nous recommandons de consulter votre médecin avant d'introduire de nouveaux produits capillaires pendant la grossesse ou l'allaitement." },
  { question: "Comment contacter le service client ?", answer: "Vous pouvez nous contacter par email à mbouoh@gmail.com, ou directement via WhatsApp au 613 307 7293 ou 613 307 9593 pour une réponse rapide." }
];

export const contactInfo = {
  phone1: "613 307 7293",
  phone2: "613 307 9593",
  whatsapp: "16133077293",
  whatsappDisplay: "613 307 7293",
  address: "Hawkesbury, Ontario, Canada",
  email: "mbouoh@gmail.com",
};

export const shippingInfo = {
  freeShippingThreshold: 100,
  deliveryDays: "2-3 jours ouvrés",
  currency: "CAD",
};
