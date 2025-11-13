import type { Stay, Testimonial, TeamMember, Article, Partner, FAQ, Flight } from './types';

export const stays: Stay[] = [
  {
    id: 1,
    title: 'Aventure à Marrakech',
    destination: 'Maroc',
    price: 3900,
    duration: 7,
    description: 'Explorez les souks animés et les paysages désertiques.',
    longDescription: 'Plongez au cœur de la culture marocaine avec ce séjour inoubliable à Marrakech. Visitez le Jardin Majorelle, perdez-vous dans les ruelles de la médina et vivez une nuit magique dans le désert d\'Agafay.',
    imageUrl: 'https://picsum.photos/seed/marrakech/800/600',
    gallery: [
      'https://picsum.photos/seed/marrakech1/1200/800',
      'https://picsum.photos/seed/marrakech2/1200/800',
      'https://picsum.photos/seed/marrakech3/1200/800',
      'https://picsum.photos/seed/marrakech4/1200/800',
    ],
    type: 'adventure',
    rating: 4.8,
    reviews: [
      { id: 1, author: 'Jean Dupont', rating: 5, comment: 'Voyage exceptionnel, organisation parfaite !' },
      { id: 2, author: 'Marie Curie', rating: 4, comment: 'Le désert était incroyable, un peu chaud en journée.' },
    ],
    program: [
        { day: 1, title: 'Arrivée à Marrakech', description: 'Accueil à l\'aéroport et transfert à votre riad.' },
        { day: 2, title: 'Exploration de la Médina', description: 'Visite guidée des souks, de la place Jemaa el-Fna.' },
        { day: 3, title: 'Nuit dans le désert', description: 'Excursion en 4x4 dans le désert d\'Agafay, dîner sous les étoiles.' },
    ],
    included: ['Vols A/R', 'Hébergement en riad', 'Excursion désert', 'Petits-déjeuners'],
    excluded: ['Déjeuners et dîners (sauf désert)', 'Assurance voyage', 'Dépenses personnelles'],
    practicalInfo: {
        departureDates: ['15/09/2024', '22/09/2024', '29/09/2024'],
        guideLanguage: 'Français, Anglais',
        comfortLevel: 'Élevé'
    }
  },
  {
    id: 2,
    title: 'Plages de Santorin',
    destination: 'Grèce',
    price: 5800,
    duration: 10,
    description: 'Détendez-vous sur les plages de sable noir et admirez les couchers de soleil.',
    longDescription: 'Découvrez la perle des Cyclades. Santorin vous enchantera avec ses villages blancs à flanc de falaise, ses eaux cristallines et ses couchers de soleil mondialement connus à Oia.',
    imageUrl: 'https://picsum.photos/seed/santorini/800/600',
    gallery: [
      'https://picsum.photos/seed/santorini1/1200/800',
      'https://picsum.photos/seed/santorini2/1200/800',
      'https://picsum.photos/seed/santorini3/1200/800',
    ],
    type: 'beach',
    rating: 4.9,
    reviews: [
      { id: 3, author: 'Alice Martin', rating: 5, comment: 'Absolument magique, je recommande !' },
    ],
    program: [
        { day: 1, title: 'Arrivée à Santorin', description: 'Transfert à votre hôtel avec vue sur la Caldeira.' },
        { day: 2, title: 'Plages de Perissa & Perivolos', description: 'Journée détente sur les célèbres plages de sable noir.' },
        { day: 3, title: 'Coucher de soleil à Oia', description: 'Soirée inoubliable dans le village d\'Oia.' },
    ],
    included: ['Hébergement en hôtel 4*', 'Location de voiture', 'Petits-déjeuners'],
    excluded: ['Vols', 'Repas', 'Activités optionnelles'],
    practicalInfo: {
        departureDates: ['01/07/2024', '08/07/2024', '15/07/2024'],
        guideLanguage: 'Aucun (autotour)',
        comfortLevel: 'Très élevé'
    }
  },
  {
    id: 3,
    title: 'Trésors de Kyoto',
    destination: 'Japon',
    price: 8100,
    duration: 12,
    description: 'Immergez-vous dans la culture japonaise traditionnelle.',
    longDescription: 'Kyoto, l\'ancienne capitale impériale, est un véritable musée à ciel ouvert. Visitez le Kinkaku-ji (Pavillon d\'Or), la forêt de bambous d\'Arashiyama et le quartier des geishas de Gion.',
    imageUrl: 'https://picsum.photos/seed/kyoto/800/600',
    gallery: [
      'https://picsum.photos/seed/kyoto1/1200/800',
      'https://picsum.photos/seed/kyoto2/1200/800',
      'https://picsum.photos/seed/kyoto3/1200/800',
    ],
    type: 'cultural',
    rating: 4.7,
    reviews: [
      { id: 4, author: 'Paul Bernard', rating: 5, comment: 'Une immersion culturelle totale. Le guide était passionnant.' },
    ],
    program: [
        { day: 1, title: 'Arrivée à Kyoto', description: 'Installation dans votre ryokan traditionnel.' },
        { day: 2, title: 'Temples et Jardins', description: 'Visite du Kinkaku-ji, Ryoan-ji et son jardin zen.' },
        { day: 3, title: 'Arashiyama', description: 'Promenade dans la forêt de bambous et visite du pont Togetsukyō.' },
    ],
    included: ['Vols A/R', 'Hébergement en ryokan', 'Japan Rail Pass 7 jours', 'Visites guidées'],
    excluded: ['Repas', 'Entrées des sites non mentionnés', 'Dépenses personnelles'],
    practicalInfo: {
        departureDates: ['10/10/2024', '17/10/2024', '24/10/2024'],
        guideLanguage: 'Français',
        comfortLevel: 'Moyen (mix ryokan/hôtel)'
    }
  },
  {
    id: 4,
    title: 'Safari en Tanzanie',
    destination: 'Tanzanie',
    price: 11400,
    duration: 8,
    description: 'Vivez l\'expérience du "Big Five" au cœur du Serengeti.',
    longDescription: 'Un safari inoubliable à travers les parcs nationaux les plus célèbres de Tanzanie. Observez la faune sauvage dans son habitat naturel, du cratère du Ngorongoro aux vastes plaines du Serengeti.',
    imageUrl: 'https://picsum.photos/seed/tanzania/800/600',
    gallery: [
        'https://picsum.photos/seed/tanzania1/1200/800',
        'https://picsum.photos/seed/tanzania2/1200/800',
    ],
    type: 'adventure',
    rating: 5,
    reviews: [],
    program: [],
    included: ['Vols internes', 'Hébergement en lodge', 'Jeep 4x4 privatisée', 'Pension complète'],
    excluded: ['Vols internationaux', 'Visa', 'Pourboires'],
    practicalInfo: {
        departureDates: ['05/08/2024', '12/08/2024'],
        guideLanguage: 'Anglais',
        comfortLevel: 'Élevé'
    }
  },
    {
    id: 5,
    title: 'Costa Rica : Pura Vida',
    destination: 'Costa Rica',
    price: 7100,
    duration: 14,
    description: 'Aventurez-vous dans une nature luxuriante et préservée.',
    longDescription: 'Le Costa Rica est un paradis pour les amoureux de la nature. Entre volcans, forêts de nuages et plages du Pacifique, découvrez une biodiversité exceptionnelle.',
    imageUrl: 'https://picsum.photos/seed/costarica/800/600',
    gallery: [],
    type: 'adventure',
    rating: 4.6,
    reviews: [],
    program: [],
    included: ['Location de 4x4', 'Hébergements éco-lodges', 'Petits-déjeuners'],
    excluded: ['Vols', 'Essence', 'Repas'],
    practicalInfo: {
        departureDates: [],
        guideLanguage: 'Aucun (autotour)',
        comfortLevel: 'Moyen'
    }
  },
  {
    id: 6,
    title: 'Splendeurs de Rome',
    destination: 'Italie',
    price: 3100,
    duration: 5,
    description: 'Un voyage à travers l\'histoire dans la Ville Éternelle.',
    longDescription: 'Explorez les vestiges de l\'Empire romain, du Colisée au Forum. Admirez les chefs-d\'œuvre de la Renaissance au Vatican et flânez dans les ruelles charmantes du Trastevere.',
    imageUrl: 'https://picsum.photos/seed/rome/800/600',
    gallery: [],
    type: 'cultural',
    rating: 4.8,
    reviews: [],
    program: [],
    included: ['Vols A/R', 'Hôtel 3* centre-ville', 'Petits-déjeuners'],
    excluded: ['Transports locaux', 'Entrées des sites', 'Repas'],
    practicalInfo: {
        departureDates: [],
        guideLanguage: 'Français (visites optionnelles)',
        comfortLevel: 'Bon'
    }
  },
];

