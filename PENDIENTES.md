# Pendientes para lanzar Camelot

Todo se llena en `scripts/config.mjs`; luego se corre `npm run build`. Mientras falten, el sitio funciona en modo vista previa: los botones de reserva muestran "canal en activación" y las políticas dicen "[dato por completar]".

## Imprescindibles

- [ ] **WhatsApp de reservas** → `contact.whatsapp` (solo dígitos, ej. `573001234567`) y `contact.phoneDisplay`.
- [ ] **Correo de reservas** → `contact.email`. Opcional: activar el formulario con FormSubmit (`formEndpoint: 'https://formsubmit.co/ajax/<correo>'`, y confirmar el primer envío).
- [ ] **RNT** (Registro Nacional de Turismo) → `legal.rnt`. Es obligatorio para prestar alojamiento turístico y se muestra en el pie de página.
- [ ] **Responsable de los datos** (razón social o nombre, y NIT o cédula) → `legal.businessName`, `legal.nit`.
- [ ] **Fotos reales** de cada tipo de habitación, de fachada, recepción y zonas comunes. Luego `photosIllustrative: false`.
- [ ] **Precios reales** por noche y por mes de cada habitación → `rooms[].night` / `rooms[].month`. Luego `pricesConfirmed: true`.
- [ ] **Tipos de habitación reales**: cuántas de cada una, camas y capacidad (hoy: Escudero 1, Caballero 2, Hermandad 3, Mesa Redonda 5; total 14).

## Para confirmar (hoy el texto los menciona)

- [ ] Horarios: llegada 15:00, salida 12:00, silencio 22:00–07:00.
- [ ] Servicios: café de bienvenida, rincón para trabajar, lavandería bajo solicitud, guarda equipaje, factura electrónica, agua caliente y TV en todas. Quita de `amenities` los que no apliquen.
- [ ] Estadías largas: ¿incluyen agua, luz y gas? ¿Cada cuánto es el aseo? ¿Cambio semanal de ropa de cama?
- [ ] Mascotas y parqueadero (hoy dice "consúltanos").
- [ ] Medios de pago (transferencia, Nequi/Daviplata, tarjeta, efectivo) y si se cobra anticipo del 30 %.
- [ ] Política de cancelación propuesta (72 h / 7 días / 14 días): ajustarla si el dueño prefiere otra.
- [ ] Descuento de estadía mediana (hoy 15 %) y tasas de referencia USD/EUR (`fx`).
- [ ] Dirección exacta y coordenadas → `address.street`, `geo` (hoy: punto aproximado del centro).

## Después del lanzamiento

- [ ] Dominio propio (ver README) y Google Search Console + Bing Webmaster con `sitemap.xml`.
- [ ] **Perfil de Empresa en Google** (Google Maps) con fotos, horario y enlace al sitio: es lo que más reservas locales trae.
- [ ] Publicar en Airbnb y Booking y poner los enlaces en `airbnbUrl` / `bookingUrl` (aparecen solos en Contacto y en los datos SEO).
- [ ] Reseñas reales: cuando existan, agregar una sección con reseñas verificables. No se publican reseñas inventadas.
- [ ] Instagram/Facebook → `contact.instagram` / `contact.facebook`.
- [ ] Opcional: analítica respetuosa de la privacidad (GoatCounter o Plausible). Si se agrega, actualizar la sección de cookies.
