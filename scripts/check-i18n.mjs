// Verifica que un idioma tenga exactamente la misma estructura que es.mjs:
// mismas claves, mismas longitudes de listas, mismos marcadores {x} y mismas etiquetas HTML.
// Uso: node scripts/check-i18n.mjs en   (sin argumento revisa todos)
import { pathToFileURL } from 'node:url';
import path from 'node:path';
import { SITE } from './config.mjs';

const dir = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1'));
const load = async (code) => (await import(pathToFileURL(path.join(dir, 'i18n', `${code}.mjs`)).href)).default;

const FREE = new Set(['code', 'locale', 'name', 'short', 'kw']); // claves que cambian libremente
const ph = (s) => [...s.matchAll(/\{[a-zA-Z]+\}/g)].map((m) => m[0]).sort().join(',');
const tags = (s) => [...s.matchAll(/<\/?([a-z0-9]+)/g)].map((m) => m[1]).sort().join(',');

function compare(a, b, where, errs) {
  if (Array.isArray(a)) {
    if (!Array.isArray(b)) return errs.push(`${where}: debería ser lista`);
    if (a.length !== b.length) errs.push(`${where}: ${b.length} elementos, se esperaban ${a.length}`);
    a.forEach((v, i) => b[i] !== undefined && compare(v, b[i], `${where}[${i}]`, errs));
    return;
  }
  if (a && typeof a === 'object') {
    if (!b || typeof b !== 'object') return errs.push(`${where}: debería ser objeto`);
    for (const k of Object.keys(a)) {
      if (!(k in b)) { errs.push(`${where}.${k}: falta`); continue; }
      if (FREE.has(k)) continue;
      compare(a[k], b[k], `${where}.${k}`, errs);
    }
    for (const k of Object.keys(b)) if (!(k in a)) errs.push(`${where}.${k}: clave extra`);
    return;
  }
  if (typeof a === 'string') {
    if (typeof b !== 'string') return errs.push(`${where}: debería ser texto`);
    if (!b.trim()) errs.push(`${where}: vacío`);
    if (ph(a) !== ph(b)) errs.push(`${where}: marcadores ${ph(b) || '—'} ≠ ${ph(a) || '—'}`);
    if (tags(a) !== tags(b)) errs.push(`${where}: etiquetas HTML distintas`);
    if (/\.(id|key|action)$/.test(where) && a !== b) errs.push(`${where}: este valor no se traduce`);
  }
}

const es = await load('es');
const codes = process.argv[2] ? [process.argv[2]] : SITE.languages.filter((c) => c !== 'es');
let bad = 0;
for (const code of codes) {
  let t;
  try { t = await load(code); } catch (e) { console.log(`✗ ${code}: no carga — ${e.message}`); bad++; continue; }
  const errs = [];
  compare(es, t, code, errs);
  if (t.code !== code) errs.push(`${code}.code debe ser '${code}'`);
  if (errs.length) { bad++; console.log(`✗ ${code}: ${errs.length} problema(s)`); errs.slice(0, 60).forEach((e) => console.log('   ' + e)); }
  else console.log(`✓ ${code}: estructura idéntica a es`);
}
process.exit(bad ? 1 : 0);