export const tunisianHotelPromos: Stay[] = [
    {
        id: 101,
        title: 'The Russelior Hotel & Spa',
        destination: 'Hammamet',
        price: 499,
        originalPrice: 650,
        duration: 1, // Per night
        description: 'Séjour de luxe et détente sur les plages de Yasmine Hammamet.',
        longDescription: 'Le Russelior Hotel & Spa, fleuron de l\'hôtellerie de luxe en Tunisie, est un havre de paix situé au cœur de la station balnéaire de Yasmine Hammamet. L\'hôtel se distingue par son concept unique "All In & Out", offrant une expérience de séjour où tout est inclus, sans exception, pour une tranquillité d\'esprit absolue. Son architecture élégante, ses jardins luxuriants et son service irréprochable en font une destination de choix pour les voyageurs en quête d\'exclusivité et de bien-être.',
        imageUrl: 'https://picsum.photos/seed/russelior-main/800/600',
        gallery: [
          'https://picsum.photos/seed/russelior1/1200/800',
          'https://picsum.photos/seed/russelior2/1200/800',
          'https://picsum.photos/seed/russelior3/1200/800',
          'https://picsum.photos/seed/russelior4/1200/800',
        ],
        type: 'hotel',
        rating: 4.7,
        reviews: [
            { id: 1011, author: 'M. H.', rating: 5, comment: 'Professeur' },
            { id: 1012, author: 'D. H.', rating: 4, comment: 'Couples jeunes' },
            { id: 1013, author: 'N. A.', rating: 4, comment: 'Couples jeunes' },
            { id: 1014, author: 'N. A.', rating: 5, comment: 'Couples jeunes' },
        ],
        specialOffer: 'Enfant -3ans gratuit//Profitez des TARIFS SPECIAUX pour toute l\'année 2025// Faites vite, ce prix risque d\'augmenter',
        mainAmenities: ['Climatisation', 'Garderie d\'enfants', 'Bar', 'Restaurant', 'Plage'],
        faq: [
            {
                question: 'L\'établissement The Russelior Hotel & Spa propose des activités et loisirs?',
                answer: 'Oui, l\'établissement propose une piscine extérieure, un centre de spa et de bien-être, ainsi qu\'un accès direct à une plage privée. Des activités nautiques et des excursions peuvent être organisées sur demande.'
            },
            {
                question: 'Quel type d\'hébergement puis-je réserver à l\'établissement The Russelior Hotel & Spa?',
                answer: 'L\'hôtel propose plusieurs types de chambres et suites, incluant des chambres doubles, des suites junior et des suites de luxe avec vue sur la mer ou sur les jardins.'
            },
            {
                question: 'L\'établissement The Russelior Hotel & Spa est-il proche du centre (Hammamet)?',
                answer: 'L\'hôtel est situé dans la zone touristique de Yasmine Hammamet, à environ 10 minutes en voiture du centre-ville historique de Hammamet et de sa médina.'
            },
            {
                question: 'Quels sont les horaires d\'arrivée et de départ à l\'établissement The Russelior Hotel & Spa?',
                answer: 'L\'enregistrement s\'effectue à partir de 15h00 et le départ doit être fait avant 12h00. Des arrangements pour un départ tardif peuvent être possibles sous réserve de disponibilité et avec un supplément.'
            }
        ],
        advantages: [
            { title: 'La garantie du meilleur prix', description: 'Soyez tranquille, Carthage Travel and Events négocié pour vous les meilleurs prix pour votre séjour' },
            { title: 'La description détaillée', description: 'Nous mettons en place des descriptions complètes des établissements et les hôtels que vous désiriez visiter avec les avis des clients.' },
            { title: 'Modes de paiement', description: '<ul><li class="list-disc ml-4">Paiement sécurisé par carte bancaire.</li><li class="list-disc ml-4">Paiement espèce ou par chèque dans nos agences Carthage Travel and Events.</li><li class="list-disc ml-4">Versement bancaire.</li><li class="list-disc ml-4">Versement postal</li></ul>' },
            { title: 'La sécurité de vos réservations', description: 'Notre principale préoccupation est d\'offrir un excellent séjour à nos clients. Votre satisfaction absolue et votre confiance dans nos hôtels sont cruciales pour nous. Par conséquent, dans le cadre de notre détermination à répondre à vos attentes, nous avons un ensemble de politiques de confidentialité et de sécurité pour vos informations. Cette politique incarne notre engagement envers vous et décrit la façon dont nous utilisons vos renseignements personnels.' },
        ],
        amenities: [
            'Climatisation', 'Téléphone avec ligne directe', 'Plage', 'Coffre fort', 'Casino', 'Centre de remise en forme', 'Télévision', 'Boutique de cadeaux', 'Wifi gratuit dans le hall de réception', 'Sèche-cheveux', 'Bar', 'Centre d\'affaires', 'Café', 'Piscine', 'Chaînes câblées', 'Change', 'Parking gratuit', 'Garderie d\'enfants', 'Restaurant', 'Salon de Beauté', 'Sauna', 'Massage', 'Ascenseur', 'Chambre non fumeur', 'Wifi gratuit dans les chambres'
        ],
        ratingBreakdown: {
            'Estimation globale du séjour': 90, 'Qualité d\'accueil': 90, 'Propreté de l\'hôtel': 95, 'Activités': 60, 'Qualité de la chambre': 90, 'Confort du lit': 95, 'Gastronomie et Restauration': 75, 'Qualité du Personnel et du service': 85, 'Rapport Qualité/prix': 70,
        },
        location: {
            address: 'Hammamet, Tunisie, Adresse : BP 76, Yasmine Hammamet 8040',
            lat: 36.3630,
            lng: 10.5350
        },
        nearbyHotels: [
            { id: 801, name: 'Hasdrubal Thalassa Hammamet' }, { id: 802, name: 'Lella Baya & Thalasso' }, { id: 803, name: 'Golden Yasmin Mehari Hammamet' }, { id: 804, name: 'Le Hammamet Hotel And Spa' }, { id: 805, name: 'Magic Hotel El Manor' }, { id: 806, name: 'Magic Life Africano' }, { id: 807, name: 'Hotel AZIZA THALASSO GOLF ( Adult Only )' }, { id: 808, name: 'Zodiac Hotel & Aqua Park' }, { id: 809, name: 'TMK L\' Atrium' }, { id: 810, name: 'Sol Azur Beach Congres Hammamet' }, { id: 811, name: 'THE RUSSELIOR HOTEL & SPA' }, { id: 812, name: 'Oceana Hotel & Spa' }, { id: 813, name: 'Iberostar Averroes' }, { id: 814, name: 'Vincci Marillia' }, { id: 815, name: 'Le Sultan' }, { id: 816, name: 'Residence Mahmoud' }, { id: 817, name: 'Steigenberger Marhaba Thalasso Hammamet' }, { id: 818, name: 'Bel Azur Thalasso & Bungalows' }, { id: 819, name: 'Menara' }, { id: 820, name: 'Diar Lemdina' },
        ],
        program: [], included: [], excluded: [], practicalInfo: { departureDates: [], guideLanguage: '', comfortLevel: '' }
    },
    {
        id: 102,
        title: 'Best Beach Hotel Sousse',
        destination: 'Sousse',
        price: 245,
        originalPrice: 360,
        duration: 1,
        description: 'Profitez du soleil et de la mer dans cet hôtel en bord de plage.',
        longDescription: "Idéalement situé en bord de mer, le Best Beach Hotel Sousse est la destination parfaite pour des vacances en famille ou entre amis. Profitez de notre grande piscine, de notre plage privée aménagée et de notre équipe d'animation dynamique qui propose des activités pour tous les âges. Nos chambres confortables, notre restaurant buffet varié et notre ambiance conviviale vous garantissent un séjour des plus agréables sous le soleil de Sousse.",
        imageUrl: 'https://picsum.photos/seed/bestbeach/800/600',
        gallery: [
            'https://picsum.photos/seed/bestbeach1/1200/800',
            'https://picsum.photos/seed/bestbeach2/1200/800',
            'https://picsum.photos/seed/bestbeach3/1200/800',
        ],
        type: 'promo',
        rating: 4.2,
        reviews: [
            { id: 1021, author: 'Famille Dubois', rating: 4, comment: 'Super ambiance, les enfants ont adoré le club et les toboggans. Buffet correct.' },
            { id: 1022, author: 'Sophie L.', rating: 3, comment: 'Bon emplacement, mais la chambre était un peu vieillotte. Bon rapport qualité-prix.' },
        ],
        specialOffer: 'Réservez 7 nuits, payez seulement pour 6 ! Offre valable pour tout séjour en juin et septembre.',
        mainAmenities: ['Piscine', 'Plage', 'Restaurant', 'Club Enfants', 'Animation'],
        faq: [
            { question: 'L\'hôtel possède-t-il des toboggans aquatiques ?', answer: 'Oui, nous avons une section de la piscine dédiée avec plusieurs toboggans pour le plaisir des petits et des grands.' },
            { question: 'La formule All-Inclusive est-elle disponible ?', answer: 'Oui, nous proposons une formule All-Inclusive qui comprend les repas au restaurant principal, les snacks et les boissons locales.' },
            { question: 'Le Wi-Fi est-il disponible dans les chambres ?', answer: 'Le Wi-Fi est disponible gratuitement dans les zones communes (réception, bar, piscine). Un accès dans les chambres est possible avec un supplément.' },
            { question: 'L\'hôtel est-il loin du centre-ville de Sousse ?', answer: 'L\'hôtel est situé à environ 15 minutes en taxi de la médina de Sousse. Un arrêt de bus se trouve également à proximité.' }
        ],
        advantages: [
            { title: 'La garantie du meilleur prix', description: 'Soyez tranquille, Carthage Travel and Events négocié pour vous les meilleurs prix pour votre séjour' },
            { title: 'La description détaillée', description: 'Nous mettons en place des descriptions complètes des établissements et les hôtels que vous désiriez visiter avec les avis des clients.' }
        ],
        amenities: ['Piscine', 'Plage', 'Restaurant', 'Club Enfants', 'Animation', 'Bar', 'Parking gratuit', 'Climatisation', 'Télévision', 'Balcon', 'Bureau de change', 'Boutique'],
        ratingBreakdown: {
            'Estimation globale du séjour': 82, 'Qualité d\'accueil': 85, 'Propreté de l\'hôtel': 80, 'Activités': 90, 'Qualité de la chambre': 75, 'Confort du lit': 78, 'Gastronomie et Restauration': 79, 'Qualité du Personnel et du service': 84, 'Rapport Qualité/prix': 88,
        },
        location: {
            address: 'Route de la Corniche, Sousse 4000, Tunisie',
            lat: 35.8200,
            lng: 10.6400
        },
        nearbyHotels: [
             { id: 801, name: 'Hasdrubal Thalassa Hammamet' }, { id: 802, name: 'Lella Baya & Thalasso' }
        ],
        program: [], included: [], excluded: [], practicalInfo: { departureDates: [], guideLanguage: '', comfortLevel: '' }
    },
    {
        id: 103,
        title: 'Marriott Resort Sousse Pearl',
        destination: 'Sousse',
        price: 490,
        originalPrice: 650,
        duration: 1,
        description: 'L\'élégance et le confort d\'un resort de luxe les pieds dans l\'eau.',
        longDescription: "Vivez une expérience de luxe inégalée au Sousse Marriott Resort & Spa Pearl. Situé sur le front de mer scintillant de Sousse, cet établissement 5 étoiles combine un design contemporain avec une hospitalité tunisienne chaleureuse. Profitez de nos chambres et suites élégantes avec vue sur la mer, détendez-vous dans notre spa de classe mondiale, plongez dans nos piscines spectaculaires ou savourez une cuisine exquise dans nos divers restaurants. Avec un accès direct à une plage privée de sable fin, le Marriott Sousse est l'évasion parfaite pour les couples et les familles exigeantes.",
        imageUrl: 'https://picsum.photos/seed/marriott/800/600',
        gallery: [
            'https://picsum.photos/seed/marriott1/1200/800',
            'https://picsum.photos/seed/marriott2/1200/800',
            'https://picsum.photos/seed/marriott3/1200/800',
            'https://picsum.photos/seed/marriott4/1200/800',
        ],
        type: 'hotel',
        rating: 4.9,
        reviews: [
            { id: 1031, author: 'Leila K.', rating: 5, comment: 'Service impeccable et vue magnifique. Le spa est divin.' },
            { id: 1032, author: 'Karim B.', rating: 5, comment: 'Un vrai 5 étoiles. Le personnel est aux petits soins. Je recommande vivement.' },
        ],
        specialOffer: 'Lune de Miel de Rêve : Surclassement en suite vue mer et dîner romantique offerts.',
        mainAmenities: ['Piscine', 'Spa', 'Accès Plage', 'Restaurant', 'Wi-Fi Gratuit'],
        faq: [
            { question: 'L\'hôtel dispose-t-il d\'un parking ?', answer: 'Oui, nous proposons un parking privé et sécurisé gratuit pour nos clients.' },
            { question: 'Les animaux de compagnie sont-ils autorisés ?', answer: 'Non, malheureusement les animaux de compagnie ne sont pas admis dans notre établissement.' },
            { question: 'Y a-t-il une piscine intérieure ?', answer: 'Oui, notre spa dispose d\'une magnifique piscine intérieure chauffée accessible toute l\'année.' },
            { question: 'Proposez-vous des activités pour les enfants ?', answer: 'Oui, notre Kids Club propose un programme d\'activités variées pour les enfants de 4 à 12 ans sous la supervision de notre personnel qualifié.' }
        ],
        advantages: [
            { title: 'La garantie du meilleur prix', description: 'Soyez tranquille, Carthage Travel and Events négocié pour vous les meilleurs prix pour votre séjour' },
            { title: 'La description détaillée', description: 'Nous mettons en place des descriptions complètes des établissements et les hôtels que vous désiriez visiter avec les avis des clients.' }
        ],
        amenities: ['Accès Plage', 'Piscine', 'Spa et centre de bien-être', 'Wi-Fi Gratuit', 'Parking gratuit', 'Restaurant', 'Bar', 'Chambres familiales', 'Climatisation', 'Room service', 'Centre de fitness', 'Piscine intérieure', 'Sauna', 'Hammam'],
        ratingBreakdown: {
            'Estimation globale du séjour': 95, 'Qualité d\'accueil': 98, 'Propreté de l\'hôtel': 97, 'Activités': 85, 'Qualité de la chambre': 96, 'Confort du lit': 98, 'Gastronomie et Restauration': 92, 'Qualité du Personnel et du service': 99, 'Rapport Qualité/prix': 88,
        },
        location: {
            address: 'Boulevard du 14 Janvier, Sousse 4039, Tunisie',
            lat: 35.8450,
            lng: 10.6100
        },
        nearbyHotels: [
            { id: 813, name: 'Iberostar Averroes' }, { id: 814, name: 'Vincci Marillia' }, { id: 815, name: 'Le Sultan' }
        ],
        program: [], included: [], excluded: [], practicalInfo: { departureDates: [], guideLanguage: '', comfortLevel: '' }
    }
];

