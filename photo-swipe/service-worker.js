if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const b=e=>a(e,d),t={module:{uri:d},exports:r,require:b};s[d]=Promise.all(i.map((e=>t[e]||b(e)))).then((e=>(c(...e),r)))}}define(["./workbox-a774d07d"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-089c8be3.js",revision:"865854e05e95aad8433fed2c5b6324c9"},{url:"assets/404.html-19999ecb.js",revision:"86fe669e75388c6ce47cc4c98426da85"},{url:"assets/app-f3ccba9c.js",revision:"e0ff62ba62deffa841b22121e7491293"},{url:"assets/config.html-0fb377d2.js",revision:"6d3d7061f6ac246678962796149054c1"},{url:"assets/config.html-5532ee9c.js",revision:"a22008ae86345754aa3f6b4c5d6b785b"},{url:"assets/config.html-89c1ab8e.js",revision:"181e0637ace47b9f6ee04c170eb322b1"},{url:"assets/config.html-8fee57ef.js",revision:"1669276b0b5f86d5626c9d79ebfd7a3a"},{url:"assets/demo.html-04a9c648.js",revision:"e14c74aa5bb461039ec254ec3ca2007f"},{url:"assets/demo.html-682cbfd3.js",revision:"eccda9f269f4e176c55b6b37336b69c2"},{url:"assets/demo.html-98181c0d.js",revision:"42da0b434d7281329bf8008ccadffccc"},{url:"assets/demo.html-9a25480d.js",revision:"22c35ad5fb8827d74f71f91d800e7cb8"},{url:"assets/docsearch-1d421ddb.js",revision:"582ce23a3b7a09735ae2e462904b2e3a"},{url:"assets/framework-ecf98296.js",revision:"3249cdf522d2a3d95b1a1d692d5dec9a"},{url:"assets/giscus-cb5b3b13.js",revision:"55c6133d523779a1a33f415a1903244a"},{url:"assets/guide.html-23c3021f.js",revision:"4d4d408a29541d7433dcf5b92b533b61"},{url:"assets/guide.html-9860b874.js",revision:"61b13837cece1bdff6bf05d031ec7ea1"},{url:"assets/guide.html-a2ab5c07.js",revision:"9ed840c13b3a2679e1c4a8ebc2a359ca"},{url:"assets/guide.html-dfc0af2b.js",revision:"b99fc221f3f717fcab8d6dea58ab0561"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-2864a414.js",revision:"264df17f2fd5524055daf751457c80b7"},{url:"assets/index.html-298debc9.js",revision:"7290380f0be1634c364b76912147b818"},{url:"assets/index.html-ad21ef9c.js",revision:"b18098de2abe97ec930c425f05155b7c"},{url:"assets/index.html-bcb3f47d.js",revision:"cc583fa82e0edf8f699ba64db4a18561"},{url:"assets/migration.html-07424903.js",revision:"40726fe4bd7e82f75fdbd209ea6e2988"},{url:"assets/migration.html-56e0f25e.js",revision:"6a3d52211317e841d54500ef8403b325"},{url:"assets/migration.html-9a66095b.js",revision:"dd4c50c60325026cb3b4f1b9f06e48c9"},{url:"assets/migration.html-9daef413.js",revision:"ee1f9e9860d297a361347e7d534621e5"},{url:"assets/OrbitControls-0acc8727.js",revision:"654a0325d180ead88b361aa054844c0b"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/STLLoader-024569b3.js",revision:"149cfa7657a51694576a3d20e7933a05"},{url:"assets/style-d6c56875.css",revision:"d35a28c29579b0160a06edd69a102e8c"},{url:"assets/style-e9220a04.js",revision:"b40fc755bce11d2ee5ec6b814c802a65"},{url:"assets/three.module-2e64a78b.js",revision:"eb00feba797a3f5ba8b3b968912996de"},{url:"logo.svg",revision:"5e6edad3be298954c87eb993750cabb0"},{url:"index.html",revision:"41953e42637c9ab888590af6cecec8fc"},{url:"404.html",revision:"0348a61c3edead9baafb4112e573063d"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
