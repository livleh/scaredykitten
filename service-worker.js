const time = `${Date.now()}`;

self.addEventListener('install', function(e) {
    e.waitUntil(
      caches.open('your-cache-name').then(function(cache) {
        return cache.addAll([
          '/',
          '/style.css',
          '/manifest.json',
          // Add other resources that you want to cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });