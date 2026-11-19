// Generador estático de Camelot: una página real por idioma (mejor SEO internacional).
// Uso: node scripts/build.mjs   → escribe index.html, en/, fr/, de/, pt/, sitemap.xml, etc.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { SITE } from './config.mjs';
import { sprite, icon, castleSvg, castleStandalone } from './icons.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const T = {};
for (const c of SITE.languages) {
  const f = path.join(ROOT, 'scripts', 'i18n', `${c}.mjs`);
  if (fs.existsSync(f)) T[c] = (await import(pathToFileURL(f).href)).default;
}
const LANGS = SITE.languages.filter((c) => T[c]);
const CREDITS = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/data/credits.json'), 'utf8'));
const LOCALE = { es: 'es-CO', en: 'en-US', fr: 'fr-FR', de: 'de-DE', pt: 'pt-BR' };
const ORIGIN = new URL(SITE.baseUrl).origin;
const BASE = SITE.basePath;
const TODAY = new Date().toISOString().slice(0, 10);
const PAGES = ['home', 'long', 'guide', 'legal'];
const XDEF = LANGS.includes(SITE.xDefault) ? SITE.xDefault : SITE.defaultLang;

// ---------- utilidades ----------
const strip = (s) => String(s ?? '').replace(/<[^>]+>/g, '');
const attr = (s) => strip(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const xml = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const rel = (lang, page) => (lang === SITE.defaultLang ? '' : `${lang}/`) + (page === 'home' ? '' : `${T[lang].slugs[page]}/`);
const href = (lang, page, hash = '') => BASE + rel(lang, page) + hash;
const abs = (lang, page) => ORIGIN + href(lang, page);
const asset = (p) => `${BASE}assets/${p}`;
const fill = (s, v) => String(s).replace(/\{([a-zA-Z]+)\}/g, (m, k) => (v[k] !== undefined ? String(v[k]) : m));
const deepFill = (o, v) => (typeof o === 'string' ? fill(o, v) : Array.isArray(o) ? o.map((x) => deepFill(x, v)) : o && typeof o === 'object' ? Object.fromEntries(Object.entries(o).map(([k, x]) => [k, k === 'kw' ? x : deepFill(x, v)])) : o);
const ld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;
const hash = (f) => crypto.createHash('sha1').update(fs.readFileSync(path.join(ROOT, f))).digest('hex').slice(0, 8);
const V = { css: hash('css/styles.css'), js: hash('js/app.js'), theme: hash('js/theme.js') };
const money = (lang, n) => new Intl.NumberFormat(LOCALE[lang], { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n);
const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];

function img(name, alt, { sizes = '100vw', eager = false, cls = '' } = {}) {
  const c = CREDITS[name];
  if (!c) throw new Error('Imagen sin créditos: ' + name);
  const ws = c.widths;
  const big = ws[ws.length - 1];
  const srcset = ws.map((w) => `${asset(`img/${name}-${w}.webp`)} ${w}w`).join(', ');
  return `<img src="${asset(`img/${name}-${ws[1] ?? ws[0]}.webp`)}" srcset="${srcset}" sizes="${sizes}" width="${big}" height="${Math.round(big / c.ratio)}" alt="${attr(alt)}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"${cls ? ` class="${cls}"` : ''}>`;
}
const full = (name) => asset(`img/${name}-${CREDITS[name].widths.at(-1)}.webp`);

function vars(lang) {
  const t = T[lang];
  const pend = t.legal.pendingData;
  return {
    checkin: SITE.checkin, checkout: SITE.checkout, quietFrom: SITE.quietFrom, quietTo: SITE.quietTo,
    rooms: SITE.totalRooms, mediumFrom: SITE.tiers.mediumFrom, longFrom: SITE.tiers.longFrom,
    mediumPct: Math.round(SITE.tiers.mediumDiscount * 100), deposit: Math.round(SITE.depositShort * 100),
    guideUrl: href(lang, 'guide'), longUrl: href(lang, 'long'), legalUrl: href(lang, 'legal'),
    date: new Intl.DateTimeFormat(LOCALE[lang], { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(SITE.legal.policyDate)),
    businessName: SITE.legal.businessName || pend, nit: SITE.legal.nit || pend,
    email: SITE.contact.email || pend, phone: SITE.contact.phoneDisplay || pend,
    credits: creditsHtml(),
  };
}

function creditsHtml() {
  const seen = new Set();
  const rows = Object.values(CREDITS).filter((c) => (seen.has(c.file) ? false : seen.add(c.file))).map((c) =>
    `<li><a href="${attr(c.page)}" rel="noopener" target="_blank">${xml(c.file.replace(/\.[a-z]+$/i, '').replace(/_/g, ' '))}</a> — ${xml(c.author || 'Wikimedia Commons')} · ${c.licenseUrl ? `<a href="${attr(c.licenseUrl)}" rel="noopener license" target="_blank">${xml(c.license)}</a>` : xml(c.license)}</li>`);
  return `<ul class="credits">${rows.join('')}</ul>`;
}

const wa = SITE.contact.whatsapp;
const waHref = (text) => (wa ? `https://wa.me/${wa}?text=${encodeURIComponent(text)}` : '#contacto');

// ---------- piezas comunes ----------
function head(lang, page, t, { title, description, image = 'og', preload = '' }) {
  const alts = LANGS.map((l) => `<link rel="alternate" hreflang="${l}" href="${abs(l, page)}">`).join('') + `<link rel="alternate" hreflang="x-default" href="${abs(XDEF, page)}">`;
  const ogAlt = LANGS.filter((l) => l !== lang).map((l) => `<meta property="og:locale:alternate" content="${T[l].locale}">`).join('');
  const csp = [
    "default-src 'self'", "script-src 'self'", "style-src 'self'", "img-src 'self' data:", "font-src 'self'",
    "connect-src 'self' https://formsubmit.co", 'frame-src https://www.openstreetmap.org', "form-action 'self' https://formsubmit.co",
    "base-uri 'self'", "object-src 'none'", "manifest-src 'self'", "worker-src 'self'",
  ].join('; ');
  const ogImg = `${ORIGIN}${asset(`${image}.jpg`)}`;
  return `<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${xml(strip(title))}</title>
<meta name="description" content="${attr(description)}">
<meta name="keywords" content="${attr(t.seo.keywords)}">
<meta name="author" content="${attr(SITE.author)}">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<meta http-equiv="Content-Security-Policy" content="${csp}">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta name="color-scheme" content="light dark">
<meta name="theme-color" media="(prefers-color-scheme: light)" content="#F7F2E8">
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0E1424">
<link rel="canonical" href="${abs(lang, page)}">
${alts}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${attr(t.seo.siteName)}">
<meta property="og:title" content="${attr(title)}">
<meta property="og:description" content="${attr(description)}">
<meta property="og:url" content="${abs(lang, page)}">
<meta property="og:image" content="${ogImg}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${attr(t.seo.siteName)}">
<meta property="og:locale" content="${t.locale}">${ogAlt}
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${attr(title)}">
<meta name="twitter:description" content="${attr(description)}">
<meta name="twitter:image" content="${ogImg}">
<meta name="geo.region" content="CO-QUI">
<meta name="geo.placename" content="Armenia, Quindío">
<meta name="geo.position" content="${SITE.geo.lat};${SITE.geo.lng}">
<meta name="ICBM" content="${SITE.geo.lat}, ${SITE.geo.lng}">
<link rel="icon" href="${asset('icons/favicon.svg')}" type="image/svg+xml">
<link rel="icon" href="${asset('icons/icon-32.png')}" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="${asset('icons/apple-touch-icon.png')}">
<link rel="manifest" href="${BASE}manifest.webmanifest">
<link rel="preload" href="${asset('fonts/cormorant-latin.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${asset('fonts/manrope-latin.woff2')}" as="font" type="font/woff2" crossorigin>
${preload}<link rel="stylesheet" href="${BASE}css/styles.css?v=${V.css}">
<script src="${BASE}js/theme.js?v=${V.theme}"></script>
<script src="${BASE}js/app.js?v=${V.js}" defer></script>
</head>`;
}

function header(lang, page, t) {
  const H = (hash) => href(lang, 'home', hash);
  const desk = [
    [t.nav.stays, H('#estadias')], [t.nav.rooms, H('#habitaciones')], [t.nav.long, href(lang, 'long'), 'long'],
    [t.nav.guide, href(lang, 'guide'), 'guide'], [t.nav.location, H('#ubicacion')], [t.nav.contact, H('#contacto')],
  ];
  const mob = [
    [t.nav.stays, H('#estadias')], [t.nav.rooms, H('#habitaciones')], [t.nav.legend, H('#experiencia')], [t.nav.calc, H('#tarifas')],
    [t.nav.long, href(lang, 'long'), 'long'], [t.nav.guide, href(lang, 'guide'), 'guide'], [t.nav.location, H('#ubicacion')],
    [t.nav.faq, H('#preguntas')], [t.nav.contact, H('#contacto')],
  ];
  const li = (arr) => arr.map(([txt, u, p]) => `<li><a href="${u}"${p === page ? ' aria-current="page"' : ''}>${txt}</a></li>`).join('');
  const langs = LANGS.map((l) => `<li><a href="${href(l, page)}" hreflang="${l}" lang="${l}" data-set-lang="${l}"${l === lang ? ' aria-current="true"' : ''}><span class="lang-code">${T[l].short}</span>${T[l].name}</a></li>`).join('');
  return `<a class="skip-link" href="#main">${t.nav.skip}</a>
<header class="site-header${page === 'home' ? ' is-over-hero' : ''}" data-header>
  <div class="container header-inner">
    <a class="brand" href="${href(lang, 'home')}" aria-label="Camelot — ${attr(t.nav.home)}">
      ${castleSvg('crest')}
      <span class="brand-text"><span class="brand-name">Camelot</span><span class="brand-sub">Armenia · Quindío</span></span>
    </a>
    <nav class="main-nav" aria-label="${attr(t.nav.menu)}"><ul>${li(desk)}</ul></nav>
    <div class="header-actions">
      <div class="lang-menu" data-lang-menu>
        <button class="icon-btn lang-btn" type="button" aria-expanded="false" aria-controls="lang-list-${page}" aria-label="${attr(t.nav.langLabel)}: ${attr(t.name)}">${icon('globe')}<span>${t.short}</span></button>
        <ul class="lang-list" id="lang-list-${page}" hidden>${langs}</ul>
      </div>
      <button class="icon-btn theme-btn" type="button" data-theme-toggle aria-label="${attr(t.nav.themeLabel)}">${icon('sun', 'ico ico-sun')}${icon('moon', 'ico ico-moon')}</button>
      <a class="btn btn-primary btn-sm header-cta" href="${H('#tarifas')}">${t.nav.book}</a>
      <button class="icon-btn menu-btn" type="button" data-menu-btn aria-expanded="false" aria-controls="mobile-nav" aria-label="${attr(t.nav.menu)}">${icon('menu', 'ico ico-open')}${icon('close', 'ico ico-close')}</button>
    </div>
  </div>
  <div class="mobile-nav" id="mobile-nav" hidden>
    <nav aria-label="${attr(t.nav.menu)}"><ul class="mobile-links">${li(mob)}</ul></nav>
    <ul class="mobile-langs">${langs}</ul>
  </div>
</header>`;
}

function footer(lang, t) {
  const L = href(lang, 'legal');
  const c = SITE.contact;
  const contactLines = [
    c.phoneDisplay && `<li><a href="${waHref(t.merlin.waMsg)}" rel="noopener" target="_blank">${icon('whatsapp')}${xml(c.phoneDisplay)}</a></li>`,
    c.email && `<li><a href="mailto:${c.email}">${icon('mail')}${xml(c.email)}</a></li>`,
    `<li>${icon('pin')}${xml(SITE.address.street ? `${SITE.address.street}, ` : '')}${xml(SITE.address.area)}, Armenia, Quindío, Colombia</li>`,
    c.instagram && `<li><a href="${attr(c.instagram)}" rel="noopener me" target="_blank">${icon('instagram')}Instagram</a></li>`,
    c.facebook && `<li><a href="${attr(c.facebook)}" rel="noopener me" target="_blank">${icon('facebook')}Facebook</a></li>`,
  ].filter(Boolean).join('');
  const fl = t.footer.links;
  return `<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <a class="brand brand-footer" href="${href(lang, 'home')}">${castleSvg('crest')}<span class="brand-text"><span class="brand-name">Camelot</span><span class="brand-sub">Armenia · Quindío</span></span></a>
      <p>${t.footer.tagline}</p>
      <p class="rnt">${SITE.legal.rnt ? `${t.footer.rnt} ${xml(SITE.legal.rnt)}` : t.footer.rntPending}</p>
    </div>
    <div><h2 class="footer-title">${t.footer.explore}</h2><ul class="footer-links">
      <li><a href="${href(lang, 'home', '#estadias')}">${t.nav.stays}</a></li><li><a href="${href(lang, 'home', '#habitaciones')}">${t.nav.rooms}</a></li>
      <li><a href="${href(lang, 'long')}">${t.nav.long}</a></li><li><a href="${href(lang, 'guide')}">${t.nav.guide}</a></li>
      <li><a href="${href(lang, 'home', '#preguntas')}">${t.nav.faq}</a></li><li><a href="${href(lang, 'home', '#contacto')}">${t.nav.contact}</a></li></ul></div>
    <div><h2 class="footer-title">${t.footer.legalTitle}</h2><ul class="footer-links">
      <li><a href="${L}#privacidad">${fl.privacy}</a></li><li><a href="${L}#terminos">${fl.terms}</a></li><li><a href="${L}#cancelacion">${fl.cancel}</a></li>
      <li><a href="${L}#normas">${fl.rules}</a></li><li><a href="${L}#escnna">${fl.escnna}</a></li><li><a href="${L}#accesibilidad">${fl.a11y}</a></li><li><a href="${L}#creditos">${fl.credits}</a></li></ul></div>
    <div><h2 class="footer-title">${t.footer.contactTitle}</h2><ul class="footer-links footer-contact">${contactLines}</ul>
      <ul class="footer-langs">${LANGS.map((l) => `<li><a href="${href(l, 'home')}" hreflang="${l}" lang="${l}" data-set-lang="${l}">${T[l].short}</a></li>`).join('')}</ul></div>
  </div>
  <div class="container footer-escnna">${icon('shield')}<p>${t.footer.escnna}</p></div>
  <div class="container footer-bottom"><p>© ${new Date().getFullYear()} Camelot · ${t.footer.rights}</p><p>${t.footer.madeBy}</p></div>
</footer>`;
}

function floating(lang, t) {
  const m = t.merlin;
  return `<button class="merlin-fab" type="button" data-merlin-open aria-expanded="false" aria-controls="merlin" aria-label="${attr(m.open)}">${icon('merlin')}<span class="merlin-fab-label">${m.name}</span></button>
<section class="merlin" id="merlin" aria-label="${attr(m.name)} — ${attr(m.role)}" hidden>
  <header class="merlin-head"><span class="merlin-avatar">${icon('merlin')}</span><div><p class="merlin-name">${m.name}</p><p class="merlin-role">${m.role}</p></div>
  <button class="icon-btn" type="button" data-merlin-close aria-label="${attr(m.close)}">${icon('close')}</button></header>
  <div class="merlin-log" data-merlin-log aria-live="polite"></div>
  <div class="merlin-chips" data-merlin-chips></div>
  <form class="merlin-form" data-merlin-form><label class="sr-only" for="merlin-q">${m.placeholder}</label><input id="merlin-q" name="q" autocomplete="off" placeholder="${attr(m.placeholder)}" maxlength="200"><button class="icon-btn" type="submit" aria-label="${attr(m.send)}">${icon('send')}</button></form>
</section>
<a class="to-top" href="#main" data-to-top aria-label="${attr(t.nav.backTop)}">${icon('up')}</a>
<div class="toasts" data-toasts aria-live="polite"></div>
<dialog class="lightbox" data-lightbox aria-label="Galería">
  <button class="icon-btn lb-close" type="button" data-lb-close aria-label="${attr(t.nav.close)}">${icon('close')}</button>
  <button class="icon-btn lb-prev" type="button" data-lb-prev aria-label="←">${icon('chevL')}</button>
  <figure class="lb-figure"><img data-lb-img alt=""><figcaption data-lb-cap></figcaption></figure>
  <button class="icon-btn lb-next" type="button" data-lb-next aria-label="→">${icon('chevR')}</button>
</dialog>`;
}

function clientData(lang, page, t) {
  const roomName = (r) => t.rooms.items[r.id].name;
  const gallery = ['room-escudero', 'room-caballero', 'room-hermandad', 'room-mesa', 'room-detalle', 'room-suite'];
  const galleryAlt = [...SITE.rooms.map((r) => t.rooms.items[r.id].alt), t.rooms.items.caballero.alt, t.rooms.items.mesa.alt];
  const data = {
    lang, locale: LOCALE[lang], page, base: BASE,
    urls: { home: href(lang, 'home'), long: href(lang, 'long'), guide: href(lang, 'guide'), legal: href(lang, 'legal') },
    sw: `${BASE}sw.js`,
    cfg: {
      whatsapp: SITE.contact.whatsapp, email: SITE.contact.email, formEndpoint: SITE.contact.formEndpoint,
      fx: SITE.fx, tiers: SITE.tiers, direct: SITE.directBookingDiscount, deposit: SITE.depositShort, pricesConfirmed: SITE.pricesConfirmed,
      geo: SITE.geo, rooms: SITE.rooms.map((r) => ({ id: r.id, name: roomName(r), guests: r.guests, night: r.night, month: r.month })),
    },
    gallery: gallery.map((g, i) => ({ src: full(g), alt: galleryAlt[i] || '' })),
    t: { calc: t.calc, merlin: t.merlin, toasts: t.toasts, contact: t.contact, stays: { short: t.calc.tierShort, medium: t.calc.tierMedium, long: t.calc.tierLong } },
    suggest: Object.fromEntries(LANGS.map((l) => [l, { text: T[l].toasts.langSuggest, cta: T[l].toasts.switchLang, close: T[l].toasts.dismiss, url: href(l, page) }])),
  };
  return `<script type="application/json" id="camelot-data">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
}

function page(lang, pageId, t, meta, body, jsonld) {
  return `<!doctype html>
<html lang="${lang}" dir="ltr">
${head(lang, pageId, t, meta)}
<body class="page-${pageId}">
${sprite()}
${header(lang, pageId, t)}
<main id="main" tabindex="-1">
${body}
</main>
${footer(lang, t)}
${floating(lang, t)}
${clientData(lang, pageId, t)}
${jsonld.map(ld).join('\n')}
</body>
</html>
`;
}

const sectionHead = (s, { id, light = false, center = false } = {}) =>
  `<div class="section-head${center ? ' is-center' : ''}">
    <p class="eyebrow${light ? ' eyebrow-light' : ''} reveal">${s.eyebrow}</p>
    <h2 class="section-title reveal d1"${id ? ` id="${id}"` : ''}>${s.title}</h2>
    ${s.lead ? `<p class="section-lead reveal d2">${s.lead}</p>` : ''}
  </div>`;

function breadcrumb(lang, t, pageId, name) {
  return `<nav class="breadcrumb" aria-label="Breadcrumb"><ol><li><a href="${href(lang, 'home')}">${t.nav.breadcrumbHome}</a></li><li aria-current="page">${name}</li></ol></nav>`;
}
const breadcrumbLd = (lang, t, pageId, name) => ({
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: strip(t.nav.breadcrumbHome), item: abs(lang, 'home') },
    { '@type': 'ListItem', position: 2, name: strip(name), item: abs(lang, pageId) },
  ],
});
const faqLd = (items) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: items.map((f) => ({ '@type': 'Question', name: strip(f.q), acceptedAnswer: { '@type': 'Answer', text: strip(f.a) } })) });

function lodgingLd(lang, t) {
  const c = SITE.contact;
  const sameAs = [c.airbnbUrl, c.bookingUrl, c.instagram, c.facebook].filter(Boolean);
  const o = {
    '@context': 'https://schema.org', '@type': 'LodgingBusiness', '@id': `${ORIGIN}${BASE}#lodging`,
    name: 'Camelot', alternateName: strip(t.seo.siteName), description: strip(t.seo.home.description),
    url: abs(lang, 'home'), image: [ORIGIN + full('hero-armenia'), ORIGIN + full('room-caballero')],
    logo: ORIGIN + asset('icons/icon-512.png'),
    address: { '@type': 'PostalAddress', ...(SITE.address.street ? { streetAddress: SITE.address.street } : {}), addressLocality: 'Armenia', addressRegion: 'Quindío', addressCountry: 'CO', ...(SITE.address.postalCode ? { postalCode: SITE.address.postalCode } : {}) },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    hasMap: `https://www.openstreetmap.org/?mlat=${SITE.geo.lat}&mlon=${SITE.geo.lng}#map=17/${SITE.geo.lat}/${SITE.geo.lng}`,
    checkinTime: SITE.checkin, checkoutTime: SITE.checkout, numberOfRooms: SITE.totalRooms, smokingAllowed: false,
    currenciesAccepted: 'COP', priceRange: `${money('es', Math.min(...SITE.rooms.map((r) => r.night)))} – ${money('es', Math.max(...SITE.rooms.map((r) => r.night)))} COP`,
    availableLanguage: LANGS.map((l) => T[l].name),
    amenityFeature: SITE.amenities.map((a) => ({ '@type': 'LocationFeatureSpecification', name: strip(t.amenities.items[a]), value: true })),
    containsPlace: SITE.rooms.map((r) => ({ '@type': 'HotelRoom', name: `${t.rooms.items[r.id].name} — ${t.rooms.items[r.id].type}`, occupancy: { '@type': 'QuantitativeValue', maxValue: r.guests } })),
    founder: { '@type': 'Person', name: SITE.author },
  };
  if (c.phoneDisplay) o.telephone = c.phoneDisplay;
  if (c.email) o.email = c.email;
  if (sameAs.length) o.sameAs = sameAs;
  if (SITE.pricesConfirmed) {
    o.makesOffer = SITE.rooms.map((r) => ({ '@type': 'Offer', name: t.rooms.items[r.id].name, priceSpecification: { '@type': 'UnitPriceSpecification', price: r.night, priceCurrency: 'COP', unitCode: 'DAY' } }));
  }
  return o;
}

// ---------- página de inicio ----------
function homeBody(lang, t) {
  const H = (h) => href(lang, 'home', h);
  const slides = ['hero-armenia', 'hero-cocora', 'hero-filandia'];
  const guestsOpts = (sel = 2, max = 10) => Array.from({ length: max }, (_, i) => `<option value="${i + 1}"${i + 1 === sel ? ' selected' : ''}>${i + 1}</option>`).join('');
  const stayIcons = { short: 'shield', medium: 'castle', long: 'crown' };
  const presets = { short: 2, medium: 7, long: 30 };
  const minNight = Math.min(...SITE.rooms.map((r) => r.night));

  const bedsText = (r) => {
    const out = [];
    const b = r.beds || {};
    if (b.double) out.push(fill(b.double === 1 ? t.rooms.bedDouble : t.rooms.bedsDouble, { n: b.double }));
    if (b.single) out.push(fill(b.single === 1 ? t.rooms.bedSingle : t.rooms.bedsSingle, { n: b.single }));
    return out.join(' + ');
  };

  return `
<section class="hero" aria-labelledby="hero-title">
  <div class="hero-media" data-slides>
    ${slides.map((n, i) => `<figure class="hero-slide${i === 0 ? ' is-active' : ''}">${img(n, t.hero.slides[i], { sizes: '100vw', eager: i === 0 })}</figure>`).join('')}
  </div>
  <div class="hero-scrim" aria-hidden="true"></div>
  <div class="container hero-inner">
    <h1 id="hero-title" class="hero-h1"><span class="eyebrow eyebrow-light reveal">${t.hero.eyebrow}</span><span class="hero-title reveal d1">${t.hero.title}</span></h1>
    <p class="hero-lead reveal d2">${t.hero.lead}</p>
    <div class="hero-ctas reveal d3"><a class="btn btn-primary btn-lg" href="#tarifas">${icon('calendar')}${t.hero.ctaPrimary}</a><a class="btn btn-glass btn-lg" href="#habitaciones">${t.hero.ctaSecondary}${icon('arrow')}</a></div>
    <ul class="hero-chips reveal d4">${t.hero.chips.map((c) => `<li>${icon('check')}${c}</li>`).join('')}</ul>
  </div>
  <form class="quick-book reveal d5" data-quickbook>
    <label class="qb-field"><span>${icon('calendar')}${t.calc.checkin}</span><input type="date" name="in" required></label>
    <label class="qb-field"><span>${icon('calendar')}${t.calc.checkout}</span><input type="date" name="out" required></label>
    <label class="qb-field qb-guests"><span>${icon('users')}${t.calc.guests}</span><select name="guests">${guestsOpts(2)}</select></label>
    <button class="btn btn-primary" type="submit">${t.stays.cta}${icon('arrow')}</button>
  </form>
  <div class="hero-dots" data-dots aria-hidden="true">${slides.map((_, i) => `<span${i === 0 ? ' class="is-active"' : ''}></span>`).join('')}</div>
</section>

<section class="section section-stays" id="estadias" aria-labelledby="stays-title">
  <div class="container">
    ${sectionHead(t.stays, { id: 'stays-title', center: true })}
    <div class="stays-grid">
      ${['short', 'medium', 'long'].map((k, i) => {
        const s = t.stays.items[k];
        return `<article class="stay-card reveal d${i + 1}${k === 'long' ? ' is-featured' : ''}">
        <div class="stay-icon">${icon(stayIcons[k])}</div>
        <p class="stay-tag">${s.tag}</p>
        <h3 class="stay-name">${s.name}</h3>
        <p class="stay-range">${icon('clock')}${s.range}</p>
        <p class="stay-desc">${s.desc}</p>
        <ul class="ticks">${s.points.map((p) => `<li>${icon('check')}${p}</li>`).join('')}</ul>
        <div class="stay-actions"><a class="btn ${k === 'long' ? 'btn-primary' : 'btn-ghost'}" href="#tarifas" data-preset="${presets[k]}">${t.stays.cta}</a>
        ${k === 'long' ? `<a class="link-arrow" href="${href(lang, 'long')}">${t.stays.more}${icon('arrow')}</a>` : ''}</div>
      </article>`;
      }).join('')}
    </div>
  </div>
</section>

<section class="section section-rooms" id="habitaciones" aria-labelledby="rooms-title">
  <div class="container">
    ${sectionHead(t.rooms, { id: 'rooms-title' })}
    <div class="rooms-grid">
      ${SITE.rooms.map((r, i) => {
        const it = t.rooms.items[r.id];
        return `<article class="room-card reveal d${(i % 4) + 1}">
        <button class="room-media" type="button" data-gallery="${i}" aria-label="${attr(it.name)} — ${attr(it.alt)}">
          ${img(r.img, it.alt, { sizes: '(min-width: 1100px) 290px, (min-width: 700px) 45vw, 92vw' })}
          ${SITE.photosIllustrative ? `<span class="badge">${t.rooms.illustrative}</span>` : ''}
        </button>
        <div class="room-body">
          <p class="room-type">${it.type}</p>
          <h3 class="room-name">${it.name}</h3>
          <p class="room-desc">${it.desc}</p>
          <ul class="room-meta"><li>${icon('users')}${r.guests === 1 ? t.rooms.guest : fill(t.rooms.guests, { n: r.guests })}</li><li>${icon('bed')}${bedsText(r)}</li><li>${icon('bath')}${t.rooms.privateBath}</li></ul>
          <div class="room-price"><span class="from">${t.rooms.from}</span><strong>${money(lang, r.night)}</strong><span>/ ${t.rooms.perNight}</span>
          <span class="month">${money(lang, r.month)} / ${t.rooms.perMonth}</span>${SITE.pricesConfirmed ? '' : `<span class="tag-indicative">${t.rooms.indicative}</span>`}</div>
          <a class="btn btn-ghost btn-block" href="#tarifas" data-room="${r.id}">${t.rooms.ask}</a>
        </div>
      </article>`;
      }).join('')}
    </div>
  </div>
</section>

<section class="section section-legend" id="experiencia" aria-labelledby="legend-title">
  <div class="container legend-grid">
    <div class="legend-aside">
      ${sectionHead(t.legend, { id: 'legend-title', light: true })}
      <figure class="legend-figure reveal d3">${img('grial-cafe', t.legend.items[1].title, { sizes: '(min-width: 1000px) 40vw, 92vw' })}</figure>
    </div>
    <ol class="legend-list">
      ${t.legend.items.map((it, i) => `<li class="legend-item reveal d${(i % 3) + 1}">
        <span class="legend-num" aria-hidden="true">${roman[i]}</span>
        <span class="legend-icon">${icon(it.key)}</span>
        <div><p class="legend-name">${it.name}</p><h3 class="legend-title">${it.title}</h3><p>${it.desc}</p></div>
      </li>`).join('')}
    </ol>
  </div>
</section>

<section class="section section-amenities" aria-labelledby="amen-title">
  <div class="container">
    ${sectionHead({ eyebrow: t.amenities.eyebrow, title: t.amenities.title }, { id: 'amen-title', center: true })}
    <ul class="amenities">${SITE.amenities.map((a, i) => `<li class="reveal d${(i % 4) + 1}">${icon(a)}<span>${t.amenities.items[a]}</span></li>`).join('')}</ul>
  </div>
</section>

<section class="section section-calc" id="tarifas" aria-labelledby="calc-title">
  <div class="container">
    ${sectionHead(t.calc, { id: 'calc-title', center: true })}
    <div class="calc reveal d2" data-calc>
      <form class="calc-form" novalidate>
        <div class="field"><label for="c-in">${t.calc.checkin}</label><input id="c-in" type="date" name="in"></div>
        <div class="field"><label for="c-out">${t.calc.checkout}</label><input id="c-out" type="date" name="out"></div>
        <div class="field"><label for="c-guests">${t.calc.guests}</label><select id="c-guests" name="guests">${guestsOpts(2)}</select></div>
        <div class="field"><label for="c-room">${t.calc.room}</label><select id="c-room" name="room">${SITE.rooms.map((r) => `<option value="${r.id}"${r.id === 'caballero' ? ' selected' : ''}>${t.rooms.items[r.id].name} · ${t.rooms.items[r.id].type}</option>`).join('')}</select></div>
        <fieldset class="field seg"><legend>${t.calc.currency}</legend>
          ${['COP', 'USD', 'EUR'].map((c, i) => `<label><input type="radio" name="cur" value="${c}"${i === 0 ? ' checked' : ''}><span>${c}</span></label>`).join('')}
        </fieldset>
      </form>
      <div class="calc-result" aria-live="polite">
        <p class="calc-tier" data-tier>${t.calc.pickDates}</p>
        <dl class="calc-lines" data-lines></dl>
        <p class="calc-warn" data-warn hidden></p>
        <p class="calc-note" data-note></p>
        <div class="calc-actions"><button class="btn btn-primary" type="button" data-calc-wa>${icon('whatsapp')}${t.calc.send}</button><button class="btn btn-ghost" type="button" data-calc-mail>${icon('mail')}${t.calc.sendMail}</button></div>
        <p class="fine">${SITE.pricesConfirmed ? '' : t.calc.indicative}</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-band" aria-labelledby="band-title">
  <div class="band-media">${img('room-suite', '', { sizes: '100vw' })}</div>
  <div class="container band-inner">
    ${sectionHead(t.longBand, { id: 'band-title', light: true })}
    <ul class="ticks ticks-light reveal d3">${t.longBand.points.map((p) => `<li>${icon('check')}${p}</li>`).join('')}</ul>
    <a class="btn btn-primary btn-lg reveal d4" href="${href(lang, 'long')}">${t.longBand.cta}${icon('arrow')}</a>
  </div>
</section>

<section class="section section-location" id="ubicacion" aria-labelledby="loc-title">
  <div class="container loc-grid">
    <div>
      ${sectionHead(t.location, { id: 'loc-title' })}
      <ul class="distances">${t.location.items.map((it, i) => `<li class="reveal d${(i % 4) + 1}"><span>${icon(i < 2 ? 'walk' : i === 3 ? 'plane' : 'car')}${it.label}</span><strong>${it.value}</strong></li>`).join('')}</ul>
      <p class="fine">${icon('pin')}${t.location.exact}</p>
      ${SITE.contact.googleMapsUrl ? `<a class="btn btn-ghost" href="${attr(SITE.contact.googleMapsUrl)}" rel="noopener" target="_blank">${t.location.directions}${icon('external')}</a>` : ''}
    </div>
    <div class="map-box reveal d2" data-map data-lat="${SITE.geo.lat}" data-lng="${SITE.geo.lng}" data-title="${attr(t.location.mapTitle)}">
      <div class="map-placeholder">
        ${castleSvg('crest map-crest')}
        <button class="btn btn-primary" type="button" data-map-load>${icon('map')}${t.location.mapCta}</button>
        <p class="fine">${t.location.mapNote}</p>
      </div>
    </div>
  </div>
</section>

<section class="section section-guide-teaser" id="guia" aria-labelledby="gt-title">
  <div class="container">
    ${sectionHead(t.guideTeaser, { id: 'gt-title' })}
    <div class="places-row">
      ${['plaza', 'cocora', 'filandia', 'parquecafe'].map((id, i) => {
        const p = SITE.places.find((x) => x.id === id);
        const pl = t.places[id];
        return `<a class="place-card reveal d${i + 1}" href="${href(lang, 'guide', `#${id}`)}">
        ${img(p.img, pl.name, { sizes: '(min-width: 1100px) 280px, (min-width: 700px) 45vw, 80vw' })}
        <span class="place-card-body"><span class="place-time">${icon(p.mode === 'walk' ? 'walk' : 'car')}≈ ${p.min} min</span><span class="place-name">${pl.name}</span></span>
      </a>`;
      }).join('')}
    </div>
    <a class="btn btn-ghost reveal" href="${href(lang, 'guide')}">${t.guideTeaser.cta}${icon('arrow')}</a>
  </div>
</section>

<section class="section section-rules" aria-labelledby="rules-title">
  <div class="container rules-grid">
    ${sectionHead(t.rules, { id: 'rules-title' })}
    <div>
      <ul class="rules">${t.rules.items.map((r, i) => `<li class="reveal d${(i % 3) + 1}"><span class="rule-num">${roman[i]}</span><p>${r}</p></li>`).join('')}</ul>
      <a class="link-arrow" href="${href(lang, 'legal', '#normas')}">${t.rules.cta}${icon('arrow')}</a>
    </div>
  </div>
</section>

<section class="section section-faq" id="preguntas" aria-labelledby="faq-title">
  <div class="container faq-wrap">
    ${sectionHead({ eyebrow: t.faq.eyebrow, title: t.faq.title }, { id: 'faq-title', center: true })}
    <div class="faq">${t.faq.items.map((f) => `<details name="faq" class="reveal"><summary><span>${f.q}</span>${icon('chevron')}</summary><div class="faq-a"><p>${f.a}</p></div></details>`).join('')}</div>
  </div>
</section>

${contactSection(lang, t)}`;
}

function contactSection(lang, t, presetStay = '') {
  const c = SITE.contact;
  const C = t.contact;
  const channels = [
    c.whatsapp && `<a class="channel" href="${waHref(t.merlin.waMsg)}" rel="noopener" target="_blank">${icon('whatsapp')}<span><strong>${C.whatsapp}</strong>${xml(c.phoneDisplay || '')}</span></a>`,
    c.email && `<a class="channel" href="mailto:${c.email}">${icon('mail')}<span><strong>${C.mail}</strong>${xml(c.email)}</span></a>`,
    c.airbnbUrl && `<a class="channel" href="${attr(c.airbnbUrl)}" rel="noopener" target="_blank">${icon('home')}<span><strong>${C.airbnb}</strong>Airbnb</span></a>`,
    c.bookingUrl && `<a class="channel" href="${attr(c.bookingUrl)}" rel="noopener" target="_blank">${icon('external')}<span><strong>${C.booking}</strong>Booking.com</span></a>`,
  ].filter(Boolean);
  const stayOpt = (v, label) => `<option value="${v}"${presetStay === v ? ' selected' : ''}>${label}</option>`;
  return `<section class="section section-contact" id="contacto" aria-labelledby="contact-title">
  <div class="container contact-grid">
    <div>
      ${sectionHead(C, { id: 'contact-title' })}
      <div class="channels reveal d3">${channels.length ? channels.join('') : `<p class="note">${icon('clock')}${C.channelPending}</p>`}</div>
      <p class="fine">${C.response}</p>
    </div>
    <form class="contact-form reveal d2" data-contact novalidate>
      <div class="field"><label for="f-name">${C.name} *</label><input id="f-name" name="name" autocomplete="name" required maxlength="80"></div>
      <div class="field-row">
        <div class="field"><label for="f-email">${C.email}</label><input id="f-email" name="email" type="email" autocomplete="email" maxlength="120"></div>
        <div class="field"><label for="f-phone">${C.phone} *</label><input id="f-phone" name="phone" type="tel" autocomplete="tel" required maxlength="40"></div>
      </div>
      <div class="field-row">
        <div class="field"><label for="f-dates">${C.dates}</label><input id="f-dates" name="dates" maxlength="80"></div>
        <div class="field"><label for="f-guests">${C.guests}</label><input id="f-guests" name="guests" type="number" min="1" max="30" inputmode="numeric"></div>
      </div>
      <div class="field"><label for="f-stay">${C.stay}</label><select id="f-stay" name="stay">${stayOpt('short', `${t.calc.tierShort} · ${t.stays.items.short.range}`)}${stayOpt('medium', `${t.calc.tierMedium} · ${t.stays.items.medium.range}`)}${stayOpt('long', `${t.calc.tierLong} · ${t.stays.items.long.range}`)}</select></div>
      <div class="field"><label for="f-msg">${C.message}</label><textarea id="f-msg" name="message" rows="4" maxlength="1500" placeholder="${attr(C.messagePh)}"></textarea></div>
      <input class="hp" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">
      <label class="consent"><input type="checkbox" name="consent" required><span>${C.consent}</span></label>
      <button class="btn btn-primary btn-block" type="submit">${icon('send')}${C.submit}</button>
      <p class="form-status" data-status role="status"></p>
    </form>
  </div>
</section>`;
}

// ---------- estadías largas ----------
function longBody(lang, t) {
  const L = t.long;
  const pIcons = ['briefcase', 'health', 'study', 'remote', 'move', 'compass'];
  return `
<section class="page-hero has-image">
  <div class="page-hero-media">${img('room-caballero', '', { sizes: '100vw', eager: true })}${SITE.photosIllustrative ? `<span class="badge badge-hero">${t.rooms.illustrative}</span>` : ''}</div>
  <div class="container page-hero-inner">
    ${breadcrumb(lang, t, 'long', t.nav.long)}
    <h1 class="page-title reveal">${L.h1}</h1>
    <p class="page-lead reveal d1">${L.lead}</p>
    <div class="hero-ctas reveal d2"><a class="btn btn-primary btn-lg" href="#contacto">${L.cta}${icon('arrow')}</a></div>
  </div>
</section>
<section class="section"><div class="container">
  ${sectionHead({ eyebrow: t.longBand.eyebrow, title: L.profilesTitle }, { center: true })}
  <div class="profiles">${L.profiles.map((p, i) => `<article class="profile reveal d${(i % 3) + 1}">${icon(pIcons[i])}<h3>${p.title}</h3><p>${p.text}</p></article>`).join('')}</div>
</div></section>
<section class="section section-soft"><div class="container two-col">
  <div>
    <h2 class="section-title reveal">${L.includedTitle}</h2>
    <ul class="ticks reveal d1">${L.included.map((x) => `<li>${icon('check')}${x}</li>`).join('')}</ul>
    <h3 class="sub-title reveal">${L.reqTitle}</h3>
    <ul class="ticks reveal d1">${L.req.map((x) => `<li>${icon('key')}${x}</li>`).join('')}</ul>
  </div>
  <div class="rates-card reveal d2">
    <h2 class="section-title">${L.ratesTitle}</h2>
    <p class="section-lead">${L.ratesLead}</p>
    <table class="rates"><tbody>${SITE.rooms.map((r) => `<tr><th scope="row"><span>${t.rooms.items[r.id].name}</span><small>${t.rooms.items[r.id].type} · ${r.guests === 1 ? t.rooms.guest : fill(t.rooms.guests, { n: r.guests })}</small></th><td><strong>${money(lang, r.month)}</strong><small>/ ${t.rooms.perMonth}</small></td></tr>`).join('')}</tbody></table>
    ${SITE.pricesConfirmed ? '' : `<p class="fine">${t.calc.indicative}</p>`}
  </div>
</div></section>
<section class="section"><div class="container">
  ${sectionHead({ eyebrow: t.stays.items.long.name, title: L.stepsTitle }, { center: true })}
  <ol class="steps">${L.steps.map((s, i) => `<li class="reveal d${i + 1}"><span class="step-num">${roman[i]}</span><h3>${s.title}</h3><p>${s.text}</p></li>`).join('')}</ol>
</div></section>
<section class="section section-faq"><div class="container faq-wrap">
  ${sectionHead({ eyebrow: t.faq.eyebrow, title: L.faqTitle }, { center: true })}
  <div class="faq">${L.faq.map((f) => `<details name="faq" class="reveal"><summary><span>${f.q}</span>${icon('chevron')}</summary><div class="faq-a"><p>${f.a}</p></div></details>`).join('')}</div>
</div></section>
${contactSection(lang, t, 'long')}`;
}

// ---------- guía ----------
function guideBody(lang, t) {
  const G = t.guide;
  const gIcons = ['plane', 'bus', 'car'];
  const tIcons = ['rain', 'money', 'bus', 'alert'];
  return `
<section class="page-hero has-image">
  <div class="page-hero-media">${img('hero-cocora', t.hero.slides[1], { sizes: '100vw', eager: true })}</div>
  <div class="container page-hero-inner">
    ${breadcrumb(lang, t, 'guide', t.nav.guide)}
    <h1 class="page-title reveal">${G.h1}</h1>
    <p class="page-lead reveal d1">${G.lead}</p>
  </div>
</section>
<section class="section"><div class="container two-col">
  <div><h2 class="section-title reveal">${G.introTitle}</h2>${G.intro.map((p, i) => `<p class="prose reveal d${i + 1}">${p}</p>`).join('')}</div>
  <figure class="framed reveal d2">${img('place-catedral', t.places.plaza.name, { sizes: '(min-width: 1000px) 45vw, 92vw' })}</figure>
</div></section>
<section class="section section-soft"><div class="container">
  ${sectionHead({ eyebrow: t.nav.guide, title: G.gettingTitle }, { center: true })}
  <div class="cards-3">${G.getting.map((g, i) => `<article class="info-card reveal d${i + 1}">${icon(gIcons[i])}<h3>${g.title}</h3><p>${g.text}</p></article>`).join('')}</div>
</div></section>
<section class="section"><div class="container">
  ${sectionHead({ eyebrow: t.guideTeaser.eyebrow, title: G.placesTitle, lead: G.placesLead })}
  <div class="places-list">
    ${SITE.places.map((p, i) => {
      const pl = t.places[p.id];
      return `<article class="place-row reveal" id="${p.id}">
      <figure>${img(p.img, pl.name, { sizes: '(min-width: 900px) 46vw, 92vw' })}</figure>
      <div class="place-row-body">
        <span class="place-index">${String(i + 1).padStart(2, '0')}</span>
        <h3>${pl.name}</h3>
        <p class="place-time">${icon(p.mode === 'walk' ? 'walk' : 'car')}≈ ${p.min} min ${p.mode === 'walk' ? G.walk : G.car} · ${p.km} km</p>
        <p>${pl.desc}</p>
        <p class="tip">${icon('sparkle')}${pl.tip}</p>
        <a class="link-arrow" href="https://www.openstreetmap.org/?mlat=${p.lat}&mlon=${p.lng}#map=15/${p.lat}/${p.lng}" rel="noopener" target="_blank">${icon('map')}OpenStreetMap${icon('external')}</a>
      </div>
    </article>`;
    }).join('')}
  </div>
</div></section>
<section class="section section-legend"><div class="container">
  ${sectionHead({ eyebrow: t.nav.guide, title: G.weekTitle, lead: G.weekLead }, { light: true, center: true })}
  <ol class="week">${G.week.map((d, i) => `<li class="reveal d${(i % 4) + 1}"><span class="week-day">${d.day}</span><h3>${d.title}</h3><p>${d.text}</p></li>`).join('')}</ol>
</div></section>
<section class="section"><div class="container two-col">
  <div><h2 class="section-title reveal">${G.foodTitle}</h2><ul class="food">${G.food.map((f, i) => `<li class="reveal d${i + 1}">${icon(i === 0 ? 'coffee' : 'food')}<div><h3>${f.name}</h3><p>${f.desc}</p></div></li>`).join('')}</ul></div>
  <div><h2 class="section-title reveal">${G.tipsTitle}</h2><ul class="food">${G.tips.map((f, i) => `<li class="reveal d${i + 1}">${icon(tIcons[i])}<div><h3>${f.title}</h3><p>${f.text}</p></div></li>`).join('')}</ul></div>
</div></section>
<section class="section section-cta"><div class="container cta-inner">
  ${castleSvg('crest cta-crest')}
  <h2 class="section-title reveal">${G.cta}</h2>
  <div class="hero-ctas reveal d1"><a class="btn btn-primary btn-lg" href="${href(lang, 'home', '#tarifas')}">${t.hero.ctaPrimary}${icon('arrow')}</a><a class="btn btn-ghost btn-lg" href="${href(lang, 'home', '#habitaciones')}">${t.hero.ctaSecondary}</a></div>
</div></section>`;
}

// ---------- políticas ----------
function legalBody(lang, t) {
  const Lg = t.legal;
  return `
<section class="page-hero is-plain">
  <div class="container page-hero-inner">
    ${breadcrumb(lang, t, 'legal', t.footer.legalTitle)}
    <h1 class="page-title reveal">${Lg.h1}</h1>
    <p class="page-lead reveal d1">${Lg.lead}</p>
    <p class="fine reveal d2">${Lg.updated}</p>
  </div>
</section>
<section class="section legal-section"><div class="container legal-grid">
  <nav class="legal-toc" aria-label="${attr(Lg.toc)}"><p class="eyebrow">${Lg.toc}</p><ol>${Lg.sections.map((s) => `<li><a href="#${s.id}">${s.title}</a></li>`).join('')}</ol></nav>
  <div class="legal-body">${Lg.sections.map((s) => `<article class="legal-block" id="${s.id}"><h2>${s.title}</h2>${s.html}</article>`).join('')}</div>
</div></section>`;
}

function notFoundPage(lang, t) {
  const body = `<section class="page-hero is-plain not-found"><div class="container page-hero-inner">
    ${castleSvg('crest nf-crest')}
    <h1 class="page-title">${t.notFound.title}</h1>
    <p class="page-lead">${t.notFound.text}</p>
    <div class="hero-ctas"><a class="btn btn-primary btn-lg" href="${href(lang, 'home')}">${t.notFound.cta}</a><a class="btn btn-ghost btn-lg" href="${href(lang, 'guide')}">${t.nav.guide}</a></div>
    <ul class="footer-langs">${LANGS.map((l) => `<li><a href="${href(l, 'home')}" hreflang="${l}" lang="${l}">${T[l].name}</a></li>`).join('')}</ul>
  </div></section>`;
  return page(lang, 'home', t, { title: t.seo.notFound.title, description: t.seo.notFound.description }, body, [])
    .replace('<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">', '<meta name="robots" content="noindex">')
    .replace('class="page-home"', 'class="page-404"');
}

// ---------- escritura ----------
function write(relPath, content) {
  const f = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, content);
}