export const organizedTrips: Stay[] = [
    {
        id: 502,
        title: 'Voyager à Istanbul 2025',
        destination: 'Turquie',
        price: 1790,
        duration: 7,
        type: 'organise',
        imageUrl: 'https://picsum.photos/seed/istanbul-main-hero/1200/800',
        gallery: [
            'https://picsum.photos/seed/istanbul-main-hero/1200/800',
            'https://picsum.photos/seed/istanbul-sultanahmet/800/600',
            'https://picsum.photos/seed/istanbul-gulls/800/600',
            'https://picsum.photos/seed/istanbul-bazar/800/600',
            'https://picsum.photos/seed/istanbul-tram/800/600',
            'https://picsum.photos/seed/istanbul-simit/800/600',
            'https://picsum.photos/seed/istanbul-hagia/800/600',
        ],
        description: 'Découvrez Istanbul, une métropole fascinante à cheval entre l\'Europe et l\'Asie.',
        longDescription: '"Istanbul" est une métropole hypnotique, imprégnée de culture, d\'histoire et de diversité. Vous pourrez découvrir des monuments emblématiques comme la Mosquée Bleue et Sainte-Sophie, des bazars animés comme le Grand Bazar et le Bazar aux épices, ainsi que des croisières sur le détroit du Bosphore offrant une vue spectaculaire sur la ville. Istanbul est également réputée pour sa scène culinaire vibrante, offrant des délices de ses deux restaurants gastronomiques, ses nombreux plus de vous perdre dans ses ruelles historiques et de découvrir la convivialité de ses habitants.',
        program: [
            { day: 1, title: 'Jour 1 : Tunis / Istanbul', description: 'Rendez-vous à l\'aéroport Tunis Carthage et embarquement à destination d\'Istanbul. Arrivée, accueil et transfert à votre hôtel selon la liste des hotels proposée par Carthage Travel & Events.' },
            { day: 2, title: 'Jour 2 : [Petit déjeuner Turc, City tour & Shopping]', description: 'Après le petit déjeuner, départ pour une visite panoramique sur la côte Asiatique d\'Istanbul, en passant par le pont intercontinental du Bosphore. Une vue panoramique sur toute la Corne d\'Or qui divise la partie européenne d\'Istanbul en deux.' },
            { day: 3, title: 'Jour 3 : [Iles des princes avec Déjeuner]', description: 'Petit déjeuner à l\'hôtel, Excursion d\'une journée aux Iles des Princes, Votre journée commence par un transfert vers le port et embarquement à bord du bateau pour une traversée de 1h sur la mer de Marmara en direction de l\'archipel des neuf îles. Arrêt sur l\'île de Büyükada, promenade et découverte de l\'île, de ses somptueuses villas et jardins. Déjeuner à base de poisson et spécialités turques. L\'après-midi, retour en bateau à Istanbul. Soirée libre et nuitée.' },
            { day: 4, title: 'Jour 4 : [Journée Spéciale Shopping]', description: 'Petit déjeuner à l\'hôtel et départ vers une sélection des meilleurs centres commerciaux et Malls à Istanbul. Espaces de jeux, cinémas, restaurants et des centaines de magasins, tout autour du centre-ville, offrent des options illimitées pour tous vos besoins. Fin de journée, retour à l\'hôtel et soirée libre.' },
            { day: 5, title: 'Jour 5 : [Journée libre]', description: 'Petit déjeuner à l\'hôtel, journée libre. Cependant, plusieurs excursions sont disponibles en extra : une journée à Bursa en téléférique, ou encore à Sapanca et Maşukiye.' },
            { day: 6, title: 'Jour 6 : [Dîner sur le Bosphore]', description: 'Petit déjeuner à l\'hôtel. Journée libre. Le soir, départ pour un dîner et une soirée-spectacle à bord de l\'un des plus beaux bateaux-croisières sur le Bosphore. Soirée et spectacle oriental pendant la navigation sur le somptueux Bosphore. Admirez les palais ottomans et les vues nocturnes sur les côtes européennes et asiatiques. Une soirée de Tanz et Derviche avec des chanteurs et musiciens, animée par des danseuses orientales. Un dîner servi, un buffet gourmand oriental et international, soigneusement préparé pour satisfaire tous les goûts.' },
            { day: 7, title: 'Jour 7 : Retour à Tunis', description: 'Transfert à l\'aéroport selon votre horaire de vol et embarquement à destination de Tunis.' },
        ],
        included: [
            'Billet d\'avion Tunis / Istanbul / Tunis.',
            'Transfert aéroport / hôtel / aéroport.',
            'Hébergement en hôtel 4* avec petit déjeuner à Istanbul (selon la liste des hôtels proposés).',
            'Excursion d\'une journée avec petit déjeuner turc à Ortaköy, vue sur le Bosphore, la forteresse Rumeli Hisarı, visite du Mall et du quartier Venezia Mega Outlet.',
            'Excursion d\'une journée aux Iles des Princes avec déjeuner inclus, journée de croisière et shopping dans les meilleurs centres commerciaux.',
            'Assistance durant le voyage.',
        ],
        excluded: [
            'Le timbre de voyage et l\'assurance.',
            'Les options et excursions facultatives.',
        ],
        pricingTables: [
            {
                dateRange: 'Du 16 Juin 2025 Au 20 Juin 2025',
                hotels: [
                    { hotelName: 'Grand Anatolia Hôtel 3* ou similaire', prices: [ { label: 'Demi Double Personne', price: '1790 DT' }, { label: 'Enfant [2 à -06 ans] partageant avec les parents (sans lit supplémentaire)', price: '890 DT' }, { label: 'Enfant [-06 à -12 ans] partageant avec les parents (avec lit supplémentaire)', price: '1790 DT' } ]},
                    { hotelName: 'Grand Hotel 3* ou similaire', prices: [ { label: 'Demi Double Personne', price: '1890 DT' }, { label: 'Enfant [2 à -06 ans] partageant avec les parents (sans lit supplémentaire)', price: '890 DT' }, { label: 'Enfant [-06 à -12 ans] partageant avec les parents (avec lit supplémentaire)', price: '1890 DT' } ]},
                ]
            },
            {
                dateRange: 'Du 21 Juin 2025 Au 27 Juin 2025',
                hotels: [
                     { hotelName: 'Grand Anatolia Hôtel 3* ou similaire', prices: [ { label: 'Demi Double Personne', price: '1890 DT' }, { label: 'Enfant [2 à -06 ans] partageant avec les parents (sans lit supplémentaire)', price: '890 DT' }, { label: 'Enfant [-06 à -12 ans] partageant avec les parents (avec lit supplémentaire)', price: '1890 DT' } ]},
                     { hotelName: 'Grand Hotel 3* ou similaire', prices: [ { label: 'Demi Double Personne', price: '1950 DT' }, { label: 'Enfant [2 à -06 ans] partageant avec les parents (sans lit supplémentaire)', price: '890 DT' }, { label: 'Enfant [-06 à -12 ans] partageant avec les parents (avec lit supplémentaire)', price: '1740 DT' } ]},
                ]
            }
        ],
        optionalExcursions: [
            { description: 'Excursion d\'une journée à Sapanca et Maşukiye avec déjeuner : 170 DT', price: '170 DT' },
            { description: 'Excursion d\'une journée à Bursa avec déjeuner : 140 DT', price: '140 DT' },
            { description: 'Soirée-spectacle [dîner-croisière] sur le Bosphore avec show oriental, boissons non-alcoolisées et transfert inclus : 150 DT', price: '150 DT' },
        ],
        allDepartureDates: [
            'Du 16 Juin 2025 Au 20 Juin 2025', 'Du 21 Juin 2025 Au 27 Juin 2025', 'Du 28 Juin 2025 Au 04 Juillet 2025',
            'Du 05 Juillet 2025 Au 11 Juillet 2025', 'Du 12 Juillet 2025 Au 18 Juillet 2025', 'Du 19 Juillet 2025 Au 25 Juillet 2025',
            'Du 26 Juillet 2025 Au 01 Aout 2025', 'Du 02 Aout 2025 Au 08 Aout 2025', 'Du 09 Aout 2025 Au 15 Aout 2025',
            'Du 16 Aout 2025 Au 22 Aout 2025', 'Du 23 Aout 2025 Au 29 Aout 2025', 'Du 30 Aout 2025 Au 05 Septembre 2025',
            'Du 06 Septembre 2025 Au 12 Septembre 2025', 'Du 13 Septembre 2025 Au 19 Septembre 2025',
        ],
        rating: 4.9,
        reviews: [],
        practicalInfo: { guideLanguage: 'Français', comfortLevel: 'Élevé' }
    },
];

