self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("tally-cache").then(cache => {
            return cache.addAll([
                "index.html",
                "manifest.json",
                "icon.png",
                "icon512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});
