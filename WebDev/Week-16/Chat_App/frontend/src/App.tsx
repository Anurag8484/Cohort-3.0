import { useEffect, useRef, useState } from "react";

export default function App() {
  
  const [messages, setMessages] = useState(["Hi There","hello"]);
  const inputRef = useRef<HTMLInputElement>(null);
  const wsRef = useRef<WebSocket>(null);
  const sendMsg = ()=>{

    const message = inputRef.current?.value
    console.log(message);
    wsRef.current?.send(JSON.stringify({
    
      type: "chat",
      payload:{
        message:message
      }
    }))


  }

  useEffect(()=>{

    const ws =  new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) =>{
      setMessages(m=>[...m,event.data]);
    };
    wsRef.current = ws;
    ws.onopen = () => {
      ws.send(JSON.stringify({
        type:"join",
        payload:{
          roomId:"6AC954"
        }
      }))
    }
    return () => {
      ws.close();
    }
  },[])

  
  return (
    <div className=" h-screen flex items-center justify-center bg-black text-neutral-300">
      <div className="outline-[0.5px] p-5 rounded-xl flex flex-col min-w-96  gap-2 ">
        <div className=" rounded-xl flex justify-between font-[500] tracking-tight outline-neutral-700 outline-[0.1px] p-4">
          <span className="text-[13px]">Room Id:</span>
          <span className="text-[13px] text-green-500"> 6AC954 </span>
        </div>
        <div className="rounded-xl flex flex-col items-end  outline-neutral-700 outline-[0.1px] p-4 min-h-90 max-h-200 my-5">
          {messages.map((message) => (
            <div className="bg-white p-1 rounded-md text-[14px] my-1 text-black">
              {message}
            </div>
          ))}
        </div>
        <div className=" flex justify-end">
          <input
            type="text"
            title="msg"
            ref={inputRef}
            placeholder="Message"
            className=" outline-neutral-300 outline-[0.1px] p-2 rounded-lg"
          />
        </div>
        <div
          onClick={() => sendMsg()}
          className="rounded-xl text-center font-[500] text-black opacity-70 hover:opacity-100 duration-200 cursor-pointer  bg-white px-4 py-2"
        >
          Send Message
        </div>
      </div>
    </div>
  );
}
