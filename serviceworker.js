// Service Worker का नाम और संस्करण
const CACHE_NAME = 'html-css-js-tutor-v1';

// किन फ़ाइलों को कैश करना है (आपके ऐप के मुख्य एसेट्स)
const urlsToCache = [
  '/', // रूट URL
  '/index.html', // मुख्य HTML फ़ाइल
  '/manifest.json', // मैनिफेस्ट फ़ाइल
  '/serviceworker.js', // सर्विस वर्कर खुद
  'https://cdn.tailwindcss.com', // टेलविंड CSS CDN
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' // Google फ़ॉन्ट्स
  // यहाँ आपको अपने सभी कस्टम आइकॉन इमेज के URLs को जोड़ना होगा,
  // जैसे 'https://placehold.co/192x192/a78bfa/ffffff?text=WT'
];

// इंस्टॉल इवेंट: सभी ज़रूरी एसेट्स को कैश करें
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('कैश खोला गया');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('इंस्टॉल के दौरान कैश करने में विफल:', error);
      })
  );
});

// फ़ेच इवेंट: नेटवर्क रिक्वेस्ट को इंटरसेप्ट करें
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // अगर कैश में रिस्पॉन्स है, तो उसे रिटर्न करें
        if (response) {
          return response;
        }
        // अगर कैश में नहीं है, तो नेटवर्क से फ़ेच करें
        return fetch(event.request)
          .then((response) => {
            // अगर रिस्पॉन्स वैध है, तो उसे कैश करें और रिटर्न करें
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          })
          .catch(() => {
            // अगर नेटवर्क भी उपलब्ध नहीं है और कैश में भी नहीं है, तो ऑफ़लाइन फ़ॉलबैक पेज दिखा सकते हैं
            // अभी के लिए, यह रिक्वेस्ट को फ़ेल होने देगा।
            // return caches.match('/offline.html'); // अगर आपके पास offline.html पेज है
          });
      })
  );
});

// एक्टिवेट इवेंट: पुराने कैश को साफ़ करें
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // पुराने कैश को डिलीट करें
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
