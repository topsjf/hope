if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let f={};const r=e=>a(e,c),b={module:{uri:c},exports:f,require:r};s[c]=Promise.all(d.map((e=>b[e]||r(e)))).then((e=>(i(...e),f)))}}define(["./workbox-a774d07d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-a218b2ab.js",revision:"99eed84c3bdc53fbc6e2422f1e0549ac"},{url:"assets/404.html-e6d62a7d.js",revision:"798ef40392c2a202fc3331e1adbd42a2"},{url:"assets/app-9a646b6f.js",revision:"363d718d9e4557664846eecdf9ec399c"},{url:"assets/config.html-0a6e3479.js",revision:"80543e67b2e0b576293495d7c190eecd"},{url:"assets/config.html-2d4ff6a9.js",revision:"4509c055027b5894228279e0bb9bc608"},{url:"assets/config.html-f9480831.js",revision:"df717f827111ffa9725b5a66db26fcc4"},{url:"assets/config.html-fdd4ecae.js",revision:"50eea710a7e408bb63dfd109988db195"},{url:"assets/demo.html-1004e0a7.js",revision:"f1bca075003eb88753dcf25d322646c7"},{url:"assets/demo.html-68d8e2b7.js",revision:"71d8f25eb65be573ea14f507aeb3f65e"},{url:"assets/demo.html-9e4716e1.js",revision:"79f29ac817a43ff7de4bd71557d00e40"},{url:"assets/demo.html-b336e23c.js",revision:"1f6247140febf18dcbfcaf1c8913be45"},{url:"assets/framework-e1acd37d.js",revision:"ffa6ce085284d76bd01c737be2e0904b"},{url:"assets/giscus-cb5b3b13.js",revision:"55c6133d523779a1a33f415a1903244a"},{url:"assets/guide.html-6a5bc0c6.js",revision:"6060efddf9f3caf41649e97ab7e9c737"},{url:"assets/guide.html-a1cde686.js",revision:"1f6541cb0ca3043247cc23924048a456"},{url:"assets/guide.html-b7981c3f.js",revision:"9128a448b5ed2fa898db2361d032610b"},{url:"assets/guide.html-dc7bf46c.js",revision:"1b4b5426af695a0181c03a0c5a121bfd"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-43f34d05.js",revision:"1c21d0c1a58a5d0e948f50bc36cf6ee7"},{url:"assets/index.html-88bfd634.js",revision:"8d9548ea2e1afa8582a1096170c2e49d"},{url:"assets/index.html-b69e4305.js",revision:"d48434ee7d3980c201b0c885f0b2b047"},{url:"assets/index.html-f0ce7dfc.js",revision:"1b847af8806aed7f65d1e67296f4cb23"},{url:"assets/OrbitControls-0acc8727.js",revision:"654a0325d180ead88b361aa054844c0b"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/SearchResult-18f695db.js",revision:"ac279e05dcf9ac97c67aa014fd973b3a"},{url:"assets/STLLoader-024569b3.js",revision:"149cfa7657a51694576a3d20e7933a05"},{url:"assets/style-7a9cbe7c.css",revision:"4c127016f444b5b179fe11ddf56bb872"},{url:"assets/three.module-2e64a78b.js",revision:"eb00feba797a3f5ba8b3b968912996de"},{url:"logo.svg",revision:"d03b4a97a53cd719b6cdfb2419ebb5a1"},{url:"index.html",revision:"77c0c4bc93d03b71a0b54f07756d429f"},{url:"404.html",revision:"e01b356cbf746fbd9862edc19d0b8df7"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
