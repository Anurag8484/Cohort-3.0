'use client'

import { signIn, signOut, useSession } from "next-auth/react"

export function NavBar(){
    const session = useSession();
    
return(

        
    <div className="border-b-1 flex justify-between ">
<span>BookMyTime </span>
<div>
    {session.status === "authenticated" ?
    <button onClick={()=>{signOut()}}>Log Out</button>
    :
    <button onClick={()=>{signIn()}}>Log In</button>
}

</div>
</div>

)
}