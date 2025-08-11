import { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {

  const [socket, setSocket] = useState();

  //@ts-ignore
  const inputRef = useRef();

  
  function sendMsg() {
    if (!socket){
      return;
    }

    //@ts-ignore
    socket.send("ping")
  }

  useEffect(() => {

    const ws = new WebSocket("ws://localhost:8080");
    setSocket(ws)
    ws.onmessage = (event) =>{
      alert(event.data);

      ws.onopen = () => console.log("✅ WebSocket connected");
      ws.onerror = (err) => console.error("❌ WebSocket error", err);
      ws.onclose = () => console.warn("⚠️ WebSocket closed");
    }
  }, []);

  return (
    <div>
      <input type="text" placeholder="Message..." />
      <br />
      <br />
      <button onClick={sendMsg} type="button">
        Send
      </button>
    </div>
  );
}