export const aLaCarteTrips: Stay[] = [
    {
        id: 201,
        title: 'Escapade aux Maldives',
        destination: 'Maldives',
        price: 12500,
        duration: 8,
        description: 'Villas sur pilotis, eaux turquoise et sable blanc à perte de vue.',
        longDescription: 'Évadez-vous dans un paradis tropical avec notre séjour sur mesure aux Maldives. Profitez du luxe d\'une villa privée sur l\'eau, explorez des fonds marins spectaculaires et détendez-vous sur des plages immaculées. Une expérience inoubliable pour les couples et les familles.',
        imageUrl: 'https://picsum.photos/seed/maldives/800/600',
        gallery: [],
        type: 'a-la-carte',
        rating: 4.9,
        reviews: [],
        program: [],
        included: ['Vols internationaux', 'Transferts en hydravion', 'Hébergement en villa sur pilotis', 'Pension complète'],
        excluded: ['Boissons', 'Activités nautiques payantes', 'Dépenses personnelles'],
        practicalInfo: { departureDates: [], guideLanguage: 'Anglais', comfortLevel: 'Luxe' }
    },
    {
        id: 202,
        title: 'Tour Culinaire en Toscane',
        destination: 'Italie',
        price: 6800,
        duration: 7,
        description: 'Dégustez les saveurs de l\'Italie au cœur de paysages vallonnés.',
        longDescription: 'Un voyage pour les gourmands. Parcourez la Toscane, visitez des vignobles renommés, participez à des cours de cuisine avec des chefs locaux et savourez des repas authentiques dans des trattorias traditionnelles. Un itinéraire personnalisable selon vos envies.',
        imageUrl: 'https://picsum.photos/seed/tuscany/800/600',
        gallery: [],
        type: 'a-la-carte',
        rating: 4.8,
        reviews: [],
        program: [],
        included: ['Location de voiture', 'Hébergements de charme', 'Cours de cuisine', 'Dégustations de vin'],
        excluded: ['Vols', 'Essence', 'La plupart des repas'],
        practicalInfo: { departureDates: [], guideLanguage: 'Aucun (autotour)', comfortLevel: 'Élevé' }
    },
    {
        id: 203,
        title: 'Aurores Boréales en Islande',
        destination: 'Islande',
        price: 9300,
        duration: 6,
        description: 'Partez à la chasse du spectacle magique des aurores boréales.',
        longDescription: 'L\'Islande en hiver est un pays de merveilles. Ce voyage à la carte vous emmène à la découverte de cascades gelées, de geysers et du Cercle d\'Or, avec des nuits dédiées à l\'observation des aurores boréales, loin de la pollution lumineuse.',
        imageUrl: 'https://picsum.photos/seed/iceland/800/600',
        gallery: [],
        type: 'a-la-carte',
        rating: 4.7,
        reviews: [],
        program: [],
        included: ['Location 4x4', 'Hébergements', 'Excursion aurores boréales', 'Entrée au Blue Lagoon'],
        excluded: ['Vols', 'Repas', 'Essence'],
        practicalInfo: { departureDates: [], guideLanguage: 'Aucun (autotour)', comfortLevel: 'Moyen' }
    }
];

export const circuitsAndExcursions: Stay[] = [
    {
        id: 301,
        title: 'Circuit Grand Sud Tunisien',
        destination: 'Désert Tunisien',
        price: 850,
        duration: 4,
        description: 'De Matmata à Tozeur, une aventure aux portes du Sahara.',
        longDescription: 'Découvrez les paysages spectaculaires du sud tunisien. Visitez les habitations troglodytes de Matmata, traversez le Chott el-Jérid, explorez les oasis de montagne de Chebika et Tamerza et admirez les décors de Star Wars à Ong Jmal.',
        imageUrl: 'https://picsum.photos/seed/tunisia-desert/800/600',
        gallery: [],
        type: 'circuit',
        rating: 4.8,
        reviews: [],
        program: [],
        included: ['Transport en 4x4', 'Chauffeur/guide', 'Hébergement', 'Pension complète'],
        excluded: ['Boissons', 'Pourboires'],
        practicalInfo: { departureDates: [], guideLanguage: 'Français', comfortLevel: 'Moyen' }
    },
    {
        id: 302,
        title: 'Excursion Dougga & Bulla Regia',
        destination: 'Nord-Ouest Tunisien',
        price: 250,
        duration: 1,
        description: 'Une journée immersive dans le patrimoine romain de la Tunisie.',
        longDescription: 'Explorez deux des sites archéologiques les plus impressionnants de Tunisie. Admirez le Capitole de Dougga, classé au patrimoine mondial de l\'UNESCO, et découvrez les villas souterraines uniques de Bulla Regia.',
        imageUrl: 'https://picsum.photos/seed/dougga/800/600',
        gallery: [],
        type: 'circuit',
        rating: 4.7,
        reviews: [],
        program: [],
        included: ['Transport climatisé', 'Guide professionnel', 'Déjeuner', 'Entrées aux sites'],
        excluded: ['Boissons'],
        practicalInfo: { departureDates: [], guideLanguage: 'Français, Anglais', comfortLevel: 'Bon' }
    },
    {
        id: 303,
        title: 'Triangle d\'Or (Kairouan, El Jem, Sousse)',
        destination: 'Sahel, Tunisie',
        price: 450,
        duration: 2,
        description: 'Un voyage culturel au cœur de l\'histoire tunisienne.',
        longDescription: 'Ce circuit de deux jours vous fait découvrir trois joyaux de l\'UNESCO : la Grande Mosquée de Kairouan, l\'amphithéâtre romain d\'El Jem, et la médina de Sousse. Une plongée fascinante dans le riche passé du pays.',
        imageUrl: 'https://picsum.photos/seed/eljem/800/600',
        gallery: [],
        type: 'circuit',
        rating: 4.9,
        reviews: [],
        program: [],
        included: ['Transport', 'Guide', 'Hébergement 1 nuit', 'Demi-pension'],
        excluded: ['Déjeuners', 'Entrées aux sites'],
        practicalInfo: { departureDates: [], guideLanguage: 'Français', comfortLevel: 'Bon' }
    },
    {
        id: 304,
        title: 'Désert et Oasis de Montagne',
        destination: 'Tozeur',
        price: 900,
        duration: 3,
        description: 'Explorez les oasis luxuriantes et les vastes étendues désertiques.',
        longDescription: 'Au départ de Tozeur, ce circuit vous mène à travers des paysages à couper le souffle, des oasis de Chebika, Tamerza et Mides aux décors de Star Wars, en passant par une traversée du Chott el-Jérid.',
        imageUrl: 'https://picsum.photos/seed/chebika/800/600',
        gallery: [],
        type: 'circuit',
        rating: 4.8,
        reviews: [],
        program: [],
        included: ['Transport 4x4', 'Hébergement en demi-pension', 'Guide'],
        excluded: ['Déjeuners', 'Boissons'],
        practicalInfo: { departureDates: [], guideLanguage: 'Français', comfortLevel: 'Moyen' }
    }
];

