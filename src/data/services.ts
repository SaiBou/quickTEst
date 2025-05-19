export type Service = {
  id: string;
  icon: string;
  title: string;
  description: string;
  fullDescription: string;
  price: string;
  features: string[];
  faq: { question: string; answer: string }[];
  image: string;
  gallery: string[];
};

export const services: Service[] = [
  {
    id: "transport",
    icon: "package",
    title: "Transport de colis",
    description: "Livraison rapide et sécurisée de vos colis dans toute la ville",
    fullDescription: "Notre service de transport de colis vous garantit une livraison rapide et sécurisée partout en ville. Que ce soit pour un document urgent, un petit paquet ou un colis plus volumineux, notre équipe de professionnels prendra en charge votre livraison avec le plus grand soin.",
    price: "À partir de 15€",
    features: [
      "Livraison express dans l'heure",
      "Suivi en temps réel",
      "Assurance incluse jusqu'à 500€",
      "Emballage sécurisé disponible",
      "Notification de livraison"
    ],
    faq: [
      {
        question: "Quelle est la zone de livraison ?",
        answer: "Nous livrons dans toute la ville et sa périphérie dans un rayon de 30km."
      },
      {
        question: "Comment suivre ma livraison ?",
        answer: "Vous recevrez un lien de suivi par SMS et email pour suivre votre colis en temps réel."
      }
    ],
    image: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg",
    gallery: [
      "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg",
      "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg"
    ]
  },
  {
    id: "demenagement",
    icon: "home-move",
    title: "Déménagement",
    description: "Service complet de déménagement avec des professionnels qualifiés",
    fullDescription: "Déménager n'a jamais été aussi simple avec notre service complet de déménagement. Nos équipes professionnelles prennent en charge l'ensemble du processus, de l'emballage au déballage.",
    price: "À partir de 80€",
    features: [
      "Emballage et déballage",
      "Démontage et remontage",
      "Transport sécurisé",
      "Protection des objets",
      "Stockage temporaire"
    ],
    faq: [
      {
        question: "Combien de temps à l'avance dois-je réserver ?",
        answer: "Nous recommandons de réserver au moins 2 semaines à l'avance."
      },
      {
        question: "Proposez-vous des cartons ?",
        answer: "Oui, nous fournissons des cartons et matériaux d'emballage."
      }
    ],
    image: "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg",
    gallery: [
      "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg",
      "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg"
    ]
  },
  {
    id: "nettoyage",
    icon: "broom",
    title: "Nettoyage",
    description: "Services de nettoyage professionnel pour particuliers et entreprises",
    fullDescription: "Nos services de nettoyage professionnel transforment les espaces sales en environnements impeccables. Nos équipes utilisent des équipements et produits de qualité professionnelle.",
    price: "À partir de 25€",
    features: [
      "Personnel qualifié",
      "Produits écologiques",
      "Équipements pro",
      "Interventions planifiées",
      "Devis gratuit"
    ],
    faq: [
      {
        question: "Fournissez-vous les produits ?",
        answer: "Oui, nous apportons tous les produits nécessaires."
      },
      {
        question: "Proposez-vous des forfaits ?",
        answer: "Oui, nous proposons des forfaits hebdomadaires ou mensuels."
      }
    ],
    image: "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg",
    gallery: [
      "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg",
      "https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg"
    ]
  },
  {
    id: "depannage",
    icon: "wrench",
    title: "Dépannage",
    description: "Intervention rapide pour tous vos besoins de dépannage",
    fullDescription: "Notre service de dépannage assure une intervention rapide pour résoudre vos problèmes urgents. Nos techniciens qualifiés sont disponibles pour tous types d'interventions.",
    price: "À partir de 45€",
    features: [
      "Intervention urgente",
      "Techniciens certifiés",
      "Disponible 7j/7",
      "Garantie travaux",
      "Tarifs transparents"
    ],
    faq: [
      {
        question: "Quel est le délai d'intervention ?",
        answer: "En cas d'urgence, nous intervenons dans l'heure."
      },
      {
        question: "Quels types de dépannage ?",
        answer: "Plomberie, électricité, serrurerie, chauffage, etc."
      }
    ],
    image: "https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg",
    gallery: [
      "https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg",
      "https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg"
    ]
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};