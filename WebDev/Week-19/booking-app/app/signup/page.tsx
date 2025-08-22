'use client'
import { useRef } from "react";
import Input from "../components/Input";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Signup(){

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const router  = useRouter();

    
    return (
      <div className="flex h-screen w-screen  justify-center items-center">
        <div className="border-1 border-neutral-700 min-h-60  py-6 justify-between shadow-lg  px-5 flex flex-col text-center rounded-lg">
          <h1 className="text-2xl ">Sign Up</h1>
          <div className="flex flex-col gap-4   my-5 ">
            <Input ref={nameRef} type={"text"} placeholder={"Name"} />
            <Input ref={emailRef} type={"text"} placeholder={"Email"} />
            <Input
              ref={passwordRef}
              type={"password"}
              placeholder={"Password"}
            />
          </div>
            <div>
              <button className=" bg-white text-black  py-1 px-2 rounded-lg cursor-pointer"
              onClick={async()=>{
                await axios.post("http://localhost:3000/api/user/signup",{
                  name:nameRef.current?.value,
                  password:passwordRef.current?.value,
                  email:emailRef.current?.value,
                });
                router.push("/signin")
              }}>
                Sign Up
              </button>
            </div>
        </div>
      </div>
    );
}