export const omraPackages: Stay[] = [
    {
        id: 401,
        title: 'Omra Économique',
        destination: 'Mecque & Médine',
        price: 4300,
        duration: 14,
        description: 'Un forfait économique pour accomplir votre Omra en toute sérénité.',
        longDescription: 'Ce forfait est conçu pour offrir une expérience spirituelle complète à un prix abordable. Il comprend l\'hébergement dans des hôtels confortables à La Mecque et à Médine, les vols, les transferts et les visites des sites sacrés (Ziyarates), vous permettant de vous concentrer pleinement sur votre dévotion.',
        imageUrl: 'https://picsum.photos/seed/kaaba-main/800/600',
        gallery: [
            'https://picsum.photos/seed/kaaba-gallery1/1200/800',
            'https://picsum.photos/seed/medina-gallery1/1200/800',
            'https://picsum.photos/seed/hotel-room1/1200/800',
            'https://picsum.photos/seed/hotel-room2/1200/800',
        ],
        type: 'omra',
        rating: 4.8,
        reviews: [],
        program: [
            { day: 1, title: 'Jour 1 : Tunis -> Médine', description: 'Départ de l\'aéroport de Tunis-Carthage vers Médine. Arrivée, accueil et transfert à votre hôtel. Installation et temps libre pour la prière à la Mosquée du Prophète.'},
            { day: 2, title: 'Jour 2 : Ziyarates à Médine', description: 'Après le petit-déjeuner, visite des sites historiques de Médine : la Mosquée de Quba, le Mont Uhud, la Mosquée des Deux Qiblas. Retour à l\'hôtel.'},
            { day: 3, title: 'Jour 3-7 : Dévotion à Médine', description: 'Journées libres consacrées à la prière et à la dévotion personnelle à la Mosquée du Prophète (Masjid an-Nabawi).'},
            { day: 8, title: 'Jour 8 : Médine -> La Mecque', description: 'Après le déjeuner, départ en bus climatisé vers La Mecque. Entrée en état de sacralisation (Ihram) au Miqat. Arrivée à La Mecque, installation à l\'hôtel puis accomplissement des rites de la Omra (Tawaf, Sa\'i).'},
            { day: 9, title: 'Jour 9 : Ziyarates à La Mecque', description: 'Visite des sites sacrés de La Mecque : le Mont Thour, Mina, Arafat, Muzdalifah. Retour à l\'hôtel.'},
            { day: 10, title: 'Jour 10-13 : Dévotion à La Mecque', description: 'Journées libres consacrées à la prière et à la dévotion personnelle à la Mosquée al-Haram.'},
            { day: 14, title: 'Jour 14 : La Mecque -> Tunis', description: 'Après le Tawaf d\'adieu, transfert à l\'aéroport de Djeddah pour le vol de retour vers Tunis.'}
        ],
        included: [
            'Billet d\'avion Tunis-Médine / Djeddah-Tunis sur Tunisair.',
            'Visa pour l\'Arabie Saoudite.',
            'Hébergement 7 nuits à Médine dans un hôtel proche du Haram.',
            'Hébergement 6 nuits à La Mecque dans un hôtel proche du Haram.',
            'Transferts internes en bus climatisés.',
            'Visites guidées (Ziyarates) à La Mecque et à Médine.',
            'Assistance religieuse et logistique par nos guides expérimentés.',
            'Assurance santé de base en Arabie Saoudite.'
        ],
        excluded: [
            'Timbre de voyage tunisien.',
            'Dépenses personnelles et pourboires.',
            'Repas non mentionnés dans le programme.',
            'Excédent de bagages.'
        ],
        notes: [
            'L\'ordre du séjour (Médine puis La Mecque ou inversement) peut changer en fonction des disponibilités des vols.',
            'Franchise bagage autorisée : deux valises de 23 kg chacune (total 46 kg) et un bagage à main de 7 kg.',
            'Les documents de voyage (passeport, photos) doivent être soumis au moins 3 semaines avant le départ.'
        ],
        tariffs: [
            { departure: 'du 26/09/2025 au 10/10/2025', pack: 'Hôtel Al-Madinah Arjuan Al-Dhahabi + Hôtel Makkah Al-Otaibi' },
            { departure: 'du 03/10/2025 au 17/10/2025', pack: 'Hôtel Al-Madinah Arjuan Al-Dhahabi + Hôtel Makkah Al-Otaibi' },
            { departure: 'du 18/10/2025 au 01/11/2025', pack: 'Hôtel Al-Madinah Arjuan Al-Dhahabi + Hôtel Makkah Al-Otaibi' },
            { departure: 'du 10/11/2025 au 24/11/2025', pack: 'Hôtel Al-Madinah Arjuan Al-Dhahabi + Hôtel Makkah Al-Otaibi' }
        ],
        hotelsInfo: [
            { name: 'Fendek İsaar El Menaar', location: 'Makkah', description: 'L\'hôtel est situé à environ 700 à 850 mètres de la mosquée Al-Haram, dans la rue Ibrahim Al-Khalil, ce qui équivaut à 7 à 10 minutes de marche. Il propose des chambres confortables et des services adaptés aux pèlerins. Il se distingue par son emplacement et la possibilité d\'un accès rapide à la mosquée.', imageUrl: 'https://picsum.photos/seed/makkah-hotel1/800/600' },
            { name: 'Fendek Medine Ercüvan El Zehebi', location: 'Médine', description: 'Situé au cœur de Médine, à seulement 3 minutes de marche de la mosquée du Prophète, il propose des chambres climatisées avec une connexion Wi-Fi gratuite. Il se distingue par un service de réception 24h/24 et un emplacement idéal pour les pèlerins et les visiteurs.', imageUrl: 'https://picsum.photos/seed/medina-hotel1/800/600' }
        ],
        roomPricing: [
            { roomType: 'Adulte en chambre double', price: '5500.000 DT' },
            { roomType: 'Adulte en chambre triple', price: '5200.000 DT' },
            { roomType: 'Adulte en chambre quadruple', price: '4390.000 DT' },
            { roomType: 'Tarif bébé', price: 'sur demande' },
        ],
        carnetDeVoyage: [
             { name: 'Fendek Jawharat Al Talib', location: 'Médine', description: 'L\'hôtel Jawharat Al Talib est situé en face de la mosquée du Prophète, à seulement 150 mètres. L\'hôtel se distingue par ses chambres confortables et ses divers restaurants et boutiques à proximité de la mosquée, ce qui en fait l\'un des meilleurs choix d\'hébergement près de la mosquée sacrée du Prophète.', imageUrl: 'https://picsum.photos/seed/medina-hotel-carnet/800/600' }
        ],
        practicalInfo: { guideLanguage: 'Arabe, Français', comfortLevel: 'Économique' }
    },
    {
        id: 402,
        title: 'Omra Confort - Mawlid',
        destination: 'Mecque & Médine',
        price: 4800,
        duration: 12,
        description: 'Célébrez la naissance du Prophète sur les terres saintes.',
        longDescription: 'Vivez la ferveur spirituelle du Mawlid An-Nabawi dans les villes saintes. Ce forfait équilibré offre un excellent rapport qualité-prix avec des hôtels 4 étoiles bien situés, vous permettant de maximiser votre temps de prière et de recueillement durant cette période bénie.',
        imageUrl: 'https://picsum.photos/seed/medina-mawlid/800/600',
        gallery: [
            'https://picsum.photos/seed/mawlid1/1200/800',
            'https://picsum.photos/seed/mawlid2/1200/800',
            'https://picsum.photos/seed/mawlid3/1200/800',
        ],
        type: 'omra',
        rating: 4.7,
        reviews: [],
        program: [
            { day: 1, title: 'Tunis -> Djeddah -> La Mecque', description: 'Rassemblement à l\'aéroport et vol vers Djeddah. Accueil, transfert à La Mecque et installation à l\'hôtel.' },
            { day: 2, title: 'Accomplissement de la Omra', description: 'Accompagnés par notre guide, accomplissement des rites de la Omra (Tawaf et Sa\'i).' },
            { day: 3, title: 'Ziyarates à La Mecque', description: 'Visite guidée des lieux saints : Ghar Hira, Ghar Thawr, Mina, Muzdalifah et Arafat.' },
            { day: 4, title: 'Journée libre à La Mecque', description: 'Journée dédiée à la prière et aux actes d\'adoration personnels au sein du Masjid Al Haram.' },
            { day: 5, title: 'La Mecque -> Médine', description: 'Départ en bus confortable vers Médine, la ville illuminée. Installation à votre hôtel près du Masjid an-Nabawi.' },
            { day: 6, title: 'Immersion à Médine', description: 'Première prière du Vendredi à la mosquée du Prophète. Atmosphère spirituelle intense.' },
            { day: 7, title: 'Ziyarates à Médine', description: 'Visite de la mosquée de Quba, du mont Uhud et du cimetière Baqi\'.' },
            { day: 8, title: 'Célébrations du Mawlid', description: 'Journée spéciale pour le Mawlid. Profitez de l\'atmosphère unique, des prières et des célébrations dans la ville du Prophète (PSSL).' },
            { day: 9, title: 'Journée libre à Médine', description: 'Journée libre pour le shopping, la prière et la méditation.' },
            { day: 10, title: 'Dernier jour à Médine', description: 'Profitez de vos derniers moments de quiétude près du tombeau du Prophète (PSSL).' },
            { day: 11, title: 'Médine -> Tunis', description: 'Prières d\'adieu et transfert vers l\'aéroport de Médine pour le vol retour.' },
            { day: 12, title: 'Arrivée à Tunis', description: 'Arrivée à l\'aéroport de Tunis-Carthage avec des souvenirs spirituels inoubliables.' }
        ],
        included: ['Vols internationaux Tunisair', 'Visa pour l\'Arabie Saoudite', 'Hébergement 5 nuits à La Mecque en hôtel 4*', 'Hébergement 6 nuits à Médine en hôtel 4*', 'Tous les transferts en bus climatisé', 'Visites (Ziyarates) avec guide', 'Assistance logistique et religieuse'],
        excluded: ['Timbre de voyage', 'Repas non inclus', 'Dépenses personnelles'],
        notes: ['Le programme peut être sujet à des modifications mineures.', 'Assurez-vous que votre passeport est valide au moins 6 mois après la date de retour.'],
        tariffs: [{ departure: 'du 05/10/2025 au 16/10/2025', pack: 'Hôtel 4* Mawlid Special' }],
        hotelsInfo: [
            { name: 'Al Kiswah Towers Hotel', location: 'Makkah', description: 'Hôtel 4 étoiles moderne situé à environ 900 mètres du Haram. Un service de navette gratuit est disponible 24h/24 pour faciliter vos déplacements vers la mosquée.', imageUrl: 'https://picsum.photos/seed/makkah-hotel2/800/600' },
            { name: 'Saja Al Madinah', location: 'Médine', description: 'Hôtel 4 étoiles idéalement situé à quelques pas de la porte des femmes du Masjid an-Nabawi (environ 500m), offrant confort et commodité.', imageUrl: 'https://picsum.photos/seed/medina-hotel2/800/600' }
        ],
        roomPricing: [
            { roomType: 'Adulte en chambre double', price: '5400.000 DT' },
            { roomType: 'Adulte en chambre triple', price: '5100.000 DT' },
            { roomType: 'Adulte en chambre quadruple', price: '4800.000 DT' }
        ],
        practicalInfo: { guideLanguage: 'Arabe', comfortLevel: 'Bon' }
    },
    {
        id: 403,
        title: 'Omra Prestige Fin d\'Année',
        destination: 'Mecque & Médine',
        price: 5300,
        duration: 10,
        description: 'Commencez la nouvelle année par un voyage spirituel.',
        longDescription: 'Profitez des vacances de fin d\'année pour accomplir votre Omra dans des conditions de confort optimales. Un séjour de 10 jours en hôtels 5 étoiles pour vous ressourcer et vous rapprocher de votre foi dans la sérénité des lieux saints, et commencer la nouvelle année de la plus belle des manières.',
        imageUrl: 'https://picsum.photos/seed/kaaba-night/800/600',
        gallery: [
            'https://picsum.photos/seed/newyear1/1200/800',
            'https://picsum.photos/seed/newyear2/1200/800',
            'https://picsum.photos/seed/newyear3/1200/800',
        ],
        type: 'omra',
        rating: 4.8,
        reviews: [],
        program: [
            { day: 1, title: 'Départ de Tunis vers Médine', description: 'Vol à destination de Médine. Arrivée, accueil par notre équipe et installation dans votre hôtel 5 étoiles.' },
            { day: 2, title: 'Ziyarates à Médine', description: 'Visite guidée des sites emblématiques de Médine, incluant la mosquée de Quba et le mont Uhud.' },
            { day: 3, title: 'Journée libre à Médine', description: 'Journée consacrée à la prière et à la méditation dans la Mosquée du Prophète.' },
            { day: 4, title: 'Médine -> La Mecque', description: 'Départ en après-midi vers La Mecque en TGV (Haramain High Speed Railway) pour un trajet rapide et confortable. Arrivée et installation à votre hôtel 5 étoiles face au Haram.' },
            { day: 5, title: 'Accomplissement de la Omra', description: 'Accomplissement des rites de la Omra (Tawaf, Sa\'i) avec notre guide spirituel.' },
            { day: 6, title: 'Ziyarates à La Mecque', description: 'Visite des lieux historiques de La Mecque pour enrichir votre connaissance spirituelle.' },
            { day: 7, title: 'Dévotion à La Mecque', description: 'Journée libre pour vous adonner à vos prières et actes d\'adoration personnels.' },
            { day: 8, title: 'Dernière prière du Vendredi de l\'année', description: 'Vivez l\'expérience unique de la prière du Joumou\'a à la Grande Mosquée.' },
            { day: 9, title: 'Préparation au départ', description: 'Profitez de vos derniers instants à La Mecque. Tawaf d\'adieu.' },
            { day: 10, title: 'Retour à Tunis', description: 'Transfert à l\'aéroport de Djeddah et vol retour vers Tunis.' }
        ],
        included: [
            'Vols internationaux sur une compagnie régulière',
            'Visa pour l\'Arabie Saoudite',
            'Hébergement 4 nuits à Médine en hôtel 5* avec petit-déjeuner',
            'Hébergement 5 nuits à La Mecque en hôtel 5* avec petit-déjeuner',
            'Billet de TGV Médine-Mecque',
            'Tous les transferts aéroport-hôtel en véhicule privé',
            'Visites (Ziyarates) guidées',
            'Assistance complète 24h/24'
        ],
        excluded: [
            'Timbre de voyage',
            'Déjeuners et dîners',
            'Dépenses personnelles'
        ],
        notes: ['Ce forfait de fin d\'année est très demandé, la réservation anticipée est fortement recommandée.', 'Les hôtels sont situés à quelques mètres seulement des mosquées saintes.'],
        tariffs: [{ departure: 'du 22/12/2025 au 31/12/2025', pack: 'Hôtels 5* Face aux Harams' }],
        hotelsInfo: [
            { name: 'Swissôtel Al Maqam Makkah', location: 'Makkah', description: 'Hôtel 5 étoiles faisant partie du complexe Abraj Al Bait, offrant un accès direct au Masjid Al Haram et des vues imprenables sur la Kaaba pour certaines chambres.', imageUrl: 'https://picsum.photos/seed/makkah-hotel3/800/600' },
            { name: 'Dar Al Hijra InterContinental', location: 'Médine', description: 'Hôtel 5 étoiles de luxe réputé pour son service exceptionnel et sa proximité immédiate avec la Mosquée du Prophète, à quelques minutes de marche.', imageUrl: 'https://picsum.photos/seed/medina-hotel3/800/600' }
        ],
        roomPricing: [
            { roomType: 'Adulte en chambre double', price: '5950.000 DT' },
            { roomType: 'Adulte en chambre triple', price: '5650.000 DT' },
            { roomType: 'Adulte en chambre quadruple', price: '5300.000 DT' }
        ],
        practicalInfo: { guideLanguage: 'Arabe, Français', comfortLevel: 'Élevé' }
    }
];

