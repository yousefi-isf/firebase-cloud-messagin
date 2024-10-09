import { useEffect, useState } from "react";
import "./App.css";
import { requestForToken, onMessageListener, messaging } from "../firebase";
import { onMessage } from "firebase/messaging";
function App() {
  useEffect(() => {
    requestForToken();
    onMessage(messaging, (pay) => {
      console.log(pay);
    });
  }, []);
  return <></>;
}

export default App;
