# 👑 Afro Queens — Site E-commerce

> *La Couronne de vos Cheveux Naturels*

Site e-commerce complet construit avec **Next.js 14**, **Tailwind CSS** et **TypeScript**.

---

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Configurer les variables d'environnement
cp .env.example .env.local
# → Éditez .env.local avec vos vraies clés

# 3. Lancer en développement
npm run dev

# 4. Ouvrir dans le navigateur
# http://localhost:3000
```

---

## 📁 Structure du projet

```
afro-queens/
├── app/                        # Pages Next.js (App Router)
│   ├── page.tsx                # 🏠 Accueil
│   ├── boutique/page.tsx       # 🛍️ Boutique
│   ├── produit/[slug]/page.tsx # 📦 Page produit dynamique
│   ├── a-propos/page.tsx       # 💛 À propos
│   ├── blog/                   # 📝 Blog
│   │   ├── page.tsx            #    Liste articles
│   │   └── [slug]/page.tsx     #    Article individuel
│   ├── contact/page.tsx        # 📬 Contact
│   ├── faq/page.tsx            # ❓ FAQ
│   ├── checkout/page.tsx       # 💳 Commande / Paiement
│   ├── layout.tsx              # Layout global
│   └── globals.css             # Styles globaux
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Navigation responsive
│   │   ├── Footer.tsx          # Pied de page
│   │   └── CartDrawer.tsx      # Tiroir panier
│   └── ui/
│       ├── ProductCard.tsx     # Carte produit
│       └── WhatsAppButton.tsx  # Bouton flottant WhatsApp
│
├── lib/
│   ├── data.ts                 # 📊 Produits, blog, FAQ (données)
│   └── cart-context.tsx        # 🛒 Contexte panier React
│
└── public/
    └── images/                 # Logo + visuels produits
```

---

## 🎨 Identité visuelle

| Couleur | Hex | Usage |
|---------|-----|-------|
| Orange | `#E07B39` | CTA, accents, prix |
| Ocre | `#D4A843` | Couronne, shimmer, bordures |
| Noir | `#1A1A1A` | Textes, hero, footer |
| Gris chaud | `#F5F0EA` | Fonds, sections alternées |

**Typographies :**
- `Playfair Display` — Titres (font-script)
- `Cormorant Garamond` — Corps de texte (font-body)
- `Jost` — Navigation, labels, boutons (font-sans)

---

## 🛍️ Produits (5 SKUs)

| # | Produit | Prix | Volume |
|---|---------|------|--------|
| 1 | Shampoing Capillaire Naturel | 24,90 € | 250 ml |
| 2 | Sérum Huileux Cuir Chevelu | 34,90 € | 60 ml |
| 3 | Spray Capillaire Hydratant | 19,90 € | 200 ml |
| 4 | Crème Capillaire Nourrissante | 28,90 € | 200 ml |
| 5 | Masque Capillaire Reconstituant | 32,90 € | 300 ml |

---

## 💳 Paiement

Le checkout supporte :
- **Stripe** — Carte bancaire (Visa, Mastercard, Amex)
- **PayPal** — Paiement rapide

Pour activer le vrai paiement Stripe :
1. Créez un compte sur [stripe.com](https://stripe.com)
2. Récupérez vos clés API dans le Dashboard
3. Ajoutez-les dans `.env.local`
4. Installez le package : `npm install stripe @stripe/stripe-js @stripe/react-stripe-js`

---

## 📱 Fonctionnalités

- ✅ Responsive mobile + desktop
- ✅ Panier persistant (React Context)
- ✅ Navigation fluide avec animation au scroll
- ✅ Bouton WhatsApp flottant
- ✅ Filtres et tri en boutique
- ✅ Pages produit avec onglets (description, ingrédients, mode d'utilisation)
- ✅ Blog avec articles complets
- ✅ Formulaire de contact
- ✅ FAQ en accordion
- ✅ Checkout multi-étapes
- ✅ Animations CSS (fade-in, slide-up, gold shimmer)
- ✅ SEO (metadata, Open Graph)

---

## 🌐 Déploiement

### Vercel (recommandé)
```bash
npm install -g vercel
vercel
```
Puis ajoutez vos variables d'environnement dans le dashboard Vercel.

### Build manuel
```bash
npm run build
npm run start
```

---

## 🔧 Personnalisation

### Changer les produits
Éditez `lib/data.ts` — Modifiez le tableau `products[]`.

### Changer les couleurs
Éditez `tailwind.config.js` — Section `theme.extend.colors`.

### Changer le numéro WhatsApp
Éditez `.env.local` : `NEXT_PUBLIC_WHATSAPP_NUMBER=33XXXXXXXXX`

### Ajouter de vraies images produits
Placez vos images dans `public/images/` et mettez à jour le champ `image` dans `lib/data.ts`.

---

## 📧 Support

Pour toute question : **contact@afroqueens.com**

---

*Afro Queens — La couronne de vos cheveux naturels* 👑