export const wellnessStays: Stay[] = [
    {
        id: 601,
        title: 'Séjour Thalasso & Spa à Djerba',
        destination: 'Djerba',
        price: 1800,
        duration: 5,
        description: 'Une cure de jouvence sur l\'île des rêves, entre mer et bien-être.',
        longDescription: 'Rechargez vos batteries avec ce séjour thalasso complet. Profitez des bienfaits de l\'eau de mer, des enveloppements d\'algues et de massages relaxants dans un cadre idyllique. Un programme sur mesure pour une détente absolue.',
        imageUrl: 'https://picsum.photos/seed/djerba-spa/800/600',
        gallery: [],
        type: 'bien-etre',
        rating: 4.8,
        reviews: [],
        program: [],
        included: ['Hébergement en hôtel 4*', 'Cure thalasso 3 jours', 'Demi-pension'],
        excluded: ['Vols', 'Soins supplémentaires'],
        practicalInfo: { departureDates: [], guideLanguage: '', comfortLevel: 'Élevé' }
    },
    {
        id: 602,
        title: 'Retraite Yoga & Méditation à Tabarka',
        destination: 'Tabarka',
        price: 2100,
        duration: 4,
        description: 'Reconnectez corps et esprit face aux paysages verdoyants de Tabarka.',
        longDescription: 'Une pause pour vous recentrer. Ce séjour combine séances de yoga quotidiennes, ateliers de méditation guidée, randonnées en nature et une alimentation saine et végétarienne. Idéal pour déconnecter du stress quotidien.',
        imageUrl: 'https://picsum.photos/seed/tabarka-yoga/800/600',
        gallery: [],
        type: 'bien-etre',
        rating: 4.9,
        reviews: [],
        program: [],
        included: ['Hébergement en éco-lodge', 'Pension complète végétarienne', 'Toutes les activités yoga/méditation'],
        excluded: ['Transport', 'Massages optionnels'],
        practicalInfo: { departureDates: [], guideLanguage: 'Français', comfortLevel: 'Moyen' }
    }
];

export const hotelSelection: Stay[] = [
    {
        id: 104,
        title: 'La Badira - Adult Only',
        destination: 'Hammamet',
        price: 750,
        duration: 1,
        description: 'Un havre de paix et de luxe réservé aux adultes.',
        longDescription: 'Membre des "Leading Hotels of the World", La Badira offre une expérience raffinée avec ses piscines à débordement, son spa Clarins et ses vues imprenables sur la Méditerranée.',
        imageUrl: 'https://picsum.photos/seed/badira/800/600',
        gallery: [],
        type: 'hotel',
        rating: 4.9,
        reviews: [],
        program: [],
        included: [],
        excluded: [],
        practicalInfo: { departureDates: [], guideLanguage: '', comfortLevel: 'Luxe' }
    },
    {
        id: 105,
        title: 'Dar El Jeld Hotel & Spa',
        destination: 'Tunis',
        price: 900,
        duration: 1,
        description: 'L\'élégance d\'une demeure historique au cœur de la Médina.',
        longDescription: 'Ce boutique-hôtel de luxe est un joyau architectural offrant des suites somptueuses, un spa d\'exception et une gastronomie renommée, à quelques pas des souks de Tunis.',
        imageUrl: 'https://picsum.photos/seed/dar-el-jeld/800/600',
        gallery: [],
        type: 'hotel',
        rating: 4.9,
        reviews: [],
        program: [],
        included: [],
        excluded: [],
        practicalInfo: { departureDates: [], guideLanguage: '', comfortLevel: 'Luxe' }
    },
    {
        id: 106,
        title: 'Anantara Tozeur Resort',
        destination: 'Tozeur',
        price: 1100,
        duration: 1,
        description: 'Un luxe saharien aux portes du désert.',
        longDescription: 'Surplombant le Chott el-Jérid, ce resort offre une oasis de luxe avec ses villas avec piscine privée, ses restaurants gastronomiques et ses expériences uniques dans le désert.',
        imageUrl: 'https://picsum.photos/seed/anantara-tozeur/800/600',
        gallery: [],
        type: 'hotel',
        rating: 4.8,
        reviews: [],
        program: [],
        included: [],
        excluded: [],
        practicalInfo: { departureDates: [], guideLanguage: '', comfortLevel: 'Luxe' }
    },
    {
        id: 107,
        title: 'Four Seasons Hotel Tunis',
        destination: 'Gammarth',
        price: 1300,
        duration: 1,
        description: 'Le summum du luxe et du service sur la côte de Gammarth.',
        longDescription: 'Avec son architecture inspirée de la tradition tunisienne, ses jardins luxuriants et son spa romain, le Four Seasons Tunis offre une expérience hôtelière incomparable avec vue sur la mer.',
        imageUrl: 'https://picsum.photos/seed/fs-tunis/800/600',
        gallery: [],
        type: 'hotel',
        rating: 5,
        reviews: [],
        program: [],
        included: [],
        excluded: [],
        practicalInfo: { departureDates: [], guideLanguage: '', comfortLevel: 'Luxe' }
    }
];

