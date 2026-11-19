// Service worker de Camelot (generado por scripts/build.mjs). Versión 3c73b4c45b
const CACHE = 'camelot-3c73b4c45b';
const CORE = ["/camelot-rbnb/","/camelot-rbnb/css/styles.css?v=6a31843f","/camelot-rbnb/js/app.js?v=d0a53b84","/camelot-rbnb/js/theme.js?v=d5dcc2f2","/camelot-rbnb/assets/fonts/cormorant-latin.woff2","/camelot-rbnb/assets/fonts/manrope-latin.woff2","/camelot-rbnb/assets/icons/favicon.svg","/camelot-rbnb/404.html"];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== self.location.origin) return;
  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).then((res) => { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(r, copy)); return res; })
      .catch(() => caches.match(r).then((m) => m || caches.match('/camelot-rbnb/'))));
    return;
  }
  e.respondWith(caches.match(r).then((m) => m || fetch(r).then((res) => { if (res.ok && /\/(assets|css|js)\//.test(r.url)) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(r, copy)); } return res; })));
});
