import { useState } from "react";

// a

function App(){
  const [count,setCount] = useState(0);

  function increaseCount(){
    setCount(count+1)
  }

return(
  <div>
    <button onClick={increaseCount}>Increase {count}</button>
  </div>
)

}


export default App;