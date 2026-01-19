export const siteConfig = {
  companyName: 'DjassApp',
  tagline: 'Adjame dans ta poche',
  parentCompany: 'Ando Technologies',
  contact: {
    email: 'contact@djassapp.com',
    deckUrl: '#contact',
  },
};

export const heroContent = {
  title: 'Creez votre boutique par la voix',
  subtitle: 'en moins de 5 minutes',
  description:
    'La premiere marketplace mobile pensee pour le commerce informel ivoirien. Zero barriere technique, zero barriere linguistique, zero cout initial.',
  cta: {
    primary: 'Demander le deck',
    secondary: 'Nous contacter',
  },
};

export const problemContent = {
  title: 'Le commerce informel merite mieux',
  blocks: [
    {
      title: 'Fragmentation',
      description:
        'Des milliers de mini-sites isoles, sans trafic, mal concus et mal references. Chaque vendeur reinvente la roue dans son coin.',
    },
    {
      title: 'Friction acheteurs',
      description:
        'Trop de liens WhatsApp, trop de pages Facebook, trop de messages non lus. Trouver le bon produit au bon prix devient un parcours du combattant.',
    },
    {
      title: 'Fracture numerique',
      description:
        'La majorite des commercants sont analphabetes ou peu lettres, parlent mieux dioula que francais, et sont peu a l\'aise avec la technologie.',
    },
  ],
};

export const solutionContent = {
  title: 'Un marche unique, vivant, accessible',
  subtitle: 'DjassApp transforme le djassa physique en marketplace digitale',
  djassaman: {
    title: 'Djassaman',
    subtitle: 'L\'assistant vocal intelligent',
    sellerDescription:
      'Dites simplement "je vends des fleurs" et Djassaman vous guide. A partir de votre voix et de vos photos, l\'IA cree automatiquement votre boutique complete.',
    buyerDescription:
      'Recherche conversationnelle hyper-personnalisee. Dites ce que vous cherchez, Djassaman interroge tous les vendeurs et vous propose les meilleures offres.',
  },
  inclusion: {
    title: 'Concu pour l\'inclusion',
    points: [
      'Interface 100% vocale en francais et langues locales',
      'Experience guidee pas a pas',
      'Zero prerequis technique',
      'Support multilingue (francais, dioula)',
    ],
  },
};

export const howItWorksContent = {
  title: 'Comment ca marche',
  seller: {
    title: 'Parcours Vendeur',
    steps: [
      {
        number: '01',
        title: 'Parlez a Djassaman',
        description: '"Je vends des robes wax et des accessoires de mode"',
      },
      {
        number: '02',
        title: 'Creez boutique et catalogue',
        description: 'Prenez des photos, repondez aux questions de l\'IA, c\'est pret',
      },
      {
        number: '03',
        title: 'Partagez et vendez',
        description: 'Votre boutique est visible par des milliers d\'acheteurs',
      },
    ],
    examples: [
      '"Je vends des ecouteurs Bluetooth a 5000 francs"',
      '"Ajoute une photo de mon nouveau produit"',
      '"Combien j\'ai fait de ventes cette semaine ?"',
    ],
  },
  buyer: {
    title: 'Parcours Acheteur',
    steps: [
      {
        number: '01',
        title: 'Parlez a Djassaman',
        description: '"Je cherche une robe wax pas chere livree a Cocody"',
      },
      {
        number: '02',
        title: 'Comparez et choisissez',
        description: 'L\'IA vous propose les meilleures offres de la plateforme',
      },
      {
        number: '03',
        title: 'Payez et recevez',
        description: 'Paiement mobile securise, livraison sous 24h a Abidjan',
      },
    ],
    examples: [
      '"Je veux des ecouteurs Bluetooth livres aujourd\'hui"',
      '"Montre-moi les chaussures tendance du moment"',
      '"Je cherche un coiffeur a domicile a Yopougon"',
    ],
  },
};

export const marketContent = {
  title: 'Un marche colossal',
  subtitle: 'La Cote d\'Ivoire connait une explosion du mobile et du e-commerce',
  stats: [
    {
      value: '85%',
      label: 'du circuit de distribution est informel',
      source: 'Etude secteur CI',
    },
    {
      value: '20 000',
      label: 'boutiques informelles ciblees',
      source: 'Estimation marche',
    },
    {
      value: '12,8M',
      label: 'd\'internautes en Cote d\'Ivoire',
      source: 'DataReportal 2025',
    },
    {
      value: '7,55M',
      label: 'd\'utilisateurs reseaux sociaux',
      source: 'DataReportal 2025',
    },
    {
      value: '+11,3%',
      label: 'croissance e-commerce annuelle',
      source: 'Projection marche',
    },
    {
      value: '430 Mds',
      label: 'FCFA de marche e-commerce d\'ici 2027',
      source: 'Projection marche',
    },
  ],
  paragraph:
    'L\'usage du mobile money explose en Cote d\'Ivoire. Orange Money, MTN MoMo et Wave ont democratise le paiement numerique. DjassApp s\'appuie sur cette infrastructure pour offrir une experience d\'achat fluide et securisee.',
};

