if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const b=e||("document"in self?document.currentScript.src:"")||location.href;if(s[b])return;let d={};const r=e=>a(e,b),t={module:{uri:b},exports:d,require:r};s[b]=Promise.all(c.map((e=>t[e]||r(e)))).then((e=>(i(...e),d)))}}define(["./workbox-a774d07d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-15a4de2d.js",revision:"c1a705f47b0ab3b95d28d99a46c85b5c"},{url:"assets/404.html-cc6a1e55.js",revision:"b9cf895de2e072a01851e459f67a49de"},{url:"assets/app-3818bd20.js",revision:"901100d1750dcb88feaecbb1ca42ddb9"},{url:"assets/channel.html-0e02f2b6.js",revision:"7ca08d73f68266c7f52dfda4dc414c13"},{url:"assets/channel.html-47cbea98.js",revision:"14a9389ec30aa2cfd7edd584962384d2"},{url:"assets/channel.html-7c6003d9.js",revision:"7d5a0d13c1239c7beff3f81cf6998369"},{url:"assets/channel.html-ecf72004.js",revision:"7b95c3dc44182613bb4df9b8ac82d5b6"},{url:"assets/demo.html-6f36f4ef.js",revision:"c0993602f63eca419b06c71424ed01b7"},{url:"assets/demo.html-9d1094fb.js",revision:"3c1b8dab8bcb374c1520f3dbab2f5c20"},{url:"assets/demo.html-d7511d78.js",revision:"49c34d46e86902495704acd4d8e90746"},{url:"assets/demo.html-f969d41b.js",revision:"3500424b96b0f553f2b887e6a423d269"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/framework-eb069dea.js",revision:"9356ea6731ba96965bde379a4f4a36b7"},{url:"assets/getter.html-66abbda1.js",revision:"db45cf41b90d12ce93d2a808e97147bf"},{url:"assets/getter.html-7e1aa30b.js",revision:"c4864996817a7a1e5459cb3e1c17cf94"},{url:"assets/getter.html-85ce4140.js",revision:"26eb0c4c56ea5cd7520496df33992977"},{url:"assets/getter.html-b284e186.js",revision:"121d69b4e20530ff28ae31b5dc893aec"},{url:"assets/giscus-cb5b3b13.js",revision:"55c6133d523779a1a33f415a1903244a"},{url:"assets/guide.html-1e6c5c6c.js",revision:"c8a1b19ba0a07d0d93452fc0127a3f99"},{url:"assets/guide.html-647d483a.js",revision:"5743c6867ee4146e888142d8b249ff84"},{url:"assets/guide.html-751b9993.js",revision:"cc78e4c0433cd98983541b28ef7ccd1c"},{url:"assets/guide.html-b2e959a3.js",revision:"73be45c29a925f8380c78c4a0127ef25"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-25097166.js",revision:"00426f02a266054793da4e8b9b15d9ea"},{url:"assets/index.html-377136f3.js",revision:"598e2979c6746c6ba3ad02411b59d4a8"},{url:"assets/index.html-3c48d94c.js",revision:"cbd1be6f0bd6830bcf36a4fefe1c9072"},{url:"assets/index.html-3da33a20.js",revision:"14633beb49523b8fba97e24b24b0223b"},{url:"assets/index.html-44e8438f.js",revision:"7851c5cc6a4d8acd840d7bf5966ce786"},{url:"assets/index.html-a21e61d7.js",revision:"ab0c13b24cdf27100091bc3c123246e7"},{url:"assets/index.html-eb965e64.js",revision:"de7418ad7ec499fbfd158c406f990a02"},{url:"assets/index.html-f8b4cab9.js",revision:"292c76f167a962aaea435dbd29bc6f6b"},{url:"assets/item.html-692caafc.js",revision:"d45a0717f2b911c24375b7db1969c183"},{url:"assets/item.html-7f8ee717.js",revision:"bdde80fad6afbc2f8dc543857a3f23cb"},{url:"assets/item.html-8462b372.js",revision:"61788740db3c2249d2790b7a3ea53133"},{url:"assets/item.html-edc974a9.js",revision:"2d0e59ca6f9805de6a1855b8e19962ae"},{url:"assets/migration.html-267754fe.js",revision:"bffff5a20b9173e323b607eb221bf68d"},{url:"assets/migration.html-43293e4b.js",revision:"32bb7ee367cd221b7a7090bd33260790"},{url:"assets/migration.html-d8b17ab7.js",revision:"6f5f9212252c13c2a19beb77fe13ba67"},{url:"assets/migration.html-eb685acb.js",revision:"ab6f139c567b318bf06e4efa2ab7479c"},{url:"assets/OrbitControls-0acc8727.js",revision:"654a0325d180ead88b361aa054844c0b"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/STLLoader-024569b3.js",revision:"149cfa7657a51694576a3d20e7933a05"},{url:"assets/style-dceac9d3.css",revision:"930bf125158c67fa274cacfe86b40791"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/three.module-2e64a78b.js",revision:"eb00feba797a3f5ba8b3b968912996de"},{url:"logo.svg",revision:"5e6edad3be298954c87eb993750cabb0"},{url:"index.html",revision:"dd9436cdb77e7f83401352913cd728a3"},{url:"404.html",revision:"75e09210163d8203ed2c177ea44dcec5"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
