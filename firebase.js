import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyAbudeYDjWTKTZ4SiKhdwCCu-2yYG74Y6s",
  authDomain: "maranko-push.firebaseapp.com",
  projectId: "maranko-push",
  storageBucket: "maranko-push.appspot.com",
  messagingSenderId: "622126429658",
  appId: "1:622126429658:web:2d249212786c8580bb7ce3",
  measurementId: "G-FP27CF9GW2",
};

// Initilize firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

async function requestForToken() {
  try {
    const res_req = await Notification.requestPermission();
    const res = await getToken(messaging, {
      vapidKey:
        "BHcJDx8CiboadHacJnSoNsXKg8q29hUEz2myU6EVgjG0ty8qxC9eS16HeVmiadDdpQwIobFgl0CvW14WS65d-oQ",
    });
    if (res) {
      console.log("current token for client: ", res);
      return res;
      //   ارسال توکن به سرور یا ذخیره‌سازی آن
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
      return ""
    }
  } catch (err) {
    console.log("An error occurred while retrieving token. ", err);
    return ""
  }
}

const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });
export { requestForToken, onMessageListener , messaging};
