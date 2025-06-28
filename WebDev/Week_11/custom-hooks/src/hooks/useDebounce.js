import { useEffect, useRef } from "react";

export function useDebounce(func){

    const currentClock = useRef();

    const fn = () =>{
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(func,200)
    }

return fn

}