import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <Counter></Counter>

    </div>
  )

}
// New Component
function Counter(){

  const [count, setCount] = useState(0);
  function increaseCount(){
    setCount(count+1);
  }
  
  function decreaseCount(){
    if (count >0){
      setCount(count-1);
    }else{
      alert("Negatives are not allowed")
    }
  }
  function resetCount(){
    setCount(0);
  }

  useEffect(function(){
    setInterval(function(){
      setCount(count => count+1);
    },1000)
  },[]);


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount} > Increase Count</button>
      <button onClick={decreaseCount}  > Decrease Count</button>
      <br />
      <button onClick={resetCount}  > Reset Count</button>
    </div>
  )
}

export default App