export const moreTunisianHotels: Stay[] = [
    {
        id: 108,
        title: 'Hasdrubal Prestige Thalassa & Spa Djerba',
        destination: 'Djerba',
        price: 850,
        duration: 1,
        description: 'Luxe et sérénité dans un palais des Mille et Une Nuits à Djerba.',
        longDescription: 'Situé sur la plage de Sidi Mehrez, l\'Hasdrubal Prestige est un hôtel 5 étoiles offrant un luxe inégalé. Il dispose de suites spacieuses, d\'un centre de thalassothérapie de 3 200 m², de plusieurs piscines dont une d\'eau de mer, et de restaurants gastronomiques pour une évasion totale.',
        imageUrl: 'https://picsum.photos/seed/hasdrubal-djerba/800/600',
        gallery: [
            'https://picsum.photos/seed/hasdrubal-djerba1/1200/800',
            'https://picsum.photos/seed/hasdrubal-djerba2/1200/800',
            'https://picsum.photos/seed/hasdrubal-djerba3/1200/800',
        ],
        type: 'hotel',
        rating: 4.9,
        reviews: [{ id: 1081, author: 'Voyageur Exigeant', rating: 5, comment: 'Le meilleur hôtel de Djerba, sans conteste. Le service est parfait.' }],
        specialOffer: 'Cure Thalasso "Sérénité" offerte pour tout séjour de 5 nuits et plus.',
        mainAmenities: ['Spa', 'Piscine', 'Plage', 'Restaurant', 'Wi-Fi Gratuit'],
        amenities: ['Spa', 'Piscine intérieure', 'Piscine extérieure', 'Plage privée', 'Restaurants', 'Bars', 'Wi-Fi gratuit', 'Centre de fitness', 'Court de tennis', 'Parking gratuit'],
        ratingBreakdown: { 'Qualité du service': 99, 'Propreté': 98, 'Confort': 97, 'Restauration': 95, 'Rapport Qualité/prix': 90 },
        location: { address: 'Zone Touristique, BP 120, 4180 Midoun, Djerba', lat: 33.864, lng: 11.036 },
        program: [], included: [], excluded: [], practicalInfo: { departureDates: [], guideLanguage: '', comfortLevel: 'Luxe' }
    },
    {
        id: 109,
        title: 'The Mouradi Palace',
        destination: 'Sousse',
        price: 380,
        originalPrice: 520,
        duration: 1,
        description: 'Un séjour animé au cœur de Port El Kantaoui.',
        longDescription: 'Situé face à un magnifique parcours de golf et à proximité du port de plaisance d\'El Kantaoui, le Mouradi Palace est idéal pour des vacances actives. L\'hôtel propose de nombreuses activités, des piscines, un accès direct à la plage et des animations pour toute la famille.',
        imageUrl: 'https://picsum.photos/seed/mouradi-palace/800/600',
        gallery: [
            'https://picsum.photos/seed/mouradi-palace1/1200/800',
            'https://picsum.photos/seed/mouradi-palace2/1200/800',
        ],
        type: 'promo',
        rating: 4.5,
        reviews: [{ id: 1091, author: 'Famille Martin', rating: 4, comment: 'Très bon hôtel familial, beaucoup d\'animations.' }],
        mainAmenities: ['Piscine', 'Plage', 'Animation', 'Restaurant', 'Club Enfants'],
        amenities: ['Piscines', 'Plage privée', 'Restaurants à thème', 'Bars', 'Club pour enfants', 'Discothèque', 'Centre de fitness', 'Spa', 'Sports nautiques'],
        ratingBreakdown: { 'Activités': 92, 'Rapport Qualité/prix': 88, 'Restauration': 85, 'Propreté': 86 },
        location: { address: 'Zone Touristique El Kantaoui, 4089 Sousse', lat: 35.893, lng: 10.596 },
        program: [], included: [], excluded: [], practicalInfo: { departureDates: [], guideLanguage: '', comfortLevel: 'Bon' }
    },
    {
        id: 110,
        title: 'Dar Hi Nefta',
        destination: 'Nefta',
        price: 620,
        duration: 1,
        description: 'Une expérience unique entre design contemporain et oasis saharienne.',
        longDescription: 'Conçu par Matali Crasset, Dar Hi Nefta est une maison d\'hôtes écologique et design offrant une expérience immersive dans le désert. Profitez de ses vues sur la palmeraie, de sa source d\'eau chaude naturelle, de sa cuisine bio et de ses excursions uniques dans le Sahara.',
        imageUrl: 'https://picsum.photos/seed/dar-hi/800/600',
        gallery: [
            'https://picsum.photos/seed/dar-hi1/1200/800',
            'https://picsum.photos/seed/dar-hi2/1200/800',
            'https://picsum.photos/seed/dar-hi3/1200/800',
        ],
        type: 'hotel',
        rating: 4.7,
        reviews: [{ id: 1101, author: 'Aventurier Moderne', rating: 5, comment: 'Inoubliable. Un lieu hors du temps, parfait pour se ressourcer.' }],
        mainAmenities: ['Piscine thermale', 'Spa', 'Restaurant', 'Wi-Fi Gratuit', 'Excursions'],
        amenities: ['Piscine d\'eau thermale', 'Hammam', 'Spa', 'Restaurant bio', 'Cours de cuisine', 'Excursions dans le désert', 'Yoga'],
        ratingBreakdown: { 'Expérience unique': 100, 'Design': 98, 'Restauration': 94, 'Service': 95 },
        location: { address: 'Quartier Ezzaouia, 2240 Nefta', lat: 33.871, lng: 7.883 },
        program: [], included: [], excluded: [], practicalInfo: { departureDates: [], guideLanguage: '', comfortLevel: 'Élevé' }
    },
    {
        id: 111,
        title: 'TUI BLUE Palm Beach Palace Djerba',
        destination: 'Djerba',
        price: 550,
        duration: 1,
        description: 'Élégance et détente pour adultes au bord d\'une plage de sable fin.',
        longDescription: 'Cet hôtel 5 étoiles réservé aux adultes est un havre de paix. Avec son architecture arabo-andalouse, ses jardins luxuriants et son accès direct à une superbe plage, le TUI BLUE Palm Beach Palace est parfait pour des vacances relaxantes en couple ou entre amis.',
        imageUrl: 'https://picsum.photos/seed/tui-djerba/800/600',
        gallery: [
            'https://picsum.photos/seed/tui-djerba1/1200/800',
            'https://picsum.photos/seed/tui-djerba2/1200/800',
        ],
        type: 'hotel',
        rating: 4.6,
        reviews: [{ id: 1111, author: 'Couple en vacances', rating: 5, comment: 'Magnifique hôtel, très calme et reposant. Idéal pour les couples.' }],
        specialOffer: 'Adults Only (+16 ans)',
        mainAmenities: ['Piscine', 'Plage', 'Spa', 'Restaurant', 'Wi-Fi Gratuit'],
        amenities: ['Piscine extérieure', 'Piscine intérieure', 'Plage privée', 'Spa', 'Centre de fitness', 'Restaurants', 'Bars', 'Wi-Fi gratuit'],
        ratingBreakdown: { 'Tranquillité': 98, 'Propreté': 95, 'Restauration': 90, 'Emplacement': 94 },
        location: { address: 'Zone Touristique, Midoun, 4116 Djerba', lat: 33.834, lng: 11.045 },
        program: [], included: [], excluded: [], practicalInfo: { departureDates: [], guideLanguage: '', comfortLevel: 'Élevé' }
    },
    {
        id: 112,
        title: 'Golden Tulip Taj Sultan Resort',
        destination: 'Hammamet',
        price: 410,
        originalPrice: 550,
        duration: 1,
        description: 'Resort familial avec une atmosphère conviviale et un accès direct à la plage.',
        longDescription: 'Le Golden Tulip Taj Sultan Resort combine confort moderne et charme tunisien. Situé à Yasmine Hammamet, il offre de vastes piscines, un large choix de restaurants et de bars, un mini-club pour les enfants et un programme d\'animation varié pour un séjour réussi en famille.',
        imageUrl: 'https://picsum.photos/seed/taj-sultan/800/600',
        gallery: [
            'https://picsum.photos/seed/taj-sultan1/1200/800',
            'https://picsum.photos/seed/taj-sultan2/1200/800',
        ],
        type: 'promo',
        rating: 4.4,
        reviews: [{ id: 1121, author: 'Laura et sa famille', rating: 4, comment: 'Bonnes vacances, les enfants ont adoré la piscine et le mini-club.' }],
        mainAmenities: ['Piscine', 'Plage', 'Club Enfants', 'Restaurant', 'Animation'],
        amenities: ['Piscine extérieure', 'Piscine pour enfants', 'Piscine intérieure', 'Plage privée', 'Spa', 'Mini-club', 'Restaurants', 'Bars', 'Animation diurne et nocturne'],
        ratingBreakdown: { 'Ambiance familiale': 90, 'Rapport Qualité/prix': 87, 'Activités': 88, 'Restauration': 82 },
        location: { address: 'Yasmine Hammamet, 8050 Hammamet', lat: 36.367, lng: 10.540 },
        program: [], included: [], excluded: [], practicalInfo: { departureDates: [], guideLanguage: '', comfortLevel: 'Bon' }
    }
];

