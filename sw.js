var CACHE="smartfarm-v1";
self.addEventListener("install",function(e){self.skipWaiting();e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(["./","./index.html","./manifest.json"])}))});
self.addEventListener("activate",function(e){e.waitUntil(clients.claim())});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET"||e.request.url.indexOf(location.origin)!==0)return;
e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(CACHE).then(function(k){k.put(e.request,c)});return r}).catch(function(){return caches.match(e.request)}))});
