# Camelot · Hospedaje en Armenia, Quindío

Sitio web de **Camelot**: habitaciones privadas tipo hotel en el centro de Armenia (Quindío, Colombia) para **estadías cortas, medianas y largas**.

- **Vista previa:** https://droko1982.github.io/camelot-rbnb/
- **Idiomas:** español (raíz), inglés `/en/`, francés `/fr/`, alemán `/de/`, portugués `/pt/`: una página real por idioma, con `hreflang`.
- **Páginas por idioma:** inicio, estadías largas, guía de Armenia y el Quindío, y políticas.
- **Sin dependencias:** HTML, CSS y JavaScript propios. Las fuentes se alojan en el mismo sitio, sin Google Fonts ni rastreadores.

## Qué incluye

| Área | Detalle |
|---|---|
| Diseño | Paleta "castillo de noche" (azul tinta, oro y marfil), modo claro/oscuro con transición circular, carrusel con efecto Ken Burns, animaciones al hacer scroll y transiciones entre páginas (View Transitions). Respeta "movimiento reducido". |
| Reservas | Calculadora que detecta el tipo de estadía (corta, mediana con descuento, larga con tarifa mensual), con COP/USD/EUR y aviso de capacidad. Envía la solicitud por WhatsApp o correo, y tiene formulario de contacto. |
| Merlín | Conserje digital en 5 idiomas: temas rápidos, preguntas en texto libre y paso al anfitrión por WhatsApp. |
| SEO | Títulos y descripciones por idioma, canonical, hreflang + x-default, Open Graph/Twitter, datos estructurados (LodgingBusiness, HotelRoom, FAQPage, BreadcrumbList, TouristAttraction), sitemap con imágenes y alternativas, `robots.txt`, `llms.txt` y metadatos geográficos. |
| Privacidad | Sin cookies de rastreo. CSP estricta, mapa OpenStreetMap que solo carga con clic y fuentes propias. Las preferencias se guardan en el navegador. |
| Legal (Colombia) | Privacidad (Ley 1581/2012 + RGPD/LGPD), cookies, términos de hospedaje, cancelación, normas de la casa, aviso ESCNNA (Ley 679/2001, Ley 1336/2009), accesibilidad y créditos. |
| Otros | PWA (manifest + service worker sin conexión), página 404 propia, íconos, imagen para redes, impresión limpia y accesibilidad (teclado, contraste, saltar al contenido). |

## Cómo editar

1. **Datos del negocio** (WhatsApp, correo, RNT, dirección, precios, habitaciones, horarios): `scripts/config.mjs`.
2. **Textos**: `scripts/i18n/es.mjs` es la fuente. `en`, `fr`, `de` y `pt` siguen exactamente sus mismas claves.
3. **Reconstruir** el sitio:

```bash
npm run check   # verifica que los 5 idiomas tengan la misma estructura
npm run build   # genera index.html, en/, fr/, de/, pt/, sitemap, etc.
```

4. Subir a GitHub (`git add -A && git commit && git push`). GitHub Pages publica en 1–2 minutos.

> No edites a mano los `index.html` generados: se sobrescriben en cada `npm run build`.

## Fotos

- `assets/img/` contiene WebP en 3 tamaños por foto. Los lugares del Quindío vienen de Wikimedia Commons con licencia libre (ver `CREDITS.md`).
- Las **fotos de habitaciones son ilustrativas** y llevan esa etiqueta. Para poner las reales, guárdalas con el mismo nombre (`room-escudero-480/800/1200.webp`, etc., proporción 4:3) y cambia `photosIllustrative: false` en `config.mjs`.
- Herramientas: `scripts/tools/process_images.py` (recorte y WebP) y `scripts/tools/make_icons.py` (íconos e imagen para redes `assets/og.jpg`).

## Dominio propio

1. En `scripts/config.mjs`: `baseUrl: 'https://www.tudominio.com'` y `basePath: '/'`.
2. `npm run build`, agregar un archivo `CNAME` con el dominio y subir.
3. Apuntar el DNS a GitHub Pages y activar HTTPS en *Settings → Pages*.
4. Registrar el sitio en Google Search Console y Bing Webmaster Tools y enviar `sitemap.xml`.

## Estructura

```
scripts/config.mjs      ← datos del negocio
scripts/i18n/*.mjs      ← textos por idioma
scripts/build.mjs       ← generador
scripts/check-i18n.mjs  ← verificador de idiomas
css/styles.css · js/app.js · js/theme.js
assets/ (img, fonts, icons, og.jpg)
```

Autoría: ver [AUTHORS.md](AUTHORS.md). Pendientes del negocio: [PENDIENTES.md](PENDIENTES.md). Ideas: [IDEAS.md](IDEAS.md).