export const advantagesContent = {
  title: 'Nos avantages competitifs',
  items: [
    {
      title: 'IA vocale native',
      description: 'Djassaman permet de creer et chercher sans savoir lire ni ecrire',
    },
    {
      title: 'Accessibilite faible litteratie',
      description: 'Interface pensee pour les utilisateurs peu lettres',
    },
    {
      title: 'Trafic mutualise',
      description: 'Visibilite partagee comme dans un vrai marche physique',
    },
    {
      title: 'Paiements mobile integres',
      description: 'Orange Money, MTN MoMo, carte bancaire, cash a la livraison',
    },
    {
      title: 'Logistique partenaire',
      description: 'Livraison 24h maximum a Abidjan via notre reseau',
    },
    {
      title: 'SAV multilingue',
      description: 'Support en francais et langues locales',
    },
  ],
};

export const businessModelContent = {
  title: 'Business model',
  subtitle: 'Freemium avec commission et abonnements',
  sellerPlans: [
    {
      name: 'Essentielle',
      price: 'Gratuit',
      commission: '5%',
      features: [
        { name: 'Creation boutique via Djassaman', included: false },
        { name: 'Catalogue produits limite', included: true },
        { name: 'Paiement mobile + escrow', included: true },
        { name: 'Livraison partenaires', included: false },
        { name: 'Outils marketing', included: false },
        { name: 'Analytics ventes', included: false },
        { name: 'Support client', included: true, detail: 'Basique' },
        { name: 'Badge certifie', included: true },
        { name: 'Mini-site boutique', included: true },
      ],
    },
    {
      name: 'Avancee',
      price: '3 000 FCFA/mois',
      commission: '3%',
      popular: true,
      features: [
        { name: 'Creation boutique via Djassaman', included: true },
        { name: 'Catalogue produits etendu', included: true },
        { name: 'Paiement mobile + escrow', included: true },
        { name: 'Livraison partenaires', included: true, detail: 'Frais client' },
        { name: 'Outils marketing', included: true },
        { name: 'Analytics ventes', included: true },
        { name: 'Support client', included: true, detail: 'Standard' },
        { name: 'Badge certifie', included: true },
        { name: 'Mini-site boutique', included: true },
        { name: 'DjassWallet', included: false },
      ],
    },
    {
      name: 'Premium',
      price: '5 000 FCFA/mois',
      commission: '1,5%',
      features: [
        { name: 'Creation boutique via Djassaman', included: true },
        { name: 'Catalogue produits illimite', included: true },
        { name: 'Paiement mobile + escrow', included: true },
        { name: 'Livraison partenaires', included: true, detail: 'Offerte' },
        { name: 'Outils marketing', included: true },
        { name: 'Analytics ventes', included: true },
        { name: 'Support client', included: true, detail: 'Prioritaire' },
        { name: 'Badge certifie', included: true },
        { name: 'Mini-site avec nom de domaine', included: true },
        { name: 'DjassWallet', included: true },
        { name: 'Coaching personnalise', included: true },
      ],
    },
  ],
  buyerPlans: [
    {
      name: 'Standard',
      price: 'Gratuit',
      features: [
        { name: 'Recherche Djassaman', included: true, detail: 'Basique' },
        { name: 'Paiement securise + cash', included: true },
        { name: 'Livraison express', included: true, detail: 'Payante' },
        { name: 'Suggestions IA', included: true },
        { name: 'SAV', included: true, detail: 'Standard' },
      ],
    },
    {
      name: 'Premium',
      price: '2 000 FCFA/mois',
      features: [
        { name: 'Recherche Djassaman', included: true, detail: 'Poussee' },
        { name: 'Paiement securise + cash', included: true },
        { name: 'Livraison express', included: true, detail: 'Gratuite' },
        { name: 'Suggestions IA', included: true, detail: 'Optimisees' },
        { name: 'Offres exclusives', included: true },
        { name: 'Parrainage bonus', included: true },
        { name: 'SAV', included: true, detail: 'Prioritaire' },
      ],
    },
  ],
  additionalRevenue: [
    'Publicite ciblee sur la plateforme',
    'Partenariats logistiques',
    'Forfaits marketing personnalises',
    'Services IA premium',
  ],
};

