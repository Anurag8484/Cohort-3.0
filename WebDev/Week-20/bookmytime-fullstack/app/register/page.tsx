"use client";

import { prisma } from "@/prisma/prisma";
import axios from "axios";
import { redirect } from "next/navigation";
import { useRef } from "react";

 export default  function Register() {
    const nameRef = useRef<HTMLInputElement>(null)
    const passRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

     return (
       <div>
         Username
         <input type="text" ref={nameRef} />
         <br />
         Passowrd
         <input type="password" ref={passRef} />
         <br />
         Email
         <input type="text" ref={emailRef} />
         <br />
         <br />
         <button onClick={ async() => {
            await axios.post("http://localhost:3000/api/register",{
                name: nameRef.current?.value,
                email: emailRef.current?.value,
                password: passRef.current?.value
            })
            redirect('/api/auth/signin')
         }}>Submit</button>
       </div>
     );
  }

