importScripts(
  "https://www.gstatic.com/firebasejs/10.14.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.14.0/firebase-messaging-compat.js"
);

// Initialize Firebase in the service worker
firebase.initializeApp({
  apiKey: "AIzaSyAbudeYDjWTKTZ4SiKhdwCCu-2yYG74Y6s",
  authDomain: "maranko-push.firebaseapp.com",
  projectId: "maranko-push",
  storageBucket: "maranko-push.appspot.com",
  messagingSenderId: "622126429658",
  appId: "1:622126429658:web:2d249212786c8580bb7ce3",
  measurementId: "G-FP27CF9GW2",
});

// Initialize Firebase Messaging
const messaging = firebase.messaging();

// Handle background message
messaging.onBackgroundMessage((payload) => {
  console.log("[Service Worker] Background message received:", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/firebase-logo.png", // Customize your notification icon
  };

  // Show notification
  self.registration.showNotification(notificationTitle, notificationOptions);
});

// // Optional: Handle notification click events
// self.addEventListener('notificationclick', function(event) {
//   console.log('[Service Worker] Notification click Received.');

//   event.notification.close();

//   // This is where you can handle what happens when the user clicks the notification
//   event.waitUntil(
//     clients.openWindow('https://yourappurl.com') // Replace with the URL you want to open
//   );
// });
