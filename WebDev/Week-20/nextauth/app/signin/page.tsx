"use client"

import axios from "axios"

export default function(){
    return(
        <div>
            <h1>Sign In</h1>
            <br />
            Username
            <input type="text" />
            <br />
            Password
            <input type="text" />
            <br />
            <button onClick={async ()=>{
                const res = await axios.post("http://localhost:3000/api/signin",{
                    username:"anurag",
                    password:"1234"
                })

                localStorage.setItem("token",res.data.token)
            }}>Submit</button>
        </div>
    )
}