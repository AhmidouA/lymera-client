# 🌿 Lymera — Site Vitrine Institut Esthétique

> Site vitrine Next.js pour l'Institut Lymera, Jacou (34830) — Épilation Laser, Onglerie & Drainage Lymphatique.

---

## 🚀 Stack Technique

| Élément | Version |
|---|---|
| Framework | Next.js 16.1.6 (App Router) |
| Langage | TypeScript 5 |
| Styling | Tailwind CSS 3.4.19 |
| Animations | Framer Motion 12 |
| Icônes | Lucide React |
| SEO | next-sitemap |
| Déploiement | Vercel |

---

## ⚡ Démarrage rapide

```bash
# Cloner le projet
git clone https://github.com/xxx/lymera-client.git
cd lymera-client

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

---

## 📁 Structure du projet

```
lymera-client/
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Layout global + fonts + dark mode
│   │   ├── page.tsx                      # Page d'accueil
│   │   ├── globals.css                   # Design system + variables
│   │   ├── epilation-laser/page.tsx
│   │   ├── onglerie/page.tsx
│   │   ├── drainage-lymphatique/page.tsx
│   │   ├── tarifs/page.tsx
│   │   ├── equipe/page.tsx
│   │   ├── galerie/page.tsx
│   │   ├── contact/page.tsx
│   │   └── mentions-legales/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── StickyMobileCTA.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── WhyLymera.tsx
│   │   │   ├── TeamPreview.tsx
│   │   │   ├── Reviews.tsx
│   │   │   ├── PricingPreview.tsx
│   │   │   ├── MapSection.tsx
│   │   │   └── FinalCTA.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       └── StarRating.tsx
│   └── lib/
│       ├── constants.ts                  # Toutes les données du site
│       └── seo.ts                        # Helpers métadonnées
├── public/
│   ├── images/                           # Photos salon + équipe
│   ├── og/                               # Images Open Graph 1200x630
│   ├── favicon.ico
│   └── robots.txt
├── postcss.config.mjs
├── tailwind.config.ts
├── next.config.ts
├── next-sitemap.config.js
└── tsconfig.json
```

---

## 🎨 Design System

### Couleurs — Light Mode
| Token | Hex | Usage |
|---|---|---|
| `cream` | `#FAF7F2` | Background principal |
| `beige` | `#F0E8DC` | Surface / Cards |
| `brown` | `#8B6347` | Accent principal / CTA |
| `gold` | `#C4A882` | Accent secondaire |
| `dark` | `#2C1A0E` | Texte principal |
| `muted` | `#6B4C35` | Texte secondaire |
| `border` | `#E0D4C3` | Bordures |

### Couleurs — Dark Mode
| Token | Hex | Usage |
|---|---|---|
| `night-bg` | `#1A1208` | Background principal |
| `night-surface` | `#2A1E12` | Surface / Cards |
| `night-accent` | `#D4AF7A` | Accent principal / CTA |
| `night-text` | `#F5EFE6` | Texte principal |
| `night-text2` | `#C4B49A` | Texte secondaire |
| `night-border` | `#3D2E1E` | Bordures |

### Typographie
- **Titres :** `Cormorant Garamond` (serif élégant)
- **Corps :** `DM Sans` (lisible, moderne)

### Breakpoints (Tailwind v3)
| Nom | Taille | Usage |
|---|---|---|
| *(défaut)* | `0px+` | Mobile portrait |
| `sm` | `640px+` | Grand mobile / paysage |
| `md` | `768px+` | Tablette |
| `lg` | `1024px+` | Desktop |
| `xl` | `1280px+` | Grand écran |

---

## 🌐 Pages

| URL | Description |
|---|---|
| `/` | Page d'accueil |
| `/epilation-laser` | Service épilation laser |
| `/onglerie` | Service onglerie |
| `/drainage-lymphatique` | Service drainage |
| `/tarifs` | Tous les tarifs |
| `/equipe` | Équipe Farah + Nassima |
| `/galerie` | Galerie photos |
| `/contact` | Contact + carte + horaires |
| `/mentions-legales` | Mentions légales |
| `/politique-de-confidentialite` | RGPD |

---

## 🔗 Liens importants

- **Réservation Planity :** https://www.planity.com/lymera-34830-jacou
- **Adresse :** 14 Rue de l'Autan, 34830 Jacou
- **Téléphone :** ⚠️ À compléter avec le vrai numéro

---

## 📦 Scripts

```bash
npm run dev        # Serveur de développement
npm run build      # Build de production
npm run start      # Serveur de production
npm run lint       # Linter ESLint
```

---

## ✅ Checklist avant mise en ligne

- [ ] Numéro de téléphone renseigné dans `src/lib/constants.ts`
- [ ] Photos pro uploadées dans `public/images/`
- [ ] Images Open Graph dans `public/og/`
- [ ] Google Analytics 4 configuré
- [ ] `next-sitemap` configuré avec le bon domaine
- [ ] Test PageSpeed Insights > 90 mobile
- [ ] Google Search Console — sitemap soumis
- [ ] Fiche Google My Business à jour

---

*Projet Lymera — Institut Esthétique Jacou (34) — 2025*
