// ENGLISH texts. Same keys, same order and same array lengths as es.mjs (the source language).
// Placeholders in braces, e.g. {checkin}, are replaced at build time: do NOT translate them.
// Strings may contain simple HTML (<em>, <strong>, <a>, <ul>, <li>, <p>, <br>).

export default {
  code: 'en',
  locale: 'en_US',
  name: 'English',
  short: 'EN',

  slugs: { guide: 'armenia-quindio-guide', long: 'long-stays', legal: 'policies' },

  seo: {
    siteName: 'Camelot · Lodging in Armenia, Quindío',
    home: {
      title: 'Camelot | Downtown Armenia, Colombia Hotel Rooms · Nightly to Monthly',
      description: 'Private hotel-style rooms with en-suite bath and Wi-Fi in downtown Armenia, Quindío, Colombia’s Coffee Region. Nightly, weekly and monthly rates. Book direct.',
    },
    guide: {
      title: 'Things to Do in Armenia & Quindío: Coffee Region Guide | Camelot',
      description: 'Things to do in Armenia and Colombia’s Coffee Region: Cocora Valley, Salento, Filandia, Parque del Café, PANACA and more, with travel times from downtown.',
    },
    long: {
      title: 'Monthly Furnished Rooms in Armenia, Quindío, Colombia | Camelot',
      description: 'Monthly stays in downtown Armenia, Colombia: furnished private room, utilities and Wi-Fi included, no co-signer. Ideal for work, health, study or remote work.',
    },
    legal: {
      title: 'Policies, Privacy & House Rules | Camelot Armenia',
      description: 'Privacy policy (Law 1581 of 2012), lodging terms, cancellation, house rules and child protection (ESCNNA) policy of Camelot in Armenia, Quindío, Colombia.',
    },
    notFound: { title: 'Page Not Found | Camelot', description: 'This page doesn’t exist. Head back to the Camelot home page to find private rooms in downtown Armenia, Quindío, for nightly, weekly or monthly stays.' },
    keywords: 'Armenia Colombia hotel, where to stay in Armenia Quindio, downtown Armenia hotel, Armenia Quindio lodging, hotel rooms Armenia Colombia, furnished room monthly Armenia Colombia, long stay Armenia Colombia, monthly rental Armenia Quindio, Coffee Region accommodation, Colombia Coffee Region hotel, digital nomad Armenia Colombia',
  },

  nav: {
    home: 'Home',
    stays: 'Stays',
    rooms: 'Rooms',
    legend: 'Experience',
    calc: 'Rates',
    location: 'Location',
    guide: 'Quindío Guide',
    long: 'Long Stays',
    faq: 'FAQ',
    contact: 'Contact',
    book: 'Book now',
    menu: 'Menu',
    close: 'Close',
    skip: 'Skip to content',
    langLabel: 'Language',
    themeLabel: 'Switch between light and dark mode',
    backTop: 'Back to top',
    breadcrumbHome: 'Home',
  },

  hero: {
    eyebrow: 'Lodging in downtown Armenia · Quindío, Colombia',
    title: 'Your castle in the <em>heart of the Coffee Region</em>',
    lead: 'Private hotel-style rooms for a night, a season or several months. Just a few blocks from Plaza de Bolívar, with all of Quindío within easy reach.',
    ctaPrimary: 'Estimate my stay',
    ctaSecondary: 'See the rooms',
    chips: ['{rooms} private rooms', 'Private bathroom', 'Wi-Fi', 'Nightly, weekly or monthly rates'],
    slides: [
      'Aerial view of Plaza de Bolívar in downtown Armenia, Quindío',
      'Wax palms in the Cocora Valley (Valle de Cocora), Salento, Quindío',
      'Colorful facades in Filandia, Quindío',
    ],
    scroll: 'Discover Camelot',
  },

  stays: {
    eyebrow: 'Choose your stay',
    title: 'One night, one season <em>or an entire reign</em>',
    lead: 'The same room, three ways to stay. The longer you stay, the better the rate.',
    items: {
      short: {
        tag: 'Short stay',
        name: 'The Wayfarer’s Pass',
        range: '1 to 6 nights',
        desc: 'For leisure, business or a stopover in the Coffee Region. Arrive, rest up and head out to explore.',
        points: ['Nightly rate', 'Arrival coordinated via WhatsApp', 'Insider tips for exploring Quindío'],
      },
      medium: {
        tag: 'Medium stay',
        name: 'A Season at Court',
        range: '7 to 29 nights',
        desc: 'For projects, courses, long vacations or getting to know the region at an unhurried pace.',
        points: ['{mediumPct}% off the nightly rate', 'Scheduled housekeeping and linen changes', 'Suggested one-week itinerary'],
      },
      long: {
        tag: 'Long stay',
        name: 'Residence in the Realm',
        range: '30 nights or more',
        desc: 'Your home base in Armenia: utilities included, no co-signer and a clear written agreement.',
        points: ['Monthly rate with utilities and Wi-Fi', 'No guarantor or co-signer', 'Invoices for your company'],
      },
    },
    cta: 'Calculate my rate',
    more: 'All about long stays',
  },

  rooms: {
    eyebrow: 'The rooms',
    title: 'Choose your <em>chamber</em>',
    lead: 'Private rooms with en-suite bathroom, bed linen and towels. Tell us how many of you are coming and we’ll recommend the right one.',
    from: 'From',
    perNight: 'night',
    perMonth: 'month',
    guests: 'Up to {n} guests',
    guest: '1 guest',
    bedDouble: '{n} double bed',
    bedsDouble: '{n} double beds',
    bedSingle: '{n} single bed',
    bedsSingle: '{n} single beds',
    privateBath: 'Private bathroom',
    illustrative: 'Illustrative image',
    indicative: 'Indicative rate',
    ask: 'Ask about this room',
    items: {
      escudero: { name: 'Squire', type: 'Single room', desc: 'Compact and quiet, designed for solo travelers on business or vacation.', alt: 'Single room with a double bed and bedside lamps' },
      caballero: { name: 'Knight', type: 'Double room', desc: 'A double bed and space for two. A favorite with couples and long-stay guests.', alt: 'Double room with a large bed and warm lighting' },
      hermandad: { name: 'Fellowship', type: 'Triple room', desc: 'One double bed and one single bed for friends, colleagues or a small family.', alt: 'Room with two beds and a nightstand' },
      mesa: { name: 'Round Table', type: 'Family room', desc: 'For the whole family or your travel group: several beds in a single space.', alt: 'Family room with several beds' },
    },
  },

  legend: {
    eyebrow: 'The Camelot legend',
    title: 'Five promises <em>from the court</em>',
    lead: 'We took the best of the Arthurian legend and turned it into Coffee Country hospitality.',
    items: [
      { key: 'excalibur', name: 'Excalibur', title: 'Arriving is easy', desc: 'No sword in the stone here: before you arrive, we send you the location, timing and step-by-step instructions via WhatsApp.' },
      { key: 'grial', name: 'The Grail', title: 'Single-origin coffee', desc: 'Quindío’s true grail is served in a cup. We’ll tell you where to find the best specialty coffee near Camelot.' },
      { key: 'mesa', name: 'Round Table', title: 'Everyone treated as an equal', desc: 'Clear rates, no fine print and no surprise charges. What we quote is what you pay.' },
      { key: 'avalon', name: 'Avalon', title: 'Truly restful nights', desc: 'Fresh bed linen, quiet nights and, if you ask, an interior room away from the street noise.' },
      { key: 'merlin', name: 'Merlin', title: 'A concierge in the know', desc: 'Merlin, our assistant, answers instantly in five languages, and behind him is a real host who knows every corner of Quindío.' },
    ],
  },

  amenities: {
    eyebrow: 'Included',
    title: 'Everything you need, <em>nothing you don’t</em>',
    items: {
      bath: 'Private bathroom',
      wifi: 'Free Wi-Fi',
      tv: 'TV',
      linen: 'Bed linen and towels',
      hotwater: 'Hot water',
      cleaning: 'Room cleaning',
      coffee: 'Welcome coffee',
      desk: 'Work corner',
      laundry: 'Laundry on request',
      luggage: 'Luggage storage',
      concierge: 'Local guide and concierge',
      invoice: 'Electronic invoice',
    },
  },

  calc: {
    eyebrow: 'Estimate your stay',
    title: 'Your rate, <em>in seconds</em>',
    lead: 'Pick your dates and room. We detect the type of stay and apply the discount automatically.',
    checkin: 'Check-in',
    checkout: 'Check-out',
    guests: 'Guests',
    room: 'Room',
    currency: 'Currency',
    nights: '{n} nights',
    night: '1 night',
    tierShort: 'Short stay',
    tierMedium: 'Medium stay',
    tierLong: 'Long stay',
    base: 'Base rate',
    discount: 'Length-of-stay discount',
    direct: 'Direct booking discount',
    total: 'Estimated total',
    avg: 'Average per night',
    monthly: 'Equivalent to {amount} per month',
    deposit: 'Deposit to confirm ({pct}%)',
    depositLong: 'For long stays: first month plus a refundable deposit, as set out in the agreement.',
    approx: 'Amounts in {cur} are approximate; payment is made in Colombian pesos.',
    indicative: 'Indicative rate, subject to availability. We’ll confirm the final price in writing.',
    send: 'Request via WhatsApp',
    sendMail: 'Request by email',
    invalid: 'Please choose a check-out date after your check-in date.',
    capacity: 'Maximum occupancy for this room: {n}. We suggest the {room} room, or two rooms.',
    pickDates: 'Choose your dates to see the rate.',
    waIntro: 'Hi Camelot! I’d like to check availability:',
    waLines: ['Check-in: {in}', 'Check-out: {out} ({nights})', 'Guests: {guests}', 'Room: {room}', 'Stay: {tier}', 'Estimated total on the website: {total}'],
  },

  longBand: {
    eyebrow: 'Long stays',
    title: 'Coming to Armenia <em>for months</em>?',
    lead: 'Work, medical treatment, study or remote work: live in downtown Armenia on a monthly rate that includes utilities, Wi-Fi and housekeeping. No guarantor, no co-signer, no rental paperwork.',
    points: ['Utilities and Wi-Fi included', 'A clear, written lodging agreement', 'Invoices in your company’s name'],
    cta: 'See long stays',
  },

  location: {
    eyebrow: 'Location',
    title: 'Downtown, <em>a few blocks from everything</em>',
    lead: 'Camelot is in downtown Armenia, the city’s shopping and banking district, a few blocks from Plaza de Bolívar. Buses and taxis to every corner of Quindío leave from right here.',
    items: [
      { label: 'Plaza de Bolívar & Cathedral', value: '≈ 8 min walk' },
      { label: 'Calle Real (pedestrian Carrera 14)', value: '≈ 5 min walk' },
      { label: 'Terminal de Transportes (bus station)', value: '≈ 10 min by car' },
      { label: 'El Edén International Airport (AXM)', value: '≈ 25 min by car' },
      { label: 'Parque del Café', value: '≈ 30 min by car' },
      { label: 'Salento & Cocora Valley', value: '≈ 55 min by car' },
    ],
    mapCta: 'Load the map',
    mapNote: 'The map is provided by OpenStreetMap and only loads if you ask for it (we protect your privacy).',
    mapTitle: 'Map of downtown Armenia, Quindío',
    exact: 'We’ll send you the exact location once your booking is confirmed.',
    directions: 'Get directions',
  },

  guideTeaser: {
    eyebrow: 'The map of the realm',
    title: 'Quindío <em>all around you</em>',
    lead: 'Coffee-covered mountains, wax palms and colorful towns, less than an hour from your room.',
    cta: 'Open the full guide',
  },

  rules: {
    eyebrow: 'The rules of the Round Table',
    title: 'Courtesy <em>among knights</em>',
    lead: 'A few clear rules so everyone gets a good night’s rest.',
    items: [
      'Check-in from {checkin} and check-out by {checkout}. Early check-in or late check-out subject to availability.',
      'Quiet hours from {quietFrom} to {quietTo}.',
      'No smoking or vaping inside the rooms.',
      'Every guest must register with a valid ID, as required by Colombian law.',
      'Visitors must be announced and registered; no parties or events.',
      'Minors must always be accompanied by their parents or have written authorization.',
    ],
    cta: 'Read the full house rules and policies',
  },

  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'What guests <em>ask us most</em>',
    items: [
      { q: 'Where is Camelot located?', a: 'In downtown Armenia, Quindío, a few blocks from Plaza de Bolívar, Calle Real and the banking district. We’ll send you the exact location and directions once your booking is confirmed.' },
      { q: 'What’s the difference between a short, medium and long stay?', a: 'It’s the same room at a different rate: short stays (1 to 6 nights) are charged per night; medium stays (7 to 29 nights) get {mediumPct}% off; long stays (30 nights or more) have a monthly rate with utilities included and a written agreement.' },
      { q: 'What are the check-in and check-out times?', a: 'Check-in is from {checkin} and check-out is by {checkout}. If you’re arriving earlier or leaving later, just message us and we’ll accommodate you based on availability.' },
      { q: 'Do the rooms have a private bathroom?', a: 'Yes. Every room is private, with its own bathroom, bed linen, towels and Wi-Fi.' },
      { q: 'Is the Wi-Fi good enough for work or study?', a: 'Yes, Wi-Fi is free for all guests. If your work depends on video calls, ask us for the room with the best signal.' },
      { q: 'How do I get there from the airport or the bus station?', a: 'From El Edén International Airport (AXM) it’s about 25 minutes by taxi; from Armenia’s Terminal de Transportes (bus station), about 10 minutes. We’ll send you directions when you book.' },
      { q: 'What payment methods do you accept?', a: 'We confirm the available methods when you book (bank transfer, digital payments and cash). Prices are settled in Colombian pesos; we show approximate amounts in US dollars and euros for reference.' },
      { q: 'Do you issue invoices?', a: 'Yes. Just request one when you book, with the details of the person or company. If you’re a non-resident foreigner, ask us about the VAT exemption on lodging provided for under Colombian tax law.' },
      { q: 'Are pets allowed?', a: 'Please check with us before booking. Service dogs are always welcome.' },
      { q: 'Do you have parking?', a: 'Ask us about availability. There are public parking lots a few blocks away downtown.' },
      { q: 'What is the cancellation policy?', a: 'Short stays: free cancellation up to 72 hours before arrival. Medium stays: up to 7 days before. Long stays: up to 14 days before. You’ll find the full details in our policies.' },
      { q: 'Is downtown Armenia safe?', a: 'It’s the busiest part of the city, with shops, banks and transportation. As in any city center, we recommend basic precautions at night; we’re happy to share tips when you arrive.' },
    ],
  },

  contact: {
    eyebrow: 'Contact & bookings',
    title: 'Let’s talk about <em>your stay</em>',
    lead: 'Write to us and we’ll reply with availability and the final rate. Booking direct always gets you the best price.',
    name: 'Name',
    email: 'Email',
    phone: 'WhatsApp or phone',
    dates: 'Approximate dates',
    guests: 'Guests',
    stay: 'Type of stay',
    message: 'Message',
    messagePh: 'Tell us what you need: reason for your trip, arrival time, special requests…',
    consent: 'I authorize the processing of my data to respond to my request, in accordance with the <a href="{legalUrl}#privacidad">privacy policy</a>.',
    submit: 'Send request',
    sending: 'Sending…',
    success: 'Thank you! We’ve received your request and will get back to you very soon.',
    error: 'We couldn’t send the form. Please try WhatsApp or email.',
    required: 'Please complete the required fields and accept the privacy policy.',
    channelPending: 'We’re activating our booking channels. Very soon you’ll be able to reach us here.',
    whatsapp: 'WhatsApp',
    mail: 'Email',
    airbnb: 'View on Airbnb',
    booking: 'View on Booking.com',
    response: 'We’ll get back to you as soon as possible with availability and the final rate.',
  },

  footer: {
    tagline: 'Lodging in downtown Armenia, Quindío. Short, medium and long stays.',
    explore: 'Explore',
    legalTitle: 'Policies',
    contactTitle: 'Contact',
    rnt: 'RNT',
    rntPending: 'RNT registration in progress',
    escnna: 'Camelot rejects the sexual exploitation and abuse of children and adolescents. Law 679 of 2001 and Law 1336 of 2009.',
    rights: 'All rights reserved.',
    madeBy: 'Conceived and developed by Dr. Mauricio Rodríguez Herrera.',
    links: { privacy: 'Privacy', terms: 'Lodging terms', cancel: 'Cancellation', rules: 'House rules', escnna: 'Child protection (ESCNNA)', a11y: 'Accessibility', credits: 'Image credits' },
  },

  places: {
    plaza: { name: 'Plaza de Bolívar & Cathedral', desc: 'The heart of Armenia: the triangular cathedral, the Monumento al Esfuerzo and the bustle of downtown, just a few blocks from Camelot.', tip: 'Stroll through at sunset and continue along Calle Real (Carrera 14) to Parque Sucre.' },
    parquevida: { name: 'Parque de la Vida', desc: 'The city’s great green lung: lakes, waterfalls, bridges and trails winding through bamboo groves.', tip: 'Perfect for a morning walk or jog.' },
    museo: { name: 'Museo del Oro Quimbaya', desc: 'The Quimbaya Gold Museum showcases the goldwork and pottery of the Quimbaya people in a brick building designed by architect Rogelio Salmona.', tip: 'Check the official opening hours before you go; admission is usually free.' },
    botanico: { name: 'Jardín Botánico & Butterfly House', desc: 'In Calarcá: Andean forest, suspension bridges and a butterfly house shaped like a butterfly.', tip: 'Go early: the butterflies are most active in the morning sun.' },
    parquecafe: { name: 'Parque del Café', desc: 'Colombia’s National Coffee Park, a theme park in Montenegro with rides, coffee culture and live shows.', tip: 'It opens seasonally and on weekends; check the official calendar.' },
    panaca: { name: 'PANACA', desc: 'An agricultural theme park in Quimbaya where you can get to know Colombian farm life, its animals and traditions.', tip: 'A perfect outing with kids; set aside a full day.' },
    cocora: { name: 'Salento & Cocora Valley', desc: 'Quindío’s most colorful town and the valley of the wax palm, Colombia’s national tree.', tip: 'Willys jeeps to Cocora leave from Salento’s main square. Bring a jacket and boots.' },
    filandia: { name: 'Filandia', desc: 'Streets lined with bahareque (wattle-and-daub) houses, handwoven vine crafts and a lookout tower with views over three departments.', tip: 'Stay for sunset and enjoy a coffee around the main square.' },
  },

  guide: {
    h1: 'Guide to Armenia and Quindío',
    lead: 'Everything you can do from Camelot: from downtown Armenia to the towns and valleys of the Coffee Cultural Landscape.',
    introTitle: 'Armenia, the Miracle City',
    intro: [
      'Armenia is the capital of Quindío and one of the gateways to Colombia’s Coffee Cultural Landscape, declared a UNESCO World Heritage Site in 2011. It sits about 1,480 meters (≈ 4,860 ft) above sea level and enjoys a mild climate year-round.',
      'It’s known as the Miracle City for the way it rebuilt itself after the 1999 earthquake. Today it’s a friendly, green and well-connected city, from which you can reach almost every attraction in the department in under an hour.',
    ],
    gettingTitle: 'Getting here',
    getting: [
      { title: 'By plane', text: 'El Edén International Airport (AXM) is about 25 minutes from downtown by taxi, with daily flights from Bogotá and other cities. Pereira’s airport (PEI) is about an hour away.' },
      { title: 'By bus', text: 'Armenia’s Terminal de Transportes (bus station) receives buses from Bogotá, Medellín, Cali and Pereira, and frequent buses leave from there for Salento, Filandia, Montenegro and Calarcá.' },
      { title: 'By car', text: 'Armenia is about 3.5 hours from Cali, around 6 from Medellín and 6 to 8 from Bogotá, depending on traffic and weather. Pereira is about an hour away.' },
    ],
    placesTitle: 'Things to do near Camelot',
    placesLead: 'Approximate times from downtown Armenia. Check opening hours and prices with official sources before you go.',
    walk: 'on foot',
    car: 'by car',
    foodTitle: 'What to try',
    food: [
      { name: 'Specialty coffee', desc: 'You’re in coffee country: order a pour-over and ask about the origin of the beans.' },
      { name: 'Trout', desc: 'A Salento specialty, served al ajillo (with garlic) or grilled, with crispy patacón (fried green plantain).' },
      { name: 'Bandeja paisa and beans', desc: 'For hiking days: beans, rice, chicharrón (pork crackling), arepa and avocado.' },
      { name: 'Tropical fruits', desc: 'Lulo, passion fruit, granadilla, soursop: as fresh juice or straight from the market.' },
    ],
    weekTitle: 'Your week in the realm',
    weekLead: 'A suggested itinerary for guests staying seven nights or more.',
    week: [
      { day: 'Day 1', title: 'Downtown', text: 'Plaza de Bolívar, the Cathedral, Calle Real and a traditional lunch.' },
      { day: 'Day 2', title: 'Parque del Café', text: 'A full day of coffee culture and rides in Montenegro.' },
      { day: 'Day 3', title: 'Salento & Cocora', text: 'A Willys jeep ride to the valley, a hike among the wax palms and trout in Salento.' },
      { day: 'Day 4', title: 'Filandia', text: 'Crafts, the lookout tower and sunset in one of the prettiest towns in Colombia.' },
      { day: 'Day 5', title: 'Botanical garden & coffee farm', text: 'The butterfly house in Calarcá and a farm tour to follow coffee from seed to cup.' },
      { day: 'Day 6', title: 'PANACA', text: 'The Colombian countryside up close, ideal if you’re traveling with kids.' },
      { day: 'Day 7', title: 'Rest day', text: 'Parque de la Vida, Museo del Oro Quimbaya and a good cup of coffee to wrap up the week.' },
    ],
    tipsTitle: 'Practical tips',
    tips: [
      { title: 'Weather', text: 'Mild, with sunny mornings and afternoon showers. The rainiest seasons are usually April–May and October–November: bring a light jacket and an umbrella.' },
      { title: 'Money', text: 'There are banks and ATMs just a few blocks away downtown. Carry cash for the towns, the Willys jeeps and small shops.' },
      { title: 'Getting around', text: 'Taxis are inexpensive; order one through an app or ask at the front desk. For the towns, buses from the terminal are frequent and safe.' },
      { title: 'Emergencies', text: 'Colombia’s single emergency number is 123. If you need a doctor, we’ll point you to the nearest clinic.' },
    ],
    cta: 'Book your base in Armenia',
  },

  long: {
    h1: 'Long stays in Armenia: your room by the month',
    lead: 'A furnished private room in downtown Armenia, with utilities, Wi-Fi and housekeeping included. No guarantor, no co-signer and a clear written agreement.',
    profilesTitle: 'Who is it for?',
    profiles: [
      { title: 'Work assignments', text: 'Professionals, technicians and contractors coming to Armenia for a project or a construction job.' },
      { title: 'Health', text: 'Patients and their companions during treatment or recovery at the city’s clinics.' },
      { title: 'Study', text: 'Students, interns and researchers at Quindío’s universities, or anyone taking Spanish courses.' },
      { title: 'Remote work', text: 'Digital nomads looking for a mild climate, a good connection and a reasonable cost of living.' },
      { title: 'Relocation & paperwork', text: 'People moving to Armenia who need a base while they find a place to live.' },
      { title: 'Slow travelers', text: 'Retirees and slow travelers who want to experience the Coffee Region like a local.' },
    ],
    includedTitle: 'Included in the monthly rate',
    included: ['Utilities (water, electricity and gas)', 'Wi-Fi', 'Scheduled room cleaning', 'Weekly change of bed linen and towels', 'TV', 'Host support via WhatsApp'],
    ratesTitle: 'Reference monthly rates',
    ratesLead: 'Prices per room, per month. The final rate depends on the season, the number of guests and the length of stay.',
    stepsTitle: 'How it works',
    steps: [
      { title: 'Tell us', text: 'Your dates, number of guests and reason for your trip.' },
      { title: 'Get your proposal', text: 'We send you the rate, what’s included and the terms.' },
      { title: 'Sign and confirm', text: 'We sign a simple lodging agreement and you pay the first month and the deposit.' },
      { title: 'Come home', text: 'We’ll be waiting with your room ready and a guide to the city.' },
    ],
    reqTitle: 'Requirements',
    req: ['Valid ID or passport', 'Signed lodging agreement', 'First month paid in advance', 'Refundable deposit agreed in writing'],
    faqTitle: 'Long-stay questions',
    faq: [
      { q: 'Do I need a guarantor or co-signer?', a: 'No. We sign a lodging agreement with your details and a refundable deposit; we don’t ask for a guarantor, a co-signer or a rental background check.' },
      { q: 'Can I extend my stay?', a: 'Yes, subject to availability. Let us know at least 15 days in advance so we can hold your room.' },
      { q: 'What if I need to leave early?', a: 'Just give us 15 days’ written notice. The early departure terms are clearly set out in the agreement from the start.' },
      { q: 'Can I get an invoice in my company’s name?', a: 'Yes. We issue electronic invoices in the name of the person or company you specify.' },
      { q: 'When do I get my deposit back?', a: 'Within 5 business days after you check out, minus only damages or outstanding charges, if any.' },
    ],
    cta: 'Request my monthly proposal',
  },

  legal: {
    h1: 'Policies and house rules',
    lead: 'Clear rules for a peaceful stay. If you have any questions, just write to us.',
    updated: 'Last updated: {date}',
    toc: 'On this page',
    pendingData: '[information to be completed]',
    sections: [
      {
        id: 'privacidad',
        title: 'Privacy and data processing policy',
        html: `<p>This policy applies to the personal data collected by Camelot (hereinafter “Camelot”), a lodging establishment located in Armenia, Quindío, Colombia, in compliance with Law 1581 of 2012, Decree 1074 of 2015 and other personal data protection regulations.</p>
<h3>Data controller</h3>
<p>{businessName} · NIT/C.C. {nit} · Armenia, Quindío, Colombia · Email: {email} · WhatsApp: {phone}.</p>
<h3>What data we process</h3>
<ul><li>Identification and contact data: name, ID document or passport, nationality, phone number and email.</li><li>Booking data: dates, number of guests, room, payments and invoicing.</li><li>Data you voluntarily share with us, for example accessibility needs. If it is sensitive data, we only process it with your express authorization and in order to assist you.</li><li>Data of minors: only what is necessary for their registration, provided by their parents or legal representatives.</li></ul>
<h3>What we use it for</h3>
<ul><li>Managing your booking, your stay and our communication with you.</li><li>Complying with legal obligations: guest registration (Hotel Registration Card), reporting foreign guests to Migración Colombia (SIRE) and electronic invoicing with the DIAN.</li><li>The safety of our guests and the property.</li><li>Sending you news or offers, only if you authorize it; you may withdraw that authorization at any time.</li></ul>
<h3>Your rights</h3>
<p>You may access, update and correct your data; request proof of your authorization; be informed of how your data is used; revoke your authorization or request its deletion when there is no legal duty to retain it; access it free of charge; and file complaints with the Superintendence of Industry and Commerce (SIC).</p>
<h3>How to exercise them</h3>
<p>Write to us at {email} or via WhatsApp. We respond to inquiries within a maximum of 10 business days (extendable by 5 more) and to complaints within a maximum of 15 business days (extendable by 8 more), as provided in Law 1581 of 2012.</p>
<h3>Retention and security</h3>
<p>We keep your data for the duration of our relationship with you and for as long as tourism, accounting and tax regulations require. We apply reasonable security measures, and only the people who need it have access to it.</p>
<h3>Visitors from the European Union, the United Kingdom and Brazil</h3>
<p>If you reside there, we process your data on the basis of the performance of the lodging contract, compliance with legal obligations, our legitimate interest in security and, where applicable, your consent. You also have the rights of access, rectification, erasure, objection, restriction and portability (GDPR / UK GDPR / LGPD), and you may lodge a complaint with your data protection authority.</p>`,
      },
      {
        id: 'cookies',
        title: 'Cookies and privacy on this site',
        html: `<ul><li><strong>No tracking or advertising cookies.</strong> This site does not use third-party analytics or social media pixels.</li><li>We store only your preferences in your own browser (local storage): language, light or dark mode, currency and whether you have already seen the privacy notice. You can delete them from your browser.</li><li>The OpenStreetMap map only loads if you click “Load the map.”</li><li>When you write to us via WhatsApp or through platforms such as Airbnb, those companies’ policies also apply.</li><li>The site is hosted on GitHub Pages (GitHub, Inc., United States), which may log technical data such as your IP address for security reasons.</li></ul>`,
      },
      {
        id: 'terminos',
        title: 'Lodging terms',
        html: `<ul><li><strong>Lodging contract.</strong> A booking confirmed in writing constitutes a lodging contract governed by Colombian law (the Commercial Code and tourism regulations). The rates shown on this site are indicative until we confirm them in writing.</li><li><strong>Confirmation.</strong> Short and medium stays are confirmed with a {deposit}% deposit. Long stays are confirmed with the first month and a refundable deposit, under the signed lodging agreement.</li><li><strong>Registration.</strong> Every guest must present a valid ID (Colombian cédula or passport) upon arrival. Guest details are recorded on the Hotel Registration Card and, for foreign guests, reported to Migración Colombia.</li><li><strong>Minors.</strong> Minors may stay only with their parents or with an adult authorized in writing, presenting a birth certificate (registro civil) or another document proving the relationship.</li><li><strong>Occupancy.</strong> Each room has a maximum capacity. Visitors must be announced and registered; for security reasons, they may not stay overnight without registering as guests.</li><li><strong>Payments and invoicing.</strong> Prices are settled in Colombian pesos and include any applicable taxes. We issue electronic invoices. Non-resident foreigners may qualify for the VAT exemption provided for in the Colombian Tax Code (Estatuto Tributario) when the requirements are met.</li><li><strong>Care of the property.</strong> Guests are liable for any damage they cause to the room or common areas. We recommend not leaving valuables in plain sight.</li><li><strong>Right of admission.</strong> We may refuse or terminate a stay for security reasons or for a serious breach of these rules, never on discriminatory grounds.</li><li><strong>Platforms.</strong> If you book through Airbnb, Booking.com or another platform, their terms and cancellation policy also apply.</li><li><strong>Complaints and claims.</strong> Write to us and we will respond within the legal time limits. You may also contact the Superintendence of Industry and Commerce (SIC) under Law 1480 of 2011.</li></ul>`,
      },
      {
        id: 'cancelacion',
        title: 'Cancellation policy',
        html: `<table><thead><tr><th>Stay</th><th>Free cancellation</th><th>After that deadline</th></tr></thead><tbody><tr><td>Short (1–6 nights)</td><td>Up to 72 hours before arrival</td><td>The first night is charged</td></tr><tr><td>Medium (7–29 nights)</td><td>Up to 7 days before arrival</td><td>50% of the deposit is retained; with less than 48 hours’ notice, the full deposit</td></tr><tr><td>Long (30 nights or more)</td><td>Up to 14 days before arrival</td><td>50% of the deposit is retained</td></tr></tbody></table>
<ul><li><strong>No-shows</strong> without prior notice are treated as late cancellations.</li><li><strong>Early departure</strong> on short and medium stays: the nights used are charged at the rate corresponding to the actual length of stay. Long stays require 15 days’ written notice.</li><li><strong>Force majeure</strong> (road closures, medical emergencies, natural disasters): we reschedule at no cost within the following 6 months.</li><li><strong>Refunds</strong> are issued to the original payment method within 10 business days. International transfer fees are borne by the person requesting the transfer.</li></ul>`,
      },
      {
        id: 'normas',
        title: 'House rules',
        html: `<ul><li>Check-in from {checkin} and check-out by {checkout}.</li><li>Quiet hours from {quietFrom} to {quietTo}, out of respect for other guests and our neighbors.</li><li>No smoking or vaping inside the rooms or enclosed areas.</li><li>No parties, events or illegal substances.</li><li>Visitors must be announced and registered.</li><li>Pets only with prior authorization; service dogs are always welcome.</li><li>Help us save water and energy: switch off lights and appliances when you go out.</li><li>Help us recycle: sort your waste as indicated.</li></ul>`,
      },
      {
        id: 'escnna',
        title: 'Prevention of the sexual exploitation of children and adolescents',
        html: `<p><strong>Warning:</strong> pursuant to Article 17 of Law 679 of 2001, Camelot hereby informs its guests that the sexual exploitation and abuse of minors in Colombia are punishable under criminal and administrative law, in accordance with current legislation.</p>
<p>Camelot complies with Law 1336 of 2009 and the code of conduct against the commercial sexual exploitation of children and adolescents (ESCNNA). Minors are not admitted without their parents or an authorized adult. Report any suspicion: ICBF Line 141, National Police Line 123, or at <a href="https://www.teprotejo.org" rel="noopener" target="_blank">teprotejo.org</a>.</p>`,
      },
      {
        id: 'accesibilidad',
        title: 'Accessibility',
        html: `<p>This site aims to meet the WCAG 2.2 Level AA guidelines: adequate contrast, keyboard navigation, alternative text and respect for reduced-motion preferences.</p><p>If you have mobility or other needs, let us know before booking: we’ll give you accurate information about access, stairs and the most suitable room.</p>`,
      },
      {
        id: 'creditos',
        title: 'Image credits',
        html: `<p>The photographs of places in Quindío come from Wikimedia Commons and are used under their free licenses; they have been cropped and resized. Room photos are illustrative until we publish our own photographs.</p>{credits}`,
      },
    ],
  },

  merlin: {
    name: 'Merlin',
    role: 'Camelot’s digital concierge',
    open: 'Open Merlin, the concierge',
    close: 'Close the concierge',
    greeting: 'Welcome to Camelot! I’m Merlin. Ask me anything about your stay, or choose a topic.',
    placeholder: 'Type your question…',
    send: 'Send',
    fallback: 'That question deserves a flesh-and-blood host. Shall I put you in touch?',
    toHost: 'Talk to the host',
    more: 'Other topics',
    topics: [
      { id: 'rates', label: 'Rates', kw: ['price', 'prices', 'rate', 'rates', 'cost', 'much', 'night', 'cheap', 'budget'], a: 'The rate depends on the room and how many nights you stay: from 7 nights there’s a {mediumPct}% discount, and from 30 nights a monthly rate. Use the calculator to see your total instantly.', action: 'calc' },
      { id: 'long', label: 'Long stay', kw: ['month', 'months', 'monthly', 'long', 'longterm', 'season', 'live', 'guarantor', 'rent'], a: 'For 30 nights or more we offer a monthly rate with utilities, Wi-Fi and housekeeping included, with no guarantor or co-signer. We sign a simple written agreement.', action: 'long' },
      { id: 'checkin', label: 'Check-in & check-out', kw: ['arrival', 'checkin', 'check-in', 'checkout', 'check-out', 'time', 'hour', 'early', 'late'], a: 'Check-in is from {checkin} and check-out is by {checkout}. If you’re arriving earlier or leaving later, let us know and we’ll accommodate you based on availability.' },
      { id: 'arrive', label: 'Getting here', kw: ['airport', 'terminal', 'bus', 'taxi', 'uber', 'plane', 'flight', 'transport', 'directions'], a: 'From El Edén Airport (AXM) it’s about 25 minutes by taxi; from the Terminal de Transportes (bus station), about 10. We’ll send you the exact location when you book.' },
      { id: 'where', label: 'Location', kw: ['where', 'location', 'address', 'downtown', 'center', 'neighborhood', 'area', 'safe', 'safety'], a: 'We’re in downtown Armenia, a few blocks from Plaza de Bolívar, banks, shops and transportation to all of Quindío.' },
      { id: 'pay', label: 'Payments & invoices', kw: ['payment', 'pay', 'card', 'transfer', 'cash', 'invoice', 'receipt', 'vat', 'tax', 'dollars'], a: 'We confirm payment methods when you book (bank transfer, digital payments or cash). We issue electronic invoices, including in company names.' },
      { id: 'pets', label: 'Pets', kw: ['pet', 'pets', 'dog', 'dogs', 'cat', 'puppy', 'animal'], a: 'Check with us before booking and we’ll explain the conditions. Service dogs are always welcome.' },
      { id: 'parking', label: 'Parking', kw: ['parking', 'car', 'cars', 'motorcycle', 'motorbike', 'garage', 'vehicle'], a: 'Ask us about availability; there are public parking lots a few blocks away downtown.' },
      { id: 'wifi', label: 'Wi-Fi & work', kw: ['wifi', 'wi-fi', 'internet', 'work', 'remote', 'video', 'zoom', 'signal', 'connection'], a: 'Wi-Fi is free for all guests. If you work on video calls, ask us for the room with the best signal.' },
      { id: 'cancel', label: 'Cancellation', kw: ['cancel', 'cancellation', 'canceling', 'refund', 'refunds', 'change', 'reschedule', 'modify'], a: 'Short stays: free up to 72 h before. Medium stays: up to 7 days before. Long stays: up to 14 days before. Full details are in our policies.', action: 'legal' },
      { id: 'todo', label: 'Things to do', kw: ['tourism', 'cocora', 'salento', 'filandia', 'park', 'tour', 'visit', 'coffee', 'sightseeing', 'attractions'], a: 'Cocora Valley, Salento, Filandia, Parque del Café, PANACA, the Botanical Garden… all less than an hour away. Check out our guide with travel times from Camelot.', action: 'guide' },
      { id: 'access', label: 'Accessibility', kw: ['accessible', 'accessibility', 'wheelchair', 'stairs', 'steps', 'mobility', 'disability', 'elevator'], a: 'Tell us what you need before booking and we’ll give you accurate information about access, stairs and the most suitable room.' },
    ],
    actions: { calc: 'Open the calculator', long: 'See long stays', legal: 'See policies', guide: 'Open the guide' },
    waMsg: 'Hi Camelot! I’m writing from your website and I have a question:',
  },

  toasts: {
    langSuggest: 'This page is also available in English.',
    switchLang: 'Switch',
    dismiss: 'Dismiss',
    privacy: 'This site doesn’t use tracking cookies. We only store your preferences in your browser.',
    privacyOk: 'Got it',
    privacyMore: 'Learn more',
    pendingChannel: 'This booking channel will be up and running very soon. In the meantime, please use the contact form.',
  },

  notFound: {
    title: 'This castle door doesn’t exist',
    text: 'The page you’re looking for got lost in the forest. Head back home or check out the guide.',
    cta: 'Back to home',
  },
};
