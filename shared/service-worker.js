if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let b={};const t=e=>a(e,r),f={module:{uri:r},exports:b,require:t};s[r]=Promise.all(d.map((e=>f[e]||t(e)))).then((e=>(i(...e),b)))}}define(["./workbox-a774d07d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-acb73ba0.js",revision:"227d716b8dab36954cafab5d4fd0dbaf"},{url:"assets/404.html-cc6a1e55.js",revision:"b9cf895de2e072a01851e459f67a49de"},{url:"assets/app-56588bd8.js",revision:"bdf3f3d1687ee3cf13799694c0285440"},{url:"assets/bundler.html-0983f54c.js",revision:"7ea91eb29729d2aed812312f4a0031d0"},{url:"assets/bundler.html-3deaea01.js",revision:"6474b83d575898b87668c8f1388e3883"},{url:"assets/bundler.html-7ee1f7b6.js",revision:"56f3156b1a8d1b299665d3c25125abd2"},{url:"assets/bundler.html-911f8765.js",revision:"02bbf26ac40b99a037ac6fef6a8007f3"},{url:"assets/client.html-6e161639.js",revision:"b9f0dd63a193c4a42214f97a1094ae98"},{url:"assets/client.html-cd02b26d.js",revision:"b5fe3d7565c55e89a09e93633b24b606"},{url:"assets/client.html-d6964e28.js",revision:"6f1c8a7a82ecfe9332caf6ca6d66a83a"},{url:"assets/client.html-e3361098.js",revision:"0f1349a1ec23db20802886ee09d7b634"},{url:"assets/content.html-9206f86d.js",revision:"2e4632f65435837f95be7bb0d9a237dd"},{url:"assets/content.html-b176e37e.js",revision:"5961624359058442ccb16e20f9b2041c"},{url:"assets/content.html-decae46d.js",revision:"7b128fa07a2d6701a76b7e19a4387960"},{url:"assets/content.html-fc83bb1f.js",revision:"676078a62fda21c51830fd9bf46c8e89"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/framework-eb069dea.js",revision:"9356ea6731ba96965bde379a4f4a36b7"},{url:"assets/giscus-cb5b3b13.js",revision:"55c6133d523779a1a33f415a1903244a"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-09e28a05.js",revision:"618ea07c52ddb2f84a1281cc8f3a51ba"},{url:"assets/index.html-0bff32e3.js",revision:"939d22e7ad063bc0afaa0698249e8b2b"},{url:"assets/index.html-2230641b.js",revision:"5afead16d237db90bffb8ec996f815c0"},{url:"assets/index.html-5b404e47.js",revision:"ca3150482bbd82134d64d10af4430cff"},{url:"assets/index.html-c2183389.js",revision:"f48899f0b3353fb82f90aa77e5f1604d"},{url:"assets/index.html-cac339c9.js",revision:"4ef0bd593c47984cfc0f6145ec9bae3a"},{url:"assets/index.html-effe0ee3.js",revision:"939d22e7ad063bc0afaa0698249e8b2b"},{url:"assets/index.html-fcdc6905.js",revision:"1e9ad36dbae3c92922c507afc047555b"},{url:"assets/OrbitControls-0acc8727.js",revision:"654a0325d180ead88b361aa054844c0b"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/shared.html-31dfd850.js",revision:"2c8936e0b71861cda736dfd478ac50db"},{url:"assets/shared.html-95efc1ab.js",revision:"015f2b05bb4e71970cf5e4443f0e59ae"},{url:"assets/shared.html-986fe1e3.js",revision:"69f49f79f72a8f7e3e1f187fb9d05fdc"},{url:"assets/shared.html-f6cedf3b.js",revision:"80f7a9d073bab6e27c16b4d3fb964a1e"},{url:"assets/STLLoader-024569b3.js",revision:"149cfa7657a51694576a3d20e7933a05"},{url:"assets/style-49d43924.css",revision:"55aac5664dae932c2481b40bcf416857"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/three.module-2e64a78b.js",revision:"eb00feba797a3f5ba8b3b968912996de"},{url:"logo.svg",revision:"5e6edad3be298954c87eb993750cabb0"},{url:"index.html",revision:"ce33c72481035f6d9384b886455c7daa"},{url:"404.html",revision:"71666bf44d77c2544da5ab7a6307a4f7"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
