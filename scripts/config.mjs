// ============================================================================
//  CAMELOT · CONFIGURACIÓN CENTRAL  —  EDITA AQUÍ los datos del negocio.
//  Después de editar:  npm run build   (o: node scripts/build.mjs)
//  Lo que dice "PENDIENTE" está en PENDIENTES.md.
// ============================================================================

export const SITE = {
  name: 'Camelot',

  // URL pública SIN barra final y ruta base CON barras.
  // Hoy: vista previa en GitHub Pages. Con dominio propio:
  //   baseUrl: 'https://www.tudominio.com', basePath: '/'
  baseUrl: 'https://droko1982.github.io/camelot-rbnb',
  basePath: '/camelot-rbnb/',

  author: 'Dr. Mauricio Rodríguez Herrera',

  contact: {
    whatsapp: '',        // PENDIENTE · solo dígitos con indicativo, ej. '573001234567'
    phoneDisplay: '',    // PENDIENTE · como se muestra, ej. '+57 300 123 4567'
    email: '',           // PENDIENTE · ej. 'reservas@camelot...'
    formEndpoint: '',    // opcional · ej. 'https://formsubmit.co/ajax/<correo>' (si queda vacío, el formulario arma el mensaje para WhatsApp o correo)
    instagram: '',       // opcional · URL completa
    facebook: '',        // opcional · URL completa
    airbnbUrl: '',       // PENDIENTE · URL del anuncio cuando exista
    bookingUrl: '',      // opcional · URL en Booking.com
    googleMapsUrl: '',   // opcional · enlace "Cómo llegar" de Google Maps
  },

  legal: {
    businessName: '',    // PENDIENTE · razón social o nombre del titular
    nit: '',             // PENDIENTE · NIT o cédula del responsable
    rnt: '',             // PENDIENTE · Registro Nacional de Turismo (obligatorio para alojamiento)
    policyDate: '2026-11-19',
  },

  address: {
    street: '',          // PENDIENTE · dirección exacta (vacía = solo se muestra "Centro, Armenia")
    area: 'Centro',
    city: 'Armenia',
    region: 'Quindío',
    country: 'CO',
    postalCode: '',
  },
  // Coordenadas aproximadas del centro de Armenia (ajustar al punto exacto).
  geo: { lat: 4.5354, lng: -75.6780 },

  totalRooms: 14,        // por confirmar
  checkin: '15:00',
  checkout: '12:00',
  quietFrom: '22:00',
  quietTo: '07:00',

  // ---- Tarifas (COP). INDICATIVAS hasta que el dueño las confirme. ----------
  pricesConfirmed: false,       // true = quita la etiqueta "tarifa indicativa"
  tiers: {
    mediumFrom: 7,              // noches desde las que aplica "estadía mediana"
    longFrom: 30,               // noches desde las que aplica "estadía larga"
    mediumDiscount: 0.15,       // descuento de estadía mediana sobre la tarifa por noche
  },
  directBookingDiscount: 0,     // ej. 0.05 = 5 % por reservar directo (0 = no se muestra)
  depositShort: 0.3,            // anticipo para confirmar estadías cortas y medianas
  // Tasas de referencia para mostrar precios aproximados en otras monedas.
  fx: { USD: 4000, EUR: 4400 },

  // Fotos de habitaciones: true = muestra la etiqueta "imagen ilustrativa".
  photosIllustrative: true,

  rooms: [
    { id: 'escudero',  img: 'room-escudero',  guests: 1, beds: { double: 1 }, night: 85000,  month: 1450000 },
    { id: 'caballero', img: 'room-caballero', guests: 2, beds: { double: 1 }, night: 120000, month: 1850000 },
    { id: 'hermandad', img: 'room-hermandad', guests: 3, beds: { double: 1, single: 1 }, night: 150000, month: 2200000 },
    { id: 'mesa',      img: 'room-mesa',      guests: 5, beds: { double: 2, single: 1 }, night: 210000, month: 2900000 },
  ],

  // Servicios que se muestran. Quita los que no apliquen (ver PENDIENTES.md).
  amenities: ['bath', 'wifi', 'tv', 'linen', 'hotwater', 'cleaning', 'coffee', 'desk', 'laundry', 'luggage', 'concierge', 'invoice'],

  // Lugares para la guía (minutos aproximados desde el centro de Armenia).
  places: [
    { id: 'plaza',      img: 'place-plaza',      min: 8,  km: 0.7, mode: 'walk', lat: 4.5339, lng: -75.6729 },
    { id: 'parquevida', img: 'place-parquevida', min: 10, km: 3,   mode: 'car',  lat: 4.5487, lng: -75.6626 },
    { id: 'museo',      img: 'place-museo',      min: 12, km: 5,   mode: 'car',  lat: 4.5571, lng: -75.6570 },
    { id: 'botanico',   img: 'place-botanico',   min: 25, km: 10,  mode: 'car',  lat: 4.5266, lng: -75.6435 },
    { id: 'parquecafe', img: 'place-parquecafe', min: 30, km: 13,  mode: 'car',  lat: 4.5385, lng: -75.7716 },
    { id: 'panaca',     img: 'place-panaca',     min: 45, km: 27,  mode: 'car',  lat: 4.6238, lng: -75.7838 },
    { id: 'cocora',     img: 'place-cocora',     min: 55, km: 35,  mode: 'car',  lat: 4.6372, lng: -75.4870 },
    { id: 'filandia',   img: 'place-filandia',   min: 50, km: 32,  mode: 'car',  lat: 4.6747, lng: -75.6583 },
  ],

  languages: ['es', 'en', 'fr', 'de', 'pt'],
  defaultLang: 'es',
  xDefault: 'en',
};
