if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const b=e=>a(e,d),t={module:{uri:d},exports:r,require:b};s[d]=Promise.all(c.map((e=>t[e]||b(e)))).then((e=>(i(...e),r)))}}define(["./workbox-a774d07d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-089c8be3.js",revision:"865854e05e95aad8433fed2c5b6324c9"},{url:"assets/404.html-a8e99cb7.js",revision:"93d15d0f3a6b30cb4f8fa9eea54fd5b0"},{url:"assets/app-f223033f.js",revision:"dd5c54cac2600d7d0dbc70825706ca01"},{url:"assets/config.html-048b5e05.js",revision:"577b6a1c930cd7a1e5ac1b3060b1de98"},{url:"assets/config.html-71661ea3.js",revision:"ecbee97a99c7b21a8e9618bce698332b"},{url:"assets/config.html-8b8c4840.js",revision:"62e3625f549c92ca052a01107bb0c145"},{url:"assets/config.html-d59ce7e1.js",revision:"07e5910a2b7b76d25d901ab4cb8a01dd"},{url:"assets/demo.html-19e0e8f8.js",revision:"606f80a47c10b746895782b1c5187846"},{url:"assets/demo.html-4f1336f3.js",revision:"f84b351dd06eba12c30c6bc1198327af"},{url:"assets/demo.html-635da66f.js",revision:"8802f815bb3829a5a40956bf47a2ebe5"},{url:"assets/demo.html-97e6e529.js",revision:"2894703c23ba670a5040145b356d23ad"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/framework-ecf98296.js",revision:"3249cdf522d2a3d95b1a1d692d5dec9a"},{url:"assets/giscus-cb5b3b13.js",revision:"55c6133d523779a1a33f415a1903244a"},{url:"assets/guide.html-031ff166.js",revision:"1084efcb38d6f985c0d8cf3ff0e50372"},{url:"assets/guide.html-6651ba4a.js",revision:"be67cc465c9d79867bc875dbeb7c1ff8"},{url:"assets/guide.html-73686b0d.js",revision:"e6f4896f5ed79d426595f78f2e4c83e8"},{url:"assets/guide.html-b4cec7be.js",revision:"9e5f51a983d6c2fd12113b2ba831c8d5"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-096e59fd.js",revision:"d76d2ed3b69935d8ea414bf20f486cd8"},{url:"assets/index.html-1cb3e874.js",revision:"0ce92b1146696e88e62742c25b032dab"},{url:"assets/index.html-2986ec9b.js",revision:"f49651fed334904bd89a4a0ff8fbf855"},{url:"assets/index.html-979a80b6.js",revision:"9506e3ac8c8ccba9420823367fc21914"},{url:"assets/OrbitControls-0acc8727.js",revision:"654a0325d180ead88b361aa054844c0b"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/STLLoader-024569b3.js",revision:"149cfa7657a51694576a3d20e7933a05"},{url:"assets/style-d6c56875.css",revision:"d35a28c29579b0160a06edd69a102e8c"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/three.module-2e64a78b.js",revision:"eb00feba797a3f5ba8b3b968912996de"},{url:"logo.svg",revision:"5e6edad3be298954c87eb993750cabb0"},{url:"index.html",revision:"b532b02c61f54ae6ccf9c5d145f78cef"},{url:"404.html",revision:"6891c9cebf78cf5328062c60f5e010ce"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map