import { useEffect, useState } from "react";
import "./App.css";
import { requestForToken, onMessageListener, messaging } from "../firebase";
import { onMessage } from "firebase/messaging";
function App() {
  const [temp , setTemp] = useState(false) 
  const [token , setToken] = useState("")
  async function setup(){
    const push = await requestForToken();
    setToken(push)
    // console.log(push)
    onMessage(messaging, (pay) => {
      console.log(pay);
    });
  }
  useEffect(() => {
    setup()
    // setTemp((prev)=> !prev)
    // return ()=>{setToken("")}
  }, []);
  return <>{token}</>;
}

export default App;
