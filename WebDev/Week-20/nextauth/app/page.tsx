import { getServerSession } from "next-auth";
import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession();
  return( <div>

    {JSON.stringify(session)}
  </div>
  );
}


// function OtherHome(){
//   const session = useSession();

//   return(

//     <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">

//       {session.status === "authenticated" && <button onClick={()=>signOut()}>Log Out</button>}
//       {session.status !== "authenticated" && <button onClick={()=>signIn()}>Log In</button>}
//       <br />
//       {JSON.stringify(session)}
      
//     </div>
//   )
// }
