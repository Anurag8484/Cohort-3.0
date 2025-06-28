import { useState,useEffect } from "react";
import "./App.css"
import { usePostTitle,useFetch } from "./hooks/useFetch";
import { usePrev } from "./hooks/usePrev";
import { useDebounce } from "./hooks/useDebounce";

// a custom hook

function App(){
  const [currentPost, setCurrentPost] =useState(1)
  // const { finalData,loading } = useFetch("https://jsonplaceholder.typicode.com/posts/"+currentPost);

  function sendData(){
    fetch("api.amazon.com/search/")
  }


  const debouncedFn = useDebounce(sendData)




  return(
    <>
    <input type="text" onChange={debouncedFn} />;
    </>
  )
  
  


//   if (loading){
//     return(
//       <div>
//         Loading.....
//       </div>
//     )
//   }


// return (
// <div>
//   <button onClick={()=>setCurrentPost(1)}>1</button>
//   <button onClick={()=>setCurrentPost(2)}>2</button>
//   <button onClick={()=>setCurrentPost(3)}>3</button>
//   <br /><br /><br /><br />
//   {JSON.stringify(finalData)}
// </div>

// )



// const [state,setState] = useState(0);

// const prev = usePrev(state);
// return(
//   <>
//   <p>{state}</p>
//   <button onClick={()=>{setState((curr)=>curr+1)}}>Click me</button>
//   <p>The prev value: {prev}</p>
//   </>
// )





}




export default App;