export const airlinePartners: Partner[] = [
  { id: 10, name: 'Tunisair', logoUrl: 'https://www.destinationtunisie.info/wp-content/uploads/2018/12/tunisair_infos.jpg' },
  { id: 11, name: 'Qatar Airways', logoUrl: 'https://logos-world.net/wp-content/uploads/2020/03/Qatar-Airways-Logo.png' },
  { id: 12, name: 'Turkish Airlines', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Turkish_Airlines_logo_%282010-2017%29.svg/2560px-Turkish_Airlines_logo_%282010-2017%29.svg.png' },
  { id: 13, name: 'Royal Air Maroc', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Royal-Air-Maroc-Logo.svg/200px-Royal-Air-Maroc-Logo.svg.png' },
  { id: 14, name: 'Emirates', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emirates_logo.svg/200px-Emirates_logo.svg.png' },
  { id: 15, name: 'Air France', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Air_France_Logo.svg/200px-Air_France_Logo.svg.png' },
];

export const flightFaqs: FAQ[] = [
  {
    question: 'Quels types de vols sont proposés par Traveltodo ?',
    answer: 'Traveltodo propose une variété de vols, y compris des <strong>vols directs</strong> ou des <strong>vols avec escales</strong>, nationaux et internationaux, et ceci avec plus de deux cents <strong>compagnies aériennes</strong>, couvrant une large gamme de destinations à travers le monde.',
  },
  {
    question: 'Comment réserver un vol avec Traveltodo ?',
    answer: 'Pour réserver un vol, utilisez notre moteur de recherche en haut de la page. Entrez vos villes de départ et d\'arrivée, vos dates de voyage, et le nombre de passagers. Cliquez sur "Rechercher Vol" pour voir les options disponibles et suivez les étapes pour finaliser votre réservation.',
  },
  {
    question: 'Puis-je modifier ou annuler ma réservation de vol ?',
    answer: 'Les conditions de modification et d\'annulation dépendent des règles de la compagnie aérienne et du tarif que vous avez choisi. Vous pouvez consulter ces conditions lors de la réservation ou contacter notre service client pour obtenir de l\'aide.',
  },
  {
    question: 'Comment puis-je vérifier l\'état de mon vol ?',
    answer: 'Vous pouvez vérifier l\'état de votre vol directement sur le site de la compagnie aérienne avec votre numéro de réservation ou votre numéro de vol. Nous vous recommandons de le faire 24 heures avant votre départ.',
  },
  {
    question: 'Quelles sont les options de paiement disponibles pour les billets d\'avion ?',
    answer: 'Nous acceptons les principales cartes de crédit (Visa, MasterCard), ainsi que d\'autres méthodes de paiement en ligne sécurisées. Les options disponibles seront affichées lors du processus de paiement.',
  },
  {
    question: 'Puis-je ajouter des services supplémentaires à ma réservation ?',
    answer: 'Oui, selon la compagnie aérienne, vous pouvez souvent ajouter des services supplémentaires comme la sélection de siège, des bagages additionnels ou des repas spéciaux. Ces options sont généralement disponibles lors de la réservation ou via la section "Gérer ma réservation" sur le site de la compagnie.',
  },
  {
    question: 'Comment puis-je trouver les meilleurs tarifs pour mes billets?',
    answer: 'Pour trouver les meilleurs tarifs, nous vous conseillons d\'être flexible sur vos dates de voyage, de réserver à l\'avance et de comparer les différentes options proposées par notre moteur de recherche. S\'inscrire à notre newsletter peut aussi vous donner accès à des offres exclusives.',
  },
  {
    question: 'Que faire en cas de problème avec ma réservation ?',
    answer: 'Si vous rencontrez un problème avec votre réservation, veuillez contacter notre service client immédiatement. Nous sommes disponibles pour vous aider à résoudre tout problème rapidement et efficacement.',
  },
  {
    question: 'Comment contacter le service client de Traveltodo ?',
    answer: 'Vous pouvez nous contacter par téléphone, par email, ou via le formulaire de contact sur notre site. Toutes nos coordonnées sont disponibles sur la page "Contact".',
  },
  {
    question: 'Puis-je réserver un billet d\'avion flexible ?',
    answer: 'Oui, de nombreuses compagnies aériennes proposent des billets flexibles qui permettent des modifications avec peu ou pas de frais. Vous pouvez filtrer les résultats de recherche pour afficher ces options.',
  },
  {
    question: 'Quel est le mois de l\'année où les tarifs des vols sont les plus avantageux ?',
    answer: 'Les tarifs varient considérablement en fonction de la destination et de la période. En général, les périodes creuses (hors vacances scolaires et jours fériés) offrent les tarifs les plus bas. Utiliser notre outil de recherche avec des dates flexibles peut vous aider à trouver les meilleurs prix.',
  },
  {
    question: 'Les vols internationaux avec escale permettent-ils de réduire le coût des billets d\'avion ?',
    answer: 'Oui, souvent les vols avec une ou plusieurs escales sont moins chers que les vols directs. Notre moteur de recherche vous montrera les deux options afin que vous puissiez choisir celle qui correspond le mieux à votre budget et à votre emploi du temps.',
  },
  {
    question: 'Comment trouver les meilleures offres de billets d\'avion sur Traveltodo ?',
    answer: 'Consultez régulièrement notre page d\'offres spéciales, inscrivez-vous à notre newsletter et utilisez notre moteur de recherche avancé pour comparer les prix. Nous travaillons constamment pour vous proposer les tarifs les plus compétitifs du marché.',
  },
];

export const flightResults: Flight[] = [
    {
        id: 1,
        price: 642.915,
        departureLeg: { airline: 'Tunisair', airlineLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tunisair_logo.svg/200px-Tunisair_logo.svg.png', departureAirport: 'TUN', departureTime: '06:40', arrivalAirport: 'ORY', arrivalTime: '09:05', duration: '02h25m', stops: 0 },
        returnLeg: { airline: 'Tunisair', airlineLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tunisair_logo.svg/200px-Tunisair_logo.svg.png', departureAirport: 'ORY', departureTime: '17:00', arrivalAirport: 'TUN', arrivalTime: '19:25', duration: '02h25m', stops: 0 },
        conditions: ['Condition 1', 'Condition 2'],
        cabinClass: 'economy'
    },
    {
        id: 2,
        price: 744.885,
        departureLeg: { airline: 'Tunisair', airlineLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tunisair_logo.svg/200px-Tunisair_logo.svg.png', departureAirport: 'TUN', departureTime: '15:35', arrivalAirport: 'ORY', arrivalTime: '19:00', duration: '02h25m', stops: 0 },
        returnLeg: { airline: 'Tunisair', airlineLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tunisair_logo.svg/200px-Tunisair_logo.svg.png', departureAirport: 'ORY', departureTime: '20:20', arrivalAirport: 'TUN', arrivalTime: '22:45', duration: '02h25m', stops: 0 },
        conditions: [],
        cabinClass: 'economy'
    },
    {
        id: 3,
        price: 1027.105,
        departureLeg: { airline: 'Tunisair Express', airlineLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tunisair_logo.svg/200px-Tunisair_logo.svg.png', departureAirport: 'TUN', departureTime: '17:30', arrivalAirport: 'ORY', arrivalTime: '11:35', duration: '17h05m', stops: 1 },
        returnLeg: { airline: 'Tunisair', airlineLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tunisair_logo.svg/200px-Tunisair_logo.svg.png', departureAirport: 'ORY', departureTime: '17:00', arrivalAirport: 'TUN', arrivalTime: '19:25', duration: '02h25m', stops: 0 },
        conditions: [],
        cabinClass: 'premium'
    },
     {
        id: 4,
        price: 1027.105,
        departureLeg: { airline: 'Tunisair Express', airlineLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tunisair_logo.svg/200px-Tunisair_logo.svg.png', departureAirport: 'TUN', departureTime: '17:30', arrivalAirport: 'ORY', arrivalTime: '11:35', duration: '17h05m', stops: 1 },
        returnLeg: { airline: 'Tunisair', airlineLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tunisair_logo.svg/200px-Tunisair_logo.svg.png', departureAirport: 'ORY', departureTime: '20:20', arrivalAirport: 'TUN', arrivalTime: '22:45', duration: '02h25m', stops: 0 },
        conditions: [],
        cabinClass: 'business'
    },
];

export const articles: Article[] = [];
export const testimonials: Testimonial[] = [
    { id: 1, name: 'Client Satisfait', quote: 'Un service impeccable et un voyage inoubliable. Merci VoyageÉtoile !', rating: 5 }
];
export const team: TeamMember[] = [
    { id: 1, name: 'Alice Martin', role: 'Fondatrice & CEO', imageUrl: 'https://picsum.photos/seed/alice/400/400' },
    { id: 2, name: 'Marc Dubois', role: 'Expert Destinations', imageUrl: 'https://picsum.photos/seed/marc/400/400' },
    { id: 3, name: 'Chloé Petit', role: 'Responsable Clientèle', imageUrl: 'https://picsum.photos/seed/chloe/400/400' },
    { id: 4, name: 'Lucas Durand', role: 'Guide Aventurier', imageUrl: 'https://picsum.photos/seed/lucas/400/400' }
];
export const partners: Partner[] = [
    { id: 1, name: 'Airline Partner', logoUrl: 'https://picsum.photos/seed/logo1/200/60' },
    { id: 2, name: 'Hotel Group', logoUrl: 'https://picsum.photos/seed/logo2/200/60' },
    { id: 3, name: 'Tour Operator', logoUrl: 'https://picsum.photos/seed/logo3/200/60' },
    { id: 4, name: 'Global Flights', logoUrl: 'https://picsum.photos/seed/logo4/200/60' },
    { id: 5, name: 'Travel Experts', logoUrl: 'https://picsum.photos/seed/logo5/200/60' }
];

// Consolidated list of all stays for easy searching
export const allStays: Stay[] = [
    ...stays,
    ...tunisianHotelPromos,
    ...organizedTrips,
    ...aLaCarteTrips,
    ...circuitsAndExcursions,
    ...omraPackages,
    ...wellnessStays,
    ...hotelSelection,
    ...moreTunisianHotels
];