/* Aplica el tema antes de pintar (evita parpadeo). Preferencia guardada > sistema. */
(function () {
  var d = document.documentElement, t = null;
  try { t = localStorage.getItem('camelot-theme'); } catch (e) { /* almacenamiento bloqueado */ }
  if (t !== 'light' && t !== 'dark') t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  d.setAttribute('data-theme', t);
  d.classList.add('js');
})();
