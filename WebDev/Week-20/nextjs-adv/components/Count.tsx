"use client"

import { useState } from "react"


export function Button(){
    const [count,setCount] = useState(0);


    return (
        <div>
            <button onClick={()=>{setCount(c=>c+1)}}>
                Increase ({count})
            </button>
        </div>
    )
}