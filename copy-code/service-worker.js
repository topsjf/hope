if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const b=e=>a(e,c),f={module:{uri:c},exports:r,require:b};s[c]=Promise.all(d.map((e=>f[e]||b(e)))).then((e=>(i(...e),r)))}}define(["./workbox-a774d07d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-7a1d4cba.js",revision:"78ac13a95cd7ded9bd8285bd66595db0"},{url:"assets/404.html-cc6a1e55.js",revision:"b9cf895de2e072a01851e459f67a49de"},{url:"assets/app-55fa6d15.js",revision:"5159aec47f6f0f111366ab31b26b2862"},{url:"assets/config.html-41f1820a.js",revision:"f55f1c73adf755bf26a27e532ff044be"},{url:"assets/config.html-4fc60d3a.js",revision:"0d9d969498fddeb84117de175e26ebb9"},{url:"assets/config.html-9cb28402.js",revision:"627b3945b7cb3488f2c5d474c52d38fe"},{url:"assets/config.html-dc7f4bc1.js",revision:"d9c4866df2062341f26a18425e6da8c9"},{url:"assets/demo.html-b43df98e.js",revision:"f84371248ef032aa5fbb1f5cc6f783ce"},{url:"assets/demo.html-bcaf93d8.js",revision:"5400f06d7736409d993e5e02d6f1521e"},{url:"assets/demo.html-c111ac22.js",revision:"8b5c95b0d0b731d212a1e9ee3dfbfc5d"},{url:"assets/demo.html-ca446a2c.js",revision:"0bf88df423debac96752a938d8d839e7"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/framework-eb069dea.js",revision:"9356ea6731ba96965bde379a4f4a36b7"},{url:"assets/giscus-cb5b3b13.js",revision:"55c6133d523779a1a33f415a1903244a"},{url:"assets/guide.html-5a8a9de4.js",revision:"a0f424fcc278c527675ad1e3ce979b91"},{url:"assets/guide.html-7bd6912f.js",revision:"00efe5c5e6b9d5e91e2060ce292a2adc"},{url:"assets/guide.html-9443850e.js",revision:"f611fbe8a85b9f355aa6e916ad2103b6"},{url:"assets/guide.html-a872a7dc.js",revision:"6f0e581b786dbcfb789ee1da4ee1ce0f"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-ada25cc2.js",revision:"5f83cf2a4f258144b2dfcc2fb4d87867"},{url:"assets/index.html-c077526f.js",revision:"d7edc7f6fb7f6db03903b97d2bec631c"},{url:"assets/index.html-e4a3b6ef.js",revision:"2767d0f753e60dd23da31b636564ebdb"},{url:"assets/index.html-e76cd881.js",revision:"646e25ef6200e1000de371582b47f1f2"},{url:"assets/migration.html-0056a5df.js",revision:"356852dfe795c59ab2dc4152661aa0dc"},{url:"assets/migration.html-88cf3807.js",revision:"98aa0cba4345e25238317abc121e2416"},{url:"assets/migration.html-bfb09424.js",revision:"5762be848b91c25150c317867497fd60"},{url:"assets/migration.html-cd5b81e9.js",revision:"ca8c9e0730bbf55031b003d1b48d21bb"},{url:"assets/OrbitControls-0acc8727.js",revision:"654a0325d180ead88b361aa054844c0b"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/STLLoader-024569b3.js",revision:"149cfa7657a51694576a3d20e7933a05"},{url:"assets/style-d6c56875.css",revision:"d35a28c29579b0160a06edd69a102e8c"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/three.module-2e64a78b.js",revision:"eb00feba797a3f5ba8b3b968912996de"},{url:"logo.svg",revision:"5e6edad3be298954c87eb993750cabb0"},{url:"index.html",revision:"c05b8dfc392cc30d6444ac98d97e4ef0"},{url:"404.html",revision:"72571e7912fbdbf33cec4993dfba9f0a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
