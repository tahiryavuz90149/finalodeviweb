'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "5441645fec7a3f5c55b18ce0f777d9f2",
".git/config": "e447bcf342530adf59d997bc7ede6072",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2c1ef358ea82fe36ea50e04101fabe39",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dcb582d7e357d0dd177fc1450225f88b",
".git/logs/refs/heads/master": "dcb582d7e357d0dd177fc1450225f88b",
".git/logs/refs/remotes/origin/master": "c699648765533aefad2555e874c5033f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a8/1c5c13b8995d2bb0dd4a562518746a8a37fca0": "a81f300a8375f01ab95a4a7bb77040c6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e7/cd4ed69ba6b6ae913ddfe369f3eae120628704": "d260319f42a010b10fa2796fc8fd2eb7",
".git/objects/ec/e0c6f143a9301e49c47d6f6ac172189fd8d7ba": "2bd0b7f946f72e819ae311be8a18f748",
".git/objects/f7/ffaaecb0708ad82d194bde85a74fdc4f6cd4f6": "706c4c7450a380d8a5b59fef92171e50",
".git/refs/heads/master": "ec58f17a54628c45e3a160e0bda3aec4",
".git/refs/remotes/origin/master": "ec58f17a54628c45e3a160e0bda3aec4",
"assets/AssetManifest.json": "035f580b5065abaf31b271d87438334f",
"assets/assets/images/Araba_1.png": "7338b531398f5f21b4c9dc5037b1035e",
"assets/assets/images/Araba_2.png": "a3e437ad75be2bb8e1b22d97828e9f84",
"assets/assets/images/Araba_3.png": "fc599930a7b7bc0ba03d005e546d0a68",
"assets/assets/images/Araba_4.png": "09e509b19873a9ed383efef8239a740d",
"assets/assets/images/Bant_1.png": "528cb766e6313b515f5d60c9b26d5831",
"assets/assets/images/Bant_2.png": "3a33e9e9d9c1c2b2711009cb0fc904f6",
"assets/assets/images/Bant_3.png": "dd3adf3be99e2ddcb20ae6c9871ac0f8",
"assets/assets/images/Bebek_1.png": "a994770ee48d427aab92e67c7e8bf29e",
"assets/assets/images/Bebek_2.png": "d4a619128d41481cc8d869bffe38d229",
"assets/assets/images/Bebek_3.png": "5b3c041adcf0cb18530e7e5ecf29abb5",
"assets/assets/images/Bebek_4.png": "75245e71e25a42156f8579f232e0b718",
"assets/assets/images/Bebek_5.png": "2c61f541e591c06e5d5b6bec376af8bf",
"assets/assets/images/Bilgisayar_1.png": "8a2005e548264014fa1b6eefb9275c8e",
"assets/assets/images/Bilgisayar_2.png": "937805af0facf22f5988844d96d08ad5",
"assets/assets/images/Bilgisayar_3.png": "7d53fd7e0ae8966f019e960bb4c00a7c",
"assets/assets/images/BoyaSeti_1.jpg": "5010d681c170fb1ca0dd9eb505db7cea",
"assets/assets/images/BoyaSeti_2.jpg": "4638072ef57c3f669ab3e775f8f060ff",
"assets/assets/images/BoyaSeti_3.jpg": "d4d573ed0d45a683dce616ddaf1d10e9",
"assets/assets/images/BoyaSeti_4.jpg": "0c45aae70bd0848340f7308c92da5c84",
"assets/assets/images/BuzDolabi2_1.png": "c0c27b44d7f11b13aedf781e702ab3e9",
"assets/assets/images/BuzDolabi2_2.png": "231a8892bb43c11f1a617376726168ef",
"assets/assets/images/BuzDolabi2_3.png": "20bf64fe79f38fae75b9c7ca772a8699",
"assets/assets/images/BuzDolabi2_4.png": "b83a0ec02dd596d61cff629b755a168f",
"assets/assets/images/BuzDolabi2_5.png": "1d8c738f22d44359e71436fc54e5982f",
"assets/assets/images/BuzDolabi_1.png": "6b6bdac3b08ceaf268be8cad84bc8a33",
"assets/assets/images/BuzDolabi_2.png": "b96e20607aab0c88ac7f4a0cd81ea102",
"assets/assets/images/BuzDolabi_3.png": "491c588cabd6ba7a0ea093e3a0dae681",
"assets/assets/images/CamasirMakinasi_1.png": "d10ff20aa09229523b3d03791c0e7412",
"assets/assets/images/CamasirMakinasi_2.png": "b69a075411f6172cb16d51ab0cc1a00a",
"assets/assets/images/CamasirMakinasi_3.png": "23ad462e0aecd8706da4519edf6948c2",
"assets/assets/images/CamasirMakinasi_4.png": "9a8297af4f576233335d6e0e88b843b8",
"assets/assets/images/ElmaSuyu.png": "488184680406996ed592668d762e560d",
"assets/assets/images/ErkekCanta_1.jpg": "de84bac63c3b8f9a451328a454ea5b43",
"assets/assets/images/ErkekCanta_2.jpg": "d257ff2b0115fd217a04350b6f312cf7",
"assets/assets/images/ErkekCanta_3.jpg": "2de525ac1abc86c6456274112f36d140",
"assets/assets/images/JussTea.png": "9cf20bc7376f510ced423d94de60da39",
"assets/assets/images/Kalemlik_1.jpg": "9ccafcea730ad8b7e0c2dc642614df3a",
"assets/assets/images/Kalemlik_2.jpg": "49c94fe7c992a77119111b2aaf6795f5",
"assets/assets/images/Kalemlik_3.jpg": "48e54da5432e8ddf9c78d6990402378c",
"assets/assets/images/Kalemlik_4.jpg": "a084bde81aa08e0f5789ad19439c5c89",
"assets/assets/images/KarisikMeyveNektari.png": "ef2b8be4a059c199b82c105fed767a0b",
"assets/assets/images/KizCanta_1.jpg": "eae6878d54b5fc3aab9283f3de89515c",
"assets/assets/images/KizCanta_2.jpg": "9e3519605afe61bb3f6087b73a489332",
"assets/assets/images/KizCanta_3.jpg": "511e0eae61ccab4103b23c3773a85d29",
"assets/assets/images/ManyetikAlfabeSeti_1.png": "636f90784590ca0770ed3a3395f8d4a0",
"assets/assets/images/ManyetikAlfabeSeti_2.png": "f5ef379452969060aa72fdcdd4b7bbb7",
"assets/assets/images/PortalalNektari.png": "d71db6fa1cecbd5ff55de3c3d2903b64",
"assets/assets/images/TakimElbise_1.png": "317a39a80e312c78079507f37e731589",
"assets/assets/images/TakimElbise_2.png": "119690331205d044ae70db8011811296",
"assets/assets/images/TakimElbise_3.png": "f457fff06dc9cb726510b036f8d83db7",
"assets/assets/images/TakimElbise_4.png": "04e23bb55e06060d0e0a483083b6173b",
"assets/assets/images/Telefon_1.png": "5f474b0c6e1cac5f3ce60dd44bfd9e73",
"assets/assets/images/Telefon_2.png": "e265a20dfeaa7f94b4cf87daac2d06fa",
"assets/assets/images/thank_you.jpg": "04cccd340a7a8cd019d9ecadeb45f482",
"assets/assets/images/Tisort2_1.png": "a401a52d50986fb10bc9e079d2540a4a",
"assets/assets/images/Tisort2_2.png": "ec562e56f22f8a57aa1d4c63139caed4",
"assets/assets/images/Tisort2_3.png": "5042352d0375db4dd14e1abb997b32a1",
"assets/assets/images/Tisort_1.png": "115b52a6e294322be5c31d6d159cdb72",
"assets/assets/images/Tisort_2.png": "bb759b5dcb4afb85acb338e2d130b4c6",
"assets/assets/images/Tisort_3.png": "7b03b8b4e161d194583da3382c318a3d",
"assets/assets/images/Tisort_4.png": "e76d279227e0456a0eff0c62c9e0d1ae",
"assets/assets/images/VidaveDubelSeti_1.png": "2c85c52e8fd4be60a5a44640aa998e82",
"assets/assets/images/VidaveDubelSeti_2.png": "da2e34a3eed6936163491330ce6f03cb",
"assets/assets/images/VidaveDubelSeti_3.png": "42a89b09b4713761117513438525b9a1",
"assets/assets/images/Yapistirici_1.png": "4fb316f5d03a1ad3d21a497057475bda",
"assets/assets/images/Yapistirici_2.png": "95bf00ba2366b1abb1c747dea0752ec0",
"assets/assets/images/Yapistirici_3.png": "bb8de6a9230a92f59d35f2b1a7e3f861",
"assets/assets/images/Yavuz_Logo.jpg": "704eee5e22a639afae44d5ea07c09369",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b6b0c364617544b31b39770861f18390",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7136153751a12cf92eb302875582c91a",
"/": "7136153751a12cf92eb302875582c91a",
"main.dart.js": "7fa16fc0bb570b15a06bf2d9298c1373",
"manifest.json": "d2c2e8ee9e6be325806b11acf17f2e71",
"version.json": "bcaf5ce06937712e710545942300d009"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
