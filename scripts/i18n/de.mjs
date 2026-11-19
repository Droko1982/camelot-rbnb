// Textos en ALEMÁN. Misma estructura que es.mjs (verificar con: node scripts/check-i18n.mjs de).
// Marcadores entre llaves, ej. {checkin}, se reemplazan al construir: NO traducirlos.
// Las cadenas pueden llevar HTML simple (<em>, <strong>, <a>, <ul>, <li>, <p>, <br>).

export default {
  code: 'de',
  locale: 'de_DE',
  name: 'Deutsch',
  short: 'DE',

  slugs: { guide: 'reisefuehrer-armenia-quindio', long: 'langzeitaufenthalte', legal: 'richtlinien' },

  seo: {
    siteName: 'Camelot · Unterkunft in Armenia, Quindío',
    home: {
      title: 'Camelot | Hotel & Unterkunft im Zentrum von Armenia, Kolumbien',
      description: 'Private Hotelzimmer mit eigenem Bad und WLAN im Zentrum von Armenia, Quindío – Kolumbiens Kaffeeregion. Pro Nacht, Woche oder Monat. Direkt buchen.',
    },
    guide: {
      title: 'Armenia & Quindío: Reiseführer Kaffeeregion Kolumbien | Camelot',
      description: 'Reiseführer für Armenia und Kolumbiens Kaffeeregion: Valle de Cocora, Salento, Filandia, Parque del Café, PANACA und mehr – mit Fahrzeiten ab dem Zentrum.',
    },
    long: {
      title: 'Möbliertes Zimmer monatlich in Armenia, Quindío | Camelot',
      description: 'Langzeitaufenthalt im Zentrum von Armenia: möbliertes Privatzimmer, Nebenkosten und WLAN inklusive, ohne Bürgen. Ideal für Arbeit, Studium oder Remote Work.',
    },
    legal: {
      title: 'Richtlinien, Datenschutz und Hausordnung | Camelot Armenia',
      description: 'Datenschutzerklärung (Gesetz 1581 von 2012), Beherbergungsbedingungen, Stornierung, Hausordnung und ESCNNA-Prävention von Camelot in Armenia, Quindío.',
    },
    notFound: { title: 'Seite nicht gefunden | Camelot', description: 'Diese Seite existiert leider nicht. Kehren Sie zur Startseite von Camelot zurück, Ihrer Unterkunft im Zentrum von Armenia in Kolumbiens Kaffeeregion.' },
    keywords: 'Hotel Armenia Kolumbien, Unterkunft Armenia Quindío, Hotel Zentrum Armenia, Zimmer pro Nacht Armenia, möbliertes Zimmer monatlich Armenia, Langzeitaufenthalt Armenia Kolumbien, Unterkunft Kaffeeregion Kolumbien, Übernachtung Eje Cafetero, wo übernachten in Armenia Kolumbien',
  },

  nav: {
    home: 'Start',
    stays: 'Aufenthalte',
    rooms: 'Zimmer',
    legend: 'Erlebnis',
    calc: 'Preise',
    location: 'Lage',
    guide: 'Quindío-Reiseführer',
    long: 'Langzeitaufenthalte',
    faq: 'Fragen',
    contact: 'Kontakt',
    book: 'Buchen',
    menu: 'Menü',
    close: 'Schließen',
    skip: 'Zum Inhalt springen',
    langLabel: 'Sprache',
    themeLabel: 'Zwischen hellem und dunklem Modus wechseln',
    backTop: 'Nach oben',
    breadcrumbHome: 'Start',
  },

  hero: {
    eyebrow: 'Unterkunft im Zentrum von Armenia · Quindío, Kolumbien',
    title: 'Ihre Burg im <em>Herzen der Kaffeeregion</em>',
    lead: 'Private Zimmer mit Hotelkomfort – für eine Nacht, eine Saison oder mehrere Monate. Nur wenige Gehminuten von der Plaza de Bolívar entfernt, mit dem ganzen Quindío vor der Tür.',
    ctaPrimary: 'Meinen Aufenthalt berechnen',
    ctaSecondary: 'Zimmer ansehen',
    chips: ['{rooms} private Zimmer', 'Eigenes Bad', 'WLAN', 'Preise pro Nacht, Woche oder Monat'],
    slides: [
      'Luftaufnahme der Plaza de Bolívar im Zentrum von Armenia, Quindío',
      'Wachspalmen im Valle de Cocora (Cocora-Tal), Salento, Quindío',
      'Bunte Fassaden in Filandia, Quindío',
    ],
    scroll: 'Camelot entdecken',
  },

  stays: {
    eyebrow: 'Wählen Sie Ihren Aufenthalt',
    title: 'Eine Nacht, eine Saison <em>oder eine ganze Regentschaft</em>',
    lead: 'Dasselbe Zimmer, drei Arten zu bleiben. Je länger Ihr Aufenthalt, desto besser der Preis.',
    items: {
      short: {
        tag: 'Kurzaufenthalt',
        name: 'Rast des Reisenden',
        range: '1 bis 6 Nächte',
        desc: 'Für Urlaubs- und Geschäftsreisen oder einen Zwischenstopp in der Kaffeeregion. Ankommen, ausruhen und auf Entdeckungstour gehen.',
        points: ['Preis pro Nacht', 'Ankunft per WhatsApp abgestimmt', 'Tipps für Ihre Touren durch das Quindío'],
      },
      medium: {
        tag: 'Mittlerer Aufenthalt',
        name: 'Eine Saison bei Hofe',
        range: '7 bis 29 Nächte',
        desc: 'Für Projekte, Kurse, lange Ferien oder um die Region ganz in Ruhe kennenzulernen.',
        points: ['{mediumPct} % Rabatt auf den Übernachtungspreis', 'Geplante Reinigung und regelmäßiger Bettwäschewechsel', 'Vorschlag für eine Wochenroute'],
      },
      long: {
        tag: 'Langzeitaufenthalt',
        name: 'Residenz im Königreich',
        range: 'Ab 30 Nächten',
        desc: 'Ihr fester Stützpunkt in Armenia: Nebenkosten inklusive, ohne Bürgen und mit einer klaren schriftlichen Vereinbarung.',
        points: ['Monatspreis inklusive Nebenkosten und WLAN', 'Ohne Bürgen oder Mitschuldner', 'Rechnung für Ihr Unternehmen'],
      },
    },
    cta: 'Preis berechnen',
    more: 'Alles über Langzeitaufenthalte',
  },

  rooms: {
    eyebrow: 'Die Zimmer',
    title: 'Wählen Sie Ihr <em>Gemach</em>',
    lead: 'Private Zimmer mit eigenem Bad, Bettwäsche und Handtüchern. Sagen Sie uns, wie viele Sie sind, und wir empfehlen Ihnen das passende.',
    from: 'Ab',
    perNight: 'Nacht',
    perMonth: 'Monat',
    guests: 'Bis zu {n} Gäste',
    guest: '1 Gast',
    bedDouble: '{n} Doppelbett',
    bedsDouble: '{n} Doppelbetten',
    bedSingle: '{n} Einzelbett',
    bedsSingle: '{n} Einzelbetten',
    privateBath: 'Eigenes Bad',
    illustrative: 'Beispielbild',
    indicative: 'Richtpreis',
    ask: 'Dieses Zimmer anfragen',
    items: {
      escudero: { name: 'Knappe', type: 'Einzelzimmer', desc: 'Kompakt und ruhig – ideal für Alleinreisende, ob beruflich oder privat unterwegs.', alt: 'Einzelzimmer mit Doppelbett und Nachttischlampen' },
      caballero: { name: 'Ritter', type: 'Doppelzimmer', desc: 'Ein Doppelbett und Platz für zwei. Der Favorit von Paaren und Langzeitgästen.', alt: 'Doppelzimmer mit großem Bett und warmem Licht' },
      hermandad: { name: 'Bruderschaft', type: 'Dreibettzimmer', desc: 'Ein Doppel- und ein Einzelbett für Freunde, Kollegen oder die kleine Familie.', alt: 'Zimmer mit zwei Betten und Nachttisch' },
      mesa: { name: 'Tafelrunde', type: 'Familienzimmer', desc: 'Für die ganze Familie oder die Reisegruppe: mehrere Betten in einem Raum.', alt: 'Familienzimmer mit mehreren Betten' },
    },
  },

  legend: {
    eyebrow: 'Die Legende von Camelot',
    title: 'Fünf Versprechen <em>des Hofes</em>',
    lead: 'Wir haben das Beste aus der Artussage genommen und daraus Gastfreundschaft im Kaffeeland gemacht.',
    items: [
      { key: 'excalibur', name: 'Excalibur', title: 'Ganz einfach ankommen', desc: 'Kein Schwert im Stein: Vor Ihrer Ankunft senden wir Ihnen per WhatsApp den Standort, die Zeiten und eine Schritt-für-Schritt-Anleitung.' },
      { key: 'grial', name: 'Der Gral', title: 'Kaffee mit Herkunft', desc: 'Der wahre Gral des Quindío wird in der Tasse serviert. Wir verraten Ihnen, wo Sie in der Nähe von Camelot den besten Spezialitätenkaffee trinken.' },
      { key: 'mesa', name: 'Tafelrunde', title: 'Auf Augenhöhe', desc: 'Klare Preise, ohne Kleingedrucktes und ohne böse Überraschungen. Was in unserem Angebot steht, ist das, was Sie zahlen.' },
      { key: 'avalon', name: 'Avalon', title: 'Echte Erholung', desc: 'Frische Bettwäsche, Ruhe in der Nacht und auf Wunsch ein innen liegendes Zimmer, fernab vom Straßenlärm.' },
      { key: 'merlin', name: 'Merlin', title: 'Ein Concierge, der sich auskennt', desc: 'Merlin, unser Assistent, antwortet sofort in fünf Sprachen – und hinter ihm steht ein echter Gastgeber, der jeden Winkel des Quindío kennt.' },
    ],
  },

  amenities: {
    eyebrow: 'Inklusive',
    title: 'Alles, was Sie brauchen, <em>nichts Überflüssiges</em>',
    items: {
      bath: 'Eigenes Bad',
      wifi: 'Kostenloses WLAN',
      tv: 'Fernseher',
      linen: 'Bettwäsche und Handtücher',
      hotwater: 'Warmwasser',
      cleaning: 'Zimmerreinigung',
      coffee: 'Willkommenskaffee',
      desk: 'Arbeitsecke',
      laundry: 'Wäscheservice auf Anfrage',
      luggage: 'Gepäckaufbewahrung',
      concierge: 'Lokaler Guide und Concierge',
      invoice: 'Elektronische Rechnung',
    },
  },

  calc: {
    eyebrow: 'Berechnen Sie Ihren Aufenthalt',
    title: 'Ihr Preis <em>in Sekunden</em>',
    lead: 'Wählen Sie Reisedaten und Zimmer. Wir erkennen die Art des Aufenthalts und berücksichtigen den Rabatt automatisch.',
    checkin: 'Anreise',
    checkout: 'Abreise',
    guests: 'Gäste',
    room: 'Zimmer',
    currency: 'Währung',
    nights: '{n} Nächte',
    night: '1 Nacht',
    tierShort: 'Kurzaufenthalt',
    tierMedium: 'Mittlerer Aufenthalt',
    tierLong: 'Langzeitaufenthalt',
    base: 'Grundpreis',
    discount: 'Rabatt nach Aufenthaltsdauer',
    direct: 'Rabatt für Direktbuchung',
    total: 'Geschätzter Gesamtpreis',
    avg: 'Durchschnitt pro Nacht',
    monthly: 'Entspricht {amount} pro Monat',
    deposit: 'Anzahlung zur Bestätigung ({pct} %)',
    depositLong: 'Bei Langzeitaufenthalten: erster Monat und rückzahlbare Kaution gemäß Vereinbarung.',
    approx: 'Beträge in {cur} sind Näherungswerte; bezahlt wird in kolumbianischen Pesos.',
    indicative: 'Richtpreis, vorbehaltlich Verfügbarkeit. Den endgültigen Preis bestätigen wir Ihnen schriftlich.',
    send: 'Per WhatsApp anfragen',
    sendMail: 'Per E-Mail anfragen',
    invalid: 'Bitte wählen Sie ein Abreisedatum nach dem Anreisedatum.',
    capacity: 'Maximale Belegung dieses Zimmers: {n}. Wir empfehlen Ihnen das Zimmer {room} oder zwei Zimmer.',
    pickDates: 'Wählen Sie Ihre Reisedaten, um den Preis zu sehen.',
    waIntro: 'Hallo Camelot, ich möchte gern die Verfügbarkeit anfragen:',
    waLines: ['Anreise: {in}', 'Abreise: {out} ({nights})', 'Gäste: {guests}', 'Zimmer: {room}', 'Aufenthalt: {tier}', 'Geschätzter Gesamtpreis laut Website: {total}'],
  },

  longBand: {
    eyebrow: 'Langzeitaufenthalte',
    title: 'Sie kommen <em>für Monate</em> nach Armenia?',
    lead: 'Arbeit, medizinische Behandlung, Studium oder Remote Work: Wohnen Sie im Zentrum von Armenia zu einem Monatspreis inklusive Nebenkosten, WLAN und Reinigung. Ohne Bürgen, ohne Mitschuldner, ohne Mietformalitäten.',
    points: ['Nebenkosten und WLAN inklusive', 'Klare schriftliche Beherbergungsvereinbarung', 'Rechnung auf den Namen Ihres Unternehmens'],
    cta: 'Langzeitaufenthalte ansehen',
  },

  location: {
    eyebrow: 'Lage',
    title: 'Mitten im Zentrum, <em>alles in Gehweite</em>',
    lead: 'Camelot liegt im Zentrum von Armenia, dem Geschäfts- und Bankenviertel der Stadt, nur wenige Gehminuten von der Plaza de Bolívar entfernt. Von hier fahren Busse und Taxis in das ganze Quindío.',
    items: [
      { label: 'Plaza de Bolívar und Kathedrale', value: '≈ 8 Min. zu Fuß' },
      { label: 'Calle Real (Fußgängerzone Carrera 14)', value: '≈ 5 Min. zu Fuß' },
      { label: 'Terminal de Transportes (Busbahnhof)', value: '≈ 10 Min. mit dem Auto' },
      { label: 'Internationaler Flughafen El Edén (AXM)', value: '≈ 25 Min. mit dem Auto' },
      { label: 'Parque del Café', value: '≈ 30 Min. mit dem Auto' },
      { label: 'Salento und Valle de Cocora', value: '≈ 55 Min. mit dem Auto' },
    ],
    mapCta: 'Karte laden',
    mapNote: 'Die Karte stammt von OpenStreetMap und wird nur auf Ihren Wunsch geladen – zum Schutz Ihrer Privatsphäre.',
    mapTitle: 'Karte des Zentrums von Armenia, Quindío',
    exact: 'Den genauen Standort senden wir Ihnen mit der Buchungsbestätigung.',
    directions: 'Route planen',
  },

  guideTeaser: {
    eyebrow: 'Die Karte des Königreichs',
    title: 'Das Quindío <em>direkt vor Ihrer Tür</em>',
    lead: 'Kaffeeberge, Wachspalmen und bunte Dörfer – keine Stunde von Ihrem Zimmer entfernt.',
    cta: 'Den ganzen Reiseführer öffnen',
  },

  rules: {
    eyebrow: 'Die Regeln der Tafelrunde',
    title: 'Ritterliches <em>Miteinander</em>',
    lead: 'Wenige, klare Regeln, damit alle gut zur Ruhe kommen.',
    items: [
      'Check-in ab {checkin} Uhr, Check-out bis {checkout} Uhr. Früher Check-in oder später Check-out je nach Verfügbarkeit.',
      'Nachtruhe von {quietFrom} bis {quietTo} Uhr.',
      'Rauchen und Dampfen sind in den Zimmern nicht gestattet.',
      'Jeder Gast muss sich mit einem Ausweisdokument registrieren, wie es das kolumbianische Gesetz vorschreibt.',
      'Besuch wird angemeldet und registriert; Partys und Veranstaltungen sind nicht erlaubt.',
      'Minderjährige nur in Begleitung ihrer Eltern oder mit schriftlicher Genehmigung.',
    ],
    cta: 'Vollständige Hausordnung und Richtlinien lesen',
  },

  faq: {
    eyebrow: 'Häufige Fragen',
    title: 'Was wir <em>am häufigsten gefragt werden</em>',
    items: [
      { q: 'Wo liegt Camelot?', a: 'Im Zentrum von Armenia, Quindío, nur wenige Gehminuten von der Plaza de Bolívar, der Calle Real und dem Bankenviertel entfernt. Den genauen Standort und die Wegbeschreibung senden wir Ihnen mit der Buchungsbestätigung.' },
      { q: 'Was unterscheidet einen kurzen, mittleren und langen Aufenthalt?', a: 'Es ist dasselbe Zimmer zu unterschiedlichen Preisen: Kurzaufenthalte (1 bis 6 Nächte) werden pro Nacht berechnet, mittlere Aufenthalte (7 bis 29 Nächte) erhalten {mediumPct} % Rabatt, und Langzeitaufenthalte (ab 30 Nächten) haben einen Monatspreis inklusive Nebenkosten und eine schriftliche Vereinbarung.' },
      { q: 'Wann sind Check-in und Check-out?', a: 'Check-in ist ab {checkin} Uhr, Check-out bis {checkout} Uhr. Wenn Sie früher ankommen oder später abreisen möchten, schreiben Sie uns: Je nach Verfügbarkeit finden wir eine Lösung.' },
      { q: 'Haben die Zimmer ein eigenes Bad?', a: 'Ja. Alle Zimmer sind privat und verfügen über ein eigenes Bad, Bettwäsche, Handtücher und WLAN.' },
      { q: 'Eignet sich das WLAN zum Arbeiten oder Lernen?', a: 'Ja, das WLAN ist für alle Gäste kostenlos. Wenn Ihre Arbeit von Videocalls abhängt, fragen Sie uns nach dem Zimmer mit dem besten Empfang.' },
      { q: 'Wie komme ich vom Flughafen oder vom Busbahnhof zu Ihnen?', a: 'Vom Internationalen Flughafen El Edén (AXM) sind es etwa 25 Minuten mit dem Taxi, vom Busbahnhof Terminal de Transportes de Armenia etwa 10 Minuten. Die Wegbeschreibung erhalten Sie bei der Buchung.' },
      { q: 'Welche Zahlungsmittel akzeptieren Sie?', a: 'Die verfügbaren Zahlungsmittel bestätigen wir bei der Buchung (Überweisung, digitale Zahlung und Bargeld). Abgerechnet wird in kolumbianischen Pesos; Beträge in US-Dollar und Euro zeigen wir als Näherungswerte zur Orientierung an.' },
      { q: 'Stellen Sie Rechnungen aus?', a: 'Ja. Fordern Sie die Rechnung bei der Buchung mit den Daten der Person oder des Unternehmens an. Wenn Sie als Ausländer nicht in Kolumbien ansässig sind, fragen Sie uns nach der im kolumbianischen Steuerrecht vorgesehenen Befreiung von der Mehrwertsteuer (IVA) auf Übernachtungen.' },
      { q: 'Sind Haustiere erlaubt?', a: 'Bitte fragen Sie vor der Buchung bei uns nach. Assistenzhunde sind jederzeit willkommen.' },
      { q: 'Gibt es Parkplätze?', a: 'Fragen Sie uns nach der Verfügbarkeit. Im Zentrum gibt es öffentliche Parkplätze nur wenige Straßen entfernt.' },
      { q: 'Wie lauten die Stornierungsbedingungen?', a: 'Kurzaufenthalte: kostenlos bis 72 Stunden vor Anreise. Mittlere Aufenthalte: bis 7 Tage vorher. Langzeitaufenthalte: bis 14 Tage vorher. Alle Einzelheiten finden Sie in unseren Richtlinien.' },
      { q: 'Ist das Zentrum von Armenia sicher?', a: 'Es ist das belebteste Viertel der Stadt, mit Geschäften, Banken und Verkehrsanbindung. Wie in jedem Stadtzentrum empfehlen wir nachts die üblichen Vorsichtsmaßnahmen; bei Ihrer Ankunft geben wir Ihnen gern ein paar Tipps.' },
    ],
  },

  contact: {
    eyebrow: 'Kontakt und Buchung',
    title: 'Sprechen wir über <em>Ihren Aufenthalt</em>',
    lead: 'Schreiben Sie uns, und wir antworten Ihnen mit Verfügbarkeit und Endpreis. Wer direkt bucht, erhält immer den besten Preis.',
    name: 'Name',
    email: 'E-Mail',
    phone: 'WhatsApp oder Telefon',
    dates: 'Ungefähre Reisedaten',
    guests: 'Gäste',
    stay: 'Art des Aufenthalts',
    message: 'Nachricht',
    messagePh: 'Erzählen Sie uns, was Sie brauchen: Reisegrund, Ankunftszeit, besondere Wünsche …',
    consent: 'Ich willige in die Verarbeitung meiner Daten zur Beantwortung meiner Anfrage gemäß der <a href="{legalUrl}#privacidad">Datenschutzerklärung</a> ein.',
    submit: 'Anfrage senden',
    sending: 'Wird gesendet …',
    success: 'Vielen Dank! Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen.',
    error: 'Das Formular konnte nicht gesendet werden. Bitte versuchen Sie es per WhatsApp oder E-Mail.',
    required: 'Bitte füllen Sie die Pflichtfelder aus und akzeptieren Sie die Datenschutzerklärung.',
    channelPending: 'Wir richten gerade unsere Buchungskanäle ein. Schon bald können Sie uns hier schreiben.',
    whatsapp: 'WhatsApp',
    mail: 'E-Mail',
    airbnb: 'Auf Airbnb ansehen',
    booking: 'Auf Booking ansehen',
    response: 'Wir antworten Ihnen so schnell wie möglich mit Verfügbarkeit und Endpreis.',
  },

  footer: {
    tagline: 'Unterkunft im Zentrum von Armenia, Quindío. Kurze, mittlere und lange Aufenthalte.',
    explore: 'Entdecken',
    legalTitle: 'Richtlinien',
    contactTitle: 'Kontakt',
    rnt: 'RNT',
    rntPending: 'RNT in Bearbeitung',
    escnna: 'Camelot lehnt die sexuelle Ausbeutung und den sexuellen Missbrauch von Kindern und Jugendlichen entschieden ab. Gesetz 679 von 2001 und Gesetz 1336 von 2009.',
    rights: 'Alle Rechte vorbehalten.',
    madeBy: 'Konzipiert und entwickelt von Dr. Mauricio Rodríguez Herrera.',
    links: { privacy: 'Datenschutz', terms: 'Beherbergungsbedingungen', cancel: 'Stornierung', rules: 'Hausordnung', escnna: 'ESCNNA-Prävention', a11y: 'Barrierefreiheit', credits: 'Bildnachweise' },
  },

  places: {
    plaza: { name: 'Plaza de Bolívar und Kathedrale', desc: 'Das Herz von Armenia: die dreieckige Kathedrale, das Monumento al Esfuerzo und das lebendige Treiben im Zentrum – nur wenige Gehminuten von Camelot entfernt.', tip: 'Schlendern Sie bei Sonnenuntergang über den Platz und folgen Sie der Calle Real (Carrera 14) bis zum Parque Sucre.' },
    parquevida: { name: 'Parque de la Vida', desc: 'Die grüne Lunge der Stadt: Seen, Wasserfälle, Brücken und Wege durch Haine aus Guadua-Bambus.', tip: 'Ideal für einen Spaziergang oder eine Joggingrunde am Morgen.' },
    museo: { name: 'Museo del Oro Quimbaya', desc: 'Goldschmiedekunst und Keramik des Quimbaya-Volkes in einem Backsteinbau des Architekten Rogelio Salmona.', tip: 'Prüfen Sie vor dem Besuch die offiziellen Öffnungszeiten; der Eintritt ist meist frei.' },
    botanico: { name: 'Jardín Botánico und Mariposario', desc: 'In Calarcá: Andenwald, Hängebrücken und ein Schmetterlingshaus in Form eines Schmetterlings.', tip: 'Kommen Sie früh: In der Morgensonne sind die Schmetterlinge am aktivsten.' },
    parquecafe: { name: 'Parque del Café', desc: 'Themenpark in Montenegro mit Fahrgeschäften, Kaffeekultur und Shows.', tip: 'Geöffnet je nach Saison und an Wochenenden; bitte den offiziellen Kalender prüfen.' },
    panaca: { name: 'PANACA', desc: 'Landwirtschafts-Erlebnispark in Quimbaya, in dem Sie das Landleben, seine Tiere und Traditionen kennenlernen.', tip: 'Perfekt mit Kindern; planen Sie einen ganzen Tag ein.' },
    cocora: { name: 'Salento und Valle de Cocora', desc: 'Das farbenfrohste Dorf des Quindío und das Tal der Wachspalme, des Nationalbaums Kolumbiens.', tip: 'Vom Hauptplatz in Salento fahren Willys-Jeeps ins Valle de Cocora. Denken Sie an Jacke und feste Wanderschuhe.' },
    filandia: { name: 'Filandia', desc: 'Gassen mit Häusern in Bahareque-Bauweise, Flechtkunst aus Bejuco-Lianen und ein Aussichtsturm mit Blick über drei Departamentos.', tip: 'Bleiben Sie bis zum Sonnenuntergang und genießen Sie einen Kaffee rund um den Hauptplatz.' },
  },

  guide: {
    h1: 'Reiseführer für Armenia und das Quindío',
    lead: 'Alles, was Sie von Camelot aus unternehmen können: vom Zentrum Armenias bis zu den Dörfern und Tälern der Kaffeekulturlandschaft.',
    introTitle: 'Armenia, die „Wunderstadt“',
    intro: [
      'Armenia ist die Hauptstadt des Departamento Quindío und eines der Tore zur Kaffeekulturlandschaft Kolumbiens (Paisaje Cultural Cafetero), die 2011 von der UNESCO zum Weltkulturerbe erklärt wurde. Die Stadt liegt auf rund 1.480 Metern über dem Meeresspiegel und genießt das ganze Jahr über ein mildes Klima.',
      'Man nennt sie die „Ciudad Milagro“, die Wunderstadt, wegen der Art, wie sie nach dem Erdbeben von 1999 wiederaufgebaut wurde. Heute ist sie eine freundliche, grüne und gut angebundene Stadt, von der aus Sie fast alle Sehenswürdigkeiten des Departamentos in weniger als einer Stunde erreichen.',
    ],
    gettingTitle: 'Anreise',
    getting: [
      { title: 'Mit dem Flugzeug', text: 'Der Internationale Flughafen El Edén (AXM) liegt etwa 25 Taximinuten vom Zentrum entfernt und bietet tägliche Flüge aus Bogotá und anderen Städten. Der Flughafen von Pereira (PEI) ist rund eine Stunde entfernt.' },
      { title: 'Mit dem Bus', text: 'Am Busbahnhof Terminal de Transportes de Armenia kommen Busse aus Bogotá, Medellín, Cali und Pereira an; von dort fahren regelmäßig Busse nach Salento, Filandia, Montenegro und Calarcá.' },
      { title: 'Mit dem Auto', text: 'Je nach Verkehr und Wetter liegt Armenia etwa dreieinhalb Stunden von Cali, rund 6 Stunden von Medellín und 6 bis 8 Stunden von Bogotá entfernt. Pereira erreichen Sie in etwa einer Stunde.' },
    ],
    placesTitle: 'Was Sie rund um Camelot unternehmen können',
    placesLead: 'Ungefähre Zeiten ab dem Zentrum von Armenia. Bitte prüfen Sie vor dem Besuch Öffnungszeiten und Preise bei den offiziellen Quellen.',
    walk: 'zu Fuß',
    car: 'mit dem Auto',
    foodTitle: 'Was Sie probieren sollten',
    food: [
      { name: 'Spezialitätenkaffee', desc: 'Sie sind im Kaffeeland: Bestellen Sie einen Filterkaffee und fragen Sie nach der Herkunft der Bohnen.' },
      { name: 'Forelle', desc: 'Typisch für Salento, mit Knoblauch oder vom Grill, dazu knuspriger Patacón aus Kochbanane.' },
      { name: 'Bandeja paisa und Bohnen', desc: 'Für Wandertage: Bohnen, Reis, Chicharrón, Arepa und Avocado.' },
      { name: 'Tropische Früchte', desc: 'Lulo, Maracuja, Granadilla, Guanábana: als frischer Saft oder direkt vom Markt.' },
    ],
    weekTitle: 'Ihre Woche im Königreich',
    weekLead: 'Ein Routenvorschlag für alle, die sieben Nächte oder länger bleiben.',
    week: [
      { day: 'Tag 1', title: 'Das Zentrum', text: 'Plaza de Bolívar, Kathedrale, Calle Real und ein typisches Mittagessen.' },
      { day: 'Tag 2', title: 'Parque del Café', text: 'Ein ganzer Tag voller Kaffeekultur und Fahrgeschäfte in Montenegro.' },
      { day: 'Tag 3', title: 'Salento und Cocora', text: 'Mit dem Willys-Jeep ins Tal, Wanderung zwischen Wachspalmen und Forelle in Salento.' },
      { day: 'Tag 4', title: 'Filandia', text: 'Kunsthandwerk, Aussichtsturm und Sonnenuntergang in einem der schönsten Dörfer des Landes.' },
      { day: 'Tag 5', title: 'Jardín Botánico und Kaffeefinca', text: 'Schmetterlingshaus in Calarcá und Rundgang über eine Finca, auf dem Sie den Kaffee von der Bohne bis zur Tasse erleben.' },
      { day: 'Tag 6', title: 'PANACA', text: 'Kolumbianisches Landleben hautnah – ideal, wenn Sie mit Kindern reisen.' },
      { day: 'Tag 7', title: 'Erholung', text: 'Parque de la Vida, Museo del Oro Quimbaya und ein guter Kaffee zum Ausklang der Woche.' },
    ],
    tipsTitle: 'Praktische Tipps',
    tips: [
      { title: 'Klima', text: 'Mild, mit sonnigen Vormittagen und Regen am Nachmittag. Die regenreichsten Zeiten sind meist April–Mai und Oktober–November: Packen Sie eine leichte Jacke und einen Regenschirm ein.' },
      { title: 'Geld', text: 'Im Zentrum gibt es Banken und Geldautomaten in wenigen Gehminuten. Nehmen Sie Bargeld für die Dörfer, die Willys-Jeeps und kleine Läden mit.' },
      { title: 'Transport', text: 'Taxis sind günstig; bestellen Sie eines per App oder an der Rezeption. In die Dörfer fahren vom Busbahnhof häufig und sicher Busse.' },
      { title: 'Notfälle', text: 'Einheitliche Notrufnummer in Kolumbien: 123. Wenn Sie einen Arzt brauchen, nennen wir Ihnen die nächstgelegene Klinik.' },
    ],
    cta: 'Buchen Sie Ihren Stützpunkt in Armenia',
  },

  long: {
    h1: 'Langzeitaufenthalte in Armenia: Ihr Zimmer für Monate',
    lead: 'Ein möbliertes Privatzimmer im Zentrum von Armenia, inklusive Nebenkosten, WLAN und Reinigung. Ohne Bürgen, ohne Mitschuldner und mit einer klaren schriftlichen Vereinbarung.',
    profilesTitle: 'Für wen ist das ideal?',
    profiles: [
      { title: 'Arbeit und Dienstreisen', text: 'Fachkräfte, Techniker und Auftragnehmer, die für ein Projekt oder eine Baustelle nach Armenia kommen.' },
      { title: 'Gesundheit', text: 'Patientinnen, Patienten und Begleitpersonen während einer Behandlung oder Genesung in den Kliniken der Stadt.' },
      { title: 'Studium', text: 'Studierende, Praktikanten und Forschende der Universitäten im Quindío oder Teilnehmende von Spanischkursen.' },
      { title: 'Remote Work', text: 'Digitale Nomaden, die mildes Klima, eine gute Internetverbindung und moderate Lebenshaltungskosten suchen.' },
      { title: 'Umzug und Behördengänge', text: 'Alle, die nach Armenia ziehen und eine Bleibe brauchen, bis sie die passende Wohnung gefunden haben.' },
      { title: 'Reisende ohne Eile', text: 'Ruheständler und Slow Traveller, die die Kaffeeregion wie Einheimische erleben möchten.' },
    ],
    includedTitle: 'Im Monatspreis inbegriffen',
    included: ['Nebenkosten (Wasser, Strom und Gas)', 'WLAN', 'Regelmäßige Zimmerreinigung', 'Wöchentlicher Wechsel von Bettwäsche und Handtüchern', 'Fernseher', 'Betreuung durch den Gastgeber per WhatsApp'],
    ratesTitle: 'Monatliche Richtpreise',
    ratesLead: 'Preise pro Zimmer und Monat. Der Endpreis hängt von Saison, Gästezahl und Aufenthaltsdauer ab.',
    stepsTitle: 'So funktioniert es',
    steps: [
      { title: 'Ihre Anfrage', text: 'Reisedaten, Anzahl der Gäste und Reisegrund.' },
      { title: 'Ihr Angebot', text: 'Wir senden Ihnen den Preis, die enthaltenen Leistungen und die Bedingungen.' },
      { title: 'Unterschreiben und bestätigen', text: 'Wir unterzeichnen eine einfache Beherbergungsvereinbarung, und Sie zahlen den ersten Monat und die Kaution.' },
      { title: 'Willkommen zu Hause', text: 'Wir erwarten Sie mit einem bezugsfertigen Zimmer und einem kleinen Stadtguide.' },
    ],
    reqTitle: 'Voraussetzungen',
    req: ['Gültiger Personalausweis oder Reisepass', 'Unterzeichnete Beherbergungsvereinbarung', 'Erster Monat im Voraus', 'Rückzahlbare, schriftlich vereinbarte Kaution'],
    faqTitle: 'Fragen zu Langzeitaufenthalten',
    faq: [
      { q: 'Brauche ich einen Bürgen?', a: 'Nein. Wir unterzeichnen eine Beherbergungsvereinbarung mit Ihren Daten und einer rückzahlbaren Kaution; wir verlangen weder Bürgen noch Mitschuldner noch eine Bonitätsprüfung.' },
      { q: 'Kann ich meinen Aufenthalt verlängern?', a: 'Ja, je nach Verfügbarkeit. Geben Sie uns mindestens 15 Tage im Voraus Bescheid, damit wir Ihr Zimmer reservieren können.' },
      { q: 'Was passiert, wenn ich früher abreisen muss?', a: 'Sie teilen es uns 15 Tage im Voraus schriftlich mit. Die Bedingungen für eine vorzeitige Abreise sind von Anfang an klar in der Vereinbarung geregelt.' },
      { q: 'Bekomme ich eine Rechnung auf den Namen meines Unternehmens?', a: 'Ja. Wir stellen eine elektronische Rechnung auf die Person oder das Unternehmen Ihrer Wahl aus.' },
      { q: 'Wann erhalte ich die Kaution zurück?', a: 'Innerhalb von 5 Werktagen nach Ihrer Abreise, abzüglich etwaiger Schäden oder offener Posten.' },
    ],
    cta: 'Mein Monatsangebot anfordern',
  },

  legal: {
    h1: 'Richtlinien und Hausordnung',
    lead: 'Klare Regeln für einen entspannten Aufenthalt. Bei Fragen schreiben Sie uns gern.',
    updated: 'Zuletzt aktualisiert: {date}',
    toc: 'Auf dieser Seite',
    pendingData: '[Angabe folgt]',
    sections: [
      {
        id: 'privacidad',
        title: 'Datenschutzerklärung und Datenverarbeitung',
        html: `<p>Diese Richtlinie gilt für die personenbezogenen Daten, die Camelot (im Folgenden „Camelot“), eine Unterkunft in Armenia, Quindío, Kolumbien, erhebt. Sie entspricht dem Gesetz 1581 von 2012, dem Dekret 1074 von 2015 und den übrigen Vorschriften zum Schutz personenbezogener Daten.</p>
<h3>Verantwortliche Stelle</h3>
<p>{businessName} · NIT/C.C. {nit} · Armenia, Quindío, Kolumbien · E-Mail: {email} · WhatsApp: {phone}.</p>
<h3>Welche Daten wir verarbeiten</h3>
<ul><li>Identifikations- und Kontaktdaten: Name, Personalausweis oder Reisepass, Staatsangehörigkeit, Telefonnummer und E-Mail-Adresse.</li><li>Buchungsdaten: Reisedaten, Anzahl der Gäste, Zimmer, Zahlungen und Rechnungsstellung.</li><li>Daten, die Sie uns freiwillig mitteilen, etwa Bedürfnisse im Hinblick auf Barrierefreiheit. Handelt es sich um sensible Daten, verarbeiten wir sie nur mit Ihrer ausdrücklichen Einwilligung und ausschließlich, um Sie zu betreuen.</li><li>Daten Minderjähriger: ausschließlich die für ihre Registrierung erforderlichen Daten, die von ihren Eltern oder gesetzlichen Vertretern übermittelt werden.</li></ul>
<h3>Wofür wir sie verwenden</h3>
<ul><li>Zur Abwicklung Ihrer Buchung, Ihres Aufenthalts und der Kommunikation mit Ihnen.</li><li>Zur Erfüllung gesetzlicher Pflichten: Gästeregistrierung (Tarjeta de Registro Hotelero), Meldung ausländischer Gäste an Migración Colombia (SIRE) und elektronische Rechnungsstellung gegenüber der DIAN.</li><li>Für die Sicherheit der Gäste und der Unterkunft.</li><li>Um Ihnen Neuigkeiten oder Angebote zu senden – nur mit Ihrer Einwilligung, die Sie jederzeit widerrufen können.</li></ul>
<h3>Ihre Rechte</h3>
<p>Sie können Ihre Daten einsehen, aktualisieren und berichtigen; einen Nachweis Ihrer Einwilligung verlangen; über die Verwendung Ihrer Daten informiert werden; Ihre Einwilligung widerrufen oder die Löschung verlangen, sofern keine gesetzliche Aufbewahrungspflicht besteht; kostenlos auf Ihre Daten zugreifen und bei der Superintendencia de Industria y Comercio (SIC) Beschwerde einlegen.</p>
<h3>So machen Sie Ihre Rechte geltend</h3>
<p>Schreiben Sie uns an {email} oder per WhatsApp. Anfragen beantworten wir innerhalb von höchstens 10 Werktagen (um weitere 5 verlängerbar) und Beschwerden innerhalb von höchstens 15 Werktagen (um weitere 8 verlängerbar), wie es das Gesetz 1581 von 2012 vorsieht.</p>
<h3>Aufbewahrung und Sicherheit</h3>
<p>Wir bewahren die Daten für die Dauer unserer Geschäftsbeziehung und so lange auf, wie es die tourismusrechtlichen, handelsrechtlichen und steuerlichen Vorschriften verlangen. Wir treffen angemessene Sicherheitsmaßnahmen, und nur Personen, die die Daten benötigen, haben Zugriff darauf.</p>
<h3>Besucher aus der Europäischen Union, dem Vereinigten Königreich und Brasilien</h3>
<p>Wenn Sie dort ansässig sind, verarbeiten wir Ihre Daten auf Grundlage der Erfüllung des Beherbergungsvertrags, der Erfüllung gesetzlicher Pflichten, unseres berechtigten Interesses an der Sicherheit und gegebenenfalls Ihrer Einwilligung. Zudem haben Sie das Recht auf Auskunft, Berichtigung, Löschung, Widerspruch, Einschränkung der Verarbeitung und Datenübertragbarkeit (DSGVO / UK GDPR / LGPD) und können sich an Ihre Datenschutzaufsichtsbehörde wenden.</p>`,
      },
      {
        id: 'cookies',
        title: 'Cookies und Datenschutz auf dieser Website',
        html: `<ul><li><strong>Keine Tracking- oder Werbe-Cookies.</strong> Diese Website verwendet weder Analysedienste von Drittanbietern noch Social-Media-Pixel.</li><li>Wir speichern in Ihrem eigenen Browser (lokaler Speicher) nur Ihre Einstellungen: Sprache, hellen oder dunklen Modus, Währung und ob Sie den Datenschutzhinweis bereits gesehen haben. Sie können diese Angaben jederzeit in Ihrem Browser löschen.</li><li>Die OpenStreetMap-Karte wird nur geladen, wenn Sie auf „Karte laden“ klicken.</li><li>Wenn Sie uns per WhatsApp oder über Plattformen wie Airbnb schreiben, gelten zusätzlich die Richtlinien dieser Unternehmen.</li><li>Die Website wird bei GitHub Pages (GitHub, Inc., Vereinigte Staaten) gehostet; GitHub kann aus Sicherheitsgründen technische Daten wie die IP-Adresse protokollieren.</li></ul>`,
      },
      {
        id: 'terminos',
        title: 'Beherbergungsbedingungen',
        html: `<ul><li><strong>Beherbergungsvertrag.</strong> Die schriftlich bestätigte Buchung begründet einen Beherbergungsvertrag nach kolumbianischem Recht (Código de Comercio und tourismusrechtliche Vorschriften). Die auf dieser Website angezeigten Preise sind Richtpreise, bis wir sie Ihnen schriftlich bestätigen.</li><li><strong>Bestätigung.</strong> Kurze und mittlere Aufenthalte werden mit einer Anzahlung von {deposit} % bestätigt, Langzeitaufenthalte mit dem ersten Monat und einer rückzahlbaren Kaution gemäß der unterzeichneten Beherbergungsvereinbarung.</li><li><strong>Registrierung.</strong> Jeder Gast legt bei der Ankunft ein gültiges Ausweisdokument (Cédula oder Reisepass) vor. Die Daten werden in der Tarjeta de Registro Hotelero erfasst und bei ausländischen Gästen an Migración Colombia gemeldet.</li><li><strong>Minderjährige.</strong> Sie werden nur in Begleitung ihrer Eltern oder eines schriftlich bevollmächtigten Erwachsenen beherbergt; dabei ist eine Geburtsurkunde oder ein anderes Dokument vorzulegen, das das Verwandtschaftsverhältnis belegt.</li><li><strong>Belegung.</strong> Jedes Zimmer hat eine Höchstbelegung. Besuch muss angemeldet und registriert werden; aus Sicherheitsgründen darf er nicht übernachten, ohne als Gast registriert zu sein.</li><li><strong>Zahlungen und Rechnung.</strong> Die Preise werden in kolumbianischen Pesos abgerechnet und enthalten die jeweils anfallenden Steuern. Wir stellen elektronische Rechnungen aus. Nicht in Kolumbien ansässige Ausländer können die im Estatuto Tributario (kolumbianisches Steuergesetzbuch) vorgesehene Mehrwertsteuerbefreiung (IVA) in Anspruch nehmen, sofern die Voraussetzungen erfüllt sind.</li><li><strong>Sorgfalt mit der Unterkunft.</strong> Der Gast haftet für Schäden, die er im Zimmer oder in den Gemeinschaftsbereichen verursacht. Wir empfehlen, keine Wertgegenstände offen liegen zu lassen.</li><li><strong>Hausrecht.</strong> Wir können die Beherbergung aus Sicherheitsgründen oder bei schwerwiegenden Verstößen gegen diese Regeln verweigern oder beenden – niemals jedoch aus diskriminierenden Gründen.</li><li><strong>Plattformen.</strong> Wenn Sie über Airbnb, Booking oder eine andere Plattform buchen, gelten zusätzlich deren Bedingungen und Stornierungsrichtlinien.</li><li><strong>Beschwerden und Reklamationen.</strong> Schreiben Sie uns, und wir antworten Ihnen innerhalb der gesetzlichen Fristen. Gemäß dem Gesetz 1480 von 2011 können Sie sich an die Superintendencia de Industria y Comercio wenden.</li></ul>`,
      },
      {
        id: 'cancelacion',
        title: 'Stornierungsbedingungen',
        html: `<table><thead><tr><th>Aufenthalt</th><th>Kostenlose Stornierung</th><th>Nach Ablauf dieser Frist</th></tr></thead><tbody><tr><td>Kurz (1–6 Nächte)</td><td>Bis 72 Stunden vor Anreise</td><td>Die erste Nacht wird berechnet</td></tr><tr><td>Mittel (7–29 Nächte)</td><td>Bis 7 Tage vor Anreise</td><td>50 % der Anzahlung werden einbehalten; bei weniger als 48 Stunden die gesamte Anzahlung</td></tr><tr><td>Lang (ab 30 Nächten)</td><td>Bis 14 Tage vor Anreise</td><td>50 % der Anzahlung werden einbehalten</td></tr></tbody></table>
<ul><li><strong>Nichterscheinen</strong> ohne vorherige Mitteilung gilt als Stornierung nach Ablauf der Frist.</li><li><strong>Vorzeitige Abreise</strong> bei kurzen und mittleren Aufenthalten: Berechnet werden die genutzten Nächte zu dem Preis, der der tatsächlichen Aufenthaltsdauer entspricht. Bei Langzeitaufenthalten ist eine schriftliche Mitteilung 15 Tage im Voraus erforderlich.</li><li><strong>Höhere Gewalt</strong> (Straßensperrung, medizinischer Notfall, Naturkatastrophe): Wir verlegen Ihren Aufenthalt kostenlos auf einen Termin innerhalb der folgenden 6 Monate.</li><li><strong>Rückerstattungen</strong> erfolgen über dasselbe Zahlungsmittel innerhalb der folgenden 10 Werktage. Die Kosten internationaler Überweisungen trägt, wer sie beantragt.</li></ul>`,
      },
      {
        id: 'normas',
        title: 'Hausordnung',
        html: `<ul><li>Check-in ab {checkin} Uhr, Check-out bis {checkout} Uhr.</li><li>Nachtruhe von {quietFrom} bis {quietTo} Uhr – aus Rücksicht auf die anderen Gäste und die Nachbarn.</li><li>Rauchen und Dampfen sind in den Zimmern und geschlossenen Räumen nicht gestattet.</li><li>Partys, Veranstaltungen und illegale Substanzen sind nicht erlaubt.</li><li>Besuch wird angemeldet und registriert.</li><li>Haustiere nur nach vorheriger Genehmigung; Assistenzhunde sind jederzeit willkommen.</li><li>Gehen Sie sparsam mit Wasser und Energie um: Schalten Sie beim Verlassen des Zimmers Licht und Geräte aus.</li><li>Helfen Sie uns beim Recycling: Trennen Sie den Abfall gemäß den Hinweisen.</li></ul>`,
      },
      {
        id: 'escnna',
        title: 'Prävention der sexuellen Ausbeutung von Kindern und Jugendlichen',
        html: `<p><strong>Hinweis:</strong> In Umsetzung von Artikel 17 des Gesetzes 679 von 2001 weist Camelot den Gast darauf hin, dass die sexuelle Ausbeutung und der sexuelle Missbrauch Minderjähriger in Kolumbien nach geltendem Recht straf- und verwaltungsrechtlich geahndet werden.</p>
<p>Camelot hält das Gesetz 1336 von 2009 und den Verhaltenskodex gegen die kommerzielle sexuelle Ausbeutung von Kindern und Jugendlichen (ESCNNA) ein. Minderjährigen ist der Zutritt ohne ihre Eltern oder einen bevollmächtigten Erwachsenen nicht gestattet. Melden Sie jeden Verdacht: ICBF-Linie 141 (kolumbianisches Familienwohlfahrtsinstitut), Notruf 123 der Nationalpolizei oder unter <a href="https://www.teprotejo.org" rel="noopener" target="_blank">teprotejo.org</a>.</p>`,
      },
      {
        id: 'accesibilidad',
        title: 'Barrierefreiheit',
        html: `<p>Diese Website orientiert sich an den Richtlinien WCAG 2.2, Konformitätsstufe AA: ausreichende Kontraste, Bedienbarkeit per Tastatur, Alternativtexte und Rücksicht auf die Einstellung für reduzierte Bewegung.</p><p>Wenn Sie Mobilitäts- oder andere besondere Bedürfnisse haben, sagen Sie uns vor der Buchung Bescheid: Wir informieren Sie genau über Zugänge, Treppen und das am besten geeignete Zimmer.</p>`,
      },
      {
        id: 'creditos',
        title: 'Bildnachweise',
        html: `<p>Die Fotos von Orten im Quindío stammen von Wikimedia Commons und werden gemäß ihren freien Lizenzen verwendet; sie wurden zugeschnitten und in der Größe angepasst. Die Zimmerfotos sind Beispielbilder, bis wir eigene Aufnahmen veröffentlichen.</p>{credits}`,
      },
    ],
  },

  merlin: {
    name: 'Merlin',
    role: 'Digitaler Concierge von Camelot',
    open: 'Concierge Merlin öffnen',
    close: 'Concierge schließen',
    greeting: 'Willkommen in Camelot! Ich bin Merlin. Fragen Sie mich alles rund um Ihren Aufenthalt oder wählen Sie ein Thema.',
    placeholder: 'Ihre Frage …',
    send: 'Senden',
    fallback: 'Diese Frage verdient einen Gastgeber aus Fleisch und Blut. Soll ich Sie mit ihm verbinden?',
    toHost: 'Mit dem Gastgeber sprechen',
    more: 'Weitere Themen',
    topics: [
      { id: 'rates', label: 'Preise', kw: ['preis', 'kosten', 'kostet', 'tarif', 'nacht', 'guenstig', 'gunstig', 'billig', 'teuer', 'wieviel'], a: 'Der Preis hängt vom Zimmer und von der Anzahl der Nächte ab: Ab 7 Nächten gibt es {mediumPct} % Rabatt, ab 30 Nächten einen Monatspreis. Mit dem Rechner sehen Sie den Gesamtpreis sofort.', action: 'calc' },
      { id: 'long', label: 'Langzeitaufenthalt', kw: ['monat', 'monate', 'monatlich', 'langzeit', 'langfristig', 'wohnen', 'buerge', 'burge', 'miete', 'mitschuldner'], a: 'Ab 30 Nächten bieten wir einen Monatspreis inklusive Nebenkosten, WLAN und Reinigung – ohne Bürgen oder Mitschuldner. Wir unterzeichnen eine einfache schriftliche Vereinbarung.', action: 'long' },
      { id: 'checkin', label: 'Check-in und Check-out', kw: ['checkin', 'check-in', 'checkout', 'check-out', 'einchecken', 'auschecken', 'uhrzeit', 'frueh', 'spaet', 'spat'], a: 'Check-in ist ab {checkin} Uhr, Check-out bis {checkout} Uhr. Wenn Sie früher ankommen oder später abreisen möchten, sagen Sie uns Bescheid – je nach Verfügbarkeit finden wir eine Lösung.' },
      { id: 'arrive', label: 'Anfahrt', kw: ['flughafen', 'busbahnhof', 'terminal', 'bus', 'taxi', 'anreise', 'anfahrt', 'flugzeug', 'transport', 'hinkommen'], a: 'Vom Flughafen El Edén (AXM) sind es etwa 25 Minuten mit dem Taxi, vom Busbahnhof Terminal de Transportes etwa 10. Den genauen Standort senden wir Ihnen bei der Buchung.' },
      { id: 'where', label: 'Lage', kw: ['lage', 'adresse', 'standort', 'zentrum', 'viertel', 'gegend', 'sicher', 'sicherheit', 'entfernung'], a: 'Wir befinden uns im Zentrum von Armenia, nur wenige Gehminuten von der Plaza de Bolívar, von Banken, Geschäften und den Verkehrsverbindungen ins ganze Quindío entfernt.' },
      { id: 'pay', label: 'Zahlung und Rechnung', kw: ['zahlung', 'bezahlen', 'kreditkarte', 'ueberweisung', 'uberweisung', 'bargeld', 'rechnung', 'mwst', 'dollar', 'euro'], a: 'Die Zahlungsmittel bestätigen wir bei der Buchung (Überweisung, digitale Zahlung oder Bargeld). Wir stellen elektronische Rechnungen aus, auch auf Unternehmen.' },
      { id: 'pets', label: 'Haustiere', kw: ['haustier', 'haustiere', 'hund', 'hunde', 'katze', 'tier', 'pet'], a: 'Fragen Sie uns vor der Buchung, dann nennen wir Ihnen die Bedingungen. Assistenzhunde sind jederzeit willkommen.' },
      { id: 'parking', label: 'Parken', kw: ['parken', 'parkplatz', 'parkhaus', 'garage', 'auto', 'motorrad', 'stellplatz', 'mietwagen'], a: 'Fragen Sie uns nach der Verfügbarkeit; im Zentrum gibt es öffentliche Parkplätze nur wenige Straßen entfernt.' },
      { id: 'wifi', label: 'WLAN und Arbeiten', kw: ['wifi', 'wlan', 'internet', 'arbeiten', 'homeoffice', 'remote', 'videocall', 'videokonferenz', 'empfang', 'signal'], a: 'Das WLAN ist für alle Gäste kostenlos. Wenn Sie viel per Videocall arbeiten, fragen Sie uns nach dem Zimmer mit dem besten Empfang.' },
      { id: 'cancel', label: 'Stornierung', kw: ['stornieren', 'stornierung', 'storno', 'absagen', 'rueckerstattung', 'ruckerstattung', 'erstattung', 'umbuchen', 'aendern', 'andern'], a: 'Kurzaufenthalte: kostenlos bis 72 Std. vorher. Mittlere: bis 7 Tage vorher. Lange: bis 14 Tage vorher. Alle Einzelheiten finden Sie in den Richtlinien.', action: 'legal' },
      { id: 'todo', label: 'Unternehmungen', kw: ['ausflug', 'tour', 'besichtigen', 'sehenswuerdigkeiten', 'sehenswurdigkeiten', 'unternehmungen', 'cocora', 'salento', 'filandia', 'kaffee'], a: 'Valle de Cocora, Salento, Filandia, Parque del Café, PANACA, der Jardín Botánico … alles in weniger als einer Stunde erreichbar. Werfen Sie einen Blick in unseren Reiseführer mit Fahrzeiten ab Camelot.', action: 'guide' },
      { id: 'access', label: 'Barrierefreiheit', kw: ['barrierefrei', 'barrierefreiheit', 'rollstuhl', 'treppe', 'treppen', 'aufzug', 'mobilitaet', 'mobilitat', 'behinderung', 'gehbehindert'], a: 'Sagen Sie uns vor der Buchung, was Sie benötigen, und wir informieren Sie genau über Zugänge, Treppen und das am besten geeignete Zimmer.' },
    ],
    actions: { calc: 'Rechner öffnen', long: 'Langzeitaufenthalte ansehen', legal: 'Richtlinien ansehen', guide: 'Reiseführer öffnen' },
    waMsg: 'Hallo Camelot, ich komme über Ihre Website und habe eine Frage:',
  },

  toasts: {
    langSuggest: 'Diese Seite gibt es auch auf Deutsch.',
    switchLang: 'Wechseln',
    dismiss: 'Schließen',
    privacy: 'Diese Website verwendet keine Tracking-Cookies. Wir speichern nur Ihre Einstellungen in Ihrem Browser.',
    privacyOk: 'Verstanden',
    privacyMore: 'Mehr erfahren',
    pendingChannel: 'Dieser Buchungskanal wird in Kürze freigeschaltet. Nutzen Sie bis dahin bitte das Kontaktformular.',
  },

  notFound: {
    title: 'Dieses Burgtor gibt es nicht',
    text: 'Die gesuchte Seite hat sich im Wald verirrt. Kehren Sie zur Startseite zurück oder werfen Sie einen Blick in den Reiseführer.',
    cta: 'Zur Startseite',
  },
};
