/* Mãe Presente — funciona sem internet depois da primeira abertura.
   Ao publicar uma versão nova, troque o número abaixo (v1 -> v2) pra todas receberem a atualização. */
const VERSAO = 'mae-presente-v2';
const BASE = ['./', 'index.html', 'instalar.html', 'manifest.webmanifest', 'app.css', 'app.js', 'telas.js', 'ferramentas.js',
  'dados/base.js', 'dados/brincadeiras.js', 'dados/modulos-a.js', 'dados/receitas-a.js', 'dados/imagens.js', 'dados/modulos-b.js', 'dados/modulos-c.js', 'dados/modulos-extra.js',
  'fontes/inter.css', 'fontes/inter-latin-400-normal.woff2', 'fontes/inter-latin-600-normal.woff2', 'fontes/inter-latin-700-normal.woff2', 'fontes/inter-latin-800-normal.woff2',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png', 'icons/favicon-64.png'];
self.addEventListener('install', e => e.waitUntil(caches.open(VERSAO).then(c => c.addAll(BASE)).then(() => self.skipWaiting())));
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('mae-presente-') && k !== VERSAO).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  const img = /\.(webp|png|jpg|jpeg|svg|woff2)$/i.test(new URL(r.url).pathname);
  if (img) { // imagens: primeiro o que já está guardado
    e.respondWith(caches.match(r).then(h => h || fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(VERSAO).then(c => c.put(r, cp)); } return res; })));
  } else { // telas e dados: primeiro a internet (pra pegar atualização), se não tiver usa o guardado
    e.respondWith(fetch(r).then(res => { if (res.ok) { const cp = res.clone(); caches.open(VERSAO).then(c => c.put(r, cp)); } return res; }).catch(() => caches.match(r, { ignoreSearch: true }).then(h => h || caches.match('index.html'))));
  }
});
