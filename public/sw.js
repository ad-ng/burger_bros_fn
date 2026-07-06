const cacheName = "burger-bros-static-v2";
const staticAssets = [
  "/",
  "/menu",
  "/?page=menu",
  "/site.webmanifest",
  "/images/hero-burger-real.webp",
  "/images/menu-cheese-box.webp",
  "/images/menu-truffle-burger.webp",
  "/images/menu-burger-cheesy-double.webp",
  "/images/menu-katsu.svg",
  "/images/menu-fish.svg",
  "/images/menu-burger-tray.webp",
  "/images/menu-burger-fries.webp",
  "/images/printed-menu-full.webp",
  "/images/printed-menu-tacos-combos.webp",
  "/images/printed-menu-drinks.webp"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(staticAssets)).catch(() => undefined)
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== cacheName).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") {
    return;
  }

  const request = event.request;
  const url = new URL(request.url);

  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const responseClone = response.clone();
          caches.open(cacheName).then((cache) => cache.put(request, responseClone));
          return response;
        })
        .catch(() => caches.match(request).then((cached) => cached || caches.match("/")))
    );
    return;
  }

  if (url.origin !== self.location.origin) {
    event.respondWith(fetch(request).catch(() => caches.match(request)));
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(request).then((response) => {
        const responseClone = response.clone();
        caches.open(cacheName).then((cache) => cache.put(request, responseClone));
        return response;
      });
    })
  );
});
