import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import "./App.css"
import { useState, useEffect, memo } from "react";
import { counterAtom, evenSelector } from "./store/atoms/counter";
function App(){
  return <div>
    <RecoilRoot>

    <Buttons />
    <Counter />
    <IsEven />
    </RecoilRoot>
  </div>
};


function Buttons(){
  const setCount =useSetRecoilState(counterAtom)
  return <div>
    <button onClick={()=>setCount(c=>c+2)}>Increase</button>
    <button onClick={()=>setCount(c=>c-1)}>Decrease</button>
  </div>
}


function Counter(){
  const count = useRecoilValue(counterAtom);

  return <div>
    {count}
  </div>
};


function IsEven(){
  const even = useRecoilValue(evenSelector)

  return <div>
    {even?"even":"odd"}
  </div>
}


export default App;