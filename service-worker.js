const CACHE_NAME = "recettes-jacqueline-v1";
const URLS_TO_CACHE = [
  "index.html",
  "pdf.html",
  "fond_quadrille_bleu.png",
  "manifest.json"
  // tu peux ajouter ici des PDF importants si tu veux les avoir hors-ligne
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
