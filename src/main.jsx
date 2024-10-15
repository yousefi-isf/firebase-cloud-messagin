import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// console.log()
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register(`${import.meta.env.VITE_ROOT}/firebase-messaging-sw.js`)
    .then((registration) => {
      console.log(
        "Service Worker registration successful with scope: ",
        registration.scope
      );
    })
    .catch((err) => {
      console.error("Service Worker registration failed: ", err);
    });
}
