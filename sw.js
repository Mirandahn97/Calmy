// Install Service Worker
self.addEventListener('install', () => {
    console.log('Service Worker has been installed');
})

const staticAssets = ['./index.html', './src/main.tsx', 'fallback.html']

const staticCasche = ""
const dynamicCache = ""

// Install Service Worker
self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.open('staticCasche')
            .then(function (cache) {
                return cache.addAll(
                    staticAssets
                )
            })
    )
})

// Fetch event
self.addEventListener('fetch', (event) => {
    // Kontroller svar på request
    event.respondWith(
        //Kig efter fil match i cache
        caches.match(event.request)
            .then(cacheRes => {
                //Retunere match fra cache - eller hent fil på serveren
                return cacheRes || fetch(event.request)
                    .then(fetchRes => {
                        //Tilføj nye sider til cachen 
                        return caches.open(dynamicCache)
                            .then(cache => {
                                //Bruger put til at tilføje sider til vore cache
                                //Læg mærke til methode clone
                                cache.put(event.request.url, fetchRes.clone())
                                //Retunerer fetch request 
                                return fetchRes
                            })
                    }).catch(() => {
                        //Hvis overstående giver fejl kaldes fallback siden
                        return caches.match('fallback.html')
                    })
            })
    )
})