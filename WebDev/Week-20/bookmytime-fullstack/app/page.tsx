// 'use client'
import { getServerSession } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { NavBar } from "./components/Navbar";



export default async function Home(){
  const session =  await getServerSession();
  
  return (
    <div>
      <NavBar />
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      {/* {session && (
        <button onClick={() => signOut()}>Log Out</button>
        )}
        {!session && (
          <button onClick={() => signIn()}>Log In</button>
          )}
          <br /> */}
      {JSON.stringify(session)}
    </div>
          </div>
  );
}
