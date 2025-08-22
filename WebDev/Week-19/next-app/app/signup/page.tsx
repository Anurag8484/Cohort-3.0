"use client";

import axios from "axios";
import { useRef, useState } from "react";

export default function Signup() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border py-12 px-7  justify-between gap-10 rounded-lg flex-col items-center flex">
        <div className="flex flex-col gap-4 ">
          <input
            type="text"
            placeholder="Username"
            className=" rounded-lg border-neutral-500 p-2 border-1"
            ref={usernameRef}
          />
          <input
            type="password"
            className="p-2 border-1 rounded-lg border-neutral-500"
            placeholder="Password"
            ref={passwordRef}
          />
        </div>
        <button
          className="border-1 py-1 px-2 rounded-lg cursor-pointer hover:scale-110 duration-200"
          onClick={() => {
            axios.post("http://localhost:3000/api/v1/signup", {
              username: usernameRef.current?.value,
              password: passwordRef.current?.value,
            });
          }}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
