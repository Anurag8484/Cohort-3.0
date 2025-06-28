import { useState } from "react";
import "./App.css"

// a custom hook

function useCounter(){
  const [count,setCount] = useState(0);
  
  function increaseCount(){
    setCount(count+1)
  }
  return {
    count,
    increaseCount
  }
}

function App(){
  return(
    <div>
    <Counter />
    <br /><br />
    <Counter2 />
  </div>
)
}

function Counter(){
  const {count,increaseCount} = useCounter();
  return(
    <div>
    <button onClick={increaseCount}>Increase {count}</button>
  </div>)
}
function Counter2(){
  const {count,increaseCount} = useCounter();
  return(
    <div>
    <button onClick={increaseCount}>Increase of CounterT---- {count}</button>
  </div>)
}


export default App;