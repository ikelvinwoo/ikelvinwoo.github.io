if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,c,n)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+i.slice(1)};return Promise.all(c.map((i=>{switch(i){case"exports":return r;case"module":return d;default:return e(i)}}))).then((e=>{const i=n(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-a2afad59"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2021/08/21/hello/index.html",revision:"b5acc593d3e14af4d3fad9745e29551b"},{url:"404.html",revision:"6ec5415aea5b7089f065381b4ee16a98"},{url:"about/index.html",revision:"f97026d172e9c331373628a764a38901"},{url:"archives/2021/08/index.html",revision:"e54b03e3d51f5a4c2f5ddc0e146bcc2c"},{url:"archives/2021/index.html",revision:"bd6df1750e4ff2b4220d4c8b6f168bb1"},{url:"archives/index.html",revision:"e2905e13274f419c9658164c91c3b529"},{url:"categories/index.html",revision:"7e0c812c9fe6435ea2f1377688aac5b2"},{url:"categories/Red-Team/index.html",revision:"5a24aa9f98b2660dce3eb4a2bd6525b8"},{url:"css/index.css",revision:"7541c5ee86a3a478b9ce70425d38dc5d"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"fd40b88ac5370a5353a50b8175c1f367"},{url:"img/background/index1.jpg",revision:"524de55ed0d5011e18c2ce0e3060396d"},{url:"img/background/index2.png",revision:"bf133efd0bb8337d620669b084ca8cf9"},{url:"img/background/index3.jpg",revision:"52c0d669b4af43499e818a330ce6cc84"},{url:"img/background/index4.jpg",revision:"2e76ff7f22314b7b533260d891911cd1"},{url:"img/favicon.png",revision:"86d08a1e2f125332fcde6e779be7cd4e"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"1bb5668232acde1f323d7f40fcd39c14"},{url:"js/main.js",revision:"01f62452fd05335569c6341d3ac0f52b"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"12cef07c2e9bc8841a5380df4fd342f5"},{url:"link/index.html",revision:"3f49347d86811456a4b4dc7cf3e5bba1"},{url:"pwa/icons/icon-128x128.png",revision:"86d08a1e2f125332fcde6e779be7cd4e"},{url:"pwa/icons/icon-144x144.png",revision:"ced37206158240e17ef764633eb3c60b"},{url:"pwa/icons/icon-152x152.png",revision:"21a256dc8ff8ba06082f15706a5feb4c"},{url:"pwa/icons/icon-192x192.png",revision:"786d952190941049de34c25e28f8566d"},{url:"pwa/icons/icon-384x384.png",revision:"d30f95633ba0d4423c8c1fd626aeb90f"},{url:"pwa/icons/icon-512x512.png",revision:"f8d07b0613598db6b2a26b0f26531341"},{url:"pwa/icons/icon-72x72.png",revision:"4b28a8a310f82adfa2013598b6a77480"},{url:"pwa/icons/icon-96x96.png",revision:"9af3694316587aeac5d026b3684debfa"},{url:"tags/Active-Information-Gathering/index.html",revision:"1cfce60f5aab4efd5030f25961884e90"},{url:"tags/index.html",revision:"be657cc3e771fa979cc9fa02c7889a96"},{url:"tags/Information-Gathering/index.html",revision:"9d510d14562ee06609cfd3b6ae2d7b55"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
