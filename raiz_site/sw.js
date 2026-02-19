self.addEventListener("install", e=>{
e.waitUntil(caches.open("raiz-cache").then(cache=>cache.addAll(["/","/index.html","/logo.png"])));
});
