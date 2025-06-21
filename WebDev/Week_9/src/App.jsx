import { useEffect, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  function increase(){
    setCount(c=>c+1);
  }
  function decrease(){
    setCount2(c=>c-1);
  }

  return <div>
     <Counter count={count} count2={count2} />
        <button onClick={increase}> Increase Counter 1</button>
        <button onClick={decrease}> Decrease Counter 2</button>

      </div>
}


function Counter(props){
  useEffect(function(){

    console.log('mount')
    return(function(){
      console.log('Unmount')
    })
  }, []);

  useEffect(function(){
    console.log("Counter has changed");
  },[props.count, props.count2])

  
  return(
    <div>
      Counter {props.count}!
      Counter2 {props.count2}!
      </div>
  )
}

export default App
