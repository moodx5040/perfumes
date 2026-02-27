const CACHE_NAME = "novarin-cache-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./elite.html",
  "./docs.html",
  "./branches.html",
  "./channels.html",
  "./manifest.json",
  "./افتار.png",
  "./فيديو.jpg",
  "./فيد.mp4"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
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