// Textes en FRANÇAIS. Même structure que es.mjs (langue source).
// Les marqueurs entre accolades, ex. {checkin}, sont remplacés au build : NE PAS les traduire.
// Les chaînes peuvent contenir du HTML simple (<em>, <strong>, <a>, <ul>, <li>, <p>, <br>).

export default {
  code: 'fr',
  locale: 'fr_FR',
  name: 'Français',
  short: 'FR',

  slugs: { guide: 'guide-armenia-quindio', long: 'longs-sejours', legal: 'politiques' },

  seo: {
    siteName: 'Camelot · Hébergement à Armenia, Quindío',
    home: {
      title: 'Camelot | Hôtel au centre d’Armenia, Colombie · Nuit, semaine, mois',
      description: 'Où dormir à Armenia, Quindío ? Chambres privées de style hôtelier avec salle de bains et Wi-Fi en plein centre. Tarifs à la nuit, à la semaine ou au mois.',
    },
    guide: {
      title: 'Que faire à Armenia et dans le Quindío : guide local | Camelot',
      description: 'Guide de la région du café : Valle de Cocora, Salento, Filandia, Parque del Café, PANACA, Jardín Botánico… avec les temps de trajet depuis Armenia.',
    },
    long: {
      title: 'Chambre meublée au mois à Armenia, Quindío | Camelot',
      description: 'Long séjour au centre d’Armenia : chambre privée meublée, charges et Wi-Fi compris, sans garant. Idéal pour le travail, la santé, les études ou le télétravail.',
    },
    legal: {
      title: 'Politiques, confidentialité et règlement intérieur | Camelot Armenia',
      description: 'Politique de confidentialité (loi 1581 de 2012), conditions d’hébergement, annulation, règlement intérieur et prévention de l’ESCNNA chez Camelot, Armenia.',
    },
    notFound: { title: 'Page introuvable | Camelot', description: 'Cette page n’existe pas ou a été déplacée. Revenez à l’accueil de Camelot, hébergement au centre d’Armenia, Quindío, ou consultez notre guide de la région.' },
    keywords: 'hôtel Armenia Colombie, où dormir à Armenia Quindío, hébergement centre Armenia, chambre à la nuit Armenia, chambre meublée au mois Armenia, long séjour Armenia Colombie, hébergement région du café, hôtel Eje Cafetero, logement Quindío Colombie',
  },

  nav: {
    home: 'Accueil',
    stays: 'Séjours',
    rooms: 'Chambres',
    legend: 'Expérience',
    calc: 'Tarifs',
    location: 'Situation',
    guide: 'Guide du Quindío',
    long: 'Longs séjours',
    faq: 'Questions',
    contact: 'Contact',
    book: 'Réserver',
    menu: 'Menu',
    close: 'Fermer',
    skip: 'Aller au contenu',
    langLabel: 'Langue',
    themeLabel: 'Basculer entre mode clair et mode sombre',
    backTop: 'Retour en haut',
    breadcrumbHome: 'Accueil',
  },

  hero: {
    eyebrow: 'Hébergement au centre d’Armenia · Quindío, Colombie',
    title: 'Votre château au <em>cœur de la région du café</em>',
    lead: 'Des chambres privées de style hôtelier pour une nuit, une saison ou plusieurs mois. À quelques rues de la Plaza de Bolívar, avec tout le Quindío à portée de main.',
    ctaPrimary: 'Calculer mon séjour',
    ctaSecondary: 'Voir les chambres',
    chips: ['{rooms} chambres privées', 'Salle de bains privée', 'Wi-Fi', 'Tarifs à la nuit, à la semaine ou au mois'],
    slides: [
      'Vue aérienne de la Plaza de Bolívar, au centre d’Armenia, Quindío',
      'Palmiers à cire dans le Valle de Cocora, Salento, Quindío',
      'Façades colorées de Filandia, Quindío',
    ],
    scroll: 'Découvrir Camelot',
  },

  stays: {
    eyebrow: 'Choisissez votre séjour',
    title: 'Une nuit, une saison <em>ou tout un règne</em>',
    lead: 'La même chambre, trois façons de séjourner. Plus vous restez, plus le tarif est avantageux.',
    items: {
      short: {
        tag: 'Court séjour',
        name: 'Halte du voyageur',
        range: '1 à 6 nuits',
        desc: 'Pour un voyage touristique, un déplacement professionnel ou une étape dans la région du café. Vous arrivez, vous vous reposez et vous partez explorer.',
        points: ['Tarif à la nuit', 'Arrivée organisée par WhatsApp', 'Nos conseils pour parcourir le Quindío'],
      },
      medium: {
        tag: 'Séjour moyen',
        name: 'Une saison à la cour',
        range: '7 à 29 nuits',
        desc: 'Pour un projet, une formation, de longues vacances ou pour découvrir la région sans se presser.',
        points: ['{mediumPct} % de réduction sur le tarif à la nuit', 'Ménage et changement du linge de lit programmés', 'Itinéraire suggéré pour une semaine'],
      },
      long: {
        tag: 'Long séjour',
        name: 'Résidence au royaume',
        range: '30 nuits ou plus',
        desc: 'Votre port d’attache à Armenia : charges comprises, sans garant et avec un accord écrit clair.',
        points: ['Tarif mensuel charges et Wi-Fi compris', 'Sans garant ni cosignataire', 'Facture au nom de votre entreprise'],
      },
    },
    cta: 'Calculer le tarif',
    more: 'Tout sur les longs séjours',
  },

  rooms: {
    eyebrow: 'Les chambres',
    title: 'Choisissez vos <em>quartiers</em>',
    lead: 'Des chambres privées avec salle de bains, linge de lit et serviettes. Dites-nous combien vous êtes : nous vous conseillerons la chambre idéale.',
    from: 'À partir de',
    perNight: 'nuit',
    perMonth: 'mois',
    guests: 'Jusqu’à {n} personnes',
    guest: '1 personne',
    bedDouble: '{n} lit double',
    bedsDouble: '{n} lits doubles',
    bedSingle: '{n} lit simple',
    bedsSingle: '{n} lits simples',
    privateBath: 'Salle de bains privée',
    illustrative: 'Image d’illustration',
    indicative: 'Tarif indicatif',
    ask: 'Demander cette chambre',
    items: {
      escudero: { name: 'Écuyer', type: 'Chambre simple', desc: 'Compacte et paisible, pensée pour celles et ceux qui voyagent seuls, pour le travail ou le plaisir.', alt: 'Chambre simple avec lit double et lampes de chevet' },
      caballero: { name: 'Chevalier', type: 'Chambre double', desc: 'Un lit double et de l’espace pour deux. La préférée des couples et des longs séjours.', alt: 'Chambre double avec grand lit et lumière chaleureuse' },
      hermandad: { name: 'Confrérie', type: 'Chambre triple', desc: 'Un lit double et un lit simple pour des amis, des collègues ou une petite famille.', alt: 'Chambre avec deux lits et table de chevet' },
      mesa: { name: 'Table Ronde', type: 'Chambre familiale', desc: 'Pour toute la famille ou le groupe de voyage : plusieurs lits dans un même espace.', alt: 'Chambre familiale avec plusieurs lits' },
    },
  },

  legend: {
    eyebrow: 'La légende de Camelot',
    title: 'Cinq promesses <em>de la cour</em>',
    lead: 'Nous avons puisé le meilleur de la légende arthurienne pour en faire une hospitalité au parfum de café.',
    items: [
      { key: 'excalibur', name: 'Excalibur', title: 'Arriver, tout simplement', desc: 'Nul besoin de tirer l’épée du rocher : avant votre arrivée, nous vous envoyons par WhatsApp la localisation, les horaires et les instructions pas à pas.' },
      { key: 'grial', name: 'Le Graal', title: 'Café d’origine', desc: 'Le véritable Graal du Quindío se sert dans une tasse. Nous vous indiquons où boire le meilleur café de spécialité près de Camelot.' },
      { key: 'mesa', name: 'Table Ronde', title: 'D’égal à égal', desc: 'Des tarifs clairs, sans petits caractères ni frais surprises. Le montant de notre devis est celui que vous payez.' },
      { key: 'avalon', name: 'Avalon', title: 'Un vrai repos', desc: 'Du linge de lit propre, le calme la nuit et, sur demande, une chambre côté cour, loin du bruit de la rue.' },
      { key: 'merlin', name: 'Merlin', title: 'Un concierge avisé', desc: 'Merlin, notre assistant, répond instantanément en cinq langues, et derrière lui se tient un véritable hôte qui connaît chaque recoin du Quindío.' },
    ],
  },

  amenities: {
    eyebrow: 'Inclus',
    title: 'L’essentiel, <em>rien de superflu</em>',
    items: {
      bath: 'Salle de bains privée',
      wifi: 'Wi-Fi gratuit',
      tv: 'Télévision',
      linen: 'Linge de lit et serviettes',
      hotwater: 'Eau chaude',
      cleaning: 'Ménage de la chambre',
      coffee: 'Café de bienvenue',
      desk: 'Coin bureau',
      laundry: 'Blanchisserie sur demande',
      luggage: 'Bagagerie',
      concierge: 'Guide local et conciergerie',
      invoice: 'Facture électronique',
    },
  },

  calc: {
    eyebrow: 'Calculez votre séjour',
    title: 'Votre tarif <em>en quelques secondes</em>',
    lead: 'Choisissez vos dates et votre chambre. Nous identifions le type de séjour et appliquons la réduction automatiquement.',
    checkin: 'Arrivée',
    checkout: 'Départ',
    guests: 'Voyageurs',
    room: 'Chambre',
    currency: 'Devise',
    nights: '{n} nuits',
    night: '1 nuit',
    tierShort: 'Court séjour',
    tierMedium: 'Séjour moyen',
    tierLong: 'Long séjour',
    base: 'Tarif de base',
    discount: 'Réduction selon la durée',
    direct: 'Réduction réservation directe',
    total: 'Total estimé',
    avg: 'Moyenne par nuit',
    monthly: 'Soit {amount} par mois',
    deposit: 'Acompte de confirmation ({pct} %)',
    depositLong: 'Pour les longs séjours : premier mois et dépôt de garantie remboursable, selon l’accord.',
    approx: 'Montants en {cur} approximatifs ; le paiement se fait en pesos colombiens.',
    indicative: 'Tarif indicatif, sous réserve de disponibilité. Nous vous confirmons le montant final par écrit.',
    send: 'Demander par WhatsApp',
    sendMail: 'Demander par e-mail',
    invalid: 'Choisissez une date de départ postérieure à la date d’arrivée.',
    capacity: 'Capacité maximale de cette chambre : {n}. Nous vous suggérons la chambre {room} ou deux chambres.',
    pickDates: 'Choisissez vos dates pour afficher le tarif.',
    waIntro: 'Bonjour Camelot, je souhaiterais connaître vos disponibilités :',
    waLines: ['Arrivée : {in}', 'Départ : {out} ({nights})', 'Voyageurs : {guests}', 'Chambre : {room}', 'Séjour : {tier}', 'Total estimé sur le site : {total}'],
  },

  longBand: {
    eyebrow: 'Longs séjours',
    title: 'Vous venez à Armenia <em>pour plusieurs mois</em> ?',
    lead: 'Travail, traitement médical, études ou télétravail : vivez au centre d’Armenia avec un tarif mensuel qui comprend les charges, le Wi-Fi et le ménage. Sans garant, sans cosignataire, sans démarches de location.',
    points: ['Charges et Wi-Fi compris', 'Un accord d’hébergement clair et écrit', 'Facture au nom de votre entreprise'],
    cta: 'Voir les longs séjours',
  },

  location: {
    eyebrow: 'Situation',
    title: 'En plein centre, <em>à deux pas de tout</em>',
    lead: 'Camelot se trouve au centre d’Armenia, le quartier commerçant et bancaire de la ville, à quelques rues de la Plaza de Bolívar. C’est d’ici que partent les bus et les taxis vers tout le Quindío.',
    items: [
      { label: 'Plaza de Bolívar et cathédrale', value: '≈ 8 min à pied' },
      { label: 'Calle Real (Carrera 14, piétonne)', value: '≈ 5 min à pied' },
      { label: 'Terminal de Transportes (gare routière)', value: '≈ 10 min en voiture' },
      { label: 'Aéroport international El Edén (AXM)', value: '≈ 25 min en voiture' },
      { label: 'Parque del Café', value: '≈ 30 min en voiture' },
      { label: 'Salento et Valle de Cocora', value: '≈ 55 min en voiture' },
    ],
    mapCta: 'Charger la carte',
    mapNote: 'La carte est fournie par OpenStreetMap et ne se charge qu’à votre demande (nous protégeons votre vie privée).',
    mapTitle: 'Carte du centre d’Armenia, Quindío',
    exact: 'Nous vous envoyons l’adresse exacte dès la confirmation de votre réservation.',
    directions: 'Itinéraire',
  },

  guideTeaser: {
    eyebrow: 'La carte du royaume',
    title: 'Le Quindío <em>tout autour de vous</em>',
    lead: 'Montagnes de café, palmiers à cire et villages colorés, à moins d’une heure de votre chambre.',
    cta: 'Ouvrir le guide complet',
  },

  rules: {
    eyebrow: 'Les règles de la Table Ronde',
    title: 'Un savoir-vivre <em>chevaleresque</em>',
    lead: 'Peu de règles, mais claires, pour que chacun se repose bien.',
    items: [
      'Arrivée à partir de {checkin} et départ jusqu’à {checkout}. Arrivée anticipée ou départ tardif selon disponibilité.',
      'Silence entre {quietFrom} et {quietTo}.',
      'Il est interdit de fumer ou de vapoter dans les chambres.',
      'Enregistrement obligatoire avec une pièce d’identité pour chaque voyageur, comme l’exige la loi colombienne.',
      'Les visites sont annoncées et enregistrées ; fêtes et événements ne sont pas autorisés.',
      'Les mineurs sont toujours accompagnés de leurs parents ou munis d’une autorisation écrite.',
    ],
    cta: 'Lire le règlement et les politiques complètes',
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Ce que l’on <em>nous demande le plus</em>',
    items: [
      { q: 'Où se trouve Camelot ?', a: 'Au centre d’Armenia, dans le Quindío, à quelques rues de la Plaza de Bolívar, de la Calle Real et du quartier des banques. Nous vous envoyons l’adresse exacte et les indications à la confirmation de la réservation.' },
      { q: 'Quelle différence entre court, moyen et long séjour ?', a: 'C’est la même chambre, à un tarif différent : le court séjour (1 à 6 nuits) se paie à la nuit ; le séjour moyen (7 à 29 nuits) bénéficie de {mediumPct} % de réduction ; le long séjour (30 nuits ou plus) profite d’un tarif mensuel charges comprises, avec un accord écrit.' },
      { q: 'À quelle heure sont l’arrivée et le départ ?', a: 'L’arrivée se fait à partir de {checkin} et le départ jusqu’à {checkout}. Si vous arrivez plus tôt ou partez plus tard, écrivez-nous : nous nous adaptons selon les disponibilités.' },
      { q: 'Les chambres ont-elles une salle de bains privée ?', a: 'Oui. Toutes les chambres sont privées, avec leur propre salle de bains, du linge de lit, des serviettes et le Wi-Fi.' },
      { q: 'Le Wi-Fi permet-il de travailler ou d’étudier ?', a: 'Oui, le Wi-Fi est gratuit pour tous les voyageurs. Si votre travail repose sur les visioconférences, demandez-nous la chambre qui capte le mieux.' },
      { q: 'Comment venir depuis l’aéroport ou la gare routière ?', a: 'Depuis l’aéroport international El Edén (AXM), comptez environ 25 minutes en taxi ; depuis la Terminal de Transportes d’Armenia, environ 10 minutes. Nous vous envoyons les indications lors de la réservation.' },
      { q: 'Quels moyens de paiement acceptez-vous ?', a: 'Nous confirmons les moyens disponibles lors de la réservation (virement, paiements numériques et espèces). Les prix sont réglés en pesos colombiens ; nous affichons des montants approximatifs en dollars et en euros à titre indicatif.' },
      { q: 'Émettez-vous des factures ?', a: 'Oui. Demandez-la lors de la réservation en précisant les coordonnées de la personne ou de l’entreprise. Si vous êtes étranger non résident, renseignez-vous sur l’exonération de TVA (IVA) sur l’hébergement prévue par la loi fiscale colombienne.' },
      { q: 'Acceptez-vous les animaux ?', a: 'Contactez-nous avant de réserver. Les chiens d’assistance sont toujours les bienvenus.' },
      { q: 'Disposez-vous d’un parking ?', a: 'Renseignez-vous sur la disponibilité. Le centre compte des parkings publics à quelques rues.' },
      { q: 'Quelle est la politique d’annulation ?', a: 'Courts séjours : sans frais jusqu’à 72 heures avant l’arrivée. Séjours moyens : jusqu’à 7 jours avant. Longs séjours : jusqu’à 14 jours avant. Tous les détails figurent dans nos politiques.' },
      { q: 'Le centre d’Armenia est-il sûr ?', a: 'C’est le quartier le plus animé de la ville, avec commerces, banques et transports. Comme dans tout centre urbain, nous recommandons quelques précautions élémentaires le soir ; nous vous donnerons volontiers nos conseils à votre arrivée.' },
    ],
  },

  contact: {
    eyebrow: 'Contact et réservations',
    title: 'Parlons de <em>votre séjour</em>',
    lead: 'Écrivez-nous : nous vous répondrons avec les disponibilités et le tarif final. Réserver en direct vous garantit toujours le meilleur prix.',
    name: 'Nom',
    email: 'Adresse e-mail',
    phone: 'WhatsApp ou téléphone',
    dates: 'Dates approximatives',
    guests: 'Voyageurs',
    stay: 'Type de séjour',
    message: 'Message',
    messagePh: 'Dites-nous ce dont vous avez besoin : motif du voyage, heure d’arrivée, demandes particulières…',
    consent: 'J’autorise le traitement de mes données afin de répondre à ma demande, conformément à la <a href="{legalUrl}#privacidad">politique de confidentialité</a>.',
    submit: 'Envoyer la demande',
    sending: 'Envoi en cours…',
    success: 'Merci ! Nous avons bien reçu votre demande et vous répondrons très bientôt.',
    error: 'Le formulaire n’a pas pu être envoyé. Essayez par WhatsApp ou par e-mail.',
    required: 'Remplissez les champs obligatoires et acceptez la politique de confidentialité.',
    channelPending: 'Nous activons actuellement nos canaux de réservation. Vous pourrez très bientôt nous écrire ici.',
    whatsapp: 'WhatsApp',
    mail: 'E-mail',
    airbnb: 'Voir sur Airbnb',
    booking: 'Voir sur Booking',
    response: 'Nous vous répondons au plus vite avec les disponibilités et le tarif final.',
  },

  footer: {
    tagline: 'Hébergement au centre d’Armenia, Quindío. Courts, moyens et longs séjours.',
    explore: 'Explorer',
    legalTitle: 'Politiques',
    contactTitle: 'Contact',
    rnt: 'RNT',
    rntPending: 'RNT en cours d’obtention',
    escnna: 'Camelot rejette l’exploitation et les abus sexuels envers les enfants et les adolescents. Loi 679 de 2001 et loi 1336 de 2009.',
    rights: 'Tous droits réservés.',
    madeBy: 'Conçu et développé par le Dr Mauricio Rodríguez Herrera.',
    links: { privacy: 'Confidentialité', terms: 'Conditions d’hébergement', cancel: 'Annulation', rules: 'Règlement intérieur', escnna: 'Prévention ESCNNA', a11y: 'Accessibilité', credits: 'Crédits photos' },
  },

  places: {
    plaza: { name: 'Plaza de Bolívar et cathédrale', desc: 'Le cœur d’Armenia : la cathédrale à la silhouette triangulaire, le Monumento al Esfuerzo et l’animation du centre, à quelques rues de Camelot.', tip: 'Parcourez-la au coucher du soleil, puis remontez la Calle Real (Carrera 14) jusqu’au Parque Sucre.' },
    parquevida: { name: 'Parque de la Vida', desc: 'Le grand poumon vert de la ville : lacs, cascades, ponts et sentiers au milieu des bambous guadua.', tip: 'Idéal pour marcher ou courir le matin.' },
    museo: { name: 'Museo del Oro Quimbaya', desc: 'Orfèvrerie et céramique du peuple quimbaya, dans un bâtiment de brique signé par l’architecte Rogelio Salmona.', tip: 'Vérifiez les horaires officiels avant d’y aller ; l’entrée est généralement gratuite.' },
    botanico: { name: 'Jardín Botánico et papillonnarium', desc: 'À Calarcá : forêt andine, ponts suspendus et un papillonnarium en forme de papillon.', tip: 'Allez-y tôt : les papillons sont plus actifs sous le soleil du matin.' },
    parquecafe: { name: 'Parque del Café', desc: 'Parc à thème de Montenegro, avec manèges, culture du café et spectacles.', tip: 'Ouvert selon les saisons et le week-end ; consultez le calendrier officiel.' },
    panaca: { name: 'PANACA', desc: 'Parc agricole de Quimbaya pour découvrir la campagne, ses animaux et ses traditions.', tip: 'La sortie idéale avec des enfants ; prévoyez une journée entière.' },
    cocora: { name: 'Salento et Valle de Cocora', desc: 'Le village le plus coloré du Quindío et la vallée de Cocora, royaume du palmier à cire, l’arbre national de la Colombie.', tip: 'Les jeeps Willys pour Cocora partent de la place de Salento. Emportez une veste et des bottes.' },
    filandia: { name: 'Filandia', desc: 'Rues en bahareque (torchis sur bambou), artisanat en liane et un belvédère avec vue sur trois départements.', tip: 'Restez pour le coucher du soleil et savourez un café autour de la place.' },
  },

  guide: {
    h1: 'Guide d’Armenia et du Quindío',
    lead: 'Tout ce que vous pouvez faire depuis Camelot : du centre d’Armenia aux villages et vallées du Paysage culturel du café.',
    introTitle: 'Armenia, la « Ville Miracle »',
    intro: [
      'Armenia est la capitale du Quindío et l’une des portes d’entrée du Paysage culturel du café de Colombie, inscrit au patrimoine mondial de l’UNESCO en 2011. Elle se trouve à environ 1 480 mètres d’altitude et jouit d’un climat tempéré toute l’année.',
      'On la surnomme la Ville Miracle pour la façon dont elle s’est reconstruite après le tremblement de terre de 1999. C’est aujourd’hui une ville accueillante, verte et bien desservie, d’où vous rejoignez en moins d’une heure presque tous les sites du département.',
    ],
    gettingTitle: 'Comment venir',
    getting: [
      { title: 'En avion', text: 'L’aéroport international El Edén (AXM) se trouve à environ 25 minutes du centre en taxi, avec des vols quotidiens depuis Bogotá et d’autres villes. L’aéroport de Pereira (PEI) est à une heure environ.' },
      { title: 'En bus', text: 'La Terminal de Transportes d’Armenia accueille des bus en provenance de Bogotá, Medellín, Cali et Pereira ; de là partent régulièrement des bus pour Salento, Filandia, Montenegro et Calarcá.' },
      { title: 'En voiture', text: 'Armenia est à environ 3 h 30 de Cali, à quelque 6 heures de Medellín et à 6 à 8 heures de Bogotá, selon la circulation et la météo. Pereira est à une heure environ.' },
    ],
    placesTitle: 'Que faire près de Camelot',
    placesLead: 'Temps de trajet approximatifs depuis le centre d’Armenia. Vérifiez horaires et tarifs auprès des sources officielles avant de partir.',
    walk: 'à pied',
    car: 'en voiture',
    foodTitle: 'Que goûter',
    food: [
      { name: 'Café de spécialité', desc: 'Vous êtes en terre de café : commandez une méthode douce (café filtre) et demandez l’origine du grain.' },
      { name: 'Truite', desc: 'Spécialité de Salento, à l’ail ou à la plancha, avec un patacón croustillant.' },
      { name: 'Bandeja paisa et haricots', desc: 'Pour les jours de randonnée : haricots rouges, riz, chicharrón, arepa et avocat.' },
      { name: 'Fruits tropicaux', desc: 'Lulo, fruit de la passion, grenadille, corossol : en jus ou tout droit du marché.' },
    ],
    weekTitle: 'Votre semaine au royaume',
    weekLead: 'Un itinéraire suggéré pour celles et ceux qui restent sept nuits ou plus.',
    week: [
      { day: 'Jour 1', title: 'Le centre', text: 'Plaza de Bolívar, cathédrale, Calle Real et déjeuner typique.' },
      { day: 'Jour 2', title: 'Parque del Café', text: 'Une journée entière de culture caféière et d’attractions à Montenegro.' },
      { day: 'Jour 3', title: 'Salento et Cocora', text: 'Jeep Willys jusqu’à la vallée, randonnée parmi les palmiers à cire et truite à Salento.' },
      { day: 'Jour 4', title: 'Filandia', text: 'Artisanat, belvédère et coucher de soleil dans l’un des plus beaux villages du pays.' },
      { day: 'Jour 5', title: 'Jardin botanique et finca caféière', text: 'Papillonnarium à Calarcá et visite d’une finca pour suivre le café de la graine à la tasse.' },
      { day: 'Jour 6', title: 'PANACA', text: 'La campagne colombienne grandeur nature, idéale si vous voyagez avec des enfants.' },
      { day: 'Jour 7', title: 'Repos', text: 'Parque de la Vida, Museo del Oro Quimbaya et un bon café pour clore la semaine.' },
    ],
    tipsTitle: 'Conseils pratiques',
    tips: [
      { title: 'Climat', text: 'Tempéré, avec des matinées ensoleillées et des averses l’après-midi. Les saisons les plus pluvieuses sont généralement avril–mai et octobre–novembre : prévoyez une veste légère et un parapluie.' },
      { title: 'Argent', text: 'Le centre compte banques et distributeurs à quelques rues. Prévoyez des espèces pour les villages, les jeeps Willys et les petits commerces.' },
      { title: 'Transports', text: 'Les taxis sont bon marché ; commandez-en un par application ou à la réception. Pour les villages, les bus de la gare routière sont fréquents et sûrs.' },
      { title: 'Urgences', text: 'Numéro d’urgence unique en Colombie : 123. Si vous avez besoin d’un médecin, nous vous indiquerons la clinique la plus proche.' },
    ],
    cta: 'Réservez votre point de chute à Armenia',
  },

  long: {
    h1: 'Longs séjours à Armenia : votre chambre au mois',
    lead: 'Une chambre privée meublée au centre d’Armenia, avec charges, Wi-Fi et ménage compris. Sans garant, sans cosignataire et avec un accord écrit clair.',
    profilesTitle: 'Pour qui ?',
    profiles: [
      { title: 'Travail et missions', text: 'Professionnels, techniciens et prestataires venus à Armenia pour un projet ou un chantier.' },
      { title: 'Santé', text: 'Patients et accompagnants pendant un traitement ou une convalescence dans les cliniques de la ville.' },
      { title: 'Études', text: 'Étudiants, stagiaires et chercheurs des universités du Quindío, ou élèves de cours d’espagnol.' },
      { title: 'Télétravail', text: 'Nomades numériques en quête d’un climat tempéré, d’une bonne connexion et d’un coût de la vie raisonnable.' },
      { title: 'Déménagement et démarches', text: 'Celles et ceux qui s’installent à Armenia et ont besoin d’un point de chute en attendant de trouver un logement.' },
      { title: 'Voyageurs sans hâte', text: 'Retraités et adeptes du voyage lent qui veulent vivre la région du café comme des habitants.' },
    ],
    includedTitle: 'Compris dans le tarif mensuel',
    included: ['Charges (eau, électricité et gaz)', 'Wi-Fi', 'Ménage programmé de la chambre', 'Changement hebdomadaire du linge de lit et des serviettes', 'Télévision', 'Accompagnement de l’hôte par WhatsApp'],
    ratesTitle: 'Tarifs mensuels de référence',
    ratesLead: 'Montants par chambre et par mois. Le tarif final dépend de la saison, du nombre de personnes et de la durée.',
    stepsTitle: 'Comment ça marche',
    steps: [
      { title: 'Écrivez-nous', text: 'Vos dates, le nombre de personnes et le motif de votre séjour.' },
      { title: 'Recevez votre proposition', text: 'Nous vous envoyons le tarif, ce qu’il comprend et les conditions.' },
      { title: 'Signez et confirmez', text: 'Nous signons un accord d’hébergement simple et vous réglez le premier mois et le dépôt de garantie.' },
      { title: 'Bienvenue chez vous', text: 'Nous vous attendons avec la chambre prête et un guide de la ville.' },
    ],
    reqTitle: 'Conditions',
    req: ['Pièce d’identité ou passeport en cours de validité', 'Accord d’hébergement signé', 'Premier mois payé d’avance', 'Dépôt de garantie remboursable convenu par écrit'],
    faqTitle: 'Questions sur les longs séjours',
    faq: [
      { q: 'Ai-je besoin d’un garant ou d’un cosignataire ?', a: 'Non. Nous signons un accord d’hébergement avec vos coordonnées et un dépôt de garantie remboursable ; nous ne demandons ni garant, ni cosignataire, ni dossier de location.' },
      { q: 'Puis-je prolonger mon séjour ?', a: 'Oui, selon disponibilité. Prévenez-nous au moins 15 jours à l’avance pour conserver votre chambre.' },
      { q: 'Et si je dois partir plus tôt ?', a: 'Il suffit de nous prévenir par écrit 15 jours à l’avance. Les conditions de départ anticipé sont clairement fixées dans l’accord dès le début.' },
      { q: 'Pouvez-vous établir la facture au nom de mon entreprise ?', a: 'Oui. Nous émettons une facture électronique au nom de la personne ou de l’entreprise de votre choix.' },
      { q: 'Quand le dépôt de garantie m’est-il restitué ?', a: 'Dans les 5 jours ouvrables suivant votre départ, déduction faite uniquement des éventuels dégâts ou consommations restant dus.' },
    ],
    cta: 'Demander ma proposition mensuelle',
  },

  legal: {
    h1: 'Politiques et règlement',
    lead: 'Des règles claires pour un séjour serein. Pour toute question, écrivez-nous.',
    updated: 'Dernière mise à jour : {date}',
    toc: 'Sur cette page',
    pendingData: '[information à compléter]',
    sections: [
      {
        id: 'privacidad',
        title: 'Politique de confidentialité et traitement des données',
        html: `<p>La présente politique s’applique aux données personnelles collectées par Camelot (ci-après « Camelot »), établissement d’hébergement situé à Armenia, Quindío, Colombie, conformément à la loi 1581 de 2012, au décret 1074 de 2015 et aux autres normes relatives à la protection des données personnelles.</p>
<h3>Responsable du traitement</h3>
<p>{businessName} · NIT/C.C. {nit} · Armenia, Quindío, Colombie · E-mail : {email} · WhatsApp : {phone}.</p>
<h3>Données traitées</h3>
<ul><li>Données d’identification et de contact : nom, pièce d’identité ou passeport, nationalité, téléphone et adresse e-mail.</li><li>Données de réservation : dates, nombre de voyageurs, chambre, paiements et facturation.</li><li>Données que vous nous communiquez volontairement, par exemple des besoins en matière d’accessibilité. S’il s’agit de données sensibles, nous ne les traitons qu’avec votre autorisation expresse et uniquement pour vous servir.</li><li>Données des mineurs : uniquement celles nécessaires à leur enregistrement, fournies par leurs parents ou représentants légaux.</li></ul>
<h3>Finalités du traitement</h3>
<ul><li>Gérer votre réservation, votre séjour et nos échanges avec vous.</li><li>Respecter nos obligations légales : registre des voyageurs (Tarjeta de Registro Hotelero, fiche d’enregistrement hôtelier), déclaration des étrangers à Migración Colombia (SIRE) et facturation électronique auprès de la DIAN.</li><li>Assurer la sécurité des voyageurs et de l’établissement.</li><li>Vous envoyer des nouveautés ou des offres, uniquement si vous l’autorisez ; vous pouvez retirer cette autorisation à tout moment.</li></ul>
<h3>Vos droits</h3>
<p>Vous pouvez connaître, mettre à jour et rectifier vos données ; demander la preuve de l’autorisation donnée ; être informé de l’usage qui en est fait ; révoquer l’autorisation ou demander leur suppression lorsqu’aucune obligation légale n’impose de les conserver ; y accéder gratuitement et déposer une plainte auprès de la Superintendencia de Industria y Comercio (SIC).</p>
<h3>Comment les exercer</h3>
<p>Écrivez-nous à {email} ou par WhatsApp. Nous répondons aux demandes de consultation dans un délai maximal de 10 jours ouvrables (prorogeable de 5 jours) et aux réclamations dans un délai maximal de 15 jours ouvrables (prorogeable de 8 jours), comme le prévoit la loi 1581 de 2012.</p>
<h3>Conservation et sécurité</h3>
<p>Nous conservons les données pendant toute la durée de notre relation avec vous et pendant la durée exigée par les réglementations touristique, comptable et fiscale. Nous appliquons des mesures de sécurité raisonnables et seules les personnes qui en ont besoin y ont accès.</p>
<h3>Visiteurs de l’Union européenne, du Royaume-Uni et du Brésil</h3>
<p>Si vous y résidez, nous traitons vos données sur la base de l’exécution du contrat d’hébergement, du respect de nos obligations légales, de notre intérêt légitime en matière de sécurité et, le cas échéant, de votre consentement. Vous disposez en outre des droits d’accès, de rectification, d’effacement, d’opposition, de limitation et de portabilité (RGPD / UK GDPR / LGPD), et vous pouvez saisir votre autorité de protection des données.</p>`,
      },
      {
        id: 'cookies',
        title: 'Cookies et confidentialité sur ce site',
        html: `<ul><li><strong>Aucun cookie de suivi ni de publicité.</strong> Ce site n’utilise ni outil d’analyse tiers ni pixel de réseaux sociaux.</li><li>Nous enregistrons dans votre propre navigateur (stockage local) uniquement vos préférences : langue, mode clair ou sombre, devise, et le fait que vous avez déjà vu l’avis de confidentialité. Vous pouvez les effacer depuis votre navigateur.</li><li>La carte OpenStreetMap ne se charge que si vous cliquez sur « Charger la carte ».</li><li>Lorsque vous nous écrivez par WhatsApp ou depuis des plateformes comme Airbnb, les politiques de ces entreprises s’appliquent également.</li><li>Le site est hébergé sur GitHub Pages (GitHub, Inc., États-Unis), qui peut enregistrer des données techniques comme l’adresse IP pour des raisons de sécurité.</li></ul>`,
      },
      {
        id: 'terminos',
        title: 'Conditions d’hébergement',
        html: `<ul><li><strong>Contrat d’hébergement.</strong> La réservation confirmée par écrit constitue un contrat d’hébergement régi par le droit colombien (Código de Comercio et réglementation du tourisme). Les tarifs affichés sur ce site sont indicatifs jusqu’à ce que nous vous les confirmions par écrit.</li><li><strong>Confirmation.</strong> Les courts et moyens séjours sont confirmés par un acompte de {deposit} %. Les longs séjours, par le premier mois et un dépôt de garantie remboursable, conformément à l’accord d’hébergement signé.</li><li><strong>Enregistrement.</strong> Chaque voyageur présente à son arrivée une pièce d’identité en cours de validité (cédula ou passeport). Les données sont consignées dans la Tarjeta de Registro Hotelero et, pour les étrangers, déclarées à Migración Colombia.</li><li><strong>Mineurs.</strong> Ils ne sont hébergés qu’avec leurs parents ou avec un adulte autorisé par écrit, sur présentation de leur acte de naissance (registro civil) ou d’un document attestant le lien de parenté.</li><li><strong>Occupation.</strong> Chaque chambre a une capacité maximale. Les visites doivent être annoncées et enregistrées ; pour des raisons de sécurité, les visiteurs ne peuvent pas passer la nuit sans être enregistrés comme voyageurs.</li><li><strong>Paiements et facture.</strong> Les prix sont réglés en pesos colombiens et incluent les taxes applicables. Nous émettons une facture électronique. Les étrangers non résidents peuvent bénéficier de l’exonération de TVA (IVA) prévue par l’Estatuto Tributario lorsque les conditions sont remplies.</li><li><strong>Respect des lieux.</strong> Le voyageur est responsable des dommages qu’il cause dans la chambre ou les parties communes. Nous recommandons de ne pas laisser d’objets de valeur en évidence.</li><li><strong>Droit d’admission.</strong> Nous pouvons refuser ou interrompre l’hébergement pour des raisons de sécurité ou en cas de manquement grave au présent règlement, jamais pour des motifs discriminatoires.</li><li><strong>Plateformes.</strong> Si vous réservez via Airbnb, Booking ou une autre plateforme, leurs conditions et leur politique d’annulation s’appliquent également.</li><li><strong>Plaintes et réclamations.</strong> Écrivez-nous : nous vous répondrons dans les délais légaux. Vous pouvez également saisir la Superintendencia de Industria y Comercio, conformément à la loi 1480 de 2011.</li></ul>`,
      },
      {
        id: 'cancelacion',
        title: 'Politique d’annulation',
        html: `<table><thead><tr><th>Séjour</th><th>Annulation sans frais</th><th>Passé ce délai</th></tr></thead><tbody><tr><td>Court (1–6 nuits)</td><td>Jusqu’à 72 heures avant l’arrivée</td><td>La première nuit est facturée</td></tr><tr><td>Moyen (7–29 nuits)</td><td>Jusqu’à 7 jours avant l’arrivée</td><td>50 % de l’acompte est retenu ; à moins de 48 heures, la totalité de l’acompte</td></tr><tr><td>Long (30 nuits ou plus)</td><td>Jusqu’à 14 jours avant l’arrivée</td><td>50 % de l’acompte est retenu</td></tr></tbody></table>
<ul><li><strong>Une non-présentation</strong> sans préavis équivaut à une annulation hors délai.</li><li><strong>Départ anticipé</strong> lors d’un court ou moyen séjour : les nuits effectuées sont facturées au tarif correspondant à la durée réelle. Pour les longs séjours, un préavis écrit de 15 jours est requis.</li><li><strong>Force majeure</strong> (fermeture de routes, urgence médicale, catastrophe naturelle) : nous reportons votre séjour sans frais dans les 6 mois suivants.</li><li><strong>Remboursements</strong> par le même moyen de paiement, dans les 10 jours ouvrables suivants. Les frais de virement international sont à la charge de la personne qui en fait la demande.</li></ul>`,
      },
      {
        id: 'normas',
        title: 'Règlement intérieur',
        html: `<ul><li>Arrivée à partir de {checkin} et départ jusqu’à {checkout}.</li><li>Silence entre {quietFrom} et {quietTo}, par respect pour les autres voyageurs et le voisinage.</li><li>Il est interdit de fumer ou de vapoter dans les chambres et les espaces fermés.</li><li>Fêtes, événements et substances illicites ne sont pas autorisés.</li><li>Les visites sont annoncées et enregistrées.</li><li>Animaux uniquement avec autorisation préalable ; les chiens d’assistance sont toujours les bienvenus.</li><li>Préservez l’eau et l’énergie : éteignez lumières et appareils en sortant.</li><li>Aidez-nous à recycler : triez vos déchets selon les consignes.</li></ul>`,
      },
      {
        id: 'escnna',
        title: 'Prévention de l’exploitation sexuelle des enfants et des adolescents',
        html: `<p><strong>Avertissement :</strong> en application de l’article 17 de la loi 679 de 2001, Camelot informe le voyageur que l’exploitation et les abus sexuels envers des mineurs sont sanctionnés pénalement et administrativement dans le pays, conformément aux lois en vigueur.</p>
<p>Camelot respecte la loi 1336 de 2009 et le code de conduite contre l’exploitation sexuelle commerciale des enfants et adolescents (ESCNNA). L’accès des mineurs qui ne sont pas accompagnés de leurs parents ou d’un adulte autorisé n’est pas permis. Signalez tout soupçon : ligne 141 de l’ICBF, ligne 123 de la Police nationale ou sur <a href="https://www.teprotejo.org" rel="noopener" target="_blank">teprotejo.org</a>.</p>`,
      },
      {
        id: 'accesibilidad',
        title: 'Accessibilité',
        html: `<p>Ce site vise à respecter les règles WCAG 2.2 de niveau AA : contraste suffisant, navigation au clavier, textes alternatifs et respect de la préférence pour les animations réduites.</p><p>Si vous avez des besoins liés à la mobilité ou de toute autre nature, dites-le-nous avant de réserver : nous vous renseignerons précisément sur les accès, les escaliers et la chambre la mieux adaptée.</p>`,
      },
      {
        id: 'creditos',
        title: 'Crédits photos',
        html: `<p>Les photographies des sites du Quindío proviennent de Wikimedia Commons et sont utilisées conformément à leurs licences libres ; elles ont été recadrées et redimensionnées. Les photos des chambres sont des illustrations, en attendant la publication de nos propres photographies.</p>{credits}`,
      },
    ],
  },

  merlin: {
    name: 'Merlin',
    role: 'Concierge numérique de Camelot',
    open: 'Ouvrir le concierge Merlin',
    close: 'Fermer le concierge',
    greeting: 'Bienvenue à Camelot ! Je suis Merlin. Posez-moi toutes vos questions sur votre séjour, ou choisissez un sujet.',
    placeholder: 'Écrivez votre question…',
    send: 'Envoyer',
    fallback: 'Cette question mérite un hôte en chair et en os. Voulez-vous que je vous mette en relation avec lui ?',
    toHost: 'Parler à l’hôte',
    more: 'Autres sujets',
    topics: [
      { id: 'rates', label: 'Tarifs', kw: ['prix', 'tarif', 'cout', 'combien', 'nuit', 'nuitee', 'budget', 'reduction', 'economique'], a: 'Le tarif dépend de la chambre et du nombre de nuits : dès 7 nuits, vous bénéficiez de {mediumPct} % de réduction, et dès 30 nuits, d’un tarif mensuel. Utilisez le calculateur pour voir le total instantanément.', action: 'calc' },
      { id: 'long', label: 'Long séjour', kw: ['mois', 'mensuel', 'mensuelle', 'long', 'longue', 'saison', 'vivre', 'garant', 'installer'], a: 'Pour 30 nuits ou plus, nous proposons un tarif mensuel avec charges, Wi-Fi et ménage compris, sans garant ni cosignataire. Nous signons un accord écrit simple.', action: 'long' },
      { id: 'checkin', label: 'Arrivée et départ', kw: ['arrivee', 'checkin', 'check-in', 'depart', 'checkout', 'heure', 'horaire', 'tard'], a: 'L’arrivée se fait à partir de {checkin} et le départ jusqu’à {checkout}. Si vous arrivez plus tôt ou partez plus tard, prévenez-nous : nous nous adapterons selon les disponibilités.' },
      { id: 'arrive', label: 'Comment venir', kw: ['aeroport', 'gare', 'terminal', 'bus', 'taxi', 'venir', 'avion', 'vol', 'transport'], a: 'Depuis l’aéroport El Edén (AXM), comptez environ 25 minutes en taxi ; depuis la Terminal de Transportes, environ 10. Nous vous envoyons l’adresse exacte lors de la réservation.' },
      { id: 'where', label: 'Situation', kw: ['adresse', 'situe', 'situation', 'emplacement', 'localisation', 'centre', 'quartier', 'zone', 'securite', 'dangereux'], a: 'Nous sommes au centre d’Armenia, à quelques rues de la Plaza de Bolívar, des banques, des commerces et des transports vers tout le Quindío.' },
      { id: 'pay', label: 'Paiements et facture', kw: ['paiement', 'payer', 'carte', 'virement', 'especes', 'liquide', 'facture', 'tva', 'dollars', 'euros'], a: 'Nous confirmons les moyens de paiement lors de la réservation (virement, paiements numériques ou espèces). Nous émettons une facture électronique, y compris au nom d’une entreprise.' },
      { id: 'pets', label: 'Animaux', kw: ['animal', 'animaux', 'chien', 'chiens', 'chat', 'chats', 'compagnie', 'pet'], a: 'Contactez-nous avant de réserver et nous vous expliquerons les conditions. Les chiens d’assistance sont toujours les bienvenus.' },
      { id: 'parking', label: 'Parking', kw: ['parking', 'garer', 'stationner', 'stationnement', 'voiture', 'moto', 'vehicule'], a: 'Renseignez-vous sur la disponibilité ; le centre compte des parkings publics à quelques rues.' },
      { id: 'wifi', label: 'Wi-Fi et travail', kw: ['wifi', 'internet', 'travailler', 'teletravail', 'visio', 'connexion', 'reseau', 'debit'], a: 'Le Wi-Fi est gratuit pour tous les voyageurs. Si vous travaillez en visioconférence, demandez-nous la chambre qui capte le mieux.' },
      { id: 'cancel', label: 'Annulation', kw: ['annuler', 'annulation', 'remboursement', 'rembourser', 'modifier', 'changer', 'reporter'], a: 'Courts séjours : sans frais jusqu’à 72 h avant. Séjours moyens : jusqu’à 7 jours avant. Longs séjours : jusqu’à 14 jours avant. Tous les détails figurent dans les politiques.', action: 'legal' },
      { id: 'todo', label: 'Que faire', kw: ['faire', 'tourisme', 'cocora', 'salento', 'filandia', 'parc', 'excursion', 'visiter', 'cafe', 'activite'], a: 'Valle de Cocora, Salento, Filandia, Parque del Café, PANACA, le Jardín Botánico… tout est à moins d’une heure. Consultez notre guide, avec les temps de trajet depuis Camelot.', action: 'guide' },
      { id: 'access', label: 'Accessibilité', kw: ['accessible', 'accessibilite', 'fauteuil', 'escalier', 'escaliers', 'mobilite', 'handicap', 'pmr'], a: 'Dites-nous ce dont vous avez besoin avant de réserver : nous vous renseignerons précisément sur les accès, les escaliers et la chambre la mieux adaptée.' },
    ],
    actions: { calc: 'Ouvrir le calculateur', long: 'Voir les longs séjours', legal: 'Voir les politiques', guide: 'Ouvrir le guide' },
    waMsg: 'Bonjour Camelot, je viens de votre site et j’ai une question :',
  },

  toasts: {
    langSuggest: 'Cette page existe aussi en français.',
    switchLang: 'Changer',
    dismiss: 'Fermer',
    privacy: 'Ce site n’utilise aucun cookie de suivi. Nous enregistrons uniquement vos préférences dans votre navigateur.',
    privacyOk: 'J’ai compris',
    privacyMore: 'En savoir plus',
    pendingChannel: 'Ce canal de réservation sera activé très prochainement. En attendant, utilisez le formulaire de contact.',
  },

  notFound: {
    title: 'Cette porte du château n’existe pas',
    text: 'La page que vous cherchez s’est perdue dans la forêt. Revenez à l’accueil ou consultez le guide.',
    cta: 'Retour à l’accueil',
  },
};
