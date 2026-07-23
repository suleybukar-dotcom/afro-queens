export interface Product {
  id: string; slug: string; name: string; tagline: string;
  price: number; originalPrice?: number; category: string; badge?: string;
  description: string; benefits: string[]; ingredients: string[];
  howToUse: string[]; volume: string; image: string; gallery?: string[]; featured: boolean;
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
    name: "Shampoing Gainant", tagline: "Hydratant & Gainant",
    price: 30, category: "Soin lavant", badge: "Bestseller",
    description: "Avec une bonne combinaison d'agents lavants doux et d'agents hydratants, ce shampoing contient plusieurs extraits végétaux adaptés aux cheveux texturés et afro. Il nettoie en profondeur tout en respectant l'équilibre naturel du cheveu et du cuir chevelu, laissant les cheveux propres, doux et faciles à coiffer.",
    benefits: ["Nettoie en profondeur","Rend les cheveux visiblement plus brillants et gainés","Nettoie délicatement le cheveu et le cuir chevelu","Hydrate et gaine la fibre capillaire"],
    ingredients: ["Agents lavants doux","Agents hydratants","Extraits végétaux adaptés aux cheveux texturés et afro"],
    howToUse: ["Mouiller les cheveux","Appliquer une quantité généreuse de shampoing","Masser doucement le cuir chevelu et les cheveux","Rincer abondamment"],
    volume: "240 ml", image: "/images/products/shampoing.jpg",
    gallery: ["/images/products/shampoing.jpg","/images/products/shampoing-2.jpg","/images/products/shampoing-3.jpg","/images/products/shampoing-4.jpg"],
    featured: true
  },
  {
    id: "2", slug: "serum-huileux",
    name: "Sérum Huileux Fortifiant", tagline: "L'or liquide pour votre couronne",
    price: 30, category: "Soin intensif", badge: "Nouveau",
    description: "Le sérum capillaire est un concentré de vitamine E, d'extrait de clou de girofle, d'extrait de fenugrec, d'extrait d'ortie et d'huile de sésame. Il vient sceller l'hydratation, nourrit intensément le cuir chevelu et favorise l'apparence de cheveux plus denses, plus forts et plus résistants.",
    benefits: ["Fortifie les racines et réduit la chute de cheveux","Stimule la microcirculation et la pousse","Nourrit intensément le cuir chevelu","Scelle l'hydratation"],
    ingredients: ["Vitamine E","Extrait de clou de girofle","Extrait de fenugrec","Extrait d'ortie","Huile de sésame"],
    howToUse: ["Appliquer quelques gouttes sur le cuir chevelu","Masser doucement","Peut être utilisé quotidiennement ou avant le shampoing","Ne pas rincer"],
    volume: "60 ml", image: "/images/products/serum.jpg",
    gallery: ["/images/products/serum.jpg","/images/products/serum-4.jpg","/images/products/serum-3.jpg","/images/products/serum-2.jpg"],
    featured: true
  },
  {
    id: "3", slug: "spray-capillaire",
    name: "Spray Hydratant", tagline: "Hydratant & Démêlant",
    price: 30, category: "Hydratation",
    description: "Ce spray capillaire léger aide à hydrater instantanément les cheveux et à raviver leur apparence. Il est principalement constitué d'extrait de fenugrec et de romarin. Il facilite le démêlage, aide à redéfinir les boucles et laisse les cheveux doux, brillants et plus faciles à coiffer.",
    benefits: ["Facilite le coiffage","Améliore le confort du cheveu","Rafraîchit les boucles","Hydrate instantanément le cheveu et le cuir chevelu"],
    ingredients: ["Extrait de fenugrec","Extrait de romarin"],
    howToUse: ["Vaporiser sur cheveux humides ou secs","Peigner délicatement","Coiffer comme désiré","Ne pas rincer"],
    volume: "240 ml", image: "/images/products/spray.jpg",
    gallery: ["/images/products/spray.jpg","/images/products/spray-3.jpg","/images/products/spray-4.jpg","/images/products/spray-2.jpg"],
    featured: false
  },
  {
    id: "4", slug: "creme-capillaire",
    name: "Crème Capillaire Protéinée", tagline: "Nourrissante & Hydratante",
    price: 35, category: "Coiffage & nutrition", badge: "Coup de cœur",
    description: "Faite à base d'huile de son de riz, de graines de lin, d'huile de brocoli et de beurre de mangue, enrichie en kératine végétale, en acides aminés et en protéines d'avoine, cette crème riche et onctueuse hydrate et aide vos cheveux à rester souples et sans frisottis. Idéale pour les cheveux secs, ternes ou abîmés.",
    benefits: ["Nourrit en profondeur les cheveux très secs et poreux","Définit et allonge les boucles naturellement","Réduit les frisottis pour un résultat net et défini","Apporte douceur, souplesse et brillance"],
    ingredients: ["Huile de son de riz","Graines de lin","Huile de brocoli","Beurre de mangue","Kératine végétale","Acides aminés","Protéines d'avoine"],
    howToUse: ["Appliquer une quantité généreuse sur cheveux propres et humides","Répartir uniformément des racines jusqu'aux pointes","Ne pas rincer"],
    volume: "240 ml", image: "/images/products/creme.jpg",
    gallery: ["/images/products/creme.jpg","/images/products/creme-3.jpg","/images/products/creme-4.jpg","/images/products/creme-2.jpg"],
    featured: true
  },
  {
    id: "5", slug: "masque-capillaire",
    name: "Masque Capillaire Protéiné", tagline: "Cheveux secs, ternes, en manque d'hydratation",
    price: 35, category: "Traitement intensif",
    description: "Formulé à base de gel d'aloe vera, d'extrait de fenugrec, de graines de lin, de protéines de blé et d'acides aminés, ce masque protéiné à la texture riche et onctueuse hydrate et nourrit intensément les cheveux et le cuir chevelu. Il laisse les cheveux doux, souples, brillants et plus faciles à coiffer.",
    benefits: ["Contribue à renforcer la fibre capillaire","Améliore la souplesse des cheveux","Nourrit intensément et hydrate les cheveux et le cuir chevelu","Laisse les cheveux doux, brillants et plus faciles à coiffer"],
    ingredients: ["Gel d'aloe vera","Extrait de fenugrec","Graines de lin","Protéines de blé","Acides aminés"],
    howToUse: ["Appliquer sur cheveux propres et humides","Laisser poser 15 à 30 minutes","Rincer abondamment"],
    volume: "240 ml", image: "/images/products/masque.jpg",
    gallery: ["/images/products/masque.jpg","/images/products/masque-2.jpg","/images/products/masque-3.jpg","/images/products/masque-4.jpg"],
    featured: true
  }
];

