export interface Project {
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  techs: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
}

export const PROJECTS: Project[] = [
  // Recommandation visuelle : capture de la grille des restaurants avec la notation en étoiles visible
  {
    title: 'Délices de Douala',
    tagline: 'Le guide gourmand de Douala, noté par sa communauté.',
    problem:
      "Aider habitants et visiteurs de Douala à découvrir facilement des restaurants locaux fiables et leurs spécialités.",
    solution:
      "Un guide interactif avec notation communautaire en temps réel et un menu filtrable mettant en avant le plat du jour.",
    techs: ['Angular 22', 'TypeScript', 'Signals', 'SSR (@angular/ssr + Express)', 'httpResource()'],
    demoUrl: 'https://pratique-jour-7-les-delices-de-doua.vercel.app/',
    githubUrl: 'https://github.com/RISBO308/pratique-jour-7-Les-Delices-De-Douala',
    image: '/les délices de douala.webp',
  },
  // Recommandation visuelle : capture d'une fiche produit avec la description dépliée et le badge panier visible
  {
    title: 'ICE BOX',
    tagline: 'Une boutique de montres en ligne, simple et efficace.',
    problem:
      "Offrir un parcours d'achat de montres en ligne simple, de la découverte du catalogue à la sélection du produit.",
    solution:
      "Une boutique e-commerce aux fiches produits interactives, avec gestion de panier réactive et navigation fluide.",
    techs: ['Angular 22', 'TypeScript', 'Signals', 'Angular Router', 'SSR (@angular/ssr + Express)'],
    demoUrl: 'https://shop-app-psi-two.vercel.app/',
    githubUrl: 'https://github.com/RISBO308/shop-app',
    image: '/ice box.webp',
  },
  // Recommandation visuelle : capture du Hero (bannière d'accroche) en pleine largeur
  {
    title: 'Le Calao Doré',
    tagline: 'La vitrine digitale qui donne envie de réserver.',
    problem:
      "Donner à un restaurant camerounais une vitrine en ligne moderne pour valoriser son identité et convertir les visiteurs.",
    solution:
      "Une landing page soignée présentant la carte, les témoignages clients et les horaires en un coup d'œil.",
    techs: ['Angular 22', 'TypeScript', 'Standalone Components', 'HTML/CSS'],
    demoUrl: 'https://le-calao-dore-one.vercel.app/',
    githubUrl: 'https://github.com/RISBO308/le-calao-dore',
    image: '/calao doré.webp',
  },
  // Recommandation visuelle : capture du tableau de bord avec le graphique d'évolution (Chart.js)
  {
    title: 'Bilanko',
    tagline: 'La gestion commerciale simplifiée pour les petits commerces.',
    problem:
      "Aider les petits commerçants camerounais à structurer le suivi, souvent informel, de leurs ventes, charges et stocks.",
    solution:
      "Un ERP web avec tableau de bord, gestion des ventes et des charges, prêt pour les démarches bancaires et fiscales.",
    techs: ['Angular 21', 'TypeScript', 'Signals', 'SSR (@angular/ssr + Express)', 'Axios', 'Chart.js', 'Bootstrap'],
    demoUrl: 'https://bilanko-frontend.vercel.app/',
    githubUrl: 'https://github.com/Bilanko-Angular/bilanko-frontend',
    image: '/bilanko.webp',
  },
];
