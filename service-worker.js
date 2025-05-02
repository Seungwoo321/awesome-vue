/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "666e5d51229dc2ebc63e6bbe3e3b36b5"
  },
  {
    "url": "assets/css/0.styles.ac150faa.css",
    "revision": "453a3fa0dad52402e2b20a58de935494"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.ac024f34.js",
    "revision": "88b9f3a2b533bcdfc7a2fc86afccf5ba"
  },
  {
    "url": "assets/js/11.a07079b2.js",
    "revision": "cfcc99905967727bbc22863081689316"
  },
  {
    "url": "assets/js/12.051323e3.js",
    "revision": "94083756877a7fe5b772d78cfed5edc3"
  },
  {
    "url": "assets/js/13.9fac41c8.js",
    "revision": "48e87a37bef09842e655a0cbba8d5e60"
  },
  {
    "url": "assets/js/14.167b5405.js",
    "revision": "d152a82ee6ea9efaaca7b6c2a2f42432"
  },
  {
    "url": "assets/js/15.38a7bc32.js",
    "revision": "4bc2df013fd3e91668bba26291b1ce7a"
  },
  {
    "url": "assets/js/16.9e6f471d.js",
    "revision": "da39e410dfce81334e443754d54d609a"
  },
  {
    "url": "assets/js/17.b3ac9297.js",
    "revision": "3c40f989ea6e269b5be81de29fec4add"
  },
  {
    "url": "assets/js/18.fe6a7004.js",
    "revision": "7bd1245a63f28e842f442064f8f0e01c"
  },
  {
    "url": "assets/js/19.6603ef96.js",
    "revision": "20d6b8e37e0b2b899d68ff3af89a2ca2"
  },
  {
    "url": "assets/js/2.e80942ca.js",
    "revision": "8471ceef01c26910a7d7d7ce6b8683cb"
  },
  {
    "url": "assets/js/20.3f416f35.js",
    "revision": "60f10cd6a0e524965f300c1d3441d9db"
  },
  {
    "url": "assets/js/21.f5a91189.js",
    "revision": "31a05e0bfa558bd3fe44a34123dc794a"
  },
  {
    "url": "assets/js/22.41bc76f4.js",
    "revision": "8cfd9c3d439f7d695d90c55f77631d53"
  },
  {
    "url": "assets/js/23.043d7ea9.js",
    "revision": "dca42ef64cb269e9b3b14a17fcbb602d"
  },
  {
    "url": "assets/js/24.c747e259.js",
    "revision": "ab06376fb2871500fafb69e7d7e80720"
  },
  {
    "url": "assets/js/25.f99d0882.js",
    "revision": "875435bdaccfccf20ace0ac80145cd8a"
  },
  {
    "url": "assets/js/26.1448ed0e.js",
    "revision": "f827293ecf07aa80561d473015259a3d"
  },
  {
    "url": "assets/js/27.c42c1ec5.js",
    "revision": "898b426fa886ab915efb9a18887fd857"
  },
  {
    "url": "assets/js/28.759d8613.js",
    "revision": "9428ec4ba97b6f21641b7b6f12a21982"
  },
  {
    "url": "assets/js/29.cf654110.js",
    "revision": "f96dcc40efd05eb64015c50c6593838f"
  },
  {
    "url": "assets/js/3.fe6d7168.js",
    "revision": "c7ff5da4f22d504343294d4110eb54cf"
  },
  {
    "url": "assets/js/30.5224c3cb.js",
    "revision": "730ffcec27db5fd7c32cd0d7697bdc3a"
  },
  {
    "url": "assets/js/31.e343626d.js",
    "revision": "55a14de83f6f67cd2ae48e6e1b7a895c"
  },
  {
    "url": "assets/js/32.cda329a7.js",
    "revision": "8f7ae814d37a6ff4f07b5805f890c1f7"
  },
  {
    "url": "assets/js/33.c8366e0d.js",
    "revision": "01cb69a0702550aa06510d8530060e2c"
  },
  {
    "url": "assets/js/34.6fffa768.js",
    "revision": "a81497d5bb4dde973fbe20fd5ff09079"
  },
  {
    "url": "assets/js/35.439fbb5f.js",
    "revision": "ad2e5a1e3dca407f0653938486061a79"
  },
  {
    "url": "assets/js/36.80c37f35.js",
    "revision": "9cb6e49c7433b123bf082dcc0b64036d"
  },
  {
    "url": "assets/js/37.e9f92857.js",
    "revision": "988d83f1510a6ab40ad26cee55f0a963"
  },
  {
    "url": "assets/js/38.dc193056.js",
    "revision": "76493a5566727079cea2afdd8d476c83"
  },
  {
    "url": "assets/js/39.94528857.js",
    "revision": "a95b86cb50f692d084209f4da95d82f1"
  },
  {
    "url": "assets/js/4.e28d717d.js",
    "revision": "61c330ee491fa4219741dae56b28d52d"
  },
  {
    "url": "assets/js/40.a43c93f2.js",
    "revision": "1a06a579baa365e90bcc958914ef145e"
  },
  {
    "url": "assets/js/41.0f9746c0.js",
    "revision": "1aa0b49f58a0e6d027510ecf033d40a6"
  },
  {
    "url": "assets/js/42.ed248986.js",
    "revision": "57dac6c634c830a66a44235548ddb045"
  },
  {
    "url": "assets/js/43.6421b66d.js",
    "revision": "1589fbc8dc6993befdcea61034bf199b"
  },
  {
    "url": "assets/js/44.da14b4c4.js",
    "revision": "149ce14a93e28f340591ade38d92521d"
  },
  {
    "url": "assets/js/45.50ca9c38.js",
    "revision": "8617005ccb457fc57771e8a2915b3705"
  },
  {
    "url": "assets/js/46.d4c0cea6.js",
    "revision": "e7de189054cb3bad415f7ee68e55cd15"
  },
  {
    "url": "assets/js/47.f636a549.js",
    "revision": "ba4b9c53681e022e7c4ff2cff96ba093"
  },
  {
    "url": "assets/js/48.b1a18a2c.js",
    "revision": "31f6857d003aa890b71c79d7e38fd402"
  },
  {
    "url": "assets/js/49.a1b88210.js",
    "revision": "007a8aa1092c08ff6b983a1a12870ba7"
  },
  {
    "url": "assets/js/5.2afffd05.js",
    "revision": "c405923ea9a0a75060900682faf7a8ff"
  },
  {
    "url": "assets/js/50.a8018b8b.js",
    "revision": "0afd3e83eb6de0637a1fdcdec526df00"
  },
  {
    "url": "assets/js/51.cb7d8064.js",
    "revision": "26ce18b6e840fc333673ff86ad44ffc4"
  },
  {
    "url": "assets/js/52.2027deec.js",
    "revision": "82c0cb8a4d36c0a5f5703ae29f673f8c"
  },
  {
    "url": "assets/js/53.1a59a944.js",
    "revision": "44ea7c124ccee63a8c434f76bf74297a"
  },
  {
    "url": "assets/js/54.142c8479.js",
    "revision": "d414f3114ecd4a269497fd17941de8a5"
  },
  {
    "url": "assets/js/55.278e8b52.js",
    "revision": "5982102db4aadb489193ce1ff9128bdf"
  },
  {
    "url": "assets/js/56.20eb2e94.js",
    "revision": "f9ee95581dbbe750e84a94a2870f04e5"
  },
  {
    "url": "assets/js/6.166c5878.js",
    "revision": "1295d10a35fe017e418fad689081c20d"
  },
  {
    "url": "assets/js/7.b10aa9ac.js",
    "revision": "02301f8ffb3965b651e92eb5718d7923"
  },
  {
    "url": "assets/js/8.bc4793cf.js",
    "revision": "8415db084036391e56a6cb17b22a2111"
  },
  {
    "url": "assets/js/app.3fb7ecb9.js",
    "revision": "2d8da676843418c55855af8ef4e6a30f"
  },
  {
    "url": "assets/js/vendors~docsearch.76a29222.js",
    "revision": "9637d52e5fc6d45ad3e65cfe36c64139"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "9fc7c13285d956d707bde52aa1d235e3"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "b250edd783ce5566e84c2201b4eabeb8"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "33f7b480476121a3bd58fa3064243141"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "4d314e7b6234689aa71f8d372784f2b7"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "66bc6cc98da0bb59d7d109c6a05aefa5"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "27e8619f58cc0ea77fff290c00817709"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "1b920d5dc06fa73321685e903c32b102"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "a95e11b862c3e5f25c8df42b36573275"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "629fa5aeffe4700568324e68c0eca0c0"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "d1ff2cd2e70aceb2f8d0f30e376c7400"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "6e438b72d7964b5672e8dd747dc0306d"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "98714e71fd1b2d878c43350136ea4026"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "45f1a0fbafd1914f2c35ae6718b96f40"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "8d1b041122b2be67bc6f4c3e1e76967a"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "eef60d770b2c5e9cea67e6d2f1679258"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "1584af6da5e70d849a8a1905a30ad82e"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "29f18d1f1fabe9e5507ef2b9ed0b458d"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "13623ed64900a1c2b8fb791a8aa293e7"
  },
  {
    "url": "resources/books.html",
    "revision": "eb4cdaab2bb9413a01a1ecd264893876"
  },
  {
    "url": "resources/community.html",
    "revision": "aa0a6128afe2fd24a31e5da21d383204"
  },
  {
    "url": "resources/conferences.html",
    "revision": "845de7f97ea1ec97e4fd5025f62a1939"
  },
  {
    "url": "resources/courses.html",
    "revision": "e58f3fa8800c2e56cce7edccf6f98ecd"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "90095df2348c6b9401ed3818bde5d896"
  },
  {
    "url": "resources/examples.html",
    "revision": "81e4f86d844e367f1179bccc398a39ad"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "b9c0381a93695685d5d575b66cb996e4"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "b416a8b2bf02b85b300470f4aaaad35a"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "997bb53d7e01a02f3d395e0cc346c289"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "ab6720527f791c1ff204b3f8416f9136"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "28296f74dfb8da29d298d4475595dc4b"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "6ab9324bf3bb6d1aa594d4c5d8a08f2f"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "5b29d247059041e73c27b158b62d3f16"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
