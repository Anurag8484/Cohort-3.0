import { useEffect, useRef, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { generateRandomString } from "./tools/generateRandom";
import copy from "copy-to-clipboard";

export default function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const [showTooltip, setShowTooltip] = useState(false);
  const [roomId, setRoomId] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const roomIdRef = useRef<HTMLInputElement>(null);

  const wsRef = useRef<WebSocket>(null);
  const sendMsg = () => {
    const message = inputRef.current?.value;
    wsRef.current?.send(
      JSON.stringify({
        type: "chat",
        payload: {
          message: message,
        },
      })
    );
  };

  function showTooltipMsg() {
    setShowTooltip(true);

    setTimeout(() => {
      setShowTooltip(false);
    }, 5000);
  }

  const createRoom = () => {
    const RoomId = generateRandomString();
    copy(RoomId);
    showTooltipMsg();
  };

  const joinRoom = () => {
    const roomId = roomIdRef.current?.value;
    wsRef.current?.send(
      JSON.stringify({
        type: "join",
        payload: {
          roomId: roomId,
        },
      })
    );
    if (roomId){
      setRoomId(roomId);
    }
  };

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080");
    ws.onmessage = (event) => {
      setMessages((m) => [...m, event.data]);
    };
    wsRef.current = ws;

    if(roomId){
      ws.onopen = () => {
        ws.send(
          JSON.stringify({
            type: "join",
            payload: {
              roomId: "6AC954",
            },
          })
        );
      };
    }

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div className=" relative h-screen flex items-center justify-center bg-black text-neutral-300">
      {showTooltip ? (
        <div className="absolute top-5 backdrop-blur-3xl outline-[0.5px] bg-neutral-700/80 justify-between flex p-4 rounded-md text-neutral-400 outline-neutral-700">
          <span className="tracking-tight  text-[14px] font-[500]">
            Room Id Copied to clipboard
          </span>
          <IoCloseOutline
            onClick={() => setShowTooltip(false)}
            className="-translate-y-3 translate-x-3 hover:scale-110 cursor-pointer hover:text-white duration-150 "
          />
        </div>
      ) : (
        ""
      )}
      <div className="outline-[0.5px] p-5 rounded-xl flex flex-col min-w-96  gap-2 ">
        <div
          onClick={() => createRoom()}
          className="rounded-xl text-center font-[500] text-black opacity-70 hover:opacity-100 duration-200 cursor-pointer  bg-white px-4 py-2"
        >
          Create a Room
        </div>
        <div className="flex justify-between items-center gap-5  p-2 rounded-lg">
          <span
            onClick={() => joinRoom()}
            className="rounded-xl text-center font-[500] text-black opacity-70 hover:opacity-100 duration-200 cursor-pointer  bg-white px-4 py-2"
          >
            Join Room
          </span>
          <input
            type="text"
            ref={roomIdRef}
            title="room"
            className="outline-neutral-300 outline-[0.1px] p-2 rounded-lg"
          />
        </div>
        <div className=" rounded-xl flex justify-between font-[500] tracking-tight p-4">
          <span className="text-[13px]">Room Id:</span>
          <span
            className={`text-[13px]    ${
              roomId ? "text-green-500" : "text-red-500"
            }  `}
          >
            {roomId ? roomId : "Not in Room"}
          </span>
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
          className="rounded-xl text-center font-[500] focus:bg-red-400 focus: text-black opacity-70 hover:opacity-100 duration-200 cursor-pointer  bg-white px-4 py-2"
        >
          Send Message
        </div>
      </div>
    </div>
  );
}
