/* Camelot · interacción del sitio (sin dependencias). */
(() => {
  'use strict';
  const D = document;
  const root = D.documentElement;
  const dataEl = D.getElementById('camelot-data');
  const S = dataEl ? JSON.parse(dataEl.textContent) : { t: {}, cfg: {} };
  const t = S.t || {};
  const cfg = S.cfg || {};
  const $ = (s, c = D) => c.querySelector(s);
  const $$ = (s, c = D) => [...c.querySelectorAll(s)];
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch { /* sin almacenamiento */ } },
  };
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fmt = (s, v) => String(s ?? '').replace(/\{(\w+)\}/g, (m, k) => (v[k] !== undefined ? v[k] : m));
  const norm = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const icon = (id) => `<svg class="ico" aria-hidden="true"><use href="#i-${id}"/></svg>`;

  /* ---------- Cabecera ---------- */
  const header = $('[data-header]');
  const toTop = $('[data-to-top]');
  let ticking = false;
  const onScroll = () => {
    const y = scrollY;
    header?.classList.toggle('is-scrolled', y > 24);
    toTop?.classList.toggle('is-visible', y > 900);
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();

  // Menú móvil
  const menuBtn = $('[data-menu-btn]');
  const mobileNav = $('#mobile-nav');
  const setMenu = (open) => {
    if (!menuBtn || !mobileNav) return;
    menuBtn.setAttribute('aria-expanded', String(open));
    header.classList.toggle('menu-open', open);
    D.body.classList.toggle('no-scroll', open);
    if (open) { mobileNav.hidden = false; requestAnimationFrame(() => mobileNav.classList.add('is-open')); }
    else { mobileNav.classList.remove('is-open'); setTimeout(() => { if (!mobileNav.classList.contains('is-open')) mobileNav.hidden = true; }, 350); }
  };
  menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
  mobileNav?.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });

  // Selector de idioma
  $$('[data-lang-menu]').forEach((menu) => {
    const btn = $('button', menu);
    const list = $('.lang-list', menu);
    const close = () => { btn.setAttribute('aria-expanded', 'false'); list.hidden = true; };
    btn.addEventListener('click', (e) => { e.stopPropagation(); const open = list.hidden; list.hidden = !open; btn.setAttribute('aria-expanded', String(open)); });
    D.addEventListener('click', (e) => { if (!menu.contains(e.target)) close(); });
    D.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  });
  D.addEventListener('click', (e) => { const a = e.target.closest('[data-set-lang]'); if (a) store.set('camelot-lang', a.dataset.setLang); });

  // Enlace activo según la sección visible
  const navLinks = $$('.main-nav a[href*="#"]');
  if (navLinks.length && 'IntersectionObserver' in window) {
    const map = new Map();
    navLinks.forEach((a) => { const id = a.hash.slice(1); const sec = id && D.getElementById(id); if (sec) map.set(sec, a); });
    const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { navLinks.forEach((l) => l.classList.remove('is-active')); map.get(en.target)?.classList.add('is-active'); } }), { rootMargin: '-45% 0px -50% 0px' });
    map.forEach((_, sec) => io.observe(sec));
  }

  /* ---------- Tema claro / oscuro con transición circular ---------- */
  $$('[data-theme-toggle]').forEach((btn) => btn.addEventListener('click', (e) => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    const apply = () => { root.dataset.theme = next; store.set('camelot-theme', next); };
    if (!D.startViewTransition || reduce) return apply();
    const x = e.clientX || innerWidth - 60;
    const y = e.clientY || 40;
    const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    D.startViewTransition(apply).ready.then(() => {
      root.animate({ clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] }, { duration: 650, easing: 'cubic-bezier(.22,.8,.24,1)', pseudoElement: '::view-transition-new(root)' });
    }).catch(() => {});
  }));
  matchMedia('(prefers-color-scheme: dark)').addEventListener?.('change', (e) => { if (!store.get('camelot-theme')) root.dataset.theme = e.matches ? 'dark' : 'light'; });

  /* ---------- Aparición al hacer scroll ---------- */
  const reveals = $$('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach((el) => io.observe(el));
  } else reveals.forEach((el) => el.classList.add('is-in'));

  /* ---------- Carrusel del hero ---------- */
  const slides = $$('.hero-slide');
  const dots = $$('[data-dots] span');
  if (slides.length > 1 && !reduce) {
    let i = 0;
    const show = (n) => { slides[i].classList.remove('is-active'); dots[i]?.classList.remove('is-active'); i = n; slides[i].classList.add('is-active'); dots[i]?.classList.add('is-active'); };
    let timer = setInterval(() => show((i + 1) % slides.length), 7000);
    D.addEventListener('visibilitychange', () => { clearInterval(timer); if (!D.hidden) timer = setInterval(() => show((i + 1) % slides.length), 7000); });
  }

  /* ---------- Avisos (toasts) ---------- */
  const toastBox = $('[data-toasts]');
  function toast(text, actions = [], { timeout = 0, lang } = {}) {
    if (!toastBox) return null;
    const el = D.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    if (lang) el.lang = lang;
    el.innerHTML = `<p>${text}</p>${actions.length ? '<div class="toast-actions"></div>' : ''}`;
    const close = () => { el.classList.add('is-out'); setTimeout(() => el.remove(), 360); };
    actions.forEach((a) => {
      const b = D.createElement(a.href ? 'a' : 'button');
      b.className = a.primary ? 'btn btn-primary' : a.href ? '' : 'btn btn-ghost';
      b.textContent = a.label;
      if (a.href) b.href = a.href; else b.type = 'button';
      b.addEventListener('click', () => { a.onClick?.(); if (!a.keep) close(); });
      $('.toast-actions', el).append(b);
    });
    toastBox.append(el);
    if (timeout) setTimeout(close, timeout);
    return el;
  }

  // Aviso de privacidad (una sola vez)
  if (!store.get('camelot-privacy') && t.toasts) {
    setTimeout(() => toast(esc(t.toasts.privacy), [
      { label: t.toasts.privacyOk, primary: true, onClick: () => store.set('camelot-privacy', '1') },
      { label: t.toasts.privacyMore, href: `${S.urls.legal}#cookies`, onClick: () => store.set('camelot-privacy', '1') },
    ]), 1400);
  }

  // Sugerencia de idioma según el navegador (sin redirigir: mejor para SEO)
  if (!store.get('camelot-lang') && S.suggest) {
    const prefs = (navigator.languages || [navigator.language || '']).map((l) => l.slice(0, 2).toLowerCase());
    const match = prefs.find((l) => S.suggest[l]);
    if (match && match !== S.lang) {
      const s = S.suggest[match];
      setTimeout(() => toast(esc(s.text), [
        { label: s.cta, href: s.url, primary: true, onClick: () => store.set('camelot-lang', match) },
        { label: s.close, onClick: () => store.set('camelot-lang', S.lang) },
      ], { lang: match }), 900);
    }
  }

  /* ---------- Canales (WhatsApp / correo) ---------- */
  const waUrl = (text) => `https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(text)}`;
  function openWhatsApp(text) {
    if (cfg.whatsapp) { window.open(waUrl(text), '_blank', 'noopener'); return true; }
    channelPending(text);
    return false;
  }
  function openMail(subject, body) {
    if (cfg.email) { location.href = `mailto:${cfg.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; return true; }
    channelPending(body);
    return false;
  }
  function channelPending(text) {
    const msg = $('#f-msg');
    if (msg && text) msg.value = text;
    toast(esc(t.toasts.pendingChannel), [{ label: t.contact?.submit || 'OK', primary: true, href: '#contacto' }], { timeout: 9000 });
  }

  /* ---------- Calculadora de estadía ---------- */
  const calcBox = $('[data-calc]');
  const calcForm = calcBox ? $('form', calcBox) : null;
  let quote = null;
  const DAY = 864e5;
  const parseDate = (v) => (v ? new Date(`${v}T12:00:00`) : null);
  const iso = (d) => new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
  const longDate = (d) => new Intl.DateTimeFormat(S.locale, { dateStyle: 'medium' }).format(d);
  const money = (cop, cur = 'COP') => {
    const v = cur === 'COP' ? cop : cop / (cfg.fx?.[cur] || 1);
    return new Intl.NumberFormat(S.locale, { style: 'currency', currency: cur, maximumFractionDigits: cur === 'COP' ? 0 : 0 }).format(Math.round(v));
  };

  function setMinDates(form) {
    if (!form) return;
    const today = iso(new Date());
    const inp = form.elements.in;
    const out = form.elements.out;
    inp.min = today;
    out.min = inp.value ? iso(new Date(parseDate(inp.value).getTime() + DAY)) : iso(new Date(Date.now() + DAY));
  }

  function computeQuote() {
    if (!calcForm) return;
    const f = calcForm.elements;
    const tier = $('[data-tier]', calcBox);
    const lines = $('[data-lines]', calcBox);
    const warn = $('[data-warn]', calcBox);
    const note = $('[data-note]', calcBox);
    const C = t.calc;
    setMinDates(calcForm);
    const din = parseDate(f.in.value);
    const dout = parseDate(f.out.value);
    const cur = f.cur.value || 'COP';
    const room = cfg.rooms.find((r) => r.id === f.room.value) || cfg.rooms[0];
    const guests = +f.guests.value || 1;
    warn.hidden = true;
    note.textContent = '';
    if (!din || !dout) { tier.textContent = C.pickDates; lines.innerHTML = ''; quote = null; return; }
    const nights = Math.round((dout - din) / DAY);
    if (nights <= 0) { tier.textContent = C.pickDates; lines.innerHTML = ''; warn.textContent = C.invalid; warn.hidden = false; quote = null; return; }
    const tiers = cfg.tiers;
    const key = nights >= tiers.longFrom ? 'long' : nights >= tiers.mediumFrom ? 'medium' : 'short';
    const base = room.night * nights;
    let total = key === 'long' ? (room.month / 30) * nights : key === 'medium' ? base * (1 - tiers.mediumDiscount) : base;
    total = Math.min(total, base);
    const durationOff = base - total;
    const direct = cfg.direct ? total * cfg.direct : 0;
    total -= direct;
    const nightsTxt = nights === 1 ? C.night : fmt(C.nights, { n: nights });
    const tierName = t.stays[key];
    tier.textContent = `${tierName} · ${nightsTxt}`;
    const row = (dt, dd, cls = '') => `<div class="${cls}"><dt>${dt}</dt><dd>${dd}</dd></div>`;
    let html = row(`${C.base} <small>(${nightsTxt} × ${money(room.night, cur)})</small>`, money(base, cur));
    if (durationOff > 0) html += row(C.discount, `− ${money(durationOff, cur)}`, 'is-discount');
    if (direct > 0) html += row(C.direct, `− ${money(direct, cur)}`, 'is-discount');
    html += row(C.total, money(total, cur), 'is-total');
    html += row(C.avg, money(total / nights, cur), 'is-sub');
    if (key === 'long') html += row('', fmt(C.monthly, { amount: money((total / nights) * 30, cur) }), 'is-sub');
    else html += row(fmt(C.deposit, { pct: Math.round(cfg.deposit * 100) }), money(total * cfg.deposit, cur), 'is-sub');
    lines.innerHTML = html;
    const notes = [];
    if (key === 'long') notes.push(C.depositLong);
    if (cur !== 'COP') notes.push(fmt(C.approx, { cur }));
    note.textContent = notes.join(' ');
    if (guests > room.guests) {
      const better = cfg.rooms.filter((r) => r.guests >= guests).sort((a, b) => a.guests - b.guests)[0];
      warn.textContent = fmt(C.capacity, { n: room.guests, room: better ? better.name : '—' });
      warn.hidden = false;
    }
    quote = { din, dout, nights, nightsTxt, guests, room, tierName, total: money(total, 'COP') + (cur !== 'COP' ? ` (≈ ${money(total, cur)})` : '') };
  }

  function quoteText() {
    const C = t.calc;
    if (!quote) return C.waIntro;
    const v = { in: longDate(quote.din), out: longDate(quote.dout), nights: quote.nightsTxt, guests: quote.guests, room: quote.room.name, tier: quote.tierName, total: quote.total };
    return [C.waIntro, ...C.waLines.map((l) => `• ${fmt(l, v)}`)].join('\n');
  }

  if (calcForm) {
    calcForm.addEventListener('input', computeQuote);
    calcForm.addEventListener('change', computeQuote);
    $('[data-calc-wa]', calcBox).addEventListener('click', () => openWhatsApp(quoteText()));
    $('[data-calc-mail]', calcBox).addEventListener('click', () => openMail('Camelot — ' + (quote ? `${quote.tierName} · ${quote.nightsTxt}` : t.calc.title.replace(/<[^>]+>/g, '')), quoteText()));
    if (!calcForm.elements.in.value && !calcForm.elements.out.value) {
      const d0 = new Date(Date.now() + 7 * DAY);
      calcForm.elements.in.value = iso(d0);
      calcForm.elements.out.value = iso(new Date(d0.getTime() + 3 * DAY));
    }
    setMinDates(calcForm);
    computeQuote();
  }

  const goCalc = () => { const sec = D.getElementById('tarifas'); if (sec) sec.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' }); };
  const setDates = (inDate, nights) => {
    if (!calcForm) return;
    const din = inDate || new Date(Date.now() + DAY);
    calcForm.elements.in.value = iso(din);
    calcForm.elements.out.value = iso(new Date(din.getTime() + nights * DAY));
  };

  // Accesos rápidos: tarjetas de estadía y de habitación
  D.addEventListener('click', (e) => {
    const p = e.target.closest('[data-preset]');
    if (p && calcForm) {
      e.preventDefault();
      setDates(parseDate(calcForm.elements.in.value), +p.dataset.preset);
      computeQuote(); goCalc();
    }
    const r = e.target.closest('[data-room]');
    if (r && calcForm) {
      e.preventDefault();
      calcForm.elements.room.value = r.dataset.room;
      if (!calcForm.elements.in.value) setDates(null, 2);
      computeQuote(); goCalc();
    }
  });

  // Reserva rápida del hero
  const qb = $('[data-quickbook]');
  if (qb) {
    const syncMin = () => {
      const today = iso(new Date());
      qb.elements.in.min = today;
      qb.elements.out.min = qb.elements.in.value ? iso(new Date(parseDate(qb.elements.in.value).getTime() + DAY)) : today;
    };
    qb.addEventListener('input', syncMin);
    syncMin();
    qb.addEventListener('submit', (e) => {
      e.preventDefault();
      if (calcForm) {
        if (qb.elements.in.value) calcForm.elements.in.value = qb.elements.in.value;
        if (qb.elements.out.value) calcForm.elements.out.value = qb.elements.out.value;
        calcForm.elements.guests.value = qb.elements.guests.value;
        const g = +qb.elements.guests.value;
        const fit = cfg.rooms.filter((r) => r.guests >= g).sort((a, b) => a.guests - b.guests)[0];
        if (fit) calcForm.elements.room.value = fit.id;
        computeQuote();
      }
      goCalc();
    });
  }

  /* ---------- Mapa bajo consentimiento ---------- */
  $$('[data-map]').forEach((box) => {
    $('[data-map-load]', box)?.addEventListener('click', () => {
      const lat = +box.dataset.lat;
      const lng = +box.dataset.lng;
      const f = D.createElement('iframe');
      f.title = box.dataset.title || 'Mapa';
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer';
      f.src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.012},${lat - 0.008},${lng + 0.012},${lat + 0.008}&layer=mapnik&marker=${lat},${lng}`;
      box.innerHTML = '';
      box.append(f);
    });
  });

  /* ---------- Galería (lightbox) ---------- */
  const lb = $('[data-lightbox]');
  if (lb && S.gallery?.length) {
    const im = $('[data-lb-img]', lb);
    const cap = $('[data-lb-cap]', lb);
    let idx = 0;
    const show = (n) => {
      idx = (n + S.gallery.length) % S.gallery.length;
      const g = S.gallery[idx];
      im.src = g.src; im.alt = g.alt; cap.textContent = `${g.alt} · ${idx + 1}/${S.gallery.length}`;
      im.style.animation = 'none'; void im.offsetWidth; im.style.animation = '';
    };
    D.addEventListener('click', (e) => { const b = e.target.closest('[data-gallery]'); if (b) { show(+b.dataset.gallery); lb.showModal(); } });
    $('[data-lb-close]', lb).addEventListener('click', () => lb.close());
    $('[data-lb-prev]', lb).addEventListener('click', () => show(idx - 1));
    $('[data-lb-next]', lb).addEventListener('click', () => show(idx + 1));
    lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
    lb.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') show(idx - 1); if (e.key === 'ArrowRight') show(idx + 1); });
    let x0 = null;
    lb.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener('touchend', (e) => { if (x0 === null) return; const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 50) show(idx + (dx < 0 ? 1 : -1)); x0 = null; });
  }

  /* ---------- Formulario de contacto ---------- */
  const cf = $('[data-contact]');
  if (cf) {
    const status = $('[data-status]', cf);
    const C = t.contact;
    cf.addEventListener('submit', async (e) => {
      e.preventDefault();
      const f = cf.elements;
      status.className = 'form-status';
      if (f._honey.value) { status.textContent = C.success; status.classList.add('is-ok'); cf.reset(); return; }
      const emailOk = !f.email.value || /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.value);
      if (!f.name.value.trim() || !f.phone.value.trim() || !f.consent.checked || !emailOk) {
        status.textContent = C.required; status.classList.add('is-err');
        (!f.name.value.trim() ? f.name : !f.phone.value.trim() ? f.phone : !emailOk ? f.email : f.consent).focus();
        return;
      }
      const stayLabel = f.stay.options[f.stay.selectedIndex].text;
      const text = [
        t.merlin.waMsg,
        `${C.name}: ${f.name.value.trim()}`,
        f.email.value && `${C.email}: ${f.email.value.trim()}`,
        `${C.phone}: ${f.phone.value.trim()}`,
        f.dates.value && `${C.dates}: ${f.dates.value.trim()}`,
        f.guests.value && `${C.guests}: ${f.guests.value}`,
        `${C.stay}: ${stayLabel}`,
        f.message.value.trim() && `${C.message}: ${f.message.value.trim()}`,
      ].filter(Boolean).join('\n');
      if (cfg.formEndpoint) {
        const btn = $('button[type="submit"]', cf);
        btn.disabled = true; status.textContent = C.sending;
        try {
          const res = await fetch(cfg.formEndpoint, {
            method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ name: f.name.value, email: f.email.value, phone: f.phone.value, dates: f.dates.value, guests: f.guests.value, stay: stayLabel, message: f.message.value, lang: S.lang, _subject: `Camelot — ${stayLabel}`, _template: 'table', _captcha: 'false' }),
          });
          if (!res.ok) throw new Error(res.status);
          status.textContent = C.success; status.classList.add('is-ok'); cf.reset();
        } catch { status.textContent = C.error; status.classList.add('is-err'); }
        btn.disabled = false;
      } else if (cfg.whatsapp) { openWhatsApp(text); status.textContent = C.success; status.classList.add('is-ok'); }
      else if (cfg.email) { openMail(`Camelot — ${stayLabel}`, text); }
      else { status.textContent = C.channelPending; status.classList.add('is-err'); }
    });
  }

  /* ---------- Merlín, conserje digital ---------- */
  const fab = $('[data-merlin-open]');
  const panel = $('#merlin');
  if (fab && panel && t.merlin) {
    const M = t.merlin;
    const log = $('[data-merlin-log]', panel);
    const chips = $('[data-merlin-chips]', panel);
    const form = $('[data-merlin-form]', panel);
    let started = false;
    let lastQ = '';
    const actionUrl = { calc: `${S.urls.home}#tarifas`, long: S.urls.long, legal: `${S.urls.legal}#cancelacion`, guide: S.urls.guide };
    const scrollLog = () => { log.scrollTop = log.scrollHeight; };
    const say = (html, who = 'bot') => { const m = D.createElement('div'); m.className = `msg ${who}`; m.innerHTML = html; log.append(m); scrollLog(); return m; };
    const reply = (html) => {
      const typing = say('<span></span><span></span><span></span>');
      typing.classList.add('typing');
      setTimeout(() => { typing.remove(); say(html); }, reduce ? 0 : 650);
    };
    const hostBtn = () => `<button class="btn btn-primary btn-sm" type="button" data-merlin-host>${icon('whatsapp')}${esc(M.toHost)}</button>`;
    const answer = (topic) => {
      let html = esc(topic.a);
      if (topic.action && actionUrl[topic.action]) html += `<br><a class="btn btn-ghost btn-sm" href="${actionUrl[topic.action]}">${esc(M.actions[topic.action])}${icon('arrow')}</a>`;
      reply(html);
    };
    const renderChips = (all = false) => {
      const list = all ? M.topics : M.topics.slice(0, 6);
      chips.innerHTML = list.map((tp) => `<button class="chip" type="button" data-topic="${tp.id}">${esc(tp.label)}</button>`).join('') +
        (all ? '' : `<button class="chip" type="button" data-more>${esc(M.more)} +</button>`) +
        `<button class="chip is-host" type="button" data-merlin-host>${esc(M.toHost)}</button>`;
    };
    const open = (v) => {
      fab.setAttribute('aria-expanded', String(v));
      panel.hidden = !v;
      D.body.classList.toggle('merlin-open', v);
      if (v) {
        if (!started) { started = true; say(esc(M.greeting)); renderChips(); }
        setTimeout(() => $('input', form).focus({ preventScroll: true }), 50);
      } else fab.focus({ preventScroll: true });
    };
    fab.addEventListener('click', () => open(panel.hidden));
    $('[data-merlin-close]', panel).addEventListener('click', () => open(false));
    D.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) open(false); });
    panel.addEventListener('click', (e) => {
      const tp = e.target.closest('[data-topic]');
      if (tp) { const topic = M.topics.find((x) => x.id === tp.dataset.topic); say(esc(topic.label), 'user'); lastQ = topic.label; answer(topic); }
      if (e.target.closest('[data-more]')) renderChips(true);
      if (e.target.closest('[data-merlin-host]')) openWhatsApp(lastQ ? `${M.waMsg}\n${lastQ}` : M.waMsg);
      if (e.target.closest('a[href]')) open(false);
    });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = form.elements.q.value.trim();
      if (!q) return;
      form.elements.q.value = '';
      lastQ = q;
      say(esc(q), 'user');
      const words = norm(q).split(/[^a-z0-9ßæøœ-]+/).filter(Boolean);
      let best = null;
      let bestScore = 0;
      for (const tp of M.topics) {
        const score = (tp.kw || []).reduce((s, k) => s + (words.some((w) => w.startsWith(norm(k)) || (w.length > 4 && norm(k).startsWith(w))) ? 1 : 0), 0);
        if (score > bestScore) { best = tp; bestScore = score; }
      }
      if (best) answer(best);
      else reply(`${esc(M.fallback)}<br>${hostBtn()}`);
    });
  }

  /* ---------- Índice de políticas: sección activa ---------- */
  const tocLinks = $$('.legal-toc a');
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) tocLinks.forEach((a) => a.classList.toggle('is-active', a.hash === `#${en.target.id}`));
    }), { rootMargin: '-30% 0px -60% 0px' });
    $$('.legal-block').forEach((b) => io.observe(b));
  }

  /* ---------- Funciona sin conexión (solo en HTTPS) ---------- */
  if ('serviceWorker' in navigator && location.protocol === 'https:' && S.sw) {
    addEventListener('load', () => navigator.serviceWorker.register(S.sw, { scope: S.base }).catch(() => {}));
  }
})();
