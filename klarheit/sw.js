self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>{e.waitUntil(self.registration.unregister().then(()=>self.clients.matchAll()).then(c=>c.forEach(x=>x.navigate("../reset-und-flow/"))))});
