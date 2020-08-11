'use strict';

const CACHE_NAME = 'rejlkovi-v4.0';

const FILES_TO_CACHE = [
  '/',
  '/index.html',
  '/Nuda_v_Brne.pdf',
  '/manifest.webmanifest',
  '/css/bootstrap.min.css',
  '/css/magnific-popup.css',
  '/css/nice-select.css',
  '/css/slicknav.css',
  '/css/style.css',
  '/fonts/muli-300-latin.woff2',
  '/fonts/muli-300-latin-ext.woff2',
  '/fonts/muli-400-latin.woff2',
  '/fonts/muli-400-latin-ext.woff2',
  '/fonts/muli-500-latin.woff2',
  '/fonts/muli-500-latin-ext.woff2',
  '/fonts/muli-600-latin.woff2',
  '/fonts/muli-600-latin-ext.woff2',
  '/fonts/petit-formal-script-latin.woff2',
  '/fonts/petit-formal-script-latin-ext.woff2',
  '/img/appointment/flower-bottom.png',
  '/img/appointment/flower-top.png',
  '/img/banner/bg.jpg',
  '/img/banner/bg-mobil.jpg',
  '/img/banner/flower-bottom.png',
  '/img/banner/flower-top.png',
  '/img/banner/flowers.png',
  '/img/banner/ornaments.png',
  '/img/counter_bg/counter_bg.png',
  '/img/gallery/1.jpg',
  '/img/gallery/2.jpg',
  '/img/gallery/3.jpg',
  '/img/gallery/4.jpg',
  '/img/gallery/5.jpg',
  '/img/gallery/6.jpg',
  '/img/program_details/1.jpg',
  '/img/program_details/2.jpg',
  '/img/program_details/3.jpg',
  '/img/program_details/4.jpg',
  '/img/program_details/ornaments.png',
  '/img/story/market.jpg',
  '/img/story/tom.jpg',
  '/img/icon/icon-72x72.png',
  '/img/icon/icon-96x96.png',
  '/img/icon/icon-128x128.png',
  '/img/icon/icon-144x144.png',
  '/img/icon/icon-152x152.png',
  '/img/icon/icon-192x192.png',
  '/img/favicon.png',
  '/img/logo.png',
  '/js/jquery-1.12.4.min.js',
  '/js/jquery.ajaxchimp.min.js',
  '/js/jquery.countdown.min.js',
  '/js/jquery.magnific-popup.min.js',
  '/js/jquery.slicknav.min.js',
  '/js/nice-select.min.js',
  '/js/main.js',
  '/js/install.js'
];

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );

  self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      }));
    })
  );

  self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(evt.request)
        .then((response) => {
          return response || fetch(evt.request);
        });
    })
  );
});