// limpia salidas viejas (solo carpetas generadas)
const generatedDirs = new Set();
for (const l of SITE.languages) {
  if (l !== SITE.defaultLang) generatedDirs.add(l);
  if (T[l]) for (const p of ['guide', 'long', 'legal']) generatedDirs.add(T[l].slugs[p]);
}
for (const d of generatedDirs) {
  const f = path.join(ROOT, d);
  if (fs.existsSync(path.join(f, 'index.html')) || (fs.existsSync(f) && SITE.languages.includes(d))) fs.rmSync(f, { recursive: true, force: true });
}

let count = 0;
for (const lang of LANGS) {
  const t = deepFill(T[lang], vars(lang));
  const heroPre = `<link rel="preload" as="image" href="${asset('img/hero-armenia-1280.webp')}" imagesrcset="${CREDITS['hero-armenia'].widths.map((w) => `${asset(`img/hero-armenia-${w}.webp`)} ${w}w`).join(', ')}" imagesizes="100vw" fetchpriority="high">\n`;
  const site = { '@context': 'https://schema.org', '@type': 'WebSite', name: 'Camelot', url: abs(lang, 'home'), inLanguage: lang, publisher: { '@id': `${ORIGIN}${BASE}#lodging` } };

  write(rel(lang, 'home') + 'index.html', page(lang, 'home', t, { title: t.seo.home.title, description: t.seo.home.description, preload: heroPre }, homeBody(lang, t), [site, lodgingLd(lang, t), faqLd(t.faq.items)]));
  write(rel(lang, 'long') + 'index.html', page(lang, 'long', t, { title: t.seo.long.title, description: t.seo.long.description }, longBody(lang, t), [breadcrumbLd(lang, t, 'long', t.nav.long), faqLd(t.long.faq)]));
  const attractions = {
    '@context': 'https://schema.org', '@type': 'ItemList', name: strip(t.guide.placesTitle),
    itemListElement: SITE.places.map((p, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@type': 'TouristAttraction', name: strip(t.places[p.id].name), description: strip(t.places[p.id].desc), image: ORIGIN + full(p.img), geo: { '@type': 'GeoCoordinates', latitude: p.lat, longitude: p.lng }, url: abs(lang, 'guide') + '#' + p.id } })),
  };
  write(rel(lang, 'guide') + 'index.html', page(lang, 'guide', t, { title: t.seo.guide.title, description: t.seo.guide.description }, guideBody(lang, t), [breadcrumbLd(lang, t, 'guide', t.nav.guide), attractions]));
  write(rel(lang, 'legal') + 'index.html', page(lang, 'legal', t, { title: t.seo.legal.title, description: t.seo.legal.description }, legalBody(lang, t), [breadcrumbLd(lang, t, 'legal', t.footer.legalTitle)]));
  count += 4;
}
write('404.html', notFoundPage(SITE.defaultLang, deepFill(T[SITE.defaultLang], vars(SITE.defaultLang))));

// sitemap con alternativas hreflang
const sm = ['<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'];
for (const p of PAGES) for (const l of LANGS) {
  sm.push(`<url><loc>${abs(l, p)}</loc><lastmod>${TODAY}</lastmod><changefreq>${p === 'legal' ? 'yearly' : 'monthly'}</changefreq><priority>${p === 'home' ? '1.0' : p === 'legal' ? '0.3' : '0.8'}</priority>`);
  for (const a of LANGS) sm.push(`  <xhtml:link rel="alternate" hreflang="${a}" href="${abs(a, p)}"/>`);
  sm.push(`  <xhtml:link rel="alternate" hreflang="x-default" href="${abs(XDEF, p)}"/>`);
  if (p === 'home') for (const n of ['hero-armenia', 'room-caballero', 'room-mesa']) sm.push(`  <image:image><image:loc>${ORIGIN + full(n)}</image:loc></image:image>`);
  if (p === 'guide') for (const pl of SITE.places) sm.push(`  <image:image><image:loc>${ORIGIN + full(pl.img)}</image:loc></image:image>`);
  sm.push('</url>');
}
sm.push('</urlset>');
write('sitemap.xml', sm.join('\n') + '\n');

write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}${BASE}sitemap.xml\n`);

const es = T[SITE.defaultLang];
const en = T.en || es;
write('llms.txt', `# Camelot — Armenia, Quindío, Colombia\n\n> ${strip(fill(es.seo.home.description, vars(SITE.defaultLang)))}\n\n> ${strip(fill(en.seo.home.description, vars(T.en ? 'en' : SITE.defaultLang)))}\n\n## Pages\n${PAGES.flatMap((p) => LANGS.map((l) => `- [${strip(T[l].seo[p].title)}](${abs(l, p)})`)).join('\n')}\n\n## Facts\n- Type: private hotel-style rooms with private bathroom (short, medium and long stays)\n- Location: city centre of Armenia, Quindío, Colombia (Coffee Cultural Landscape, UNESCO)\n- Check-in ${SITE.checkin} · Check-out ${SITE.checkout}\n- Rooms: ${SITE.totalRooms}\n- Medium stays (${SITE.tiers.mediumFrom}+ nights): ${Math.round(SITE.tiers.mediumDiscount * 100)}% off · Long stays (${SITE.tiers.longFrom}+ nights): monthly rate, utilities and Wi-Fi included\n- Languages on site: ${LANGS.join(', ')}\n`);

write('humans.txt', `/* TEAM */\nConcepto y desarrollo: ${SITE.author}\nUbicación: Armenia, Quindío, Colombia\n\n/* SITE */\nÚltima actualización: ${TODAY}\nIdiomas: ${LANGS.join(', ')}\nEstándares: HTML5, CSS3, JavaScript sin dependencias\n`);

write('manifest.webmanifest', JSON.stringify({
  name: 'Camelot · Armenia, Quindío', short_name: 'Camelot', description: strip(fill(es.seo.home.description, vars(SITE.defaultLang))),
  lang: SITE.defaultLang, start_url: BASE, scope: BASE, display: 'standalone', background_color: '#0E1424', theme_color: '#0E1424',
  icons: [
    { src: `${BASE}assets/icons/icon-192.png`, sizes: '192x192', type: 'image/png' },
    { src: `${BASE}assets/icons/icon-512.png`, sizes: '512x512', type: 'image/png' },
    { src: `${BASE}assets/icons/icon-maskable-512.png`, sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    { src: `${BASE}assets/icons/favicon.svg`, sizes: 'any', type: 'image/svg+xml' },
  ],
}, null, 2) + '\n');

write('assets/icons/favicon.svg', castleStandalone() + '\n');
write('.nojekyll', '');

const VERSION = crypto.createHash('sha1').update(V.css + V.js + V.theme + TODAY + count).digest('hex').slice(0, 10);
write('sw.js', `// Service worker de Camelot (generado por scripts/build.mjs). Versión ${VERSION}
const CACHE = 'camelot-${VERSION}';
const CORE = ${JSON.stringify([BASE, `${BASE}css/styles.css?v=${V.css}`, `${BASE}js/app.js?v=${V.js}`, `${BASE}js/theme.js?v=${V.theme}`, `${BASE}assets/fonts/cormorant-latin.woff2`, `${BASE}assets/fonts/manrope-latin.woff2`, `${BASE}assets/icons/favicon.svg`, `${BASE}404.html`])};
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(r, copy)); return res; })
      .catch(() => caches.match(r).then((m) => m || caches.match('${BASE}'))));
    return;
  }
  e.respondWith(caches.match(r).then((m) => m || fetch(r).then((res) => { if (res.ok && /\\/(assets|css|js)\\//.test(r.url)) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(r, copy)); } return res; })));
});
`);

console.log(`✓ ${count} páginas en ${LANGS.length} idioma(s) [${LANGS.join(', ')}] + 404, sitemap, robots, llms.txt, manifest, sw.js`);
if (LANGS.length < SITE.languages.length) console.log('  (faltan idiomas: ' + SITE.languages.filter((l) => !T[l]).join(', ') + ')');