export const bundles: Bundle[] = [
  {
    id: "b1",
    name: "Must Have",
    tagline: "L'essentiel pour commencer",
    badge: "Populaire",
    products: ["Shampoing Gainant", "Sérum Huileux Fortifiant"],
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
    products: ["Shampoing Gainant", "Sérum Huileux Fortifiant", "Crème Capillaire Protéinée"],
    price: 90,
    savings: 5,
    color: "#D4A843",
    icon: "💛",
    featured: true,
  },
  {
    id: "b3",
    name: "Clean Girl",
    tagline: "La routine fraîcheur & hydratation",
    badge: "Recommandé",
    products: ["Shampoing Gainant", "Sérum Huileux Fortifiant", "Crème Capillaire Protéinée", "Spray Hydratant"],
    price: 115,
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
    products: ["Shampoing Gainant", "Sérum Huileux Fortifiant", "Crème Capillaire Protéinée", "Masque Capillaire Protéiné", "Spray Hydratant"],
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
  { question: "Vos produits sont-ils certifiés ?", answer: "Oui ! Tous nos produits sont certifiés par Santé Canada et fabriqués au Canada. Nos formules sont sans sulfates, sans silicones et sans parabènes." },
  { question: "Combien de temps durent les livraisons ?", answer: "Les commandes sont expédiées sous 48-72h ouvrées. La livraison standard prend 2-3 jours ouvrés au Canada. La livraison est offerte à partir de 200 CAD d'achat." },
  { question: "Puis-je retourner un produit ?", answer: "Vous disposez de 14 jours après réception pour nous retourner tout produit non ouvert dans son emballage d'origine. Contactez-nous via WhatsApp ou email pour initier le retour." },
  { question: "Comment passer commande ?", answer: "Ajoutez vos produits au panier, puis cliquez sur 'Commander' : une conversation WhatsApp s'ouvre automatiquement avec notre équipe. Nous confirmons ensemble votre commande, la livraison et le règlement — simple, rapide et personnalisé." },
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
  instagram: "https://www.instagram.com/afro.queens1",
  tiktok: "https://www.tiktok.com/@afro.queens7",
};

// Message prérempli pour toutes les commandes WhatsApp
export const whatsappOrderMessage = "Bonjour, je souhaite commander des produits Afro Queens.";
export const whatsappOrderUrl = `https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(whatsappOrderMessage)}`;

export const shippingInfo = {
  freeShippingThreshold: 200,
  deliveryDays: "2-3 jours ouvrés",
  currency: "CAD",
};
