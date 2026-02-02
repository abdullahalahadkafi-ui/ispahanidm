const CACHE_NAME = 'idm-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/offline.html',
  '/favicon.png'
];

// ফাইলগুলো সেভ করা (Install)
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// অফলাইনে থাকলে পেজটি দেখানো (Fetch)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).catch(() => caches.match('/offline.html'));
    })
  );
});