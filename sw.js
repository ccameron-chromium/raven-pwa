var install_handler = function(event) {
  var add_to_cache = function(cache) {
    return cache.addAll(['./offline.html']);
  }
  event.waitUntil(caches.open('offline-cache').then(add_to_cache));
}
self.addEventListener('install', install_handler);
var fetch_handler = function(event) {
  var fetch_offline = function() {
    var get_from_cache = function(cache) {
      return cache.match('offline.html');
    }
    return caches.open('offline-cache').then(get_from_cache);
  }
  event.respondWith(fetch(event.request).catch(fetch_offline));
}
self.addEventListener('fetch', fetch_handler);