export const roadmapContent = {
  title: 'Roadmap',
  milestones: [
    {
      period: 'T3 2025',
      title: 'Structuration',
      description:
        'Constitution juridique Ando Technologies. Installation au Maker\'s Factory (incubateur EM Lyon Abidjan).',
    },
    {
      period: 'T4 2025',
      title: 'MVP & Pilotes',
      description:
        'Developpement app Android/iOS et back-end. Tests terrain dans 3 quartiers: Cocody, Yopougon, Adjame avec 20 vendeurs pilotes.',
    },
    {
      period: 'T1 2026',
      title: 'Lancement',
      description:
        'Lancement public Google Play et App Store. Campagne marketing medias locaux et reseaux sociaux.',
    },
    {
      period: '2026-2027',
      title: 'Extension Abidjan',
      description:
        'Extension a toute Abidjan puis Bouake, Korhogo, San Pedro. Deploiement DjassWallet. Objectif 12 000 vendeurs, 500 000 acheteurs.',
    },
    {
      period: '2028+',
      title: 'Expansion regionale',
      description:
        'Lancement Burkina Faso, Mali, Nigeria. Preparation Serie A.',
    },
  ],
};

export const teamContent = {
  title: 'L\'equipe',
  members: [
    {
      name: 'Josue Ando',
      role: 'CEO & Co-fondateur',
      bio: 'Ingenieur logiciel (ESATIC). 3 ans d\'experience dont 1 an chez Orange Cote d\'Ivoire. Master en management (EM Lyon).',
      image: null,
    },
    {
      name: 'Christian Kouame',
      role: 'COO & Co-fondateur',
      bio: 'Ingenieur informatique (ESATIC). Forte experience en data et digitalisation. Liaison produit-marche.',
      image: null,
    },
    {
      name: 'Marc Oka',
      role: 'CTO',
      bio: 'Architecture technique et R&D. Expert full-stack et infrastructures cloud.',
      image: null,
    },
    {
      name: 'Tiemoko Sylla',
      role: 'CDO',
      bio: 'Specialiste UX/UI Design. Expert experience utilisateur pour marches emergents.',
      image: null,
    },
    {
      name: 'Marc Koffi',
      role: 'Responsable Produit',
      bio: 'Gestion produit et roadmap. Expertise e-commerce et marketplaces.',
      image: null,
    },
  ],
};

export const fundraisingContent = {
  title: 'Levee de fonds',
  amount: '300 000 EUR',
  amountFCFA: '196 millions FCFA',
  allocation: [
    { label: 'R&D Produit', percentage: 60, description: 'App mobile, IA Djassaman, back-office' },
    { label: 'Marketing & Acquisition', percentage: 30, description: 'Terrain, digital, ambassadeurs' },
    { label: 'Operationnel', percentage: 10, description: 'Support, logistique, admin' },
  ],
  whyNow: {
    title: 'Pourquoi maintenant ?',
    points: [
      'Le mobile money atteint une masse critique en Cote d\'Ivoire',
      'L\'IA vocale devient accessible et performante',
      'Le commerce informel cherche activement des solutions digitales',
      'Fenetre d\'opportunite avant l\'arrivee de concurrents internationaux',
    ],
  },
  whatItFinances: {
    title: 'Ce que finance cette levee',
    points: [
      'Finalisation de l\'app mobile iOS et Android',
      'Developpement complet de Djassaman (IA vocale)',
      'Marketing terrain dans 10 quartiers d\'Abidjan',
      'Constitution d\'un reseau de 50 vendeurs ambassadeurs',
      'Integration partenaires logistiques et paiement',
    ],
  },
};

export const faqContent = {
  title: 'Questions frequentes',
  items: [
    {
      question: 'Faut-il savoir lire pour utiliser DjassApp ?',
      answer:
        'Non. DjassApp est concu pour les personnes peu ou pas lettrees. L\'assistant vocal Djassaman guide l\'utilisateur a chaque etape, en francais ou en langues locales.',
    },
    {
      question: 'Quels modes de paiement sont acceptes ?',
      answer:
        'Orange Money, MTN MoMo, cartes bancaires via API, et paiement cash a la livraison pour les clients les moins bancarises.',
    },
    {
      question: 'Comment fonctionne la livraison ?',
      answer:
        'DjassApp s\'appuie sur un reseau de partenaires logistiques locaux. Objectif: livraison sous 24h maximum a Abidjan. Retrait en point relais egalement disponible.',
    },
    {
      question: 'DjassApp est-il disponible ?',
      answer:
        'DjassApp est actuellement en phase de developpement. Les tests pilotes debuteront fin 2025 dans 3 quartiers d\'Abidjan. Lancement public prevu T1 2026.',
    },
  ],
};

export const ambitionContent = {
  title: 'Notre ambition a 3 ans',
  stats: [
    { value: '12 000', label: 'vendeurs actifs' },
    { value: '500 000', label: 'acheteurs actifs' },
  ],
};
