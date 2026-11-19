// Textos en ESPAÑOL (idioma fuente). Los demás idiomas siguen exactamente estas claves.
// Marcadores entre llaves, ej. {checkin}, se reemplazan al construir: NO traducirlos.
// Las cadenas pueden llevar HTML simple (<em>, <strong>, <a>, <ul>, <li>, <p>, <br>).

export default {
  code: 'es',
  locale: 'es_CO',
  name: 'Español',
  short: 'ES',

  slugs: { guide: 'guia-armenia-quindio', long: 'estadias-largas', legal: 'politicas' },

  seo: {
    siteName: 'Camelot · Hospedaje en Armenia, Quindío',
    home: {
      title: 'Camelot | Hospedaje en Armenia, Quindío por noches o meses',
      description: 'Habitaciones privadas con baño propio y Wi-Fi en el centro de Armenia, Quindío. Estadías cortas, medianas y largas por noche, semana o mes. Reserva directa.',
    },
    guide: {
      title: 'Qué hacer en Armenia y el Quindío: guía local | Camelot',
      description: 'Guía local de Armenia y el Quindío: Valle de Cocora, Salento, Filandia, Parque del Café, PANACA y más, con tiempos desde el centro de Armenia.',
    },
    long: {
      title: 'Habitaciones amobladas por meses en Armenia, Quindío | Camelot',
      description: 'Habitación privada amoblada por meses en el centro de Armenia: servicios y Wi-Fi incluidos, sin fiador ni codeudor. Ideal para trabajo, salud o estudio.',
    },
    legal: {
      title: 'Políticas, privacidad y normas de la casa | Camelot Armenia',
      description: 'Política de privacidad (Ley 1581 de 2012), términos de hospedaje, cancelación, normas de la casa y prevención de la ESCNNA de Camelot, Armenia, Quindío.',
    },
    notFound: { title: 'Página no encontrada | Camelot', description: 'Esta página no existe. Vuelve al inicio de Camelot, hospedaje en Armenia.' },
    keywords: 'hospedaje Armenia Quindío, hotel centro Armenia, habitaciones por noche Armenia, habitaciones amobladas por meses Armenia, estadías largas Armenia, alojamiento Eje Cafetero, dónde dormir en Armenia Colombia',
  },

  nav: {
    home: 'Inicio',
    stays: 'Estadías',
    rooms: 'Habitaciones',
    legend: 'Experiencia',
    calc: 'Tarifas',
    location: 'Ubicación',
    guide: 'Guía del Quindío',
    long: 'Estadías largas',
    faq: 'Preguntas',
    contact: 'Contacto',
    book: 'Reservar',
    menu: 'Menú',
    close: 'Cerrar',
    skip: 'Saltar al contenido',
    langLabel: 'Idioma',
    themeLabel: 'Cambiar entre modo claro y oscuro',
    backTop: 'Volver arriba',
    breadcrumbHome: 'Inicio',
  },

  hero: {
    eyebrow: 'Hospedaje en el centro de Armenia · Quindío, Colombia',
    title: 'Tu castillo en el <em>corazón del Eje Cafetero</em>',
    lead: 'Habitaciones privadas tipo hotel para quedarte una noche, una temporada o varios meses. A pocas cuadras de la Plaza de Bolívar y con todo el Quindío a tu alcance.',
    ctaPrimary: 'Calcular mi estadía',
    ctaSecondary: 'Ver habitaciones',
    chips: ['{rooms} habitaciones privadas', 'Baño privado', 'Wi-Fi', 'Tarifas por noche, semana o mes'],
    slides: [
      'Vista aérea de la Plaza de Bolívar en el centro de Armenia, Quindío',
      'Palmas de cera en el Valle de Cocora, Salento, Quindío',
      'Fachadas de colores en Filandia, Quindío',
    ],
    scroll: 'Descubre Camelot',
  },

  stays: {
    eyebrow: 'Elige tu estadía',
    title: 'Una noche, una temporada <em>o todo un reinado</em>',
    lead: 'La misma habitación, tres formas de quedarte. Entre más tiempo, mejor la tarifa.',
    items: {
      short: {
        tag: 'Estadía corta',
        name: 'Paso del viajero',
        range: '1 a 6 noches',
        desc: 'Para viajes de turismo, negocios o escalas en el Eje Cafetero. Llegas, descansas y sales a explorar.',
        points: ['Tarifa por noche', 'Llegada coordinada por WhatsApp', 'Recomendaciones para recorrer el Quindío'],
      },
      medium: {
        tag: 'Estadía mediana',
        name: 'Temporada en la corte',
        range: '7 a 29 noches',
        desc: 'Para proyectos, cursos, vacaciones largas o para conocer la región sin prisa.',
        points: ['{mediumPct} % menos sobre la tarifa por noche', 'Aseo y cambio de ropa de cama programados', 'Itinerario sugerido de una semana'],
      },
      long: {
        tag: 'Estadía larga',
        name: 'Residencia en el reino',
        range: '30 noches o más',
        desc: 'Tu base fija en Armenia: servicios incluidos, sin fiador y con un acuerdo claro por escrito.',
        points: ['Tarifa mensual con servicios y Wi-Fi', 'Sin fiador ni codeudor', 'Factura para tu empresa'],
      },
    },
    cta: 'Calcular tarifa',
    more: 'Todo sobre estadías largas',
  },

  rooms: {
    eyebrow: 'Las habitaciones',
    title: 'Elige tu <em>aposento</em>',
    lead: 'Habitaciones privadas con baño propio, ropa de cama y toallas. Cuéntanos cuántos son y te recomendamos la ideal.',
    from: 'Desde',
    perNight: 'noche',
    perMonth: 'mes',
    guests: 'Hasta {n} huéspedes',
    guest: '1 huésped',
    bedDouble: '{n} cama doble',
    bedsDouble: '{n} camas dobles',
    bedSingle: '{n} cama sencilla',
    bedsSingle: '{n} camas sencillas',
    privateBath: 'Baño privado',
    illustrative: 'Imagen ilustrativa',
    indicative: 'Tarifa indicativa',
    ask: 'Consultar esta habitación',
    items: {
      escudero: { name: 'Escudero', type: 'Habitación sencilla', desc: 'Compacta y tranquila, pensada para quien viaja solo por trabajo o turismo.', alt: 'Habitación sencilla con cama doble y lámparas de noche' },
      caballero: { name: 'Caballero', type: 'Habitación doble', desc: 'Cama doble y espacio para dos. La favorita de las parejas y de las estadías largas.', alt: 'Habitación doble con cama amplia y luz cálida' },
      hermandad: { name: 'Hermandad', type: 'Habitación triple', desc: 'Una cama doble y una sencilla para amigos, colegas o familia pequeña.', alt: 'Habitación con dos camas y mesa de noche' },
      mesa: { name: 'Mesa Redonda', type: 'Habitación familiar', desc: 'Para la familia completa o el grupo de viaje: varias camas en un solo espacio.', alt: 'Habitación familiar con varias camas' },
    },
  },

  legend: {
    eyebrow: 'La leyenda Camelot',
    title: 'Cinco promesas <em>de la corte</em>',
    lead: 'Tomamos lo mejor de la leyenda artúrica y lo convertimos en hospitalidad cafetera.',
    items: [
      { key: 'excalibur', name: 'Excalibur', title: 'Llegar es fácil', desc: 'Sin espadas en la piedra: antes de tu llegada te enviamos por WhatsApp la ubicación, el horario y las instrucciones paso a paso.' },
      { key: 'grial', name: 'El Grial', title: 'Café de origen', desc: 'El verdadero grial del Quindío se sirve en taza. Te contamos dónde tomar el mejor café de especialidad cerca de Camelot.' },
      { key: 'mesa', name: 'Mesa Redonda', title: 'Trato de igual a igual', desc: 'Tarifas claras, sin letra pequeña ni cobros sorpresa. Lo que cotizamos es lo que pagas.' },
      { key: 'avalon', name: 'Avalon', title: 'Descanso de verdad', desc: 'Ropa de cama limpia, silencio nocturno y, si lo pides, una habitación interior lejos del ruido de la calle.' },
      { key: 'merlin', name: 'Merlín', title: 'Un conserje que sabe', desc: 'Merlín, nuestro asistente, responde al instante en cinco idiomas, y detrás hay un anfitrión real que conoce cada rincón del Quindío.' },
    ],
  },

  amenities: {
    eyebrow: 'Incluido',
    title: 'Todo lo necesario, <em>nada de más</em>',
    items: {
      bath: 'Baño privado',
      wifi: 'Wi-Fi gratis',
      tv: 'Televisión',
      linen: 'Ropa de cama y toallas',
      hotwater: 'Agua caliente',
      cleaning: 'Aseo de la habitación',
      coffee: 'Café de bienvenida',
      desk: 'Rincón para trabajar',
      laundry: 'Lavandería bajo solicitud',
      luggage: 'Guarda equipaje',
      concierge: 'Guía local y conserje',
      invoice: 'Factura electrónica',
    },
  },

  calc: {
    eyebrow: 'Calcula tu estadía',
    title: 'Tu tarifa, <em>en segundos</em>',
    lead: 'Elige fechas y habitación. Detectamos el tipo de estadía y aplicamos el descuento automáticamente.',
    checkin: 'Llegada',
    checkout: 'Salida',
    guests: 'Huéspedes',
    room: 'Habitación',
    currency: 'Moneda',
    nights: '{n} noches',
    night: '1 noche',
    tierShort: 'Estadía corta',
    tierMedium: 'Estadía mediana',
    tierLong: 'Estadía larga',
    base: 'Tarifa base',
    discount: 'Descuento por duración',
    direct: 'Descuento reserva directa',
    total: 'Total estimado',
    avg: 'Promedio por noche',
    monthly: 'Equivale a {amount} al mes',
    deposit: 'Anticipo para confirmar ({pct} %)',
    depositLong: 'Para estadías largas: primer mes y depósito reembolsable según el acuerdo.',
    approx: 'Valores en {cur} aproximados; se paga en pesos colombianos.',
    indicative: 'Tarifa indicativa sujeta a disponibilidad. Te confirmamos el valor final por escrito.',
    send: 'Solicitar por WhatsApp',
    sendMail: 'Solicitar por correo',
    invalid: 'Elige una fecha de salida posterior a la llegada.',
    capacity: 'Capacidad máxima de esta habitación: {n}. Te sugerimos la habitación {room} o dos habitaciones.',
    pickDates: 'Elige tus fechas para ver la tarifa.',
    waIntro: 'Hola, Camelot. Quiero consultar disponibilidad:',
    waLines: ['Llegada: {in}', 'Salida: {out} ({nights})', 'Huéspedes: {guests}', 'Habitación: {room}', 'Estadía: {tier}', 'Total estimado en la web: {total}'],
  },

  longBand: {
    eyebrow: 'Estadías largas',
    title: '¿Vienes a Armenia <em>por meses</em>?',
    lead: 'Trabajo, tratamiento médico, estudio o trabajo remoto: vive el centro de Armenia con una tarifa mensual que incluye servicios, Wi-Fi y aseo. Sin fiador, sin codeudor, sin trámites de arriendo.',
    points: ['Servicios públicos y Wi-Fi incluidos', 'Acuerdo de alojamiento claro y por escrito', 'Factura a nombre de tu empresa'],
    cta: 'Ver estadías largas',
  },

  location: {
    eyebrow: 'Ubicación',
    title: 'En el centro, <em>a pocas cuadras de todo</em>',
    lead: 'Camelot está en el centro de Armenia, la zona comercial y bancaria de la ciudad, a pocas cuadras de la Plaza de Bolívar. Desde aquí salen los buses y taxis hacia todo el Quindío.',
    items: [
      { label: 'Plaza de Bolívar y Catedral', value: '≈ 8 min a pie' },
      { label: 'Calle Real (Carrera 14 peatonal)', value: '≈ 5 min a pie' },
      { label: 'Terminal de Transportes', value: '≈ 10 min en carro' },
      { label: 'Aeropuerto Internacional El Edén (AXM)', value: '≈ 25 min en carro' },
      { label: 'Parque del Café', value: '≈ 30 min en carro' },
      { label: 'Salento y Valle de Cocora', value: '≈ 55 min en carro' },
    ],
    mapCta: 'Cargar el mapa',
    mapNote: 'El mapa lo sirve OpenStreetMap y solo se carga si lo pides (protegemos tu privacidad).',
    mapTitle: 'Mapa del centro de Armenia, Quindío',
    exact: 'Te enviamos la ubicación exacta al confirmar tu reserva.',
    directions: 'Cómo llegar',
  },

  guideTeaser: {
    eyebrow: 'El mapa del reino',
    title: 'El Quindío <em>a tu alrededor</em>',
    lead: 'Montañas de café, palmas de cera y pueblos de colores, a menos de una hora de tu habitación.',
    cta: 'Abrir la guía completa',
  },

  rules: {
    eyebrow: 'Las reglas de la Mesa Redonda',
    title: 'Convivencia <em>de caballeros</em>',
    lead: 'Pocas reglas, claras, para que todos descansen bien.',
    items: [
      'Llegada desde las {checkin} y salida hasta las {checkout}. Llegadas tempranas o salidas tardías según disponibilidad.',
      'Silencio entre las {quietFrom} y las {quietTo}.',
      'Prohibido fumar o vapear dentro de las habitaciones.',
      'Registro obligatorio con documento de identidad de cada huésped, como exige la ley colombiana.',
      'Las visitas se anuncian y registran; no se permiten fiestas ni eventos.',
      'Menores de edad siempre acompañados por sus padres o con autorización escrita.',
    ],
    cta: 'Leer normas y políticas completas',
  },

  faq: {
    eyebrow: 'Preguntas frecuentes',
    title: 'Lo que más <em>nos preguntan</em>',
    items: [
      { q: '¿Dónde queda Camelot?', a: 'En el centro de Armenia, Quindío, a pocas cuadras de la Plaza de Bolívar, la Calle Real y la zona bancaria. Te enviamos la ubicación exacta y las indicaciones al confirmar la reserva.' },
      { q: '¿Qué diferencia hay entre estadía corta, mediana y larga?', a: 'Es la misma habitación con distinta tarifa: la corta (1 a 6 noches) se cobra por noche; la mediana (7 a 29 noches) tiene {mediumPct} % de descuento; la larga (30 noches o más) tiene tarifa mensual con servicios incluidos y un acuerdo por escrito.' },
      { q: '¿A qué hora es la llegada y la salida?', a: 'La llegada es desde las {checkin} y la salida hasta las {checkout}. Si llegas antes o sales más tarde, escríbenos: lo acomodamos según disponibilidad.' },
      { q: '¿Las habitaciones tienen baño privado?', a: 'Sí. Todas las habitaciones son privadas, con baño propio, ropa de cama, toallas y Wi-Fi.' },
      { q: '¿Sirve el Wi-Fi para trabajar o estudiar?', a: 'Sí, el Wi-Fi es gratuito para todos los huéspedes. Si tu trabajo depende de videollamadas, pregúntanos por la habitación con mejor señal.' },
      { q: '¿Cómo llego desde el aeropuerto o la terminal?', a: 'Desde el Aeropuerto Internacional El Edén (AXM) son unos 25 minutos en taxi; desde la Terminal de Transportes de Armenia, unos 10 minutos. Te enviamos las indicaciones al reservar.' },
      { q: '¿Qué medios de pago aceptan?', a: 'Confirmamos los medios disponibles al reservar (transferencia, pagos digitales y efectivo). Los precios se liquidan en pesos colombianos; mostramos valores aproximados en dólares y euros como referencia.' },
      { q: '¿Emiten factura?', a: 'Sí. Pídela al reservar con los datos de la persona o empresa. Si eres extranjero no residente, pregúntanos por la exención de IVA en alojamiento que contempla la ley tributaria colombiana.' },
      { q: '¿Admiten mascotas?', a: 'Consúltanos antes de reservar. Los perros de asistencia siempre son bienvenidos.' },
      { q: '¿Tienen parqueadero?', a: 'Pregúntanos por la disponibilidad. En el centro hay parqueaderos públicos a pocas cuadras.' },
      { q: '¿Cuál es la política de cancelación?', a: 'Estadías cortas: sin costo hasta 72 horas antes de la llegada. Medianas: hasta 7 días antes. Largas: hasta 14 días antes. Encuentra el detalle en nuestras políticas.' },
      { q: '¿Es seguro el centro de Armenia?', a: 'Es la zona más activa de la ciudad, con comercio, bancos y transporte. Como en cualquier centro urbano, recomendamos precauciones básicas de noche; con gusto te damos consejos al llegar.' },
    ],
  },

  contact: {
    eyebrow: 'Contacto y reservas',
    title: 'Hablemos de <em>tu estadía</em>',
    lead: 'Escríbenos y te respondemos con disponibilidad y tarifa final. Reservar directo siempre te da el mejor precio.',
    name: 'Nombre',
    email: 'Correo electrónico',
    phone: 'WhatsApp o teléfono',
    dates: 'Fechas aproximadas',
    guests: 'Huéspedes',
    stay: 'Tipo de estadía',
    message: 'Mensaje',
    messagePh: 'Cuéntanos qué necesitas: motivo del viaje, hora de llegada, requerimientos especiales…',
    consent: 'Autorizo el tratamiento de mis datos para responder mi solicitud, según la <a href="{legalUrl}#privacidad">política de privacidad</a>.',
    submit: 'Enviar solicitud',
    sending: 'Enviando…',
    success: '¡Gracias! Recibimos tu solicitud y te responderemos muy pronto.',
    error: 'No pudimos enviar el formulario. Intenta por WhatsApp o correo.',
    required: 'Completa los campos obligatorios y acepta la política de privacidad.',
    channelPending: 'Estamos activando nuestros canales de reserva. Muy pronto podrás escribirnos por aquí.',
    whatsapp: 'WhatsApp',
    mail: 'Correo',
    airbnb: 'Ver en Airbnb',
    booking: 'Ver en Booking',
    response: 'Te respondemos lo antes posible con disponibilidad y tarifa final.',
  },

  footer: {
    tagline: 'Hospedaje en el centro de Armenia, Quindío. Estadías cortas, medianas y largas.',
    explore: 'Explora',
    legalTitle: 'Políticas',
    contactTitle: 'Contacto',
    rnt: 'RNT',
    rntPending: 'RNT en trámite',
    escnna: 'Camelot rechaza la explotación y el abuso sexual de niñas, niños y adolescentes. Ley 679 de 2001 y Ley 1336 de 2009.',
    rights: 'Todos los derechos reservados.',
    madeBy: 'Concebido y desarrollado por el Dr. Mauricio Rodríguez Herrera.',
    links: { privacy: 'Privacidad', terms: 'Términos de hospedaje', cancel: 'Cancelación', rules: 'Normas de la casa', escnna: 'Prevención ESCNNA', a11y: 'Accesibilidad', credits: 'Créditos de imágenes' },
  },

  places: {
    plaza: { name: 'Plaza de Bolívar y Catedral', desc: 'El corazón de Armenia: la catedral de forma triangular, el Monumento al Esfuerzo y la vida del centro, a pocas cuadras de Camelot.', tip: 'Recórrela al atardecer y sigue por la Calle Real (Carrera 14) hasta el Parque Sucre.' },
    parquevida: { name: 'Parque de la Vida', desc: 'El gran pulmón verde de la ciudad: lagos, cascadas, puentes y senderos entre guaduales.', tip: 'Ideal para caminar o trotar en la mañana.' },
    museo: { name: 'Museo del Oro Quimbaya', desc: 'Orfebrería y cerámica del pueblo Quimbaya en un edificio de ladrillo del arquitecto Rogelio Salmona.', tip: 'Revisa los horarios oficiales antes de ir; suele tener entrada gratuita.' },
    botanico: { name: 'Jardín Botánico y Mariposario', desc: 'En Calarcá: bosque andino, puentes colgantes y un mariposario con forma de mariposa.', tip: 'Ve temprano: las mariposas están más activas con el sol de la mañana.' },
    parquecafe: { name: 'Parque del Café', desc: 'Parque temático en Montenegro con atracciones mecánicas, cultura cafetera y shows.', tip: 'Abre por temporadas y fines de semana; consulta el calendario oficial.' },
    panaca: { name: 'PANACA', desc: 'Parque agropecuario en Quimbaya para conocer el campo, sus animales y tradiciones.', tip: 'Plan perfecto con niños; reserva un día completo.' },
    cocora: { name: 'Salento y Valle de Cocora', desc: 'El pueblo más colorido del Quindío y el valle de la palma de cera, el árbol nacional de Colombia.', tip: 'Desde la plaza de Salento salen los jeeps Willys hacia Cocora. Lleva chaqueta y botas.' },
    filandia: { name: 'Filandia', desc: 'Calles de bahareque, artesanías de bejuco y un mirador con vista a tres departamentos.', tip: 'Quédate al atardecer y prueba un café en el marco de la plaza.' },
  },

  guide: {
    h1: 'Guía de Armenia y el Quindío',
    lead: 'Todo lo que puedes hacer desde Camelot: del centro de Armenia a los pueblos y valles del Paisaje Cultural Cafetero.',
    introTitle: 'Armenia, la Ciudad Milagro',
    intro: [
      'Armenia es la capital del Quindío y una de las puertas de entrada al Paisaje Cultural Cafetero de Colombia, declarado Patrimonio de la Humanidad por la UNESCO en 2011. Está a unos 1.480 metros sobre el nivel del mar y tiene clima templado todo el año.',
      'La llaman la Ciudad Milagro por la manera en que se reconstruyó tras el terremoto de 1999. Hoy es una ciudad amable, verde y bien conectada, desde la que llegas en menos de una hora a casi todos los atractivos del departamento.',
    ],
    gettingTitle: 'Cómo llegar',
    getting: [
      { title: 'En avión', text: 'El Aeropuerto Internacional El Edén (AXM) está a unos 25 minutos del centro en taxi, con vuelos diarios desde Bogotá y otras ciudades. El aeropuerto de Pereira (PEI) queda a cerca de una hora.' },
      { title: 'En bus', text: 'La Terminal de Transportes de Armenia recibe buses desde Bogotá, Medellín, Cali y Pereira, y de ahí salen con frecuencia los buses hacia Salento, Filandia, Montenegro y Calarcá.' },
      { title: 'En carro', text: 'Armenia queda a unas 3 horas y media de Cali, alrededor de 6 de Medellín y entre 6 y 8 de Bogotá, según el tráfico y el clima. Pereira está a cerca de una hora.' },
    ],
    placesTitle: 'Qué hacer cerca de Camelot',
    placesLead: 'Tiempos aproximados desde el centro de Armenia. Verifica horarios y tarifas en las fuentes oficiales antes de ir.',
    walk: 'a pie',
    car: 'en carro',
    foodTitle: 'Qué probar',
    food: [
      { name: 'Café de especialidad', desc: 'Estás en tierra cafetera: pide un método filtrado y pregunta por el origen del grano.' },
      { name: 'Trucha', desc: 'Típica de Salento, al ajillo o a la plancha, con patacón crocante.' },
      { name: 'Bandeja paisa y fríjoles', desc: 'Para los días de caminata: fríjoles, arroz, chicharrón, arepa y aguacate.' },
      { name: 'Frutas del trópico', desc: 'Lulo, maracuyá, granadilla, guanábana: en jugo o directo de la plaza de mercado.' },
    ],
    weekTitle: 'Tu semana en el reino',
    weekLead: 'Un itinerario sugerido para quienes se quedan siete noches o más.',
    week: [
      { day: 'Día 1', title: 'El centro', text: 'Plaza de Bolívar, Catedral, Calle Real y almuerzo típico.' },
      { day: 'Día 2', title: 'Parque del Café', text: 'Un día completo de cultura cafetera y atracciones en Montenegro.' },
      { day: 'Día 3', title: 'Salento y Cocora', text: 'Jeep Willys hasta el valle, caminata entre palmas de cera y trucha en Salento.' },
      { day: 'Día 4', title: 'Filandia', text: 'Artesanías, mirador y atardecer en uno de los pueblos más bonitos del país.' },
      { day: 'Día 5', title: 'Botánico y finca cafetera', text: 'Mariposario en Calarcá y recorrido por una finca para ver el café de la semilla a la taza.' },
      { day: 'Día 6', title: 'PANACA', text: 'El campo colombiano en vivo, ideal si viajas con niños.' },
      { day: 'Día 7', title: 'Descanso', text: 'Parque de la Vida, Museo del Oro Quimbaya y un buen café para cerrar la semana.' },
    ],
    tipsTitle: 'Consejos prácticos',
    tips: [
      { title: 'Clima', text: 'Templado, con mañanas soleadas y lluvias por la tarde. Las temporadas más lluviosas suelen ser abril–mayo y octubre–noviembre: trae chaqueta ligera y paraguas.' },
      { title: 'Dinero', text: 'En el centro hay bancos y cajeros a pocas cuadras. Lleva efectivo para los pueblos, los jeeps Willys y las tiendas pequeñas.' },
      { title: 'Transporte', text: 'Los taxis son económicos; pide uno por aplicación o desde la recepción. Para los pueblos, los buses de la terminal son frecuentes y seguros.' },
      { title: 'Emergencias', text: 'Línea única de emergencias en Colombia: 123. Si necesitas un médico, te indicamos la clínica más cercana.' },
    ],
    cta: 'Reserva tu base en Armenia',
  },

  long: {
    h1: 'Estadías largas en Armenia: tu habitación por meses',
    lead: 'Una habitación privada amoblada en el centro de Armenia, con servicios, Wi-Fi y aseo incluidos. Sin fiador, sin codeudor y con un acuerdo claro por escrito.',
    profilesTitle: '¿Para quién es?',
    profiles: [
      { title: 'Trabajo y comisiones', text: 'Profesionales, técnicos y contratistas que llegan a Armenia por un proyecto o una obra.' },
      { title: 'Salud', text: 'Pacientes y acompañantes durante tratamientos o recuperaciones en las clínicas de la ciudad.' },
      { title: 'Estudio', text: 'Estudiantes, practicantes e investigadores de las universidades del Quindío, o de cursos de español.' },
      { title: 'Trabajo remoto', text: 'Nómadas digitales que quieren clima templado, buena conexión y costo de vida razonable.' },
      { title: 'Mudanzas y trámites', text: 'Quienes se trasladan a Armenia y necesitan una base mientras encuentran vivienda.' },
      { title: 'Viajeros sin prisa', text: 'Pensionados y viajeros lentos que quieren vivir el Eje Cafetero como un local.' },
    ],
    includedTitle: 'Incluido en la tarifa mensual',
    included: ['Servicios públicos (agua, luz y gas)', 'Wi-Fi', 'Aseo de la habitación programado', 'Cambio semanal de ropa de cama y toallas', 'Televisión', 'Acompañamiento del anfitrión por WhatsApp'],
    ratesTitle: 'Tarifas mensuales de referencia',
    ratesLead: 'Valores por habitación y por mes. La tarifa final depende de la temporada, el número de huéspedes y la duración.',
    stepsTitle: 'Cómo funciona',
    steps: [
      { title: 'Cuéntanos', text: 'Fechas, número de huéspedes y motivo del viaje.' },
      { title: 'Recibe tu propuesta', text: 'Te enviamos la tarifa, lo que incluye y las condiciones.' },
      { title: 'Firma y confirma', text: 'Firmamos un acuerdo de alojamiento sencillo y pagas el primer mes y el depósito.' },
      { title: 'Llega a casa', text: 'Te esperamos con la habitación lista y una guía de la ciudad.' },
    ],
    reqTitle: 'Requisitos',
    req: ['Documento de identidad o pasaporte vigente', 'Acuerdo de alojamiento firmado', 'Primer mes por anticipado', 'Depósito reembolsable acordado por escrito'],
    faqTitle: 'Preguntas sobre estadías largas',
    faq: [
      { q: '¿Necesito fiador o codeudor?', a: 'No. Firmamos un acuerdo de alojamiento con tus datos y un depósito reembolsable; no pedimos fiador, codeudor ni estudio de arrendamiento.' },
      { q: '¿Puedo extender mi estadía?', a: 'Sí, según disponibilidad. Avísanos con al menos 15 días de anticipación para reservar tu habitación.' },
      { q: '¿Qué pasa si debo irme antes?', a: 'Avisas por escrito con 15 días de anticipación. Las condiciones de salida anticipada quedan claras en el acuerdo desde el principio.' },
      { q: '¿Me dan factura a nombre de mi empresa?', a: 'Sí. Emitimos factura electrónica a nombre de la persona o empresa que indiques.' },
      { q: '¿Cuándo me devuelven el depósito?', a: 'Dentro de los 5 días hábiles siguientes a tu salida, descontando solo daños o consumos pendientes, si los hay.' },
    ],
    cta: 'Pedir mi propuesta mensual',
  },

  legal: {
    h1: 'Políticas y normas',
    lead: 'Reglas claras para una estadía tranquila. Si tienes preguntas, escríbenos.',
    updated: 'Última actualización: {date}',
    toc: 'En esta página',
    pendingData: '[dato por completar]',
    sections: [
      {
        id: 'privacidad',
        title: 'Política de privacidad y tratamiento de datos',
        html: `<p>Esta política aplica a los datos personales que recolecta Camelot (en adelante, «Camelot»), hospedaje ubicado en Armenia, Quindío, Colombia, en cumplimiento de la Ley 1581 de 2012, el Decreto 1074 de 2015 y demás normas sobre protección de datos personales.</p>
<h3>Responsable del tratamiento</h3>
<p>{businessName} · NIT/C.C. {nit} · Armenia, Quindío, Colombia · Correo: {email} · WhatsApp: {phone}.</p>
<h3>Qué datos tratamos</h3>
<ul><li>Datos de identificación y contacto: nombre, documento de identidad o pasaporte, nacionalidad, teléfono y correo.</li><li>Datos de la reserva: fechas, número de huéspedes, habitación, pagos y facturación.</li><li>Datos que nos compartes voluntariamente, por ejemplo necesidades de accesibilidad. Si son datos sensibles, solo los tratamos con tu autorización expresa y para atenderte.</li><li>Datos de menores de edad: únicamente los necesarios para su registro, entregados por sus padres o representantes.</li></ul>
<h3>Para qué los usamos</h3>
<ul><li>Gestionar tu reserva, tu estadía y la comunicación contigo.</li><li>Cumplir obligaciones legales: registro de huéspedes (Tarjeta de Registro Hotelero), reporte de extranjeros a Migración Colombia (SIRE) y facturación electrónica ante la DIAN.</li><li>Seguridad de los huéspedes y del inmueble.</li><li>Enviarte novedades u ofertas, solo si lo autorizas; puedes retirar esa autorización en cualquier momento.</li></ul>
<h3>Tus derechos</h3>
<p>Puedes conocer, actualizar y rectificar tus datos; pedir prueba de la autorización; ser informado sobre su uso; revocar la autorización o pedir su supresión cuando no exista un deber legal de conservarlos; acceder a ellos gratuitamente y presentar quejas ante la Superintendencia de Industria y Comercio (SIC).</p>
<h3>Cómo ejercerlos</h3>
<p>Escríbenos a {email} o por WhatsApp. Respondemos las consultas en máximo 10 días hábiles (prorrogables 5 más) y los reclamos en máximo 15 días hábiles (prorrogables 8 más), como lo indica la Ley 1581 de 2012.</p>
<h3>Conservación y seguridad</h3>
<p>Conservamos los datos durante la relación contigo y por el tiempo que exigen las normas turísticas, contables y tributarias. Aplicamos medidas razonables de seguridad y solo acceden a ellos las personas que los necesitan.</p>
<h3>Visitantes de la Unión Europea, el Reino Unido y Brasil</h3>
<p>Si resides allí, tratamos tus datos con base en la ejecución del contrato de hospedaje, el cumplimiento de obligaciones legales, nuestro interés legítimo en la seguridad y, cuando aplica, tu consentimiento. Tienes además derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad (RGPD / UK GDPR / LGPD), y puedes acudir a tu autoridad de protección de datos.</p>`,
      },
      {
        id: 'cookies',
        title: 'Cookies y privacidad en este sitio',
        html: `<ul><li><strong>Sin cookies de rastreo ni publicidad.</strong> Este sitio no usa analítica de terceros ni píxeles de redes sociales.</li><li>Guardamos en tu propio navegador (almacenamiento local) solo tus preferencias: idioma, modo claro u oscuro, moneda y si ya viste el aviso de privacidad. Puedes borrarlas desde tu navegador.</li><li>El mapa de OpenStreetMap solo se carga si haces clic en «Cargar el mapa».</li><li>Al escribirnos por WhatsApp o desde plataformas como Airbnb, se aplican también las políticas de esas empresas.</li><li>El sitio está alojado en GitHub Pages (GitHub, Inc., Estados Unidos), que puede registrar datos técnicos como la dirección IP por razones de seguridad.</li></ul>`,
      },
      {
        id: 'terminos',
        title: 'Términos de hospedaje',
        html: `<ul><li><strong>Contrato de hospedaje.</strong> La reserva confirmada por escrito constituye un contrato de hospedaje regido por la ley colombiana (Código de Comercio y normas de turismo). Las tarifas que muestra este sitio son indicativas hasta que te las confirmemos por escrito.</li><li><strong>Confirmación.</strong> Las estadías cortas y medianas se confirman con un anticipo del {deposit} %. Las estadías largas, con el primer mes y un depósito reembolsable, según el acuerdo de alojamiento firmado.</li><li><strong>Registro.</strong> Todo huésped presenta documento de identidad vigente (cédula o pasaporte) al llegar. Los datos se registran en la Tarjeta de Registro Hotelero y, para extranjeros, se reportan a Migración Colombia.</li><li><strong>Menores de edad.</strong> Se hospedan solo con sus padres o con un adulto autorizado por escrito, presentando registro civil o documento que acredite el parentesco.</li><li><strong>Ocupación.</strong> Cada habitación tiene una capacidad máxima. Las visitas deben anunciarse y registrarse; por seguridad no pueden pernoctar sin registrarse como huéspedes.</li><li><strong>Pagos y factura.</strong> Los precios se liquidan en pesos colombianos e incluyen los impuestos que apliquen. Emitimos factura electrónica. Los extranjeros no residentes pueden acceder a la exención de IVA prevista en el Estatuto Tributario cuando se cumplan los requisitos.</li><li><strong>Cuidado del inmueble.</strong> El huésped responde por los daños que cause en la habitación o las zonas comunes. Recomendamos no dejar objetos de valor a la vista.</li><li><strong>Derecho de admisión.</strong> Podemos negar o terminar el hospedaje por razones de seguridad o por incumplimiento grave de estas normas, nunca por motivos discriminatorios.</li><li><strong>Plataformas.</strong> Si reservas por Airbnb, Booking u otra plataforma, se aplican además sus términos y su política de cancelación.</li><li><strong>Quejas y reclamos.</strong> Escríbenos y te respondemos dentro de los plazos legales. Puedes acudir a la Superintendencia de Industria y Comercio según la Ley 1480 de 2011.</li></ul>`,
      },
      {
        id: 'cancelacion',
        title: 'Política de cancelación',
        html: `<table><thead><tr><th>Estadía</th><th>Cancelación sin costo</th><th>Después de ese plazo</th></tr></thead><tbody><tr><td>Corta (1–6 noches)</td><td>Hasta 72 horas antes de la llegada</td><td>Se cobra la primera noche</td></tr><tr><td>Mediana (7–29 noches)</td><td>Hasta 7 días antes de la llegada</td><td>Se retiene el 50 % del anticipo; con menos de 48 horas, el anticipo completo</td></tr><tr><td>Larga (30 noches o más)</td><td>Hasta 14 días antes de la llegada</td><td>Se retiene el 50 % del anticipo</td></tr></tbody></table>
<ul><li><strong>No presentarse</strong> sin aviso equivale a cancelar fuera de plazo.</li><li><strong>Salida anticipada</strong> en estadías cortas y medianas: se cobran las noches usadas con la tarifa que corresponda a la duración real. En estadías largas se requiere aviso escrito de 15 días.</li><li><strong>Fuerza mayor</strong> (cierre de vías, emergencia médica, desastre natural): reprogramamos sin costo dentro de los 6 meses siguientes.</li><li><strong>Reembolsos</strong> por el mismo medio de pago, dentro de los 10 días hábiles siguientes. Los costos de transferencias internacionales corren por cuenta de quien las solicita.</li></ul>`,
      },
      {
        id: 'normas',
        title: 'Normas de la casa',
        html: `<ul><li>Llegada desde las {checkin} y salida hasta las {checkout}.</li><li>Silencio entre las {quietFrom} y las {quietTo}, por respeto a los demás huéspedes y vecinos.</li><li>Prohibido fumar o vapear dentro de las habitaciones y zonas cerradas.</li><li>No se permiten fiestas, eventos ni sustancias ilegales.</li><li>Las visitas se anuncian y registran.</li><li>Mascotas solo con autorización previa; los perros de asistencia siempre son bienvenidos.</li><li>Cuida el agua y la energía: apaga luces y aparatos al salir.</li><li>Ayúdanos a reciclar: separa los residuos según las indicaciones.</li></ul>`,
      },
      {
        id: 'escnna',
        title: 'Prevención de la explotación sexual de niñas, niños y adolescentes',
        html: `<p><strong>Advertencia:</strong> en desarrollo de lo dispuesto en el artículo 17 de la Ley 679 de 2001, Camelot advierte al huésped que la explotación y el abuso sexual de menores de edad en el país son sancionados penal y administrativamente, conforme a las leyes vigentes.</p>
<p>Camelot cumple la Ley 1336 de 2009 y el código de conducta contra la ESCNNA. No se permite el ingreso de menores de edad sin sus padres o un adulto autorizado. Denuncia cualquier sospecha: Línea 141 del ICBF, Línea 123 de la Policía Nacional o en <a href="https://www.teprotejo.org" rel="noopener" target="_blank">teprotejo.org</a>.</p>`,
      },
      {
        id: 'accesibilidad',
        title: 'Accesibilidad',
        html: `<p>Este sitio busca cumplir las pautas WCAG 2.2 nivel AA: contraste adecuado, navegación con teclado, textos alternativos y respeto por la preferencia de movimiento reducido.</p><p>Si tienes necesidades de movilidad o de otro tipo, cuéntanos antes de reservar: te informamos con precisión sobre accesos, escaleras y la habitación más conveniente.</p>`,
      },
      {
        id: 'creditos',
        title: 'Créditos de imágenes',
        html: `<p>Las fotografías de lugares del Quindío provienen de Wikimedia Commons y se usan según sus licencias libres; fueron recortadas y redimensionadas. Las fotos de habitaciones son ilustrativas mientras publicamos fotografías propias.</p>{credits}`,
      },
    ],
  },

  merlin: {
    name: 'Merlín',
    role: 'Conserje digital de Camelot',
    open: 'Abrir el conserje Merlín',
    close: 'Cerrar el conserje',
    greeting: '¡Bienvenido a Camelot! Soy Merlín. Pregúntame lo que quieras sobre tu estadía o elige un tema.',
    placeholder: 'Escribe tu pregunta…',
    send: 'Enviar',
    fallback: 'Esa pregunta merece un anfitrión de carne y hueso. ¿Te comunico con él?',
    toHost: 'Hablar con el anfitrión',
    more: 'Otros temas',
    topics: [
      { id: 'rates', label: 'Tarifas', kw: ['precio', 'tarifa', 'costo', 'cuanto', 'valor', 'noche', 'barato'], a: 'La tarifa depende de la habitación y de cuántas noches te quedas: desde 7 noches hay {mediumPct} % de descuento y desde 30 noches tarifa mensual. Usa la calculadora y verás el total al instante.', action: 'calc' },
      { id: 'long', label: 'Estadía larga', kw: ['mes', 'meses', 'mensual', 'largo', 'larga', 'temporada', 'vivir', 'fiador'], a: 'Para 30 noches o más tenemos tarifa mensual con servicios, Wi-Fi y aseo incluidos, sin fiador ni codeudor. Firmamos un acuerdo sencillo por escrito.', action: 'long' },
      { id: 'checkin', label: 'Llegada y salida', kw: ['llegada', 'checkin', 'check-in', 'salida', 'checkout', 'hora', 'temprano', 'tarde'], a: 'La llegada es desde las {checkin} y la salida hasta las {checkout}. Si llegas antes o sales más tarde, avísanos y lo acomodamos según disponibilidad.' },
      { id: 'arrive', label: 'Cómo llegar', kw: ['aeropuerto', 'terminal', 'bus', 'taxi', 'llegar', 'avion', 'vuelo', 'transporte'], a: 'Desde el Aeropuerto El Edén (AXM) son unos 25 minutos en taxi; desde la Terminal de Transportes, unos 10. Te mandamos la ubicación exacta al reservar.' },
      { id: 'where', label: 'Ubicación', kw: ['donde', 'ubicacion', 'direccion', 'centro', 'barrio', 'zona', 'seguro'], a: 'Estamos en el centro de Armenia, a pocas cuadras de la Plaza de Bolívar, bancos, comercio y transporte hacia todo el Quindío.' },
      { id: 'pay', label: 'Pagos y factura', kw: ['pago', 'pagar', 'tarjeta', 'transferencia', 'efectivo', 'nequi', 'factura', 'iva', 'dolares'], a: 'Confirmamos los medios de pago al reservar (transferencia, pagos digitales o efectivo). Emitimos factura electrónica, también a nombre de empresas.' },
      { id: 'pets', label: 'Mascotas', kw: ['mascota', 'perro', 'gato', 'pet'], a: 'Consúltanos antes de reservar y te contamos las condiciones. Los perros de asistencia siempre son bienvenidos.' },
      { id: 'parking', label: 'Parqueadero', kw: ['parqueadero', 'parqueo', 'carro', 'moto', 'estacionamiento'], a: 'Pregúntanos por la disponibilidad; en el centro hay parqueaderos públicos a pocas cuadras.' },
      { id: 'wifi', label: 'Wi-Fi y trabajo', kw: ['wifi', 'internet', 'trabajar', 'remoto', 'videollamada', 'senal'], a: 'El Wi-Fi es gratuito para todos los huéspedes. Si trabajas con videollamadas, pídenos la habitación con mejor señal.' },
      { id: 'cancel', label: 'Cancelación', kw: ['cancelar', 'cancelacion', 'reembolso', 'devolucion', 'cambiar'], a: 'Cortas: sin costo hasta 72 h antes. Medianas: hasta 7 días antes. Largas: hasta 14 días antes. El detalle está en las políticas.', action: 'legal' },
      { id: 'todo', label: 'Qué hacer', kw: ['hacer', 'turismo', 'cocora', 'salento', 'filandia', 'parque', 'tour', 'visitar', 'cafe'], a: 'Valle de Cocora, Salento, Filandia, Parque del Café, PANACA, el Jardín Botánico… todo a menos de una hora. Mira nuestra guía con tiempos desde Camelot.', action: 'guide' },
      { id: 'access', label: 'Accesibilidad', kw: ['accesible', 'accesibilidad', 'silla', 'escaleras', 'movilidad', 'discapacidad'], a: 'Cuéntanos qué necesitas antes de reservar y te informamos con precisión sobre accesos, escaleras y la habitación más conveniente.' },
    ],
    actions: { calc: 'Abrir la calculadora', long: 'Ver estadías largas', legal: 'Ver políticas', guide: 'Abrir la guía' },
    waMsg: 'Hola, Camelot. Vengo de la página web y tengo una pregunta:',
  },

  toasts: {
    langSuggest: 'Esta página también está en español.',
    switchLang: 'Cambiar',
    dismiss: 'Cerrar',
    privacy: 'Este sitio no usa cookies de rastreo. Solo guardamos tus preferencias en tu navegador.',
    privacyOk: 'Entendido',
    privacyMore: 'Más información',
    pendingChannel: 'Este canal de reservas se activará muy pronto. Mientras tanto, usa el formulario de contacto.',
  },

  notFound: {
    title: 'Esta puerta del castillo no existe',
    text: 'La página que buscas se perdió en el bosque. Vuelve al inicio o consulta la guía.',
    cta: 'Volver al inicio',
  },
};
