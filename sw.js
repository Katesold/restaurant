const cacheName = 'restaurant-reviews';

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll([
                    './',
                    './index.html',
                    './restaurant.html',
                    './css/styles.css',
                    './data/restaurants.json',
                    './js/main.js',
                    './js/restaurant_info.js',
                    './js/dbhelper.js',
                    '/sw.js',
                    './img/1.jpg',
                    './img/2.jpg',
                    './img/3.jpg',
                    './img/4.jpg',
                    './img/5.jpg',
                    './img/6.jpg',
                    './img/7.jpg',
                    './img/8.jpg',
                    './img/9.jpg',
                    './img/10.jpg',

                ])
                .catch(error => {
                    console.log('Cache failed ' + error);
                });
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(response => {
            //if the request can be found in cache
            if (response) {
                //return saved cache response
                return response;
            }
            return fetch(event.request);
        })
    );
});
